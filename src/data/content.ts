export type PlatformCategory = 'all' | 'meta' | 'google' | 'ecommerce' | 'b2b';

export interface CaseStudy {
  id: string;
  platform: 'meta' | 'google' | 'ecommerce' | 'b2b';
  category: string;
  categoryAr: string;
  title: string;
  titleAr: string;
  tagline: string;
  taglineAr: string;
  clientIndustry: string;
  clientIndustryAr: string;
  timeframe: string;
  timeframeAr: string;
  proofImage?: string;
  metrics: {
    label: string;
    labelAr: string;
    value: string;
    sublabel: string;
    sublabelAr: string;
  }[];
  challenge: string;
  challengeAr: string;
  strategy: string;
  strategyAr: string;
  campaignStructure: {
    funnelStage: string;
    funnelStageAr: string;
    objective: string;
    objectiveAr: string;
    budgetAllocation: string;
    tactics: string[];
    tacticsAr: string[];
  }[];
  creativeTesting: {
    hypothesis: string;
    hypothesisAr: string;
    testedFormats: string[];
    testedFormatsAr: string[];
    winningAsset: string;
    winningAssetAr: string;
    learning: string;
    learningAr: string;
  };
  resultsSummary: string;
  resultsSummaryAr: string;
  tags: string[];
}

export interface ExpertiseItem {
  id: string;
  number: string;
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  deliverables: string[];
  deliverablesAr: string[];
  tag: string;
}

export interface WorkflowStep {
  step: string;
  title: string;
  titleAr: string;
  shortDesc: string;
  shortDescAr: string;
  details: string[];
  detailsAr: string[];
  output: string;
  outputAr: string;
}

export interface ExperienceItem {
  period: string;
  periodAr: string;
  role: string;
  roleAr: string;
  organization: string;
  organizationAr: string;
  type: string;
  typeAr: string;
  summary: string;
  summaryAr: string;
  highlights: string[];
  highlightsAr: string[];
}

export const contentData = {
  en: {
    meta: {
      name: "Ali Abdelazim",
      title: "Performance Marketer & Media Buyer",
      location: "Remote Worldwide • GCC & MENA Coverage",
      availability: "Available for Q1/Q2 Audits & Campaigns",
      heroHeadlinePrefix: "Ads That Drive Sales.",
      heroHeadlineItalic: "Numbers That Hit Your Bank Account.",
      heroSubheadline:
        "I build, optimize, and scale paid acquisition systems across Meta and Google Ads. Treating every advertising dollar as capital deployed for measurable commercial growth — combining direct-response creative psychology with rock-solid server-side attribution.",
      ctaPrimary: "Schedule a Growth Audit",
      ctaSecondary: "Explore Real Case Studies",
      viewWork: "View Selected Work",
      statAdSpend: "650K+",
      statAdSpendLabel: "Verified Impressions",
      statAvgRoas: "1.18 EGP",
      statAvgRoasLabel: "Lowest Cost Per Inquiry",
      statConversionLift: "5,200+",
      statConversionLiftLabel: "Buyer Chats & Orders",
      statCampaigns: "740%",
      statCampaignsLabel: "Peak ROAS Achieved",
    },
    nav: {
      work: "Work",
      about: "Philosophy",
      expertise: "Capabilities",
      journey: "Timeline",
      contact: "Contact",
      auditButton: "Audit",
    },
    hero: {
      liveStatus: "Live & Taking Q1/Q2 Projects",
      badgeText: "Performance Marketer & Media Buyer",
      scrollPrompt: "Scroll to explore systems & results",
      highlights: [
        "Meta Ads Architecture & CBO Scaling",
        "Google Search & Shopping (P-Max)",
        "Server-Side CAPI Tracking",
        "Funnel Economics & Net Margins",
      ],
    },
    about: {
      chapter: "02 // PHILOSOPHY & MINDSET",
      title: "Advertising is not magic or vanity likes. It is commercial capital deployed to generate profit.",
      p1: "Over two years in performance marketing and media buying, I've seen brands make the same two costly mistakes: either creating artsy ads that look pretty but don't generate a single sale, or randomly boosting posts inside Ads Manager without understanding customer psychology or purchase triggers.",
      p2: "My approach combines both: direct-response creative that hooks your ideal buyer and compels them to order, paired with disciplined campaign architecture (CBO, Google Performance Max) and bulletproof server-side tracking (CAPI) to eliminate wasted spend.",
      p3: "No vanity reach. No fake platform metrics that evaporate when you check your bank account. Just clear commercial focus: lowering your cost per inquiry, boosting average order value, and scaling campaigns that deliver predictable net profit.",
      pillars: [
        {
          title: "The Creative Testing Engine",
          desc: "Creative is your real targeting lever on Meta. We test hooks, formats, and angles rapidly to isolate winning ads before scaling spend.",
        },
        {
          title: "Server-Side Tracking (CAPI)",
          desc: "Clean Conversions API and Pixel integration to ensure full attribution data flow despite iOS updates and browser blockers.",
        },
        {
          title: "Unit Economics & Margins",
          desc: "Aligning ad spend with gross margins, shipping costs, and repeat purchases so scaling produces real profit, not just cash turnover.",
        },
      ],
    },
    caseStudiesSection: {
      chapter: "01 // VERIFIED CASE STUDIES",
      title: "Real commercial results backed by raw data and strategy.",
      subtitle:
        "Every case study below represents actual client campaigns, verified Ads Manager screenshots, and proven marketing methodology across Meta and Google.",
      ctaDetails: "Inspect Deep Breakdown",
      closeDetails: "Close Breakdown",
      filterAll: "All Channels",
      filterMeta: "Meta Ads (IG & FB)",
      filterGoogle: "Google Ads",
      filterEcommerce: "E-Commerce Stores",
      filterB2b: "B2B & Wholesale",
      expandButton: "View Remaining Case Studies",
      expandSubtitle: "Explore results across Salla, Shopify, Google Ads, and B2B wholesale campaigns",
      collapseButton: "Show Top Flagship Cases Only",
      modalTitles: {
        challenge: "The Core Business Challenge",
        strategy: "Strategy & Tactical Framework",
        funnel: "Full Funnel Architecture",
        creative: "Creative Hypothesis & Testing Matrix",
        results: "Key Commercial Outcomes & Learnings",
      },
    },
    expertiseSection: {
      chapter: "03 // CORE CAPABILITIES",
      title: "A practical stack engineered for profitable acquisition.",
      subtitle: "Focused on technical campaign architecture, behavioral direct response, and reliable attribution.",
    },
    methodologySection: {
      chapter: "04 // HOW I WORK",
      title: "A seven-stage operating system for predictable campaign scale.",
      subtitle: "No guesswork. Every campaign follows a structured sequence from initial audit to scaled profitability.",
      keyDeliverable: "Phase Deliverable",
    },
    calculatorSection: {
      chapter: "05 // INTERACTIVE UNIT ECONOMICS",
      title: "Media Buying ROI & Breakeven Simulator",
      subtitle:
        "Test your campaign assumptions before allocating capital. Adjust spend, conversion rates, and average order value to model required CPA and contribution revenue.",
      monthlySpend: "Monthly Ad Budget ($)",
      aov: "Average Order / Deal Value ($)",
      conversionRate: "Store / Lander Conversion Rate (%)",
      targetRoas: "Target ROAS Multiplier",
      outputRevenue: "Projected Gross Revenue",
      outputCpa: "Allowable Target CPA",
      outputOrders: "Required Orders / Conversions",
      outputProfit: "Gross Ad Contribution (Revenue - Spend)",
      note: "Based on standard performance funnel economics. Use this model during our discovery call to evaluate campaign viability.",
    },
    experienceSection: {
      chapter: "04 // PROFESSIONAL JOURNEY",
      title: "Focused, rigorous hands-on execution.",
      subtitle: "Two years of continuous ad spend management, testing, and conversion optimization.",
    },
    contactSection: {
      chapter: "05 // DIRECT CONTACT & AUDIT",
      title: "Ready to scale your paid acquisition with discipline?",
      subtitle:
        "Whether you're launching a new venture, troubleshooting rising customer acquisition costs, or seeking a media buyer to scale an existing funnel.",
      formName: "Your Full Name",
      formEmail: "Work Email Address",
      formCompany: "Company / Brand Name",
      formBudget: "Monthly Ad Spend Range",
      formBudgetOptions: [
        "Under $2,500 / month",
        "$2,500 – $5,000 / month",
        "$5,000 – $15,000 / month",
        "$15,000+ / month",
      ],
      formGoal: "Primary Business Objective",
      formGoalOptions: [
        "Scale E-commerce Sales profitably",
        "Generate High-Intent B2B / Service Leads",
        "Audit & Fix Underperforming Meta Ads",
        "Set up Tracking, CAPI & Funnel Strategy",
      ],
      formMessage: "Brief Campaign Details or Challenge",
      formSubmit: "Submit Audit Request",
      formSuccess: "Thank you! Ali will review your details and respond within 24 hours.",
      directHeading: "Or Connect Directly",
      emailLabel: "Direct Email",
      emailValue: "ali.performance.ads@gmail.com",
      whatsappLabel: "WhatsApp Direct",
      whatsappValue: "+20 155 322 4824",
      whatsappRaw: "201553224824",
      locationLabel: "HQ Timezone",
      locationValue: "Remote Worldwide (UTC+2) • GCC & MENA Active",
      copyEmail: "Copy Email",
      copied: "Copied to Clipboard!",
      verifiedNote: "Verified Channels • Direct Response Within 24 Hours",
    },
    footer: {
      colophon: "Designed & engineered as an art-directed performance marketing showcase.",
      rights: "All rights reserved. © 2026 Ali Abdelazim.",
      backToTop: "Back to top",
    },
  },
  ar: {
    meta: {
      name: "علي عبد العظيم",
      title: "أخصائي تسويق الأداء وإدارة الحملات الإعلانية (Performance Marketer & Media Buyer)",
      location: "إدارة الحملات الإقليمية والدولية (عن بُعد) • الخليج ومصر",
      availability: "متاح لاستلام مشاريع جديدة وتدقيق الحسابات الإعلانية",
      heroHeadlinePrefix: "إعلانات موجهة لتحقيق المبيعات.",
      heroHeadlineItalic: "وعوائد ملموسة تعزز نمو أرباحك.",
      heroSubheadline:
        "أقوم ببناء وتطوير وإدارة منظومات الإعلانات المدفوعة عبر منصات Meta وGoogle Ads. أتعامل مع كل دولار إعلاني كرأس مال استثماري يستهدف تحقيق نمو تجاري مستدام — عبر الدمج بين سيكولوجية الإعلانات المباشرة والربط التقني المتقدم لتتبع التحويلات.",
      ctaPrimary: "طلب تدقيق الحساب الإعلاني",
      ctaSecondary: "استعراض دراسات الحالة والنتائج",
      viewWork: "استكشف النتائج الموثقة",
      statAdSpend: "+650 ألف",
      statAdSpendLabel: "مرات ظهور محققة",
      statAvgRoas: "1.18 ج.م",
      statAvgRoasLabel: "أدنى تكلفة محادثة شراء",
      statConversionLift: "+5,200",
      statConversionLiftLabel: "محادثة شراء وطلب مكتمل",
      statCampaigns: "740%",
      statCampaignsLabel: "أعلى عائد إعلاني محقق (ROAS)",
    },
    nav: {
      work: "النتائج",
      about: "الفلسفة",
      expertise: "الخدمات",
      journey: "المسار",
      contact: "تواصل",
      auditButton: "طلب تدقيق",
    },
    hero: {
      liveStatus: "متاح لبدء حملات ومشاريع الربع الحالي",
      badgeText: "إدارة الحملات الإعلانية الممولة (Meta & Google Ads)",
      scrollPrompt: "استكشف منهجية العمل والنتائج الموثقة بالأرقام",
      highlights: [
        "هيكلة حسابات Meta المتقدمة وتوسيع الميزانيات بأمان (CBO)",
        "حملات بحث وجوجل للتسوق (Google Search & Performance Max)",
        "ربط تتبع التحويلات عبر الخادم (Meta Conversions API - CAPI)",
        "تحليل اقتصاديات الوحدة وهوامش الربح الصافية (Unit Economics)",
      ],
    },
    about: {
      chapter: "02 // الفلسفة ومنهجية العمل",
      title: "الإعلانات المدفوعة ليست مجرد تفاعل سطحي.. بل استثمار مباشر يجب أن ينعكس نمواً في أرباحك.",
      p1: "خلال عامين من الإدارة الميدانية للحملات الإعلانية وشراء المساحات الإعلانية (Media Buying)، لمست فجوتين متكررتين لدى معظم الشركات والعلامات التجارية: إما إعلانات ذات تصاميم جذابة لكنها تفتقر للقدرة البيعية وتهدر الميزانيات، أو تركيز تقني بحت على إعدادات الحساب دون فهم عميق لسيكولوجية المشتري ودوافع اتخاذ القرار.",
      p2: "ترتكز منهجيتي على التوفيق بين الجانبين: إنتاج محتوى إعلاني موجه ومقاطع فيديو تحفز الرغبة الشرائية وتخاطب المشترين بدقة، بالتوازي مع بنية فنية منضبطة تعتمد على حملات CBO الموحدة، حملات Google Performance Max، وتتبع الخادم المباشر عبر Conversions API للقضاء على أي هدر في الميزانية.",
      p3: "لا أعتمد على مؤشرات الوصول السطحية أو الوعود النظرية غير المجدية تجارياً. ينصب تركيزي الكامل مع شركاء الأعمال على المقاييس الفعلية: تكلفة الاستحواذ على العميل (CPA)، جودة العملاء المحتملين، وصافي العائد المحقق على الإنفاق الإعلاني (ROAS).",
      pillars: [
        {
          title: "منظومة اختبار المحتوى الإعلاني (Creative Testing)",
          desc: "المحتوى الإعلاني هو أداة الاستهداف الأقوى حالياً. نختبر زوايا ورسائل تسويقية متعددة لفرز الإعلانات الرابحة ذات التحويل الأعلى قبل توسيع الإنفاق.",
        },
        {
          title: "دقة التتبع وربط الخوادم (Data & CAPI Tracking)",
          desc: "إعداد وتفعيل Meta Conversions API وGoogle Tag Manager مباشرة من جانب الخادم لمواجهة قيود التتبع وضمان مطابقة البيانات بدقة متناهية.",
        },
        {
          title: "تحليل اقتصاديات الوحدة والربحية (Unit Economics)",
          desc: "دراسة تكاليف الاستحواذ مقابل هوامش الربح الإجمالية وقيمة الطلب، لضمان أن توسيع الحملات يرفع صافي الأرباح وليس مجرد تدوير للسيولة.",
        },
      ],
    },
    caseStudiesSection: {
      chapter: "01 // نتائج وحملات موثقة بالأرقام",
      title: "نتائج حقيقية من واقع الحملات.. قائمة على بيانات موثقة وقابلة للتحقق.",
      subtitle:
        "تستعرض كل دراسة حالة أدناه حملة واقعية مع مؤشرات الأداء الأساسية، وسجل النتائج، واستراتيجية التنفيذ المعتمدة على منصات Meta وGoogle.",
      ctaDetails: "تفاصيل دراسة الحالة والبيانات",
      closeDetails: "إغلاق التفاصيل",
      filterAll: "جميع القنوات",
      filterMeta: "إعلانات Meta",
      filterGoogle: "إعلانات Google",
      filterEcommerce: "متاجر إلكترونية (سلة & Shopify)",
      filterB2b: "خدمات وتجارة B2B",
      expandButton: "عرض كافة دراسات الحالة والنتائج",
      expandSubtitle: "استعراض نتائج إضافية لمتاجر سلة، Shopify، إعلانات Google، وتجارة B2B",
      collapseButton: "عرض أهم دراستين فقط",
      modalTitles: {
        challenge: "التحدي التشغيلي والأهداف",
        strategy: "الاستراتيجية وهيكلة الميزانية",
        funnel: "مسار التحويل ورحلة العميل (Funnel)",
        creative: "اختبار المحتوى والزوايا الإعلانية",
        results: "النتائج النهائية والدروس المستفادة",
      },
    },
    expertiseSection: {
      chapter: "03 // مجالات التخصص والقدرات الفنية",
      title: "منظومة متكاملة لإدارة الحملات الإعلانية وتوسيع المبيعات بأمان.",
      subtitle: "تركيز استراتيجي على التنفيذ الفني الاحترافي، ابتكار المحتوى البيعي، والتحليل الدقيق للعائد الاستثماري.",
    },
    methodologySection: {
      chapter: "04 // مراحل ومنهجية العمل",
      title: "نظام تشغيلي من 7 مراحل يضمن استقرار النمو والربحية.",
      subtitle: "منهجية منضبطة تستند إلى البيانات لحماية رأس المال الإعلاني، تبدأ بالتدقيق والتحليل الأولي وتتدرج نحو التوسع ومضاعفة الإنفاق المدروس.",
      keyDeliverable: "المخرجات المعتمدة لهذه المرحلة",
    },
    calculatorSection: {
      chapter: "05 // محاكي اقتصاديات الوحدة والعائد",
      title: "حاسبة التكلفة ونقطة التعادل الإعلاني (ROAS & Unit Economics Modeler)",
      subtitle:
        "نمذجة وتوقع الأرقام المالية قبل إطلاق الحملات. أدخل الميزانية المقترحة، متوسط قيمة الطلب، ونسبة التحويل، لحساب تكلفة الاستحواذ المستهدفة وحجم المبيعات المتوقع.",
      monthlySpend: "الميزانية الشهرية المقترحة ($)",
      aov: "متوسط قيمة الطلب / سلة الشراء ($)",
      conversionRate: "معدل تحويل المتجر أو صفحة البيع (%)",
      targetRoas: "مضاعف العائد المستهدف على الإنفاق (ROAS)",
      outputRevenue: "إجمالي المبيعات المتوقعة",
      outputCpa: "أقصى تكلفة استحواذ مسموحة (Target CPA)",
      outputOrders: "عدد الطلبات المستهدفة",
      outputProfit: "فائض الإنفاق الإعلاني (المبيعات - الميزانية)",
      note: "يعتمد هذا النموذج على معادلات مسار التحويل المعيارية. يمكننا مناقشة هذه الأرقام تفصيلياً خلال جلسة تدقيق الحساب لتحديد المستهدفات بدقة.",
    },
    experienceSection: {
      chapter: "04 // الخبرة والمسار المهني",
      title: "عامان من الخبرة الميدانية المركزة في إدارة وتوسيع الحملات الإعلانية.",
      subtitle: "إدارة تشغيلية يومية لميزانيات إعلانية على منصات Meta وGoogle، تشمل اختبار مئات الأصول الإعلانية وتحسين معدلات التحويل التجاري.",
    },
    contactSection: {
      chapter: "05 // قنوات الاتصال وطلب التدقيق",
      title: "هل أنت مستعد لمضاعفة مبيعاتك وبناء منظومة إعلانية رابحة؟",
      subtitle:
        "سواء كنت تؤسس علامة تجارية جديدة، أو تسعى لخفض تكلفة الاستحواذ ورفع كفاءة ميزانياتك الإعلانية، أو تبحث عن متخصص يدير ويوجه حساباتك باحترافية.",
      formName: "الاسم بالكامل",
      formEmail: "البريد الإلكتروني المهني",
      formCompany: "اسم العلامة التجارية أو المنشأة",
      formBudget: "الميزانية الإعلانية الشهرية المتوقعة",
      formBudgetOptions: [
        "أقل من 2,500$ شهرياً (أو ما يعادلها)",
        "من 2,500$ إلى 5,000$ شهرياً",
        "من 5,000$ إلى 15,000$ شهرياً",
        "أكثر من 15,000$ شهرياً",
      ],
      formGoal: "الهدف الرئيسي المطلوب تحقيقه",
      formGoalOptions: [
        "زيادة مبيعات المتجر الإلكتروني ورفع العائد الاستثماري (ROAS)",
        "استقطاب عملاء محتملين مؤهلين (B2B، خدمات، عقارات)",
        "تدقيق وإعادة هيكلة الحسابات الإعلانية منخفضة الأداء",
        "التهيئة الفنية للتتبع المتقدم وربط CAPI ومسارات التحويل",
      ],
      formMessage: "نبذة عن النشاط التجاري والتحديات التسويقية الحالية",
      formSubmit: "إرسال طلب تدقيق الحساب الإعلاني",
      formSuccess: "تم استلام طلبك بنجاح. سأقوم بدراسة تفاصيل الحساب والتواصل معك خلال 24 ساعة.",
      directHeading: "قنوات الاتصال المباشر",
      emailLabel: "البريد الإلكتروني المباشر",
      emailValue: "ali.performance.ads@gmail.com",
      whatsappLabel: "واتساب (محادثات واتصال)",
      whatsappValue: "+20 155 322 4824",
      whatsappRaw: "201553224824",
      locationLabel: "نطاق العمل وموقع الخدمة",
      locationValue: "إدارة الحملات الإقليمية والدولية (عن بُعد) • الخليج ومصر",
      copyEmail: "نسخ البريد الإلكتروني",
      copied: "تم النسخ بنجاح!",
      verifiedNote: "قنوات اتصال رسمية ومباشرة • استجابة مهنية خلال 24 ساعة",
    },
    footer: {
      colophon: "تم تصميم وتطوير هذا الموقع كمعرض أعمال مهني يبرز نتائج ومنهجية تسويق الأداء وإدارة الحملات الإعلانية.",
      rights: "جميع الحقوق محفوظة. © 2026 علي عبد العظيم.",
      backToTop: "العودة للأعلى",
    },
  },
};

