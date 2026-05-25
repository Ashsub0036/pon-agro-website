/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Grid, Tractor, Cpu, Layers, Disc, Wrench,  MessageSquare, Plus, Check, CheckCircle2 } from 'lucide-react';
import { Language, Product } from '../types';
import { TRANSLATIONS, PRODUCTS, CONTACT_INFO } from '../data';

interface ProductsProps {
  lang: Language;
}

export default function Products({ lang }: ProductsProps) {
  const t = TRANSLATIONS[lang];
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeSpecProduct, setActiveSpecProduct] = useState<Product | null>(null);

  const categories = [
    { id: 'All', labelEn: 'All Categories', labelTa: 'அனைத்தும்', icon: <Grid className="h-4 w-4" /> },
    { id: 'Rota Leveler', labelEn: 'Rota Leveler', labelTa: 'ரோட்டோ லெவலர்', icon: <Tractor className="h-4 w-4" /> },
    { id: 'Rota SD', labelEn: 'Rota SD', labelTa: 'ரோட்டா எஸ்டி', icon: <Cpu className="h-4 w-4" /> },
    { id: 'Bearings', labelEn: 'Bearings', labelTa: 'பேரிங்ஸ்', icon: <Disc className="h-4 w-4" /> },
    { id: 'Agro Adapters', labelEn: 'Agro Adapters', labelTa: 'அடாப்டர்கள்', icon: <Layers className="h-4 w-4" /> },
    { id: 'Spare Parts', labelEn: 'Spare Parts', labelTa: 'உதிரிபாகங்கள்', icon: <Wrench className="h-4 w-4" /> },
  ];

  // Filtering products based on category & search query
 const filteredProducts = PRODUCTS.filter(
  (product) =>
    selectedCategory === 'All' ||
    product.category === selectedCategory
);

  const getWhatsappProductLink = (product: Product) => {
    const textEnquiry = encodeURIComponent(
      `Hi PON AGRO IMPLEMENTS, I am interested in purchasing:\nProduct: ${product.nameEn}\nModel Code: ${product.modelCode}\nPrice: ${product.price}. Please share availability.`
    );
    return `https://wa.me/918870712295?text=${textEnquiry}`;
  };

  return (
    <section id="products" className="py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase font-extrabold tracking-widest text-primary-green bg-green-50 px-3.5 py-1.5 rounded-full inline-block mb-3">
            {lang === 'ta' ? 'அசலான தயாரிப்பு பட்டியல்' : 'GENUINE FACTORY BROCHURE'}
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            {t.prodTitle}
          </h2>
          <p className="text-gray-600 mt-3 text-base">
            {t.prodSub}
          </p>
        </div>

        {/* Filter Tabs & Search Controls */}
        <div id="controls-panel" className="flex justify-center md-16">
          
          {/* Categories Tab Scroll Panel */}
          <div id="category-scroller" className="flex items-center space-x-2 overflow-x-auto w-full md:w-auto pb-3 md:pb-0 scrollbar-none snap-x">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  id={`cat-tab-${cat.id.toLowerCase().replace(' ', '-')}`}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl text-sm font-semibold whitespace-nowrap snap-center transition-all duration-300 ${
                    isActive
                      ? 'bg-primary-green text-white shadow-xl shadow-green-700/10 scale-102'
                      : 'bg-gray-50 text-gray-700 hover:bg-gray-150 border border-gray-100'
                  }`}
                >
                  {cat.icon}
                  <span>{lang === 'ta' ? cat.labelTa : cat.labelEn}</span>
                </button>
              );
            })}
          </div>
       </div>
        
        {/* Bento Grid Products Container */}
        <motion.div 
          id="products-bento-grid"
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product, idx) => {
              // Standard bento spanning layout: Flagship products get extra grandeur (lg:col-span-2)
              const isFlagship = idx === 0 && selectedCategory === 'All';
              
              return (
                <motion.div
  key={product.id}
  layout
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0 }}
  transition={{ duration: 0.4 }}
  whileHover={{ y: -6 }}
  className="bg-white rounded-3xl overflow-hidden border border-slate-200 hover:border-green-500/30 hover:shadow-2xl transition-all duration-300"
>

  {/* Product Image */}
  <div className="aspect-[16/10] overflow-hidden bg-slate-100">
    <img
      src={product.image}
      alt={product.nameEn}
      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
    />
  </div>

  {/* Content */}
  <div className="p-8">

    {/* Category */}
    <span className="text-sm text-green-600 font-semibold">
      {product.category}
    </span>

    {/* Product Name */}
    <h3 className="text-2xl font-black text-slate-900 mt-3">
      {lang === 'ta'
        ? product.nameTa
        : product.nameEn}
    </h3>

    {/* Description */}
    <p className="text-slate-600 mt-4 leading-relaxed text-sm">
      {lang === 'ta'
        ? product.descTa
        : product.descEn}
    </p>

    {/* Price + Button */}
    <div className="flex items-center justify-between mt-8">

      <div>
        <span className="text-sm text-slate-500">
          Price
        </span>

        <h4 className="text-2xl font-black text-slate-900">
          {product.price}
        </h4>
      </div>

      <button
        onClick={() => setActiveSpecProduct(product)}
        className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-black text-white font-semibold transition-all"
      >
        {t.btnDetails}
      </button>

    </div>

    {/* WhatsApp Button */}
    <a
      href={getWhatsappProductLink(product)}
      target="_blank"
      rel="noreferrer"
      className="w-full flex items-center justify-center gap-2 mt-5 px-5 py-4 rounded-xl bg-green-600 hover:bg-green-700 text-white font-semibold transition-all duration-300"
    >
      <MessageSquare className="h-4 w-4" />
      <span>{t.btnEnquiry}</span>
    </a>

  </div>
</motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      

      {/* Specifications Overlaid Drawer Modal */}
      <AnimatePresence>
        {activeSpecProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-950/60 backdrop-blur-md">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              id="specifications-modal"
              className="bg-white rounded-3xl overflow-hidden shadow-2xl max-w-2xl w-full border border-gray-100"
            >
              <div className="relative p-6 sm:p-8 border-b border-gray-100 bg-slate-50 flex items-start justify-between">
                <div>
                  <span className="text-xs uppercase font-extrabold text-primary-green tracking-wider bg-white px-2.5 py-1 rounded-md border border-gray-150 inline-block mb-2">
                    {activeSpecProduct.category}
                  </span>
                  <h3 className="text-2xl font-extrabold text-gray-900">
                    {lang === 'ta' ? activeSpecProduct.nameTa : activeSpecProduct.nameEn}
                  </h3>
                  <p className="text-xs font-mono text-gray-500 mt-1">
                    {t.modelLabel}: {activeSpecProduct.modelCode}
                  </p>
                </div>
                
                <button
                  id="close-spec-modal-btn"
                  onClick={() => setActiveSpecProduct(null)}
                  className="p-1 px-3 py-1 rounded-full bg-white hover:bg-gray-100 text-gray-500 font-bold border border-gray-200 transition-colors"
                >
                  ✕
                </button>
              </div>

              <div className="p-6 sm:p-8 max-h-[60vh] overflow-y-auto">
                <blockquote className="border-l-4 border-primary-green pl-4 italic text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                  {lang === 'ta' ? activeSpecProduct.descTa : activeSpecProduct.descEn}
                </blockquote>

                <h4 className="font-extrabold text-gray-900 text-sm sm:text-base mb-4 uppercase tracking-wider">
                  {lang === 'ta' ? 'முழுமையான தொழில்நுட்பக் கட்டமைப்பு விவரக்குறிப்பு:' : 'Full Technical Build Specs:'}
                </h4>
                
                <div className="space-y-3 mb-8">
                  {(lang === 'ta' ? activeSpecProduct.specsTa : activeSpecProduct.specsEn).map((spec, index) => (
                    <div key={index} className="flex items-start space-x-3 bg-gray-50 p-3 rounded-xl border border-gray-100">
                      <Check className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{spec}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between border-t border-gray-100 pt-6 gap-4">
                  <div>
                    <span className="text-xs text-gray-400 font-bold uppercase">{t.priceText}</span>
                    <span className="text-2xl font-extrabold text-gray-900 block">{activeSpecProduct.price}</span>
                  </div>

                  <div className="flex space-x-3 w-full sm:w-auto">
                    <a
                      id="spec-modal-whatsapp-enquiry"
                      href={getWhatsappProductLink(activeSpecProduct)}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 sm:flex-initial flex items-center justify-center space-x-2 px-6 py-3 rounded-xl bg-primary-green hover:bg-green-700 text-white font-bold text-sm shadow-md"
                    >
                      <MessageSquare className="h-4 w-4" />
                      <span>{t.btnEnquiry}</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      </div>
    </section>
  );
}
