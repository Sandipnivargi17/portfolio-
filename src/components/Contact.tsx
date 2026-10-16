import React, { useState, useEffect, useRef } from 'react';
import { portfolioConfig } from '../data/portfolioData';
import { 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  MessageSquare, 
  Briefcase, 
  GraduationCap, 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Inbox, 
  Trash2, 
  X 
} from 'lucide-react';

interface ContactProps {
  prefillIntent?: string;
  onSuccessToast: (msg: string) => void;
}

interface SubmittedMessage {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  interest: string;
  budget: string;
  message: string;
  createdAt: string;
}

export const Contact: React.FC<ContactProps> = ({ prefillIntent, onSuccessToast }) => {
  const formRef = useRef<HTMLFormElement>(null);

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [interest, setInterest] = useState('Website Development');
  const [budget, setBudget] = useState('₹5,000 – ₹15,000 (Student / Starter)');
  const [message, setMessage] = useState('');
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formError, setFormError] = useState('');
  const [showLeadsDrawer, setShowLeadsDrawer] = useState(false);
  const [leadsList, setLeadsList] = useState<SubmittedMessage[]>(() => {
    try {
      const stored = localStorage.getItem('sandip_leads');
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    if (prefillIntent) {
      setInterest(prefillIntent);
      // Smooth scroll into form
      formRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [prefillIntent]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');

    if (!fullName.trim() || !email.trim() || !message.trim()) {
      setFormError('Please fill in your name, email address, and a brief message.');
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setFormError('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      const newLead: SubmittedMessage = {
        id: 'MSG-' + Date.now(),
        fullName,
        email,
        phone: phone || 'Not provided',
        interest,
        budget,
        message,
        createdAt: new Date().toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        })
      };

      const updated = [newLead, ...leadsList];
      setLeadsList(updated);
      try {
        localStorage.setItem('sandip_leads', JSON.stringify(updated));
      } catch {
        // Fallback
      }

      setIsSubmitting(false);
      setIsSubmitted(true);
      onSuccessToast(`Message sent successfully! Sandip will get back to you within 24 hours.`);
    }, 600);
  };

  const handleResetForm = () => {
    setFullName('');
    setEmail('');
    setPhone('');
    setMessage('');
    setIsSubmitted(false);
  };

  const clearLead = (id: string) => {
    const updated = leadsList.filter((item) => item.id !== id);
    setLeadsList(updated);
    localStorage.setItem('sandip_leads', JSON.stringify(updated));
  };

  return (
    <section id="contact" className="py-20 border-t border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold text-sky-600 dark:text-sky-400 tracking-wider uppercase">
            Initiate Collaboration
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-1.5 tracking-tight">
            Have a Project or Want to Learn?
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400 mt-2">
            Let's discuss your idea, project or learning goals. Quick responses within 24 hours.
          </p>
        </div>

        {/* Two Pathway Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {/* Pathway 1: Hire Me */}
          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:border-sky-500/40 transition-colors">
            <div>
              <div className="p-3 rounded-xl bg-sky-50 dark:bg-sky-950/50 text-sky-600 dark:text-sky-400 w-fit mb-4">
                <Briefcase className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1.5">
                Hire Me for Freelance
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                Need a modern website, web application, custom portfolio, or technical guidance for your software project? Let's turn your requirements into reality.
              </p>
            </div>
            <button
              onClick={() => {
                setInterest('Website Development');
                formRef.current?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-semibold text-xs shadow-xs transition-colors cursor-pointer"
            >
              <span>Start a Project</span>
            </button>
          </div>

          {/* Pathway 2: Learn With Me */}
          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:border-indigo-500/40 transition-colors">
            <div>
              <div className="p-3 rounded-xl bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 w-fit mb-4">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1.5">
                Learn With Me
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                Want to learn web development, master CS fundamentals, or kickstart your freelancing journey? Affordable, beginner-friendly live coaching.
              </p>
            </div>
            <button
              onClick={() => {
                setInterest('Course Inquiry / Learning');
                formRef.current?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs shadow-xs transition-colors cursor-pointer"
            >
              <span>Ask About Courses</span>
            </button>
          </div>
        </div>

        {/* Contact Form & Direct Channels Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Info & Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-7 shadow-xs">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">
                Direct Communication
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                Prefer direct messaging or have a quick query? Reach out via WhatsApp or email directly.
              </p>

              <div className="space-y-4 text-xs">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-sky-500">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 block">Work Email</span>
                    <a
                      href={`mailto:${portfolioConfig.personal.emailPlaceholder}`}
                      className="font-medium text-slate-900 dark:text-white hover:text-sky-500 transition-colors"
                    >
                      {portfolioConfig.personal.emailPlaceholder}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-emerald-500">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 block">Instant Chat</span>
                    <a
                      href={portfolioConfig.personal.whatsappPlaceholder}
                      target="_blank"
                      rel="noreferrer"
                      className="font-medium text-emerald-600 dark:text-emerald-400 hover:underline"
                    >
                      Chat on WhatsApp (Fastest response)
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-indigo-500">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 block">Base & Availability</span>
                    <span className="font-medium text-slate-900 dark:text-white">
                      {portfolioConfig.personal.location} · Remote Worldwide
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-amber-500">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 block">Response Time</span>
                    <span className="font-medium text-slate-900 dark:text-white">
                      Usually within 2 to 6 hours
                    </span>
                  </div>
                </div>
              </div>

              {/* Developer / Admin Saved Inquiries Toggle */}
              <div className="mt-8 pt-5 border-t border-slate-100 dark:border-slate-800">
                <button
                  onClick={() => setShowLeadsDrawer(true)}
                  className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs text-slate-700 dark:text-slate-300 transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <Inbox className="w-4 h-4 text-sky-500" />
                    <span>View Saved Inquiries ({leadsList.length})</span>
                  </span>
                  <span className="text-[10px] font-mono font-bold text-slate-400">Review</span>
                </button>
              </div>

            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-xs">
              
              <div className="mb-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Send a Message
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Fill out the form below and Sandip will respond directly to your email.
                </p>
              </div>

              {isSubmitted ? (
                <div className="py-10 text-center space-y-4">
                  <div className="w-14 h-14 mx-auto rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong>{fullName}</strong>. Your message regarding <em>"{interest}"</em> has been received. Sandip will review the requirements and follow up with you at <strong>{email}</strong> shortly.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={handleResetForm}
                      className="px-5 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white text-xs font-semibold transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 text-xs">
                  {formError && (
                    <div className="flex items-center gap-2 p-3 rounded-lg bg-rose-50 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400 border border-rose-200 dark:border-rose-900">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{formError}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="e.g. Vikram Joshi"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-sky-500 focus:outline-hidden"
                      />
                    </div>

                    <div>
                      <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="vikram@example.com"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-sky-500 focus:outline-hidden"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Phone / WhatsApp (Optional)
                      </label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 ••••• •••••"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-sky-500 focus:outline-hidden"
                      />
                    </div>

                    <div>
                      <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Service or Course *
                      </label>
                      <select
                        value={interest}
                        onChange={(e) => setInterest(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-sky-500 focus:outline-hidden"
                      >
                        <option value="Website Development">Website Development</option>
                        <option value="Web Application Development">Web Application Development</option>
                        <option value="Portfolio & Personal Branding">Portfolio & Personal Branding</option>
                        <option value="Computer Science Project Guidance">Computer Science Project Guidance</option>
                        <option value="Technical Content">Technical Content</option>
                        <option value="Course Inquiry / Learning">Course Inquiry / Learning</option>
                        <option value="General Freelance Query">General Freelance Query</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Estimated Budget (Optional)
                    </label>
                    <select
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-sky-500 focus:outline-hidden"
                    >
                      <option value="Student Friendly / Course Inquiry">Student Friendly / Course Inquiry</option>
                      <option value="₹3,000 – ₹7,000 (Basic Landing / Portfolio)">₹3,000 – ₹7,000 (Basic Landing / Portfolio)</option>
                      <option value="₹7,000 – ₹20,000 (Full Website / Guidance)">₹7,000 – ₹20,000 (Full Website / Guidance)</option>
                      <option value="₹20,000+ (Full-Stack Web App)">₹20,000+ (Full-Stack Web App)</option>
                      <option value="Flexible / Let's Discuss">Flexible / Let's Discuss</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Project Details or Questions *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Briefly describe your website needs, required features, or the course topics you want to explore..."
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-sky-500 focus:outline-hidden"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-between gap-4">
                    <span className="text-[11px] text-slate-500 dark:text-slate-400">
                      🔒 Zero spam. Private & confidential.
                    </span>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-semibold text-xs shadow-sm transition-all disabled:opacity-50 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <span>Sending Message...</span>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>

      {/* Saved Inquiries Modal / Drawer */}
      {showLeadsDrawer && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xs"
          role="dialog"
          aria-modal="true"
        >
          <div className="w-full max-w-2xl bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-2xl max-h-[85vh] flex flex-col">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800 shrink-0">
              <div className="flex items-center gap-2">
                <Inbox className="w-5 h-5 text-sky-500" />
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  Saved Leads & Inquiries ({leadsList.length})
                </h3>
              </div>
              <button
                onClick={() => setShowLeadsDrawer(false)}
                className="text-slate-400 hover:text-slate-900 dark:hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="py-4 overflow-y-auto space-y-3 flex-1 text-xs">
              {leadsList.length === 0 ? (
                <div className="text-center py-10 text-slate-500 dark:text-slate-400">
                  <Inbox className="w-8 h-8 mx-auto mb-2 opacity-40" />
                  <p>No messages received yet. Submit the contact form to test!</p>
                </div>
              ) : (
                leadsList.map((lead) => (
                  <div
                    key={lead.id}
                    className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/50 space-y-2 relative"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-slate-900 dark:text-white text-sm">
                        {lead.fullName}
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] text-slate-400">{lead.createdAt}</span>
                        <button
                          onClick={() => clearLead(lead.id)}
                          className="text-slate-400 hover:text-rose-500 transition-colors"
                          title="Delete inquiry"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    <div className="text-slate-500 dark:text-slate-400 flex flex-wrap gap-x-4 gap-y-1 text-[11px]">
                      <span>Email: <strong className="text-slate-700 dark:text-slate-300">{lead.email}</strong></span>
                      <span>Phone: <strong className="text-slate-700 dark:text-slate-300">{lead.phone}</strong></span>
                      <span>Interest: <strong className="text-sky-600 dark:text-sky-400">{lead.interest}</strong></span>
                      <span>Budget: <strong>{lead.budget}</strong></span>
                    </div>

                    <p className="text-slate-700 dark:text-slate-300 pt-1 border-t border-slate-200/60 dark:border-slate-800/60 text-xs">
                      {lead.message}
                    </p>
                  </div>
                ))
              )}
            </div>

            <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center shrink-0">
              <span className="text-[11px] text-slate-500">
                Inquiries are securely preserved locally in browser storage.
              </span>
              <button
                onClick={() => setShowLeadsDrawer(false)}
                className="px-4 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white text-xs font-semibold"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
