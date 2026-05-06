export type Language = 'ar' | 'en';

export const content = {
  ar: {
    nav: {
      about:      'من نحن',
      services:   'خدماتنا',
      properties: 'العقارات',
      whyUs:      'لماذا نحن',
      contact:    'تواصل معنا',
      cta:        'واتساب',
      langToggle: 'EN',
    },
    hero: {
      badge:      'شركة عقارية سعودية موثوقة',
      headline1:  'شريكك الموثوق',
      headline2:  'في عالم العقارات',
      sub:        'نقدم خدمات عقارية متكاملة في المملكة العربية السعودية، بخبرة راسخة وحضور حقيقي في السوق — بيعاً وإيجاراً واستثماراً.',
      cta1:       'تواصل عبر واتساب',
      cta2:       'اتصل بنا',
      stat1Val:   '+١٥',
      stat1Label: 'عاماً من الخبرة',
      stat2Val:   '+٥٠٠',
      stat2Label: 'عقار منجز',
      stat3Val:   '+١٠٠٠',
      stat3Label: 'عميل راضٍ',
    },
    about: {
      label:   'من نحن',
      heading: 'خبرة عائلية راسخة في السوق السعودي',
      body1:   'شركة رائد عبدالله بالطيور وأولاده العقارية شركة سعودية متخصصة في قطاع العقارات، تأسست على أساس متين من القيم العائلية والنزاهة المهنية والخبرة المتراكمة عبر السنين.',
      body2:   'نؤمن أن قرار الشراء أو الإيجار أو الاستثمار العقاري يحمل ثقلاً حقيقياً — لذلك نتعامل مع كل عميل باهتمام صادق، ونقدم خدماتنا بشفافية ودراية عميقة بتفاصيل السوق السعودي.',
      stat1Val:   '+١٥ عاماً',
      stat1Label: 'حضور فعلي في السوق',
      stat2Val:   '+٥٠٠',
      stat2Label: 'عقار تم تسويقه',
      stat3Val:   '+١٠٠٠',
      stat3Label: 'عميل وثق بخدماتنا',
      imageAlt:   'مكتب شركة رائد بالطيور',
    },
    services: {
      label:   'خدماتنا',
      heading: 'خدمات عقارية متكاملة',
      sub:     'نقدم طيفاً واسعاً من الخدمات العقارية المصممة لتلبية احتياجات المشترين والمستأجرين والمستثمرين في المملكة',
      items: [
        { icon: 'key',       title: 'تأجير العقارات',     body: 'نجد لك العقار المناسب بشروط إيجار مثالية، مع متابعة كاملة للعقد وجميع إجراءاته.' },
        { icon: 'handshake', title: 'بيع العقارات',       body: 'سواء كنت بائعاً أو مشترياً، نضمن لك صفقة عادلة بخبرتنا في التقييم والتفاوض.' },
        { icon: 'chart',     title: 'الاستشارات العقارية', body: 'رأي مهني محايد في قرارات الشراء والبيع والاستثمار، مدعوم بتحليل دقيق للسوق.' },
        { icon: 'megaphone', title: 'التسويق العقاري',    body: 'نسوّق عقارك بأساليب احترافية تضمن وصولاً واسعاً وأفضل سعر ممكن.' },
        { icon: 'home',      title: 'الوحدات السكنية',    body: 'شقق وفلل وتاون هاوس في أرقى المواقع لمختلف الاحتياجات والميزانيات.' },
        { icon: 'building',  title: 'الاستثمار العقاري',  body: 'نساعدك في تحديد الفرص ذات العائد الجيد وتقييم المخاطر بموضوعية.' },
      ],
    },
    properties: {
      label:   'العقارات',
      heading: 'عقارات مختارة',
      sub:     'نماذج من العقارات التي نتولى تسويقها وإدارتها — يمكن الاستفسار عن أي منها مباشرةً',
      inquire: 'استفسر الآن',
      badge:   'للإيجار',
      badgeSale: 'للبيع',
      beds:    'غرف',
      baths:   'حمامات',
      area:    'م²',
    },
    whyUs: {
      label:   'لماذا نحن',
      heading: 'لماذا تختار شركة بالطيور؟',
      sub:     'ما يميزنا ليس الكلام — بل السجل المهني والنهج الواضح الذي يراه كل عميل عمل معنا',
      items: [
        { title: 'خبرة محلية عميقة',     body: 'نعرف أحياء المملكة ودقائق سوقها بما يتيح لنا تقديم نصيحة حقيقية لا مجرد كلام.' },
        { title: 'أمانة وشفافية',        body: 'نتحدث بصراحة ونتصرف بنزاهة في كل تعامل، بلا مبالغة أو إخفاء للمعلومات.' },
        { title: 'شركة عائلية موثوقة',   body: 'قيمنا موروثة وسمعتنا متراكمة — ليس مشروعاً عابراً بل حضور متجذّر في السوق.' },
        { title: 'خدمة شخصية حقيقية',   body: 'نتعامل مع كل عميل باهتمام فردي حقيقي، لا مجرد رقم في قائمة.' },
        { title: 'شبكة علاقات واسعة',   body: 'نملك شبكة من الملاك والمطورين والمستثمرين تفتح أمامك فرصاً قد لا تجدها في مكان آخر.' },
        { title: 'متابعة ما بعد الصفقة', body: 'لا نغيب بعد إتمام الصفقة — نبقى معك لضمان رضاك الكامل وحل أي إشكاليات.' },
      ],
    },
    location: {
      label:    'موقعنا',
      heading:  'يسعدنا استقبالك',
      body:     'مكتبنا في المملكة العربية السعودية متاح لاستقبالك ومناقشة احتياجاتك العقارية. يمكنك التواصل معنا لتحديد موعد أو زيارتنا مباشرة.',
      mapCta:   'عرض الموقع على الخريطة',
      hours1:   'الأحد — الخميس',
      hours2:   '٨:٠٠ ص — ٥:٠٠ م',
      phone:    '+966 55 506 3391',
      email:    'info@baltyor.com',
      country:  'المملكة العربية السعودية',
    },
    contact: {
      label:       'تواصل معنا',
      heading:     'ابدأ محادثة معنا',
      sub:         'سواء كنت تبحث عن عقار أو ترغب في تسويق ملكيتك — نحن هنا للإجابة على كل استفساراتك',
      whatsappCta: 'تواصل مباشرة عبر واتساب',
      phoneCta:    'اتصل بنا',
      emailCta:    'راسلنا على البريد',
      form: {
        name:        'الاسم الكريم',
        phone:       'رقم الجوال',
        service:     'الخدمة المطلوبة',
        message:     'رسالتك',
        submit:      'إرسال الرسالة',
        placeholder: {
          name:    'أدخل اسمك',
          phone:   'مثال: 05XXXXXXXX',
          message: 'اكتب رسالتك هنا...',
        },
        services: [
          'اختر الخدمة',
          'تأجير عقار',
          'شراء عقار',
          'بيع عقار',
          'استشارة عقارية',
          'تسويق عقاري',
          'استثمار عقاري',
        ],
        successMsg: 'شكراً! سنتواصل معك قريباً.',
      },
    },
    footer: {
      tagline:   'شريككم الموثوق في عالم العقارات بالمملكة',
      links:     'روابط سريعة',
      contact:   'تواصل معنا',
      copyright: '© ٢٠٢٥ شركة رائد عبدالله بالطيور وأولاده العقارية — جميع الحقوق محفوظة',
      nameAr:    'شركة رائد عبدالله بالطيور وأولاده العقارية',
      nameEn:    'Raed A. Baltyor & Sons Real Estate Co.',
    },
  },

  en: {
    nav: {
      about:      'About',
      services:   'Services',
      properties: 'Properties',
      whyUs:      'Why Us',
      contact:    'Contact',
      cta:        'WhatsApp',
      langToggle: 'عر',
    },
    hero: {
      badge:      'Trusted Saudi Real Estate Company',
      headline1:  'Your Trusted',
      headline2:  'Real Estate Partner',
      sub:        'Comprehensive real estate services across Saudi Arabia — backed by genuine market expertise and a real local presence, whether you\'re buying, renting, or investing.',
      cta1:       'WhatsApp Us',
      cta2:       'Call Now',
      stat1Val:   '15+',
      stat1Label: 'Years of Experience',
      stat2Val:   '500+',
      stat2Label: 'Properties Handled',
      stat3Val:   '1,000+',
      stat3Label: 'Satisfied Clients',
    },
    about: {
      label:   'About Us',
      heading: 'A Family Business Rooted in the Saudi Market',
      body1:   'Raed A. Baltyor & Sons Real Estate Co. is a Saudi real estate company built on a foundation of family values, professional integrity, and decades of market experience.',
      body2:   'We understand that real estate decisions — buying, renting, or investing — carry real weight. That\'s why we approach every client relationship with honesty, deep market knowledge, and a genuine commitment to finding the right solution.',
      stat1Val:   '15+ Years',
      stat1Label: 'Active Market Presence',
      stat2Val:   '500+',
      stat2Label: 'Properties Marketed',
      stat3Val:   '1,000+',
      stat3Label: 'Clients Served',
      imageAlt:   'Baltyor Real Estate Office',
    },
    services: {
      label:   'Our Services',
      heading: 'Comprehensive Real Estate Services',
      sub:     'A full range of real estate services designed to serve buyers, tenants, landlords, and investors across the Kingdom',
      items: [
        { icon: 'key',       title: 'Property Leasing',     body: 'We find the right property at the right terms, with full contract management and seamless follow-through.' },
        { icon: 'handshake', title: 'Property Sales',       body: 'Transparent, fair transactions backed by accurate valuation and skilled negotiation — for buyers and sellers.' },
        { icon: 'chart',     title: 'Real Estate Consulting', body: 'Objective, professional advice on purchase, sale, and investment decisions — grounded in real market analysis.' },
        { icon: 'megaphone', title: 'Property Marketing',   body: 'Professional marketing strategies that maximize reach, attract the right buyers, and achieve the best price.' },
        { icon: 'home',      title: 'Residential Units',    body: 'Apartments, villas, and townhouses in prime locations for every need and budget across Saudi Arabia.' },
        { icon: 'building',  title: 'Real Estate Investment', body: 'We identify high-return opportunities and evaluate risk objectively to help you invest with confidence.' },
      ],
    },
    properties: {
      label:     'Properties',
      heading:   'Featured Properties',
      sub:       'A selection of properties we currently represent — contact us to inquire about availability and full details',
      inquire:   'Inquire Now',
      badge:     'For Rent',
      badgeSale: 'For Sale',
      beds:      'Beds',
      baths:     'Baths',
      area:      'sqm',
    },
    whyUs: {
      label:   'Why Choose Us',
      heading: 'Why Choose Baltyor?',
      sub:     'What sets us apart is not the pitch — it\'s the professional track record and transparent approach every client experiences',
      items: [
        { title: 'Deep Local Knowledge',     body: 'We know Saudi neighborhoods and market dynamics well enough to give advice that genuinely helps your decision.' },
        { title: 'Honesty & Transparency',   body: 'We speak plainly and act with integrity in every transaction — no exaggerations, no hidden details.' },
        { title: 'A Trusted Family Business', body: 'Our values are inherited and reputation accumulated — a grounded, established presence, not a passing venture.' },
        { title: 'Genuinely Personal Service', body: 'We treat every client as an individual with specific needs, not a number in a database or a quick commission.' },
        { title: 'A Strong Market Network',  body: 'Our network of owners, developers, and investors opens doors to exclusive opportunities not found elsewhere.' },
        { title: 'Post-Transaction Support', body: 'We stay with you after the deal closes to ensure your complete satisfaction and handle any post-signing matters.' },
      ],
    },
    location: {
      label:   'Our Location',
      heading: 'We Welcome You',
      body:    'Our office in Saudi Arabia is open to receive you and discuss your real estate needs. Contact us to schedule an appointment or drop by directly.',
      mapCta:  'View on Google Maps',
      hours1:  'Sunday — Thursday',
      hours2:  '8:00 AM — 5:00 PM',
      phone:   '+966 55 506 3391',
      email:   'info@baltyor.com',
      country: 'Saudi Arabia',
    },
    contact: {
      label:       'Contact',
      heading:     'Start a Conversation',
      sub:         'Whether you\'re looking for a property or want to market yours — we\'re here to answer every question',
      whatsappCta: 'Contact Us on WhatsApp',
      phoneCta:    'Call Us',
      emailCta:    'Email Us',
      form: {
        name:        'Full Name',
        phone:       'Phone Number',
        service:     'Service Needed',
        message:     'Your Message',
        submit:      'Send Message',
        placeholder: {
          name:    'Enter your name',
          phone:   'e.g. 05XXXXXXXX',
          message: 'Write your message here...',
        },
        services: [
          'Select a service',
          'Rent a property',
          'Buy a property',
          'Sell a property',
          'Real estate consulting',
          'Property marketing',
          'Real estate investment',
        ],
        successMsg: 'Thank you! We\'ll be in touch shortly.',
      },
    },
    footer: {
      tagline:   'Your trusted real estate partner in the Kingdom',
      links:     'Quick Links',
      contact:   'Contact',
      copyright: '© 2025 Raed A. Baltyor & Sons Real Estate Co. — All rights reserved.',
      nameAr:    'شركة رائد عبدالله بالطيور وأولاده العقارية',
      nameEn:    'Raed A. Baltyor & Sons Real Estate Co.',
    },
  },
};

