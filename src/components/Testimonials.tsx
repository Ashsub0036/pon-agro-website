/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef } from 'react';

import { motion } from 'framer-motion';

import {
  Quote,
  Star,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Play,
} from 'lucide-react';

import { Language } from '../types';

import {
  TRANSLATIONS,
  TESTIMONIALS,
} from '../data';

interface TestimonialsProps {
  lang: Language;
}

export default function Testimonials({
  lang,
}: TestimonialsProps) {
  const t = TRANSLATIONS[lang];

  const scrollRef =
    useRef<HTMLDivElement>(null);

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 450,
        behavior: 'smooth',
      });
    }
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -450,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white py-32"
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute left-[-10%] top-0 h-[450px] w-[450px] rounded-full bg-primary-green/10 blur-[140px]" />

      <div className="absolute bottom-0 right-[-10%] h-[450px] w-[450px] rounded-full bg-secondary-yellow/10 blur-[140px]" />

      {/* GRID */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:5rem_5rem] opacity-[0.03]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="mb-20 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">

          {/* LEFT */}
          <div className="max-w-3xl">

            <span className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary-green/10 px-5 py-2 text-xs font-black uppercase tracking-[0.25em] text-primary-green">

              <span className="h-2 w-2 animate-pulse rounded-full bg-primary-green" />

              {lang === 'ta'
                ? 'விவசாயிகள் கருத்துகள்'
                : 'REAL FARMER REVIEWS'}

            </span>

            <h2 className="text-5xl font-black leading-[1.05] tracking-tight text-gray-950 md:text-6xl">

              {t.testTitle}

            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">

              {t.testSub}

            </p>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-5">

            {/* RATING */}
            <div className="hidden items-center gap-4 rounded-[24px] border border-gray-200 bg-white px-6 py-5 shadow-sm sm:flex">

              <div className="flex items-center gap-1">

                {Array.from({
                  length: 5,
                }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-secondary-yellow text-secondary-yellow"
                  />
                ))}

              </div>

              <div>

                <p className="text-sm font-black text-gray-900">
                  4.9/5 Rating
                </p>

                <p className="text-xs text-gray-500">
                  Trusted By Farmers
                </p>

              </div>
            </div>

            {/* BUTTONS */}
            <div className="flex items-center gap-3">

              <button
                onClick={scrollLeft}
                className="group flex h-14 w-14 items-center justify-center rounded-2xl border border-gray-200 bg-white text-gray-700 shadow-sm transition-all duration-300 hover:border-primary-green hover:text-primary-green hover:shadow-xl"
              >
                <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
              </button>

              <button
                onClick={scrollRight}
                className="group flex h-14 w-14 items-center justify-center rounded-2xl border border-gray-200 bg-white text-gray-700 shadow-sm transition-all duration-300 hover:border-primary-green hover:text-primary-green hover:shadow-xl"
              >
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>

            </div>
          </div>
        </div>

        {/* TESTIMONIAL TRACK */}
        <div
          ref={scrollRef}
          className="scrollbar-none flex gap-8 overflow-x-auto pb-6 snap-x snap-mandatory"
          style={{
            scrollSnapType:
              'x mandatory',
          }}
        >
          {TESTIMONIALS.map(
            (testimonial, index) => {
              const initials =
                testimonial.nameEn
                  .split(' ')
                  .map((n) => n[0])
                  .join('')
                  .toUpperCase();

              return (
                <motion.div
                  key={testimonial.id}
                  initial={{
                    opacity: 0,
                    y: 80,
                    scale: 0.9,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.7,
                    delay:
                      index * 0.1,
                    ease: 'easeOut',
                  }}
                  whileHover={{
                    y: -14,
                    scale: 1.02,
                  }}
                  className="group relative min-w-[340px] max-w-[460px] snap-center overflow-hidden rounded-[38px] border border-white/50 bg-white/70 p-8 shadow-[0_10px_60px_rgba(0,0,0,0.08)] backdrop-blur-2xl transition-all duration-700 hover:border-primary-green/30 hover:shadow-[0_25px_80px_rgba(16,185,129,0.18)] sm:min-w-[460px]"
                >
                  {/* GLOW */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-green/10 via-transparent to-secondary-yellow/10 opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

                  {/* FLOATING BLUR */}
                  <div className="absolute -right-24 -top-24 h-48 w-48 rounded-full bg-primary-green/10 blur-[90px]" />

                  {/* QUOTE */}
                  <div className="absolute right-7 top-7 opacity-[0.07] transition-all duration-700 group-hover:scale-110 group-hover:opacity-[0.12]">

                    <Quote className="h-28 w-28 text-primary-green" />

                  </div>

                  <div className="relative z-10 flex h-full flex-col">

                    {/* TOP */}
                    <div className="mb-7 flex items-center justify-between">

                      {/* STARS */}
                      <div className="flex items-center gap-1">

                        {Array.from({
                          length:
                            testimonial.rating,
                        }).map(
                          (_, i) => (
                            <Star
                              key={i}
                              className="h-5 w-5 fill-secondary-yellow text-secondary-yellow drop-shadow-sm"
                            />
                          )
                        )}

                      </div>

                      {/* VERIFIED */}
                      <div className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-4 py-2 text-[10px] font-black uppercase tracking-[0.25em] text-primary-green shadow-sm">

                        <Play className="h-3 w-3 fill-primary-green" />

                        Verified Farmer

                      </div>
                    </div>

                    {/* FEEDBACK */}
                    <blockquote className="flex-1 text-[17px] font-medium leading-[1.9] tracking-[0.01em] text-gray-700">

                      “
                      {lang === 'ta'
                        ? testimonial.feedbackTa
                        : testimonial.feedbackEn}
                      ”

                    </blockquote>

                    {/* USER */}
                    <div className="mt-10 flex items-center gap-5 border-t border-gray-100 pt-6">

                      {/* AVATAR */}
                      <div className="relative shrink-0">

                        <div className="flex h-16 w-16 items-center justify-center rounded-[22px] bg-gradient-to-br from-primary-green to-emerald-700 text-lg font-black text-white shadow-[0_10px_30px_rgba(16,185,129,0.4)]">

                          {initials}

                        </div>

                        <div className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-white shadow-md">

                          <CheckCircle2 className="h-5 w-5 fill-white text-green-600" />

                        </div>
                      </div>

                      {/* DETAILS */}
                      <div className="flex-1">

                        <h4 className="text-lg font-black tracking-tight text-gray-950">

                          {lang === 'ta'
                            ? testimonial.nameTa
                            : testimonial.nameEn}

                        </h4>

                        <p className="mt-2 text-[11px] font-bold uppercase tracking-[0.25em] text-gray-400">

                          {lang === 'ta'
                            ? testimonial.villageTa
                            : testimonial.villageEn}

                        </p>

                        {/* PRODUCT */}
                        <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-green-100 bg-green-50 px-4 py-2">

                          <span className="h-2 w-2 animate-pulse rounded-full bg-primary-green" />

                          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-green">

                            {lang === 'ta'
                              ? testimonial.productTa
                              : testimonial.productEn}

                          </span>

                        </div>
                      </div>
                    </div>
                  </div>

                  {/* BOTTOM SHINE */}
                  <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-primary-green/60 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
                </motion.div>
              );
            }
          )}
        </div>

        {/* BOTTOM STRIP */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-6 border-t border-gray-200 pt-8">

          <div className="flex items-center gap-2">

            <CheckCircle2 className="h-5 w-5 text-primary-green" />

            <span className="text-sm font-bold text-gray-700">
              100% Verified Farmers
            </span>

          </div>

          <div className="hidden h-1.5 w-1.5 rounded-full bg-gray-300 sm:block" />

          <div className="flex items-center gap-2">

            <Star className="h-5 w-5 fill-secondary-yellow text-secondary-yellow" />

            <span className="text-sm font-bold text-gray-700">
              5000+ Happy Customers
            </span>

          </div>

          <div className="hidden h-1.5 w-1.5 rounded-full bg-gray-300 sm:block" />

          <div className="flex items-center gap-2">

            <Play className="h-5 w-5 fill-primary-green text-primary-green" />

            <span className="text-sm font-bold text-gray-700">
              Real Field Performance
            </span>

          </div>
        </div>
      </div>
    </section>
  );
}