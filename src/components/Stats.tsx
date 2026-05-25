/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import {
  ShieldCheck,
  Award,
  PhoneCall,
  Hammer,
  Users,
  Settings,
  MapPin,
  Zap,
  ArrowUpRight,
} from 'lucide-react';

import { Language } from '../types';
import { TRANSLATIONS, STATS } from '../data';

interface StatsProps {
  lang: Language;
}

function StatCounter({
  value,
  duration = 1800,
}: {
  value: number;
  duration?: number;
}) {
  const [count, setCount] = useState(0);

  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    margin: '-100px',
  });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;

    const end = value;

    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  return <span ref={ref}>{count}</span>;
}

export default function Stats({ lang }: StatsProps) {
  const t = TRANSLATIONS[lang];

  const renderIcon = (name: string) => {
    switch (name) {
      case 'Zap':
        return <Zap className="h-6 w-6 text-secondary-yellow" />;

      case 'Users':
        return <Users className="h-6 w-6 text-primary-green" />;

      case 'Settings':
        return <Settings className="h-6 w-6 text-primary-green" />;

      case 'MapPin':
        return <MapPin className="h-6 w-6 text-primary-green" />;

      default:
        return <Award className="h-6 w-6 text-primary-green" />;
    }
  };

  const trustBadges = [
    {
      id: 'tb1',
      icon: <Hammer className="h-7 w-7 text-primary-green" />,
      titleEn: 'Direct Factory Manufacturing',
      titleTa: 'நேரடி தொழிற்சாலை தயாரிப்பு',
      descEn:
        'No middlemen. Built directly in our Vandavasi workshop with premium agricultural steel.',
      descTa:
        'இடைத்தரகர்கள் இல்லை. வந்தவாசி தொழிற்சாலையில் நேரடியாக தயாரிப்பு.',
    },

    {
      id: 'tb2',
      icon: <ShieldCheck className="h-7 w-7 text-green-600" />,
      titleEn: 'Field-Tested Strength',
      titleTa: 'களத்தில் சோதிக்கப்பட்ட தரம்',
      descEn:
        'Engineered for hard soil, wet fields and long-term heavy farming usage.',
      descTa:
        'கடினமான நிலம் மற்றும் நீண்டநாள் விவசாய பயன்பாட்டிற்கு சிறப்பு வடிவமைப்பு.',
    },

    {
      id: 'tb3',
      icon: <Award className="h-7 w-7 text-secondary-yellow" />,
      titleEn: 'Trusted Tamil Nadu Brand',
      titleTa: 'நம்பகமான தமிழக பிராண்ட்',
      descEn:
        'Designed specifically for Tamil Nadu farming conditions and tractor compatibility.',
      descTa:
        'தமிழக விவசாய நிலத்திற்கும் டிராக்டர் மாடல்களுக்கும் ஏற்ற வடிவமைப்பு.',
    },

    {
      id: 'tb4',
      icon: <PhoneCall className="h-7 w-7 text-primary-green" />,
      titleEn: 'Direct Owner Support',
      titleTa: 'உரிமையாளர் நேரடி உதவி',
      descEn:
        'Talk directly with workshop experts for service, spare parts and enquiries.',
      descTa:
        'சேவை மற்றும் உதிரிபாகங்களுக்கு நேரடியாக தொழிற்சாலை உதவி.',
    },
  ];

  return (
    <section
      id="trust"
      className="py-24 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[-10%] w-[350px] h-[350px] bg-primary-green/10 rounded-full blur-[120px]" />

        <div className="absolute bottom-[0%] right-[-10%] w-[350px] h-[350px] bg-secondary-yellow/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Section */}
        <div className="grid lg:grid-cols-12 gap-14 items-center mb-24">
          {/* Left */}
          <div className="lg:col-span-5">
            <span className="inline-flex items-center gap-2 bg-primary-green/10 text-primary-green px-4 py-2 rounded-full text-xs font-extrabold tracking-[0.2em] uppercase mb-6">
              <span className="w-2 h-2 rounded-full bg-primary-green animate-pulse" />

              {lang === 'ta'
                ? 'விவசாய நம்பிக்கை'
                : 'TRUSTED BY FARMERS'}
            </span>

            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-gray-950 leading-[1.05] mb-6">
              {t.statsTitle}
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
              {t.statsSub}
            </p>

            <div className="mt-8 flex items-center gap-3">
              <div className="flex -space-x-3">
                {[1, 2, 3].map((item) => (
                  <div
                    key={item}
                    className="w-11 h-11 rounded-full border-4 border-white bg-primary-green flex items-center justify-center text-white text-xs font-bold shadow-md"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <div>
                <p className="text-sm font-bold text-gray-900">
                  5000+ Farmers Trust PON AGRO
                </p>

                <p className="text-xs text-gray-500">
                  Across Tamil Nadu
                </p>
              </div>
            </div>
          </div>

          {/* Right Stats */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-4 gap-5">
            {STATS.map((stat, index) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                className="group relative bg-white border border-gray-100 rounded-3xl p-6 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden"
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-primary-green/5 to-secondary-yellow/10 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500">
                    {renderIcon(stat.iconName)}
                  </div>

                  <div className="text-4xl font-black text-gray-950 leading-none mb-2">
                    <StatCounter value={stat.count} />
                    {stat.suffix}
                  </div>

                  <p className="text-xs font-bold uppercase tracking-widest text-gray-500 leading-relaxed">
                    {lang === 'ta'
                      ? stat.labelTa
                      : stat.labelEn}
                  </p>

                  <div className="mt-5 flex items-center text-primary-green text-xs font-bold gap-1 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <span>Trusted Quality</span>

                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Trust Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center bg-yellow-400/15 border border-yellow-400/20 text-secondary-yellow px-4 py-2 rounded-full text-xs font-black uppercase tracking-[0.2em] mb-5">
            {lang === 'ta'
              ? '100% அசல் தரம்'
              : '100% AUTHENTIC QUALITY'}
          </span>

          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-gray-950 mb-5">
            {t.trustTitle}
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed">
            {t.trustSub}
          </p>
        </div>

        {/* Trust Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {trustBadges.map((badge, index) => (
            <motion.div
              key={badge.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -10,
              }}
              className="group relative rounded-3xl border border-white/60 bg-white/80 backdrop-blur-xl p-7 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              {/* Card Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-primary-green/5 to-secondary-yellow/10 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-green-50 flex items-center justify-center border border-green-100 mb-6 shadow-inner">
                  {badge.icon}
                </div>

                <h3 className="text-xl font-black text-gray-950 mb-3 leading-snug">
                  {lang === 'ta'
                    ? badge.titleTa
                    : badge.titleEn}
                </h3>

                <p className="text-gray-600 leading-relaxed text-sm">
                  {lang === 'ta'
                    ? badge.descTa
                    : badge.descEn}
                </p>

                <div className="mt-8 pt-5 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-widest text-primary-green">
                    Farmer Approved
                  </span>

                  <div className="w-2.5 h-2.5 rounded-full bg-primary-green animate-pulse" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}