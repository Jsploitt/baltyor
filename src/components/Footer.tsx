'use client';

import Image from 'next/image';
import { Phone, Mail, MapPin } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { content, WHATSAPP_URL, PHONE_NUMBER, EMAIL, MAPS_URL } from '@/lib/content';

const scrollTo = (href: string) => {
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
};

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

export default function Footer() {
  const { lang, isArabic } = useLanguage();
  const t = content[lang].footer;
  const nav = content[lang].nav;

  const links = [
    { label: nav.about,      href: '#about' },
    { label: nav.services,   href: '#services' },
    { label: nav.properties, href: '#properties' },
    { label: nav.whyUs,      href: '#why-us' },
    { label: nav.contact,    href: '#contact' },
  ];

  const contacts = [
    { icon: Phone,   value: PHONE_NUMBER, href: `tel:${PHONE_NUMBER.replace(/\s/g, '')}`, dir: 'ltr' as const },
    { icon: Mail,    value: EMAIL,        href: `mailto:${EMAIL}`,                          dir: 'ltr' as const },
    { icon: MapPin,  value: isArabic ? 'المملكة العربية السعودية' : 'Saudi Arabia', href: MAPS_URL },
  ];

  return (
    <footer
      className="pt-16 pb-8 relative"
      style={{ background: 'linear-gradient(180deg, #0A1020 0%, #07101E 100%)' }}
    >
      {/* Top gold rule */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid md:grid-cols-3 gap-10 md:gap-8 pb-12 border-b border-white/8">

          {/* Brand column */}
          <div>
            <Image
              src="/logo.jpg"
              alt="Raed A. Baltyor & Sons"
              width={200}
              height={105}
              className="h-12 w-auto mb-5 rounded-sm"
            />
            <p className="text-gold font-bold text-sm mb-1">{t.nameAr}</p>
            <p className="text-white/40 text-xs mb-4">{t.nameEn}</p>
            <p className="text-white/35 text-xs leading-relaxed max-w-xs">{t.tagline}</p>

            {/* WhatsApp social link */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#25D366]/15 border border-[#25D366]/25 text-[#25D366] text-xs font-medium hover:bg-[#25D366]/25 transition-colors"
            >
              <WhatsAppIcon />
              WhatsApp
            </a>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white/70 text-xs font-semibold uppercase tracking-widest mb-5">
              {t.links}
            </h4>
            <ul className="space-y-2.5">
              {links.map(link => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-sm text-white/45 hover:text-gold transition-colors duration-200 text-start"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white/70 text-xs font-semibold uppercase tracking-widest mb-5">
              {t.contact}
            </h4>
            <ul className="space-y-3.5">
              {contacts.map((c, i) => {
                const Icon = c.icon;
                return (
                  <li key={i}>
                    <a
                      href={c.href}
                      target={c.href.startsWith('http') ? '_blank' : undefined}
                      rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      dir={c.dir}
                      className="flex items-center gap-3 text-sm text-white/45 hover:text-gold transition-colors duration-200 group"
                    >
                      <Icon size={14} className="shrink-0 text-gold/40 group-hover:text-gold transition-colors" />
                      {c.value}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-7 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/25 text-center sm:text-start">
            {t.copyright}
          </p>
          <p className="text-xs text-white/20">
            {isArabic ? 'baltyor.com' : 'baltyor.com'}
          </p>
        </div>
      </div>
    </footer>
  );
}