export const caseStudiesList: CaseStudy[] = [
  {
    id: "google-ads-saudi",
    platform: "google",
    category: "Google Ads & Looker Studio Attribution",
    categoryAr: "إعلانات Google وتتبع Looker Studio (السعودية)",
    title: "Scaling Google Search & Shopping to 55.8K SAR at 606% Actual ROAS",
    titleAr: "تحقيق مبيعات 55,800 ريال وعائد 606% على إعلانات Google",
    tagline: "Laser-focused Performance Max and Search campaigns delivering 213+ high-value purchases in the Saudi market.",
    taglineAr: "حملات بحث وأداء أقصى (Performance Max) استهدفت نية الشراء في السوق السعودي، محققة 213 طلباً بعائد استثماري 6.06x.",
    clientIndustry: "E-Commerce & Retail (KSA)",
    clientIndustryAr: "تجارة إلكترونية وتجزئة (السوق السعودي)",
    timeframe: "Scale Phase (Looker Studio Verified)",
    timeframeAr: "مرحلة التوسع وتنمية المبيعات",
    proofImage: "/results/google-ads-scale.png",
    metrics: [
      {
        label: "Sales Generated",
        labelAr: "إجمالي المبيعات المحققة",
        value: "55.8K ر.س",
        sublabel: "Looker Studio verified",
        sublabelAr: "موثقة بالكامل في Looker Studio",
      },
      {
        label: "Actual ROAS",
        labelAr: "عائد الإنفاق الفعلي (ROAS)",
        value: "606.03%",
        sublabel: "6.06x cash multiple",
        sublabelAr: "6.06 أضعاف الميزانية المنفقة",
      },
      {
        label: "Media Spend",
        labelAr: "إجمالي الإنفاق الإعلاني",
        value: "9,220 ر.س",
        sublabel: "Controlled auction spend",
        sublabelAr: "ميزانية منضبطة ومربحة",
      },
      {
        label: "Purchases",
        labelAr: "عمليات شراء مكتملة",
        value: "213+",
        sublabel: "High conversion rate",
        sublabelAr: "طلبات مؤكدة بنية شراء مرتفعة",
      },
    ],
    challenge:
      "The client needed aggressive sales expansion in the Saudi market through Google Ads, capturing high-intent searchers while strictly sustaining a minimum 350% ROAS threshold to protect profit margins.",
    challengeAr:
      "استهدف المتجر التوسع السريع في السوق السعودي عبر إعلانات Google واقتناص الباحثين ذوي نية الشراء العالية، مع اشتراط الحفاظ على عائد إعلاني لا يقل عن 350% ROAS لحماية هوامش الربح الصافية.",
    strategy:
      "Engineered an integrated Google Ads structure combining precision long-tail Search with asset-optimized Performance Max. Applied negative keyword filters to drive average CPC down to 0.48 SAR, and verified true transaction values with Looker Studio attribution.",
    strategyAr:
      "بناء هيكل حملات متكامل يجمع بين الكلمات الدلالية المحددة (Long-Tail Search) وحملات Performance Max المحدثة، مع تطبيق معايير استبعاد الكلمات غير المجدية لخفض تكلفة النقرة إلى 0.48 ريال، والتحقق من القيمة الشرائية عبر Looker Studio.",
    campaignStructure: [
      {
        funnelStage: "High-Intent Google Search (65% Budget)",
        funnelStageAr: "حملات الكلمات الدلالية ذات نية الشراء المباشرة (65% من الميزانية)",
        objective: "Direct Purchase from Google Search Engine",
        objectiveAr: "شراء مباشر من نتائج محرك بحث Google",
        budgetAllocation: "65%",
        tactics: [
          "Targeting long-tail exact match keywords for high-converting commercial queries",
          "Ruthless negative keyword harvesting saving thousands in wasted clicks",
          "Ad copy featuring instant shipping badges and local payment options in KSA",
        ],
        tacticsAr: [
          "استهداف الكلمات الدلالية الدقيقة (Long-tail) الخاصة بموديلات المنتجات الأكثر طلباً",
          "تطبيق استبعاد صارم للكلمات السلبية لمنع هدر الميزانية في نقرات غير مجدية",
          "صياغة نصوص إعلانية تبرز خيارات الدفع المحلية والشحن السريع داخل المملكة",
        ],
      },
      {
        funnelStage: "Performance Max & Shopping Feed (35% Budget)",
        funnelStageAr: "حملات الأداء الأقصى والتسوق (Performance Max 35%)",
        objective: "Omnichannel Google Inventory Dominance",
        objectiveAr: "ظهور متعدد القنوات عبر Google Shopping واليوتيوب والشبكة الإعلانية",
        budgetAllocation: "35%",
        tactics: [
          "High-definition product catalog optimization with enriched title tags",
          "Value-based bidding strategy prioritizing high basket-value customers",
        ],
        tacticsAr: [
          "تحسين خلاصة المنتجات (Product Feed) بصور عالية الدقة وتصنيفات مفصلة",
          "تطبيق استراتيجية المزايدة القائمة على القيمة (Value-Based Bidding) لاستهداف السلات الأعلى سعراً",
        ],
      },
    ],
    creativeTesting: {
      hypothesis:
        "Long-tail keyword ad copies emphasizing same-day dispatch and official warranty in KSA will substantially outperform generic discount banners in conversion rate.",
      hypothesisAr:
        "التركيز على نصوص إعلانية تبرز سرعة الشحن والضمان المعتمد في السعودية سيتفوق بوضوح على الإعلانات الترويجية العامة في معدل التحويل والعائد.",
      testedFormats: [
        "Search ads with fast dispatch & warranty hooks vs. Generic discount ads",
        "Performance Max custom curated assets vs. Google automated scrape assets",
      ],
      testedFormatsAr: [
        "إعلانات بحث تركز على الضمان والتوصيل الفوري مقابل إعلانات خصومات تقليدية",
        "حملات Performance Max بأصول مخصصة ومنتقاة مقابل الأصول التلقائية",
      ],
      winningAsset:
        "Long-tail product search campaign paired with custom P-Max produced 213 conversions at 55.8K SAR sales and 606.03% ROAS.",
      winningAssetAr:
        "حملة البحث المباشر بالتوازي مع Performance Max حققت 213 عملية شراء بإيرادات 55,800 ريال وعائد 606.03% ROAS.",
      learning:
        "Google searchers in the Gulf market have immediate intent; answering pricing and dispatch transparently in the headline multiplies transaction velocity.",
      learningAr:
        "يتميز المستهلكون في السوق السعودي والخليجي بنية شراء فورية؛ إبراز السعر النهائي وضمان الشحن بوضوح في العنوان يضاعف معدل إتمام الطلبات.",
    },
    resultsSummary:
      "Generated 55,800 SAR in verified sales, 213+ purchases, and a 606.03% actual ROAS on a total spend of 9,220 SAR, fully documented in Looker Studio.",
    resultsSummaryAr:
      "تحقيق 55,800 ريال مبيعات مؤكدة، و213 طلب شراء مكتمل، وعائد 606.03% ROAS مقابل إنفاق 9,220 ريال فقط، موثقة بالكامل في Looker Studio.",
    tags: ["Google Ads", "KSA Market", "606% ROAS", "55.8K SAR", "Performance Max"],
  },
  {
    id: "hassan-elhout",
    platform: "meta",
    category: "Retail Trade & High-Volume Sales",
    categoryAr: "تجارة التجزئة والتوزيع التجاري (Meta)",
    title: "Generating 3,100+ Qualified Buyer Inquiries at Record 1.18 EGP (~$0.02) Cost",
    titleAr: "أكثر من 3,100 محادثة شراء مؤكدة بتكلفة قياسية 1.18 جنيه للمحادثة",
    tagline: "Unlocking extraordinary customer acquisition velocity on Meta with direct-response hook iteration and local audience density.",
    taglineAr: "تحقيق كفاءة استثنائية في الاستحواذ على العملاء عبر Meta، من خلال تطوير زوايا محتوى الاستجابة المباشرة والتركيز الجغرافي.",
    clientIndustry: "Consumer Retail & Distribution",
    clientIndustryAr: "توزيع وتجارة السلع الاستهلاكية",
    timeframe: "Scale Phase (Verified Results)",
    timeframeAr: "مرحلة التوسع ومضاعفة المبيعات",
    proofImage: "/results/hassan-elhout.png",
    metrics: [
      {
        label: "Buyer Conversations",
        labelAr: "محادثات الشراء المؤكدة",
        value: "3,100+",
        sublabel: "Across 11 active ad sets",
        sublabelAr: "عبر 11 مجموعة إعلانية رابحة",
      },
      {
        label: "Record Cost Per Message",
        labelAr: "أدنى تكلفة محادثة شراء",
        value: "1.18 ج.م",
        sublabel: "Best ad set ($0.024 USD)",
        sublabelAr: "في المجموعة الإعلانية الأعلى كفاءة",
      },
      {
        label: "Verified Impressions",
        labelAr: "مرات الظهور الفعلية",
        value: "254,160",
        sublabel: "Massive engagement volume",
        sublabelAr: "ظهور مكثف وتفاعل يومي مرتفع",
      },
      {
        label: "Target Reach",
        labelAr: "الوصول للشرائح المستهدفة",
        value: "113,800",
        sublabel: "Unique Meta accounts",
        sublabelAr: "حسابات مستهدفة في النطاق الجغرافي",
      },
    ],
    challenge:
      "The client needed to drive an aggressive volume of daily purchase orders for high-demand consumer goods while maintaining extremely lean acquisition costs to preserve merchant profit margins in a competitive local market.",
    challengeAr:
      "احتاج العميل إلى تدفق يومي مكثف من طلبات الشراء لمنتجات استهلاكية سريعة الدوران، مع الحفاظ على تكلفة اقتناء منخفضة للغاية لحماية هوامش الربح الصافية في ظل منافسة سعرية قوية.",
    strategy:
      "Structured a high-velocity messaging campaign separating top-performing localized video clips and price-anchor headlines. Isolated ad sets to eliminate budget cannibalization, scaling winning sets with 1,075 and 446 conversations down to 1.18 EGP and 1.26 EGP per conversation.",
    strategyAr:
      "هيكلة حملات محادثات استجابة سريعة تعتمد على مقاطع فيديو واقعية تبرز القيمة السعرية، مع عزل المجموعات الإعلانية لمنع التضارب وهدر الميزانية، وتوسيع المجموعات الرابحة التي حققت 1,075 و446 محادثة بتكلفة 1.18 و1.26 جنيه.",
    campaignStructure: [
      {
        funnelStage: "High-Volume Direct Acquisition (80% Budget)",
        funnelStageAr: "حملات الاستحواذ المباشر عالي الكثافة (80% من الميزانية)",
        objective: "Direct Purchase Messaging (Click-to-Chat)",
        objectiveAr: "محادثات شراء فوري عبر قنوات التراسل المباشر",
        budgetAllocation: "80%",
        tactics: [
          "Price-anchored direct-response messaging triggers",
          "Automated instant greeting qualifying order quantity and delivery city",
          "Continuous ad set rotation to protect top 1.18 EGP cost performance",
        ],
        tacticsAr: [
          "مقاطع فيديو بخطاف بصري سريع وعرض سعري صريح يحفز اتخاذ القرار الفوري",
          "رد تلقائي منظم لتأهيل المشتري وتحديد الكمية والمدينة بدقة",
          "تدوير مدروس للمحتوى الإعلاني للحفاظ على استقرار التكلفة القياسية (1.18 جنيه)",
        ],
      },
      {
        funnelStage: "Social Proof & Retargeting (20% Budget)",
        funnelStageAr: "تعزيز الثقة وإعادة الاستهداف (20% من الميزانية)",
        objective: "Page Visits & Review Reinforcement",
        objectiveAr: "زيارات الحساب وتوثيق تجارب العملاء السابقين",
        budgetAllocation: "20%",
        tactics: [
          "Page visit campaigns at 0.70 EGP per visit driving organic community trust",
          "Social proof testimonials from satisfied previous buyers",
        ],
        tacticsAr: [
          "حملات زيارات للحساب بتكلفة 0.70 جنيه لبناء المصداقية والتفاعل",
          "إعلانات تستعرض تقييمات المشترين وسرعة تسليم الشحنات للمحافظات",
        ],
      },
    ],
    creativeTesting: {
      hypothesis:
        "Direct product demonstrations highlighting immediate availability and clear pricing will produce significantly higher chat volume than aesthetic branding clips.",
      hypothesisAr:
        "مقاطع الفيديو العملية التي تستعرض المنتجات على الطبيعة مع السعر المباشر ستحقق معدل محادثات شراء أعلى بكثير من التصاميم الترويجية الجاهزة.",
      testedFormats: [
        "Unboxing and live physical product display vs. Static catalog photos",
        "Direct price hook ('Best price in Egypt') vs. Feature-driven hook",
      ],
      testedFormatsAr: [
        "مقاطع استعراض حي وتجربة للمنتج مقابل صور كتالوج ثابتة",
        "خطاف السعر التنافسي المباشر مقابل استعراض المواصفات العامة فقط",
      ],
      winningAsset:
        "Short live mobile demo video generated 1,075 messaging conversations at 1.18 EGP per chat, becoming the account flagship asset.",
      winningAssetAr:
        "مقطع فيديو تصوير حي وسريع للمنتج حقق 1,075 محادثة شراء بتكلفة 1.18 جنيه للمحادثة، ليصبح الأصل الإعلاني الأساسي للحساب.",
      learning:
        "In high-velocity commercial retail, transparent pricing and immediate product clarity eliminate friction and drive explosive purchase momentum.",
      learningAr:
        "في قطاع التجزئة والمنتجات سريعة الحركة، الشفافية التامة في السعر وتوضيح المنتج على الطبيعة يزيلان أي تردد لدى العميل ويحفزان الطلب الفوري.",
    },
    resultsSummary:
      "Delivered over 3,100 qualified customer conversations and 254K+ impressions on a total ad spend of just 6,351 EGP, setting an exceptional efficiency benchmark of 1.18 EGP per chat.",
    resultsSummaryAr:
      "تحقيق أكثر من 3,100 محادثة شراء فعلية و254 ألف ظهور بميزانية إجمالية قدرها 6,351 جنيهاً، مع تسجيل مؤشر كفاءة قياسي بلغ 1.18 جنيه للمحادثة.",
    tags: ["High-Volume Sales", "Messaging Ads", "1.18 EGP CPL", "Retail Scale", "Meta Ads"],
  },
  {
    id: "salla-ecommerce",
    platform: "ecommerce",
    category: "Salla Store & GCC Growth",
    categoryAr: "متجر سلة وتجارة إلكترونية (الخليج)",
    title: "Breaking Store Records with 120,797 SAR Monthly Revenue & 458 Orders on Salla",
    titleAr: "تحقيق مبيعات قياسية بلغت 120,797 ريال و458 طلباً مكتملاً على منصة سلة",
    tagline: "Surpassing the 100K monthly milestone by +20,797 SAR through multi-channel acquisition and high-intent funnel conversion.",
    taglineAr: "تجاوز المستهدف الشهري بفائض 20,797+ ريال مع توجيه 25,943 زيارة شرائية عالية التحويل للمتجر.",
    clientIndustry: "E-Commerce Platform (Salla)",
    clientIndustryAr: "تجارة إلكترونية وتجزئة (منصة سلة - الخليج)",
    timeframe: "Monthly Record Phase",
    timeframeAr: "شهر المبيعات القياسي (سبتمبر)",
    proofImage: "/results/salla-ecommerce.png",
    metrics: [
      {
        label: "Monthly Revenue",
        labelAr: "مبيعات سبتمبر القياسية",
        value: "120,797 ر.س",
        sublabel: "September peak record",
        sublabelAr: "رقم قياسي تاريخي في مبيعات المتجر",
      },
      {
        label: "Orders Delivered",
        labelAr: "طلبات مؤكدة ومستلمة",
        value: "458",
        sublabel: "Completed customer orders",
        sublabelAr: "طلبات ناجحة ومكتملة للمستهلكين",
      },
      {
        label: "Target Surpassed",
        labelAr: "تخطي المستهدف الشهري",
        value: "+20,797 ر.س",
        sublabel: "Goal: 100K (Hit 120.7K)",
        sublabelAr: "تجاوز هدف الـ 100 ألف بنسبة تتخطى 20%",
      },
      {
        label: "Store Visits",
        labelAr: "زيارات شرائية مستهدفة",
        value: "25,943",
        sublabel: "Qualified traffic volume",
        sublabelAr: "زيارات نوعية مستهدفة عبر الإعلانات",
      },
    ],
    challenge:
      "The store set an ambitious 100,000 SAR monthly revenue target. The challenge was acquiring high-converting buyers across the GCC while preventing cart abandonment and maintaining high Average Order Value (AOV).",
    challengeAr:
      "حدد المتجر مستهدفاً شهرياً طموحاً قدره 100,000 ريال. وكان التحدي الرئيسي استقطاب مشترين ذوي قدرة شرائية عالية في دول الخليج دون ارتفاع تكلفة الاستحواذ، والحد من السلات المتروكة على منصة سلة.",
    strategy:
      "Deployed a multi-stage acquisition architecture uniting direct-intent catalog promotions with cart-recovery sequences. Introduced bundle discounting and express shipping incentives that pushed September revenue to 120,797 SAR.",
    strategyAr:
      "تطبيق هيكل استقطاب متعدد المراحل يجمع بين إعلانات الكتالوج الموجهة وإعادة استهداف السلات المتروكة، مع تصميم عروض الحزم (Bundles) لرفع متوسط قيمة الطلب (AOV)، مما أدى لتجاوز المستهدف وتحقيق 120,797 ريال.",
    campaignStructure: [
      {
        funnelStage: "Top-of-Funnel Product Discovery (70% Budget)",
        funnelStageAr: "حملات اكتشاف المنتجات واستقطاب الزوار (70% من الميزانية)",
        objective: "Direct Store Traffic to Bestselling Catalogs",
        objectiveAr: "توجيه زيارات مستهدفة للمنتجات الأكثر طلباً",
        budgetAllocation: "70%",
        tactics: [
          "Dynamic product ads and short product demonstration videos on Meta",
          "Bundle promotions ('Buy 2 Get Free Express Shipping') boosting AOV",
        ],
        tacticsAr: [
          "إعلانات منتجات ديناميكية ومقاطع فيديو توضيحية سريعة على منصة Meta",
          "عروض الحزم التشجيعية (شراء قطعتين مع شحن سريع مجاني) لرفع متوسط قيمة الطلب",
        ],
      },
      {
        funnelStage: "Cart Abandonment & Retention (30% Budget)",
        funnelStageAr: "استرداد السلات المتروكة وحسم القرارات (30% من الميزانية)",
        objective: "Checkout Completion & Conversion Velocity",
        objectiveAr: "إتمام عمليات الدفع واستعادة المتسوقين المترددين",
        budgetAllocation: "30%",
        tactics: [
          "Dynamic catalog retargeting serving identical items browsed by customers",
          "Time-sensitive voucher code for shoppers abandoning at the checkout step",
        ],
        tacticsAr: [
          "إعلانات إعادة استهداف ديناميكية تعرض للمتسوق نفس المنتجات التي تفقدها",
          "رموز ترويجية محددة زمنياً لتشجيع المتسوقين في مرحلة الدفع النهائي",
        ],
      },
    ],
    creativeTesting: {
      hypothesis:
        "Short unboxing and practical application clips highlighting immediate benefits will convert substantially faster than isolated flat-lay studio product photos.",
      hypothesisAr:
        "مقاطع الفيديو التوضيحية التي تستعرض استخدام المنتج وفوائده المباشرة ستحقق معدل تحويل أعلى بكثير من صور الاستوديو الثابتة.",
      testedFormats: [
        "Live product in-use demonstrations vs. Polished graphic renders",
        "Free express shipping bundle hook vs. Percentage discount hook",
      ],
      testedFormatsAr: [
        "مقاطع تجربة عملية للمنتج أثناء الاستخدام مقابل صور جرافيك معالجة",
        "عرض حزمة المنتجات مع الشحن المجاني مقابل خصم النسبة المئوية",
      ],
      winningAsset:
        "Product demonstration video with bundle free-shipping trigger unlocked 458 orders and powered the record 120,797 SAR milestone.",
      winningAssetAr:
        "مقطع العرض التوضيحي للمنتج مع محفز الشحن المجاني للحزم حقق 458 طلباً وقاد المتجر لتحقيق إيرادات قياسية بلغت 120,797 ريال.",
      learning:
        "On Salla and GCC stores, frictionless checkout incentives and bundled value propositions immediately elevate basket size and shatter sales records.",
      learningAr:
        "في منصة سلة ومتاجر الخليج، تبسيط إجراءات الدفع وتقديم عروض القيمة المجمعة يرفعان سلة الشراء بصورة فورية ويكسران الحواجز البيعية.",
    },
    resultsSummary:
      "Generated 120,797.18 SAR in monthly revenue, 458 orders, and 25,943 store visits, exceeding the store's 100K target by +20% extra revenue.",
    resultsSummaryAr:
      "تحقيق 120,797.18 ريال إيرادات شهرية، و458 طلباً ناجحاً، و25,943 زيارة للمتجر، متجاوزاً مستهدف المبيعات بفائض يتخطى 20%.",
    tags: ["Salla", "E-Commerce", "120K SAR", "458 Orders", "GCC Market"],
  },
  {
    id: "shopify-usd-scale",
    platform: "ecommerce",
    category: "Shopify International E-Commerce",
    categoryAr: "متجر Shopify وتجارة دولية بالدولار",
    title: "Generating $8,371.57 Revenue at 3.68x ROAS with 725 Started Checkouts",
    titleAr: "تحقيق مبيعات 8,370 دولار ومضاعف عائد 3.68x على متجر Shopify مع 725 مبادرة دفع",
    tagline: "Scaling direct-to-consumer store acquisition on Shopify with $2,275 ad spend and peak test windows hitting 4.98x ROAS.",
    taglineAr: "إدارة وتوسيع مبيعات متجر تجارة إلكترونية دولي بميزانية 2,275 دولار مع بلوغ العائد 4.98x في فترات الذروة.",
    clientIndustry: "International E-Commerce (Shopify)",
    clientIndustryAr: "تجارة إلكترونية دولية ومتاجر Shopify",
    timeframe: "Scale Phase Execution",
    timeframeAr: "مرحلة التوسع والمبيعات الدولية",
    proofImage: "/results/shopify-usd-scale.png",
    metrics: [
      {
        label: "Total Sales",
        labelAr: "إجمالي المبيعات المؤكدة",
        value: "$8,371.57",
        sublabel: "In verified purchase value",
        sublabelAr: "مبيعات متجر Shopify بالدولار",
      },
      {
        label: "Purchase ROAS",
        labelAr: "العائد على الإنفاق (ROAS)",
        value: "3.68x",
        sublabel: "Peak windows reached 4.98x",
        sublabelAr: "وصل إلى 4.98x في فترات الذروة",
      },
      {
        label: "Checkouts Started",
        labelAr: "سلات شراء مبدوءة",
        value: "725",
        sublabel: "High conversion momentum",
        sublabelAr: "بدء إجراءات الدفع ببيانات عملاء حقيقية",
      },
      {
        label: "Adds to Cart",
        labelAr: "إضافات إلى السلة",
        value: "1,028",
        sublabel: "High purchase intent",
        sublabelAr: "تفاعل شرائي مباشر مع العرض",
      },
    ],
    challenge:
      "The client needed to scale an international DTC Shopify store in USD under competitive bidding, keeping Customer Acquisition Cost (CPA) low to maintain strong gross margins.",
    challengeAr:
      "احتاج العميل إلى توسيع مبيعات متجر Shopify بالدولار الأمريكي في أسواق دولية شديدة المنافسة، مع إبقاء تكلفة الاستحواذ (CPA) في مستويات منضبطة لحماية هوامش الربح الإجمالية.",
    strategy:
      "Structured an Advantage+ Shopping Campaign (ASC) on Meta paired with short problem-solving UGC reels. Streamlined the Shopify checkout flow to minimize friction, driving 725 started checkouts and $8,371.57 revenue on $2,275 spend.",
    strategyAr:
      "تطبيق هيكل حملات Advantage+ Shopping متقدم على Meta مقترناً بمقاطع فيديو UGC تعالج اعتراضات الشراء، مع تحسين مسار الدفع على Shopify لتسهيل المعاملات.",
    campaignStructure: [
      {
        funnelStage: "Advantage+ Shopping Catalog Scale (75% Budget)",
        funnelStageAr: "حملات التوسع Advantage+ Shopping (ASC 75%)",
        objective: "Direct Checkout & Revenue Volume",
        objectiveAr: "مبيعات فورية وتحقيق أعلى قيمة شرائية",
        budgetAllocation: "75%",
        tactics: [
          "Dynamic creative testing combining top 3 UGC angles with product catalog",
          "Target CPA bid capping to prevent algorithm overspending in peak hours",
        ],
        tacticsAr: [
          "اختبارات إعلانية ديناميكية تدمج بين أفضل 3 زوايا لمقاطع UGC وكتالوج المنتجات",
          "تطبيق سقف المزايدة (Bid Capping) لمنع الخوارزمية من تجاوز تكلفة الشراء المستهدفة",
        ],
      },
      {
        funnelStage: "High-Intent Checkout Recovery (25% Budget)",
        funnelStageAr: "استرداد مسار الدفع وإتمام الطلبات (25% من الميزانية)",
        objective: "Converting 725 Initiated Checkouts",
        objectiveAr: "تحويل 725 مبادرة دفع إلى طلبات مكتملة",
        budgetAllocation: "25%",
        tactics: [
          "Exclusive first-order discount reminders for abandoned checkouts",
          "Reassurance messaging focusing on tracked international shipping and easy refunds",
        ],
        tacticsAr: [
          "تذكيرات بحوافز سعرية حصرية للسلات المتروكة في مرحلة الدفع",
          "رسائل طمأنة تركز على موثوقية الشحن الدولي وسياسة الاسترجاع السلسة",
        ],
      },
    ],
    creativeTesting: {
      hypothesis:
        "Videos addressing customer objections in the first 3 seconds will boost checkout progression rates by more than 40%.",
      hypothesisAr:
        "مقاطع الفيديو التي تجيب على مخاوف واعتراضات العميل في أول 3 ثوانٍ سترفع معدل الانتقال إلى صفحة الدفع بأكثر من 40%.",
      testedFormats: [
        "Immediate problem-solving video vs. Aesthetic lifestyle showcase",
        "Special bundle value hook vs. Single-item feature hook",
      ],
      testedFormatsAr: [
        "مقاطع تركز على حل المشكلة فوراً مقابل استعراض المنتجات بنمط الحياة العام",
        "خطاف القيمة المجمعة للحزم مقابل إبراز مزايا القطعة الفردية",
      ],
      winningAsset:
        "Problem-solving video with clear refund guarantee delivered 725 checkouts and $8,371.57 revenue at 3.68x ROAS.",
      winningAssetAr:
        "مقطع حل المشكلة مع إبراز ضمان الاسترجاع حقق 725 مبادرة دفع وإيرادات بلغت $8,371.57 بعائد 3.68x ROAS.",
      learning:
        "In international USD stores, eliminating post-click anxiety around shipping reliability and product fit is the primary multiplier for scaling budget.",
      learningAr:
        "في المتاجر الدولية ذات التعامل بالدولار، إزالة قلق المتسوق من كفاءة الشحن ومطابقة المنتج هي الرافعة الأساسية لتوسيع الميزانيات بأمان.",
    },
    resultsSummary:
      "Secured $8,371.57 in purchase value, 1,028 adds to cart, and 725 checkouts at 3.68x ROAS on $2,275 ad spend.",
    resultsSummaryAr:
      "تحقيق مبيعات مؤكدة بقيمة $8,371.57، و1,028 إضافة إلى السلة، و725 مبادرة دفع بعائد 3.68x ROAS مقابل إنفاق إعلاني قدره $2,275.",
    tags: ["Shopify", "USD E-Commerce", "$8.3K Sales", "3.68x ROAS", "Advantage+"],
  },
  {
    id: "google-ads-q4",
    platform: "google",
    category: "Google Ads & Holiday Scaling",
    categoryAr: "إعلانات Google وتوسيع مبيعات موسم Q4",
    title: "Dominating Q4 Sales with 740.10% Actual ROAS & 10.8K SAR Revenue on Google",
    titleAr: "تحقيق عائد استثنائي 740% ومبيعات 10,800 ريال في موسم تخفيضات Q4",
    tagline: "Capitalizing on peak holiday buyer demand with razor-sharp CPCs under 0.50 SAR and high-converting search intent.",
    taglineAr: "استثمار موسم التخفيضات بحملات بحثية مركزة حققت تكلفة نقرة أقل من 0.50 ريال وعائد استثماري 7.4x.",
    clientIndustry: "E-Commerce (Q4 Holiday Scale)",
    clientIndustryAr: "تجارة إلكترونية (موسم تخفيضات نهاية العام Q4)",
    timeframe: "Q4 Holiday Season",
    timeframeAr: "موسم التخفيضات والربع الأخير",
    proofImage: "/results/google-ads-q4.png",
    metrics: [
      {
        label: "Peak Actual ROAS",
        labelAr: "أعلى عائد ROAS محقق",
        value: "740.10%",
        sublabel: "7.4x cash return",
        sublabelAr: "7.4 أضعاف الميزانية المنفقة",
      },
      {
        label: "Campaign Sales",
        labelAr: "مبيعات موسم التخفيضات",
        value: "10.8K ر.س",
        sublabel: "High conversion volume",
        sublabelAr: "إيرادات مؤكدة عبر الحملة",
      },
      {
        label: "Average CPC",
        labelAr: "متوسط تكلفة النقرة (CPC)",
        value: "0.48 ر.س",
        sublabel: "Razor-sharp bidding",
        sublabelAr: "مزايدة ذكية بأقل من نصف ريال للنقرة",
      },
      {
        label: "Lean Ad Cost",
        labelAr: "الميزانية المنفقة",
        value: "1,460 ر.س",
        sublabel: "High profitability",
        sublabelAr: "إنفاق مركز عالي المردود والربحية",
      },
    ],
    challenge:
      "During peak Q4 holiday shopping, Google Ads auction CPCs spike drastically. The challenge was securing substantial sales volume without entering costly bidding wars against larger competitors.",
    challengeAr:
      "خلال موسم الربع الأخير (Q4)، ترتفع تكلفة المزايدة (CPC) على إعلانات Google بصورة حادة. تمثل التحدي في تحقيق حجم مبيعات قوي دون الانزلاق إلى مزايدات مكلفة مع المنافسين الكبار.",
    strategy:
      "Captured specific commercial long-tail keywords that competitors overlooked. Implemented automated Target ROAS bidding paired with seasonal promotion extensions, securing 0.48 SAR CPCs and a 740.10% ROAS.",
    strategyAr:
      "اقتناص الكلمات الدلالية النوعية ذات النية الشرائية الصريحة التي يغفل عنها المنافسون، وتطبيق استراتيجية Target ROAS التلقائية مع إضافات العروض الموسمية، مما خفض النقرة إلى 0.48 ريال وحقق عائد 740.10%.",
    campaignStructure: [
      {
        funnelStage: "Holiday Promotion Search Ads (80% Budget)",
        funnelStageAr: "حملات البحث لعروض التخفيضات (80% من الميزانية)",
        objective: "Direct Sales from Holiday Gift Searchers",
        objectiveAr: "حصد مبيعات مباشرة من الباحثين عن عروض التخفيضات",
        budgetAllocation: "80%",
        tactics: [
          "Countdown timers and promotion extensions highlighting seasonal deal deadlines",
          "Exact match keyword grouping for high-converting gift and holiday queries",
        ],
        tacticsAr: [
          "استخدام إضافات العروض الترويجية والعد التنازلي لإبراز المهل الزمنية للعروض",
          "استهداف الكلمات الدلالية المطابقة تماماً لمنتجات الهدايا والتخفيضات الموسمية",
        ],
      },
      {
        funnelStage: "Deal Retargeting (20% Budget)",
        funnelStageAr: "إعادة استهداف زوار العروض (20% من الميزانية)",
        objective: "Closing Hesitant Cart Visitors",
        objectiveAr: "حسم قرارات الشراء قبل انتهاء فترة الخصم",
        budgetAllocation: "20%",
        tactics: [
          "Dynamic search ads retargeting shoppers who browsed discount landing pages",
          "Stock scarcity triggers for top-selling holiday inventory",
        ],
        tacticsAr: [
          "إعلانات بحث ديناميكية لإعادة استهداف الزوار الذين تفقدوا صفحات التخفيضات",
          "تنبيهات بمحدودية المخزون المتاح للمنتجات الأكثر طلباً",
        ],
      },
    ],
    creativeTesting: {
      hypothesis:
        "Explicit discount percentage tags and countdown timers inside Google headlines will increase CTR by 30%+ and lower CPC by increasing Ad Quality Score.",
      hypothesisAr:
        "إبراز نسب الخصم المباشرة وإضافات الترويج داخل نصوص إعلانات Google سيرفع معدل النقر (CTR) ويخفض تكلفة النقرة عبر تحسين نقاط جودة الإعلان.",
      testedFormats: [
        "Search ads with explicit strikethrough pricing vs. Standard text copy",
        "Urgency countdown headlines vs. General product feature headlines",
      ],
      testedFormatsAr: [
        "إعلانات بحث تتضمن أسعار الخصم المشطوبة مقابل النصوص الوصفية التقليدية",
        "عناوين تركز على محدودية الوقت المتبقي مقابل عناوين مزايا المنتجات العامة",
      ],
      winningAsset:
        "Countdown search copy with transparent shipping discount unlocked a peak 740.10% ROAS and 0.48 SAR CPC.",
      winningAssetAr:
        "نص البحث المقترن بالعد التنازلي وتخفيض الشحن حقق أعلى عائد استثماري بلغ 740.10% ROAS بتكلفة نقرة 0.48 ريال.",
      learning:
        "During high-competition seasons, precision intent targeting combined with transparent price offers in the title secures high ROAS at fractional CPCs.",
      learningAr:
        "خلال مواسم المنافسة الإعلانية الشرسة، يؤدي الاستهداف الدقيق لنوايا البحث المقترن بعروض واضحة في العنوان إلى تحقيق أعلى عائد بأقل تكلفة ممكنة.",
    },
    resultsSummary:
      "Delivered an extraordinary 740.10% ROAS and 10,800 SAR in revenue on just 1,460 SAR ad spend with a record 0.48 SAR average CPC.",
    resultsSummaryAr:
      "تحقيق عائد استثنائي 740.10% ROAS وإيرادات قدرها 10,800 ريال مقابل إنفاق إعلاني 1,460 ريال فقط مع تكلفة نقرة قياسية 0.48 ريال.",
    tags: ["Google Ads", "740% ROAS", "Q4 Scale", "0.48 SAR CPC", "E-Commerce"],
  },
  {
    id: "devora",
    platform: "meta",
    category: "Fashion & Lifestyle E-Commerce",
    categoryAr: "تجارة إلكترونية وأزياء ملابس (Meta)",
    title: "Scaling Devora Apparel with 740+ Buyer Inquiries & 103K+ Impressions",
    titleAr: "توسيع مبيعات علامة Devora للأزياء بأكثر من 740 محادثة شراء و103 آلاف ظهور",
    tagline: "Multi-angle messaging campaigns delivering consistent daily order inquiries at an efficient 23.90 EGP cost.",
    taglineAr: "حملات استجابة مباشرة متعددة الزوايا حققت تدفقاً يومياً منتظماً للطلبات بتكلفة 23.90 جنيهاً للمحادثة.",
    clientIndustry: "Fashion, Apparel & Retail",
    clientIndustryAr: "تجارة إلكترونية وأزياء ملابس",
    timeframe: "Scaling Campaign Execution",
    timeframeAr: "إدارة وتوسيع مبيعات الحساب",
    proofImage: "/results/devora.png",
    metrics: [
      {
        label: "Buyer Conversations",
        labelAr: "محادثات الشراء المستلمة",
        value: "740+",
        sublabel: "Across 11 campaigns",
        sublabelAr: "عبر 11 حملة إعلانية منظمة",
      },
      {
        label: "Flagship Campaign CPA",
        labelAr: "تكلفة المحادثة بالحملة الرئيسية",
        value: "23.90 ج.م",
        sublabel: "431 chats on top set",
        sublabelAr: "431 محادثة بأكبر حملة منفردة",
      },
      {
        label: "Total Impressions",
        labelAr: "إجمالي مرات الظهور",
        value: "103,751",
        sublabel: "Delivered to target buyers",
        sublabelAr: "وصول موثوق للجمهور المهتم بالأزياء",
      },
      {
        label: "Meta Accounts Reached",
        labelAr: "الوصول الفريد للحسابات",
        value: "51,817",
        sublabel: "High brand penetration",
        sublabelAr: "مستخدمين مهتمين بالموضة والملابس",
      },
    ],
    challenge:
      "Devora required a consistent customer acquisition engine on Instagram and Facebook that could scale monthly apparel sales while competing against saturated fast-fashion advertising.",
    challengeAr:
      "تطلب التوسع في علامة Devora بناء محرك تسويقي مستدام عبر Instagram وFacebook يضمن استقرار المبيعات اليومية، والقدرة على التنافس في قطاع الأزياء السريعة عالي التشبع.",
    strategy:
      "Engineered an account structure balancing broad collection discovery with specific product hero ads. Scaled the winning collection ad set to 431 conversations at 23.91 EGP while maintaining secondary sets between 12 EGP and 25 EGP per conversation.",
    strategyAr:
      "هيكلة الحساب الإعلاني للموازنة بين استعراض التشكيلة الجديدة وإبراز القطع الأكثر طلباً. تم توسيع المجموعة الرابحة لتسجيل 431 محادثة بتكلفة 23.91 جنيهاً مع الحفاظ على كفاءة المجموعات المساندة.",
    campaignStructure: [
      {
        funnelStage: "Flagship Collection Launch (60% Budget)",
        funnelStageAr: "إطلاق وتوسيع التشكيلة الأساسية (60% من الميزانية)",
        objective: "Direct Order Conversations",
        objectiveAr: "محادثات شراء مباشر وتأكيد الطلبات",
        budgetAllocation: "60%",
        tactics: [
          "Dynamic visual carousel highlighting top 5 bestselling garments",
          "Conversational prompt for size and color availability check",
          "Scaling daily budget from 120 EGP to 260 EGP smoothly without cost spikes",
        ],
        tacticsAr: [
          "إعلانات كاروسيل ومقاطع فيديو تستعرض الموديلات الخمسة الأكثر طلباً وخيارات الألوان",
          "محفزات تفاعلية فورية للاستفسار عن توفر المقاسات ومواعيد التسليم",
          "تدرج متزن في رفع الميزانية اليومية من 120 إلى 260 جنيهاً مع ثبات تكلفة الاستحواذ",
        ],
      },
      {
        funnelStage: "Angle Testing & Retention (40% Budget)",
        funnelStageAr: "اختبار الزوايا وإعادة الاستهداف (40% من الميزانية)",
        objective: "Cart Recovery & Secondary Angle Testing",
        objectiveAr: "استعادة المشترين المترددين واختبار زوايا إعلانية جديدة",
        budgetAllocation: "40%",
        tactics: [
          "Customer unboxing photos and fabric quality testimonials",
          "Limited stock reminders for high-demand winter/summer models",
        ],
        tacticsAr: [
          "مقاطع تستعرض جودة خامات الأقمشة وتفاصيل الحياكة والتقفيل على الطبيعة",
          "إشعارات بتناقص الكميات المتبقية للقطع الأكثر طلباً",
        ],
      },
    ],
    creativeTesting: {
      hypothesis:
        "Showcasing models wearing the outfits in natural lighting will outperform isolated flat-lay studio product photography.",
      hypothesisAr:
        "استعراض الملابس عبر جلسات تصوير طبيعية بحركة حية سيتفوق بوضوح على صور الاستوديو المفرغة في معدلات التفاعل والتحويل.",
      testedFormats: [
        "Natural street-wear photoshoot reels vs. Studio catalog photos",
        "Bundle discount angle vs. Single piece premium look angle",
      ],
      testedFormatsAr: [
        "مقاطع ريلز بتصوير وتنسيق أزياء واقعي مقابل صور المنتجات الثابتة",
        "عرض التنسيقات المكتملة مع مزايا الشحن مقابل الترويج للقطع المنفردة",
      ],
      winningAsset:
        "The model carousel showcasing fabric drape and fit delivered 431 messaging conversations at 23.91 EGP, dominating account return.",
      winningAssetAr:
        "إعلان الكاروسيل الذي أبرز تفاصيل الأقمشة وانسيابية التصميم على الطبيعة حقق 431 محادثة شراء بتكلفة 23.91 جنيهاً.",
      learning:
        "Fashion customers buy the confidence and fit of the garment, not just the product. Natural motion and authentic fit drive the highest conversion rates.",
      learningAr:
        "في تسويق الأزياء، يشتري العميل الثقة بملاءمة المظهر وجودة الخامة؛ الحركة الطبيعية ووضوح التفاصيل يسرعان قرار الشراء بصورة ملحوظة.",
    },
    resultsSummary:
      "Generated over 740 direct buyer inquiries, 103,751 impressions, and reached 51,817 Meta accounts across 19,290 EGP ad spend, establishing a predictable revenue channel for the brand.",
    resultsSummaryAr:
      "تحقيق أكثر من 740 محادثة شراء مباشرة، و103 آلاف ظهور، والوصول إلى 51 ألف حساب مقابل ميزانية 19,290 جنيهاً، مما رسخ قناة إيرادات مستقرة للعلامة.",
    tags: ["Fashion E-Commerce", "Messaging Conversions", "Devora", "Apparel Marketing", "Meta Ads"],
  },
  {
    id: "heba-bales",
    platform: "b2b",
    category: "Wholesale & B2B Trade",
    categoryAr: "تجارة وتوريد بالات ملابس جملة (B2B)",
    title: "Capturing 590+ Merchant & Wholesale Inquiries for European Apparel Bales",
    titleAr: "استقطاب أكثر من 590 تاجراً وموزع جملة لحساب توريد بالات الملابس الأوروبية",
    tagline: "Precision targeting of apparel traders, retail store owners, and bulk buyers across commercial trade hubs.",
    taglineAr: "استهداف تجاري دقيق لأصحاب المحلات ومشتري الجملة في المراكز التجارية والمحافظات مع استبعاد المستهلك الفردي.",
    clientIndustry: "Apparel Bales & Bulk Wholesale Trade",
    clientIndustryAr: "تجارة الجملة وتوريد البالات الأوروبية (B2B)",
    timeframe: "B2B Campaign Scale",
    timeframeAr: "حملات مبيعات وتوريد B2B",
    proofImage: "/results/heba-bales.png",
    metrics: [
      {
        label: "Wholesale Inquiries",
        labelAr: "محادثات واستفسارات تجار",
        value: "590+",
        sublabel: "Bulk buyers & shop owners",
        sublabelAr: "تجار وأصحاب محلات وموزعين",
      },
      {
        label: "Top Campaign CPA",
        labelAr: "تكلفة محادثة التاجر المؤهل",
        value: "23.91 ج.م",
        sublabel: "431 bulk chats on main ad set",
        sublabelAr: "431 محادثة جملة بالحملة الرئيسية",
      },
      {
        label: "Ad Impressions",
        labelAr: "مرات الظهور الإعلاني",
        value: "53,741",
        sublabel: "Across merchant hubs",
        sublabelAr: "ظهور إعلاني موجه في أقاليم التجارة",
      },
      {
        label: "Targeted Merchants",
        labelAr: "الوصول للتجار المستهدفين",
        value: "28,688",
        sublabel: "Verified commercial audience",
        sublabelAr: "حسابات تجارية لمهتمين بملابس البالات",
      },
    ],
    challenge:
      "B2B wholesale trading in imported apparel bales requires reaching actual merchants and shop owners who have real purchasing capital, while avoiding retail consumers who only want single garments.",
    challengeAr:
      "تتطلب تجارة الجملة للبالات الوصول إلى تجار فعليين وأصحاب محلات يمتلكون الملاءة المالية للشراء بكميات تجارية، مع فلترة المستهلكين الأفراد لمنع هدر الميزانية ووقت فريق المبيعات.",
    strategy:
      "Created qualifying creative assets explicitly highlighting 'Wholesale Only - European Grade A Bales'. Structured campaigns with minimum order thresholds stated in the copy, directing qualified merchants directly into a WhatsApp wholesale closing desk.",
    strategyAr:
      "صياغة محتوى إعلاني حاسم يبرز 'البيع بالجملة فقط - بالات أوروبية فرز أول مختومة'، مع توضيح الحد الأدنى للطلب وتوجيه المشترين المؤهلين مباشرة إلى قنوات إغلاق الصفقات عبر WhatsApp.",
    campaignStructure: [
      {
        funnelStage: "Trader Acquisition & Grade Demonstration (70% Budget)",
        funnelStageAr: "استقطاب التجار وتوثيق جودة الفرز (70% من الميزانية)",
        objective: "Qualified Wholesale Chat Inquiries",
        objectiveAr: "محادثات تجارية لبدء طلبيات التوريد",
        budgetAllocation: "70%",
        tactics: [
          "Video inspections showing actual opening of European sealed bales",
          "Explicit wholesale pricing and grade breakdown (Super Cream / First Class)",
          "Daily budget scaling to 260 EGP driving 431 chats at 23.91 EGP",
        ],
        tacticsAr: [
          "مقاطع توثيق ميدانية تفتح البالات الأوروبية المختومة أمام الكاميرا في المستودع",
          "توضيح درجات الفرز وتكلفة الكيلو والبالة بكل شفافية للمشتري",
          "توسيع الإنفاق اليومي إلى 260 جنيهاً مع تسجيل 431 محادثة تجارية بتكلفة 23.91 جنيهاً",
        ],
      },
      {
        funnelStage: "New Shipment Alerts (30% Budget)",
        funnelStageAr: "إشعارات وصول الحاويات والشحنات الجديدة (30% من الميزانية)",
        objective: "Urgent Booking on New Arrivals",
        objectiveAr: "حجوزات مسبقة للشحنات فور وصولها المستودع",
        budgetAllocation: "30%",
        tactics: [
          "Time-sensitive alerts when a new European container arrives at the warehouse",
          "Exclusive bulk discount tiers for repeat merchants",
        ],
        tacticsAr: [
          "تنبيهات فورية للتجار عند وصول حاويات جديدة للمستودع",
          "شرائح خصومات تفضيلية للموزعين ذوي المسحوبات الدورية",
        ],
      },
    ],
    creativeTesting: {
      hypothesis:
        "Showing unedited live videos of bale opening and inspecting branded tags inside the bale will generate far higher trust among provincial merchants than polished graphic banners.",
      hypothesisAr:
        "مقاطع فتح البالات وفحص بطاقات العلامات التجارية داخل المستودع ستولد ثقة تجارية أعلى بكثير من التصاميم الدعائية الثابتة.",
      testedFormats: [
        "Live warehouse bale opening video vs. Static branded poster",
        "Transparent price per kilogram/bale vs. 'Inquire for price'",
      ],
      testedFormatsAr: [
        "مقاطع توثيق ميداني مباشر في المستودع مقابل التصاميم الدعائية الثابتة",
        "إعلان التسعير والفرز مباشرة في بداية المقطع مقابل الحجب للاستفسار",
      ],
      winningAsset:
        "Warehouse bale opening clip with direct price transparency produced 431 wholesale inquiries at 23.91 EGP per chat.",
      winningAssetAr:
        "مقطع توثيق فتح البالة في المستودع مع إعلان التسعير الصريح حقق 431 محادثة تاجر جملة بتكلفة 23.91 جنيهاً للمحادثة.",
      learning:
        "B2B merchants value proof of inventory and honest grading above all else. Radical visual honesty converts wholesale capital faster than polished branding.",
      learningAr:
        "في قطاع B2B، يرتكز قرار التاجر على المعاينة الموثوقة والشفافية في درجات الفرز؛ المصداقية البصرية تقود لتعاقدات توريد فورية.",
    },
    resultsSummary:
      "Secured 590+ merchant inquiries, 53,741 impressions, and reached 28,688 targeted apparel traders, solidifying the client as a premier European bale supplier.",
    resultsSummaryAr:
      "استقطاب أكثر من 590 تاجراً ومشتري جملة، وتحقيق 53 ألف ظهور، والوصول إلى 28 ألف تاجر مستهدف في قطاع الملابس الأوروبية.",
    tags: ["B2B Wholesale", "Apparel Bales", "High-Volume Leads", "Merchant Acquisition", "Meta Ads"],
  },
  {
    id: "pixelmind",
    platform: "b2b",
    category: "Digital Agency & Creative Services",
    categoryAr: "وكالة رقمية وخدمات تسويق وتصميم (B2B)",
    title: "High-Value Client Inquiries at as Low as 3.84 EGP Per Message for PixelMind",
    titleAr: "استقطاب عملاء وشركات لخدمات التسويق بتكلفة تبدأ من 3.84 جنيه للمحادثة (PixelMind)",
    tagline: "Portfolio engagement and direct consultation campaigns converting business founders and brand managers.",
    taglineAr: "حملات استشارات مباشرة واستعراض لحالات النمو حولت رواد الأعمال ومديري العلامات التجارية لعملاء متعاقدين.",
    clientIndustry: "Digital Agency & Marketing Services",
    clientIndustryAr: "خدمات تسويق وإنتاج وتصميم",
    timeframe: "Service Acquisition Campaign",
    timeframeAr: "حملات استقطاب عملاء للوكالة",
    proofImage: "/results/pixelmind.png",
    metrics: [
      {
        label: "Lowest Chat Cost",
        labelAr: "أقل تكلفة محادثة عميل",
        value: "3.84 ج.م",
        sublabel: "24 chats on agile test set",
        sublabelAr: "في مجموعة الاختبار السريعة",
      },
      {
        label: "Main Ad Set CPA",
        labelAr: "تكلفة المحادثة بالحملة الرئيسية",
        value: "8.77 ج.م",
        sublabel: "72 high-intent client inquiries",
        sublabelAr: "72 محادثة عملاء جادين للاستشارات",
      },
      {
        label: "Verified Impressions",
        labelAr: "مرات الظهور الإعلاني",
        value: "81,642",
        sublabel: "Targeting brand executives",
        sublabelAr: "ظهور مخصص لرواد الأعمال ومديري العلامات",
      },
      {
        label: "Decision-Makers Reached",
        labelAr: "الوصول لصناع القرار",
        value: "26,351",
        sublabel: "High-value commercial reach",
        sublabelAr: "أصحاب مشاريع ومديري تسويق",
      },
    ],
    challenge:
      "Creative agencies and marketing service providers often suffer from skyrocketing Cost Per Acquisition when competing on Meta, making client lead acquisition prohibitively expensive.",
    challengeAr:
      "تعاني وكالات التسويق ومقدمو الخدمات الإبداعية عادة من ارتفاع تكلفة الاستحواذ (CPA) والمنافسة الشرسة على منصات التواصل، مع كثرة الاستفسارات غير الجادة في التعاقد.",
    strategy:
      "Crafted an agile testing structure combining showcase video reels with targeted messaging ads. Isolated test sets achieved record results: 72 conversations at 8.77 EGP and 24 conversations at an astonishing 3.84 EGP per message.",
    strategyAr:
      "بناء استراتيجية اختبار مرنة تجمع بين استعراض مؤشرات النمو لمشاريع سابقة وإعلانات الاستشارة المباشرة. حققت المجموعات الرابحة نتائج قياسية: 72 محادثة بتكلفة 8.77 جنيه و24 محادثة بتكلفة 3.84 جنيه.",
    campaignStructure: [
      {
        funnelStage: "Proof-Driven Lead Generation (75% Budget)",
        funnelStageAr: "توليد عملاء محتملين قائم على النتائج (75% من الميزانية)",
        objective: "Client Consultation Conversations",
        objectiveAr: "محادثات استشارة وطلب عروض أسعار للخدمات",
        budgetAllocation: "75%",
        tactics: [
          "Short case study reels showing client before/after business growth",
          "Targeting business page admins, e-commerce owners, and startup founders",
          "Direct message CTA to receive a tailored digital marketing audit",
        ],
        tacticsAr: [
          "مقاطع دراسات حالة سريعة تبرز نمو إيرادات ومبيعات العملاء السابقين بالأرقام",
          "استهداف مديري الصفحات التجارية ومؤسسي الشركات الناشئة وأصحاب المتاجر",
          "دعوة واضحة للمحادثة للحصول على تدقيق تسويقي أولي للحساب",
        ],
      },
      {
        funnelStage: "High-Engagement Retargeting (25% Budget)",
        funnelStageAr: "تعزيز السمعة المهنية والتفاعل (25% من الميزانية)",
        objective: "Post Engagement & Brand Authority",
        objectiveAr: "بناء المصداقية المؤسسية وتوثيق سابقة الأعمال",
        budgetAllocation: "25%",
        tactics: [
          "Generated 490 high-intent post engagements at 3.82 EGP per engagement",
          "Reinforcing creative authority and client testimonials",
        ],
        tacticsAr: [
          "توليد 490 تفاعلاً نوعياً على المنشورات بتكلفة 3.82 جنيه للتفاعل",
          "نشر تقييمات العملاء ونتائج المشروعات المنجزة لترسيخ المكانة المهنية",
        ],
      },
    ],
    creativeTesting: {
      hypothesis:
        "Directly demonstrating commercial return metrics for past clients will outperform abstract design mockups or agency buzzwords.",
      hypothesisAr:
        "استعراض مؤشرات العائد المالي ونمو المبيعات الحقيقي للعملاء السابقين سيتفوق بوضوح على استعراض التصاميم الفنية أو الشعارات العامة.",
      testedFormats: [
        "Metrics-first client breakdown vs. Aesthetic design showcase reel",
        "Direct business audit offer vs. General service list carousel",
      ],
      testedFormatsAr: [
        "مقاطع تركز على العائد المالي ونمو الإيرادات أولاً مقابل استعراض المعارض الفنية",
        "عرض تدقيق تسويقي مخصص للحساب مقابل قوائم الخدمات التقليدية",
      ],
      winningAsset:
        "The metrics-first case breakdown generated 72 qualified client chats at 8.77 EGP, proving B2B decision-makers respond to measurable returns.",
      winningAssetAr:
        "مقطع تفكيك نتائج ونمو الأعمال بالأرقام حقق 72 محادثة لصناع قرار ومديري تسويق بتكلفة 8.77 جنيه للمحادثة.",
      learning:
        "B2B service buyers are not looking for art; they are hiring an engine for revenue growth. Lead with commercial proof.",
      learningAr:
        "صناع القرار في قطاع B2B لا يبحثون عن استعراضات شكلية، بل يستثمرون في محرك يدفع نمو الإيرادات؛ تقديم البراهين الرقمية يقود لقرارات حاسمة.",
    },
    resultsSummary:
      "Generated over 160 business conversations, 81,642 impressions, and 490 engagements at costs as low as 3.84 EGP, proving B2B agency services can be acquired with incredible efficiency.",
    resultsSummaryAr:
      "تحقيق أكثر من 160 محادثة تجارية مع شركات ورواد أعمال، و81 ألف ظهور، و490 تفاعلاً موثقاً بتكلفة تبدأ من 3.84 جنيه للمحادثة.",
    tags: ["B2B Agency", "PixelMind", "Client Acquisition", "3.84 EGP Chat", "Service Marketing"],
  },
  {
    id: "honaijel-cameras",
    platform: "meta",
    category: "Security Systems & Electronics",
    categoryAr: "أنظمة أمنية ومراقبة وتجهيزات تقنية (Meta)",
    title: "Converting Security & CCTV Inquiries at 25.29 EGP per Chat for Honaijel Cameras",
    titleAr: "طلبات تركيب كاميرات مراقبة وأنظمة أمنية بتكلفة 25.29 جنيه لمؤسسة حنيجل",
    tagline: "High-intent direct response campaigns targeting homeowners, factories, and commercial facility managers.",
    taglineAr: "حملات استجابة مباشرة عالية الاستهداف لأصحاب العقارات، المنشآت التجارية، والمصانع لتأمين ممتلكاتهم.",
    clientIndustry: "Surveillance, Security Systems & Smart Tech",
    clientIndustryAr: "كاميرات مراقبة وشبكات وأنظمة أمنية",
    timeframe: "Focused Security Campaign",
    timeframeAr: "حملة استقطاب طلبات تركيب الكاميرات",
    proofImage: "/results/honaijel-cameras.png",
    metrics: [
      {
        label: "Security Buyer Chats",
        labelAr: "محادثات طلبات الكاميرات",
        value: "72+",
        sublabel: "High-ticket installations",
        sublabelAr: "طلبات تركيب للمنازل والمنشآت",
      },
      {
        label: "Cost Per Inquiry",
        labelAr: "تكلفة المحادثة المؤهلة",
        value: "25.29 ج.م",
        sublabel: "Exceptional for electronics",
        sublabelAr: "ممتازة لقطاع الأجهزة والتركيبات",
      },
      {
        label: "Targeted Impressions",
        labelAr: "مرات الظهور الإعلاني",
        value: "20,348",
        sublabel: "High local relevance",
        sublabelAr: "ظهور دقيق في النطاق المستهدف",
      },
      {
        label: "Facility Owners Reached",
        labelAr: "الوصول لملاك المنشآت",
        value: "10,687",
        sublabel: "Property & business owners",
        sublabelAr: "أصحاب عقارات ومحلات ومصانع",
      },
    ],
    challenge:
      "Surveillance systems carry a high purchase consideration cycle. The client needed to generate qualified inquiries from serious buyers ready to install multi-camera packages rather than casual price-checkers.",
    challengeAr:
      "تتميز أنظمة المراقبة الأمنية بدورة اتخاذ قرار مدروسة تتطلب بناء الثقة والإجابة عن المواصفات الفنية قبل التركيب. تمثل التحدي في استقطاب طلبات معاينة وتركيب جادة للمنظومات المتكاملة.",
    strategy:
      "Engineered an offer-focused ad set detailing complete turnkey installation packages (cameras, DVR/NVR, hard drive, and mobile monitoring setup). Launched messaging ads with immediate technical inquiry prompts at 25.29 EGP per conversation.",
    strategyAr:
      "هيكلة عروض تسويقية متكاملة تقدم منظومة جاهزة للتشغيل (كاميرات بالرؤية الليلية، أجهزة تسجيل NVR، قرص تخزين، وتطبيق المتابعة عبر الهاتف)، مع تشغيل حملات محادثات فورية بتكلفة 25.29 جنيهاً.",
    campaignStructure: [
      {
        funnelStage: "Turnkey Package Promotion (100% Budget)",
        funnelStageAr: "ترويج باقات المنظومات الأمنية المتكاملة (100% من الميزانية)",
        objective: "Direct Messaging for Site Inspection & Quotes",
        objectiveAr: "محادثات مباشرة لطلب المعاينة الميدانية وعروض الأسعار",
        budgetAllocation: "100%",
        tactics: [
          "Clear package breakdown: 4-camera and 8-camera full kits with night vision",
          "Highlighting mobile viewing on phone app anywhere in the world",
          "Automated messenger screening for location, property type, and installation date",
        ],
        tacticsAr: [
          "توضيح تفاصيل الباقة: باقات 4 و8 كاميرات مع التمديدات والتركيب والضمان المعتمد",
          "إبراز ميزة المراقبة الحية من أي مكان في العالم عبر تطبيق الهاتف الذكي",
          "تأهيل تلقائي للمستفسرين لتحديد موقع المنشأة ونوع العقار وموعد المعاينة المناسب",
        ],
      },
    ],
    creativeTesting: {
      hypothesis:
        "Showing real mobile screen recordings of live camera playback in 4K night vision will convert significantly better than manufacturer hardware photos.",
      hypothesisAr:
        "استعراض البث المباشر الفعلي لكاميرات المراقبة بالرؤية الليلية عبر تطبيق الهاتف سيقنع العميل أسرع بكثير من صور المعدات المجردة.",
      testedFormats: [
        "Live mobile app camera playback video vs. Manufacturer equipment photos",
        "Full installation package price vs. Camera-only price",
      ],
      testedFormatsAr: [
        "مقاطع تسجيل حي لتطبيق الهاتف أثناء التشغيل الليلي مقابل صور الكتالوج للمعدات",
        "عرض سعر الباقة المتكاملة شاملاً التركيب والضمان مقابل سعر الكاميرا المفردة",
      ],
      winningAsset:
        "Live mobile monitoring demonstration video produced 72 qualified customer inquiries at 25.29 EGP per conversation.",
      winningAssetAr:
        "مقطع تجربة المتابعة الحية عبر الهاتف حقق 72 محادثة لعملاء مؤهلين لطلب المعاينة والتركيب بتكلفة 25.29 جنيهاً.",
      learning:
        "Electronics and surveillance buyers buy peace of mind and crystal-clear visibility. Demonstrating the live phone app experience removes all technical doubts.",
      learningAr:
        "يبحث مشتري الأنظمة الأمنية عن الاطمئنان والموثوقية التقنية؛ رؤية البث المباشر عبر الهاتف يزيل كل الشكوك الفنية ويحفز التعاقد.",
    },
    resultsSummary:
      "Acquired 72+ qualified security camera inquiries, delivered 20,348 impressions, and reached 10,687 potential facility owners on an efficient budget of 3,536 EGP.",
    resultsSummaryAr:
      "استقطاب أكثر من 72 محادثة مؤهلة لتركيب الأنظمة الأمنية، وتحقيق 20 ألف ظهور، والوصول إلى 10 آلاف مالك منشأة وعقار بميزانية 3,536 جنيهاً.",
    tags: ["Security Systems", "CCTV Cameras", "High-Intent Leads", "Honaijel", "Meta Ads"],
  },
];

