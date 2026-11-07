import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ArrowUpRight, Sparkles } from 'lucide-react';

export const UnitEconomicsSimulator: React.FC = () => {
  const { lang, t, isRtl } = useLanguage();

  const [budget, setBudget] = useState(10000);
  const [aov, setAov] = useState(85);
  const [convRate, setConvRate] = useState(2.4);
  const [targetRoas, setTargetRoas] = useState(3.5);

  // Calculations
  const projectedRevenue = Math.round(budget * targetRoas);
  const requiredOrders = Math.round(projectedRevenue / (aov || 1));
  const allowableCpa = (budget / (requiredOrders || 1)).toFixed(2);
  const requiredCpc = ((budget / (requiredOrders || 1)) * (convRate / 100)).toFixed(2);
  const contributionSurplus = projectedRevenue - budget;

  return (
    <section id="calculator" className="py-24 md:py-32 bg-canvas border-b border-border-hairline">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-border-hairline">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="font-mono text-xs font-bold text-accent uppercase tracking-widest">
                {t.calculatorSection.chapter}
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-ink tracking-tight">
              {t.calculatorSection.title}
            </h2>
          </div>
          <p className="text-sm sm:text-base text-ink-secondary max-w-md">
            {t.calculatorSection.subtitle}
          </p>
        </div>

        {/* Interactive Calculator Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-2xl bg-surface border border-border-hairline space-y-6">
            
            {/* Input 1: Budget */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs sm:text-sm font-bold text-ink">
                  {t.calculatorSection.monthlySpend}
                </label>
                <span className="font-mono text-sm sm:text-base font-extrabold text-accent">
                  ${budget.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min="1000"
                max="50000"
                step="500"
                value={budget}
                onChange={(e) => setBudget(Number(e.target.value))}
                className="w-full h-2 py-2 bg-border-hairline rounded-lg appearance-none cursor-pointer accent-accent"
              />
              <div className="flex justify-between text-[11px] font-mono text-ink-muted mt-1">
                <span>$1,000</span>
                <span>$25,000</span>
                <span>$50,000</span>
              </div>
            </div>

            {/* Input 2: AOV */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs sm:text-sm font-bold text-ink">
                  {t.calculatorSection.aov}
                </label>
                <span className="font-mono text-sm sm:text-base font-extrabold text-accent">
                  ${aov}
                </span>
              </div>
              <input
                type="range"
                min="20"
                max="500"
                step="5"
                value={aov}
                onChange={(e) => setAov(Number(e.target.value))}
                className="w-full h-2 py-2 bg-border-hairline rounded-lg appearance-none cursor-pointer accent-accent"
              />
              <div className="flex justify-between text-[11px] font-mono text-ink-muted mt-1">
                <span>$20</span>
                <span>$250</span>
                <span>$500</span>
              </div>
            </div>

            {/* Input 3: Store Conversion Rate */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs sm:text-sm font-bold text-ink">
                  {t.calculatorSection.conversionRate}
                </label>
                <span className="font-mono text-sm sm:text-base font-extrabold text-accent">
                  {convRate}%
                </span>
              </div>
              <input
                type="range"
                min="0.5"
                max="6.0"
                step="0.1"
                value={convRate}
                onChange={(e) => setConvRate(Number(e.target.value))}
                className="w-full h-2 py-2 bg-border-hairline rounded-lg appearance-none cursor-pointer accent-accent"
              />
              <div className="flex justify-between text-[11px] font-mono text-ink-muted mt-1">
                <span>0.5% (Low)</span>
                <span>2.5% (E-comm Avg)</span>
                <span>6.0% (High Conv)</span>
              </div>
            </div>

            {/* Input 4: Target ROAS */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs sm:text-sm font-bold text-ink">
                  {t.calculatorSection.targetRoas}
                </label>
                <span className="font-mono text-sm sm:text-base font-extrabold text-accent">
                  {targetRoas}x
                </span>
              </div>
              <input
                type="range"
                min="1.5"
                max="6.0"
                step="0.1"
                value={targetRoas}
                onChange={(e) => setTargetRoas(Number(e.target.value))}
                className="w-full h-2 py-2 bg-border-hairline rounded-lg appearance-none cursor-pointer accent-accent"
              />
              <div className="flex justify-between text-[11px] font-mono text-ink-muted mt-1">
                <span>1.5x (Breakeven)</span>
                <span>3.5x (Standard Scale)</span>
                <span>6.0x (Hyper Scale)</span>
              </div>
            </div>

          </div>

          {/* Results Output Console */}
          <div className="lg:col-span-6 flex flex-col gap-5">
            
            <div className="p-6 sm:p-8 rounded-2xl bg-ink text-canvas border border-ink-secondary/30 shadow-md">
              <span className="font-mono text-xs uppercase text-accent font-bold block mb-4">
                {lang === 'ar' ? 'حسابات وتوقعات الحملة' : 'Simulated Unit Economics'}
              </span>

              {/* Top Big Number: Gross Revenue */}
              <div className="pb-6 mb-6 border-b border-ink-secondary/30">
                <span className="text-xs text-ink-light-muted block mb-1">
                  {t.calculatorSection.outputRevenue}
                </span>
                <span className="font-mono text-4xl sm:text-5xl font-black text-white tracking-tight">
                  ${projectedRevenue.toLocaleString()}
                </span>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-surface-dark border border-border-dark">
                  <span className="text-[11px] text-ink-light-muted block">
                    {t.calculatorSection.outputCpa}
                  </span>
                  <span className="font-mono text-2xl font-black text-accent mt-1 block">
                    ${allowableCpa}
                  </span>
                  <span className="text-[10px] text-ink-light-muted block mt-0.5">
                    {lang === 'ar' ? 'أقصى سعر مسموح للأوردر' : 'Max acquisition cost'}
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-surface-dark border border-border-dark">
                  <span className="text-[11px] text-ink-light-muted block">
                    {t.calculatorSection.outputOrders}
                  </span>
                  <span className="font-mono text-2xl font-black text-white mt-1 block">
                    {requiredOrders.toLocaleString()}
                  </span>
                  <span className="text-[10px] text-ink-light-muted block mt-0.5">
                    {lang === 'ar' ? 'طلبات شهرية لتحقيق الهدف' : 'Monthly customer transactions'}
                  </span>
                </div>
              </div>

              {/* Contribution Surplus */}
              <div className="mt-4 p-4 rounded-xl bg-surface-dark border border-border-dark flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-ink-light-muted block">
                    {t.calculatorSection.outputProfit}
                  </span>
                  <span className="font-mono text-xl font-bold text-emerald-live">
                    +${contributionSurplus.toLocaleString()}
                  </span>
                </div>
                <div className="text-end">
                  <span className="text-[10px] font-mono text-ink-light-muted block">
                    {lang === 'ar' ? 'أقصى تكلفة نقرة مسموحة' : 'Allowable Max CPC'}
                  </span>
                  <span className="font-mono text-sm font-bold text-white">
                    ${requiredCpc}
                  </span>
                </div>
              </div>

              {/* Media Buyer Technical Note */}
              <div className="mt-6 pt-4 border-t border-ink-secondary/30 text-xs text-ink-light-muted flex items-start gap-2.5 leading-relaxed">
                <Sparkles className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <p>
                  {lang === 'ar'
                    ? `لتحقيق عائد مستهدف قدره ${targetRoas}x بمتوسط قيمة طلب ${aov}$ ومعدل تحويل ${convRate}%، يجب ألا تتجاوز تكلفة الاستحواذ (CPA) سقف ${allowableCpa}$ مع بقاء تكلفة النقرة (CPC) دون ${requiredCpc}$. هذا هو المعيار الدقيق الذي يتم استهدافه واختبار المحتوى الإعلاني على أساسه.`
                    : `To hit ${targetRoas}x ROAS with an AOV of $${aov} and ${convRate}% conversion rate, your ad sets must sustain a maximum CPA of $${allowableCpa} and an outbound CPC below $${requiredCpc}. This is the exact target our creative testing isolates.`}
                </p>
              </div>

            </div>

            {/* CTA */}
            <div className="p-5 rounded-2xl bg-surface border border-border-hairline flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="font-bold text-sm text-ink block">
                  {lang === 'ar' ? 'هل ترغب في تدقيق الأرقام الفعلية لمشروعك أو متجرك؟' : 'Want to stress-test your actual unit numbers?'}
                </span>
                <span className="text-xs text-ink-muted">
                  {lang === 'ar' ? 'سنقوم بمراجعة هوامش الربحية وتكلفة الإعلانات وتحديد نقطة التعادل الدقيقة' : 'We will calculate your exact breakeven during our audit'}
                </span>
              </div>
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-accent text-white text-xs font-bold hover:bg-accent-hover transition-colors shrink-0"
              >
                <span>{lang === 'ar' ? 'تدقيق مسار الأرقام' : 'Review My Funnel'}</span>
                <ArrowUpRight className={`w-3.5 h-3.5 ${isRtl ? 'rotate-[-90deg]' : ''}`} />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
