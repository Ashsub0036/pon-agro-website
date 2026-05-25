import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Hammer,
  Calendar,
  ShieldCheck,
  Tractor,
  Wrench,
  Users,
  PhoneCall,
  Sparkles,
} from 'lucide-react';

import { Language } from '../types';
import { TRANSLATIONS, IMAGES } from '../data';

interface AboutProps {
  lang: Language;
}

export default function About({ lang }: AboutProps) {
  const t = TRANSLATIONS[lang];
  const [activeTab, setActiveTab] = useState<'mission' | 'heritage'>('mission');

  const stats = [
    {
      labelEn: 'Products Manufactured',
      labelTa: 'தயாரிப்புகள்',
      value: '18+',
      icon: Hammer,
    },
    {
      labelEn: 'Trusted Farmers',
      labelTa: 'நம்பிக்கை விவசாயிகள்',
      value: '200+',
      icon: Users,
    },
    {
      labelEn: 'Field Deliveries',
      labelTa: 'விநியோகங்கள்',
      value: '500+',
      icon: Tractor,
    },
    {
      labelEn: 'Customer Support',
      labelTa: 'வாடிக்கையாளர் ஆதரவு',
      value: '24/7',
      icon: PhoneCall,
    },
  ];

  const trustPoints = [
    {
      icon: ShieldCheck,
      textEn: 'Direct Manufacturer',
      textTa: 'நேரடி உற்பத்தியாளர்',
    },
    {
      icon: Tractor,
      textEn: 'Field Tested Products',
      textTa: 'வயல்வெளி சோதனை தயாரிப்புகள்',
    },
    {
      icon: Wrench,
      textEn: 'Workshop Built Quality',
      textTa: 'பட்டறை தரமான தயாரிப்பு',
    },
    {
      icon: PhoneCall,
      textEn: 'WhatsApp Support',
      textTa: 'வாட்ஸ்அப் ஆதரவு',
    },
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-gradient-to-b from-black via-emerald-950 to-black py-16 md:py-24 text-white"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 h-[400px] w-[400px] rounded-full bg-emerald-500/10 blur-[140px]" />
      <div className="absolute bottom-0 right-0 h-[350px] w-[350px] rounded-full bg-yellow-500/10 blur-[120px]" />

      {/* Grain Texture */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-white/5 px-4 py-2 text-[11px] font-black uppercase tracking-[0.25em] text-emerald-300 backdrop-blur-xl">
            <Sparkles className="h-3.5 w-3.5" />
            {lang === 'ta' ? 'எங்கள் கதை' : 'OUR STORY'}
          </span>

          <h2 className="mt-6 text-4xl font-black leading-[1.05] tracking-tight text-white md:text-6xl">
            {t.aboutTitle}
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-slate-300 md:text-lg">
            {lang === 'ta'
              ? 'தமிழ்நாட்டின் விவசாயிகளுக்காக தரமான மற்றும் நீடித்த விவசாய கருவிகளை தயாரிக்கும் வளர்ந்து வரும் உள்ளூர் உற்பத்தியாளர்.'
              : 'A growing Tamil Nadu-based agro implements manufacturer focused on building durable, field-tested farming equipment with real workshop craftsmanship.'}
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 items-center gap-10 md:gap-16 lg:grid-cols-12">

          {/* Left Visual Section */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative lg:col-span-7"
          >
            <motion.div
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 10, repeat: Infinity }}
              className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 shadow-2xl backdrop-blur-xl"
            >
              <img
                src={IMAGES.workshopDetail}
                alt="PON AGRO IMPLEMENTS workshop"
                className="h-full w-full object-cover opacity-90"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

              {/* Bottom Workshop Card */}
              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 120 }}
                className="absolute bottom-6 left-6 flex max-w-sm items-center gap-4 rounded-2xl border border-white/10 bg-black/70 p-4 backdrop-blur-xl"
              >
                <div className="rounded-xl bg-emerald-600 p-3 text-white shadow-lg">
                  <Hammer className="h-5 w-5" />
                </div>

                <div>
                  <h4 className="text-sm font-black text-white">
                    {lang === 'ta'
                      ? 'உண்மையான பட்டறை தயாரிப்பு'
                      : 'Real Workshop Manufacturing'}
                  </h4>
                  <p className="mt-1 text-xs leading-relaxed text-slate-300">
                    {lang === 'ta'
                      ? 'வந்தவாசி பட்டறையில் நேரடியாக தயாரிக்கப்படுகிறது'
                      : 'Every implement is crafted locally in our Vandavasi workshop.'}
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Floating Badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-5 -right-5 hidden rounded-2xl border border-black bg-secondary-yellow px-5 py-4 text-center text-black shadow-2xl md:block"
            >
              <span className="block text-2xl font-black">100%</span>
              <span className="mt-1 block text-[10px] font-bold uppercase tracking-[0.25em]">
                {lang === 'ta' ? 'தமிழ்நாடு தயாரிப்பு' : 'Tamil Nadu Built'}
              </span>
            </motion.div>

            {/* Floating Year Card */}
            <motion.div
              whileHover={{ y: -5 }}
              className="absolute -bottom-5 -left-5 hidden items-center gap-3 rounded-2xl border border-white/10 bg-black/70 p-4 shadow-2xl backdrop-blur-xl md:flex"
            >
              <div className="rounded-xl bg-emerald-950 p-3 text-emerald-400">
                <Calendar className="h-5 w-5" />
              </div>

              <div>
                <h4 className="text-xs font-black text-white">
                  {lang === 'ta' ? '2025 முதல் வளர்ச்சி' : 'Started In 2025'}
                </h4>
                <p className="mt-1 text-[11px] text-slate-400">
                  {lang === 'ta'
                    ? 'விவசாயிகளின் நம்பிக்கையுடன் வளர்ச்சி'
                    : 'Growing with farmer trust across Tamil Nadu'}
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <h3 className="text-2xl font-black leading-tight text-white md:text-4xl">
              {lang === 'ta'
                ? 'விவசாயிகளுக்காக உருவாக்கப்பட்ட தரமான கருவிகள்'
                : 'Built For Modern Tamil Nadu Farmers'}
            </h3>

            <p className="mt-5 text-base leading-relaxed text-slate-300">
              {lang === 'ta'
                ? 'எங்கள் நோக்கம் பெரிய கார்ப்பரேட் நிறுவனமாக மாறுவது அல்ல. தமிழ்நாட்டின் விவசாயிகளுக்கு நீடித்த மற்றும் நம்பகமான விவசாய கருவிகளை வழங்குவதே எங்கள் நோக்கம்.'
                : 'We focus on practical manufacturing, durable steel quality, and field-tested agricultural equipment tailored for Tamil Nadu farming conditions.'}
            </p>

            {/* Trust Points */}
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {trustPoints.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5, scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 120 }}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl"
                  >
                    <div className="rounded-xl bg-emerald-600/20 p-3 text-emerald-400">
                      <Icon className="h-5 w-5" />
                    </div>

                    <span className="text-sm font-bold text-white">
                      {lang === 'ta' ? item.textTa : item.textEn}
                    </span>
                  </motion.div>
                );
              })}
            </div>

            {/* Tabs */}
            <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <div className="mb-5 flex gap-6 border-b border-white/10 pb-4 text-sm font-bold">
                <button
                  onClick={() => setActiveTab('mission')}
                  className={`transition-all ${
                    activeTab === 'mission'
                      ? 'text-emerald-400'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {lang === 'ta' ? 'எங்கள் நோக்கம்' : 'Our Mission'}
                </button>

                <button
                  onClick={() => setActiveTab('heritage')}
                  className={`transition-all ${
                    activeTab === 'heritage'
                      ? 'text-emerald-400'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {lang === 'ta' ? 'உண்மையான தயாரிப்பு' : 'Authentic Production'}
                </button>
              </div>

              {activeTab === 'mission' ? (
                <div className="space-y-4 text-sm leading-relaxed text-slate-300">
                  <div className="flex items-start gap-3">
                    <ShieldCheck className="mt-1 h-4 w-4 text-emerald-400" />
                    <p>
                      {lang === 'ta'
                        ? 'தரமான கார்பன் ஸ்டீல் பயன்படுத்தப்படுகிறது'
                        : 'Built using durable carbon steel materials'}
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <Tractor className="mt-1 h-4 w-4 text-emerald-400" />
                    <p>
                      {lang === 'ta'
                        ? 'HP திறனைப் பொறுத்து தனிப்பயன் வடிவமைப்பு'
                        : 'Customized designs based on tractor HP capacity'}
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <Wrench className="mt-1 h-4 w-4 text-emerald-400" />
                    <p>
                      {lang === 'ta'
                        ? 'வயல்வெளி சோதனை செய்யப்பட்ட தயாரிப்புகள்'
                        : 'Field-tested implements for real farming conditions'}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="space-y-4 text-sm leading-relaxed text-slate-300">
                  <div className="flex items-start gap-3">
                    <ShieldCheck className="mt-1 h-4 w-4 text-emerald-400" />
                    <p>
                      {lang === 'ta'
                        ? 'எல்லா புகைப்படங்களும் உண்மையான பட்டறை புகைப்படங்கள்'
                        : 'Every image used on this website is captured from our real workshop'}
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <Hammer className="mt-1 h-4 w-4 text-emerald-400" />
                    <p>
                      {lang === 'ta'
                        ? 'உண்மையான உற்பத்தி மற்றும் டிராக்டர் சோதனைகள்'
                        : 'Real manufacturing and tractor testing visuals only'}
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <Sparkles className="mt-1 h-4 w-4 text-emerald-400" />
                    <p>
                      {lang === 'ta'
                        ? 'போலி கார்ப்பரேட் காட்சிகள் பயன்படுத்தப்படவில்லை'
                        : 'No fake corporate stock visuals or artificial renders'}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>

        {/* Trust Strip */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-4 border-y border-white/10 py-8 text-center">
          {[
            lang === 'ta' ? 'நேரடி உற்பத்தியாளர்' : 'Direct Manufacturer',
            lang === 'ta' ? 'உண்மையான பட்டறை புகைப்படங்கள்' : 'Real Workshop Photos',
            lang === 'ta' ? 'தமிழ்நாடு விவசாயிகள் நம்பிக்கை' : 'Tamil Nadu Farmer Trusted',
            lang === 'ta' ? 'வாட்ஸ்அப் ஆதரவு' : 'WhatsApp Support',
          ].map((item, index) => (
            <div
              key={index}
              className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-xs font-bold uppercase tracking-wide text-white backdrop-blur-xl"
            >
              ✓ {item}
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-xl"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-400">
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="text-4xl font-black text-emerald-400">
                  {item.value}
                </h3>

                <p className="mt-3 text-sm font-bold uppercase tracking-wide text-white">
                  {lang === 'ta' ? item.labelTa : item.labelEn}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
