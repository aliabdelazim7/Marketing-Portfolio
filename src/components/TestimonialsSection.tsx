import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { testimonialsList, TestimonialItem } from '../data/content';
import {
  MessageSquare,
  CheckCircle2,
  Maximize2,
  X,
  ShieldCheck,
  Zap,
  TrendingUp,
} from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const { lang, t } = useLanguage();
  const [activeImage, setActiveImage] = useState<{ src: string; alt: string; title: string } | null>(null);

  // Close lightbox on ESC key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveImage(null);
      }
    };
    if (activeImage) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [activeImage]);

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-canvas border-b border-border-hairline relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-border-hairline">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="font-mono text-xs font-bold text-accent uppercase tracking-widest flex items-center gap-1.5">
                <MessageSquare className="w-3.5 h-3.5" />
                {t.testimonialsSection.chapter}
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-ink tracking-tight">
              {t.testimonialsSection.title}
            </h2>
          </div>
          <p className="text-sm sm:text-base text-ink-secondary max-w-lg leading-relaxed">
            {t.testimonialsSection.subtitle}
          </p>
        </div>

        {/* Testimonials Grid (3 High-Impact Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {testimonialsList.map((item: TestimonialItem) => (
            <div
              key={item.id}
              className="group flex flex-col justify-between rounded-3xl bg-canvas-subtle border border-border-hairline hover:border-accent/40 transition-all duration-300 p-6 sm:p-8 shadow-xs hover:shadow-md"
            >
              <div>
                {/* Top Meta Bar */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-5 mb-6 border-b border-border-hairline">
                  <div className="flex items-center gap-2">
                    <span className="flex h-2.5 w-2.5 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-surface border border-border-hairline text-xs font-mono font-medium text-ink-secondary">
                      {lang === 'ar' ? item.categoryAr : item.category}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-mono text-ink-muted">
                    <span className="px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 font-semibold">
                      {lang === 'ar' ? item.metricsBadgeAr : item.metricsBadge}
                    </span>
                    <span>{item.timestamp}</span>
                  </div>
                </div>

                {/* Primary Quote */}
                <div className="relative mb-6">
                  <div className="text-4xl text-accent/20 font-serif leading-none select-none absolute -top-4 -start-2">
                    “
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-ink tracking-tight leading-snug relative z-10 ps-4">
                    {lang === 'ar' ? item.quoteAr : item.quote}
                  </h3>
                  <div className="ps-4 mt-2 text-xs sm:text-sm font-semibold text-accent flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4" />
                    <span>{lang === 'ar' ? item.authorRoleAr : item.authorRole}</span>
                  </div>
                </div>

                {/* Screenshot Preview Card */}
                <div className="mb-6 relative rounded-2xl overflow-hidden border border-border-hairline bg-black/5 dark:bg-black/30 group/img">
                  <div className="aspect-video w-full overflow-hidden flex items-center justify-center bg-surface">
                    <img
                      src={item.screenshot}
                      alt={lang === 'ar' ? item.quoteAr : item.quote}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover/img:scale-102 cursor-pointer"
                      onClick={() =>
                        setActiveImage({
                          src: item.screenshot,
                          alt: lang === 'ar' ? item.quoteAr : item.quote,
                          title: lang === 'ar' ? item.authorRoleAr : item.authorRole,
                        })
                      }
                      loading="lazy"
                    />
                  </div>

                  {/* Overlay button on hover */}
                  <button
                    type="button"
                    onClick={() =>
                      setActiveImage({
                        src: item.screenshot,
                        alt: lang === 'ar' ? item.quoteAr : item.quote,
                        title: lang === 'ar' ? item.authorRoleAr : item.authorRole,
                      })
                    }
                    className="absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-medium text-xs sm:text-sm px-4 py-2 cursor-pointer"
                    aria-label={t.testimonialsSection.zoomPrompt}
                  >
                    <Maximize2 className="w-4 h-4" />
                    <span>{t.testimonialsSection.zoomPrompt}</span>
                  </button>
                </div>

                {/* Context Description */}
                <p className="text-sm text-ink-secondary leading-relaxed mb-6">
                  {lang === 'ar' ? item.contextAr : item.context}
                </p>

                {/* Highlights Checklist */}
                <div className="space-y-2.5 pt-4 border-t border-border-hairline">
                  {(lang === 'ar' ? item.highlightsAr : item.highlights).map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-ink font-medium">
                      <CheckCircle2 className="w-4 h-4 text-emerald-live shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Verification Footer */}
              <div className="mt-6 pt-4 border-t border-border-hairline flex items-center justify-between text-xs text-ink-muted font-mono">
                <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  {t.testimonialsSection.verifiedBadge}
                </span>
                <button
                  type="button"
                  onClick={() =>
                    setActiveImage({
                      src: item.screenshot,
                      alt: lang === 'ar' ? item.quoteAr : item.quote,
                      title: lang === 'ar' ? item.authorRoleAr : item.authorRole,
                    })
                  }
                  className="hover:text-accent transition-colors flex items-center gap-1 cursor-pointer font-sans"
                >
                  <Maximize2 className="w-3 h-3" />
                  <span>{t.testimonialsSection.viewFullChat}</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Trust & Transparency Guarantee Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-canvas border border-border-hairline grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-start">
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="p-2.5 rounded-xl bg-accent/10 text-accent mb-1">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h4 className="font-extrabold text-sm sm:text-base text-ink">
              {lang === 'ar' ? 'شفافية وتحقق كامل' : 'Radical Campaign Transparency'}
            </h4>
            <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
              {lang === 'ar'
                ? 'تقارير دورية موثقة من لوحة مدير الإعلانات مباشرة دون أي تجميل للمؤشرات.'
                : 'Direct access to verified Ads Manager dashboards with zero inflated metrics.'}
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 mb-1">
              <Zap className="w-5 h-5" />
            </div>
            <h4 className="font-extrabold text-sm sm:text-base text-ink">
              {lang === 'ar' ? 'تواصل يومي وسرعة استجابة' : 'Daily Communication Velocity'}
            </h4>
            <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
              {lang === 'ar'
                ? 'متابعة يومية عبر WhatsApp وحل فوري لأي تحديات تقنية أو إرهاق إعلاني.'
                : 'Rapid daily coordination on WhatsApp with instant troubleshooting.'}
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="p-2.5 rounded-xl bg-accent/10 text-accent mb-1">
              <TrendingUp className="w-5 h-5" />
            </div>
            <h4 className="font-extrabold text-sm sm:text-base text-ink">
              {lang === 'ar' ? 'تركيز على صافي الربح' : 'Net Margin Alignment'}
            </h4>
            <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
              {lang === 'ar'
                ? 'إعلانات مدروسة تحقق مبيعات حقيقية وتدفق نقدي فعلي لحسابك البنكي.'
                : 'Treating ad budget as deployed capital engineered for positive bottom-line cash flow.'}
            </p>
          </div>
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setActiveImage(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative max-w-4xl w-full max-h-[90vh] bg-surface rounded-2xl overflow-hidden border border-border-hairline shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-border-hairline bg-canvas">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span className="text-xs sm:text-sm font-semibold text-ink font-mono">
                  {activeImage.title}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setActiveImage(null)}
                className="p-1.5 rounded-lg hover:bg-canvas-subtle text-ink-muted hover:text-ink transition-colors cursor-pointer"
                aria-label={t.testimonialsSection.closeModal}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image */}
            <div className="p-4 overflow-auto flex items-center justify-center max-h-[calc(90vh-60px)] bg-black/10 dark:bg-black/40">
              <img
                src={activeImage.src}
                alt={activeImage.alt}
                className="max-w-full max-h-[75vh] object-contain rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
