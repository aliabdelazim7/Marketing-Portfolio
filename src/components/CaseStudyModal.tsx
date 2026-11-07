import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { CaseStudy } from '../data/content';
import { X, ArrowRight, ArrowLeft, ArrowUpRight, Check, Sparkles, Target, Layers, Lightbulb, PieChart, ShieldCheck } from 'lucide-react';

interface CaseStudyModalProps {
  caseStudy: CaseStudy | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ caseStudy, onClose }) => {
  const { lang, t, isRtl } = useLanguage();
  const [activeTab, setActiveTab] = useState<'overview' | 'funnel' | 'creative' | 'results' | 'proof'>('overview');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (caseStudy) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [caseStudy, onClose]);

  if (!caseStudy) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-ink/70 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-4xl bg-canvas rounded-2xl shadow-2xl border border-border-hairline z-10 overflow-hidden flex flex-col max-h-[92vh] my-auto">
        
        {/* Modal Header */}
        <div className="p-6 sm:p-8 bg-surface border-b border-border-hairline flex items-start justify-between gap-4">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-2.5 py-1 rounded bg-accent text-white text-[11px] font-bold tracking-wider uppercase font-mono">
                {lang === 'ar' ? caseStudy.categoryAr : caseStudy.category}
              </span>
              <span className="text-xs font-mono text-ink-muted">
                {lang === 'ar' ? caseStudy.timeframeAr : caseStudy.timeframe}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-ink tracking-tight">
              {lang === 'ar' ? caseStudy.titleAr : caseStudy.title}
            </h3>
            <p className="text-xs sm:text-sm text-ink-secondary mt-1 font-mono">
              {lang === 'ar' ? `القطاع: ${caseStudy.clientIndustryAr}` : `Sector: ${caseStudy.clientIndustry}`}
            </p>
          </div>

          <button
            onClick={onClose}
            className="w-11 h-11 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full bg-canvas hover:bg-border-hairline text-ink transition-colors cursor-pointer shrink-0"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center gap-2 px-6 pt-3 bg-surface/50 border-b border-border-hairline overflow-x-auto no-scrollbar">
          <button
            onClick={() => setActiveTab('overview')}
            className={`min-h-[44px] flex items-center pb-3 px-3 text-xs sm:text-sm font-bold tracking-wider uppercase whitespace-nowrap transition-colors border-b-2 ${
              activeTab === 'overview'
                ? 'border-accent text-accent'
                : 'border-transparent text-ink-muted hover:text-ink'
            }`}
          >
            {lang === 'ar' ? 'نظرة عامة والتحدي' : 'Overview & Challenge'}
          </button>

          <button
            onClick={() => setActiveTab('funnel')}
            className={`min-h-[44px] flex items-center pb-3 px-3 text-xs sm:text-sm font-bold tracking-wider uppercase whitespace-nowrap transition-colors border-b-2 ${
              activeTab === 'funnel'
                ? 'border-accent text-accent'
                : 'border-transparent text-ink-muted hover:text-ink'
            }`}
          >
            {lang === 'ar' ? 'هيكلة الحملات والمسار' : 'Campaign Architecture'}
          </button>

          <button
            onClick={() => setActiveTab('creative')}
            className={`min-h-[44px] flex items-center pb-3 px-3 text-xs sm:text-sm font-bold tracking-wider uppercase whitespace-nowrap transition-colors border-b-2 ${
              activeTab === 'creative'
                ? 'border-accent text-accent'
                : 'border-transparent text-ink-muted hover:text-ink'
            }`}
          >
            {lang === 'ar' ? 'اختبار الإعلانات والفيديوهات' : 'Creative Testing Matrix'}
          </button>

          <button
            onClick={() => setActiveTab('results')}
            className={`min-h-[44px] flex items-center pb-3 px-3 text-xs sm:text-sm font-bold tracking-wider uppercase whitespace-nowrap transition-colors border-b-2 ${
              activeTab === 'results'
                ? 'border-accent text-accent'
                : 'border-transparent text-ink-muted hover:text-ink'
            }`}
          >
            {lang === 'ar' ? 'النتائج والدروس المستفادة' : 'Results & Learnings'}
          </button>

          {caseStudy.proofImage && (
            <button
              onClick={() => setActiveTab('proof')}
              className={`min-h-[44px] flex items-center pb-3 px-3 text-xs sm:text-sm font-bold tracking-wider uppercase whitespace-nowrap transition-colors border-b-2 flex items-center gap-1.5 ${
                activeTab === 'proof'
                  ? 'border-emerald-live text-emerald-live'
                  : 'border-transparent text-ink-muted hover:text-emerald-live'
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>{lang === 'ar' ? 'سجل التحقق من مدير الإعلانات' : 'Ads Manager Proof'}</span>
            </button>
          )}
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 flex-1">
          
          {/* TAB 1: OVERVIEW & CHALLENGE */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              
              {/* Highlight Metrics Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl bg-surface border border-border-hairline">
                {caseStudy.metrics.map((m, idx) => {
                  const parts = m.value.trim().split(/\s+/);
                  const hasUnit = parts.length >= 2;
                  const numPart = hasUnit ? parts[0] : m.value;
                  const unitPart = hasUnit ? parts.slice(1).join(' ') : '';

                  return (
                    <div key={idx} className="flex flex-col min-w-0 overflow-hidden">
                      <div className="flex items-baseline gap-1 flex-wrap min-w-0 mb-1 leading-none">
                        <span className="font-mono text-lg sm:text-xl md:text-2xl font-black text-ink tracking-tight break-all">
                          {numPart}
                        </span>
                        {hasUnit && (
                          <span className="text-xs sm:text-sm font-bold text-ink-muted shrink-0 font-sans">
                            {unitPart}
                          </span>
                        )}
                      </div>
                      <span className="text-xs font-bold text-ink-secondary mt-1 truncate">
                        {lang === 'ar' ? m.labelAr : m.label}
                      </span>
                      <span className="font-mono text-[10px] text-ink-muted mt-0.5 truncate">
                        {lang === 'ar' ? m.sublabelAr : m.sublabel}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Challenge */}
              <div className="p-5 rounded-xl bg-canvas border border-border-hairline">
                <div className="flex items-center gap-2 mb-3">
                  <Target className="w-4 h-4 text-accent" />
                  <h4 className="font-bold text-base text-ink">
                    {t.caseStudiesSection.modalTitles.challenge}
                  </h4>
                </div>
                <p className="text-sm sm:text-base text-ink-secondary leading-relaxed">
                  {lang === 'ar' ? caseStudy.challengeAr : caseStudy.challenge}
                </p>
              </div>

              {/* Strategy */}
              <div className="p-5 rounded-xl bg-surface/70 border border-border-hairline">
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles className="w-4 h-4 text-emerald-live" />
                  <h4 className="font-bold text-base text-ink">
                    {t.caseStudiesSection.modalTitles.strategy}
                  </h4>
                </div>
                <p className="text-sm sm:text-base text-ink-secondary leading-relaxed">
                  {lang === 'ar' ? caseStudy.strategyAr : caseStudy.strategy}
                </p>
              </div>

            </div>
          )}

          {/* TAB 2: FUNNEL ARCHITECTURE */}
          {activeTab === 'funnel' && (
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-accent" />
                <h4 className="font-bold text-base text-ink">
                  {t.caseStudiesSection.modalTitles.funnel}
                </h4>
              </div>

              <div className="space-y-4">
                {caseStudy.campaignStructure.map((stage, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-xl bg-surface border border-border-hairline hover:border-accent/40 transition-colors"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-3 border-b border-border-hairline">
                      <span className="font-bold text-sm sm:text-base text-ink">
                        {lang === 'ar' ? stage.funnelStageAr : stage.funnelStage}
                      </span>
                      <span className="px-2.5 py-1 rounded bg-canvas text-xs font-mono font-bold text-accent border border-border-hairline">
                        {stage.budgetAllocation} Budget
                      </span>
                    </div>

                    <div className="text-xs sm:text-sm text-ink-secondary font-medium mb-3">
                      <span className="font-semibold text-ink">
                        {lang === 'ar' ? 'الهدف الأساسي: ' : 'Objective: '}
                      </span>
                      {lang === 'ar' ? stage.objectiveAr : stage.objective}
                    </div>

                    <ul className="space-y-2">
                      {(lang === 'ar' ? stage.tacticsAr : stage.tactics).map((tactic, tIdx) => (
                        <li key={tIdx} className="flex items-start gap-2 text-xs sm:text-sm text-ink-secondary">
                          <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                          <span>{tactic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: CREATIVE TESTING */}
          {activeTab === 'creative' && (
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <PieChart className="w-4 h-4 text-accent" />
                <h4 className="font-bold text-base text-ink">
                  {t.caseStudiesSection.modalTitles.creative}
                </h4>
              </div>

              {/* Hypothesis */}
              <div className="p-5 rounded-xl bg-surface border border-border-hairline">
                <span className="font-mono text-xs text-accent uppercase font-bold block mb-1">
                  {lang === 'ar' ? 'الفرضية التسويقية وزاوية الاختبار' : 'Initial Core Hypothesis'}
                </span>
                <p className="text-sm sm:text-base text-ink font-medium leading-relaxed">
                  {lang === 'ar' ? caseStudy.creativeTesting.hypothesisAr : caseStudy.creativeTesting.hypothesis}
                </p>
              </div>

              {/* Tested Formats */}
              <div className="space-y-2">
                <span className="font-mono text-xs text-ink-muted uppercase font-bold block">
                  {lang === 'ar' ? 'الزوايا والصيغ الإعلانية المختبرة' : 'Tested Variations & Angles'}
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {(lang === 'ar'
                    ? caseStudy.creativeTesting.testedFormatsAr
                    : caseStudy.creativeTesting.testedFormats
                  ).map((format, fIdx) => (
                    <div
                      key={fIdx}
                      className="p-3.5 rounded-lg bg-canvas border border-border-hairline text-xs sm:text-sm text-ink-secondary flex items-start gap-2"
                    >
                      <span className="font-mono text-accent font-bold">0{fIdx + 1}</span>
                      <span>{format}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Winning Asset */}
              <div className="p-5 rounded-xl bg-ink text-canvas border border-ink-secondary/30">
                <div className="flex items-center gap-2 text-accent font-mono text-xs font-bold uppercase mb-2">
                  <Sparkles className="w-4 h-4 text-accent" />
                  <span>{lang === 'ar' ? 'الأصل الإعلاني الرابح (Winning Asset)' : 'Winning Creative Asset'}</span>
                </div>
                <p className="text-sm sm:text-base text-ink-light leading-relaxed">
                  {lang === 'ar'
                    ? caseStudy.creativeTesting.winningAssetAr
                    : caseStudy.creativeTesting.winningAsset}
                </p>
              </div>
            </div>
          )}

          {/* TAB 4: RESULTS & LEARNINGS */}
          {activeTab === 'results' && (
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <Lightbulb className="w-4 h-4 text-accent" />
                <h4 className="font-bold text-base text-ink">
                  {t.caseStudiesSection.modalTitles.results}
                </h4>
              </div>

              {/* Results summary */}
              <div className="p-6 rounded-xl bg-surface border border-border-hairline">
                <span className="font-mono text-xs text-emerald-live font-bold uppercase tracking-wider block mb-2">
                  {lang === 'ar' ? 'الأثر التجاري والنتائج الموثقة' : 'Commercial Impact Summary'}
                </span>
                <p className="text-base sm:text-lg text-ink font-semibold leading-relaxed">
                  {lang === 'ar' ? caseStudy.resultsSummaryAr : caseStudy.resultsSummary}
                </p>
              </div>

              {/* Core Takeaway */}
              <div className="p-6 rounded-xl bg-canvas border border-border-hairline">
                <span className="font-mono text-xs text-accent font-bold uppercase tracking-wider block mb-2">
                  {lang === 'ar' ? 'الخلاصة الاستراتيجية والرؤية التسويقية' : 'Strategic Takeaway'}
                </span>
                <p className="text-sm sm:text-base text-ink-secondary leading-relaxed">
                  {lang === 'ar' ? caseStudy.creativeTesting.learningAr : caseStudy.creativeTesting.learning}
                </p>
              </div>

              {/* Meta Tags */}
              <div className="flex flex-wrap items-center gap-2 pt-2">
                {caseStudy.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-3 py-1 rounded-full bg-surface border border-border-hairline text-xs font-mono text-ink-muted"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* TAB 5: RAW META ADS MANAGER PROOF */}
          {activeTab === 'proof' && caseStudy.proofImage && (
            <div className="space-y-6">
              <div className="p-4 rounded-xl bg-surface border border-border-hairline flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-live" />
                  <span className="font-mono text-xs font-bold text-ink">
                    {lang === 'ar'
                      ? 'سجل أداء موثق من داخل مدير إعلانات Meta'
                      : 'Verified Dashboard Capture — Meta Ads Manager'}
                  </span>
                </div>
                <a
                  href={caseStudy.proofImage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs text-accent hover:underline flex items-center gap-1 font-bold"
                >
                  <span>{lang === 'ar' ? 'استعراض التقرير بالدقة الكاملة' : 'View Full Resolution Asset'}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="rounded-2xl border border-border-hairline overflow-hidden bg-black/5 shadow-inner p-2">
                <img
                  src={caseStudy.proofImage}
                  alt={caseStudy.title}
                  className="w-full h-auto object-contain max-h-[500px] mx-auto rounded-xl"
                  loading="lazy"
                />
              </div>

              <div className="p-4 rounded-xl bg-canvas border border-border-hairline text-xs font-mono text-ink-muted leading-relaxed">
                <span className="font-bold text-ink block mb-1">
                  {lang === 'ar' ? 'ملاحظة الخصوصية والأرقام الحقيقية:' : 'Data Integrity & Privacy Note:'}
                </span>
                {lang === 'ar'
                  ? 'تم حجب أسماء بعض المجموعات الإعلانية الحساسة التزاماً باتفاقيات السرية، مع الإبقاء التام على صحة وموثوقية كافة الأرقام المالية ومؤشرات الأداء.'
                  : 'Client campaign naming details are partially blurred to safeguard commercial confidentiality, while 100% preserving true verified ad spend, cost per result, impressions, and unique audience reach.'}
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 bg-surface border-t border-border-hairline flex items-center justify-between gap-4">
          <div className="text-xs font-mono text-ink-muted">
            {lang === 'ar' ? 'علي عبد العظيم // أخصائي تسويق أداء وإدارة الحملات' : 'Ali Abdelazim // Performance Media Buyer'}
          </div>

          <a
            href="#contact"
            onClick={onClose}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-ink text-canvas hover:bg-accent text-xs sm:text-sm font-bold transition-colors"
          >
            <span>{lang === 'ar' ? 'طلب تدقيق الحساب الإعلاني' : 'Request Account Audit'}</span>
            {isRtl ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
          </a>
        </div>

      </div>
    </div>
  );
};
