import React from 'react';
import { ArrowUpRight, Compass, HeartHandshake, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#f2e9dd] border-y border-[#684a37]/10">
      <div className="max-w-[1120px] mx-auto px-5">
        <div className="grid grid-cols-1 lg:grid-cols-[0.7fr_1.3fr] gap-12 lg:gap-16 items-start">
          {/* Stamp Card */}
          <div className="bg-[#684a37] text-[#fffdf9] rounded-3xl p-8 min-h-[300px] flex flex-col justify-between shadow-lg shadow-[#684a37]/20 relative overflow-hidden">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#e7d0ba]">
                {personalInfo.aboutStamp.eyebrow}
              </span>
              <div className="font-serif text-4xl sm:text-5xl font-medium leading-[1.1] text-white">
                People.<br />
                Purpose.<br />
                Progress.
              </div>
            </div>

            <div className="pt-8 border-t border-white/20 flex items-center justify-between">
              <p className="text-sm font-medium text-[#e7d0ba]">
                {personalInfo.aboutStamp.subtext}
              </p>
              <Compass size={24} className="text-[#e7d0ba]/70" />
            </div>

            {/* Subtle decorative background circle */}
            <div className="absolute -bottom-10 -right-10 w-44 h-44 rounded-full bg-white/5 pointer-events-none" />
          </div>

          {/* About Text Content */}
          <div className="space-y-6">
            <div>
              <span className="eyebrow block mb-2">About me</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#35271f] tracking-tight leading-tight">
                Understanding people is where meaningful change begins.
              </h2>
            </div>

            <div className="space-y-4 text-base sm:text-[1.03rem] text-[#79695d] leading-relaxed">
              {personalInfo.aboutParagraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Quick highlight pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#fffdf9]/70 border border-[#684a37]/15">
                <HeartHandshake size={18} className="text-[#684a37] shrink-0" />
                <span className="text-xs font-bold text-[#35271f]">Empathetic, evidence-informed care</span>
              </div>
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#fffdf9]/70 border border-[#684a37]/15">
                <Sparkles size={18} className="text-[#684a37] shrink-0" />
                <span className="text-xs font-bold text-[#35271f]">Cross-cultural psychological perspective</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="#experience"
                className="inline-flex items-center gap-2 text-[#684a37] font-bold text-sm border-b-2 border-[#d9c2a9] pb-1 hover:gap-3 transition-all hover:border-[#684a37]"
              >
                <span>Explore my experience</span>
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
