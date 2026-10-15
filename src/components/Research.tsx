import React, { useState } from 'react';
import { Copy, Check, BookCheck, Clock, Lightbulb } from 'lucide-react';
import { publicationsData, researchInProgressData } from '../data/portfolioData';

export const Research: React.FC = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'all' | 'published' | 'in-progress'>('all');

  const handleCopyCitation = (pub: typeof publicationsData[0]) => {
    const citation = `Yaqoob, M. (${pub.year}). ${pub.title}. ${pub.journal}, ${pub.citationDetails}`;
    navigator.clipboard.writeText(citation);
    setCopiedId(pub.id);
    setTimeout(() => {
      setCopiedId(null);
    }, 2000);
  };

  return (
    <section id="research" className="py-24">
      <div className="max-w-[1120px] mx-auto px-5">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="eyebrow block mb-2">Evidence & inquiry</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#35271f] tracking-tight mb-3">
              Research & publications
            </h2>
            <p className="text-base text-[#79695d]">
              Selected publications and ongoing research interests in psychological wellbeing, social relationships, and decision-making.
            </p>
          </div>

          {/* Filter tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-[#eee2d2]/70 rounded-xl border border-[#684a37]/15 shrink-0 self-start md:self-auto">
            <button
              type="button"
              onClick={() => setActiveTab('all')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                activeTab === 'all'
                  ? 'bg-[#684a37] text-white shadow-xs'
                  : 'text-[#684a37] hover:text-[#35271f]'
              }`}
            >
              All Items
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('published')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                activeTab === 'published'
                  ? 'bg-[#684a37] text-white shadow-xs'
                  : 'text-[#684a37] hover:text-[#35271f]'
              }`}
            >
              Publications ({publicationsData.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('in-progress')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                activeTab === 'in-progress'
                  ? 'bg-[#684a37] text-white shadow-xs'
                  : 'text-[#684a37] hover:text-[#35271f]'
              }`}
            >
              In Progress
            </button>
          </div>
        </div>

        {/* Selected Publications Grid */}
        {(activeTab === 'all' || activeTab === 'published') && (
          <div className="mb-14">
            <div className="flex items-center gap-2 mb-6">
              <BookCheck size={18} className="text-[#684a37]" />
              <h3 className="text-lg font-bold text-[#35271f]">
                Published Journal Articles
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {publicationsData.map((pub) => (
                <article
                  key={pub.id}
                  className="bg-[#fffdf9] border border-[#684a37]/15 rounded-2xl p-7 shadow-xs hover:shadow-warm hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#684a37]">
                        {pub.year} · {pub.role}
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-[#35271f] leading-snug mb-3 line-clamp-3">
                      {pub.title}
                    </h4>

                    <p className="text-xs text-[#79695d] italic mb-1">
                      {pub.journal}
                    </p>
                    <p className="text-xs text-[#79695d] mb-4">
                      {pub.citationDetails}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#684a37]/10 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full text-[11px] font-semibold text-[#684a37] bg-[#eee2d2]/60 border border-[#684a37]/15">
                      {pub.tag}
                    </span>

                    <button
                      type="button"
                      onClick={() => handleCopyCitation(pub)}
                      className="inline-flex items-center gap-1.5 text-xs text-[#79695d] hover:text-[#684a37] transition-colors py-1 px-2 rounded-md hover:bg-[#eee2d2]/50"
                      title="Copy APA formatted citation"
                    >
                      {copiedId === pub.id ? (
                        <>
                          <Check size={13} className="text-emerald-700" />
                          <span className="text-emerald-700 font-semibold text-[11px]">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy size={13} />
                          <span className="text-[11px]">Copy cite</span>
                        </>
                      )}
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* Research In Progress & Interests */}
        {(activeTab === 'all' || activeTab === 'in-progress') && (
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Clock size={18} className="text-[#684a37]" />
              <h3 className="text-lg font-bold text-[#35271f]">
                Research In Progress & Areas of Focus
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {researchInProgressData.map((item, index) => (
                <article
                  key={item.id}
                  className="bg-[#fffdf9] border border-[#684a37]/15 rounded-2xl p-7 shadow-xs hover:shadow-warm hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#eee2d2]/80 flex items-center justify-center text-[#684a37] mb-4">
                    {index === 2 ? <Lightbulb size={20} /> : <Clock size={20} />}
                  </div>

                  <h4 className="text-base font-bold text-[#35271f] leading-snug mb-2.5">
                    {item.title}
                  </h4>

                  <p className="text-sm text-[#79695d] leading-relaxed">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
