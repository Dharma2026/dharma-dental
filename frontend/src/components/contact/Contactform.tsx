'use client';

// components/contact/Contactform.tsx
import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import ReCAPTCHA from 'react-google-recaptcha';
import {
  MapPin,
  Phone,
  Mail,
  Send,
  CheckCircle2,
  Loader2,
  ChevronDown,
  Sparkles,
  Instagram,
  Facebook,
  Linkedin,
  X,
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

// ─── Types ────────────────────────────────────────────────────────────────────

interface InputFieldProps {
  label: string;
  type?: string;
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  icon: React.ComponentType<{ size?: number }>;
}

interface SelectFieldProps {
  label: string;
  options: string[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  required?: boolean;
  icon: React.ComponentType<{ size?: number }>;
}

interface FormState {
  name: string;
  phone: string;
  email: string;
  treatment: string;
  location: string;
  message: string;
}

// ─── Input Field ──────────────────────────────────────────────────────────────

const InputField: React.FC<InputFieldProps> = ({
  label, type = 'text', required = false, value, onChange, icon: Icon,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative flex flex-col gap-1.5 w-full">
      <label className="text-xs font-black uppercase tracking-widest text-slate-600 ml-1">
        {label} {required && <span className="text-rose-500">*</span>}
      </label>
      <div className={`relative flex items-center transition-all duration-300 rounded-2xl border-2 ${
        isFocused
          ? 'border-yellow-400 bg-white shadow-lg shadow-yellow-100'
          : 'border-slate-100 bg-slate-50/50 hover:border-slate-200'
      }`}>
        <div className={`pl-4 transition-colors duration-300 ${isFocused ? 'text-yellow-500' : 'text-slate-300'}`}>
          <Icon size={18} />
        </div>
        <input
          type={type}
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="w-full py-3.5 px-3 bg-transparent outline-none text-slate-900 placeholder:text-slate-500 font-medium text-sm"
          placeholder={`Enter your ${label.toLowerCase()}...`}
          required={required}
        />
      </div>
    </div>
  );
};

// ─── Select Field ─────────────────────────────────────────────────────────────

const SelectField: React.FC<SelectFieldProps> = ({
  label, options, value, onChange, required, icon: Icon,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative flex flex-col gap-1.5 w-full">
      <label className="text-xs font-black uppercase tracking-widest text-slate-600 ml-1">
        {label} {required && <span className="text-rose-500">*</span>}
      </label>
      <div className={`relative flex items-center transition-all duration-300 rounded-2xl border-2 ${
        isFocused
          ? 'border-yellow-400 bg-white shadow-lg shadow-yellow-100'
          : 'border-slate-100 bg-slate-50/50 hover:border-slate-200'
      }`}>
        <div className={`pl-4 transition-colors duration-300 ${isFocused ? 'text-yellow-500' : 'text-slate-300'}`}>
          <Icon size={18} />
        </div>
        <select
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="w-full py-3.5 pl-3 pr-10 bg-transparent outline-none text-slate-900 font-medium appearance-none cursor-pointer text-sm"
          required={required}
        >
          <option value="" disabled>Choose {label.toLowerCase()}...</option>
          {options.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
        <div className="absolute right-4 pointer-events-none text-slate-300">
          <ChevronDown size={16} />
        </div>
      </div>
    </div>
  );
};

// ─── Main Component ───────────────────────────────────────────────────────────

export default function ContactSection() {
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const [formState, setFormState] = useState<FormState>({
    name: '', phone: '', email: '', treatment: '', location: '', message: '',
  });
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [captchaError, setCaptchaError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!captchaToken) { setCaptchaError(true); return; }
    setIsSubmitting(true);
    setCaptchaError(false);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formState, captchaToken }),
      });
      if (!res.ok) throw new Error('Failed');
      setIsSubmitted(true);
    } catch {
      alert('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
      recaptchaRef.current?.reset();
      setCaptchaToken(null);
    }
  };

  const handleChange = (field: keyof FormState, value: string) =>
    setFormState((prev) => ({ ...prev, [field]: value }));

  return (
    <div className="relative w-full bg-[#f8fafc] overflow-x-hidden font-sans selection:bg-yellow-200">

      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] bg-yellow-400/8 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-indigo-400/5 rounded-full blur-[120px]" />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.025]"
          style={{ backgroundImage: `radial-gradient(#000 1px, transparent 1px)`, backgroundSize: '40px 40px' }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 lg:py-28">
        <div className="flex flex-col lg:flex-row gap-24 items-start">

          {/* ── LEFT: Info ── */}
          <div className="w-full lg:w-[45%] flex flex-col pt-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-slate-100 text-yellow-600 text-xs font-black tracking-widest uppercase mb-8 w-fit"
            >
              <Sparkles size={14} className="animate-pulse" />
              Premium Dental Care
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl lg:text-6xl font-extrabold text-slate-950 leading-[1.1] mb-8 tracking-tight"
            >
              Elevate Your{' '}
              <span className="relative inline-block">
                Smile&apos;s
                <span className="absolute bottom-2 left-0 w-full h-3 bg-yellow-400/25 -z-10 rounded" />
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-600">
                True Potential.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-slate-600 leading-relaxed mb-12 max-w-md"
            >
              Join 10,000+ happy patients who rediscovered their confidence through our bespoke dental experiences.
            </motion.p>

            <div className="grid grid-cols-1 gap-4 mb-12">
              {[
                { icon: Phone, label: 'Immediate Assistance', val: '+91 91692 69369', color: 'bg-yellow-50 text-yellow-600' },
                { icon: Mail, label: 'Concierge Support', val: 'hydndc@gmail.com', color: 'bg-blue-50 text-blue-600' },
                { icon: MapPin, label: 'Premium Locations', val: 'Hyderabad & Bengaluru', color: 'bg-indigo-50 text-indigo-600' },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + idx * 0.1 }}
                  className="flex items-center gap-5 p-4 rounded-2xl bg-white border border-slate-100 hover:border-yellow-200 hover:shadow-xl hover:shadow-slate-100/80 transition-all group cursor-pointer"
                >
                  <div className={`w-12 h-12 rounded-2xl ${item.color} flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shrink-0`}>
                    <item.icon size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-black tracking-widest text-slate-400 mb-0.5">{item.label}</p>
                    <p className="text-slate-950 font-bold">{item.val}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social links */}
            <div className="flex gap-3">
              {[Instagram, Facebook, Linkedin, X].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white border border-slate-100 flex items-center justify-center text-slate-400 hover:bg-yellow-400 hover:text-black hover:border-yellow-400 transition-all duration-300 shadow-sm"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* ── RIGHT: Form Card ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ type: 'spring', damping: 20 }}
            className="w-full lg:w-[55%] lg:sticky lg:top-12"
          >
            {/* Gradient border wrapper */}
            <div className="relative p-[1px] bg-gradient-to-br from-yellow-200 via-slate-100 to-slate-200 rounded-[2.5rem] shadow-[0_32px_64px_-12px_rgba(0,0,0,0.1)]">
              <div className="bg-white/90 backdrop-blur-xl rounded-[2.4rem] p-8 md:p-12 overflow-hidden relative">

                {/* Card watermark */}
                <div className="absolute top-0 right-0 p-8 text-yellow-400 opacity-[0.06] pointer-events-none">
                  <Sparkles size={140} />
                </div>

                {/* Top accent line */}
                <div className="absolute top-0 left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-transparent via-yellow-400 to-transparent rounded-full" />

                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="relative z-10 space-y-7">
                    <div className="mb-2">
                      <h2 className="text-3xl font-black text-slate-900 tracking-tight mb-2">
                        Request an Appointment
                      </h2>
                      <p className="text-slate-500 font-medium text-sm">
                        Fill in your details and we&apos;ll handle the rest.
                      </p>
                    </div>

                    {/* Name + Phone */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <InputField
                        label="Full Name"
                        icon={({ size }) => <span className="font-black text-base leading-none" style={{ fontSize: size }}>@</span>}
                        required
                        value={formState.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                      />
                      <InputField
                        label="Phone Number"
                        type="tel"
                        icon={Phone}
                        required
                        value={formState.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                      />
                    </div>

                    {/* Email */}
                    <InputField
                      label="Email Address"
                      type="email"
                      icon={Mail}
                      required
                      value={formState.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                    />

                    {/* Treatment + Location */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <SelectField
                        label="Treatment Choice"
                        icon={Sparkles}
                        required
                        options={TREATMENTS}
                        value={formState.treatment}
                        onChange={(e) => handleChange('treatment', e.target.value)}
                      />
                      <SelectField
                        label="Preferred Clinic"
                        icon={MapPin}
                        required
                        options={LOCATIONS}
                        value={formState.location}
                        onChange={(e) => handleChange('location', e.target.value)}
                      />
                    </div>

                    {/* Message */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-black uppercase tracking-widest text-slate-600 ml-1">
                        How can we help?{' '}
                        <span className="text-slate-300 normal-case font-medium">(Optional)</span>
                      </label>
                      <textarea
                        rows={3}
                        value={formState.message}
                        onChange={(e) => handleChange('message', e.target.value)}
                        placeholder="Tell us about your dental goals..."
                        className="w-full p-4 bg-slate-50/50 rounded-2xl border-2 border-slate-100 hover:border-slate-200 focus:border-yellow-400 focus:bg-white focus:shadow-lg focus:shadow-yellow-100/80 outline-none transition-all resize-none text-slate-900 font-medium text-sm placeholder:text-slate-400"
                      />
                    </div>

                    {/* reCAPTCHA */}
                    <div className="space-y-2">
                      <div className="scale-[0.92] origin-left">
                        <ReCAPTCHA
                          ref={recaptchaRef}
                          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
                          onChange={(token) => { setCaptchaToken(token); setCaptchaError(false); }}
                          onExpired={() => setCaptchaToken(null)}
                          theme="light"
                        />
                      </div>
                      {captchaError && (
                        <p className="text-xs text-rose-500 font-bold px-1">
                          Please complete the security check to proceed.
                        </p>
                      )}
                    </div>

                    {/* Submit */}
                    <motion.button
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-5 rounded-2xl bg-slate-900 text-white font-black text-base tracking-wide shadow-2xl shadow-slate-200 hover:bg-yellow-400 hover:text-black hover:shadow-yellow-200 transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed group"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 size={20} className="animate-spin" />
                          Securing Your Slot…
                        </>
                      ) : (
                        <>
                          Book Your Appointment
                          <Send size={18} className="rotate-12 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </motion.button>

                    <p className="text-center text-xs text-slate-800 font-medium italic">
                      Typically responds within 4 working hours.
                    </p>
                  </form>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center text-center py-20"
                  >
                    <div className="relative mb-8">
                      <div className="absolute inset-0 bg-green-400 blur-2xl opacity-20 animate-pulse rounded-full" />
                      <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center text-green-500 relative z-10 border-4 border-white shadow-xl">
                        <CheckCircle2 size={48} />
                      </div>
                    </div>
                    <h3 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">Confirmed!</h3>
                    <p className="text-lg text-slate-500 max-w-sm mb-12 leading-relaxed">
                      Your request has been prioritized,{' '}
                      <span className="text-slate-900 font-bold">{formState.name.split(' ')[0]}</span>.
                      Our concierge team will reach out to you shortly.
                    </p>
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormState({ name: '', phone: '', email: '', treatment: '', location: '', message: '' });
                      }}
                      className="px-8 py-3 rounded-full bg-slate-100 text-slate-600 font-bold hover:bg-yellow-400 hover:text-black transition-all duration-300"
                    >
                      Return to Form
                    </button>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}