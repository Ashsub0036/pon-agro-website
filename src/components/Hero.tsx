/**
 * UPDATED PREMIUM HERO SECTION
 * Cleaner + Modern + Industrial Premium Minimalism
 */

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, MessageSquare } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS, CONTACT_INFO, IMAGES } from '../data';

interface HeroProps {
  lang: Language;
}

export default function Hero({ lang }: HeroProps) {
  const t = TRANSLATIONS[lang];
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToProducts = () => {
    const el = document.getElementById('products');

    if (el) {
      const offset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-slate-950 flex items-center"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center scale-105 opacity-35"
          style={{
            backgroundImage: `url(${IMAGES.heroBg})`,
            transform: `translateY(${scrollY * 0.12}px) scale(1.05)`,
          }}
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950/40" />

        {/* Minimal glow */}
        <div className="absolute top-0 left-0 w-[40%] h-[40%] bg-green-600/10 blur-[140px]" />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full py-32">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left */}
          <div>

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl mb-8"
            >
              <span className="text-sm font-semibold text-slate-200">
                {t.tamilBadge}
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl sm:text-6xl xl:text-7xl font-black leading-none tracking-tight"
            >
              <span className="text-white">
                PON AGRO
              </span>

              <br />

              <span className="text-green-500">
                IMPLEMENTS
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-8 text-lg leading-relaxed text-slate-300 max-w-xl"
            >
              {lang === 'ta'
                ? 'தமிழ்நாட்டின் விவசாய நிலங்களுக்கு வலிமையான தரமான விவசாய கருவிகள்.'
                : 'Industrial-grade agricultural implements engineered for durability, balance, and long-term field performance.'}
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 mt-10"
            >
              <button
                onClick={handleScrollToProducts}
                className="px-8 py-4 rounded-xl bg-white text-slate-950 font-semibold hover:bg-slate-100 transition-all duration-300"
              >
                {t.btnViewProducts}
              </button>

              <a
                href={CONTACT_INFO.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-green-600 hover:bg-green-700 text-white font-semibold transition-all duration-300"
              >
                <MessageSquare className="h-5 w-5" />
                <span>{t.btnEnquiry}</span>
              </a>
            </motion.div>

            {/* Bottom info */}
            <div className="grid grid-cols-2 gap-8 mt-16 border-t border-white/10 pt-8">

              <div>
                <span className="text-sm text-slate-500">
                  Location
                </span>

                <h4 className="text-white font-semibold mt-1">
                  Vandavasi, Tamil Nadu
                </h4>
              </div>

              <div>
                <span className="text-sm text-slate-500">
                  Trusted By
                </span>

                <h4 className="text-white font-semibold mt-1">
                  200+ Farmers
                </h4>
              </div>

            </div>
          </div>

          {/* Right image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl">

              <img
                src={IMAGES.rotaLevelerProd}
                alt="PON Product"
                className="w-full h-[650px] object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

              {/* Product label */}
              <div className="absolute bottom-6 left-6">
                <span className="text-sm text-green-400 font-semibold">
                  Industrial Grade
                </span>

                <h3 className="text-3xl font-black text-white mt-2">
                  PON Rota Leveler
                </h3>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll */}
        <div className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
            className="flex flex-col items-center text-slate-400"
          >
            <span className="text-xs uppercase tracking-[0.3em] mb-2">
              Scroll
            </span>

            <ChevronDown className="h-5 w-5" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}