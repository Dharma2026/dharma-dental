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

interface InputFieldProps {
  label: string;
  type?: string;
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

interface SelectFieldProps {
  label: string;
  options: string[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  required?: boolean;
}

interface FormState {
  name: string;
  phone: string;
  email: string;
  treatment: string;
  location: string;
  message: string;
}

const InputField: React.FC<InputFieldProps> = ({
  label, type = 'text', required = false, value, onChange,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const hasValue = value.length > 0;

  return (
    <div className="relative group">
      <div className="relative z-0 w-full mb-6 group">
        <input
          type={type}
          className={`block py-3 px-0 w-full text-base text-white bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 peer transition-colors duration-300 ${
            isFocused ? 'border-blue-500' : 'border-slate-700 group-hover:border-slate-600'
          }`}
          placeholder=" "
          required={required}
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        <label
          className={`peer-focus:font-medium absolute text-sm duration-300 transform top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-500 text-slate-400 ${
            hasValue || isFocused ? '-translate-y-6 scale-75' : 'translate-y-0 scale-100'
          }`}
        >
          {label} {required && <span className="text-rose-500">*</span>}
        </label>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isFocused ? 1 : 0 }}
          transition={{ duration: 0.5, ease: 'circOut' }}
          className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-500 to-cyan-400 origin-left"
        />
      </div>
    </div>
  );
};

const SelectField: React.FC<SelectFieldProps> = ({
  label, options, value, onChange, required,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative w-full mb-6">
      <label className="block text-sm font-medium text-slate-400 mb-2">
        {label} {required && <span className="text-rose-500">*</span>}
      </label>
      <div className="relative">
        <select
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={`block w-full py-3 pl-4 pr-10 text-base text-white bg-slate-800/50 border-2 rounded-xl appearance-none focus:outline-none focus:ring-0 transition-colors cursor-pointer ${
            isFocused ? 'border-blue-500/50 bg-slate-800' : 'border-slate-700 hover:border-slate-600'
          }`}
        >
          <option value="" disabled className="bg-slate-900 text-slate-500">Select an option</option>
          {options.map((opt) => (
            <option key={opt} value={opt} className="bg-slate-900 text-white py-2">{opt}</option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-400">
          <ChevronDown size={16} />
        </div>
      </div>
    </div>
  );
};

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
    // overflow-hidden fixes right-side bleed from absolute blobs
    // overflow-x-hidden added on outer wrapper as extra safety
    <div className="relative w-full bg-slate-950 font-sans selection:bg-blue-500/30 overflow-hidden">

      {/* Background ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-5%] w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24"
        >

          {/* LEFT: Info Column */}
          <div className="flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6 w-fit"
            >
              <Sparkles size={12} /> Contact Us
            </motion.div>

            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Let&apos;s Shape Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                Perfect Smile.
              </span>
            </h2>

            <p className="text-lg text-slate-400 mb-12 leading-relaxed max-w-md">
              Ready to experience dental care reimagined? Fill out the form, and our
              concierge team will reach out within 24 hours.
            </p>

            <div className="space-y-6">
              {[
                { icon: Phone, val: '+91 91692 69369', sub: 'Mon–Sat 9am – 8pm' },
                { icon: Mail, val: 'hydndc@gmail.com', sub: 'Online Support 24/7' },
                { icon: MapPin, val: 'Hyderabad & Bengaluru', sub: '4 Clinic Locations' },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + idx * 0.1 }}
                  className="flex items-center gap-4 group cursor-default"
                >
                  <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 group-hover:text-blue-400 group-hover:border-blue-500/30 transition-all duration-300 shadow-lg">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <p className="text-white font-medium text-lg">{item.val}</p>
                    <p className="text-slate-500 text-sm">{item.sub}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT: Form
              min-w-0 is critical — prevents CSS grid cell from
              overflowing its column when content is wider than available space */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="relative min-w-0"
          >
            <div className="relative bg-slate-900/60 backdrop-blur-xl border border-white/5 rounded-3xl p-8 md:p-10 shadow-2xl ring-1 ring-white/5 overflow-hidden">
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-500/20 blur-[80px] rounded-full pointer-events-none" />

              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="relative z-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <InputField label="Your Name" required value={formState.name} onChange={(e) => handleChange('name', e.target.value)} />
                    <InputField label="Your Phone" type="tel" required value={formState.phone} onChange={(e) => handleChange('phone', e.target.value)} />
                  </div>

                  <InputField label="Your Email" type="email" required value={formState.email} onChange={(e) => handleChange('email', e.target.value)} />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
                    <SelectField label="Treatment Option" required options={TREATMENTS} value={formState.treatment} onChange={(e) => handleChange('treatment', e.target.value)} />
                    <SelectField label="Clinic Location" required options={LOCATIONS} value={formState.location} onChange={(e) => handleChange('location', e.target.value)} />
                  </div>

                  {/* Message */}
                  <div className="relative w-full mb-6 mt-2">
                    <label className="block text-sm font-medium text-slate-400 mb-2">
                      Message <span className="text-slate-600">(Optional)</span>
                    </label>
                    <textarea
                      rows={4}
                      value={formState.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      placeholder="Tell us about your concern or any specific requests…"
                      className="block w-full py-3 px-4 text-base text-white bg-slate-800/50 border-2 border-slate-700 hover:border-slate-600 rounded-xl resize-none focus:outline-none focus:ring-0 focus:border-blue-500/50 focus:bg-slate-800 transition-colors duration-300 placeholder-slate-600"
                    />
                  </div>

                  {/* ── Real Google reCAPTCHA v2 ── */}
                  <div className="mt-4 mb-6">
                    <div className="scale-[0.9] origin-left">
                      <ReCAPTCHA
                        ref={recaptchaRef}
                        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
                        onChange={(token) => { setCaptchaToken(token); setCaptchaError(false); }}
                        onExpired={() => setCaptchaToken(null)}
                        theme="dark"
                      />
                    </div>
                    {captchaError && (
                      <p className="mt-2 text-xs text-rose-400 font-medium">
                        Please complete the CAPTCHA to continue.
                      </p>
                    )}
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold text-lg py-4 rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <><Loader2 className="animate-spin" /> Sending...</>
                    ) : (
                      <>Book Appointment <Send size={18} /></>
                    )}
                  </motion.button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-20"
                >
                  <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center text-green-400 mb-6">
                    <CheckCircle2 size={40} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Request Sent Successfully!</h3>
                  <p className="text-slate-400 max-w-xs">
                    Thank you, {formState.name}. We have received your request and will contact you shortly.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormState({ name: '', phone: '', email: '', treatment: '', location: '', message: '' });
                    }}
                    className="mt-8 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    Send another request
                  </button>
                </motion.div>
              )}
            </div>
          </motion.div>

        </motion.div>
      </div>
    </div>
  );
}