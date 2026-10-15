import React from 'react';
import { MapPin, Calendar } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-[#f2e9dd] border-y border-[#684a37]/10">
      <div className="max-w-[1120px] mx-auto px-5">
        <div className="max-w-2xl mb-14">
          <span className="eyebrow block mb-2">Professional journey</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#35271f] tracking-tight mb-3">
            Experience & practice
          </h2>
          <p className="text-base text-[#79695d]">
            Experience in psychological support, child-focused interventions, rehabilitation, and community wellbeing.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative pl-6 sm:pl-10 border-l-2 border-[#d9c2a9] ml-3 sm:ml-6 space-y-12">
          {experienceData.map((item) => (
            <article key={item.id} className="relative group">
              {/* Timeline marker node */}
              <div
                className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#684a37] ring-4 ring-[#eee2d2] group-hover:scale-125 transition-transform duration-200"
                aria-hidden="true"
              />

              <div className="bg-[#fffdf9] border border-[#684a37]/15 rounded-2xl p-6 sm:p-7 shadow-xs hover:shadow-warm transition-all duration-300">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <div className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#684a37] tracking-wide uppercase">
                    <Calendar size={13} />
                    <span>{item.period}</span>
                  </div>

                  {item.location && (
                    <div className="inline-flex items-center gap-1 text-xs text-[#79695d] font-medium">
                      <MapPin size={12} />
                      <span>{item.location}</span>
                    </div>
                  )}
                </div>

                <h3 className="text-xl font-bold text-[#35271f] tracking-tight mb-1">
                  {item.role}
                </h3>

                <p className="text-sm font-semibold text-[#684a37] mb-4">
                  {item.organization}
                </p>

                <ul className="space-y-2">
                  {item.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-[#79695d]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#684a37]/60 mt-2 shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
