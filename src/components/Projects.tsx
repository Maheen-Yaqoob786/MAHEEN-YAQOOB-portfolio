import React from 'react';
import { Sprout, Users, HeartHandshake, Laptop } from 'lucide-react';
import { projectsData } from '../data/portfolioData';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-[#f2e9dd] border-y border-[#684a37]/10">
      <div className="max-w-[1120px] mx-auto px-5">
        <div className="max-w-2xl mb-12">
          <span className="eyebrow block mb-2">Beyond the classroom</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#35271f] tracking-tight mb-3">
            Projects & initiatives
          </h2>
          <p className="text-base text-[#79695d]">
            Community participation, awareness-building, and service activities that reflect a commitment to social wellbeing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectsData.map((project) => (
            <article
              key={project.id}
              className="bg-[#fffdf9] border border-[#684a37]/15 rounded-2xl p-7 shadow-xs hover:shadow-warm hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#eee2d2] flex items-center justify-center text-[#684a37]">
                    {project.icon === '🌱' && <Sprout size={24} />}
                    {project.icon === '🤝' && <Users size={24} />}
                    {project.icon === '🫶' && <HeartHandshake size={24} />}
                    {project.icon === '💻' && <Laptop size={24} />}
                  </div>

                  <span className="text-xs font-extrabold uppercase tracking-wider text-[#684a37] bg-[#eee2d2]/50 px-3 py-1 rounded-full border border-[#684a37]/10">
                    {project.period}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#35271f] leading-snug mb-3">
                  {project.title}
                </h3>

                <p className="text-sm text-[#79695d] leading-relaxed mb-4">
                  {project.description}
                </p>
              </div>

              {project.tag && (
                <div className="pt-4 border-t border-[#684a37]/10">
                  <span className="inline-block text-[11px] font-bold text-[#684a37] uppercase tracking-wider">
                    • {project.tag}
                  </span>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