export const WHATSAPP_NUMBER = '966555063391';
export const WHATSAPP_URL    = `https://wa.me/${WHATSAPP_NUMBER}`;
export const PHONE_NUMBER    = '+966 55 506 3391';
export const EMAIL           = 'info@baltyor.com';
export const MAPS_URL        = 'https://maps.app.goo.gl/uTo3TE9LsKn7twUy5';

export interface Property {
  id:         number;
  typeAr:     string;
  typeEn:     string;
  locationAr: string;
  locationEn: string;
  priceAr:    string;
  priceEn:    string;
  descAr:     string;
  descEn:     string;
  beds:       number;
  baths:      number;
  areaAr:     string;
  areaEn:     string;
  statusAr:   string;
  statusEn:   string;
  forSale:    boolean;
  image:      string;
}

export const properties: Property[] = [
  {
    id: 1,
    typeAr: 'شقة سكنية فاخرة',
    typeEn: 'Luxury Apartment',
    locationAr: 'الرياض، حي النرجس',
    locationEn: 'Riyadh, Al Narjis District',
    priceAr: '٢٠,٠٠٠ ريال / شهرياً',
    priceEn: 'SAR 20,000 / month',
    descAr: 'شقة واسعة بتصميم عصري وإطلالة رائعة في أحد أرقى أحياء الرياض',
    descEn: 'Spacious modern apartment with premium finishes in one of Riyadh\'s most sought-after neighborhoods',
    beds: 4, baths: 3,
    areaAr: '٢٠٠', areaEn: '200',
    statusAr: 'متاح للإيجار', statusEn: 'Available for Rent',
    forSale: false,
    image: 'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&w=800&q=80',
  },
  {
    id: 2,
    typeAr: 'فيلا مستقلة',
    typeEn: 'Standalone Villa',
    locationAr: 'الرياض، حي الياسمين',
    locationEn: 'Riyadh, Al Yasmin District',
    priceAr: '٤,٥٠٠,٠٠٠ ريال',
    priceEn: 'SAR 4,500,000',
    descAr: 'فيلا فاخرة مستقلة مع حديقة خاصة وموقف سيارات مستقل في موقع متميز',
    descEn: 'Elegant standalone villa with private garden and dedicated parking in a prime location',
    beds: 6, baths: 5,
    areaAr: '٥٥٠', areaEn: '550',
    statusAr: 'معروض للبيع', statusEn: 'For Sale',
    forSale: true,
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&w=800&q=80',
  },
  {
    id: 3,
    typeAr: 'مجمع سكني',
    typeEn: 'Residential Complex',
    locationAr: 'الرياض، طريق الملك عبدالله',
    locationEn: 'Riyadh, King Abdullah Road',
    priceAr: 'بالتفاوض',
    priceEn: 'Negotiable',
    descAr: 'مجمع سكني متكامل الخدمات مثالي للاستثمار في موقع استراتيجي على طريق رئيسي',
    descEn: 'Full-service residential complex, ideal for investment on a prime arterial road',
    beds: 0, baths: 0,
    areaAr: '٢٢٠٠', areaEn: '2200',
    statusAr: 'فرصة استثمارية', statusEn: 'Investment Opportunity',
    forSale: true,
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&w=800&q=80',
  },
];
