import React, { useState } from 'react';
import { ArrowUpRight, ArrowRight, Sparkles, Camera, BookOpen, Layers, Award } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const [customPhoto, setCustomPhoto] = useState<string | null>(() => {
    return localStorage.getItem('maheen_custom_photo') || null;
  });

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result as string;
        setCustomPhoto(result);
        localStorage.setItem('maheen_custom_photo', result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleResetPhoto = () => {
    setCustomPhoto(null);
    localStorage.removeItem('maheen_custom_photo');
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-36 md:pb-24 overflow-hidden">
      {/* Soft background ambient gradient glow */}
      <div 
        className="absolute top-[-100px] right-[-100px] w-[450px] h-[450px] rounded-full bg-[#eee2d2] opacity-60 blur-3xl -z-10 pointer-events-none"
        aria-hidden="true"
      />
      
      <div className="max-w-[1120px] mx-auto px-5">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] items-center gap-12 lg:gap-16">
          {/* Hero text */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#eee2d2]/70 text-[#684a37] text-xs font-bold uppercase tracking-wider border border-[#684a37]/15">
              <Sparkles size={13} className="text-[#684a37]" />
              <span>{personalInfo.tagline}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#35271f] tracking-tight leading-[1.05]">
              {personalInfo.headlineFirst}{' '}
              <span className="font-serif italic font-normal text-[#684a37] block sm:inline">
                {personalInfo.headlineSecond}
              </span>
            </h1>

            <p className="text-lg text-[#79695d] max-w-xl leading-relaxed">
              {personalInfo.bio}
            </p>

            {/* Focus pills */}
            <div className="flex flex-wrap gap-2 pt-1 pb-2">
              {personalInfo.focusPills.map((pill) => (
                <span
                  key={pill}
                  className="px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#684a37] bg-[#fffdf9] border border-[#684a37]/20 shadow-xs"
                >
                  {pill}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#research"
                className="inline-flex items-center justify-center gap-2 min-h-[48px] px-6 py-3 rounded-full font-bold text-sm bg-[#684a37] text-[#fffdf9] hover:bg-[#35271f] transition-all transform hover:-translate-y-0.5 shadow-md shadow-[#684a37]/15 focus:outline-none focus:ring-2 focus:ring-[#684a37]"
              >
                <span>Explore my work</span>
                <ArrowUpRight size={17} />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 min-h-[48px] px-6 py-3 rounded-full font-bold text-sm bg-transparent text-[#684a37] border border-[#684a37] hover:bg-[#eee2d2] transition-all transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#684a37]"
              >
                <span>Let's connect</span>
                <ArrowRight size={17} />
              </a>
            </div>
          </div>

          {/* Portrait Frame & Monogram */}
          <div className="flex justify-center lg:justify-end">
            <div className="portrait-frame group">
              <div className="portrait-placeholder relative">
                {customPhoto ? (
                  <div className="relative w-full h-full">
                    <img
                      src={customPhoto}
                      alt="Maheen Yaqoob"
                      className="w-full h-full object-cover rounded-inherit"
                    />
                    <button
                      type="button"
                      onClick={handleResetPhoto}
                      className="absolute top-2 right-2 bg-black/60 text-white text-[10px] px-2 py-1 rounded-md hover:bg-black transition-colors"
                      title="Reset to monogram placeholder"
                    >
                      Reset
                    </button>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center text-center p-4">
                    <div className="monogram">
                      {personalInfo.initials}
                    </div>
                    <p className="text-xs text-[#684a37] max-w-[220px] font-medium leading-relaxed mb-3">
                      Profile portrait display. You can upload a photo preview below anytime.
                    </p>
                    <label
                      htmlFor="photo-upload"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#fffdf9]/80 border border-[#684a37]/30 text-xs font-semibold text-[#684a37] hover:bg-[#fffdf9] cursor-pointer transition-colors shadow-xs"
                    >
                      <Camera size={13} />
                      <span>Upload Photo</span>
                    </label>
                    <input
                      id="photo-upload"
                      type="file"
                      accept="image/*"
                      onChange={handlePhotoUpload}
                      className="hidden"
                    />
                  </div>
                )}
              </div>
              <div className="portrait-note pointer-events-none">
                Curiosity with purpose ✦
              </div>
            </div>
          </div>
        </div>

        {/* Highlighted stats row */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[#684a37]/15 bg-[#fffdf9]/85 backdrop-blur-xs border border-[#684a37]/20 rounded-2xl shadow-sm overflow-hidden">
          <div className="p-6 flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#eee2d2] flex items-center justify-center text-[#684a37] shrink-0 mt-0.5">
              <BookOpen size={20} />
            </div>
            <div>
              <span className="block font-serif text-3xl font-bold text-[#684a37]">
                {personalInfo.stats[0].value}
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#79695d]">
                {personalInfo.stats[0].label}
              </span>
            </div>
          </div>

          <div className="p-6 flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#eee2d2] flex items-center justify-center text-[#684a37] shrink-0 mt-0.5">
              <Layers size={20} />
            </div>
            <div>
              <span className="block font-serif text-3xl font-bold text-[#684a37]">
                {personalInfo.stats[1].value}
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#79695d]">
                {personalInfo.stats[1].label}
              </span>
            </div>
          </div>

          <div className="p-6 flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#eee2d2] flex items-center justify-center text-[#684a37] shrink-0 mt-0.5">
              <Award size={20} />
            </div>
            <div>
              <span className="block font-serif text-3xl font-bold text-[#684a37]">
                {personalInfo.stats[2].value}
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#79695d]">
                {personalInfo.stats[2].label}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
