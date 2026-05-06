'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Phone, ChevronDown } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { content, WHATSAPP_URL, PHONE_NUMBER } from '@/lib/content';

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const fadeUp = {
  hidden:  { opacity: 0, y: 28 },
  visible: (delay = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

const scrollTo = (href: string) => {
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
};

export default function Hero() {
  const { lang, isArabic } = useLanguage();
  const t = content[lang].hero;

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(160deg, #07101E 0%, #0D1A2E 45%, #1B2A4A 100%)',
      }}
    >
      {/* Geometric pattern overlay */}
      <div className="absolute inset-0 hero-pattern opacity-100 pointer-events-none" />

      {/* Gold radial glow behind logo */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 30%, rgba(201,168,76,0.12) 0%, transparent 65%)',
        }}
      />

      {/* Decorative gold lines — desktop only */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden hidden lg:block">
        <div className="absolute top-1/4 left-8 w-px h-32 bg-gradient-to-b from-transparent via-gold/20 to-transparent" />
        <div className="absolute top-1/4 right-8 w-px h-32 bg-gradient-to-b from-transparent via-gold/20 to-transparent" />
        <div className="absolute bottom-1/4 left-16 w-24 h-px bg-gradient-to-r from-transparent via-gold/15 to-transparent" />
        <div className="absolute bottom-1/4 right-16 w-24 h-px bg-gradient-to-r from-transparent via-gold/15 to-transparent" />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-4xl w-full mx-auto px-5 sm:px-8 pt-24 pb-16 flex flex-col items-center text-center">

        {/* Logo */}
        <motion.div
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mb-6 animate-float"
        >
          <Image
            src="/logo.jpg"
            alt="Raed A. Baltyor & Sons Real Estate Co."
            width={420}
            height={220}
            className="w-56 sm:w-72 md:w-80 lg:w-96 rounded-lg shadow-2xl shadow-navy-deep/80"
            priority
          />
        </motion.div>

        {/* Trust badge */}
        <motion.div
          custom={0.1}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/30 bg-gold/10 text-gold text-xs font-semibold tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
            {t.badge}
          </span>
        </motion.div>

        {/* Gold rule */}
        <motion.div
          custom={0.2}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="gold-rule mb-8"
        />

        {/* Headline */}
        <motion.h1
          custom={0.3}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight mb-4"
        >
          <span
            className={`block ${!isArabic ? 'font-display' : ''}`}
            style={{ fontFamily: isArabic ? 'var(--font-cairo)' : 'var(--font-playfair)' }}
          >
            {t.headline1}
          </span>
          <span
            className="block text-gold"
            style={{ fontFamily: isArabic ? 'var(--font-cairo)' : 'var(--font-playfair)' }}
          >
            {t.headline2}
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          custom={0.4}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-base sm:text-lg text-white/65 max-w-2xl leading-relaxed mb-10 text-balance"
        >
          {t.sub}
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          custom={0.5}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto"
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold text-sm sm:text-base px-7 py-3.5 shadow-xl shadow-gold/20 hover:shadow-gold/40"
          >
            <WhatsAppIcon />
            {t.cta1}
          </a>
          <a
            href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`}
            className="btn-outline text-sm sm:text-base px-7 py-3.5"
          >
            <Phone size={18} />
            {t.cta2}
          </a>
        </motion.div>

        {/* Trust stats */}
        <motion.div
          custom={0.65}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mt-14 pt-8 border-t border-white/10 w-full max-w-lg mx-auto grid grid-cols-3 gap-4"
        >
          {[
            { val: t.stat1Val, label: t.stat1Label },
            { val: t.stat2Val, label: t.stat2Label },
            { val: t.stat3Val, label: t.stat3Label },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center gap-1">
              <span className="text-2xl sm:text-3xl font-bold text-gold">{stat.val}</span>
              <span className="text-xs text-white/50 text-center leading-tight">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        onClick={() => scrollTo('#about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-white/30 hover:text-gold/60 transition-colors"
        aria-label="Scroll down"
      >
        <span className="text-xs tracking-widest uppercase font-medium" style={{ fontSize: '10px' }}>
          {isArabic ? 'اكتشف المزيد' : 'Discover More'}
        </span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={18} />
        </motion.div>
      </motion.button>
    </section>
  );
}