export const expertiseData: ExpertiseItem[] = [
  {
    id: "meta-ads-architecture",
    number: "01",
    title: "Meta Ads Architecture & CBO Systems",
    titleAr: "هيكلة حسابات Meta ومنظومات ميزانية CBO",
    description:
      "Structuring ad accounts to maximize Meta's algorithmic machine learning. Moving away from fragmented, self-competing ad sets toward consolidated Advantage+ Shopping and CBO architectures that scale smoothly.",
    descriptionAr:
      "إعادة تنظيم وتوحيد الحساب الإعلاني لتوجيه خوارزميات التعلم الآلي لدى Meta لصالح نمو المبيعات. التخلص من التشتت وتضارب المجموعات عبر نماذج Advantage+ وCBO لتوسيع الإنفاق بأمان مع الحفاظ على كفاءة التكلفة.",
    deliverables: [
      "Account Consolidation & Anti-Cannibalization",
      "Advantage+ Shopping Campaign (ASC) Optimization",
      "CBO Budget Allocation & Bid Cap Strategies",
      "Dynamic Product Ads (DPA) Catalog Setup",
    ],
    deliverablesAr: [
      "دمج المجموعات الإعلانية ومنع تضارب المزادات وهدر الميزانية",
      "إعداد وتحسين حملات Advantage+ Shopping لمتاجر التجارة الإلكترونية",
      "توزيع ميزانيات CBO واستراتيجيات الحد الأقصى للمزايدة (Bid Caps)",
      "ربط كتالوج المنتجات الديناميكية وتحديث الأسعار التلقائي (DPA)",
    ],
    tag: "Scale Engine",
  },
  {
    id: "creative-testing-matrix",
    number: "02",
    title: "Creative Testing & Fatigue Management",
    titleAr: "منظومة اختبار المحتوى وإدارة الإرهاق الإعلاني",
    description:
      "Creative is the most powerful targeting lever in modern paid social. Developing disciplined testing matrices that isolate hooks, visual pacing, value propositions, and calls to action before committing budget.",
    descriptionAr:
      "المحتوى الإعلاني هو أداة الاستهداف الأقوى في الإعلانات الحديثة. نطبق مصفوفة اختبار منضبطة تفصل بين الخطاف البصري الأول، سرعة العرض، والرسالة البيعية، للتحقق من كفاءة الإعلان قبل رفع الميزانية.",
    deliverables: [
      "Dynamic Creative Testing (DCT) Workflows",
      "Hook Rate (>35%) & Hold Rate (>15%) Optimization",
      "UGC Scripting & Angle Diversification",
      "Iterative Post-Fatigue Refresh Protocol",
    ],
    deliverablesAr: [
      "مسارات اختبار الإعلانات الديناميكية (DCT) لاكتشاف التوليفة الرابحة",
      "تحسين معدل جذب الانتباه (Hook Rate >35%) ونسبة المشاهدة المستمرة",
      "صياغة سيناريوهات مقاطع واقعية (UGC) وتنويع الزوايا البيعية",
      "بروتوكول تجديد دوري للمحتوى لتفادي هبوط الأداء (Ad Fatigue)",
    ],
    tag: "Creative Alpha",
  },
  {
    id: "pixel-capi-tracking",
    number: "03",
    title: "Conversions API (CAPI) & Tracking Rigor",
    titleAr: "ربط وتفعيل تتبع الخوادم المباشر (Conversions API - CAPI)",
    description:
      "Ensuring attribution resilience against browser tracking restrictions and iOS updates. Setting up server-side Conversions API, advanced matching parameters, and custom offline event datasets.",
    descriptionAr:
      "حماية بيانات الحملات ودقة الإسناد من قيود المتصفحات وتحديثات الخصوصية. إعداد وتفعيل Meta Conversions API بالتوازي مع البكسل من جانب الخادم لضمان تسجيل كل عملية شراء بدقة تامة.",
    deliverables: [
      "Meta Conversions API (CAPI) Server-Side Implementation",
      "Event Deduplication (Browser Pixel + Server)",
      "Advanced Matching Parameter Quality Score 8.0+",
      "Custom Value & Stage Progression Event Mapping",
    ],
    deliverablesAr: [
      "تثبيت وإعداد Meta Conversions API (CAPI) من جانب الخادم",
      "منع تكرار الأحداث البيعية بين المتصفح والخادم (Deduplication)",
      "رفع مؤشر جودة مطابقة بيانات الزوار (Match Quality Score) إلى 8.0+",
      "تتبع دقيق لأحداث التحويل المخصصة ومراحل التقدم في المتجر",
    ],
    tag: "Data Precision",
  },
  {
    id: "funnel-economics-cro",
    number: "04",
    title: "Full-Funnel Strategy & Conversion Optimization",
    titleAr: "استراتيجية مسار التحويل الكامل وتحسين معدل التحويل (CRO)",
    description:
      "Traffic means nothing if the destination is leaky. Optimizing the post-click experience: landing page messaging coherence, friction reduction, offer structuring, and cart abandonment triggers.",
    descriptionAr:
      "لا قيمة للزيارات الإعلانية إذا كانت تجربة ما بعد النقر تعاني من التسرب. تحسين توافق الرسالة الإعلانية مع صفحة الهبوط، تبسيط إجراءات الدفع عبر الهاتف، وتصميم عروض الحزم لرفع متوسط سلة الشراء (AOV).",
    deliverables: [
      "Ad-to-Landing Page Congruence Audit",
      "Mobile Checkout Friction Reduction",
      "Offer Bundling & Average Order Value (AOV) Boosters",
      "Lead Qualification Quizzes & Multi-Step Forms",
    ],
    deliverablesAr: [
      "تدقيق تطابق الرسالة الإعلانية مع صفحات الهبوط للحد من الارتداد",
      "تبسيط وتسهيل خطوات إتمام الطلب والدفع عبر الهواتف الذكية",
      "تصميم عروض وحزم ترفع متوسط قيمة الطلب (AOV Boosters)",
      "بناء نماذج واستبيانات تفاعلية لتأهيل العملاء المحتملين",
    ],
    tag: "Conversion Lift",
  },
  {
    id: "audience-research-segmentation",
    number: "05",
    title: "Audience Segmentation & Behavioral Research",
    titleAr: "دراسة سلوك الجمهور والتحليل التنافسي المتعمق",
    description:
      "Going beyond basic demographic checkboxes. Uncovering deep customer objections, triggers, and aspirations through review mining, competitor ad library research, and psychographic segmentation.",
    descriptionAr:
      "تجاوز الاستهداف الديموغرافي السطحي إلى سيكولوجية المشتري الفعلية. فحص تقييمات العملاء، تفكيك مكتبة إعلانات المنافسين (Meta Ad Library)، واستخراج الاعتراضات والدوافع الأساسية لبناء زوايا تسويقية فعالة.",
    deliverables: [
      "Competitor Ad Library & Angle Reverse-Engineering",
      "Customer Review Mining & Voice-of-Customer Sheets",
      "First-Party Customer List Lookalike Calibration",
      "Exclusion Matrices to Prevent Wasteful Ad Spend",
    ],
    deliverablesAr: [
      "تحليل وتفكيك مكتبة إعلانات المنافسين (Meta Ad Library)",
      "استخراج صوت العميل الفعلي (Voice-of-Customer) من التعليقات والتقييمات",
      "بناء جماهير مخصصة وشبيهة عالية الدقة من قوائم العملاء الفعليين",
      "تطبيق مصفوفات استبعاد ذكية لمنع الإنفاق على المشترين الحاليين",
    ],
    tag: "Intelligence",
  },
  {
    id: "analytics-reporting-attribution",
    number: "06",
    title: "Marketing Analytics & Transparent Reporting",
    titleAr: "التحليلات التسويقية والتقارير الشفافة للأداء",
    description:
      "No smoke and mirrors. Clean dashboards tracking Blended ROAS, Marketing Efficiency Ratio (MER), Cost Per Acquisition (CPA), and net contribution margin so stakeholders see the real commercial picture.",
    descriptionAr:
      "تقارير واضحة وقابلة للتطبيق العملي دون تعقيد. لوحات متابعة دقيقة ترصد العائد المجمع (Blended ROAS)، ومعدل الكفاءة التسويقية (MER)، وتكلفة الاستحواذ (CPA)، وصافي هامش المساهمة لتقديم رؤية تجارية حقيقية.",
    deliverables: [
      "Blended ROAS & MER (Marketing Efficiency Ratio) Tracking",
      "UTM Parameter Naming Convention Discipline",
      "Google Analytics 4 (GA4) Funnel Explorations",
      "Weekly Action-Oriented Performance Summaries",
    ],
    deliverablesAr: [
      "متابعة العائد المجمع ونسبة الكفاءة التسويقية الإجمالية (MER)",
      "تنظيم معايير روابط التتبع (UTM) لضمان دقة التحليل في GA4",
      "استكشاف مسارات وسلوك المستخدم داخل المتجر عبر Google Analytics 4",
      "تقارير أداء دورية تتضمن قرارات تنفيذية محددة للمرحلة التالية",
    ],
    tag: "Clarity",
  },
];

