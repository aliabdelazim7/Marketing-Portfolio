import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ArrowDown, ArrowUpRight, ShieldCheck, Activity, Target, Zap } from 'lucide-react';

export const Hero: React.FC = () => {
  const { lang, t, isRtl } = useLanguage();

  return (
    <section className="relative pt-28 pb-16 sm:pt-32 sm:pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid-pattern border-b border-border-hairline">
      {/* Ambient Architectural Watermark */}
      <div className="absolute right-0 top-1/4 -translate-y-1/2 pointer-events-none select-none opacity-[0.03] text-[18vw] font-black leading-none text-ink font-mono overflow-hidden">
        PERF
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Operational Pill / Signal */}
        <div className="inline-flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-xl sm:rounded-full bg-surface border border-border-hairline text-[11px] sm:text-xs font-mono text-ink-secondary mb-8 shadow-xs max-w-full">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 relative shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-live opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-live"></span>
            </span>
            <span className="font-semibold">{t.hero.badgeText}</span>
          </div>
          <span className="text-border-hairline hidden sm:inline">•</span>
          <span className="text-ink-muted text-[10px] sm:text-xs">{t.meta.location}</span>
        </div>

        {/* Main Editorial Headline Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-end">
          
          <div className="lg:col-span-8">
            <h1 className="text-3xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-ink tracking-tight leading-[1.02] sm:leading-[0.98] mb-6 break-words">
              <span>{t.meta.heroHeadlinePrefix}</span>
              <br />
              <span className="font-serif italic font-normal text-accent tracking-normal">
                {t.meta.heroHeadlineItalic}
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-ink-secondary max-w-2xl leading-relaxed text-balance font-normal mb-10">
              {t.meta.heroSubheadline}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-accent hover:bg-accent-hover text-white text-sm sm:text-base font-bold tracking-wide transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                <span>{t.meta.ctaPrimary}</span>
                <ArrowUpRight className={`w-4 h-4 ${isRtl ? 'rotate-[-90deg]' : ''}`} />
              </a>

              <a
                href="#work"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-surface hover:bg-surface/80 border border-border-hairline text-ink text-sm sm:text-base font-semibold tracking-wide transition-all duration-200"
              >
                <span>{t.meta.ctaSecondary}</span>
                <ArrowDown className="w-4 h-4 text-ink-muted" />
              </a>
            </div>
          </div>

          {/* Right Console: Performance Signals & Verifiable Impact */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            
            {/* Live Media Buyer Telemetry Box */}
            <div dir="ltr" className="text-left rounded-xl p-5 bg-surface/90 border border-border-hairline shadow-sm backdrop-blur-sm">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-border-hairline">
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-accent animate-pulse" />
                  <span className="font-mono text-xs font-bold text-ink uppercase tracking-wider">
                    {lang === 'ar' ? 'مؤشرات الأداء الحية' : 'Live Attribution Rigor'}
                  </span>
                </div>
                <span className="font-mono text-[10px] bg-canvas px-2 py-0.5 rounded border border-border-hairline text-ink-muted">
                  CAPI 3.2
                </span>
              </div>

              {/* Signals list */}
              <div className="space-y-2.5 font-mono text-xs">
                <div className="flex items-center justify-between text-ink-secondary">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-live" />
                    <span>Meta Event Match Score</span>
                  </span>
                  <span className="font-bold text-ink">9.2 / 10</span>
                </div>
                
                <div className="flex items-center justify-between text-ink-secondary">
                  <span className="flex items-center gap-1.5">
                    <Target className="w-3.5 h-3.5 text-accent" />
                    <span>Auction Scalability</span>
                  </span>
                  <span className="font-bold text-ink">CBO Advantage+</span>
                </div>

                <div className="flex items-center justify-between text-ink-secondary">
                  <span className="flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-amber-500" />
                    <span>Creative Fatigue Cycle</span>
                  </span>
                  <span className="font-bold text-emerald-live">14-Day Refresh</span>
                </div>
              </div>

              {/* Verified badge */}
              <div className="mt-4 pt-3 border-t border-border-hairline flex items-center justify-between text-[11px] text-ink-muted">
                <span>{lang === 'ar' ? 'تتبع موثق ومعتمد' : 'Attribution Verified'}</span>
                <span className="font-mono text-accent">GA4 + Pixel + UTM</span>
              </div>
            </div>

            {/* Micro quote */}
            <div className="p-4 rounded-xl bg-canvas border border-border-hairline text-xs text-ink-muted leading-relaxed">
              <span className="font-serif italic text-ink font-semibold text-sm block mb-1">
                {lang === 'ar'
                  ? '«المحتوى الإعلاني هو المحرك الحقيقي للاستحواذ، والبيانات المالية هي البوصلة الوحيدة للنمو.»'
                  : '“Creative is the new targeting. Numbers are the only compass.”'}
              </span>
              <span>— {t.meta.name}</span>
            </div>

          </div>

        </div>

        {/* Verifiable Key Metrics Bento Grid */}
        <div className="mt-16 pt-12 border-t border-border-hairline grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          
          <div className="flex flex-col border-r rtl:border-r-0 rtl:border-l border-border-hairline px-2 sm:px-3">
            <span className="font-mono text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-ink tracking-tight whitespace-nowrap leading-none mb-1.5">
              {t.meta.statAdSpend}
            </span>
            <span className="text-xs sm:text-sm font-semibold text-ink-secondary mt-1">
              {t.meta.statAdSpendLabel}
            </span>
            <span className="font-mono text-[10px] sm:text-[11px] text-ink-muted mt-0.5">
              {lang === 'ar' ? 'مرات ظهور موثقة عبر الحسابات الإعلانية' : 'Delivered across client accounts'}
            </span>
          </div>

          <div className="flex flex-col md:border-r rtl:md:border-r-0 rtl:md:border-l border-border-hairline px-2 sm:px-3">
            <div className="flex flex-wrap items-baseline gap-1.5 mb-1.5">
              <span className="font-mono text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-accent tracking-tight whitespace-nowrap leading-none inline-flex items-baseline gap-1">
                <span>1.18</span>
                <span className="text-sm sm:text-base lg:text-lg font-bold">{lang === 'ar' ? 'ج.م' : 'EGP'}</span>
              </span>
              <span className="font-mono text-[10px] sm:text-xs text-ink-muted whitespace-nowrap">
                {lang === 'ar' ? '/ رسالة' : '/ chat'}
              </span>
            </div>
            <span className="text-xs sm:text-sm font-semibold text-ink-secondary mt-1">
              {t.meta.statAvgRoasLabel}
            </span>
            <span className="font-mono text-[10px] sm:text-[11px] text-ink-muted mt-0.5">
              {lang === 'ar' ? 'أعلى مؤشر كفاءة تكلفة محقق' : 'Peak cost efficiency reached'}
            </span>
          </div>

          <div className="flex flex-col border-r rtl:border-r-0 rtl:border-l border-border-hairline px-2 sm:px-3">
            <span className="font-mono text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-ink tracking-tight whitespace-nowrap leading-none mb-1.5">
              {t.meta.statConversionLift}
            </span>
            <span className="text-xs sm:text-sm font-semibold text-ink-secondary mt-1">
              {t.meta.statConversionLiftLabel}
            </span>
            <span className="font-mono text-[10px] sm:text-[11px] text-ink-muted mt-0.5">
              {lang === 'ar' ? 'محادثات شراء مباشر وطلبات مؤكدة' : 'Direct order conversations'}
            </span>
          </div>

          <div className="flex flex-col px-2 sm:px-3">
            <span className="font-mono text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-ink tracking-tight whitespace-nowrap leading-none mb-1.5">
              {t.meta.statCampaigns}
            </span>
            <span className="text-xs sm:text-sm font-semibold text-ink-secondary mt-1">
              {t.meta.statCampaignsLabel}
            </span>
            <span className="font-mono text-[10px] sm:text-[11px] text-ink-muted mt-0.5">
              {lang === 'ar' ? 'حسابات مستهدفة فريدة عبر المنصات' : 'Unique target audience'}
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};
