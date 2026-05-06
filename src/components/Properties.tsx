'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { MapPin, Bed, Bath, Maximize2, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { content, properties, WHATSAPP_NUMBER } from '@/lib/content';

const fadeUp = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.12 } },
};

export default function Properties() {
  const { lang, isArabic } = useLanguage();
  const t = content[lang].properties;

  return (
    <section id="properties" className="py-20 md:py-28 bg-cream relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="max-w-6xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={stagger}
          className="text-center mb-14"
        >
          <motion.span variants={fadeUp} className="section-label block mb-4">
            {t.label}
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className={`text-3xl md:text-4xl font-bold text-navy mb-4 gold-underline gold-underline-center ${
              isArabic ? '' : 'font-display'
            }`}
            style={{ fontFamily: isArabic ? 'var(--font-cairo)' : 'var(--font-playfair)' }}
          >
            {t.heading}
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-navy/55 max-w-xl mx-auto mt-6 text-sm md:text-base leading-relaxed"
          >
            {t.sub}
          </motion.p>
        </motion.div>

        {/* Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={stagger}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {properties.map(prop => {
            const type     = isArabic ? prop.typeAr     : prop.typeEn;
            const location = isArabic ? prop.locationAr : prop.locationEn;
            const price    = isArabic ? prop.priceAr    : prop.priceEn;
            const desc     = isArabic ? prop.descAr     : prop.descEn;
            const status   = isArabic ? prop.statusAr   : prop.statusEn;
            const area     = isArabic ? prop.areaAr     : prop.areaEn;

            const inquireMsg = encodeURIComponent(
              isArabic
                ? `مرحباً، أرغب في الاستفسار عن: ${type} في ${location}`
                : `Hello, I'd like to inquire about: ${type} in ${location}`
            );
            const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${inquireMsg}`;

            return (
              <motion.div
                key={prop.id}
                variants={fadeUp}
                className="bg-white rounded-2xl overflow-hidden border border-stone/60 shadow-sm hover:shadow-xl hover:shadow-navy/8 hover:-translate-y-1 transition-all duration-400 group"
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={prop.image}
                    alt={type}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Status badge */}
                  <div className="absolute top-3 start-3">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
                      prop.forSale
                        ? 'bg-navy text-gold border border-gold/30'
                        : 'bg-gold text-navy'
                    }`}>
                      {prop.forSale ? t.badgeSale : t.badge}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  {/* Type */}
                  <p className="text-xs text-gold font-semibold tracking-wide uppercase mb-1">{type}</p>

                  {/* Price */}
                  <p className="text-xl font-bold text-navy mb-2">{price}</p>

                  {/* Description */}
                  <p className="text-sm text-navy/55 leading-relaxed mb-3 line-clamp-2">{desc}</p>

                  {/* Location */}
                  <div className="flex items-center gap-1.5 text-navy/50 text-xs mb-4">
                    <MapPin size={12} className="shrink-0" />
                    <span>{location}</span>
                  </div>

                  {/* Thin divider */}
                  <div className="h-px bg-stone mb-4" />

                  {/* Property details */}
                  <div className="flex items-center gap-4 text-xs text-navy/50 mb-4">
                    {prop.beds > 0 && (
                      <span className="flex items-center gap-1">
                        <Bed size={12} /> {prop.beds} {t.beds}
                      </span>
                    )}
                    {prop.baths > 0 && (
                      <span className="flex items-center gap-1">
                        <Bath size={12} /> {prop.baths} {t.baths}
                      </span>
                    )}
                    <span className="flex items-center gap-1">
                      <Maximize2 size={12} /> {area} {t.area}
                    </span>
                  </div>

                  {/* Inquire button */}
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline-gold w-full text-sm py-2.5 rounded-lg"
                  >
                    <MessageCircle size={15} />
                    {t.inquire}
                  </a>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>

      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
    </section>
  );
}
