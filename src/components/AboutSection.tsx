import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Layers, Database, TrendingUp, CheckCircle2 } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const { lang, t } = useLanguage();

  const pillarIcons = [
    <Layers className="w-5 h-5 text-accent" key="1" />,
    <Database className="w-5 h-5 text-accent" key="2" />,
    <TrendingUp className="w-5 h-5 text-accent" key="3" />,
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-canvas border-b border-border-hairline">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-4">
          <span className="font-mono text-xs font-bold text-accent uppercase tracking-widest">
            {t.about.chapter}
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Bold Narrative */}
          <div className="lg:col-span-7">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-ink tracking-tight leading-snug mb-8">
              {t.about.title}
            </h2>

            <div className="space-y-6 text-base sm:text-lg text-ink-secondary leading-relaxed">
              <p>{t.about.p1}</p>
              <p>{t.about.p2}</p>
              <p>{t.about.p3}</p>
            </div>

            {/* Quick Commitments Checklist */}
            <div className="mt-10 pt-8 border-t border-border-hairline grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-live shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-ink">
                  {lang === 'ar'
                    ? 'مواءمة تكاليف الإعلانات مع هوامش الربح الصافية'
                    : 'Direct alignment with gross contribution margins'}
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-live shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-ink">
                  {lang === 'ar'
                    ? 'اختبار منهجي للزوايا الإعلانية الموجهة قبل توسيع الميزانية'
                    : 'Hypothesis-driven modular creative testing'}
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-live shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-ink">
                  {lang === 'ar'
                    ? 'تقارير أداء أسبوعية شفافة وقابلة للقياس والتطبيق'
                    : 'Jargon-free, transparent weekly accountability'}
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-live shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-ink">
                  {lang === 'ar'
                    ? 'ربط متقدم لتتبع التحويلات عبر الخادم لمواجهة قيود iOS'
                    : 'Server-side CAPI resilience for iOS privacy'}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Three Operating Pillars */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            <div className="p-6 rounded-2xl bg-surface border border-border-hairline shadow-xs">
              <span className="font-mono text-xs text-ink-muted uppercase tracking-wider block mb-4">
                {lang === 'ar' ? 'ركائز إدارة الحملات' : 'Core Operating Axioms'}
              </span>

              <div className="space-y-6">
                {t.about.pillars.map((pillar, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-canvas border border-border-subtle hover:border-accent/40 transition-colors duration-200"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-surface flex items-center justify-center shrink-0">
                        {pillarIcons[idx]}
                      </div>
                      <h3 className="font-bold text-sm sm:text-base text-ink">
                        {pillar.title}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Note on Transparency */}
            <div className="p-5 rounded-2xl bg-ink text-canvas border border-ink-secondary/30">
              <span className="font-mono text-[10px] text-accent uppercase tracking-widest block mb-2 font-bold">
                {lang === 'ar' ? 'معيار الشفافية والمسؤولية المهنية' : 'The Transparency Standard'}
              </span>
              <p className="text-xs text-ink-light-muted leading-relaxed">
                {lang === 'ar'
                  ? 'بعيداً عن الوعود النظرية غير الواقعية؛ أقدم إدارة منضبطة للحملات الإعلانية ترتكز على تدقيق اقتصاديات النشاط التجاري، القضاء على الإنفاق غير المجدي، وبناء منظومات اقتناء عملاء مستقرة ومربحة.'
                  : 'I do not promise magical overnight 10x ROAS or generic hacks. I deliver disciplined media buying that audits real economics, eliminates wasted ad spend, and builds predictable customer acquisition pipelines.'}
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
