'use client';

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MessageSquare, Send, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { content, WHATSAPP_URL, WHATSAPP_NUMBER, PHONE_NUMBER, EMAIL } from '@/lib/content';

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className ?? 'w-5 h-5'}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const fadeUp = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function Contact() {
  const { lang, isArabic } = useLanguage();
  const t = content[lang].contact;
  const f = t.form;

  const [form, setForm]       = useState({ name: '', phone: '', service: '', message: '' });
  const [submitted, setSubmit] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      isArabic
        ? `الاسم: ${form.name}\nالجوال: ${form.phone}\nالخدمة: ${form.service}\nالرسالة: ${form.message}`
        : `Name: ${form.name}\nPhone: ${form.phone}\nService: ${form.service}\nMessage: ${form.message}`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank');
    setSubmit(true);
  };

  return (
    <section
      id="contact"
      className="py-20 md:py-28 relative overflow-hidden"
      style={{ background: 'linear-gradient(155deg, #07101E 0%, #0D1A2E 50%, #1B2A4A 100%)' }}
    >
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute inset-0 hero-pattern opacity-50 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={stagger}
          className="text-center mb-14"
        >
          <motion.span variants={fadeUp} className="section-label block mb-4">{t.label}</motion.span>
          <motion.h2
            variants={fadeUp}
            className={`text-3xl md:text-4xl font-bold text-white mb-4 gold-underline gold-underline-center ${
              isArabic ? '' : 'font-display'
            }`}
            style={{ fontFamily: isArabic ? 'var(--font-cairo)' : 'var(--font-playfair)' }}
          >
            {t.heading}
          </motion.h2>
          <motion.p variants={fadeUp} className="text-white/45 max-w-lg mx-auto mt-5 text-sm md:text-base leading-relaxed">
            {t.sub}
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-14">

          {/* Left: Contact info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
            className={`lg:col-span-2 flex flex-col gap-5 ${isArabic ? 'lg:order-2' : 'lg:order-1'}`}
          >
            {/* WhatsApp primary */}
            <motion.a
              variants={fadeUp}
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-5 rounded-xl bg-[#25D366]/10 border border-[#25D366]/25 hover:bg-[#25D366]/20 hover:border-[#25D366]/50 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center shrink-0 shadow-lg">
                <WhatsAppIcon className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-xs text-white/40 font-medium uppercase tracking-wide mb-0.5">
                  {isArabic ? 'واتساب' : 'WhatsApp'}
                </p>
                <p className="text-sm font-semibold text-white group-hover:text-[#25D366] transition-colors">
                  {t.whatsappCta}
                </p>
              </div>
            </motion.a>

            {/* Phone */}
            <motion.a
              variants={fadeUp}
              href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`}
              className="group flex items-center gap-4 p-5 rounded-xl bg-white/5 border border-white/10 hover:border-gold/30 hover:bg-white/8 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-gold/15 border border-gold/25 flex items-center justify-center shrink-0">
                <Phone size={20} className="text-gold" />
              </div>
              <div>
                <p className="text-xs text-white/40 font-medium uppercase tracking-wide mb-0.5">
                  {isArabic ? 'الهاتف' : 'Phone'}
                </p>
                <p className="text-sm font-semibold text-white group-hover:text-gold transition-colors" dir="ltr">
                  {PHONE_NUMBER}
                </p>
              </div>
            </motion.a>

            {/* Email */}
            <motion.a
              variants={fadeUp}
              href={`mailto:${EMAIL}`}
              className="group flex items-center gap-4 p-5 rounded-xl bg-white/5 border border-white/10 hover:border-gold/30 hover:bg-white/8 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-gold/15 border border-gold/25 flex items-center justify-center shrink-0">
                <Mail size={20} className="text-gold" />
              </div>
              <div>
                <p className="text-xs text-white/40 font-medium uppercase tracking-wide mb-0.5">
                  {isArabic ? 'البريد' : 'Email'}
                </p>
                <p className="text-sm font-semibold text-white group-hover:text-gold transition-colors break-all">
                  {EMAIL}
                </p>
              </div>
            </motion.a>

            {/* Message */}
            <motion.div
              variants={fadeUp}
              className="flex items-start gap-4 p-5 rounded-xl bg-white/3 border border-white/8"
            >
              <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0 mt-0.5">
                <MessageSquare size={20} className="text-gold/70" />
              </div>
              <div>
                <p className="text-xs text-white/40 font-medium uppercase tracking-wide mb-1">
                  {isArabic ? 'مكاتبنا' : 'Our Office'}
                </p>
                <p className="text-sm text-white/60 leading-relaxed">
                  {isArabic ? 'المملكة العربية السعودية' : 'Saudi Arabia'}
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className={`lg:col-span-3 ${isArabic ? 'lg:order-1' : 'lg:order-2'}`}
          >
            <div className="rounded-2xl bg-white/6 border border-white/10 p-6 md:p-8 backdrop-blur-sm">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center gap-4"
                >
                  <CheckCircle2 size={56} className="text-gold" />
                  <p className="text-xl font-bold text-white">{f.successMsg}</p>
                  <button
                    onClick={() => setSubmit(false)}
                    className="text-sm text-gold/70 hover:text-gold underline mt-2"
                  >
                    {isArabic ? 'إرسال رسالة أخرى' : 'Send another message'}
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name + Phone */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-white/50 font-medium mb-1.5">{f.name}</label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
                        placeholder={f.placeholder.name}
                        className="input-field"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-white/50 font-medium mb-1.5">{f.phone}</label>
                      <input
                        type="tel"
                        required
                        value={form.phone}
                        onChange={e => setForm(p => ({ ...p, phone: e.target.value }))}
                        placeholder={f.placeholder.phone}
                        className="input-field"
                        dir="ltr"
                      />
                    </div>
                  </div>

                  {/* Service */}
                  <div>
                    <label className="block text-xs text-white/50 font-medium mb-1.5">{f.service}</label>
                    <select
                      value={form.service}
                      onChange={e => setForm(p => ({ ...p, service: e.target.value }))}
                      className="input-field bg-white/10 appearance-none cursor-pointer"
                    >
                      {f.services.map((s, i) => (
                        <option key={i} value={i === 0 ? '' : s} disabled={i === 0} className="bg-navy text-white">
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs text-white/50 font-medium mb-1.5">{f.message}</label>
                    <textarea
                      rows={4}
                      value={form.message}
                      onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                      placeholder={f.placeholder.message}
                      className="input-field resize-none"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="btn-gold w-full py-3.5 text-sm font-semibold shadow-xl shadow-gold/25 hover:shadow-gold/40 mt-2"
                  >
                    <Send size={16} />
                    {f.submit}
                  </button>

                  <p className="text-xs text-white/25 text-center pt-1">
                    {isArabic
                      ? 'سيتم توجيه رسالتك عبر واتساب'
                      : 'Your message will be sent via WhatsApp'}
                  </p>
                </form>
              )}
            </div>
          </motion.div>

        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
    </section>
  );
}
