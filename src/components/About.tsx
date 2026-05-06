'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { content } from '@/lib/content';

const fadeUp = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.12 } },
};

export default function About() {
  const { lang, isArabic } = useLanguage();
  const t = content[lang].about;

  return (
    <section id="about" className="py-20 md:py-28 bg-cream relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Text column */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={stagger}
            className={`${isArabic ? 'lg:order-2' : 'lg:order-1'}`}
          >
            {/* Label */}
            <motion.span variants={fadeUp} className="section-label block mb-4">
              {t.label}
            </motion.span>

            {/* Heading */}
            <motion.h2
              variants={fadeUp}
              className={`text-3xl md:text-4xl font-bold text-navy leading-tight mb-6 gold-underline ${
                isArabic ? '' : 'font-display'
              }`}
              style={{ fontFamily: isArabic ? 'var(--font-cairo)' : 'var(--font-playfair)' }}
            >
              {t.heading}
            </motion.h2>

            <motion.p variants={fadeUp} className="text-navy/70 leading-relaxed mb-4 text-base md:text-lg">
              {t.body1}
            </motion.p>
            <motion.p variants={fadeUp} className="text-navy/60 leading-relaxed mb-10 text-base">
              {t.body2}
            </motion.p>

            {/* Stats */}
            <motion.div
              variants={stagger}
              className="grid grid-cols-3 gap-4"
            >
              {[
                { val: t.stat1Val,   label: t.stat1Label },
                { val: t.stat2Val,   label: t.stat2Label },
                { val: t.stat3Val,   label: t.stat3Label },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="text-center p-4 rounded-xl border border-gold/20 bg-white shadow-sm hover:border-gold/50 hover:shadow-md transition-all duration-300"
                >
                  <p className="text-xl md:text-2xl font-bold text-navy">{stat.val}</p>
                  <p className="text-xs text-navy/50 mt-1 leading-tight">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Visual column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className={`${isArabic ? 'lg:order-1' : 'lg:order-2'} relative`}
          >
            {/* Decorative border frame */}
            <div className="absolute -inset-3 rounded-2xl border border-gold/15 pointer-events-none" />
            <div className="absolute -inset-6 rounded-3xl border border-gold/8 pointer-events-none" />

            {/* Main image container */}
            <div className="relative rounded-xl overflow-hidden shadow-2xl shadow-navy/20 aspect-[4/3]">
              <Image
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&w=900&q=85"
                alt={t.imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Overlay tint */}
              <div className="absolute inset-0 bg-gradient-to-br from-navy-dark/30 to-transparent" />
            </div>

            {/* Gold accent block */}
            <div className="absolute -bottom-4 -end-4 w-24 h-24 rounded-xl bg-gold/10 border border-gold/25 backdrop-blur-sm flex items-center justify-center shadow-lg">
              <div className="text-center">
                <p className="text-2xl font-bold text-gold">١٥+</p>
                <p className="text-xs text-navy font-medium leading-tight px-1">
                  {isArabic ? 'عاماً' : 'Years'}
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
    </section>
  );
}
