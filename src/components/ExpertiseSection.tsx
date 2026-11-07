import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { expertiseData, ExpertiseItem } from '../data/content';
import { CheckCircle2, ChevronRight } from 'lucide-react';

export const ExpertiseSection: React.FC = () => {
  const { lang, t, isRtl } = useLanguage();
  const [activeItem, setActiveItem] = useState<ExpertiseItem>(expertiseData[0]);

  return (
    <section id="expertise" className="py-24 md:py-32 bg-canvas border-b border-border-hairline">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-border-hairline">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="font-mono text-xs font-bold text-accent uppercase tracking-widest">
                {t.expertiseSection.chapter}
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-ink tracking-tight">
              {t.expertiseSection.title}
            </h2>
          </div>
          <p className="text-sm sm:text-base text-ink-secondary max-w-md">
            {t.expertiseSection.subtitle}
          </p>
        </div>

        {/* Dual Editorial Master Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Capability List */}
          <div className="lg:col-span-6 space-y-3">
            {expertiseData.map((item) => {
              const isSelected = activeItem.id === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveItem(item)}
                  className={`w-full text-start p-5 sm:p-6 rounded-xl border transition-all duration-200 cursor-pointer flex items-center justify-between gap-4 ${
                    isSelected
                      ? 'bg-surface border-accent shadow-sm'
                      : 'bg-canvas border-border-hairline hover:bg-surface/50 hover:border-ink/20'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <span className="font-mono text-sm font-bold text-accent pt-0.5">
                      {item.number}
                    </span>
                    <div>
                      <h3 className="font-bold text-base sm:text-lg text-ink tracking-tight">
                        {lang === 'ar' ? item.titleAr : item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-ink-secondary line-clamp-1 mt-1 font-normal">
                        {lang === 'ar' ? item.descriptionAr : item.description}
                      </p>
                    </div>
                  </div>

                  <span className="px-2.5 py-1 rounded bg-canvas border border-border-hairline text-[10px] font-mono uppercase text-ink-muted shrink-0 hidden sm:inline-block">
                    {item.tag}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Column: Deep Inspection Panel */}
          <div className="lg:col-span-6 sticky top-28">
            <div className="rounded-2xl p-6 sm:p-8 bg-surface border border-border-hairline shadow-sm relative overflow-hidden">
              
              {/* Top Bar */}
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-border-hairline text-xs font-mono">
                <span className="text-accent font-bold">
                  {lang === 'ar' ? `الخدمة ${activeItem.number}` : `CAPABILITY_${activeItem.number}`}
                </span>
                <span className="px-2.5 py-1 rounded bg-canvas border border-border-hairline text-ink-secondary font-semibold">
                  {activeItem.tag}
                </span>
              </div>

              {/* Title & Description */}
              <h4 className="text-xl sm:text-2xl font-black text-ink tracking-tight mb-4">
                {lang === 'ar' ? activeItem.titleAr : activeItem.title}
              </h4>

              <p className="text-sm sm:text-base text-ink-secondary leading-relaxed mb-8">
                {lang === 'ar' ? activeItem.descriptionAr : activeItem.description}
              </p>

              {/* Deliverables Checklist */}
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-ink-muted block mb-4 font-bold">
                  {lang === 'ar' ? 'إيه اللي بنفذهولك بالظبط في الخدمة دي:' : 'Execution Scope & Deliverables'}
                </span>

                <div className="space-y-3">
                  {(lang === 'ar' ? activeItem.deliverablesAr : activeItem.deliverables).map(
                    (deliverable, dIdx) => (
                      <div
                        key={dIdx}
                        className="p-3.5 rounded-xl bg-canvas border border-border-hairline flex items-center gap-3"
                      >
                        <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                        <span className="text-xs sm:text-sm font-semibold text-ink">
                          {deliverable}
                        </span>
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* Action */}
              <div className="mt-8 pt-6 border-t border-border-hairline flex items-center justify-between text-xs">
                <span className="font-mono text-ink-muted">
                  {lang === 'ar' ? 'متاحة للتنفيذ في حسابك فوراً' : 'Available for immediate deployment'}
                </span>
                <a
                  href="#contact"
                  className="font-bold text-ink hover:text-accent flex items-center gap-1 transition-colors"
                >
                  <span>{lang === 'ar' ? 'تكلم مع علي' : 'Consult with Ali'}</span>
                  <ChevronRight className={`w-3.5 h-3.5 ${isRtl ? 'rotate-180' : ''}`} />
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
