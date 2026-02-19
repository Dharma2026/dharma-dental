// app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, email, treatment, location, message, captchaToken } = body;

    if (!name || !phone || !captchaToken) {
      return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
    }

    // ── Debug: log exactly what we're sending to Google ──────────────────
    console.log('--- reCAPTCHA Debug ---');
    console.log('Token length:', captchaToken?.length);
    console.log('Token first 30 chars:', captchaToken?.substring(0, 30));
    console.log('Secret key length:', process.env.RECAPTCHA_SECRET_KEY?.length);
    console.log('Secret key first 10 chars:', process.env.RECAPTCHA_SECRET_KEY?.substring(0, 10));
    console.log('Secret key starts with 6L:', process.env.RECAPTCHA_SECRET_KEY?.startsWith('6L'));

    const params = new URLSearchParams({
      secret: process.env.RECAPTCHA_SECRET_KEY!,
      response: captchaToken,
    });

    console.log('URLSearchParams body length:', params.toString().length);

    const verifyRes = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: params,
    });

    const verifyData = await verifyRes.json();
    console.log('Full Google response:', JSON.stringify(verifyData));
    console.log('--- End Debug ---');

    if (!verifyData.success) {
      return NextResponse.json(
        { error: 'CAPTCHA verification failed.', codes: verifyData['error-codes'] },
        { status: 400 }
      );
    }

    // ── Send email via Gmail ──────────────────────────────────────────────
    await transporter.sendMail({
      from: `"Dharma Dental Website" <${process.env.GMAIL_USER}>`,
      to: process.env.CONTACT_RECEIVER_EMAIL,
      replyTo: email || process.env.GMAIL_USER,
      subject: `New Appointment Request — ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background: #f8fafc; padding: 32px; border-radius: 12px;">
          <div style="background: #0f172a; border-radius: 12px; padding: 24px; margin-bottom: 24px; text-align: center;">
            <h1 style="color: #facc15; font-size: 24px; margin: 0; font-weight: 900;">Dharma Dental</h1>
            <p style="color: #94a3b8; font-size: 12px; margin: 6px 0 0; text-transform: uppercase; letter-spacing: 2px;">New Appointment Request</p>
          </div>
          <div style="background: #ffffff; border-radius: 12px; padding: 24px; border: 1px solid #e2e8f0;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 13px; font-weight: 600; width: 35%;">👤 Name</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a; font-size: 14px; font-weight: 700;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 13px; font-weight: 600;">📞 Phone</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a; font-size: 14px; font-weight: 700;">
                  <a href="tel:${phone}" style="color: #2563eb; text-decoration: none;">${phone}</a>
                </td>
              </tr>
              ${email ? `<tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 13px; font-weight: 600;">✉️ Email</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a; font-size: 14px; font-weight: 700;">
                  <a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a>
                </td>
              </tr>` : ''}
              ${treatment ? `<tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 13px; font-weight: 600;">🦷 Treatment</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a; font-size: 14px; font-weight: 700;">${treatment}</td>
              </tr>` : ''}
              ${location ? `<tr>
                <td style="padding: 12px 0; ${message ? 'border-bottom: 1px solid #f1f5f9;' : ''} color: #64748b; font-size: 13px; font-weight: 600;">📍 Clinic</td>
                <td style="padding: 12px 0; ${message ? 'border-bottom: 1px solid #f1f5f9;' : ''} color: #0f172a; font-size: 14px; font-weight: 700;">${location}</td>
              </tr>` : ''}
              ${message ? `<tr>
                <td style="padding: 12px 0; color: #64748b; font-size: 13px; font-weight: 600; vertical-align: top;">💬 Message</td>
                <td style="padding: 12px 0; color: #0f172a; font-size: 14px; line-height: 1.6;">${message}</td>
              </tr>` : ''}
            </table>
          </div>
          <div style="margin-top: 20px; padding: 16px; background: #fefce8; border: 1px solid #fde047; border-radius: 8px;">
            <p style="margin: 0; color: #854d0e; font-size: 13px; font-weight: 600;">⏰ Please respond within 2–4 hours to confirm the appointment.</p>
          </div>
          <p style="text-align: center; color: #cbd5e1; font-size: 11px; margin-top: 24px;">Sent from the Dharma Dental website contact form.</p>
        </div>
      `,
    });

    // ── 4. Send confirmation email to user (if email provided) ──────────
    if (email) {
      await transporter.sendMail({
        from: `"Dharma Dental" <${process.env.GMAIL_USER}>`,
        to: email,
        subject: `We received your request, ${name.split(' ')[0]}! — Dharma Dental`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background: #f8fafc; padding: 32px; border-radius: 12px;">

            <div style="background: #0f172a; border-radius: 12px; padding: 32px; margin-bottom: 24px; text-align: center;">
              <h1 style="color: #facc15; font-size: 28px; margin: 0; font-weight: 900; letter-spacing: -0.5px;">Dharma Dental</h1>
              <p style="color: #94a3b8; font-size: 12px; margin: 8px 0 0; text-transform: uppercase; letter-spacing: 2px;">Excellence in Care</p>
            </div>

            <div style="background: #ffffff; border-radius: 12px; padding: 28px; border: 1px solid #e2e8f0; margin-bottom: 20px;">
              <h2 style="color: #0f172a; font-size: 20px; font-weight: 800; margin: 0 0 12px;">
                Hi ${name.split(' ')[0]}, we got your request! 👋
              </h2>
              <p style="color: #475569; font-size: 15px; line-height: 1.7; margin: 0 0 20px;">
                Thank you for reaching out to Dharma Dental. Our team has received your appointment request and will contact you within <strong>2–4 hours</strong> to confirm your slot.
              </p>

              <div style="background: #f8fafc; border-left: 4px solid #facc15; border-radius: 0 8px 8px 0; padding: 16px 20px; margin-bottom: 20px;">
                <p style="margin: 0; color: #64748b; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 10px;">Your Request Summary</p>
                ${treatment ? `<p style="margin: 4px 0; color: #0f172a; font-size: 14px;">🦷 <strong>Treatment:</strong> ${treatment}</p>` : ""}
                ${location ? `<p style="margin: 4px 0; color: #0f172a; font-size: 14px;">📍 <strong>Clinic:</strong> ${location}</p>` : ""}
                <p style="margin: 4px 0; color: #0f172a; font-size: 14px;">📞 <strong>We&apos;ll call you at:</strong> ${phone}</p>
              </div>

              <p style="color: #475569; font-size: 14px; line-height: 1.7; margin: 0;">
                If you need immediate assistance or want to reschedule, feel free to call us directly.
              </p>
            </div>

            <div style="text-align: center; margin-bottom: 24px;">
              <a href="tel:+919169269369" style="display: inline-block; background: #facc15; color: #000000; font-weight: 900; font-size: 14px; padding: 14px 32px; border-radius: 50px; text-decoration: none; letter-spacing: 1px;">
                📞 Call Us: +91 91692 69369
              </a>
            </div>

            <div style="background: #ffffff; border-radius: 12px; padding: 20px; border: 1px solid #e2e8f0; margin-bottom: 20px;">
              <p style="margin: 0 0 12px; color: #64748b; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px;">Our Clinics</p>
              <div style="display: grid; gap: 6px;">
                <p style="margin: 0; color: #475569; font-size: 13px;">📍 Sarjapur, Bengaluru — +91 923 695 2369</p>
                <p style="margin: 0; color: #475569; font-size: 13px;">📍 Vanasthalipuram, Hyderabad — +91 903 005 2369</p>
                <p style="margin: 0; color: #475569; font-size: 13px;">📍 Kondapur, Hyderabad — +91 903 006 2369</p>
                <p style="margin: 0; color: #475569; font-size: 13px;">📍 Whitefield, Bengaluru — +91 923 888 2369</p>
              </div>
            </div>

            <p style="text-align: center; color: #94a3b8; font-size: 11px; margin: 0;">
              You received this email because you submitted a request on the Dharma Dental website.<br/>
              Please do not reply to this email — call us directly for urgent matters.
            </p>

          </div>
        `,
      });
    }

    return NextResponse.json({ success: true }, { status: 200 });

  } catch (error) {
    console.error('Contact route error:', error);
    return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 500 });
  }
}