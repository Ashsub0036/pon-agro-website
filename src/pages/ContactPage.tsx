/**
 * PREMIUM CONTACT PAGE — ULTRA MODERN VERSION
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';

import {
  Phone,
  MapPin,
  Clock,
  Check,
  Calculator,
  Send,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  Star,
  Tractor,
  MessageCircle,
} from 'lucide-react';

import { Language } from '../types';
import { TRANSLATIONS, CONTACT_INFO } from '../data';

interface ContactPageProps {
  lang: Language;
}

export default function ContactPage({
  lang,
}: ContactPageProps) {
  const t = TRANSLATIONS[lang];

  const [formName, setFormName] = useState('');
  const [formPhone, setFormPhone] =
    useState('');
  const [formVillage, setFormVillage] =
    useState('');
  const [formTractorHP, setFormTractorHP] =
    useState('45');
  const [formProduct, setFormProduct] =
    useState('Dual Spring Rota Leveler');
  const [formMessage, setFormMessage] =
    useState('');
  const [isSubmitSuccess, setIsSubmitSuccess] =
    useState(false);

  const getCustomSubmissionLink = (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    if (!formName || !formPhone) {
      alert(
        lang === 'ta'
          ? 'பெயர் மற்றும் மொபைல் எண் கட்டாயம்!'
          : 'Name and Phone number are required!'
      );
      return;
    }

    const textPayload = encodeURIComponent(
      `Hi PON AGRO IMPLEMENTS Vandavasi,

Name: ${formName}
Phone: ${formPhone}
Village: ${formVillage}
Tractor HP: ${formTractorHP} HP
Product: ${formProduct}

Requirement:
${formMessage}`
    );

    setIsSubmitSuccess(true);

    window.open(
      `https://wa.me/918870712295?text=${textPayload}`,
      '_blank'
    );
  };

  return (
    <div className="relative overflow-hidden min-h-screen pt-28 pb-24 bg-gradient-to-b from-slate-950 via-black to-slate-950">

      {/* PREMIUM BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        <div className="absolute top-[-10%] left-[-5%] w-[450px] h-[450px] bg-green-500/20 blur-[140px] rounded-full" />

        <div className="absolute bottom-[-10%] right-[-5%] w-[420px] h-[420px] bg-yellow-400/10 blur-[140px] rounded-full" />

        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]" />

      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HERO */}
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          className="text-center mb-20"
        >

          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-green-500/20 bg-green-500/10 text-green-300 text-xs uppercase tracking-[0.2em] font-black mb-6 backdrop-blur-xl">

            <Sparkles className="h-4 w-4" />

            DIRECT FACTORY SUPPORT

          </div>

          <h1 className="text-5xl sm:text-7xl font-black leading-[0.9] tracking-tight max-w-5xl mx-auto">

            <span className="bg-gradient-to-r from-white via-green-100 to-yellow-200 bg-clip-text text-transparent">
              Premium Agricultural Implements
            </span>

          </h1>

          <p className="max-w-3xl mx-auto mt-8 text-slate-400 leading-relaxed text-sm sm:text-base">
            Connect directly with our Vandavasi
            workshop for heavy-duty agricultural
            implements, tractor-compatible
            machinery and genuine spare parts.
          </p>

        </motion.div>

        {/* STATS */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-20">

          {[
            {
              number: '200+',
              label: 'Happy Farmers',
            },
            {
              number: '100%',
              label: 'Workshop Tested',
            },
            {
              number: '6AM - 9PM',
              label: 'WhatsApp Support',
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              transition={{
                type: 'spring',
                stiffness: 200,
                damping: 15,
              }}
              className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.05] backdrop-blur-2xl p-8 text-center shadow-2xl"
            >

              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-transparent to-yellow-400/10 opacity-0 hover:opacity-100 transition-all duration-500" />

              <h3 className="text-5xl font-black bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent">
                {item.number}
              </h3>

              <p className="text-slate-300 font-semibold mt-4">
                {item.label}
              </p>

            </motion.div>
          ))}

        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

          {/* FORM */}
          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.7,
            }}
            className="lg:col-span-7"
          >

            <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.06] backdrop-blur-2xl p-8 sm:p-10 shadow-2xl">

              <div className="absolute top-0 right-0 w-72 h-72 bg-green-500/10 rounded-full blur-3xl" />

              <div className="relative z-10">

                <div className="flex items-center gap-4 mb-10">

                  <div className="h-14 w-14 rounded-2xl bg-green-500/10 flex items-center justify-center">
                    <Calculator className="h-6 w-6 text-green-400" />
                  </div>

                  <div>
                    <h2 className="text-3xl font-black text-white">
                      Get Instant Quotation
                    </h2>

                    <p className="text-slate-400 text-sm mt-1">
                      Factory-direct pricing through WhatsApp
                    </p>
                  </div>

                </div>

                <form
                  onSubmit={
                    getCustomSubmissionLink
                  }
                  className="space-y-6"
                >

                  <div className="grid sm:grid-cols-2 gap-5">

                    <input
                      type="text"
                      required
                      value={formName}
                      onChange={(e) =>
                        setFormName(
                          e.target.value
                        )
                      }
                      placeholder="Full Name"
                      className="w-full h-14 rounded-2xl border border-white/10 bg-white/5 px-5 text-white placeholder:text-slate-400 outline-none transition-all duration-300 focus:ring-4 focus:ring-green-500/20 focus:border-green-500"
                    />

                    <input
                      type="tel"
                      required
                      value={formPhone}
                      onChange={(e) =>
                        setFormPhone(
                          e.target.value
                        )
                      }
                      placeholder="Mobile Number"
                      className="w-full h-14 rounded-2xl border border-white/10 bg-white/5 px-5 text-white placeholder:text-slate-400 outline-none transition-all duration-300 focus:ring-4 focus:ring-green-500/20 focus:border-green-500"
                    />

                  </div>

                  <div className="grid sm:grid-cols-3 gap-5">

                    <input
                      type="text"
                      value={formVillage}
                      onChange={(e) =>
                        setFormVillage(
                          e.target.value
                        )
                      }
                      placeholder="Village"
                      className="w-full h-14 rounded-2xl border border-white/10 bg-white/5 px-5 text-white placeholder:text-slate-400 outline-none transition-all duration-300 focus:ring-4 focus:ring-green-500/20 focus:border-green-500"
                    />

                    <select
                      value={formTractorHP}
                      onChange={(e) =>
                        setFormTractorHP(
                          e.target.value
                        )
                      }
                      className="w-full h-14 rounded-2xl border border-white/10 bg-white/5 px-5 text-white outline-none transition-all duration-300 focus:ring-4 focus:ring-green-500/20 focus:border-green-500"
                    >
                      <option value="30">
                        Below 35 HP
                      </option>

                      <option value="45">
                        35 - 50 HP
                      </option>

                      <option value="55">
                        50 - 65 HP
                      </option>

                    </select>

                    <select
                      value={formProduct}
                      onChange={(e) =>
                        setFormProduct(
                          e.target.value
                        )
                      }
                      className="w-full h-14 rounded-2xl border border-white/10 bg-white/5 px-5 text-white outline-none transition-all duration-300 focus:ring-4 focus:ring-green-500/20 focus:border-green-500"
                    >
                      <option>
                        Dual Spring Leveler
                      </option>

                      <option>
                        Heavy Duty Chassis
                      </option>

                      <option>
                        Bearings & Spares
                      </option>

                    </select>

                  </div>

                  <textarea
                    rows={5}
                    value={formMessage}
                    onChange={(e) =>
                      setFormMessage(
                        e.target.value
                      )
                    }
                    placeholder="Mention your custom requirements..."
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-slate-400 outline-none transition-all duration-300 focus:ring-4 focus:ring-green-500/20 focus:border-green-500"
                  />

                  {isSubmitSuccess && (
                    <div className="flex items-center gap-2 rounded-2xl border border-green-500/20 bg-green-500/10 p-4 text-sm text-green-300 font-semibold">
                      <Check className="h-4 w-4" />

                      Opening WhatsApp...
                    </div>
                  )}

                  <button
                    type="submit"
                    className="group w-full h-16 rounded-2xl bg-green-600 hover:bg-green-700 text-white font-black uppercase tracking-wide flex items-center justify-center gap-3 transition-all duration-500 hover:scale-[1.02] shadow-2xl shadow-green-900/30"
                  >

                    <Send className="h-5 w-5 text-yellow-300" />

                    Get Instant Factory Quotation

                    <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />

                  </button>

                </form>

              </div>

            </div>

          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{
              opacity: 0,
              x: 40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.7,
            }}
            className="lg:col-span-5 space-y-6"
          >

            {[
              {
                icon: MapPin,
                title: 'Workshop Address',
                desc: CONTACT_INFO.addressEn,
              },
              {
                icon: Clock,
                title: 'Working Hours',
                desc:
                  'Monday - Sunday\n8:30 AM — 7:30 PM',
              },
              {
                icon: ShieldCheck,
                title:
                  'Trusted Manufacturing',
                desc:
                  'Built for Tamil Nadu field conditions with premium fabrication.',
              },
            ].map((card, i) => {
              const Icon = card.icon;

              return (
                <motion.div
                  key={i}
                  whileHover={{
                    y: -6,
                    scale: 1.02,
                  }}
                  className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.06] backdrop-blur-2xl p-7 shadow-2xl"
                >

                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-transparent to-yellow-400/10 opacity-0 hover:opacity-100 transition-all duration-500" />

                  <div className="relative z-10 flex items-start gap-4">

                    <div className="h-14 w-14 rounded-2xl bg-green-500/10 flex items-center justify-center shrink-0">
                      <Icon className="h-6 w-6 text-green-400" />
                    </div>

                    <div>
                      <h3 className="text-xl font-black text-white mb-2">
                        {card.title}
                      </h3>

                      <p className="text-slate-400 text-sm leading-relaxed whitespace-pre-line">
                        {card.desc}
                      </p>
                    </div>

                  </div>

                </motion.div>
              );
            })}

          </motion.div>

        </div>

        {/* TESTIMONIALS */}
        <div className="grid sm:grid-cols-3 gap-6 mt-20">

          {[
            'Very strong build quality.',
            'Perfect for wetland farming.',
            'Fast delivery from Vandavasi.',
          ].map((review, i) => (
            <motion.div
              key={i}
              whileHover={{
                y: -8,
              }}
              className="rounded-[28px] border border-white/10 bg-white/[0.05] backdrop-blur-xl p-7 shadow-2xl"
            >

              <div className="flex items-center gap-1 text-yellow-400 mb-4">

                <Star className="h-4 w-4 fill-yellow-400" />
                <Star className="h-4 w-4 fill-yellow-400" />
                <Star className="h-4 w-4 fill-yellow-400" />
                <Star className="h-4 w-4 fill-yellow-400" />
                <Star className="h-4 w-4 fill-yellow-400" />

              </div>

              <p className="text-slate-300 leading-relaxed">
                {review}
              </p>

            </motion.div>
          ))}

        </div>

      </div>

      {/* FLOATING WHATSAPP */}
      <a
        href={CONTACT_INFO.whatsapp}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 h-16 w-16 rounded-full bg-green-500 flex items-center justify-center shadow-2xl shadow-green-500/40 hover:scale-110 transition-all duration-500"
      >

        <MessageCircle className="h-8 w-8 text-white" />

      </a>

    </div>
  );
}