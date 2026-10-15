import React, { useState } from 'react';
import { Award, Presentation, Heart, CheckCircle2 } from 'lucide-react';
import { skillsList, certificatesAndSeminars } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  return (
    <section id="skills" className="py-24">
      <div className="max-w-[1120px] mx-auto px-5">
        <div className="max-w-2xl mb-12">
          <span className="eyebrow block mb-2">Capabilities & continued learning</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#35271f] tracking-tight mb-3">
            Skills, certificates & seminars
          </h2>
          <p className="text-base text-[#79695d]">
            Professional competencies, specialized certifications, and continuous development across clinical and empirical domains.
          </p>
        </div>

        {/* Skill Pills Cloud */}
        <div className="mb-14 bg-[#fffdf9] border border-[#684a37]/15 rounded-2xl p-6 sm:p-8 shadow-xs">
          <div className="text-xs font-bold uppercase tracking-wider text-[#684a37] mb-4">
            Core Competencies & Tools
          </div>
          <div className="flex flex-wrap gap-2.5">
            {skillsList.map((skill) => {
              const isSelected = selectedSkill === skill;
              return (
                <button
                  key={skill}
                  type="button"
                  onClick={() => setSelectedSkill(isSelected ? null : skill)}
                  className={`px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 border ${
                    isSelected
                      ? 'bg-[#684a37] text-white border-[#684a37] shadow-sm transform -translate-y-0.5'
                      : 'bg-white text-[#684a37] border-[#684a37]/20 hover:bg-[#684a37] hover:text-white hover:-translate-y-0.5'
                  }`}
                >
                  {skill}
                </button>
              );
            })}
          </div>
        </div>

        {/* 3 Detail Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Certificates & Workshops */}
          <article className="bg-[#fffdf9] border border-[#684a37]/15 rounded-2xl p-7 shadow-xs hover:shadow-warm transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-[#eee2d2] flex items-center justify-center text-[#684a37] mb-5">
              <Award size={24} />
            </div>

            <h3 className="text-lg font-bold text-[#35271f] mb-4">
              Certificates & Workshops
            </h3>

            <ul className="space-y-2.5">
              {certificatesAndSeminars.certificates.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs text-[#79695d]">
                  <CheckCircle2 size={13} className="text-[#684a37] mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          {/* Card 2: Conferences & Seminars */}
          <article className="bg-[#fffdf9] border border-[#684a37]/15 rounded-2xl p-7 shadow-xs hover:shadow-warm transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-[#eee2d2] flex items-center justify-center text-[#684a37] mb-5">
              <Presentation size={24} />
            </div>

            <h3 className="text-lg font-bold text-[#35271f] mb-4">
              Conferences & Seminars
            </h3>

            <div className="space-y-4">
              {certificatesAndSeminars.conferences.map((conf, idx) => (
                <div key={idx} className="border-l-2 border-[#d9c2a9] pl-3 py-0.5">
                  <p className="text-xs font-bold text-[#35271f] leading-snug mb-1">
                    {conf.title}
                  </p>
                  <span className="text-[11px] font-semibold text-[#684a37]">
                    {conf.date}
                  </span>
                </div>
              ))}
            </div>
          </article>

          {/* Card 3: Languages & Interests */}
          <article className="bg-[#fffdf9] border border-[#684a37]/15 rounded-2xl p-7 shadow-xs hover:shadow-warm transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-[#eee2d2] flex items-center justify-center text-[#684a37] mb-5">
              <Heart size={24} />
            </div>

            <h3 className="text-lg font-bold text-[#35271f] mb-4">
              Languages & Interests
            </h3>

            <div className="mb-4">
              <span className="block text-xs font-bold uppercase tracking-wider text-[#684a37] mb-1.5">
                Languages
              </span>
              <p className="text-xs text-[#79695d]">
                {certificatesAndSeminars.languages.join(' · ')}
              </p>
            </div>

            <div>
              <span className="block text-xs font-bold uppercase tracking-wider text-[#684a37] mb-2">
                Creative & Personal Interests
              </span>
              <div className="flex flex-wrap gap-1.5">
                {certificatesAndSeminars.personalPassions.map((passion) => (
                  <span
                    key={passion}
                    className="text-[11px] px-2.5 py-1 rounded-md bg-[#eee2d2]/60 text-[#684a37] font-medium"
                  >
                    {passion}
                  </span>
                ))}
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};
