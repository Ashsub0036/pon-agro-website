/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import {
  Phone,
  MessageSquare,
  Compass,
  ChevronUp,
  X,
} from 'lucide-react';

import { motion, AnimatePresence } from 'motion/react';

import { Language } from '../types';
import { CONTACT_INFO } from '../data';

interface StickyMobileCTAProps {
  lang: Language;
}

export default function StickyMobileCTA({
  lang,
}: StickyMobileCTAProps) {
  const [showBar, setShowBar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBar(true);
      } else {
        setShowBar(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () =>
      window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Floating Scroll To Top */}
      <AnimatePresence>
        {showBar && (
          <motion.button
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.3 }}
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: 'smooth',
              })
            }
            className="md:hidden fixed bottom-28 right-4 z-50 w-12 h-12 rounded-full bg-primary-green shadow-2xl flex items-center justify-center text-white border border-white/10"
          >
            <ChevronUp className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Sticky Bottom Dock */}
      <motion.div
        initial={{ y: 120 }}
        animate={{ y: 0 }}
        transition={{
          duration: 0.5,
          ease: 'easeOut',
        }}
        id="mobile-sticky-dock"
        className="md:hidden fixed bottom-0 left-0 w-full z-50 px-3 pb-3"
      >
        <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/90 backdrop-blur-2xl shadow-[0_-10px_40px_rgba(0,0,0,0.12)]">
          
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary-green/5 via-transparent to-secondary-yellow/10 pointer-events-none" />

          {/* Top Tiny Line */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-1 rounded-full bg-gray-300 mt-2" />

          <div className="relative z-10 px-3 pt-5 pb-3">
            
            {/* CTA Heading */}
            <div className="flex items-center justify-between mb-4 px-1">
              <div>
                <h3 className="text-sm font-black text-gray-900 leading-none">
                  {lang === 'ta'
                    ? 'உடனடி தொடர்பு'
                    : 'Quick Contact'}
                </h3>

                <p className="text-[11px] text-gray-500 mt-1">
                  {lang === 'ta'
                    ? 'PON AGRO தொழிற்சாலை உதவி'
                    : 'PON AGRO Factory Support'}
                </p>
              </div>

              <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500">
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* CTA Buttons */}
            <div className="grid grid-cols-3 gap-3">
              
              {/* Call */}
              <a
                id="dock-call-btn"
                href={`tel:${CONTACT_INFO.phone}`}
                className="group relative overflow-hidden rounded-2xl bg-gray-50 border border-gray-200 px-3 py-4 flex flex-col items-center justify-center transition-all duration-300 active:scale-[0.97]"
              >
                <div className="absolute inset-0 opacity-0 group-active:opacity-100 bg-black/5 transition-opacity" />

                <div className="w-11 h-11 rounded-2xl bg-primary-green/10 flex items-center justify-center mb-2">
                  <Phone className="h-5 w-5 text-primary-green" />
                </div>

                <span className="text-[11px] font-black uppercase tracking-wider text-gray-800">
                  {lang === 'ta' ? 'அழைக்க' : 'Call'}
                </span>

                <span className="text-[9px] text-gray-400 mt-1">
                  Direct
                </span>
              </a>

              {/* WhatsApp */}
              <a
                id="dock-whatsapp-btn"
                href={CONTACT_INFO.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="group relative overflow-hidden rounded-2xl bg-primary-green text-white px-3 py-4 flex flex-col items-center justify-center shadow-xl shadow-green-900/20 active:scale-[0.97]"
              >
                {/* Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />

                <div className="absolute -top-8 -right-8 w-20 h-20 rounded-full bg-white/10 blur-2xl" />

                <div className="relative z-10 w-11 h-11 rounded-2xl bg-white/10 flex items-center justify-center mb-2 backdrop-blur-md">
                  <MessageSquare className="h-5 w-5 text-secondary-yellow" />
                </div>

                <span className="relative z-10 text-[11px] font-black uppercase tracking-wider">
                  WhatsApp
                </span>

                <span className="relative z-10 text-[9px] text-green-100 mt-1">
                  Fast Reply
                </span>
              </a>

              {/* Directions */}
              <a
                id="dock-directions-btn"
                href={CONTACT_INFO.directions}
                target="_blank"
                rel="noreferrer"
                className="group relative overflow-hidden rounded-2xl bg-gray-950 text-white px-3 py-4 flex flex-col items-center justify-center active:scale-[0.97]"
              >
                <div className="absolute inset-0 opacity-0 group-active:opacity-100 bg-white/5 transition-opacity" />

                <div className="w-11 h-11 rounded-2xl bg-white/10 flex items-center justify-center mb-2">
                  <Compass className="h-5 w-5 text-secondary-yellow" />
                </div>

                <span className="text-[11px] font-black uppercase tracking-wider">
                  {lang === 'ta'
                    ? 'வருகை'
                    : 'Directions'}
                </span>

                <span className="text-[9px] text-gray-400 mt-1">
                  Navigate
                </span>
              </a>
            </div>

            {/* Bottom Trust Line */}
            <div className="flex items-center justify-center gap-2 mt-4 pt-3 border-t border-gray-200/70">
              <span className="w-2 h-2 rounded-full bg-primary-green animate-pulse" />

              <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-gray-500">
                {lang === 'ta'
                  ? 'தமிழக விவசாயிகளின் நம்பிக்கை'
                  : 'Trusted By Tamil Nadu Farmers'}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}