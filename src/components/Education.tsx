import React, { useState } from 'react';
import { ArrowUpRight, GraduationCap, BookOpen, FileText, ExternalLink, X } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export const Education: React.FC = () => {
  const [selectedThesis, setSelectedThesis] = useState(false);

  return (
    <section id="education" className="py-24">
      <div className="max-w-[1120px] mx-auto px-5">
        <div className="max-w-2xl mb-12">
          <span className="eyebrow block mb-2">Academic journey</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#35271f] tracking-tight mb-3">
            Education & learning
          </h2>
          <p className="text-base text-[#79695d]">
            A foundation in applied psychology, with postgraduate study currently underway.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {educationData.map((item) => (
            <article
              key={item.id}
              className="bg-[#fffdf9] border border-[#684a37]/15 rounded-2xl p-7 shadow-xs hover:shadow-warm hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#eee2d2] flex items-center justify-center text-xl mb-5 text-[#684a37]">
                  {item.icon === '🎓' && <GraduationCap size={24} />}
                  {item.icon === '📚' && <BookOpen size={24} />}
                  {item.icon === '📝' && <FileText size={24} />}
                </div>

                <div className="text-xs font-bold uppercase tracking-wider text-[#684a37] mb-2">
                  {item.period}
                </div>

                <h3 className="text-lg font-bold text-[#35271f] leading-snug mb-2">
                  {item.degree}
                </h3>

                <p className="text-xs font-semibold text-[#684a37]/90 mb-3">
                  {item.institution}
                </p>

                <p className="text-sm text-[#79695d] leading-relaxed mb-4">
                  {item.description}
                </p>

                {item.cgpa && (
                  <div className="inline-block px-3 py-1 bg-[#eee2d2]/70 text-[#684a37] text-xs font-bold rounded-md mb-2">
                    Final CGPA: {item.cgpa}
                  </div>
                )}
              </div>

              {item.thesisLink && (
                <div className="pt-4 border-t border-[#684a37]/10 flex items-center gap-3">
                  <a
                    href={item.thesisLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#684a37] hover:text-[#35271f] transition-colors"
                  >
                    <span>View thesis on Google Drive</span>
                    <ArrowUpRight size={14} />
                  </a>
                  <button
                    type="button"
                    onClick={() => setSelectedThesis(true)}
                    className="text-[11px] underline text-[#79695d] hover:text-[#684a37]"
                  >
                    Quick summary
                  </button>
                </div>
              )}
            </article>
          ))}
        </div>

        {/* Quick Thesis Modal */}
        {selectedThesis && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-xs animate-in fade-in duration-200">
            <div className="bg-[#fffdf9] max-w-lg w-full rounded-2xl p-6 border border-[#684a37]/20 shadow-2xl relative">
              <button
                type="button"
                onClick={() => setSelectedThesis(false)}
                className="absolute top-4 right-4 p-1.5 rounded-full text-[#79695d] hover:bg-[#eee2d2] hover:text-[#35271f] transition-colors"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>
              <div className="eyebrow mb-2">Undergraduate Thesis Focus</div>
              <h3 className="text-xl font-bold text-[#35271f] mb-3 leading-snug">
                Perseverative Thinking, Perceived Stress and Meaning in Life among Thesis Students
              </h3>
              <p className="text-sm text-[#79695d] mb-4 leading-relaxed">
                This study investigated the psychological impacts of recurrent negative thought patterns (perseverative cognition/rumination), perceived stress levels, and existential sense of meaning in life among university students engaged in intensive thesis research. The findings provide quantitative evidence on academic resilience, cognitive vulnerability, and coping mechanisms.
              </p>
              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setSelectedThesis(false)}
                  className="px-4 py-2 text-xs font-semibold text-[#79695d] hover:text-[#35271f]"
                >
                  Close
                </button>
                <a
                  href="https://drive.google.com/file/d/1nVy-p8kK0HedKYOvjba86DZIoHgX5txk/view?usp=drivesdk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#684a37] text-white text-xs font-bold rounded-lg hover:bg-[#35271f] transition-colors"
                >
                  <span>Open Full Document</span>
                  <ExternalLink size={13} />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
