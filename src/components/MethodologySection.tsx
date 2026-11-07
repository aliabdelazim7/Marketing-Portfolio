import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { methodologySteps } from '../data/content';
import { Check } from 'lucide-react';

export const MethodologySection: React.FC = () => {
  const { lang, t } = useLanguage();
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const activeStep = methodologySteps[activeStepIndex];

  return (
    <section id="methodology" className="py-24 md:py-32 bg-canvas-subtle border-b border-border-hairline">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-border-hairline">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="font-mono text-xs font-bold text-accent uppercase tracking-widest">
                {t.methodologySection.chapter}
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-ink tracking-tight">
              {t.methodologySection.title}
            </h2>
          </div>
          <p className="text-sm sm:text-base text-ink-secondary max-w-md">
            {t.methodologySection.subtitle}
          </p>
        </div>

        {/* 7-Step Interactive Pipeline Track */}
        <div className="mb-10">
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
            {methodologySteps.map((step, idx) => {
              const isActive = idx === activeStepIndex;
              return (
                <button
                  key={step.step}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`p-3.5 rounded-xl text-start border transition-all duration-150 cursor-pointer flex flex-col justify-between h-24 ${
                    isActive
                      ? 'bg-ink text-canvas border-ink shadow-sm'
                      : 'bg-canvas text-ink border-border-hairline hover:bg-surface'
                  }`}
                >
                  <span
                    className={`font-mono text-xs font-bold ${
                      isActive ? 'text-accent' : 'text-ink-muted'
                    }`}
                  >
                    {lang === 'ar' ? `المرحلة ${step.step}` : `PHASE ${step.step}`}
                  </span>
                  <span className="text-xs font-bold line-clamp-2 leading-snug">
                    {lang === 'ar' ? step.titleAr : step.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Stage Detailed Breakdown Spread */}
        <div className="rounded-2xl bg-canvas border border-border-hairline p-6 sm:p-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Info */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2.5 py-1 rounded bg-accent/10 text-accent font-mono text-xs font-bold">
                  {lang === 'ar' ? `المرحلة ${activeStep.step} من 07` : `STAGE ${activeStep.step} OF 07`}
                </span>
                <span className="text-ink-muted text-xs font-mono">
                  {lang === 'ar' ? 'تسلسل تشغيلي معياري' : 'Standard Operating Sequence'}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-ink tracking-tight mb-4">
                {lang === 'ar' ? activeStep.titleAr : activeStep.title}
              </h3>

              <p className="text-base sm:text-lg text-ink-secondary leading-relaxed mb-6 font-medium">
                {lang === 'ar' ? activeStep.shortDescAr : activeStep.shortDesc}
              </p>

              {/* Tactical bullets */}
              <div className="space-y-3 mb-8">
                {(lang === 'ar' ? activeStep.detailsAr : activeStep.details).map((detail, dIdx) => (
                  <div key={dIdx} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-ink-secondary">
                      {detail}
                    </span>
                  </div>
                ))}
              </div>

              {/* Navigation stepper buttons */}
              <div className="flex items-center gap-3 pt-4 border-t border-border-hairline">
                <button
                  disabled={activeStepIndex === 0}
                  onClick={() => setActiveStepIndex((prev) => Math.max(0, prev - 1))}
                  className="min-h-[44px] px-5 py-2.5 rounded-lg bg-surface border border-border-hairline text-xs font-bold text-ink disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer hover:bg-border-hairline flex items-center justify-center transition-colors"
                >
                  {lang === 'ar' ? 'المرحلة السابقة' : 'Previous Phase'}
                </button>

                <button
                  disabled={activeStepIndex === methodologySteps.length - 1}
                  onClick={() =>
                    setActiveStepIndex((prev) => Math.min(methodologySteps.length - 1, prev + 1))
                  }
                  className="min-h-[44px] px-5 py-2.5 rounded-lg bg-ink text-canvas text-xs font-bold hover:bg-accent disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer transition-colors flex items-center justify-center"
                >
                  {lang === 'ar' ? 'المرحلة التالية' : 'Next Phase'}
                </button>
              </div>
            </div>

            {/* Right Output Manifest Card */}
            <div className="lg:col-span-5 bg-surface rounded-xl p-6 sm:p-8 border border-border-hairline">
              <span className="font-mono text-xs uppercase text-ink-muted font-bold block mb-3">
                {t.methodologySection.keyDeliverable}
              </span>

              <div className="p-4 rounded-xl bg-canvas border border-border-hairline mb-6">
                <span className="font-mono text-accent text-xs font-bold block mb-1">
                  OFFICIAL ARTIFACT
                </span>
                <p className="text-base sm:text-lg font-bold text-ink leading-snug">
                  {lang === 'ar' ? activeStep.outputAr : activeStep.output}
                </p>
              </div>

              <div className="space-y-3 text-xs text-ink-secondary leading-relaxed">
                <p>
                  {lang === 'ar'
                    ? 'تنتج كل مرحلة مخرجات موثقة ومعتمدة قبل الانتقال للمرحلة التالية، لضمان كفاءة الإنفاق وحماية رأس المال الإعلاني.'
                    : 'Each phase produces verifiable artifacts that require mutual approval before capital deployment, eliminating misalignment.'}
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
