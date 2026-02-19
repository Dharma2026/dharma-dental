'use client';

// components/contact/AppointmentPopup.tsx
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ReCAPTCHA from 'react-google-recaptcha';
import {
  X,
  Send,
  CheckCircle2,
  Loader2,
  ChevronDown,
  Sparkles,
  CalendarDays,
  Phone,
} from 'lucide-react';

const TREATMENTS = [
  'General Consultation',
  'Teeth Whitening',
  'Invisalign / Braces',
  'Dental Implants',
  'Root Canal Therapy',
  'Cosmetic Veneers',
  'Emergency Dental Care',
];

const LOCATIONS = [
  'Sarjapur, Bengaluru',
  'Vanasthalipuram, Hyderabad',
  'Kondapur, Hyderabad',
  'Whitefield, Bengaluru',
];

interface FormState {
  name: string;
  phone: string;
  email: string;
  treatment: string;
  location: string;
  message: string;
}

const INITIAL_FORM: FormState = {
  name: '', phone: '', email: '', treatment: '', location: '', message: '',
};

const SCROLL_THRESHOLD = 400;
let globalDismissed = false;

// ─── Floating Input ───────────────────────────────────────────────────────────

function FloatingInput({
  label, type = 'text', required, value, onChange,
}: {
  label: string; type?: string; required?: boolean;
  value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  const [focused, setFocused] = useState(false);
  const lifted = focused || value.length > 0;
  return (
    <div className="relative">
      <input
        type={type} required={required} value={value} onChange={onChange}
        onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
        placeholder=" "
        className="peer w-full bg-white/5 border border-white/10 rounded-xl px-4 pt-5 pb-2 text-sm text-white placeholder-transparent focus:outline-none focus:border-yellow-400/60 focus:ring-1 focus:ring-yellow-400/30 transition-all duration-200"
      />
      <label className={`absolute left-4 transition-all duration-200 pointer-events-none ${lifted ? 'top-1.5 text-[10px] font-bold uppercase tracking-widest text-yellow-400' : 'top-3.5 text-sm text-slate-400'}`}>
        {label} {required && <span className="text-rose-400">*</span>}
      </label>
      <motion.div
        initial={{ scaleX: 0 }} animate={{ scaleX: focused ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute bottom-0 left-4 right-4 h-[1px] bg-gradient-to-r from-yellow-400 to-yellow-200 origin-left rounded-full"
      />
    </div>
  );
}

// ─── Floating Textarea ────────────────────────────────────────────────────────

function FloatingTextarea({
  label, value, onChange,
}: {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}) {
  const [focused, setFocused] = useState(false);
  const lifted = focused || value.length > 0;
  return (
    <div className="relative">
      <textarea
        rows={3}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholder=" "
        className="peer w-full bg-white/5 border border-white/10 rounded-xl px-4 pt-6 pb-2 text-sm text-white placeholder-transparent focus:outline-none focus:border-yellow-400/60 focus:ring-1 focus:ring-yellow-400/30 transition-all duration-200 resize-none"
      />
      <label className={`absolute left-4 transition-all duration-200 pointer-events-none ${lifted ? 'top-1.5 text-[10px] font-bold uppercase tracking-widest text-yellow-400' : 'top-3.5 text-sm text-slate-400'}`}>
        {label}
      </label>
    </div>
  );
}

// ─── Styled Select ────────────────────────────────────────────────────────────

function StyledSelect({
  label, options, value, onChange, required,
}: {
  label: string; options: string[]; value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void; required?: boolean;
}) {
  const [focused, setFocused] = useState(false);
  return (
    <div className="relative">
      <label className={`absolute left-4 z-10 pointer-events-none transition-all duration-200 ${value ? 'top-1.5 text-[10px] font-bold uppercase tracking-widest text-yellow-400' : 'top-3.5 text-sm text-slate-400'}`}>
        {label} {required && <span className="text-rose-400">*</span>}
      </label>
      <select
        required={required} value={value} onChange={onChange}
        onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
        className={`w-full bg-white/5 border rounded-xl px-4 pt-5 pb-2 text-sm appearance-none focus:outline-none transition-all duration-200 cursor-pointer ${focused ? 'border-yellow-400/60 ring-1 ring-yellow-400/30' : 'border-white/10'} ${!value ? 'text-slate-400' : 'text-white'}`}
      >
        <option value="" disabled className="bg-slate-900" />
        {options.map((o) => (
          <option key={o} value={o} className="bg-slate-900 text-white">{o}</option>
        ))}
      </select>
      <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
    </div>
  );
}

// ─── Main Popup ───────────────────────────────────────────────────────────────

export default function AppointmentPopup() {
  const [visible, setVisible] = useState(false);
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [captchaError, setCaptchaError] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (globalDismissed) return;
      if (window.scrollY > SCROLL_THRESHOLD) setVisible(true);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClose = () => {
    setVisible(false);
    globalDismissed = true;
  };

  const handleChange = (field: keyof FormState, value: string) =>
    setForm((p) => ({ ...p, [field]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!captchaToken) { setCaptchaError(true); return; }
    setSubmitting(true);
    setCaptchaError(false);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, captchaToken }),
      });
      if (!res.ok) throw new Error('Failed');
      setSubmitted(true);
    } catch {
      alert('Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
      recaptchaRef.current?.reset();
      setCaptchaToken(null);
    }
  };

  return (
    <AnimatePresence>
      {visible && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={handleClose}
          />

          {/* Centered popup */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              key="popup"
              initial={{ opacity: 0, y: 40, scale: 0.92 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.92 }}
              transition={{ type: 'spring', stiffness: 320, damping: 28 }}
              className="pointer-events-auto w-full max-w-md max-h-[90vh] flex flex-col"
            >
              {/* Glow ring */}
              <div className="absolute -inset-[1px] rounded-[2rem] bg-gradient-to-br from-yellow-400/40 via-blue-500/20 to-transparent blur-sm pointer-events-none" />

              <div className="relative rounded-[2rem] overflow-hidden bg-slate-950 border border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.7)] flex flex-col max-h-[90vh]">

                {/* Ambient blobs */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-yellow-400/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-36 h-36 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

                {/* ── Header (fixed) ── */}
                <div className="relative flex items-center justify-between px-6 py-4 border-b border-white/5 shrink-0">
                  <div className="flex items-center gap-3">
                    <motion.div
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ repeat: Infinity, duration: 3, delay: 1 }}
                      className="w-9 h-9 rounded-xl bg-yellow-400 flex items-center justify-center text-black shadow-lg shadow-yellow-400/30"
                    >
                      <CalendarDays size={18} />
                    </motion.div>
                    <div>
                      <p className="text-white font-black text-sm tracking-tight">Book Appointment</p>
                      <div className="flex items-center gap-1.5 mt-0.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                        <span className="text-green-400 text-[10px] font-bold">Available Today</span>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={handleClose}
                    className="w-8 h-8 rounded-xl bg-white/5 hover:bg-rose-500/20 flex items-center justify-center text-slate-400 hover:text-rose-400 transition-colors"
                  >
                    <X size={16} />
                  </button>
                </div>

                {/* ── Scrollable Body ── */}
                <div className="relative overflow-y-auto flex-1 px-6 pb-6 pt-5">
                  {submitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex flex-col items-center text-center py-8 gap-4"
                    >
                      <div className="w-16 h-16 rounded-full bg-green-500/15 border border-green-500/30 flex items-center justify-center">
                        <CheckCircle2 size={30} className="text-green-400" />
                      </div>
                      <div>
                        <p className="text-white font-black text-xl tracking-tight">You&apos;re booked!</p>
                        <p className="text-slate-400 text-sm mt-1 leading-relaxed">
                          We&apos;ll call you within a few hours to confirm.
                        </p>
                      </div>
                      <a
                        href="tel:+919169269369"
                        className="flex items-center gap-2 px-5 py-3 bg-yellow-400 text-black rounded-xl text-xs font-black uppercase tracking-widest hover:bg-yellow-300 transition-colors shadow-lg shadow-yellow-400/20"
                      >
                        <Phone size={13} /> Call Now Instead
                      </a>
                      <button
                        onClick={() => { setSubmitted(false); setForm(INITIAL_FORM); }}
                        className="text-[11px] text-slate-500 hover:text-slate-300 transition-colors"
                      >
                        Submit another request
                      </button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-3">

                      <div className="flex items-center gap-1.5 mb-4">
                        <Sparkles size={11} className="text-yellow-400" />
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-yellow-400">
                          Dharma Dental — Free Consultation
                        </span>
                      </div>

                      {/* Name + Phone */}
                      <div className="grid grid-cols-2 gap-3">
                        <FloatingInput label="Your Name" required value={form.name} onChange={(e) => handleChange('name', e.target.value)} />
                        <FloatingInput label="Phone" type="tel" required value={form.phone} onChange={(e) => handleChange('phone', e.target.value)} />
                      </div>

                      {/* Email */}
                      <FloatingInput label="Email" type="email" value={form.email} onChange={(e) => handleChange('email', e.target.value)} />

                      {/* Treatment + Location */}
                      <StyledSelect label="Treatment" required options={TREATMENTS} value={form.treatment} onChange={(e) => handleChange('treatment', e.target.value)} />
                      <StyledSelect label="Clinic Location" required options={LOCATIONS} value={form.location} onChange={(e) => handleChange('location', e.target.value)} />

                      {/* Message */}
                      <FloatingTextarea
                        label="Message (Optional)"
                        value={form.message}
                        onChange={(e) => handleChange('message', e.target.value)}
                      />

                      {/* reCAPTCHA */}
                      <div className="pt-1">
                        <div className="scale-[0.85] origin-left -ml-1">
                          <ReCAPTCHA
                            ref={recaptchaRef}
                            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
                            onChange={(token) => { setCaptchaToken(token); setCaptchaError(false); }}
                            onExpired={() => setCaptchaToken(null)}
                            theme="dark"
                          />
                        </div>
                        {captchaError && (
                          <p className="text-[11px] text-rose-400 font-medium mt-1">
                            Please complete the CAPTCHA.
                          </p>
                        )}
                      </div>

                      {/* Submit */}
                      <motion.button
                        type="submit" disabled={submitting}
                        whileHover={{ scale: submitting ? 1 : 1.02 }}
                        whileTap={{ scale: submitting ? 1 : 0.97 }}
                        className="w-full py-4 bg-gradient-to-r from-yellow-400 to-yellow-300 text-black font-black text-sm uppercase tracking-widest rounded-xl flex items-center justify-center gap-2 shadow-xl shadow-yellow-400/20 hover:shadow-yellow-400/40 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        {submitting ? (
                          <><Loader2 size={15} className="animate-spin" /> Sending…</>
                        ) : (
                          <><Send size={15} /> Book Now</>
                        )}
                      </motion.button>

                      <p className="text-center text-[10px] text-slate-600 pt-1">
                        No spam. We&apos;ll only contact you about your appointment.
                      </p>

                    </form>
                  )}
                </div>

              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}