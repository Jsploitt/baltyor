'use client';

import { motion } from 'framer-motion';
import { MapPin, Clock, Phone, Mail, ExternalLink } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { content, MAPS_URL, PHONE_NUMBER, EMAIL } from '@/lib/content';

const fadeUp = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function Location() {
  const { lang, isArabic } = useLanguage();
  const t = content[lang].location;

  const details = [
    {
      icon: MapPin,
      label: isArabic ? 'الموقع' : 'Location',
      value: t.country,
    },
    {
      icon: Clock,
      label: isArabic ? 'ساعات العمل' : 'Working Hours',
      value: `${t.hours1} • ${t.hours2}`,
    },
    {
      icon: Phone,
      label: isArabic ? 'الهاتف' : 'Phone',
      value: PHONE_NUMBER,
      href: `tel:${PHONE_NUMBER.replace(/\s/g, '')}`,
    },
    {
      icon: Mail,
      label: isArabic ? 'البريد الإلكتروني' : 'Email',
      value: EMAIL,
      href: `mailto:${EMAIL}`,
    },
  ];

  return (
    <section id="location" className="py-20 md:py-28 bg-white relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-stone to-transparent" />

      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Left: Info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={stagger}
          >
            <motion.span variants={fadeUp} className="section-label block mb-4">
              {t.label}
            </motion.span>

            <motion.h2
              variants={fadeUp}
              className={`text-3xl md:text-4xl font-bold text-navy mb-5 gold-underline ${
                isArabic ? '' : 'font-display'
              }`}
              style={{ fontFamily: isArabic ? 'var(--font-cairo)' : 'var(--font-playfair)' }}
            >
              {t.heading}
            </motion.h2>

            <motion.p variants={fadeUp} className="text-navy/60 leading-relaxed mb-8 max-w-md">
              {t.body}
            </motion.p>

            {/* Detail items */}
            <motion.div variants={stagger} className="space-y-4 mb-8">
              {details.map((d, i) => {
                const Icon = d.icon;
                return (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    className="flex items-start gap-4 p-4 rounded-xl border border-stone/80 bg-cream/50 hover:border-gold/30 transition-colors duration-200"
                  >
                    <div className="w-10 h-10 rounded-lg bg-navy/5 border border-navy/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Icon size={18} className="text-navy/50" />
                    </div>
                    <div>
                      <p className="text-xs text-navy/40 font-medium uppercase tracking-wide mb-0.5">{d.label}</p>
                      {d.href ? (
                        <a
                          href={d.href}
                          className="text-sm font-medium text-navy hover:text-gold transition-colors"
                          dir="ltr"
                        >
                          {d.value}
                        </a>
                      ) : (
                        <p className="text-sm font-medium text-navy">{d.value}</p>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Maps CTA */}
            <motion.a
              variants={fadeUp}
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold inline-flex"
            >
              <MapPin size={16} />
              {t.mapCta}
              <ExternalLink size={14} className="opacity-70" />
            </motion.a>
          </motion.div>

          {/* Right: Map visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block relative rounded-2xl overflow-hidden border border-stone shadow-xl shadow-navy/8 hover:shadow-2xl hover:shadow-navy/12 hover:-translate-y-1 transition-all duration-400 group"
              aria-label={t.mapCta}
            >
              {/* Map placeholder — styled to look like a map */}
              <div
                className="w-full h-80 md:h-96 relative"
                style={{
                  background: 'linear-gradient(135deg, #E8EDF5 0%, #D0D9EE 50%, #C5D0E5 100%)',
                }}
              >
                {/* Grid lines simulating a map */}
                <svg
                  className="absolute inset-0 w-full h-full opacity-30"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <pattern id="mapgrid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1B2A4A" strokeWidth="0.5"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#mapgrid)" />
                  {/* Simulated roads */}
                  <line x1="0" y1="50%" x2="100%" y2="50%" stroke="#1B2A4A" strokeWidth="3" opacity="0.2"/>
                  <line x1="0" y1="30%" x2="100%" y2="25%" stroke="#1B2A4A" strokeWidth="2" opacity="0.15"/>
                  <line x1="40%" y1="0" x2="40%" y2="100%" stroke="#1B2A4A" strokeWidth="2.5" opacity="0.2"/>
                  <line x1="70%" y1="0" x2="65%" y2="100%" stroke="#1B2A4A" strokeWidth="1.5" opacity="0.12"/>
                </svg>

                {/* Center pin */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                  {/* Pin pulse */}
                  <div className="relative">
                    <div className="absolute -inset-4 rounded-full bg-gold/20 animate-ping" />
                    <div className="w-12 h-12 rounded-full bg-navy shadow-lg flex items-center justify-center border-2 border-gold">
                      <MapPin size={22} className="text-gold" />
                    </div>
                  </div>
                  {/* Label card */}
                  <div className="mt-3 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg border border-navy/10 text-center">
                    <p className="text-xs font-bold text-navy">
                      {isArabic ? 'شركة رائد بالطيور' : 'Raed Baltyor & Sons'}
                    </p>
                    <p className="text-xs text-navy/50 mt-0.5">
                      {isArabic ? 'المملكة العربية السعودية' : 'Saudi Arabia'}
                    </p>
                  </div>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/5 transition-colors duration-300 flex items-end justify-center pb-4 opacity-0 group-hover:opacity-100">
                  <span className="bg-gold text-navy text-xs font-bold px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
                    <ExternalLink size={12} />
                    {t.mapCta}
                  </span>
                </div>
              </div>
            </a>
          </motion.div>

        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-stone to-transparent" />
    </section>
  );
}
