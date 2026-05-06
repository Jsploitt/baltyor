'use client';

import { motion } from 'framer-motion';
import {
  MapIcon, ShieldCheck, Users, UserCircle2, Network, HeartHandshake
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { content } from '@/lib/content';

const ICONS = [MapIcon, ShieldCheck, Users, UserCircle2, Network, HeartHandshake];

const fadeUp = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.09 } },
};

export default function WhyUs() {
  const { lang, isArabic } = useLanguage();
  const t = content[lang].whyUs;

  return (
    <section
      id="why-us"
      className="py-20 md:py-28 relative overflow-hidden"
      style={{ background: 'linear-gradient(145deg, #0D1A2E 0%, #1B2A4A 60%, #243460 100%)' }}
    >
      {/* Top gold rule */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      {/* Geometric pattern */}
      <div className="absolute inset-0 hero-pattern opacity-60 pointer-events-none" />

      {/* Corner glow */}
      <div
        className={`absolute top-0 ${isArabic ? 'right-0' : 'left-0'} w-80 h-80 pointer-events-none`}
        style={{
          background: 'radial-gradient(ellipse at top left, rgba(201,168,76,0.07) 0%, transparent 60%)',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8">

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
            className={`text-3xl md:text-4xl font-bold text-white mb-4 gold-underline gold-underline-center ${
              isArabic ? '' : 'font-display'
            }`}
            style={{ fontFamily: isArabic ? 'var(--font-cairo)' : 'var(--font-playfair)' }}
          >
            {t.heading}
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-white/45 max-w-xl mx-auto mt-6 text-sm md:text-base leading-relaxed"
          >
            {t.sub}
          </motion.p>
        </motion.div>

        {/* Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={stagger}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
        >
          {t.items.map((item, i) => {
            const Icon = ICONS[i];
            return (
              <motion.div
                key={i}
                variants={fadeUp}
                className="group relative p-7 rounded-xl border border-white/8 hover:border-gold/30 bg-white/4 hover:bg-white/7 backdrop-blur-sm transition-all duration-300"
              >
                {/* Gold top border on hover */}
                <div className="absolute top-0 inset-x-0 h-px rounded-t-xl bg-gradient-to-r from-transparent via-gold/0 to-transparent group-hover:via-gold/50 transition-all duration-400" />

                {/* Icon */}
                <div className="w-12 h-12 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center mb-5 group-hover:bg-gold/20 group-hover:border-gold/40 transition-all duration-300">
                  <Icon size={22} className="text-gold" />
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-white mb-2 group-hover:text-gold/90 transition-colors duration-200">
                  {item.title}
                </h3>

                {/* Thin rule */}
                <div className="w-6 h-0.5 bg-gold/30 mb-3 group-hover:w-10 transition-all duration-300 rounded-full" />

                {/* Body */}
                <p className="text-sm text-white/50 leading-relaxed group-hover:text-white/65 transition-colors duration-200">
                  {item.body}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

      </div>

      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
    </section>
  );
}
