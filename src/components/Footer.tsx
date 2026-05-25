/**
 * PREMIUM CINEMATIC FOOTER
 * Modern Agro Corporate Footer
 */

import React from 'react';
import { motion } from 'framer-motion';

import {
  Tractor,
  Youtube,
  Instagram,
  Facebook,
  MessageSquare,
  Phone,
  MapPin,
  Mail,
  ArrowUpRight,
  Sparkles,
} from 'lucide-react';

import { Language } from '../types';
import { TRANSLATIONS, CONTACT_INFO } from '../data';

interface FooterProps {
  lang: Language;
}

export default function Footer({ lang }: FooterProps) {
  const t = TRANSLATIONS[lang];

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);

    if (el) {
      const offset = 80;

      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;

      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer
      id="footer"
      className="relative overflow-hidden border-t border-white/10 bg-gradient-to-b from-black via-slate-950 to-black text-white"
    >
      {/* Glow Background */}
      <div className="absolute left-[-10%] top-0 h-[350px] w-[350px] rounded-full bg-emerald-500/10 blur-[140px]" />

      <div className="absolute bottom-[-10%] right-[-10%] h-[320px] w-[320px] rounded-full bg-yellow-500/10 blur-[120px]" />

      {/* Noise Texture */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* TOP CTA SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="border-b border-white/10 py-20"
        >
          <div className="flex flex-col items-center justify-between gap-10 rounded-[40px] border border-white/10 bg-white/5 px-8 py-12 backdrop-blur-2xl lg:flex-row">

            {/* LEFT */}
            <div className="max-w-2xl">

              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-[11px] font-black uppercase tracking-[0.25em] text-emerald-300">
                <Sparkles className="h-3.5 w-3.5" />
                {lang === 'ta'
                  ? 'உழவர்களுக்கான நம்பிக்கை'
                  : 'BUILT FOR FARMERS'}
              </span>

              <h2 className="mt-6 text-4xl font-black leading-[0.95] tracking-tight text-white md:text-6xl">
                {lang === 'ta'
                  ? 'தமிழ்நாடு விவசாயிகளுக்கான தரமான கருவிகள்'
                  : 'Reliable Agricultural Implements For Tamil Nadu'}
              </h2>

              <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-300">
                {t.footerMsg}
              </p>
            </div>

            {/* RIGHT CTA */}
            <a
              href={CONTACT_INFO.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-2xl bg-emerald-600 px-8 py-5 text-sm font-black uppercase tracking-wider text-white transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl hover:shadow-emerald-500/30"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-600 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <MessageSquare className="relative z-10 h-5 w-5" />

              <span className="relative z-10">
                {lang === 'ta'
                  ? 'வாட்ஸ்அப்பில் தொடர்பு கொள்ள'
                  : 'Chat On WhatsApp'}
              </span>

              <ArrowUpRight className="relative z-10 h-4 w-4" />
            </a>
          </div>
        </motion.div>

        {/* MAIN FOOTER */}
        <div className="grid grid-cols-1 gap-14 py-20 lg:grid-cols-12">

          {/* BRAND */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <div
              onClick={() => scrollToSection('home')}
              className="group inline-flex cursor-pointer items-center gap-4"
            >
              <div className="rounded-2xl bg-emerald-600 p-4 shadow-2xl shadow-emerald-500/20 transition-transform duration-500 group-hover:scale-110">
                <Tractor className="h-7 w-7 text-white" />
              </div>

              <div>
                <h3 className="text-2xl font-black tracking-wide text-white">
                  PON AGRO
                </h3>

                <p className="text-xs font-bold uppercase tracking-[0.3em] text-emerald-300">
                  IMPLEMENTS
                </p>
              </div>
            </div>

            <p className="mt-8 max-w-md text-sm leading-relaxed text-slate-400">
              {lang === 'ta'
                ? 'உண்மையான விவசாய உதிரிப்பாகங்கள், தரமான வெல்டிங், நேரடி பட்டறை உற்பத்தி.'
                : 'Authentic agricultural implement manufacturing with direct workshop craftsmanship, durable steel builds, and trusted farmer support.'}
            </p>

            {/* SOCIALS */}
            <div className="mt-8 flex flex-wrap gap-4">

              {[
                {
                  icon: Youtube,
                  href: 'https://www.youtube.com/@villagethamizhan',
                  hover: 'hover:bg-red-600',
                },
                {
                  icon: Instagram,
                  href: 'https://www.instagram.com/village_thamizhan',
                  hover: 'hover:bg-pink-600',
                },
                {
                  icon: Facebook,
                  href: 'https://m.facebook.com/?_rdr',
                  hover: 'hover:bg-blue-600',
                },
              ].map((social, i) => {
                const Icon = social.icon;

                return (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className={`group rounded-2xl border border-white/10 bg-white/5 p-4 text-slate-300 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:text-white ${social.hover}`}
                  >
                    <Icon className="h-5 w-5 transition-transform duration-500 group-hover:scale-110" />
                  </a>
                );
              })}
            </div>
          </motion.div>

{/* NAVIGATION */}
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="lg:col-span-3"
>
  <h4 className="mb-8 text-sm font-black uppercase tracking-[0.3em] text-yellow-400">
    {lang === 'ta'
      ? 'வழிசெலுத்தல்'
      : 'Quick Navigation'}
  </h4>

  <ul className="space-y-5">

    {/* HOME */}
    <li>
      <a
        href="#/"
        className="group flex items-center gap-2 text-sm font-bold text-slate-400 transition-all duration-300 hover:text-emerald-300"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 opacity-0 transition-all duration-300 group-hover:opacity-100" />

        {t.navHome}
      </a>
    </li>

    {/* ABOUT */}
    <li>
      <a
        href="#/about"
        className="group flex items-center gap-2 text-sm font-bold text-slate-400 transition-all duration-300 hover:text-emerald-300"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 opacity-0 transition-all duration-300 group-hover:opacity-100" />

        {t.navAbout}
      </a>
    </li>

    {/* PRODUCTS */}
    <li>
      <a
        href="#/products"
        className="group flex items-center gap-2 text-sm font-bold text-slate-400 transition-all duration-300 hover:text-emerald-300"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 opacity-0 transition-all duration-300 group-hover:opacity-100" />

        {t.navProducts}
      </a>
    </li>

    {/* GALLERY */}
    <li>
      <a
        href="#/gallery"
        className="group flex items-center gap-2 text-sm font-bold text-slate-400 transition-all duration-300 hover:text-emerald-300"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 opacity-0 transition-all duration-300 group-hover:opacity-100" />

        {t.navGallery}
      </a>
    </li>

    {/* CONTACT */}
    <li>
      <a
        href="#/contact"
        className="group flex items-center gap-2 text-sm font-bold text-slate-400 transition-all duration-300 hover:text-emerald-300"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 opacity-0 transition-all duration-300 group-hover:opacity-100" />

        {t.navContact}
      </a>
    </li>

  </ul>
</motion.div>

    {/* CONTACT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="lg:col-span-4"
          >
            <h4 className="mb-8 text-sm font-black uppercase tracking-[0.3em] text-yellow-400">
              {lang === 'ta'
                ? 'தொடர்பு தகவல்'
                : 'Workshop Contact'}
            </h4>

            <div className="space-y-5">

              <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-emerald-400" />

                <div>
                  <h5 className="text-xs font-black uppercase tracking-wide text-white">
                    Address
                  </h5>

                  <p className="mt-2 text-sm leading-relaxed text-slate-400">
                    {lang === 'ta'
                      ? CONTACT_INFO.addressTa
                      : CONTACT_INFO.addressEn}
                  </p>
                </div>
              </div>

              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition-all duration-500 hover:border-emerald-500/30 hover:bg-white/10"
              >
                <Phone className="h-5 w-5 shrink-0 text-yellow-400" />

                <div>
                  <h5 className="text-xs font-black uppercase tracking-wide text-white">
                    Phone
                  </h5>

                  <p className="mt-1 text-sm font-bold text-slate-300">
                    {CONTACT_INFO.phoneDisplay}
                  </p>
                </div>
              </a>

              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition-all duration-500 hover:border-emerald-500/30 hover:bg-white/10"
              >
                <Mail className="h-5 w-5 shrink-0 text-emerald-400" />

                <div>
                  <h5 className="text-xs font-black uppercase tracking-wide text-white">
                    Email
                  </h5>

                  <p className="mt-1 text-sm text-slate-300">
                    {CONTACT_INFO.email}
                  </p>
                </div>
              </a>
            </div>
          </motion.div>
        </div>

        {/* BOTTOM BAR */}
        <div className="flex flex-col items-center justify-between gap-5 border-t border-white/10 py-8 text-center sm:flex-row sm:text-left">

          <div className="text-sm text-slate-500">
            © {new Date().getFullYear()}{' '}
            <span className="font-black text-slate-300">
              PON AGRO IMPLEMENTS
            </span>{' '}
            — {t.rightsReserved}
          </div>

          <div className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-5 py-2 text-xs font-black uppercase tracking-[0.2em] text-emerald-300">
            🌾 Made For Tamil Nadu Farmers
          </div>
        </div>
      </div>
    </footer>
  );
}