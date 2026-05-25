/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'framer-motion';

import {
  Star,
  CheckCircle,
  Search,
  Users,
  ArrowUpRight,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';

import { Language } from '../types';

interface ReviewsPageProps {
  lang: Language;
}

interface PurchaseRecord {
  date: string;
  customer: string;
  items: string;
  payment: 'CASH' | 'UPI';
  amount: string;
  reviewTextEn: string;
  reviewTextTa: string;
  rating: number;
}

export default function ReviewsPage({
  lang,
}: ReviewsPageProps) {
  const [searchTerm, setSearchTerm] =
    useState('');

  const [
    paymentFilter,
    setPaymentFilter,
  ] = useState<
    'ALL' | 'CASH' | 'UPI'
  >('ALL');

 const LEDGER_DATA: PurchaseRecord[] = [
  {
    date: '2026-03-09',
    customer: 'SASI BHUSHAN REDDY',
    items: '1 items',
    payment: 'CASH',
    amount: '₹5,400',
    reviewTextEn:
      'High quality carbon steel spares! The delivery was extremely quick directly from Vandavasi and fits our rotavator adapter perfectly. Highly reliable service.',
    reviewTextTa:
      'முழுமையான தரமான உதிரிபாகங்கள்! காஞ்சிபுரம் பைபாஸ் அருகில் உள்ள வந்தவாசி பட்டறையிலிருந்து உடனே கிடைத்தது. அருமையான பொருத்தம்.',
    rating: 5,
  },

  {
    date: '2025-12-17',
    customer: 'BALU',
    items: '1 items',
    payment: 'CASH',
    amount: '₹4,600',
    reviewTextEn:
      'Extremely durable double-coat structural paint on the spares. Fits and locks completely flat. Works flawlessly on flooded clay fields.',
    reviewTextTa:
      'வந்தவாசி பொன் அக்ரோவில் அசல் உதிரிபாகம் வாங்கினேன். தண்ணீரில் வேலை செய்தாலும் துருப்பிடிக்காத தரம்.',
    rating: 5,
  },

  {
    date: '2026-04-16',
    customer: 'MARUTHAVANAN',
    items: '1 items',
    payment: 'CASH',
    amount: '₹5,200',
    reviewTextEn:
      'Superb strength and finish. The Boron steel material really does make a massive difference.',
    reviewTextTa:
      'தரமான போரான் இரும்பு பலம். மற்ற கடைகளில் வாங்குவதை விட இரண்டு மடங்கு கூடுதல் நாட்களாக உழைக்கிறது.',
    rating: 5,
  },

  {
    date: '2026-03-09',
    customer: 'KARTHIKEYAN',
    items: '1 items',
    payment: 'CASH',
    amount: '₹4,900',
    reviewTextEn:
      'Value for money product bro. Bought replacement blade kit. Exceptionally sharp and durable.',
    reviewTextTa:
      'விவசாயிகளுக்கு ஏற்ற குறைந்த கட்டணத்தில் நிறைந்த தரமான உதிரிபாகப் பெட்டி.',
    rating: 5,
  },

  {
    date: '2026-04-16',
    customer: 'SENTHILNATHAN',
    items: '1 items',
    payment: 'UPI',
    amount: '₹35,000',
    reviewTextEn:
      'Bought the PON Rota Leveler for wet paddy soil. It levels completely flat in one pass.',
    reviewTextTa:
      'சேற்று உழவில் ஒரே படல உழவில் நிலத்தை கச்சிதமாக சமப்படுத்துகிறது.',
    rating: 5,
  },

  {
    date: '2026-01-14',
    customer: 'ARUN',
    items: '1 items',
    payment: 'UPI',
    amount: '₹4,700',
    reviewTextEn:
      'Highly recommended for TN farmers. Premium carbon bearings and clean welds.',
    reviewTextTa:
      'சேறு மற்றும் தூசிகள் உள்ளே புகாத வண்ணம் வடிவமைக்கப்பட்ட கார்பன் பேரிங்ஸ்.',
    rating: 5,
  },

  {
    date: '2026-02-13',
    customer: 'THAMIZHARASAN.S',
    items: '1 items',
    payment: 'UPI',
    amount: '₹30,000',
    reviewTextEn:
      'Exceptional heavy-duty performance. Absolutely no bending or cracks.',
    reviewTextTa:
      'கரடுமுரடான நிலத்தில்கூட வளைவோ அல்லது உடையோ இல்லாமல் அபாரமாக உழைக்கிறது.',
    rating: 5,
  },

  {
    date: '2026-03-12',
    customer: 'MUTHUKRISHNAN',
    items: '1 items',
    payment: 'UPI',
    amount: '₹34,500',
    reviewTextEn:
      'Best engineering in Rota levelers. Smooth operation and excellent vibration control.',
    reviewTextTa:
      'இரட்டை ஸ்பிரிங் தொழில்நுட்பம் டிராக்டரின் அதிர்வை அபாரமாகத் தாங்குகிறது.',
    rating: 5,
  },

  {
    date: '2026-04-16',
    customer: 'HARIGARAN',
    items: '1 items',
    payment: 'UPI',
    amount: '₹33,500',
    reviewTextEn:
      'Direct factory pricing with unmatched structural robustness.',
    reviewTextTa:
      'வந்தவாசி பட்டறையில் நேரடியாக வாங்கியதால் ஏஜென்சி கமிஷன் மிச்சமானது.',
    rating: 5,
  },

  {
    date: '2026-03-31',
    customer: 'PALANI',
    items: '1 items',
    payment: 'CASH',
    amount: '₹5,200',
    reviewTextEn:
      'Amazing durability under extreme stress. Fits our standard hitches smoothly.',
    reviewTextTa:
      'உயர்ந்த ரக இரும்பு கொண்டு வார்க்கப்பட்ட கருவிகள்.',
    rating: 5,
  },

  {
    date: '2026-04-16',
    customer: 'BHARATHI',
    items: '1 items',
    payment: 'CASH',
    amount: '₹4,700',
    reviewTextEn:
      'Heavy duty blades kit. Soil grinding feels smooth with optimized curves.',
    reviewTextTa:
      'போரான் கலந்த ஹெவி பிளேடுகள். நெல் வயலுக்கு கச்சிதமான வளைவுகள்.',
    rating: 5,
  },

  {
    date: '2026-02-27',
    customer: 'LAKSHMIKANDAN',
    items: '1 items',
    payment: 'UPI',
    amount: '₹3,200',
    reviewTextEn:
      'Excellent replacement spares kit. Zero slippage in muddy operations.',
    reviewTextTa:
      'சேற்றில் ஓட்டினாலும் கச்சிதமான பிடிமானம் தருகிறது.',
    rating: 5,
  },

  {
    date: '2026-03-09',
    customer: 'KUMAR',
    items: '1 items',
    payment: 'CASH',
    amount: '₹4,900',
    reviewTextEn:
      'Very tough and highly reliable components. Highly satisfied.',
    reviewTextTa:
      'மிகவும் உறுதியான பொருட்கள் மற்றும் அசல் இரும்பு தரம்.',
    rating: 5,
  },

  {
    date: '2026-01-26',
    customer: 'PALANI .K',
    items: '1 items',
    payment: 'UPI',
    amount: '₹4,700',
    reviewTextEn:
      'Excellent PTO conversion shafts. High wear tolerance and zero vibration.',
    reviewTextTa:
      'எந்த ஒரு அதிர்வும் இன்றி சுழல்கிறது.',
    rating: 5,
  },

  {
    date: '2026-02-06',
    customer: 'THIRUPATHI AGRO AGENCY',
    items: '1 items',
    payment: 'UPI',
    amount: '₹4,700',
    reviewTextEn:
      'Phenomenal customer feedback across rural villages.',
    reviewTextTa:
      'விவசாயிகளிடமிருந்து மிகுந்த பாராட்டு கிடைத்துள்ளது.',
    rating: 5,
  },
];

  const filteredLedger =
    LEDGER_DATA.filter((record) => {
      const matchesSearch =
        record.customer
          .toLowerCase()
          .includes(
            searchTerm.toLowerCase()
          );

      const matchesPayment =
        paymentFilter === 'ALL' ||
        record.payment ===
          paymentFilter;

      return (
        matchesSearch &&
        matchesPayment
      );
    });

  return (
    <div className="relative min-h-screen overflow-hidden bg-black pt-32 pb-24 text-white">

      {/* BACKGROUND */}
      <div className="fixed inset-0 -z-10 overflow-hidden">

        <div className="absolute left-[-10%] top-[-10%] h-[500px] w-[500px] rounded-full bg-emerald-500/10 blur-[160px]" />

        <div className="absolute bottom-[-10%] right-[-10%] h-[500px] w-[500px] rounded-full bg-yellow-500/10 blur-[160px]" />

        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:5rem_5rem]" />

      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* HERO */}
        <motion.div
          initial={{
            opacity: 0,
            y: 60,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
          className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/5 p-8 backdrop-blur-3xl shadow-[0_20px_80px_rgba(0,0,0,0.35)] sm:p-14"
        >
          <div className="absolute right-[-10%] top-[-10%] h-[400px] w-[400px] rounded-full bg-emerald-500/10 blur-[140px]" />

          <div className="relative z-10 max-w-3xl">

            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-5 py-2 text-xs font-black uppercase tracking-[0.25em] text-emerald-300">

              <Sparkles className="h-4 w-4" />

              VERIFIED FARMER REVIEWS

            </div>

            <h1 className="bg-gradient-to-r from-white via-white to-slate-400 bg-clip-text text-5xl font-black leading-none text-transparent md:text-7xl">

              {lang === 'ta'
                ? 'விவசாயிகளின் நம்பிக்கை'
                : 'Trusted By Real Farmers'}

            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">

              {lang === 'ta'
                ? 'வந்தவாசி பொன் அக்ரோ தயாரிப்புகளை பயன்படுத்தும் விவசாயிகளின் உண்மையான கருத்துக்கள்.'
                : 'Explore premium customer feedback, verified field experiences and trusted farmer reviews from across Tamil Nadu.'}

            </p>

          </div>
        </motion.div>

        {/* STATS */}
        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">

          {/* CARD */}
          {[
            {
              icon: (
                <Users className="h-7 w-7" />
              ),
              title:
                '200+ Customers',
              subtitle:
                'Trusted Across TN',
            },

            {
              icon: (
                <Star className="h-7 w-7 fill-yellow-400 text-yellow-400" />
              ),
              title:
                '4.9 / 5 Ratings',
              subtitle:
                'Premium Satisfaction',
            },

            {
              icon: (
                <ShieldCheck className="h-7 w-7" />
              ),
              title:
                '100% Verified',
              subtitle:
                'Real Billing Records',
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-2xl shadow-[0_10px_40px_rgba(0,0,0,0.2)] transition-all duration-700 hover:shadow-[0_20px_80px_rgba(16,185,129,0.18)]"
            >
              <div className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100 bg-gradient-to-br from-emerald-500/10 via-transparent to-yellow-500/10" />

              <div className="relative z-10">

                <div className="mb-5 inline-flex rounded-2xl bg-emerald-500/10 p-4 text-emerald-400">
                  {item.icon}
                </div>

                <h3 className="text-3xl font-black text-white">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm font-semibold uppercase tracking-widest text-slate-400">
                  {item.subtitle}
                </p>

              </div>
            </motion.div>
          ))}
        </div>

        {/* LEDGER */}
        <section className="mt-20">

          <div className="overflow-hidden rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-3xl shadow-[0_20px_80px_rgba(0,0,0,0.25)]">

            {/* TOP */}
            <div className="flex flex-col gap-5 border-b border-white/10 bg-black/20 p-8 lg:flex-row lg:items-center lg:justify-between">

              <div>

                <span className="text-xs font-black uppercase tracking-[0.25em] text-emerald-400">
                  OFFICIAL RECORDS
                </span>

                <h2 className="mt-3 text-3xl font-black text-white">
                  Customer Ledger
                </h2>

              </div>

              {/* FILTERS */}
              <div className="flex flex-col gap-3 sm:flex-row">

                <div className="relative">

                  <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

                  <input
                    type="text"
                    placeholder="Search customer..."
                    value={searchTerm}
                    onChange={(e) =>
                      setSearchTerm(
                        e.target.value
                      )
                    }
                    className="rounded-2xl border border-white/10 bg-white/5 py-3 pl-11 pr-5 text-sm text-white outline-none backdrop-blur-xl placeholder:text-slate-500 focus:border-emerald-500"
                  />

                </div>

                <div className="flex rounded-2xl border border-white/10 bg-white/5 p-1 backdrop-blur-xl">

                  {[
                    'ALL',
                    'CASH',
                    'UPI',
                  ].map((mode) => (
                    <button
                      key={mode}
                      onClick={() =>
                        setPaymentFilter(
                          mode as any
                        )
                      }
                      className={`rounded-xl px-5 py-3 text-xs font-black uppercase tracking-wider transition-all duration-300 ${
                        paymentFilter ===
                        mode
                          ? 'bg-emerald-500 text-black shadow-2xl shadow-emerald-500/30'
                          : 'text-slate-300 hover:bg-white/5'
                      }`}
                    >
                      {mode}
                    </button>
                  ))}

                </div>
              </div>
            </div>

            {/* TABLE */}
            <div className="overflow-x-auto">

              <table className="w-full">

                <thead>

                  <tr className="border-b border-white/10 text-left text-xs uppercase tracking-[0.25em] text-slate-400">

                    <th className="px-8 py-5">
                      Date
                    </th>

                    <th className="px-8 py-5">
                      Customer
                    </th>

                    <th className="px-8 py-5">
                      Items
                    </th>

                    <th className="px-8 py-5">
                      Payment
                    </th>

                    <th className="px-8 py-5 text-right">
                      Amount
                    </th>

                  </tr>

                </thead>

                <tbody>

                  {filteredLedger.map(
                    (
                      record,
                      index
                    ) => (
                      <motion.tr
                        key={index}
                        whileHover={{
                          scale: 1.01,
                        }}
                        className="border-b border-white/5 transition-all duration-300 hover:bg-emerald-500/5"
                      >
                        <td className="px-8 py-6 text-sm text-slate-400">
                          {record.date}
                        </td>

                        <td className="px-8 py-6 font-black uppercase text-white">
                          {
                            record.customer
                          }
                        </td>

                        <td className="px-8 py-6 text-slate-300">
                          {
                            record.items
                          }
                        </td>

                        <td className="px-8 py-6">

                          <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-xs font-black uppercase tracking-wider text-emerald-300">

                            {
                              record.payment
                            }

                          </span>

                        </td>

                        <td className="px-8 py-6 text-right font-black text-white">
                          {
                            record.amount
                          }
                        </td>
                      </motion.tr>
                    )
                  )}

                </tbody>

              </table>
            </div>
          </div>
        </section>

        {/* REVIEWS */}
        <section className="mt-20">

          <div className="mb-10">

            <h2 className="text-4xl font-black text-white">
              Detailed Reviews
            </h2>

            <p className="mt-3 text-slate-400">
              Real experiences from
              verified buyers.
            </p>

          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">

            {LEDGER_DATA.map(
              (card, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{
                    y: -10,
                    scale: 1.02,
                  }}
                  className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-7 backdrop-blur-2xl shadow-[0_10px_40px_rgba(0,0,0,0.18)] transition-all duration-700 hover:shadow-[0_20px_80px_rgba(16,185,129,0.18)]"
                >
                  <div className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100 bg-gradient-to-br from-emerald-500/10 via-transparent to-yellow-500/10" />

                  <div className="relative z-10">

                    {/* TOP */}
                    <div className="mb-6 flex items-start justify-between">

                      <div className="flex items-center gap-4">

                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/10 text-sm font-black text-emerald-300">

                          {card.customer
                            .split(' ')
                            .map(
                              (n) =>
                                n[0]
                            )
                            .join('')
                            .slice(0, 2)}

                        </div>

                        <div>

                          <h3 className="text-sm font-black uppercase text-white">
                            {
                              card.customer
                            }
                          </h3>

                          <div className="mt-2 flex items-center gap-2 text-[10px] font-black uppercase tracking-wider text-emerald-400">

                            <CheckCircle className="h-3 w-3" />

                            Verified Buyer

                          </div>

                        </div>

                      </div>

                      <div className="flex gap-1">

                        {[
                          ...Array(
                            card.rating
                          ),
                        ].map(
                          (
                            _,
                            i
                          ) => (
                            <Star
                              key={i}
                              className="h-4 w-4 fill-yellow-400 text-yellow-400"
                            />
                          )
                        )}

                      </div>
                    </div>

                    {/* REVIEW */}
                    <p className="leading-relaxed text-slate-300">

                      "
                      {lang === 'ta'
                        ? card.reviewTextTa
                        : card.reviewTextEn}
                      "

                    </p>

                    {/* FOOTER */}
                    <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-5">

                      <span className="text-xs font-bold uppercase tracking-wider text-slate-500">

                        {card.date}

                      </span>

                      <span className="rounded-full bg-white/5 px-4 py-2 text-xs font-black text-white">

                        {card.amount}

                      </span>

                    </div>

                  </div>
                </motion.div>
              )
            )}

          </div>
        </section>

        {/* CTA */}
        <section className="mt-24">

          <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-br from-emerald-500/20 via-black to-black p-10 backdrop-blur-3xl shadow-[0_20px_100px_rgba(16,185,129,0.18)] sm:p-16">

            <div className="absolute right-[-10%] top-[-10%] h-[400px] w-[400px] rounded-full bg-emerald-500/20 blur-[120px]" />

            <div className="relative z-10 mx-auto max-w-3xl text-center">

              <span className="inline-flex rounded-full border border-emerald-500/20 bg-emerald-500/10 px-5 py-2 text-xs font-black uppercase tracking-[0.25em] text-emerald-300">

                PREMIUM IMPLEMENTS

              </span>

              <h2 className="mt-6 text-4xl font-black leading-tight text-white md:text-6xl">

                Buy Direct From
                Workshop

              </h2>

              <p className="mt-6 text-lg leading-relaxed text-slate-300">

                Trusted by hundreds
                of Tamil Nadu farmers
                for durability,
                performance and
                premium fabrication.

              </p>

              <a
                href="https://wa.me/918870712295"
                target="_blank"
                rel="noreferrer"
                className="mt-10 inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-emerald-400 to-emerald-500 px-8 py-4 text-sm font-black uppercase tracking-wider text-black shadow-[0_10px_40px_rgba(16,185,129,0.35)] transition-all duration-500 hover:scale-105 hover:shadow-[0_20px_80px_rgba(16,185,129,0.5)]"
              >
                Connect on WhatsApp

                <ArrowUpRight className="h-5 w-5" />

              </a>

            </div>
          </div>
        </section>

      </div>
    </div>
  );
}