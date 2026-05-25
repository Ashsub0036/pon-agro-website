/**
 * PREMIUM FAQ SECTION
 * Cinematic Agro Corporate FAQ
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import {
  HelpCircle,
  ChevronDown,
  ShieldCheck,
  Wrench,
  Truck,
  Sparkles,
} from 'lucide-react';

import { Language } from '../types';

interface FAQsProps {
  lang: Language;
}

export default function FAQs({ lang }: FAQsProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'How do I maintain the implement?',
      a: [
       ' Clean mud after field usage',
       ' Store under covered area',
         'Check bolts regularly',
         'Apply grease periodically'
      ],
      icon: Wrench,
    },
    {
      q: 'Do you provide warranty?',
      a: [
        '1 year structural warranty',
        'Covers welding defects',
        'Direct workshop support available',
      ],
      icon: ShieldCheck,
    },
    {
      q: 'Do you provide delivery?',
      a: [
        'Delivery across Tamil Nadu',
        'Village-level transport support',
        'Heavy implement handling available',
      ],
      icon: Truck,
    },
  ];

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-gradient-to-b from-black via-slate-950 to-black py-24 text-white"
    >
      {/* Glow */}
      <div className="absolute top-0 right-0 h-[350px] w-[350px] rounded-full bg-emerald-500/10 blur-[120px]" />

      {/* Grain */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-white/5 px-4 py-2 text-[11px] font-black uppercase tracking-[0.25em] text-emerald-300 backdrop-blur-xl">
            <Sparkles className="h-3.5 w-3.5" />
            FAQ
          </span>

          <h2 className="mt-6 text-5xl font-black tracking-tight md:text-6xl">
            {lang === 'ta'
              ? 'அடிக்கடி கேட்கப்படும் கேள்விகள்'
              : 'Frequently Asked Questions'}
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-300">
            {lang === 'ta'
              ? 'விவசாயிகள் பொதுவாக கேட்கும் முக்கிய கேள்விகள்.'
              : 'Everything farmers ask before purchasing agricultural implements.'}
          </p>
        </motion.div>

        {/* Trust Strip */}
        <div className="mb-12 flex flex-wrap justify-center gap-4">
          {[
            'Direct Manufacturer',
            'Real Workshop',
            'Fast Delivery',
            'Spare Parts Support',
          ].map((item, i) => (
            <div
              key={i}
              className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-xs font-bold uppercase tracking-wide backdrop-blur-xl"
            >
              ✓ {item}
            </div>
          ))}
        </div>

        {/* FAQ LIST */}
        <div className="space-y-5">

          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            const Icon = faq.icon;

            return (
              <motion.div
                key={index}
                whileHover={{ y: -4 }}
                className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-500 hover:border-emerald-500/30"
              >
                <button
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="flex w-full items-center justify-between px-6 py-6 text-left"
                >
                  <div className="flex items-center gap-4">

                    <div className="rounded-2xl bg-emerald-500/10 p-3 shadow-lg">
                      <Icon className="h-5 w-5 text-emerald-400" />
                    </div>

                    <h3 className="text-base font-black text-white">
                      {faq.q}
                    </h3>
                  </div>

                  <ChevronDown
                    className={`h-5 w-5 transition-transform duration-500 ${
                      isOpen ? 'rotate-180 text-emerald-400' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>

                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        duration: 0.45,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      <div className="border-t border-white/10 px-8 pb-8 pt-5">

                        <ul className="space-y-3">
                          {faq.a.map((item, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-3 text-sm leading-relaxed text-slate-300"
                            >
                              <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />
                              {item}
                            </li>
                          ))}
                        </ul>

                      </div>
                    </motion.div>
                  )}

                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 rounded-[32px] border border-white/10 bg-white/5 p-10 text-center backdrop-blur-2xl"
        >
          <h3 className="text-3xl font-black text-white">
            {lang === 'ta'
              ? 'மேலும் கேள்விகள் உள்ளதா?'
              : 'Still Have Questions?'}
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300">
            {lang === 'ta'
              ? 'எங்கள் பட்டறை குழுவுடன் நேரடியாக தொடர்பு கொள்ளுங்கள்.'
              : 'Talk directly with our workshop team on WhatsApp.'}
          </p>

          <a
            href="https://wa.me/918870712295"
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-3 rounded-2xl bg-emerald-600 px-8 py-4 text-sm font-black uppercase tracking-wider text-white transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl hover:shadow-emerald-500/30"
          >
            Talk On WhatsApp →
          </a>
        </motion.div>
      </div>
    </section>
  );
}