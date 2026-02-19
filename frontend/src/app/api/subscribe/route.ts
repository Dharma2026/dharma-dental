// app/api/subscribe/route.ts
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
    const { email } = await req.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Valid email is required.' }, { status: 400 });
    }

    // ── 1. Notify you of new subscriber ──────────────────────────────────
    await transporter.sendMail({
      from: `"Dharma Dental Website" <${process.env.GMAIL_USER}>`,
      to: process.env.CONTACT_RECEIVER_EMAIL,
      subject: `New Newsletter Subscriber — ${email}`,
      html: `
        <div style="font-family: sans-serif; max-width: 500px; margin: 0 auto; background: #f8fafc; padding: 28px; border-radius: 12px;">
          <div style="background: #0f172a; border-radius: 10px; padding: 20px; text-align: center; margin-bottom: 20px;">
            <h1 style="color: #facc15; font-size: 22px; margin: 0; font-weight: 900;">Dharma Dental</h1>
            <p style="color: #94a3b8; font-size: 11px; margin: 6px 0 0; text-transform: uppercase; letter-spacing: 2px;">New Subscriber</p>
          </div>
          <div style="background: #fff; border-radius: 10px; padding: 20px; border: 1px solid #e2e8f0;">
            <p style="margin: 0; color: #475569; font-size: 14px;">A new user subscribed to your newsletter:</p>
            <p style="margin: 12px 0 0; color: #0f172a; font-size: 18px; font-weight: 800;">${email}</p>
          </div>
        </div>
      `,
    });

    // ── 2. Send welcome email to subscriber ───────────────────────────────
    await transporter.sendMail({
      from: `"Dharma Dental" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: `Welcome to Dharma Dental! 🦷`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background: #f8fafc; padding: 32px; border-radius: 12px;">
          <div style="background: #0f172a; border-radius: 12px; padding: 32px; margin-bottom: 24px; text-align: center;">
            <h1 style="color: #facc15; font-size: 28px; margin: 0; font-weight: 900;">Dharma Dental</h1>
            <p style="color: #94a3b8; font-size: 12px; margin: 8px 0 0; text-transform: uppercase; letter-spacing: 2px;">Excellence in Care</p>
          </div>
          <div style="background: #ffffff; border-radius: 12px; padding: 28px; border: 1px solid #e2e8f0; margin-bottom: 20px;">
            <h2 style="color: #0f172a; font-size: 22px; font-weight: 800; margin: 0 0 14px;">You're subscribed! 🎉</h2>
            <p style="color: #475569; font-size: 15px; line-height: 1.7; margin: 0 0 16px;">
              Thank you for subscribing to Dharma Dental. You'll receive:
            </p>
            <ul style="color: #475569; font-size: 14px; line-height: 2; padding-left: 20px; margin: 0 0 20px;">
              <li>🦷 Expert dental health tips and guides</li>
              <li>🎁 Exclusive offers and discounts</li>
              <li>📅 Appointment reminders and updates</li>
              <li>✨ Latest treatments and technology news</li>
            </ul>
            <p style="color: #475569; font-size: 14px; line-height: 1.7; margin: 0;">
              Ready to book your first appointment? Our team is available Mon–Sat, 9AM–8PM.
            </p>
          </div>
          <div style="text-align: center; margin-bottom: 24px;">
            <a href="tel:+919169269369" style="display: inline-block; background: #facc15; color: #000; font-weight: 900; font-size: 14px; padding: 14px 32px; border-radius: 50px; text-decoration: none; letter-spacing: 1px;">
              📞 Book Now: +91 91692 69369
            </a>
          </div>
          <div style="background: #fff; border-radius: 12px; padding: 20px; border: 1px solid #e2e8f0; margin-bottom: 20px;">
            <p style="margin: 0 0 12px; color: #64748b; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px;">Our Clinics</p>
            <p style="margin: 4px 0; color: #475569; font-size: 13px;">📍 Sarjapur, Bengaluru — +91 923 695 2369</p>
            <p style="margin: 4px 0; color: #475569; font-size: 13px;">📍 Vanasthalipuram, Hyderabad — +91 903 005 2369</p>
            <p style="margin: 4px 0; color: #475569; font-size: 13px;">📍 Kondapur, Hyderabad — +91 903 006 2369</p>
            <p style="margin: 4px 0; color: #475569; font-size: 13px;">📍 Whitefield, Bengaluru — +91 923 888 2369</p>
          </div>
          <p style="text-align: center; color: #94a3b8; font-size: 11px; margin: 0;">
            You received this because you subscribed at dharmadental.com<br/>
            To unsubscribe, reply with "Unsubscribe".
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true }, { status: 200 });

  } catch (error) {
    console.error('Subscribe route error:', error);
    return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 500 });
  }
}