'use client';

import { motion } from 'framer-motion';
import { Key, Handshake, BarChart3, Megaphone, Home, Building2 } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { content } from '@/lib/content';

const ICONS = {
  key:       Key,
  handshake: Handshake,
  chart:     BarChart3,
  megaphone: Megaphone,
  home:      Home,
  building:  Building2,
};

const fadeUp = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.08 } },
};

export default function Services() {
  const { lang, isArabic } = useLanguage();
  const t = content[lang].services;

  return (
    <section id="services" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">

        {/* Section header */}
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
            className="text-navy/55 max-w-2xl mx-auto mt-6 text-base leading-relaxed"
          >
            {t.sub}
          </motion.p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={stagger}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
        >
          {t.items.map((item, i) => {
            const Icon = ICONS[item.icon as keyof typeof ICONS] ?? Home;
            return (
              <motion.div
                key={i}
                variants={fadeUp}
                className="group card cursor-default"
              >
                {/* Icon container */}
                <div className="w-14 h-14 rounded-xl bg-navy/5 border border-navy/10 flex items-center justify-center mb-5 group-hover:bg-gold/10 group-hover:border-gold/30 transition-all duration-300">
                  <Icon size={26} className="text-navy/60 group-hover:text-gold transition-colors duration-300" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-navy mb-3">
                  {item.title}
                </h3>

                {/* Thin gold rule */}
                <div className="w-8 h-0.5 bg-gold/40 mb-3 group-hover:w-12 group-hover:bg-gold transition-all duration-300 rounded-full" />

                {/* Body */}
                <p className="text-sm text-navy/55 leading-relaxed">
                  {item.body}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

      </div>

      {/* Bottom accent */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-stone to-transparent" />
    </section>
  );
}
