import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const LiveTicker: React.FC = () => {
  const { lang, isRtl } = useLanguage();

  const itemsEn = [
    'Meta Ads Architecture',
    'Conversions API (CAPI)',
    'Dynamic Creative Testing',
    'Blended ROAS Optimization',
    'Audience Anti-Cannibalization',
    'Hook Rate & Hold Rate',
    'UTM & GA4 Attribution',
    'Unit Economics Modeling',
  ];

  const itemsAr = [
    'هيكلة حسابات Meta ومنظومات CBO',
    'تفعيل تتبع التحويلات عبر الخادم (CAPI)',
    'اختبار المحتوى الإعلاني الديناميكي (DCT)',
    'تحسين العائد على الإنفاق الإعلاني (ROAS)',
    'منع تضارب المزادات وهدر الميزانيات',
    'تحسين معدل جذب الانتباه (Hook Rate)',
    'دقة الإسناد والتحليل عبر GA4 وUTM',
    'نمذجة اقتصاديات الوحدة وهوامش الربح',
  ];

  const items = lang === 'ar' ? itemsAr : itemsEn;

  return (
    <div className="py-3 bg-ink text-canvas overflow-hidden border-y border-ink-secondary/30 select-none">
      <div className={`flex whitespace-nowrap gap-8 ${isRtl ? 'animate-ticker-rtl' : 'animate-ticker'}`}>
        {[...items, ...items, ...items, ...items].map((item, idx) => (
          <div key={idx} className="flex items-center gap-6">
            <span className="font-mono text-xs uppercase tracking-widest text-canvas font-semibold">
              {item}
            </span>
            <span className="text-accent text-sm">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
};
