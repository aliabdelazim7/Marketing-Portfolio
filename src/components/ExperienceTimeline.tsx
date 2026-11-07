import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { experienceTimeline } from '../data/content';
import { Award, Briefcase, Calendar, CheckCircle2 } from 'lucide-react';

export const ExperienceTimeline: React.FC = () => {
  const { lang, t } = useLanguage();

  return (
    <section id="timeline" className="py-24 md:py-32 bg-canvas-subtle border-b border-border-hairline">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-border-hairline">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="font-mono text-xs font-bold text-accent uppercase tracking-widest">
                {t.experienceSection.chapter}
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-ink tracking-tight">
              {t.experienceSection.title}
            </h2>
          </div>
          <p className="text-sm sm:text-base text-ink-secondary max-w-md">
            {t.experienceSection.subtitle}
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="space-y-8 max-w-4xl mx-auto">
          {experienceTimeline.map((item, index) => (
            <div
              key={index}
              className="p-6 sm:p-8 rounded-2xl bg-canvas border border-border-hairline hover:border-accent/40 transition-colors shadow-xs"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-4 border-b border-border-hairline">
                <div className="flex items-center gap-2">
                  <span className="p-2 rounded-lg bg-surface text-accent">
                    <Briefcase className="w-4 h-4" />
                  </span>
                  <div>
                    <h3 className="font-extrabold text-lg sm:text-xl text-ink">
                      {lang === 'ar' ? item.roleAr : item.role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 mt-0.5">
                      <span className="text-xs sm:text-sm font-semibold text-ink-secondary">
                        {lang === 'ar' ? item.organizationAr : item.organization}
                      </span>
                      <span className="text-border-hairline hidden sm:inline">•</span>
                      <span className="px-2 py-0.5 rounded bg-surface border border-border-hairline text-[10px] sm:text-[11px] font-mono text-ink-muted">
                        {lang === 'ar' ? item.typeAr : item.type}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 font-mono text-xs text-ink-muted">
                  <Calendar className="w-3.5 h-3.5 text-accent" />
                  <span>{lang === 'ar' ? item.periodAr : item.period}</span>
                </div>
              </div>

              <p className="text-sm sm:text-base text-ink-secondary leading-relaxed mb-6">
                {lang === 'ar' ? item.summaryAr : item.summary}
              </p>

              {/* Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {(lang === 'ar' ? item.highlightsAr : item.highlights).map((h, hIdx) => (
                  <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-ink-secondary">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>

            </div>
          ))}

          {/* Media Buying Certifications & Standards Banner */}
          <div className="p-6 sm:p-8 rounded-2xl bg-surface border border-border-hairline flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="flex items-start gap-3">
              <div className="p-2.5 rounded-xl bg-accent text-white shrink-0 mt-0.5">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-base text-ink">
                  {lang === 'ar' ? 'معايير وخبرة عملية معتمدة' : 'Verified Media Buying Standards'}
                </h4>
                <p className="text-xs sm:text-sm text-ink-secondary mt-1">
                  {lang === 'ar'
                    ? 'تطبيق عملي يومي في خوارزميات إعلانات ميتا، تتبع السيرفر CAPI، واختبار وتطوير الفيديوهات البيعية المباشرة.'
                    : 'Trained and tested in Meta auction dynamics, server-side Conversions API integration, and direct-response creative frameworks.'}
                </p>
              </div>
            </div>

            <span className="px-3 py-1.5 rounded-full bg-canvas border border-border-hairline font-mono text-xs font-bold text-accent shrink-0">
              {lang === 'ar' ? 'عامان من الخبرة العملية وإدارة الميزانيات' : '2 Years Practical Active Spend'}
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};
