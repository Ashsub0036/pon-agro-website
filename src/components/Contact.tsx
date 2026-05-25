/**
 * PREMIUM CONTACT SECTION
 * Cinematic Corporate Minimal Agro UI
 */

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  MapPin,
  Phone,
  Clock,
  MessageSquare,
  CheckCircle,
  Sparkles,
  ShieldCheck,
  Truck,
  Wrench,
  Compass,
} from 'lucide-react';

import { Language } from '../types';
import { TRANSLATIONS, CONTACT_INFO, PRODUCTS, IMAGES } from '../data';

interface ContactProps {
  lang: Language;
}

export default function Contact({ lang }: ContactProps) {
  const t = TRANSLATIONS[lang];

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [village, setVillage] = useState('');
  const [selectedProduct, setSelectedProduct] = useState('');
  const [notes, setNotes] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `Hi PON AGRO IMPLEMENTS,
Name: ${name}
Phone: ${phone}
Village: ${village}
Product: ${selectedProduct}
Notes: ${notes}`;

    const whatsappLink = `https://wa.me/918870712295?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappLink, '_blank');

    setIsSuccess(true);

    setTimeout(() => {
      setIsSuccess(false);
    }, 4000);
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gradient-to-b from-black via-emerald-950 to-black py-20 text-white"
    >
      {/* Glow Effects */}
      <div className="absolute top-0 left-0 h-[400px] w-[400px] rounded-full bg-emerald-500/10 blur-[140px]" />
      <div className="absolute bottom-0 right-0 h-[350px] w-[350px] rounded-full bg-yellow-500/10 blur-[120px]" />

      {/* Grain Texture */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-4xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-white/5 px-4 py-2 text-[11px] font-black uppercase tracking-[0.3em] text-emerald-300 backdrop-blur-xl">
            <Sparkles className="h-3.5 w-3.5" />
            {lang === 'ta' ? 'தொடர்பு கொள்ளுங்கள்' : 'CONTACT OUR WORKSHOP'}
          </span>

          <h2 className="mt-6 text-5xl font-black leading-[0.95] tracking-tight text-white md:text-7xl">
            {t.contactTitle}
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg">
            {t.contactSub}
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-6"
          >
            <div className="overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-2xl">

              {/* MAP */}
              <div className="overflow-hidden border-b border-white/10">
                <iframe
                  src={CONTACT_INFO.mapEmbedUrl}
                  className="h-[320px] w-full"
                  loading="lazy"
                  title="PON AGRO MAP"
                />
              </div>

              {/* IMAGE */}
              <div className="relative h-[260px] overflow-hidden">
                <img
                  src={IMAGES.workshopDetail}
                  alt="Workshop"
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                <div className="absolute bottom-6 left-6">
                  <h3 className="text-2xl font-black text-white">
                    PON AGRO IMPLEMENTS
                  </h3>

                  <p className="mt-2 text-sm text-slate-300">
                    {lang === 'ta'
                      ? 'உண்மையான வந்தவாசி பட்டறை'
                      : 'Authentic Vandavasi Workshop'}
                  </p>
                </div>
              </div>

              {/* DETAILS */}
              <div className="grid gap-5 p-6 sm:grid-cols-2">

                <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                  <MapPin className="mb-4 h-6 w-6 text-emerald-400" />

                  <h4 className="text-sm font-black uppercase tracking-wider text-white">
                    {t.addressTitle}
                  </h4>

                  <p className="mt-3 text-sm leading-relaxed text-slate-300">
                    {lang === 'ta'
                      ? CONTACT_INFO.addressTa
                      : CONTACT_INFO.addressEn}
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                  <Clock className="mb-4 h-6 w-6 text-yellow-400" />

                  <h4 className="text-sm font-black uppercase tracking-wider text-white">
                    {t.hoursTitle}
                  </h4>

                  <p className="mt-3 text-sm leading-relaxed text-slate-300">
                    {lang === 'ta'
                      ? CONTACT_INFO.hoursTa
                      : CONTACT_INFO.hoursEn}
                  </p>
                </div>

              </div>

              {/* TRUST BADGES */}
              <div className="flex flex-wrap gap-3 border-t border-white/10 p-6">
                {[
                  {
                    icon: ShieldCheck,
                    label:
                      lang === 'ta'
                        ? '1 ஆண்டு உத்தரவாதம்'
                        : '1 Year Warranty',
                  },
                  {
                    icon: Truck,
                    label:
                      lang === 'ta'
                        ? 'தமிழ்நாடு டெலிவரி'
                        : 'Tamil Nadu Delivery',
                  },
                  {
                    icon: Wrench,
                    label:
                      lang === 'ta'
                        ? 'நேரடி தயாரிப்பாளர்'
                        : 'Direct Manufacturer',
                  },
                ].map((item, i) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={i}
                      className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold backdrop-blur-xl"
                    >
                      <Icon className="h-4 w-4 text-emerald-400" />
                      {item.label}
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-6"
          >
            <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-2xl">

              <h3 className="text-3xl font-black text-white">
                {t.formHeader}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                {lang === 'ta'
                  ? 'உங்கள் விவரங்களை பதிவு செய்யுங்கள்.'
                  : 'Fill your details and connect directly with our workshop team.'}
              </p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-5">

                <input
                  type="text"
                  placeholder={t.formName}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
                />

                <div className="grid gap-5 sm:grid-cols-2">

                  <input
                    type="tel"
                    placeholder={t.formPhone}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
                  />

                  <input
                    type="text"
                    placeholder={t.formVillage}
                    value={village}
                    onChange={(e) => setVillage(e.target.value)}
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
                  />
                </div>

                <select
                  value={selectedProduct}
                  onChange={(e) => setSelectedProduct(e.target.value)}
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
                >
                  <option value="">Select Product</option>

                  {PRODUCTS.map((p) => (
                    <option key={p.id} value={p.nameEn}>
                      {lang === 'ta' ? p.nameTa : p.nameEn}
                    </option>
                  ))}
                </select>

                <textarea
                  rows={4}
                  placeholder={t.formMessage}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
                />

                <button
                  type="submit"
                  className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-2xl bg-emerald-600 px-6 py-4 text-sm font-black uppercase tracking-wider text-white transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-emerald-500/30"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-green-600 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <MessageSquare className="relative z-10 h-5 w-5" />
                  <span className="relative z-10">
                    {t.formSubmit}
                  </span>
                </button>

              </form>

              {/* Bottom Actions */}
              <div className="mt-6 grid gap-4 sm:grid-cols-2">

                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm font-bold transition-all hover:bg-white/10"
                >
                  <Phone className="h-4 w-4 text-yellow-400" />
                  {t.btnCallNow}
                </a>

                <a
                  href={CONTACT_INFO.directions}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm font-bold transition-all hover:bg-white/10"
                >
                  <Compass className="h-4 w-4 text-emerald-400" />
                  {t.btnDirections}
                </a>
              </div>

              {isSuccess && (
                <div className="mt-5 flex items-center gap-2 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-4 text-sm font-bold text-emerald-300">
                  <CheckCircle className="h-5 w-5" />
                  {t.formSuccess}
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}