export const methodologySteps: WorkflowStep[] = [
  {
    step: "01",
    title: "Research & Discovery",
    titleAr: "التدقيق الشامل واكتشاف الفرص",
    shortDesc: "Auditing historic account data, customer economics, and market positioning.",
    shortDescAr: "مراجعة البيانات التاريخية للحساب، اقتصاديات التسعير وهوامش الربح، والتموضع التنافسي في السوق.",
    details: [
      "Deep dive into historical ad performance & CPA trends",
      "Review of unit economics, margins, and customer lifetime value",
      "Competitor intelligence & Meta Ad Library tear-down",
    ],
    detailsAr: [
      "تحليل متعمق لأداء الحملات السابقة ومسارات تكلفة الاستحواذ (CPA Trends)",
      "فحص اقتصاديات الوحدة وهوامش الربحية والقيمة الدائمة للعميل (LTV)",
      "دراسة استخباراتية للمنافسين وتفكيك مكتبة إعلانات Meta",
    ],
    output: "Comprehensive Account Audit & Growth Opportunity Roadmap",
    outputAr: "تقرير تدقيق شامل وخارطة طريق واضحة لفرص النمو",
  },
  {
    step: "02",
    title: "Market & Audience Analysis",
    titleAr: "تحليل السوق وسيكولوجية الجمهور",
    shortDesc: "Uncovering core purchase drivers, anxieties, and unaddressed customer desires.",
    shortDescAr: "استكشاف دوافع الشراء الأساسية، ونقاط القلق والتردد، والاحتياجات غير الملبّاة لدى المشترين.",
    details: [
      "Review mining across social channels, forums, and competitors",
      "Creation of primary customer avatars and emotional angles",
      "Formulation of explicit value propositions for cold traffic",
    ],
    detailsAr: [
      "استخراج صوت العميل (Review Mining) عبر المنصات ومراجعات المنافسين",
      "تحديد شخصيات المشترين المستهدفين وصياغة الزوايا العاطفية والمنطقية",
      "بلورة عروض القيمة الصريحة لاستهداف الجماهير الباردة (Cold Traffic)",
    ],
    output: "Voice-of-Customer Matrix & Messaging Framework",
    outputAr: "مصفوفة صوت العميل وإطار صياغة الرسائل الإعلانية",
  },
  {
    step: "03",
    title: "Strategy & Funnel Architecture",
    titleAr: "بناء الاستراتيجية وهيكلة مسار التحويل",
    shortDesc: "Mapping the customer journey from first impression to closed revenue.",
    shortDescAr: "رسم مسار رحلة العميل من أول انطباع حتى إتمام عملية الشراء وتحقيق الإيراد.",
    details: [
      "Budget allocation modeling across TOF, MOF, and BOF stages",
      "Setting allowable target CPA and breakeven ROAS thresholds",
      "Landing page alignment check to eliminate post-click drops",
    ],
    detailsAr: [
      "نمذجة توزيع الميزانية بين مراحل الاستقطاب وإعادة الاستهداف (TOF, MOF, BOF)",
      "تحديد أقصى تكلفة مسموحة للاستحواذ (Target CPA) ومضاعف نقطة التعادل (Breakeven ROAS)",
      "مواءمة صفحات الهبوط ومسارات التواصل لتقليل معدلات الارتداد بعد النقر",
    ],
    output: "Full Funnel Blueprint & Financial Breakeven Model",
    outputAr: "مخطط مسار التحويل والنموذج المالي لنقطة التعادل",
  },
  {
    step: "04",
    title: "Technical Tracking & Infrastructure",
    titleAr: "البنية التحتية والربط التقني للتتبع",
    shortDesc: "Setting up server-side Conversions API and verified event tracking.",
    shortDescAr: "إعداد وتفعيل تتبع الخوادم المباشر عبر Conversions API وتوثيق الأحداث بدقة.",
    details: [
      "Meta Pixel + CAPI setup with event deduplication",
      "UTM structure standardization for cross-platform analytics",
      "Custom conversion value passing and offline lead status sync",
    ],
    detailsAr: [
      "تثبيت وتكامل Meta Pixel وCAPI مع إلغاء ازدواجية الأحداث (Deduplication)",
      "توحيد معايير روابط التتبع UTM لضمان دقة التحليل عبر المنصات وGA4",
      "تتبع قيم المعاملات المخصصة وتحديث بيانات العملاء دون اتصال",
    ],
    output: "Clean Tracking Pipeline with 8.0+ Match Quality Score",
    outputAr: "منظومة تتبع متكاملة وموثوقة بجودة مطابقة بيانات 8.0+",
  },
  {
    step: "05",
    title: "Creative Production & Launch",
    titleAr: "إنتاج واختبار المحتوى الإعلاني",
    shortDesc: "Deploying structured Dynamic Creative Tests (DCT) to surface winning hooks.",
    shortDescAr: "إطلاق مصفوفة اختبارات المحتوى الديناميكي (DCT) لاكتشاف الخطافات والزوايا الأكثر ربحية.",
    details: [
      "Scripting and editing 3 distinct hook variations per product angle",
      "Deploying isolated DCT campaigns to test without budget skew",
      "Strict 72-hour algorithmic learning phase protection",
    ],
    detailsAr: [
      "كتابة وتجهيز 3 خطافات بصرية ورسائل مختلفة لكل زاوية بيعية",
      "إطلاق حملات اختبار مستقلة لمنع انحياز توزيع الميزانية",
      "حماية فترة التعلم الآلي للخوارزميات خلال أول 72 ساعة من الإطلاق",
    ],
    output: "Active Testing Matrix & Baseline Performance Benchmarks",
    outputAr: "مصفوفة اختبار نشطة وتحديد المعايير المرجعية للأصول الرابحة",
  },
  {
    step: "06",
    title: "Optimization & Scaling Decisions",
    titleAr: "قرارات التحسين وتوسيع الإنفاق (Scaling)",
    shortDesc: "Cutting losing creative ruthlessly and scaling winning assets horizontally and vertically.",
    shortDescAr: "استبعاد الإعلانات منخفضة الكفاءة ومضاعفة الإنفاق على الأصول الرابحة أفقياً ورأسياً.",
    details: [
      "Gradual vertical budget increases (15-20%) on stable CBOs",
      "Horizontal expansion into new creative angles & broad audiences",
      "Immediate cut of ads failing to meet 3-second hook rate thresholds",
    ],
    detailsAr: [
      "زيادة رأسية تدريجية للميزانية (15-20%) على حملات CBO المستقرة",
      "توسع أفقي نحو زوايا إعلانية جديدة وشرائح جماهيرية أوسع",
      "إيقاف فوري للإعلانات التي لا تحقق الحد الأدنى لمعدل جذب الانتباه (3s Hook Rate)",
    ],
    output: "Weekly Optimization Log & Scaled Winning Campaign Stack",
    outputAr: "سجل تحسين أسبوعي ومجموعة حملات رابحة قابلة للتوسع المستمر",
  },
  {
    step: "07",
    title: "Performance Reporting & Strategy Iteration",
    titleAr: "تقارير الأداء وتطوير الاستراتيجية",
    shortDesc: "Delivering actionable insights on true commercial contribution and next steps.",
    shortDescAr: "تقديم تحليلات دورية دقيقة توضح المردود التجاري الفعلي للميزانيات المنفقة والخطوات القادمة.",
    details: [
      "Transparent dashboard showing Blended ROAS, CPA, and net revenue",
      "Weekly video loom breakdown of wins, losses, and learning",
      "Creative brief refresh schedule to prevent upcoming ad fatigue",
    ],
    detailsAr: [
      "لوحة متابعة شفافة ترصد العائد المجمع (Blended ROAS) وتكلفة الاستحواذ والإيراد الصافي",
      "ملخص أسبوعي مرئي ومكتوب يحلل النتائج والدروس المستفادة",
      "جدول دوري لتجديد الأفكار والمحتوى الإعلاني لمنع الإرهاق الإعلاني",
    ],
    output: "Executive Monthly Summary & Rolling Campaign Roadmap",
    outputAr: "تقرير أداء شهري وخطة عمل تشغيلية متجددة",
  },
];

