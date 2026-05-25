import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, HardHat, Settings, Wrench, RefreshCw, MessageSquare, AlertTriangle, CheckSquare, Search } from 'lucide-react';
import { Language } from '../types';
import { PRODUCTS, TRANSLATIONS } from '../data';

interface SparesPageProps {
  lang: Language;
}

export default function SparesPage({ lang }: SparesPageProps) {
  const t = TRANSLATIONS[lang];
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPart, setSelectedPart] = useState<any>(null);

  // Filter spares components from our master products array
  const spares = PRODUCTS.filter(p => p.category === 'Bearings' || p.category === 'Agro Adapters' || p.category === 'Spare Parts');

  const filteredSpares = spares.filter(part => {
    const searchString = `${part.nameEn} ${part.nameTa} ${part.modelCode}`.toLowerCase();
    return searchString.includes(searchTerm.toLowerCase());
  });

  const getWhatsappSparesLink = (part: any) => {
    const text = encodeURIComponent(
      `Hi PON AGRO, I am calling from my farm. I need replacement spare parts:\nSpare Part: ${part.nameEn}\nModel Code: ${part.modelCode}\nPrice: ${part.price}. Please confirm courier/workshop delivery.`
    );
    return `https://wa.me/918870712295?text=${text}`;
  };

  // Education card selection
  const educationalGuides = [
    {
      id: 'seal',
      categoryEn: 'Sealing Innovation',
      categoryTa: 'பேரிங் நீர் பாதுகாப்பு',
      titleEn: 'Triple Lip Mud Prevention Seals',
      titleTa: 'சேற்று நீர் புகாத மும்மடி ரப்பர் சீல்',
      descEn: 'Traditional bearings breach in wet clay water within 3 months. PON AGRO uses dual double-lipped rubber gaskets locked under high pressure sleeves.',
      descTa: 'சாதாரண பேரிங்குகளில் உழவுச் சேற்று நீர் 3 மாதத்தில் புகுந்து வீணாகிவிடும். எங்கள் சிஸ்டத்தில் இரட்டை மும்மடி ரப்பர் கேஸ்கெட்டுகள் அழுத்தம் தந்து காக்கிறது.'
    },
    {
      id: 'carbon',
      categoryEn: 'Carbon Composition',
      categoryTa: 'கார்பன் ஸ்டீல் தரம்',
      titleEn: 'Auto-Sharpening Boron Steel Plates',
      titleTa: 'தானாகக் கூர்மையாகும் போரான் பிளேடுகள்',
      descEn: 'Our special Boron steel alloy self-hones. As the blade drags and shears hard gravelly soil, the friction naturally aligns microscopic steel grains keeping it sharp.',
      descTa: 'எங்கள் போரான் அலாய் கத்தி மண்ணில் உராயும்போது, அதன் வடிவமைப்பு காரணமாக உராய்வின் மூலமே தானாகவே கூர்மையடைகிறது.'
    },
    {
      id: 'spline',
      categoryEn: 'Adapter Sizing',
      categoryTa: 'அடாப்டர் இணக்கம்',
      titleEn: 'Heat-Treated Spline Sockets',
      titleTa: 'ஹீட்-டிரீடட் கனரக அடாப்டர்கள்',
      descEn: 'Prevents PTO adapter slippage. Tolerates extreme torque ranges up to 1200 RPM without shearing the central lock pin. Standard sizes in stock.',
      descTa: 'பிடிஓ ஷாஃப்ட்டில் ஏற்படும் அதிவேக சுழல் விசையினால் லாக் பின் உடைந்திடாமல் இருக்க கார்ஃபன் ஸ்டீலில் ஹீட்-டிரீட் செய்யப்பட்டு தயாரிக்கப்பட்டது.'
    }
  ];

  return (
    <div id="spares-page-container" className="pt-32 pb-24 min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Banner */}
        <div className="bg-gradient-to-br from-emerald-950 to-slate-950 text-white rounded-3xl p-8 sm:p-12 shadow-md relative overflow-hidden mb-12">
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary-green/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-3xl text-left space-y-4">
            <span className="text-secondary-yellow font-black text-xs uppercase tracking-widest bg-white/10 px-3 py-1.5 rounded-full inline-block">
              {lang === 'ta' ? 'அசலான திருவண்ணாமலை தயாரிப்புகள்' : '100% GENUINE OEM SPARES'}
            </span>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-none">
              {lang === 'ta' ? 'அசல் மாற்று உதிரிபாகங்கள்' : 'Genuine Spares & Accessories'}
            </h1>
            <p className="text-slate-300 text-xs sm:text-sm font-semibold max-w-2xl leading-relaxed">
              {lang === 'ta' ? 
                'நாயக்கர் மற்றும் திருவண்ணாமலை வட்டார விவசாயிகளின் சேற்று உழவுத் தேவைகளைக் கருத்தில் கொண்டு மும்மடி சீல் கொண்ட கார்பன் பேரிங்ஸ், அடாப்டர்கள், மற்றும் உதிரிபாகங்கள்.' : 
                'Custom hardened carbon steel spares fabricated directly at Vandavasi for water resistance, sludge protection, and automatic high torque tolerance.'}
            </p>
          </div>
        </div>

        {/* Dynamic educational tabs to inspect parts durability */}
        <div id="spares-durability-section" className="mb-16">
          <h2 className="text-xl sm:text-2xl font-black text-gray-950 mb-6 tracking-tight text-left">
            {lang === 'ta' ? 'ஏன் பொன் அக்ரோ பாகங்கள் நீண்ட காலம் உழைக்கின்றன?' : 'Vandavasi Forging Durability Insights'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {educationalGuides.map((guide, idx) => (
              <div 
                key={guide.id}
                className="bg-white p-6 rounded-2xl border border-gray-150 shadow-sm hover:border-emerald-500/20 hover:shadow-lg transition-all"
              >
                <div className="text-emerald-700 bg-emerald-50 p-2.5 rounded-xl inline-block mb-4">
                  {idx === 0 ? <ShieldCheck className="h-5 w-5" /> : idx === 1 ? <Settings className="h-5 w-5" /> : <RefreshCw className="h-5 w-5" />}
                </div>
                <span className="text-[10px] uppercase font-black text-emerald-800 tracking-widest block mb-1">
                  {lang === 'ta' ? guide.categoryTa : guide.categoryEn}
                </span>
                <h3 className="text-base sm:text-lg font-black text-gray-950 mb-2">
                  {lang === 'ta' ? guide.titleTa : guide.titleEn}
                </h3>
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed font-semibold">
                  {lang === 'ta' ? guide.descTa : guide.descEn}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Spares search inputs and inventory list */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-150 shadow-sm mb-12">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-8 border-b border-gray-100 pb-6">
            <div className="text-left">
              <h3 className="text-lg sm:text-xl font-black text-gray-950">
                {lang === 'ta' ? 'அசலான உதிரிபாகங்கள் இருப்பு' : 'Direct Workshop Spares Catalog'}
              </h3>
              <p className="text-gray-500 text-xs sm:text-sm font-semibold">
                {lang === 'ta' ? 'அனைத்து அளவிலான டிராக்டர் அடாப்டர்கள் மற்றும் ஹெவி பேரிங் செட்டுகள் உடனே கிடைக்கும்.' : 'Over-the-counter workshop availability. Direct dispatch across South India.'}
              </p>
            </div>

            <div className="relative w-full sm:w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input 
                type="text"
                placeholder={lang === 'ta' ? 'உதிரிபாகங்களைத் தேடுக...' : 'Search bearings or converters...'}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-xl text-xs border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-green bg-gray-50 font-bold"
              />
            </div>
          </div>

          {/* Parts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSpares.map((p) => (
              <div 
                key={p.id}
                className="bg-slate-50 rounded-2xl border border-gray-200/60 p-5 flex flex-col justify-between hover:bg-white hover:border-emerald-500/20 hover:shadow-md transition-all group"
              >
                <div>
                  <div className="relative overflow-hidden aspect-[16/10] bg-slate-900 rounded-xl mb-4 shadow-sm">
                    <img 
                      src={p.image} 
                      alt={p.nameEn}
                      className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                    />
                    <span className="absolute bottom-3 left-3 bg-slate-950/80 px-2.5 py-1 text-[10px] font-mono text-white border border-white/10 rounded-md">
                      Code: {p.modelCode}
                    </span>
                  </div>

                  <span className="text-[10px] uppercase font-black text-emerald-800 tracking-wider block">{p.category}</span>
                  <h4 className="text-base sm:text-lg font-black text-gray-950 mt-1 mb-2 leading-tight">
                    {lang === 'ta' ? p.nameTa : p.nameEn}
                  </h4>
                  <p className="text-gray-500 text-xs sm:text-xs font-semibold leading-relaxed mb-4">
                    {lang === 'ta' ? p.descTa : p.descEn}
                  </p>
                </div>

                <div className="border-t border-gray-200/50 pt-4 flex items-center justify-between">
                  <div>
                    <span className="text-[9px] uppercase font-black text-gray-400 block">Workshop Price</span>
                    <span className="text-base sm:text-lg font-black text-gray-950">{p.price}</span>
                  </div>

                  <a 
                    href={getWhatsappSparesLink(p)}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center space-x-1.5 px-3.5 py-2 rounded-xl bg-primary-green hover:bg-green-700 text-white font-extrabold text-xs"
                  >
                    <MessageSquare className="h-3.5 w-3.5 text-secondary-yellow fill-secondary-yellow" />
                    <span>{lang === 'ta' ? 'ஆர்டர் செய்' : 'Order Now'}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {filteredSpares.length === 0 && (
            <div className="text-center py-12">
              <span className="text-gray-400 font-bold block mb-2">No spare parts found matching query.</span>
              <span className="text-xs text-gray-400 font-bold">Try typing "bearing", "adapter", or "shaft".</span>
            </div>
          )}

        </div>

        {/* Security Warning Notice Card */}
        <div className="bg-amber-50 border border-amber-200/60 rounded-2xl p-5 flex items-start space-x-3 text-left">
          <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <h4 className="text-amber-950 font-black text-sm">{lang === 'ta' ? 'எச்சரிக்கை: போலியான பாகங்களைக் தவிர்க்கவும்' : 'Counterfeit Parts Caution Warning'}</h4>
            <p className="text-amber-800 text-xs font-semibold mt-1 leading-relaxed">
              {lang === 'ta' ? 
                'வந்தவாசியில் இருக்கும் சில கடைகளில் பொன் அக்ரோ லோகோவுடன் மாற்றுப் போலிகள் விற்கப்படுகின்றன. வாங்கும் முன் அசல் ஹாலோகிராம் மற்றும் "PATENT ORIGINAL" முத்திரை இருப்பதை உறுதிப்படுத்தவும்.' : 
                'Some local retail shops may sell unhardened clones with similar naming styles. Always buy directly from our Vandavasi workshop outlet to secure boron-standard steel guarantees.'}
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
