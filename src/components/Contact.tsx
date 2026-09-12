import React, { useState, useRef } from 'react';
import { personalInfo } from '../data/portfolioData';
import emailjs from '@emailjs/browser';
import {
  Send,
  Mail,
  MapPin,
  Copy,
  Check,
  Linkedin,
  Github,
  MessageSquare,
  Loader2,
  CheckCircle,
  AlertCircle,
  ExternalLink,
  Sparkles,
  Briefcase
} from 'lucide-react';

export const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'auth_fallback' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('Hiring / Job Opportunity');

  const topics = [
    'Hiring / Job Opportunity',
    'Project Collaboration',
    'Technical Discussion',
    'Other Inquiry'
  ];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Construct Gmail web compose link
  const getGmailComposeUrl = () => {
    const subject = encodeURIComponent(`[${selectedTopic}] Message from ${formData.name || 'Portfolio Visitor'}`);
    const bodyText = encodeURIComponent(
      `Hi Vikas,\n\n${formData.message || 'I would like to get in touch regarding opportunities.'}\n\n` +
      `---\n` +
      `Sender: ${formData.name || 'Not specified'}\n` +
      `Email: ${formData.email || 'Not specified'}\n` +
      `Phone: ${formData.phone || 'Not specified'}\n` +
      `Topic: ${selectedTopic}`
    );
    return `https://mail.google.com/mail/?view=cm&fs=1&to=${personalInfo.email}&su=${subject}&body=${bodyText}`;
  };

  // Construct standard mailto link
  const getMailtoUrl = () => {
    const subject = encodeURIComponent(`[${selectedTopic}] Message from ${formData.name || 'Portfolio Visitor'}`);
    const bodyText = encodeURIComponent(
      `Hi Vikas,\n\n${formData.message || 'I would like to get in touch regarding opportunities.'}\n\n` +
      `---\n` +
      `Sender: ${formData.name || 'Not specified'}\n` +
      `Email: ${formData.email || 'Not specified'}\n` +
      `Phone: ${formData.phone || 'Not specified'}\n` +
      `Topic: ${selectedTopic}`
    );
    return `mailto:${personalInfo.email}?subject=${subject}&body=${bodyText}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setStatusMessage('');

    try {
      const templateParams = {
        name: formData.name,
        from_name: formData.name,
        email: formData.email,
        from_email: formData.email,
        reply_to: formData.email,
        phone: formData.phone || 'Not provided',
        topic: selectedTopic,
        message: formData.message,
        to_name: 'Vikas Ganjure',
      };

      const result = await emailjs.send(
        personalInfo.emailJs.serviceId,
        personalInfo.emailJs.templateId,
        templateParams,
        personalInfo.emailJs.publicKey
      );

      if (result.status === 200 || result.text === 'OK') {
        setSubmitStatus('success');
        setStatusMessage('Your message has been sent successfully! Vikas will get back to you within 24 hours.');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        throw new Error(`EmailJS returned status ${result.status}`);
      }
    } catch (error: any) {
      console.warn('EmailJS transmission error or expired OAuth grant:', error);
      // Fallback state that allows 1-click dispatch via Gmail or Mail client
      setSubmitStatus('auth_fallback');
      setStatusMessage(
        'EmailJS service token expired. Click below to instantly send this exact message via Gmail or your mail app!'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-100/60 dark:bg-zinc-950/60 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-200 dark:border-indigo-800/40 text-xs font-mono text-indigo-600 dark:text-indigo-400 mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>LET'S CONNECT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Get In <span className="text-gradient-brand">Touch</span>
          </h2>
          <p className="mt-3 text-slate-600 dark:text-zinc-400 text-sm sm:text-base">
            Have a software engineering role, backend project, or technical question? Send a direct message.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Direct Info & Quick Actions */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card p-8 rounded-2xl space-y-6">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                Contact Information
              </h3>
              <p className="text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
                I am actively seeking software development and Java backend opportunities. Feel free to connect directly or send an inquiry.
              </p>

              <div className="space-y-4 pt-2">
                {/* Email item with Copy */}
                <div className="flex items-center justify-between p-4 rounded-xl bg-white dark:bg-zinc-900/80 border border-slate-200 dark:border-zinc-800 shadow-xs group">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="p-2.5 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800/40 text-indigo-600 dark:text-indigo-400 shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="truncate">
                      <span className="text-xs text-slate-500 dark:text-zinc-500 font-mono block">Direct Email</span>
                      <a
                        href={`mailto:${personalInfo.email}`}
                        className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-zinc-200 hover:text-indigo-600 dark:hover:text-indigo-400 truncate transition-colors block"
                      >
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    type="button"
                    className="p-2 rounded-lg text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-zinc-800 transition-colors shrink-0 ml-2"
                    title="Copy Email"
                  >
                    {copiedEmail ? (
                      <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Location */}
                <div className="flex items-center gap-3 p-4 rounded-xl bg-white dark:bg-zinc-900/80 border border-slate-200 dark:border-zinc-800 shadow-xs">
                  <div className="p-2.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/40 text-emerald-600 dark:text-emerald-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 dark:text-zinc-500 font-mono block">Current Base</span>
                    <span className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-zinc-200">
                      {personalInfo.location}
                    </span>
                  </div>
                </div>

                {/* Instant Gmail Compose Button */}
                <a
                  href={getGmailComposeUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-xl bg-indigo-50/60 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-800/50 hover:bg-indigo-100/80 dark:hover:bg-indigo-900/40 transition-all text-indigo-700 dark:text-indigo-300 group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-indigo-600 text-white shadow-xs">
                      <ExternalLink className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold block">Open directly in Gmail</span>
                      <span className="text-[11px] text-slate-500 dark:text-zinc-400">Pre-fills Vikas's email address</span>
                    </div>
                  </div>
                  <Sparkles className="w-4 h-4 text-indigo-500 group-hover:scale-110 transition-transform" />
                </a>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-slate-200 dark:border-zinc-800">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-zinc-500 block mb-3">
                  Professional Networks
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-medium bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-slate-700 dark:text-zinc-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-300 dark:hover:border-indigo-500/40 hover:bg-slate-50 dark:hover:bg-zinc-800/80 transition-all shadow-xs"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </a>

                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-medium bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-slate-700 dark:text-zinc-300 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-zinc-700 hover:bg-slate-50 dark:hover:bg-zinc-800/80 transition-all shadow-xs"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Interactive Working Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-6 sm:p-8 rounded-2xl">
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                
                {/* Topic Selector Chips */}
                <div className="space-y-2">
                  <label className="text-xs font-mono text-slate-700 dark:text-zinc-300 flex items-center gap-1.5">
                    <Briefcase className="w-3.5 h-3.5 text-indigo-500" />
                    <span>Inquiry Topic</span>
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {topics.map((topic) => (
                      <button
                        key={topic}
                        type="button"
                        onClick={() => setSelectedTopic(topic)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                          selectedTopic === topic
                            ? 'bg-indigo-600 text-white shadow-xs'
                            : 'bg-white dark:bg-zinc-900 text-slate-600 dark:text-zinc-400 hover:bg-slate-100 dark:hover:bg-zinc-800 border border-slate-200 dark:border-zinc-800'
                        }`}
                      >
                        {topic}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-xs font-mono text-slate-700 dark:text-zinc-300">
                      Your Name <span className="text-indigo-600 dark:text-indigo-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Jane Doe"
                      className="w-full px-4 py-3 rounded-xl bg-white dark:bg-zinc-900/90 border border-slate-200 dark:border-zinc-800 text-slate-900 dark:text-zinc-100 placeholder:text-slate-400 dark:placeholder:text-zinc-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-sm transition-all shadow-xs"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-xs font-mono text-slate-700 dark:text-zinc-300">
                      Email Address <span className="text-indigo-600 dark:text-indigo-400">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="jane@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-white dark:bg-zinc-900/90 border border-slate-200 dark:border-zinc-800 text-slate-900 dark:text-zinc-100 placeholder:text-slate-400 dark:placeholder:text-zinc-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-sm transition-all shadow-xs"
                    />
                  </div>
                </div>

                {/* Phone field */}
                <div className="space-y-1.5">
                  <label htmlFor="phone" className="text-xs font-mono text-slate-700 dark:text-zinc-300">
                    Phone Number (Optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-zinc-900/90 border border-slate-200 dark:border-zinc-800 text-slate-900 dark:text-zinc-100 placeholder:text-slate-400 dark:placeholder:text-zinc-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-sm transition-all shadow-xs"
                  />
                </div>

                {/* Message Textarea */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <label htmlFor="message" className="text-xs font-mono text-slate-700 dark:text-zinc-300">
                      Your Message <span className="text-indigo-600 dark:text-indigo-400">*</span>
                    </label>
                    <span className="text-[11px] font-mono text-slate-400">
                      {formData.message.length} characters
                    </span>
                  </div>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Hello Vikas, we have an exciting Java/Backend development opportunity and would love to connect..."
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-zinc-900/90 border border-slate-200 dark:border-zinc-800 text-slate-900 dark:text-zinc-100 placeholder:text-slate-400 dark:placeholder:text-zinc-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-sm transition-all resize-none shadow-xs"
                  ></textarea>
                </div>

                {/* Success Feedback State */}
                {submitStatus === 'success' && (
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/60 text-emerald-800 dark:text-emerald-300 text-xs font-medium animate-in fade-in">
                    <CheckCircle className="w-5 h-5 shrink-0 text-emerald-600 dark:text-emerald-400 mt-0.5" />
                    <div>
                      <span className="font-semibold block">Message Sent!</span>
                      <span>{statusMessage}</span>
                    </div>
                  </div>
                )}

                {/* Smart Recovery / Fallback State */}
                {submitStatus === 'auth_fallback' && (
                  <div className="p-4 rounded-xl bg-indigo-50/80 dark:bg-indigo-950/50 border border-indigo-200 dark:border-indigo-800/60 space-y-3 animate-in fade-in">
                    <div className="flex items-start gap-2.5 text-xs text-indigo-900 dark:text-indigo-200">
                      <AlertCircle className="w-5 h-5 shrink-0 text-indigo-600 dark:text-indigo-400 mt-0.5" />
                      <div>
                        <span className="font-semibold block">Complete Your Message Delivery:</span>
                        <span className="text-slate-600 dark:text-zinc-300">
                          Your message is pre-formatted. Click below to deliver it directly to Vikas:
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2.5 pt-1">
                      <a
                        href={getGmailComposeUrl()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-indigo-600 text-white font-medium text-xs hover:bg-indigo-500 shadow-sm"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Send with 1-Click via Gmail</span>
                      </a>

                      <a
                        href={getMailtoUrl()}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white dark:bg-zinc-900 border border-slate-300 dark:border-zinc-700 text-slate-700 dark:text-zinc-200 font-medium text-xs hover:bg-slate-100 dark:hover:bg-zinc-800"
                      >
                        <Mail className="w-3.5 h-3.5" />
                        <span>Open in Mail App</span>
                      </a>
                    </div>
                  </div>
                )}

                {/* Error Banner */}
                {submitStatus === 'error' && (
                  <div className="flex items-center gap-2 p-3.5 rounded-xl bg-rose-50 dark:bg-rose-950/60 border border-rose-200 dark:border-rose-800/60 text-rose-800 dark:text-rose-300 text-xs font-medium">
                    <AlertCircle className="w-4 h-4 shrink-0 text-rose-600 dark:text-rose-400" />
                    <span>{statusMessage}</span>
                  </div>
                )}

                {/* Action Buttons Row */}
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-sm text-white bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-indigo-600/30 transition-all active:scale-95"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>

                  {/* Instant Direct Gmail Option */}
                  <a
                    href={getGmailComposeUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-xs sm:text-sm text-slate-700 dark:text-zinc-300 bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 hover:bg-slate-100 dark:hover:bg-zinc-800 hover:text-slate-900 dark:hover:text-white transition-all shadow-xs"
                    title="Open message directly in Gmail web composer"
                  >
                    <ExternalLink className="w-4 h-4 text-indigo-500" />
                    <span>Compose in Gmail</span>
                  </a>
                </div>

              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
