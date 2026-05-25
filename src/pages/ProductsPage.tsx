import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Tractor,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  Phone,
  MessageCircle,
  Sparkles,
  Eye,
} from 'lucide-react';

import levelerImg1 from '../assets/products/Rota Leveler 12 feet.jpeg';
import levelerImg2 from '../assets/products/Rota Leveler 12 feet2.jpeg';

import rotaSdImg1 from '../assets/products/Rota SD.jpeg';
import rotaSdImg2 from '../assets/products/rota sd2.jpeg';

import rotaSideLeg1 from '../assets/products/rota side leg.jpeg';
import rotaSideLeg2 from '../assets/products/rota side leg2.jpeg';

import sparePartsImg from '../assets/products/Spare parts.jpeg';

import { Language } from '../types';
import { CONTACT_INFO } from '../data';

interface ProductsPageProps {
  lang: Language;
}

export default function ProductsPage({
  lang,
}: ProductsPageProps) {
  const [selectedCategory, setSelectedCategory] =
    useState('All');

  const products = [
    {
      id: 1,
      title: 'Rota Leveler 12 Feet',
      category: 'Levelers',
      images: [levelerImg1, levelerImg2],
      badge: 'BEST SELLER',
      description:
        'Heavy-duty dual spring leveler specially designed for wetland and dryland farming.',
      features: [
        '12 Feet Heavy Body',
        'Dual Spring Support',
        'High Durability Steel',
      ],
    },

    {
      id: 2,
      title: 'Rota SD',
      category: 'Levelers',
      images: [rotaSdImg1, rotaSdImg2],
      badge: 'PREMIUM',
      description:
        'Strong heavy chassis agricultural leveler with high durability.',
      features: [
        'Heavy Chassis',
        'Long Lasting Paint',
        'Factory Built Quality',
      ],
    },

    {
      id: 3,
      title: 'Rota Side Leg',
      category: 'Spare Parts',
      images: [rotaSideLeg1, rotaSideLeg2],
      badge: 'ORIGINAL',
      description:
        'Heavy-duty side support legs with reinforced steel structure.',
      features: [
        'Strong Side Support',
        'Premium Welding',
        'Rust Resistant Finish',
      ],
    },

    {
      id: 4,
      title: 'Spare Parts Kit',
      category: 'Spare Parts',
      images: [sparePartsImg],
      badge: 'FACTORY ORIGINAL',
      description:
        'Original bearings, bolts, and maintenance spare kit.',
      features: [
        'Original Spare Parts',
        'Factory Quality',
        'Long Lifespan',
      ],
    },
  ];

  const categories = [
    'All',
    'Levelers',
    'Cultivators',
    'Trailers',
    'Rotavators',
    'Spare Parts',
  ];

  const filteredProducts =
    selectedCategory === 'All'
      ? products
      : products.filter(
          (product) =>
            product.category === selectedCategory
        );

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-black pt-28 pb-24 overflow-hidden relative">

      {/* PREMIUM BACKGROUND EFFECTS */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        <div className="absolute top-[10%] left-[5%] w-[350px] h-[350px] bg-green-500/20 blur-[140px] rounded-full" />

        <div className="absolute bottom-[10%] right-[5%] w-[350px] h-[350px] bg-yellow-400/10 blur-[140px] rounded-full" />

        <div className="absolute top-20 left-20 w-2 h-2 bg-green-400 rounded-full animate-pulse" />

        <div className="absolute top-40 right-40 w-3 h-3 bg-yellow-400 rounded-full animate-ping" />

        <div className="absolute bottom-40 left-1/3 w-2 h-2 bg-green-300 rounded-full animate-bounce" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* HERO SECTION */}
        <div className="text-center mb-20">

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-300 text-xs font-extrabold tracking-[0.2em] uppercase mb-6 backdrop-blur-xl"
          >
            <Sparkles className="h-4 w-4" />
            PON AGRO IMPLEMENTS
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-7xl font-black text-white leading-none tracking-tight max-w-5xl mx-auto"
          >
            Premium Agricultural Implements
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1,
              delay: 0.3,
            }}
            className="text-slate-400 max-w-3xl mx-auto mt-6 text-sm sm:text-base leading-relaxed"
          >
            Explore our factory-manufactured
            agricultural implements specially
            designed for Tamil Nadu farmers.
            Built with durability, precision
            engineering, and long-lasting
            performance.
          </motion.p>
        </div>

        {/* STATS */}
        {/* Stats */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20 max-w-5xl mx-auto">
  {[
    { title: '200+', sub: 'Happy Customers' },
    { title: '1+', sub: 'Years Experience' },
    { title: 'Mon - Sat', sub: '6AM - 9PM' },
  ].map((item, i) => (
    <motion.div
      key={i}
      whileHover={{
        y: -10,
        scale: 1.03,
      }}
      transition={{
        type: 'spring',
        stiffness: 200,
        damping: 15,
      }}
      className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-2xl p-8 text-center shadow-2xl"
    >
      {/* Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-green/10 via-transparent to-secondary-yellow/10 opacity-0 hover:opacity-100 transition-all duration-500" />

      <h3 className="text-5xl font-black bg-gradient-to-r from-secondary-yellow to-yellow-300 bg-clip-text text-transparent">
        {item.title}
      </h3>

      <p className="text-base text-slate-300 font-semibold mt-4">
        {item.sub}
      </p>
    </motion.div>
  ))}
</div>


        {/* PRODUCTS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {filteredProducts.map(
            (product, index) => (
              <motion.div
                key={product.id}
                initial={{
                  opacity: 0,
                  y: 60,
                  scale: 0.9,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                  ease: 'easeOut',
                }}
                whileHover={{
                  y: -10,
                }}
                className="group relative rounded-[32px] overflow-hidden border border-white/10 hover:border-green-500/40 bg-white/[0.08] backdrop-blur-2xl shadow-2xl hover:shadow-green-900/20 transition-all duration-700 before:absolute before:inset-0 before:bg-gradient-to-r before:from-green-500/0 before:via-green-500/10 before:to-green-500/0 before:opacity-0 hover:before:opacity-100 before:transition-all before:duration-700"
              >

                {/* PRODUCT IMAGE */}
                <div className="relative h-[250px] overflow-hidden">

                  {/* IMAGE 1 */}
                  <img
                    src={product.images[0]}
                    alt={product.title}
                    className="w-full h-full object-cover absolute inset-0 transition-all duration-700 group-hover:scale-110 group-hover:rotate-1 group-hover:opacity-0"
                  />

                  {/* IMAGE 2 */}
                  {product.images[1] && (
                    <img
                      src={product.images[1]}
                      alt={product.title}
                      className="w-full h-full object-cover transition-all duration-700 opacity-0 scale-110 group-hover:scale-100 group-hover:opacity-100"
                    />
                  )}

                  {/* DARK OVERLAY */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-500" />

                  {/* GRADIENT */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                  {/* BADGE */}
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-yellow-400 text-black text-xs font-black uppercase tracking-wide shadow-xl">
                    {product.badge}
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-6">

                  {/* CATEGORY */}
                  <div className="flex items-center gap-2 mb-4">
                    <Tractor className="h-5 w-5 text-green-400" />

                    <span className="text-xs uppercase tracking-[0.2em] text-slate-400 font-bold">
                      {product.category}
                    </span>
                  </div>

                  {/* TITLE */}
                  <h2 className="text-2xl font-black text-white leading-tight mb-3">
                    {product.title}
                  </h2>

                  {/* DESCRIPTION */}
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {product.description}
                  </p>

                  {/* FEATURES */}
                  <div className="space-y-3 mb-6">

                    {product.features.map(
                      (feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2"
                        >
                          <CheckCircle2 className="h-4 w-4 text-green-400" />

                          <span className="text-sm text-slate-300 font-medium">
                            {feature}
                          </span>
                        </div>
                      )
                    )}
                  </div>

                  {/* BUTTONS */}
                  <div className="flex items-center gap-3">

                    {/* WHATSAPP */}
                    <a
                      href={`https://wa.me/918870712295?text=Hi%20PON%20AGRO,%20I%20am%20interested%20in%20${encodeURIComponent(
                        product.title
                      )}`}
                      target="_blank"
                      rel="noreferrer"
                      className="relative overflow-hidden flex-1 inline-flex items-center justify-center gap-2 px-5 py-4 rounded-2xl bg-green-600 hover:bg-green-700 text-white font-black text-sm transition-all duration-500 hover:scale-105 shadow-xl shadow-green-900/30"
                    >
                      <MessageCircle className="h-4 w-4" />

                      Enquire
                    </a>

                    {/* VIEW */}
                    <button className="px-5 py-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 text-white transition-all duration-500 hover:scale-105">
                      <Eye className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )
          )}
        </div>

        {/* CTA SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-24 rounded-[40px] overflow-hidden border border-white/10 bg-gradient-to-r from-green-600 to-green-700 p-10 sm:p-16 relative shadow-2xl"
        >

          <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl" />

          <div className="relative z-10 text-center max-w-4xl mx-auto">

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-xs uppercase tracking-[0.2em] font-black mb-6 backdrop-blur-xl">
              <ShieldCheck className="h-4 w-4" />
              Factory Direct Support
            </div>

            <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight">
              Need Custom Agricultural Equipment?
            </h2>

            <p className="text-green-50 mt-6 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
              Contact our Vandavasi workshop
              directly for customized
              agricultural implements,
              heavy-duty fabrication, and
              tractor-compatible solutions.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mt-10">

              {/* CALL */}
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="inline-flex items-center gap-3 px-8 py-5 rounded-2xl bg-white text-green-700 font-black text-sm hover:bg-slate-100 transition-all duration-500 hover:scale-105"
              >
                <Phone className="h-5 w-5" />
                Call Now
              </a>

              {/* WHATSAPP */}
              <a
                href="https://wa.me/8870712295"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 px-8 py-5 rounded-2xl border border-white/20 bg-white/10 text-white font-black text-sm hover:bg-white/20 transition-all duration-500 hover:scale-105"
              >
                <MessageCircle className="h-5 w-5" />

                WhatsApp Enquiry

                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}