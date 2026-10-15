import React, { useState } from 'react';
import { Mail, MapPin, Linkedin, BookOpen, ArrowUpRight, Copy, Check, Send } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const handleSendDraft = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoSubject = encodeURIComponent(subject || 'Inquiry via Portfolio: ' + name);
    const bodyContent = encodeURIComponent(
      `Hello Maheen,\n\n${message}\n\nFrom: ${name} (${senderEmail})`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${mailtoSubject}&body=${bodyContent}`;
  };

  return (
    <section id="contact" className="py-24">
      <div className="max-w-[1120px] mx-auto px-5">
        <div className="contact-panel shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center relative z-10">
            {/* Left copy */}
            <div className="space-y-6">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#d8b99d]">
                Let's connect
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#fffdf9] tracking-tight leading-tight">
                Good work begins with a conversation.
              </h2>

              <p className="text-base text-[#d8c7b9] max-w-lg leading-relaxed">
                For research discussions, professional opportunities, or collaborative inquiries in psychology and behaviour therapy, feel free to get in touch.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="inline-flex items-center justify-center gap-2 min-h-[48px] px-6 py-3 rounded-full font-bold text-sm bg-[#684a37] text-white hover:bg-[#835f47] transition-all transform hover:-translate-y-0.5 shadow-md shadow-black/20"
                >
                  <span>Email me directly</span>
                  <ArrowUpRight size={16} />
                </a>

                <button
                  type="button"
                  onClick={() => setShowForm(!showForm)}
                  className="inline-flex items-center justify-center gap-2 min-h-[48px] px-6 py-3 rounded-full font-bold text-sm bg-white/10 text-[#f4e8dd] border border-white/20 hover:bg-white/20 transition-all transform hover:-translate-y-0.5"
                >
                  <Send size={15} />
                  <span>{showForm ? 'Hide message box' : 'Compose note'}</span>
                </button>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center justify-center gap-1.5 min-h-[48px] px-4 py-2.5 rounded-full text-xs font-semibold text-[#d8b99d] hover:text-white transition-colors"
                  title="Copy email address"
                >
                  {copied ? (
                    <>
                      <Check size={14} className="text-emerald-400" />
                      <span className="text-emerald-300">Copied to clipboard</span>
                    </>
                  ) : (
                    <>
                      <Copy size={14} />
                      <span>Copy address</span>
                    </>
                  )}
                </button>
              </div>

              {/* Collapsible Direct Message Composer */}
              {showForm && (
                <form
                  onSubmit={handleSendDraft}
                  className="mt-6 p-6 rounded-2xl bg-black/30 border border-white/15 space-y-4 animate-in fade-in duration-300 backdrop-blur-sm"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#d8b99d] mb-1">Your Name</label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Dr. / Prof. / Full Name"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:ring-2 focus:ring-[#d8b99d]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#d8b99d] mb-1">Your Email</label>
                      <input
                        type="email"
                        required
                        value={senderEmail}
                        onChange={(e) => setSenderEmail(e.target.value)}
                        placeholder="name@institution.org"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:ring-2 focus:ring-[#d8b99d]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#d8b99d] mb-1">Subject</label>
                    <input
                      type="text"
                      required
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      placeholder="Research collaboration / Opportunity"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:ring-2 focus:ring-[#d8b99d]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#d8b99d] mb-1">Message</label>
                    <textarea
                      rows={3}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Write your note or collaboration proposal..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:ring-2 focus:ring-[#d8b99d]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#684a37] text-white text-xs font-bold rounded-xl hover:bg-[#835f47] transition-colors"
                  >
                    <span>Open Email Client</span>
                    <Send size={13} />
                  </button>
                </form>
              )}
            </div>

            {/* Right details link list */}
            <div className="space-y-1">
              <a
                href={`mailto:${personalInfo.email}`}
                className="py-4 border-b border-white/15 flex items-center justify-between gap-4 text-[#f4e8dd] hover:text-white transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <Mail size={16} className="text-[#d8b99d]" />
                  <span className="text-sm font-semibold">Email</span>
                </div>
                <span className="text-xs sm:text-sm text-[#d8b99d] group-hover:underline text-right break-all">
                  {personalInfo.email} ↗
                </span>
              </a>

              <div className="py-4 border-b border-white/15 flex items-center justify-between gap-4 text-[#f4e8dd]">
                <div className="flex items-center gap-3">
                  <MapPin size={16} className="text-[#d8b99d]" />
                  <span className="text-sm font-semibold">Location</span>
                </div>
                <span className="text-xs sm:text-sm text-[#d8b99d] text-right font-medium">
                  {personalInfo.location}
                </span>
              </div>

              <div className="py-4 border-b border-white/15 flex items-center justify-between gap-4 text-[#f4e8dd]">
                <div className="flex items-center gap-3">
                  <Linkedin size={16} className="text-[#d8b99d]" />
                  <span className="text-sm font-semibold">LinkedIn</span>
                </div>
                <span className="text-xs text-[#d8b99d]/80 italic">
                  Link to be added
                </span>
              </div>

              <div className="py-4 border-b border-white/15 flex items-center justify-between gap-4 text-[#f4e8dd]">
                <div className="flex items-center gap-3">
                  <BookOpen size={16} className="text-[#d8b99d]" />
                  <span className="text-sm font-semibold">Research profiles</span>
                </div>
                <span className="text-xs text-[#d8b99d]/80 italic">
                  Links to be added
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
