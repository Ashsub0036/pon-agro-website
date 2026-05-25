/**
 * PREMIUM GALLERY SECTION
 * Cinematic Agro Gallery
 */

import React, { useState } from 'react';

import { motion, AnimatePresence } from 'framer-motion';

import {
  Maximize2,
  X,
  Sparkles,
} from 'lucide-react';

import { Language } from '../types';

import {
  TRANSLATIONS
} from '../data';

interface GalleryProps {
  lang: Language;
}

export default function Gallery({ lang }: GalleryProps) {
  const t = TRANSLATIONS[lang];

  const [selectedItem, setSelectedItem] =
    useState<any | null>(null);

  const [activeTab, setActiveTab] =
    useState<string>('All');

  /* -------------------------------- */
  /* LOCAL GALLERY ITEMS */
  /* -------------------------------- */

  const galleryItems = [
    {
      id: 1,
      image:
        'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=1200',
      titleEn: 'Modern Agro Machine',
      titleTa: 'நவீன விவசாய இயந்திரம்',
      categoryEn: 'Manufacturing',
      categoryTa: 'பட்டறை',
    },

    {
      id: 2,
      image:
        'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200',
      titleEn: 'Field Demo',
      titleTa: 'வயல்வெளி செயல்',
      categoryEn: 'Field Demonstration',
      categoryTa: 'உழவு',
    },

    {
      id: 3,
      image:
        'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1200',
      titleEn: 'Finished Product',
      titleTa: 'தயாரிப்பு',
      categoryEn: 'Finished Products',
      categoryTa: 'தயாரிப்புகள்',
    },

    {
      id: 4,
      image:
        'https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=1200',
      titleEn: 'Happy Farmers',
      titleTa: 'மகிழ்ச்சியான விவசாயிகள்',
      categoryEn: 'Happy Customers',
      categoryTa: 'வாடிக்கையாளர்கள்',
    },
  ];

  const categories = [
    { id: 'All', en: 'All Works', ta: 'அனைத்தும்' },
    { id: 'Manufacturing', en: 'Workshop', ta: 'பட்டறை' },
    { id: 'Field Demonstration', en: 'Field Demo', ta: 'உழவு' },
    { id: 'Finished Products', en: 'Products', ta: 'தயாரிப்புகள்' },
    { id: 'Happy Customers', en: 'Farmers', ta: 'வாடிக்கையாளர்கள்' },
  ];

  const filteredItems = galleryItems.filter((item) => {
    return activeTab === 'All'
      ? true
      : item.categoryEn === activeTab;
  });

  return (
    <section
      id="gallery"
      className="relative overflow-hidden bg-gradient-to-b from-black via-slate-950 to-black py-24 text-white"
    >
      {/* Glow */}
      <div className="absolute left-0 top-0 h-[350px] w-[350px] rounded-full bg-emerald-500/10 blur-[140px]" />

      {/* Texture */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-4xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-white/5 px-4 py-2 text-[11px] font-black uppercase tracking-[0.25em] text-emerald-300 backdrop-blur-xl">
            <Sparkles className="h-3.5 w-3.5" />
            GALLERY
          </span>

          <h2 className="mt-6 text-5xl font-black tracking-tight md:text-7xl">
            {t.galleryTitle}
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-300">
            {t.gallerySub}
          </p>
        </motion.div>

        {/* FILTERS */}
        <div className="mb-14 flex flex-wrap items-center justify-center gap-4">

          {categories.map((cat) => {
            const isActive = activeTab === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`rounded-full px-6 py-3 text-xs font-black uppercase tracking-wider transition-all duration-500 ${
                  isActive
                    ? 'bg-emerald-600 text-white shadow-2xl shadow-emerald-500/30'
                    : 'border border-white/10 bg-white/5 text-slate-300 backdrop-blur-xl hover:bg-white/10'
                }`}
              >
                {lang === 'ta' ? cat.ta : cat.en}
              </button>
            );
          })}
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

          <AnimatePresence>

            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.05,
                }}
                whileHover={{ y: -10 }}
                onClick={() => setSelectedItem(item)}
                className="group relative cursor-pointer overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl"
              >
                <div className="relative aspect-[4/3] overflow-hidden">

                  <img
                    src={item.image}
                    alt={item.titleEn}
                    className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-80" />

                  <div className="absolute right-5 top-5 rounded-full border border-white/10 bg-black/50 p-3 opacity-0 backdrop-blur-xl transition-all duration-500 group-hover:opacity-100">
                    <Maximize2 className="h-4 w-4 text-white" />
                  </div>

                  <div className="absolute bottom-6 left-6 right-6">

                    <span className="rounded-full bg-emerald-500 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-black">
                      {lang === 'ta'
                        ? item.categoryTa
                        : item.categoryEn}
                    </span>

                    <h3 className="mt-4 text-xl font-black leading-tight text-white">
                      {lang === 'ta'
                        ? item.titleTa
                        : item.titleEn}
                    </h3>

                  </div>
                </div>
              </motion.div>
            ))}

          </AnimatePresence>
        </div>
      </div>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-xl"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-5xl overflow-hidden rounded-[40px] border border-white/10 bg-black"
            >
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute right-5 top-5 z-10 rounded-full border border-white/10 bg-black/50 p-3 backdrop-blur-xl"
              >
                <X className="h-5 w-5 text-white" />
              </button>

              <img
                src={selectedItem.image}
                alt={selectedItem.titleEn}
                className="max-h-[80vh] w-full object-contain"
              />

              <div className="border-t border-white/10 bg-black/70 p-8 text-center backdrop-blur-xl">

                <span className="rounded-full bg-emerald-500 px-4 py-2 text-[10px] font-black uppercase tracking-wider text-black">
                  {lang === 'ta'
                    ? selectedItem.categoryTa
                    : selectedItem.categoryEn}
                </span>

                <h3 className="mt-5 text-3xl font-black text-white">
                  {lang === 'ta'
                    ? selectedItem.titleTa
                    : selectedItem.titleEn}
                </h3>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}