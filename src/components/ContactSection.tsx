import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Mail, MessageSquare, Copy, Check, Send, Sparkles, Clock } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const { lang, t, isRtl } = useLanguage();

  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: t.contactSection.formBudgetOptions[1],
    goal: t.contactSection.formGoalOptions[0],
    message: '',
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(t.contactSection.emailValue);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-ink text-canvas relative overflow-hidden">
      {/* Background Subtle Grid Accent */}
      <div className="absolute inset-0 bg-grid-dark pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-ink-secondary/30">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="font-mono text-xs font-bold text-accent uppercase tracking-widest">
                {t.contactSection.chapter}
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
              {t.contactSection.title}
            </h2>
          </div>
          <p className="text-sm sm:text-base text-ink-light-muted max-w-md">
            {t.contactSection.subtitle}
          </p>
        </div>

        {/* Contact Spread Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Channels & Verified Badges */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Direct Channels Box */}
            <div className="p-6 sm:p-8 rounded-2xl bg-surface-dark border border-border-dark space-y-6">
              <span className="font-mono text-xs uppercase tracking-wider text-accent font-bold block">
                {t.contactSection.directHeading}
              </span>

              {/* Email channel with copy button */}
              <div className="p-4 rounded-xl bg-canvas-dark border border-border-dark flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-9 h-9 rounded-lg bg-surface-dark flex items-center justify-center shrink-0 text-accent">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[11px] text-ink-light-muted block">
                      {t.contactSection.emailLabel}
                    </span>
                    <a
                      href={`mailto:${t.contactSection.emailValue}`}
                      className="font-mono text-xs sm:text-sm font-bold text-white hover:text-accent truncate block"
                    >
                      {t.contactSection.emailValue}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="w-11 h-11 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg bg-surface-dark hover:bg-accent hover:text-white text-ink-light-muted transition-colors cursor-pointer shrink-0"
                  title={t.contactSection.copyEmail}
                  aria-label={t.contactSection.copyEmail}
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-live" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* WhatsApp direct channel */}
              <div className="p-4 rounded-xl bg-canvas-dark border border-border-dark flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-surface-dark flex items-center justify-center shrink-0 text-emerald-live">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-ink-light-muted block">
                      {t.contactSection.whatsappLabel}
                    </span>
                    <span className="font-mono text-xs sm:text-sm font-bold text-white">
                      {t.contactSection.whatsappValue}
                    </span>
                  </div>
                </div>

                <a
                  href={`https://wa.me/${t.contactSection.whatsappRaw}?text=${encodeURIComponent(
                    lang === 'ar'
                      ? 'مرحباً علي، أريد استشارتك بخصوص تدقيق حملات ميتا الإعلانية.'
                      : 'Hi Ali, I would like to consult with you regarding our Meta Ads performance.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[44px] px-4 rounded-lg bg-emerald-live/20 hover:bg-emerald-live text-emerald-live hover:text-white text-xs font-bold font-mono transition-colors flex items-center justify-center"
                >
                  {lang === 'ar' ? 'محادثة' : 'Chat'}
                </a>
              </div>

              {/* Timezone & response guarantee */}
              <div className="pt-4 border-t border-border-dark space-y-2 text-xs font-mono text-ink-light-muted">
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-accent" />
                  <span>{t.contactSection.locationValue}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-live" />
                  <span>{t.contactSection.verifiedNote}</span>
                </div>
              </div>

            </div>

            {/* Note for Ali */}
            <div className="p-4 rounded-xl bg-surface-dark/50 border border-border-dark text-[11px] text-ink-light-muted leading-relaxed">
              <span className="text-accent font-bold block mb-1">
                {lang === 'ar' ? 'ملاحظة التدقيق التسويقي' : 'Performance Audit Note:'}
              </span>
              {lang === 'ar'
                ? 'جلسة التدقيق الأولى تركز على فحص الحساب الإعلاني، دقة تتبع CAPI، واكتشاف أسباب إهدار الميزانية وتحديد الفرص ذات العائد الأعلى.'
                : 'The preliminary audit investigates ad set cannibalization, CAPI tracking match quality, and identifying high-leverage ROAS opportunities.'}
            </div>

          </div>

          {/* Right Column: Structured Audit Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-2xl bg-surface-dark border border-border-dark shadow-xl">
              
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-accent/20 text-accent flex items-center justify-center mx-auto mb-4">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-black text-white">
                    {lang === 'ar' ? 'تم استلام طلبك بنجاح' : 'Audit Request Received'}
                  </h3>
                  <p className="text-sm text-ink-light-muted max-w-md mx-auto leading-relaxed">
                    {t.contactSection.formSuccess}
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 px-6 py-2.5 rounded-full bg-canvas-dark border border-border-dark text-xs font-bold text-white hover:bg-surface-dark cursor-pointer transition-colors"
                  >
                    {lang === 'ar' ? 'إرسال طلب آخر' : 'Submit Another Inquiry'}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-bold text-ink-light mb-2">
                        {t.contactSection.formName} *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder={lang === 'ar' ? 'محمد الشريف' : 'Sarah Jenkins'}
                        className="w-full px-4 py-3 rounded-xl bg-canvas-dark border border-border-dark text-white text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-bold text-ink-light mb-2">
                        {t.contactSection.formEmail} *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="sarah@brand.com"
                        className="w-full px-4 py-3 rounded-xl bg-canvas-dark border border-border-dark text-white text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Company */}
                    <div>
                      <label htmlFor="contact-company" className="block text-xs font-bold text-ink-light mb-2">
                        {t.contactSection.formCompany}
                      </label>
                      <input
                        id="contact-company"
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder={lang === 'ar' ? 'متجر فيلفت' : 'Velvet Apparel Co.'}
                        className="w-full px-4 py-3 rounded-xl bg-canvas-dark border border-border-dark text-white text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                      />
                    </div>

                    {/* Monthly Budget */}
                    <div>
                      <label htmlFor="contact-budget" className="block text-xs font-bold text-ink-light mb-2">
                        {t.contactSection.formBudget}
                      </label>
                      <select
                        id="contact-budget"
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-canvas-dark border border-border-dark text-white text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors cursor-pointer"
                      >
                        {t.contactSection.formBudgetOptions.map((opt, oIdx) => (
                          <option key={oIdx} value={opt} className="bg-canvas-dark text-white">
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Primary Goal */}
                  <div>
                    <label htmlFor="contact-goal" className="block text-xs font-bold text-ink-light mb-2">
                      {t.contactSection.formGoal}
                    </label>
                    <select
                      id="contact-goal"
                      value={formData.goal}
                      onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-canvas-dark border border-border-dark text-white text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors cursor-pointer"
                    >
                      {t.contactSection.formGoalOptions.map((opt, oIdx) => (
                        <option key={oIdx} value={opt} className="bg-canvas-dark text-white">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-bold text-ink-light mb-2">
                      {t.contactSection.formMessage}
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={
                        lang === 'ar'
                          ? 'نبذة موجزة عن طبيعة نشاطك التجاري والتحديات الحالية في حملاتك الإعلانية...'
                          : 'Share a brief overview of your current CPA, store performance, or key challenges...'
                      }
                      className="w-full px-4 py-3 rounded-xl bg-canvas-dark border border-border-dark text-white text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-accent hover:bg-accent-hover text-white font-bold text-sm sm:text-base tracking-wide transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl cursor-pointer"
                  >
                    <span>{t.contactSection.formSubmit}</span>
                    <Send className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
                  </button>

                  <p className="text-[11px] text-center text-ink-light-muted">
                    {lang === 'ar'
                      ? 'نلتزم بسرية تامة لبيانات حساباتك وأرقامك التشغيلية بنسبة 100%، دون أي رسائل دعائية غير مرغوبة.'
                      : 'Strict data privacy. Your numbers and account details remain 100% confidential.'}
                  </p>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
