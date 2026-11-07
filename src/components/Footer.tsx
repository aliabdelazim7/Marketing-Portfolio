import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ArrowUp, Globe } from 'lucide-react';

export const Footer: React.FC = () => {
  const { lang, t, toggleLang } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-ink border-t border-border-dark text-ink-light-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-border-dark">
          
          {/* Identity */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-canvas text-ink flex items-center justify-center font-bold text-xs tracking-tighter">
              AA
            </div>
            <div>
              <span className="font-extrabold text-sm text-white tracking-tight block">
                {lang === 'ar' ? 'علي عبد العظيم' : 'Ali Abdelazim'}
              </span>
              <span className="font-mono text-[10px] text-ink-light-muted uppercase">
                {lang === 'ar' ? 'تسويق أداء // ميديا باير' : 'Performance Marketing Atelier'}
              </span>
            </div>
          </div>

          {/* Center Colophon */}
          <p className="text-xs text-center md:text-start text-ink-light-muted font-mono max-w-md">
            {t.footer.colophon}
          </p>

          {/* Right actions */}
          <div className="flex items-center gap-4">
            <button
              onClick={toggleLang}
              className="min-h-[44px] flex items-center gap-1.5 text-xs text-white hover:text-accent font-medium transition-colors cursor-pointer"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{lang === 'en' ? 'العربية' : 'English'}</span>
            </button>

            <button
              onClick={scrollToTop}
              className="min-h-[44px] flex items-center gap-1.5 px-4 py-2 rounded-full bg-surface-dark hover:bg-accent text-white text-xs font-mono transition-colors cursor-pointer"
              aria-label="Back to top"
            >
              <span>{t.footer.backToTop}</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-ink-light-muted">
          <div>{t.footer.rights}</div>
          <div className="flex items-center gap-2">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-live" />
            <span>Cairo, Egypt (UTC+2) • Worldwide Availability</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
