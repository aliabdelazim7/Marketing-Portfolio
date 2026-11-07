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
  Maximize2,
  X,
  Clock,
} from 'lucide-react';

export const CaseStudiesSection: React.FC = () => {
  const { lang, t, isRtl } = useLanguage();
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<PlatformCategory>('all');
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

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
    if (catId !== 'all') {
      setIsExpanded(true);
    }
  };

  return (
    <section id="work" className="py-20 md:py-28 bg-canvas-subtle border-b border-border-hairline">
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
                {/* Top Card Bar */}
                <div className="px-6 py-3.5 sm:px-8 bg-surface/70 border-b border-border-hairline flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 min-w-0">
                    <span className="text-accent font-bold shrink-0">CASE_0{index + 1}</span>
                    <span className="text-border-hairline shrink-0">•</span>
                    <span className="text-ink font-semibold font-sans">
                      <bdi>{lang === 'ar' ? study.categoryAr : study.category}</bdi>
                    </span>
                    {isFlagship && (
                      <span className="px-2.5 py-0.5 rounded-full bg-accent/10 text-accent font-mono text-[10px] font-bold shrink-0">
                        {lang === 'ar' ? '★ نتائج رئيسية موثقة' : '★ VERIFIED FLAGSHIP'}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-1.5 text-ink-muted text-[11px] shrink-0 font-normal">
                    <Clock className="w-3.5 h-3.5 text-accent" />
                    <span><bdi>{lang === 'ar' ? study.timeframeAr : study.timeframe}</bdi></span>
                  </div>
                </div>

                {/* Main 2-Column Split: Text & Metrics on one side, SCREENSHOT IN THE FACE on other */}
                <div className="grid grid-cols-1 lg:grid-cols-12">
                  
                  {/* Left Column: Narrative, Key Numbers, & Details */}
                  <div className="lg:col-span-6 p-6 sm:p-8 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-border-hairline">
                    <div>
                      {/* Headline */}
                      <h3
                        className="text-xl sm:text-2xl font-extrabold text-ink tracking-tight mb-2 group-hover:text-accent transition-colors duration-200 leading-snug"
                        dir={isRtl ? 'rtl' : 'ltr'}
                      >
                        <bdi>{lang === 'ar' ? study.titleAr : study.title}</bdi>
                      </h3>

                      {/* Tagline */}
                      <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed mb-6 font-medium">
                        {lang === 'ar' ? study.taglineAr : study.tagline}
                      </p>

                      {/* 4 Key Metrics Grid */}
                      <div className="grid grid-cols-2 gap-2.5 sm:gap-3 mb-6">
                        {study.metrics.map((metric, mIdx) => {
                          const parts = metric.value.trim().split(/\s+/);
                          const hasUnit = parts.length >= 2;
                          const numPart = hasUnit ? parts[0] : metric.value;
                          const unitPart = hasUnit ? parts.slice(1).join(' ') : '';

                          return (
                            <div
                              key={mIdx}
                              className="p-3 sm:p-3.5 rounded-xl bg-surface border border-border-hairline shadow-2xs flex flex-col justify-between overflow-hidden min-w-0"
                            >
                              <div className="flex items-baseline gap-1.5 flex-wrap min-w-0 mb-1 leading-none">
                                <span className="font-mono text-base sm:text-lg md:text-xl font-black text-ink tracking-tight break-all">
                                  {numPart}
                                </span>
                                {hasUnit && (
                                  <span className="text-xs font-bold text-ink-muted shrink-0 font-sans">
                                    {unitPart}
                                  </span>
                                )}
                              </div>
                              <div className="min-w-0">
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

                      {/* Problem teaser */}
                      <div className="p-3.5 rounded-xl bg-surface/70 border border-border-hairline text-xs sm:text-sm text-ink-secondary leading-relaxed mb-6">
                        <span className="font-bold text-ink block mb-1">
                          {lang === 'ar' ? 'التحدي التجاري والأهداف:' : 'The Core Challenge:'}
                        </span>
                        {lang === 'ar' ? study.challengeAr : study.challenge}
                      </div>
                    </div>

                    {/* Actions & Tags */}
                    <div className="pt-4 border-t border-border-hairline flex flex-wrap items-center justify-between gap-3">
                      <div className="flex flex-wrap items-center gap-1.5">
                        {study.tags.slice(0, 3).map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2 py-0.5 rounded bg-surface text-[10px] sm:text-[11px] font-mono text-ink-muted border border-border-hairline"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <button
                        onClick={() => setSelectedCaseStudy(study)}
                        className="inline-flex items-center gap-1.5 px-4 py-2 min-h-[40px] rounded-full bg-ink text-canvas hover:bg-accent text-xs font-bold tracking-wide transition-all duration-200 shadow-sm cursor-pointer"
                      >
                        <span>{lang === 'ar' ? 'تفاصيل الاستراتيجية' : 'Full Strategy'}</span>
                        <ArrowUpRight className={`w-3.5 h-3.5 ${isRtl ? 'rotate-[-90deg]' : ''}`} />
                      </button>
                    </div>
                  </div>

                  {/* Right Column: SCREENSHOT IN THE FACE (Raw Verified Capture) */}
                  <div className="lg:col-span-6 p-6 sm:p-8 bg-surface/40 flex flex-col justify-between">
                    <div>
                      {/* Screenshot Header Bar */}
                      <div className="flex items-center justify-between pb-3 mb-3 border-b border-border-hairline text-xs font-mono">
                        <div className="flex items-center gap-2 text-emerald-live font-bold">
                          <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-live opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-live"></span>
                          </span>
                          <span className="text-[11px] sm:text-xs">
                            {study.platform === 'google'
                              ? (lang === 'ar' ? 'سجل معتمد: Google Ads Manager' : 'Verified: Google Ads Manager')
                              : (lang === 'ar' ? 'سجل معتمد: Meta Ads Manager' : 'Verified: Meta Ads Manager')}
                          </span>
                        </div>

                        {study.proofImage && (
                          <button
                            onClick={() => setLightboxImage(study.proofImage || null)}
                            className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-surface hover:bg-border-hairline text-[11px] text-ink-muted hover:text-ink transition-colors cursor-pointer"
                            title={lang === 'ar' ? 'تكبير صورة السجل' : 'Enlarge Capture'}
                          >
                            <Maximize2 className="w-3 h-3 text-accent" />
                            <span>{lang === 'ar' ? 'تكبير الصورة' : 'Enlarge'}</span>
                          </button>
                        )}
                      </div>

                      {/* The Visible Screenshot Preview */}
                      {study.proofImage ? (
                        <div
                          onClick={() => setLightboxImage(study.proofImage || null)}
                          className="relative rounded-xl overflow-hidden border border-border-hairline shadow-sm group/img cursor-zoom-in bg-canvas"
                        >
                          <img
                            src={study.proofImage}
                            alt={study.title}
                            loading="lazy"
                            className="w-full h-[220px] sm:h-[280px] lg:h-[300px] object-cover object-top transition-transform duration-300 group-hover/img:scale-[1.02]"
                          />
                          <div className="absolute inset-0 bg-ink/35 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center p-4">
                            <span className="px-4 py-2 rounded-full bg-ink/90 text-canvas text-xs font-bold font-mono flex items-center gap-2 shadow-lg backdrop-blur-xs">
                              <Maximize2 className="w-3.5 h-3.5 text-accent" />
                              <span>{lang === 'ar' ? 'انقر لتكبير السجل وفحص الأرقام' : 'Click to inspect full screenshot'}</span>
                            </span>
                          </div>
                        </div>
                      ) : (
                        <div className="h-[220px] rounded-xl bg-surface border border-dashed border-border-hairline flex items-center justify-center text-xs font-mono text-ink-muted">
                          {lang === 'ar' ? 'سجل الأداء معتمد ومؤكد' : 'Performance Data Verified'}
                        </div>
                      )}
                    </div>

                    {/* Growth Insight Takeaway */}
                    <div className="mt-5 p-3.5 rounded-xl bg-canvas border border-border-hairline flex items-start gap-2.5">
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
                className="inline-flex items-center gap-2.5 px-7 py-3.5 min-h-[48px] rounded-full bg-ink text-canvas hover:bg-accent text-sm font-bold tracking-wide transition-all duration-200 shadow-md cursor-pointer hover:-translate-y-0.5"
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
              className="inline-flex items-center gap-2 px-6 py-3 min-h-[44px] rounded-full bg-surface hover:bg-canvas border border-border-hairline text-ink-secondary hover:text-ink text-xs sm:text-sm font-bold font-mono transition-colors cursor-pointer"
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

      {/* High-Resolution Screenshot Lightbox Modal */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-ink/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
          onClick={() => setLightboxImage(null)}
        >
          <div
            className="relative max-w-5xl w-full max-h-[92vh] bg-canvas rounded-2xl overflow-hidden shadow-2xl border border-border-hairline flex flex-col my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 bg-surface border-b border-border-hairline">
              <span className="text-xs font-mono font-bold text-ink flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-live" />
                <span>{lang === 'ar' ? 'سجل التحقق من مدير الإعلانات (عرض كامل)' : 'Verified Ads Manager Capture (Full Resolution)'}</span>
              </span>
              <button
                onClick={() => setLightboxImage(null)}
                className="w-10 h-10 min-w-[40px] min-h-[40px] flex items-center justify-center rounded-full bg-canvas hover:bg-border-hairline text-ink transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-2 sm:p-4 overflow-auto max-h-[calc(92vh-64px)] bg-canvas-dark flex items-center justify-center">
              <img
                src={lightboxImage}
                alt="Campaign Proof Screenshot"
                className="max-w-full h-auto object-contain rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
