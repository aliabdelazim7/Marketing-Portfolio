import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { caseStudiesList, CaseStudy, PlatformCategory } from '../data/content';
import { CaseStudyModal } from './CaseStudyModal';
import {
  ArrowUpRight,
  TrendingUp,
  ShieldCheck,
  ChevronDown,
  ChevronUp,
  Sparkles,
  Layers,
  Search,
  ShoppingBag,
  Briefcase,
} from 'lucide-react';

export const CaseStudiesSection: React.FC = () => {
  const { lang, t, isRtl } = useLanguage();
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<PlatformCategory>('all');
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  // Category counts
  const counts = {
    all: caseStudiesList.length,
    meta: caseStudiesList.filter((s) => s.platform === 'meta').length,
    google: caseStudiesList.filter((s) => s.platform === 'google').length,
    ecommerce: caseStudiesList.filter((s) => s.platform === 'ecommerce').length,
    b2b: caseStudiesList.filter((s) => s.platform === 'b2b').length,
  };

  const filterTabs: { id: PlatformCategory; labelEn: string; labelAr: string; icon: React.ReactNode }[] = [
    {
      id: 'all',
      labelEn: t.caseStudiesSection.filterAll,
      labelAr: t.caseStudiesSection.filterAll,
      icon: <Sparkles className="w-3.5 h-3.5" />,
    },
    {
      id: 'google',
      labelEn: t.caseStudiesSection.filterGoogle,
      labelAr: t.caseStudiesSection.filterGoogle,
      icon: <Search className="w-3.5 h-3.5" />,
    },
    {
      id: 'meta',
      labelEn: t.caseStudiesSection.filterMeta,
      labelAr: t.caseStudiesSection.filterMeta,
      icon: <Layers className="w-3.5 h-3.5" />,
    },
    {
      id: 'ecommerce',
      labelEn: t.caseStudiesSection.filterEcommerce,
      labelAr: t.caseStudiesSection.filterEcommerce,
      icon: <ShoppingBag className="w-3.5 h-3.5" />,
    },
    {
      id: 'b2b',
      labelEn: t.caseStudiesSection.filterB2b,
      labelAr: t.caseStudiesSection.filterB2b,
      icon: <Briefcase className="w-3.5 h-3.5" />,
    },
  ];

  // Filtering logic
  const filteredList =
    selectedCategory === 'all'
      ? caseStudiesList
      : caseStudiesList.filter((s) => s.platform === selectedCategory);

  // In 'all' view, only show the first 2 flagship cases if not expanded
  const displayedList =
    selectedCategory === 'all' && !isExpanded ? filteredList.slice(0, 2) : filteredList;

  const handleFilterSelect = (catId: PlatformCategory) => {
    setSelectedCategory(catId);
    // When user selects a specific category tab other than all, we show all of its items
    if (catId !== 'all') {
      setIsExpanded(true);
    }
  };

  return (
    <section id="work" className="py-24 md:py-32 bg-canvas-subtle border-b border-border-hairline">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-8 border-b border-border-hairline">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="font-mono text-xs font-bold text-accent uppercase tracking-widest">
                {t.caseStudiesSection.chapter}
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-ink tracking-tight">
              {t.caseStudiesSection.title}
            </h2>
          </div>
          <p className="text-sm sm:text-base text-ink-secondary max-w-md">
            {t.caseStudiesSection.subtitle}
          </p>
        </div>

        {/* Interactive Filter Pills Bar */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-10">
          {filterTabs.map((tab) => {
            const isSelected = selectedCategory === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => handleFilterSelect(tab.id)}
                className={`inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 min-h-[40px] sm:min-h-[44px] rounded-full text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer shadow-2xs ${
                  isSelected
                    ? 'bg-ink text-canvas border border-ink shadow-sm'
                    : 'bg-canvas hover:bg-surface border border-border-hairline text-ink-secondary hover:text-ink'
                }`}
              >
                <span className={isSelected ? 'text-accent' : 'text-ink-muted'}>{tab.icon}</span>
                <span>{lang === 'ar' ? tab.labelAr : tab.labelEn}</span>
                <span
                  className={`text-[10px] font-mono px-1.5 py-0.5 rounded-full ${
                    isSelected ? 'bg-canvas/20 text-canvas' : 'bg-surface text-ink-muted'
                  }`}
                >
                  {counts[tab.id]}
                </span>
              </button>
            );
          })}
        </div>

        {/* Case Studies Editorial Spreads */}
        <div className="space-y-12 transition-all duration-300">
          {displayedList.map((study, index) => {
            const isFlagship = index < 2 && selectedCategory === 'all';
            return (
              <article
                key={study.id}
                className={`group rounded-2xl bg-canvas border transition-all duration-300 shadow-xs hover:shadow-md overflow-hidden ${
                  isFlagship
                    ? 'border-accent/40 ring-1 ring-accent/20 hover:border-accent'
                    : 'border-border-hairline hover:border-accent/50'
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12">
                  {/* Left Meta & Narrative Column */}
                  <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-border-hairline">
                    <div>
                      {/* Index & Category Header */}
                      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-4 border-b border-border-hairline text-xs font-mono">
                        <div className="flex flex-wrap items-center gap-2 sm:gap-3 min-w-0">
                          <span className="text-accent font-bold shrink-0">CASE_0{index + 1}</span>
                          <span className="text-border-hairline shrink-0">•</span>
                          <span className="text-ink-muted">
                            <bdi>{lang === 'ar' ? study.categoryAr : study.category}</bdi>
                          </span>
                          {isFlagship && (
                            <span className="px-2 py-0.5 rounded bg-accent/10 text-accent font-mono text-[10px] font-bold shrink-0">
                              {lang === 'ar' ? '★ دراسة رئيسية' : '★ FLAGSHIP CASE'}
                            </span>
                          )}
                        </div>
                        <span className="text-ink-muted text-[11px] shrink-0 font-normal">
                          <bdi>{lang === 'ar' ? study.timeframeAr : study.timeframe}</bdi>
                        </span>
                      </div>

                      {/* Headline */}
                      <h3
                        className="text-xl sm:text-2xl md:text-3xl font-extrabold text-ink tracking-tight mb-4 group-hover:text-accent transition-colors duration-200 leading-snug"
                        dir={isRtl ? 'rtl' : 'ltr'}
                      >
                        <bdi>{lang === 'ar' ? study.titleAr : study.title}</bdi>
                      </h3>

                      {/* Tagline */}
                      <p className="text-sm sm:text-base text-ink-secondary leading-relaxed mb-6 font-medium">
                        {lang === 'ar' ? study.taglineAr : study.tagline}
                      </p>

                      {/* Problem teaser */}
                      <div className="p-4 rounded-xl bg-surface/70 border border-border-hairline text-xs sm:text-sm text-ink-secondary mb-6 leading-relaxed">
                        <span className="font-bold text-ink block mb-1">
                          {lang === 'ar' ? 'التحدي التشغيلي والأهداف:' : 'The Core Challenge:'}
                        </span>
                        {lang === 'ar' ? study.challengeAr : study.challenge}
                      </div>
                    </div>

                    {/* Actions & Tags */}
                    <div className="pt-4 border-t border-border-hairline flex flex-wrap items-center justify-between gap-4">
                      <div className="flex flex-wrap items-center gap-2">
                        {study.tags.slice(0, 3).map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2.5 py-1 rounded bg-surface text-[11px] font-mono text-ink-muted border border-border-hairline"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex flex-wrap items-center gap-2">
                        {study.proofImage && (
                          <a
                            href={study.proofImage}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3.5 py-2 min-h-[40px] rounded-full bg-surface hover:bg-emerald-live hover:text-white text-[11px] font-mono font-bold text-ink border border-border-hairline transition-colors"
                            title={
                              lang === 'ar'
                                ? 'سجل التحقق من مدير الإعلانات'
                                : 'Inspect raw Ads Manager capture'
                            }
                          >
                            <ShieldCheck className="w-3.5 h-3.5 text-emerald-live" />
                            <span>
                              {study.platform === 'google'
                                ? lang === 'ar'
                                ? 'توثيق Google Ads'
                                : 'Google Proof'
                              : lang === 'ar'
                              ? 'توثيق الحساب'
                              : 'Verified Proof'}
                            </span>
                          </a>
                        )}

                        <button
                          onClick={() => setSelectedCaseStudy(study)}
                          className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 min-h-[40px] rounded-full bg-ink text-canvas hover:bg-accent text-xs sm:text-sm font-bold tracking-wide transition-all duration-200 shadow-sm cursor-pointer"
                        >
                          <span>{t.caseStudiesSection.ctaDetails}</span>
                          <ArrowUpRight className={`w-4 h-4 ${isRtl ? 'rotate-[-90deg]' : ''}`} />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Right Metrics Grid Column */}
                  <div className="lg:col-span-5 bg-surface/50 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                    <div>
                      <span className="font-mono text-xs uppercase tracking-wider text-ink-muted block mb-6 font-bold">
                        {lang === 'ar' ? 'المؤشرات والنتائج الموثقة' : 'Verified Performance Metrics'}
                      </span>

                      <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-5">
                        {study.metrics.map((metric, mIdx) => {
                          const parts = metric.value.trim().split(/\s+/);
                          const hasUnit = parts.length >= 2;
                          const numPart = hasUnit ? parts[0] : metric.value;
                          const unitPart = hasUnit ? parts.slice(1).join(' ') : '';

                          return (
                            <div
                              key={mIdx}
                              className="p-3.5 sm:p-4 rounded-xl bg-canvas border border-border-hairline shadow-xs flex flex-col justify-between overflow-hidden min-w-0"
                            >
                              <div className="flex items-baseline gap-1.5 flex-wrap min-w-0 mb-1.5 leading-none">
                                <span className="font-mono text-base sm:text-lg md:text-xl lg:text-2xl font-black text-ink tracking-tight break-all">
                                  {numPart}
                                </span>
                                {hasUnit && (
                                  <span className="text-xs sm:text-sm font-bold text-ink-muted shrink-0 font-sans">
                                    {unitPart}
                                  </span>
                                )}
                              </div>
                              <div className="mt-1 min-w-0">
                                <span className="text-xs font-bold text-ink-secondary block truncate">
                                  {lang === 'ar' ? metric.labelAr : metric.label}
                                </span>
                                <span className="font-mono text-[10px] text-ink-muted block mt-0.5 line-clamp-1">
                                  {lang === 'ar' ? metric.sublabelAr : metric.sublabel}
                                </span>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Quick takeaway bar */}
                    <div className="mt-8 p-4 rounded-xl bg-canvas border border-border-hairline flex items-start gap-3">
                      <TrendingUp className="w-4 h-4 text-emerald-live shrink-0 mt-0.5" />
                      <p className="text-xs text-ink-secondary leading-relaxed">
                        <span className="font-bold text-ink">
                          {lang === 'ar' ? 'الرؤية التسويقية: ' : 'Growth Insight: '}
                        </span>
                        {lang === 'ar' ? study.creativeTesting.learningAr : study.creativeTesting.learning}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Expand Banner / Toggle Mechanism */}
        {selectedCategory === 'all' && !isExpanded && (
          <div className="mt-12 p-8 sm:p-10 rounded-2xl bg-canvas border border-border-hairline text-center hover:border-accent/40 transition-all duration-300 shadow-xs relative overflow-hidden">
            <div className="max-w-xl mx-auto flex flex-col items-center">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/10 text-accent font-mono text-xs font-bold mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{lang === 'ar' ? '✦ أرشيف الحملات والنتائج' : '✦ Verified Campaign Archives'}</span>
              </span>

              <h4 className="text-xl sm:text-2xl font-black text-ink tracking-tight mb-2">
                {lang === 'ar'
                  ? `استكشف ${caseStudiesList.length - 2} دراسات حالة إضافية موثقة`
                  : `Explore ${caseStudiesList.length - 2} More Verified Case Studies`}
              </h4>

              <p className="text-xs sm:text-sm text-ink-secondary mb-6 leading-relaxed max-w-md">
                {t.caseStudiesSection.expandSubtitle}
              </p>

              <button
                onClick={() => setIsExpanded(true)}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-ink text-canvas hover:bg-accent text-sm font-bold tracking-wide transition-all duration-200 shadow-md cursor-pointer hover:-translate-y-0.5"
              >
                <span>
                  {t.caseStudiesSection.expandButton} (+{caseStudiesList.length - 2})
                </span>
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Collapse button when expanded in 'all' view */}
        {selectedCategory === 'all' && isExpanded && (
          <div className="mt-12 text-center">
            <button
              onClick={() => {
                setIsExpanded(false);
                document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-surface hover:bg-canvas border border-border-hairline text-ink-secondary hover:text-ink text-xs sm:text-sm font-bold font-mono transition-colors cursor-pointer"
            >
              <ChevronUp className="w-4 h-4" />
              <span>{t.caseStudiesSection.collapseButton}</span>
            </button>
          </div>
        )}
      </div>

      {/* Deep Breakdown Modal */}
      <CaseStudyModal
        caseStudy={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
      />
    </section>
  );
};
