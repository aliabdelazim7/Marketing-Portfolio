import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Menu, X, ArrowUpRight, Globe, Clock, Sparkles } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { lang, toggleLang, t, isRtl } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cairoTime, setCairoTime] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Cairo is UTC+2
      const timeStr = now.toLocaleTimeString('en-GB', {
        timeZone: 'Africa/Cairo',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      });
      setCairoTime(timeStr);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { href: '#work', label: t.nav.work },
    { href: '#about', label: t.nav.about },
    { href: '#expertise', label: t.nav.expertise },
    { href: '#timeline', label: t.nav.journey },
    { href: '#testimonials', label: t.nav.reviews },
    { href: '#contact', label: t.nav.contact },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-canvas/90 backdrop-blur-md border-b border-border-hairline shadow-sm py-3.5'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-2 sm:gap-4">
            
            {/* Logo & Identity */}
            <a
              href="#"
              className="group flex items-center gap-2.5 sm:gap-3 text-ink transition-colors shrink-0"
            >
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-md bg-ink text-canvas flex items-center justify-center font-bold text-xs sm:text-sm tracking-tighter shadow-sm group-hover:bg-accent transition-colors duration-200">
                AA
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-sm sm:text-base tracking-tight leading-none">
                  {lang === 'ar' ? 'علي عبد العظيم' : 'Ali Abdelazim'}
                </span>
                <span className="font-mono text-[10px] sm:text-[11px] text-ink-muted tracking-wide uppercase mt-0.5 hidden sm:block">
                  {lang === 'ar' ? 'تسويق أداء // ميديا باير' : 'Performance // Media Buyer'}
                </span>
              </div>
            </a>

            {/* Desktop Center Navigation */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-2.5 xl:px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-ink-secondary hover:text-accent rounded-md hover:bg-surface/60 transition-all duration-150 whitespace-nowrap"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Live Status Clock */}
              <div className="hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface border border-border-hairline text-xs font-mono text-ink-muted">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-live opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-live"></span>
                </span>
                <Clock className="w-3.5 h-3.5 text-ink-muted" />
                <span>LIVE {cairoTime || 'UTC+2'}</span>
              </div>

              {/* Language Switcher */}
              <button
                onClick={toggleLang}
                className="flex items-center gap-1.5 px-3 py-2 min-h-[40px] rounded-full bg-surface hover:bg-surface/80 border border-border-hairline text-xs font-medium text-ink transition-colors cursor-pointer"
                title={lang === 'en' ? 'التحويل إلى العربية' : 'Switch to English'}
              >
                <Globe className="w-3.5 h-3.5 text-accent" />
                <span className="font-semibold">{lang === 'en' ? 'العربية' : 'EN'}</span>
              </button>

              {/* Request Audit Action */}
              <a
                href="#contact"
                className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2.5 min-h-[40px] rounded-full bg-ink text-canvas hover:bg-accent text-xs font-bold tracking-wide transition-all duration-200 shadow-sm"
              >
                <span>{t.nav.auditButton}</span>
                <ArrowUpRight className={`w-3.5 h-3.5 ${isRtl ? 'rotate-[-90deg]' : ''}`} />
              </a>

              {/* Mobile / Tablet Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden w-11 h-11 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-md bg-surface text-ink border border-border-hairline hover:bg-border-hairline transition-colors cursor-pointer"
                aria-label="Toggle navigation"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-canvas/98 backdrop-blur-xl lg:hidden flex flex-col pt-24 pb-8 px-6 overflow-y-auto">
          {/* Status info */}
          <div className="flex items-center justify-between pb-6 border-b border-border-hairline text-xs font-mono text-ink-muted">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-live opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-live"></span>
              </span>
              <span>{t.meta.availability}</span>
            </div>
            <span>LIVE {cairoTime}</span>
          </div>

          {/* Links */}
          <nav className="flex flex-col gap-4 my-8">
            {navLinks.map((link, idx) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between py-2 text-lg font-bold text-ink hover:text-accent border-b border-border-subtle"
              >
                <span>{link.label}</span>
                <span className="font-mono text-xs text-ink-muted">0{idx + 1}</span>
              </a>
            ))}
          </nav>

          {/* Bottom Actions */}
          <div className="mt-auto pt-6 flex flex-col gap-3">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-lg bg-ink text-canvas font-bold text-sm hover:bg-accent transition-colors"
            >
              <Sparkles className="w-4 h-4 text-accent" />
              <span>{t.nav.auditButton}</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
};