export const experienceTimeline: ExperienceItem[] = [
  {
    period: "Jul 2026 — Oct 2026",
    periodAr: "يوليو 2026 — أكتوبر 2026",
    role: "Mid-Level Media Buyer",
    roleAr: "ميد ليفل ميديا باير (Mid-Level Media Buyer)",
    organization: "Assemat Al-Kawn for Elevators (عاصمة الكون للمصاعد)",
    organizationAr: "شركة عاصمة الكون للمصاعد",
    type: "Full-time • On-site",
    typeAr: "دوام كامل • حضوري (المنصورة)",
    summary:
      "Managed end-to-end Meta Ads campaigns for high-ticket commercial elevator installation services, focusing on B2B lead generation, qualification, and landing page conversion optimization.",
    summaryAr:
      "إدارة حملات Meta Ads المتكاملة لخدمات تركيب وتوريد المصاعد ذات القيمة المرتفعة (High-Ticket B2B)، مع التركيز على توليد وتأهيل العملاء التجاريين وتحسين مسارات التحويل لصفحات الهبوط.",
    highlights: [
      "Planned and tested 12+ creative variations to identify high-converting angles and audience segments",
      "Generated 60+ qualified WhatsApp inquiries from contractors, real estate developers, and villa owners",
      "Reduced Cost Per Lead (CPL) by 18% through audience refinement and conversion path optimization",
      "Collaborated on landing page CRO and direct-response messaging to maximize inquiry quality",
    ],
    highlightsAr: [
      "تخطيط واختبار أكثر من 12 قالباً وزاوية إعلانية لاكتشاف أفضل الرسائل والجمهور المستهدف",
      "توليد أكثر من 60 محادثة واستفسار مؤهل عبر WhatsApp من مقاولين ومطوري عقارات وأصحاب فيلات",
      "خفض تكلفة العميل المحتمل (CPL) بنسبة 18% عبر تحسين مسارات التحويل وتدوير الإعلانات",
      "التعاون في تحسين صفحات الهبوط ومعدلات التحويل (CRO) لرفع جودة واستجابة العملاء",
    ],
  },
  {
    period: "Apr 2026 — Jul 2026",
    periodAr: "أبريل 2026 — يوليو 2026",
    role: "Media Buyer",
    roleAr: "ميديا باير لمنتجات التكنولوجيا والبرمجيات (Media Buyer)",
    organization: "CODEVER",
    organizationAr: "شركة CODEVER للحلول البرمجية",
    type: "Full-time • Remote",
    typeAr: "دوام كامل • عن بُعد",
    summary:
      "Managed and optimized Meta Ads campaigns for B2B technology products and SaaS software verticals, supporting scalable customer acquisition and pipeline growth.",
    summaryAr:
      "إدارة وتطوير الحملات الإعلانية الممولة لمنتجات التكنولوجيا والحلول البرمجية (B2B SaaS)، ودعم اقتناء العملاء وتوسيع قنوات المبيعات عبر قطاعات تقنية متعددة.",
    highlights: [
      "Conducted audience research and segmentation to improve campaign relevance and buyer intent",
      "Generated 75+ customer inquiry conversations through targeted Meta Ads messaging campaigns",
      "Monitored CTR, CPC, CPL, and conversion metrics daily to guide dynamic budget reallocation",
      "Developed and tested direct-response ad copy and creatives focused on solving core business pain points",
    ],
    highlightsAr: [
      "تجزئة دقيقة للجماهير وأبحاث تسويقية متعمقة لرفع صلة الإعلانات باحتياجات صناع القرار",
      "توليد أكثر من 75 محادثة واستفسار تجاري مؤهل عبر حملات رسائل Meta Ads الموجهة",
      "المراقبة اليومية لمؤشرات النقر والتكلفة (CTR, CPC, CPL) لإعادة توجيه الميزانية نحو المجموعات الرابحة",
      "صياغة واختبار نصوص وتصاميم إعلانية مباشرة تعالج التحديات التقنية لعملاء الشركات",
    ],
  },
  {
    period: "2025 — Present",
    periodAr: "2025 — حتى الآن",
    role: "Freelance Performance Marketer & Media Buyer",
    roleAr: "أخصائي تسويق أداء وميديا باير حر (Freelance Performance Marketer)",
    organization: "Upwork & Independent Client Accounts (GCC & Egypt)",
    organizationAr: "منصة Upwork وعملاء مستقلون (السعودية، الإمارات ومصر)",
    type: "Freelance • Remote (Rising Talent)",
    typeAr: "عمل حر • عن بُعد (Rising Talent)",
    summary:
      "Managing high-ROAS paid acquisition campaigns for e-commerce stores (Salla, Shopify) and retail brands across the GCC and Egypt. Specializing in CBO scaling, direct-response video creative, and server-side CAPI tracking.",
    summaryAr:
      "إدارة وتوسيع منظومات الإعلانات الممولة لمتاجر التجارة الإلكترونية (Shopify، سلة) والأنشطة التجارية في السعودية والخليج ومصر. التخصص في توسيع ميزانيات CBO، تتبع الخادم CAPI، وحملات الرسائل البيعية المباشرة.",
    highlights: [
      "Delivered 120,797 SAR in verified monthly revenue for a Saudi perfume store at 3.68x ROAS",
      "Achieved a record efficiency benchmark of 1.18 EGP (~$0.02) cost per qualified buyer conversation",
      "Scaled international Shopify e-commerce sales generating $8,370+ USD with a 3.68x ROAS",
      "Awarded Rising Talent status on Upwork for consistent client satisfaction and high technical delivery",
    ],
    highlightsAr: [
      "تحقيق مبيعات قياسية بلغت 120,797 ر.س لمتجر عطور سعودي بعائد إعلاني 3.68x ROAS",
      "تسجيل تكلفة قياسية 1.18 ج.م للمحادثة البيعية لحملات أزياء وتجزئة في السوق المصري",
      "تحقيق أكثر من 8,370 دولار مبيعات لمتجر Shopify دولي بعائد استثماري 3.68x",
      "الحصول على شارة موهبة صاعدة (Rising Talent) على منصة Upwork للتميز في التنفيذ والجودة",
    ],
  },
  {
    period: "Dec 2025 — Apr 2026",
    periodAr: "ديسمبر 2025 — أبريل 2026",
    role: "WordPress Developer & CRO Specialist",
    roleAr: "مطور ووردبريس ومسؤول تحسين معدلات التحويل (CRO Specialist)",
    organization: "Black Eagle",
    organizationAr: "شركة Black Eagle",
    type: "Full-time • Hybrid (5 mos)",
    typeAr: "دوام كامل • حضوري وعن بُعد",
    summary:
      "Developed high-converting landing pages and optimized web performance specifically for paid advertising traffic. Implemented CRO principles, server-side security, and full tracking attribution.",
    summaryAr:
      "تطوير صفحات هبوط سريعة وموجهة خصيصاً لاستقبال الزيارات الإعلانية الممولة، مع التركيز على رفع معدلات التحويل (CRO)، أمان الخوادم، وربط أدوات التتبع الرقمي.",
    highlights: [
      "Built responsive, high-converting landing pages aligned with ad campaign hooks and customer journeys",
      "Achieved 90+ Google PageSpeed scores through advanced caching, code minification, and asset optimization",
      "Integrated and verified tracking architecture: Meta Pixel, Google Tag Manager, and custom conversion events",
      "Managed hosting infrastructure, firewalls, SSL security, and database migrations ensuring 99.9% uptime",
    ],
    highlightsAr: [
      "بناء وتطوير صفحات هبوط عالية التحويل متوافقة بدقة مع الرسائل الإعلانية للحملات الممولة",
      "تحقيق درجات سرعة 90+ على Google PageSpeed عبر استراتيجيات التخزين المؤقت وضغط الأصول",
      "ربط وتأكيد أدوات التتبع المتقدمة: Meta Pixel، Google Tag Manager، وأحداث التحويل المخصصة",
      "إدارة أمان الخوادم والاستضافات وشهادات SSL وقواعد البيانات لضمان استقرار العمليات بنسبة 99.9%",
    ],
  },
  {
    period: "Nov 2025 — Dec 2025",
    periodAr: "نوفمبر 2025 — ديسمبر 2025",
    role: "Web Development & Performance Optimization Intern",
    roleAr: "متدرب تطوير ويب وتحسين الأداء التقني",
    organization: "Mo Solutions LTD",
    organizationAr: "شركة Mo Solutions LTD",
    type: "Internship • Remote",
    typeAr: "تدريب عملي • عن بُعد",
    summary:
      "Engineered responsive WordPress layouts, boosted loading performance to 90+ on Google PageSpeed Insights, and hardened web security configurations.",
    summaryAr:
      "تطوير وتخصيص مواقع وصفحات ويب متجاوبة، رفع سرعات التحميل لمؤشرات 90+ على PageSpeed Insights، وتأمين البيئات البرمجية وشهادات الحماية الرقمية.",
    highlights: [
      "Developed and customized responsive Elementor Pro layouts ensuring cross-device UI/UX consistency",
      "Optimized images, CSS delivery, and asset caching strategies to minimize bounce rates for incoming visitors",
      "Configured SSL certificates, security plugins, and defenses against web vulnerabilities",
      "Integrated automated tools and custom CSS to streamline responsive web delivery",
    ],
    highlightsAr: [
      "تخصيص قوالب Elementor Pro متجاوبة تضمن التوافق التام عبر مختلف المتصفحات والأجهزة",
      "ضغط وتحسين أحجام الصور وملفات CSS لتقليل وقت التحميل وخفض معدلات الارتداد",
      "إعداد شهادات SSL وبروتوكولات الأمان لحماية المواقع من الثغرات البرمجية الشائعة",
      "دمج أدوات تسريع العمل البرمجي وأكواد CSS مخصصة لتسريع تجربة التصفح",
    ],
  },
];
