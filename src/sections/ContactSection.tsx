import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, CheckCircle2, AlertCircle, ExternalLink, Sparkles } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { GlassCard } from '../components/GlassCard';
import { ContactGlobeCanvas } from '../components/ContactGlobeCanvas';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

  const validate = (): boolean => {
    const errs: FormErrors = {};

    if (!formData.name.trim()) {
      errs.name = 'Please provide your name.';
    }

    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email format (e.g. user@domain.com).';
    }

    if (!formData.message.trim()) {
      errs.message = 'Please enter a message.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters long.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setFormSubmitted(true);
    }
  };

  // Generate mailto link with prefilled values
  const mailtoLink = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
    formData.subject || `Message from ${formData.name || 'Portfolio Visitor'}`
  )}&body=${encodeURIComponent(
    `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
  )}`;

  return (
    <section id="contact" className="py-20 md:py-28 relative">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-cyan-500/10 via-violet-600/10 to-transparent rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Get In Touch"
          title="Let's Connect"
          subtitle="I'm open to entry-level opportunities, technical collaboration, and opportunities to learn and grow."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Communication Cards & 3D Connected Node Globe */}
          <div className="lg:col-span-5 space-y-6">
            <GlassCard className="p-6 sm:p-7 space-y-6" glowColor="cyan">
              <div>
                <h3 className="text-lg font-bold text-white tracking-tight">
                  Direct Contact Channels
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Feel free to reach out directly via email, phone, or connect on LinkedIn and GitHub.
                </p>
              </div>

              {/* Direct Info List */}
              <div className="space-y-3">
                {/* Email */}
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="group flex items-center gap-3.5 p-3 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-cyan-400/50 hover:bg-slate-900 transition"
                >
                  <div className="p-2.5 rounded-lg bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 group-hover:scale-105 transition-transform shadow-neon-blue">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">
                      Email Address
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-slate-200 group-hover:text-cyan-300 transition-colors truncate block">
                      {PERSONAL_INFO.email}
                    </span>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href={`tel:${PERSONAL_INFO.phone}`}
                  className="group flex items-center gap-3.5 p-3 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-cyan-400/50 hover:bg-slate-900 transition"
                >
                  <div className="p-2.5 rounded-lg bg-sky-950/80 border border-sky-500/30 text-sky-400 group-hover:scale-105 transition-transform shadow-neon-blue">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">
                      Phone Number
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-slate-200 group-hover:text-cyan-300 transition-colors block">
                      {PERSONAL_INFO.phoneFormatted}
                    </span>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-3.5 p-3 rounded-xl bg-slate-900/40 border border-slate-800/80">
                  <div className="p-2.5 rounded-lg bg-violet-950/80 border border-violet-500/30 text-violet-400 shadow-neon-violet">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">
                      Current Location
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-slate-200 block">
                      {PERSONAL_INFO.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Profiles */}
              <div className="pt-2">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-2.5">
                  Professional Profiles:
                </span>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 p-2.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-cyan-400 text-xs font-semibold text-slate-200 hover:text-white transition"
                  >
                    <Linkedin className="w-4 h-4 text-cyan-400" />
                    LinkedIn
                  </a>
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 p-2.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-violet-400 text-xs font-semibold text-slate-200 hover:text-white transition"
                  >
                    <Github className="w-4 h-4 text-violet-400" />
                    GitHub
                  </a>
                </div>
              </div>
            </GlassCard>

            {/* 3D Wireframe Connected Globe Visualization */}
            <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800/80">
              <ContactGlobeCanvas />
            </div>
          </div>

          {/* Right Column: Contact Form with Validation & Demo Handling */}
          <div className="lg:col-span-7">
            <GlassCard className="p-6 sm:p-8" glowColor="violet">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white tracking-tight">
                  Send a Direct Note
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  Have a job inquiry, questions about academic projects, or feedback? Drop a message below.
                </p>
              </div>

              {formSubmitted ? (
                /* Honest Submission Confirmation Notice */
                <div className="p-6 rounded-2xl bg-slate-950/90 border border-cyan-500/40 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-12 h-12 mx-auto rounded-full bg-cyan-950 border border-cyan-400/50 flex items-center justify-center text-cyan-400 shadow-neon-blue">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-white">
                    Message Prepared
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Note: As this portfolio is running as a lightweight frontend, messages are not stored in an external database.
                    Click below to open your preferred email client and dispatch your note directly to <strong>{PERSONAL_INFO.email}</strong>.
                  </p>
                  <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
                    <a
                      href={mailtoLink}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs shadow-neon-blue transition"
                    >
                      <Mail className="w-4 h-4" />
                      Open Email Client Now
                    </a>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs transition"
                    >
                      Edit Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  {/* Name field */}
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-mono text-slate-300 mb-1.5">
                      Your Name <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: undefined });
                      }}
                      placeholder="e.g. John Doe / Hiring Manager"
                      className={`w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 transition placeholder:text-slate-600 ${
                        errors.name ? 'border-rose-500 focus:ring-rose-400' : 'border-slate-800 hover:border-slate-700'
                      }`}
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                    />
                    {errors.name && (
                      <p id="name-error" className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email field */}
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-mono text-slate-300 mb-1.5">
                      Your Email Address <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: undefined });
                      }}
                      placeholder="e.g. recruiter@company.com"
                      className={`w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 transition placeholder:text-slate-600 ${
                        errors.email ? 'border-rose-500 focus:ring-rose-400' : 'border-slate-800 hover:border-slate-700'
                      }`}
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                    />
                    {errors.email && (
                      <p id="email-error" className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Subject field */}
                  <div>
                    <label htmlFor="contact-subject" className="block text-xs font-mono text-slate-300 mb-1.5">
                      Subject / Topic
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Entry-Level Opportunity / Project Discussion"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-slate-700 text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 transition placeholder:text-slate-600"
                    />
                  </div>

                  {/* Message field */}
                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-mono text-slate-300 mb-1.5">
                      Message <span className="text-cyan-400">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (errors.message) setErrors({ ...errors, message: undefined });
                      }}
                      placeholder="Write your message here..."
                      className={`w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 transition placeholder:text-slate-600 resize-none ${
                        errors.message ? 'border-rose-500 focus:ring-rose-400' : 'border-slate-800 hover:border-slate-700'
                      }`}
                      aria-invalid={Boolean(errors.message)}
                      aria-describedby={errors.message ? 'message-error' : undefined}
                    />
                    {errors.message && (
                      <p id="message-error" className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-violet-600 hover:from-cyan-400 hover:to-violet-500 text-slate-950 font-bold text-sm shadow-neon-blue transition transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    >
                      <Send className="w-4 h-4" />
                      Send Message
                    </button>
                  </div>

                  {/* Transparent Demo Notice */}
                  <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 text-[11px] text-slate-400 flex items-start gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                    <span>
                      <strong>Client-Side Demo Note:</strong> This form validates your message client-side. Alternatively, you can directly email{' '}
                      <a href={`mailto:${PERSONAL_INFO.email}`} className="text-cyan-300 underline font-mono">
                        {PERSONAL_INFO.email}
                      </a>
                      .
                    </span>
                  </div>
                </form>
              )}
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
};
