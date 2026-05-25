import React from 'react';
import { motion } from 'framer-motion';
import { Tractor, ShieldAlert, Award, Phone, Users, MapPin, Sparkles, MessageSquare, ArrowUpRight, ArrowRight, Settings } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS, CONTACT_INFO, STATS, IMAGES } from '../data';
import FAQs from '../components/FAQs';

interface HomeProps {
  lang: Language;
  onNavigate: (route: string) => void;
}

export default function Home({ lang, onNavigate }: HomeProps) {
  const t = TRANSLATIONS[lang];

  const valueProps = [
    {
      id: 'mfg',
      icon: <Award className="h-7 w-7 text-secondary-yellow" />,
      titleEn: '100% Direct Manufacturer',
      titleTa: '100% நேரடித் தயாரிப்பாளர்',
      descEn: 'Buy directly from our Vandavasi workshop. Zero dealer markup and no middleman broker commission.',
      descTa: 'எங்கள் வந்தவாசி பட்டறையிலிருந்து நேரடியாக வாங்குங்கள். இடைத்தரகர்கள் அல்லது டீலர் கமிஷன்கள் எதுவும் இல்லை.',
      color: 'bg-emerald-900/10 border-emerald-500/20'
    },
    {
      id: 'steel',
      icon: <Settings className="h-7 w-7 text-secondary-yellow" />,
      titleEn: 'Unyielding Boron Steel',
      titleTa: 'உயர்தர போரான் ஸ்டீல்',
      descEn: 'Forged with deep structural carbon steel that sharpens automatically as it works in heavy clay.',
      descTa: 'கடினமான களிமண்ணிலும் வளைந்து போகாத தடிமனான ஸ்ட்ரக்சுரல் கார்பன் ஸ்டீல் மற்றும் போரான் இரும்பு.',
      color: 'bg-slate-900/10 border-slate-500/20'
    },
    {
      id: 'soil',
      icon: <MapPin className="h-7 w-7 text-secondary-yellow" />,
      titleEn: 'Tested in Real Soil',
      titleTa: 'நம் நிலங்களில் களச் சோதனை',
      descEn: 'Specifically calibrated for the gravel, loam, and muddy wetland paddy soils of Tiruvannamalai.',
      descTa: 'திருவண்ணாமலை மாவட்டத்தின் சேற்று உழவுக்கும் மற்றும் கடினமான நிலங்களுக்கும் பிரத்யேகமாக சோதிக்கப்பட்டது.',
      color: 'bg-amber-900/10 border-amber-500/20'
    }
  ];

  const promoCards = [
  {
    titleEn: 'Machinery Division',
    titleTa: 'இயந்திரவியல் பிரிவு',

    descEn:
      'Browse our heavy-duty dehusker machines, sugarcane harvesters, and dual-spring soil levelers.',

    descTa:
      'நெடுந் தூரம் உழைக்கும் பாக்கு உரிக்கும் எந்திரங்கள், கரும்பு ஏற்றும் கிரேன்கள் மற்றும் இரட்டை ஸ்பிரிங் லெவலர்கள்.',

    route: '#/products',

    btnEn: 'View Catalog',
    btnTa: 'கருவிகளைப் பார்',

    bgImg:
      'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=1600&auto=format&fit=crop',
  },

  {
    titleEn: 'Customer Reviews & Ledger',
    titleTa: 'விற்பனை & வாடிக்கையாளர் மதிப்புரை',

    descEn:
      'See real transaction records of 200+ local farmers and their fields-tested feedback.',

    descTa:
      'பொன் அக்ரோ கருவிகளை வாங்கிப் பயன்படுத்தும் 200-க்கும் மேற்பட்ட உழவர்களின் நேரடி மதிப்புரைகள் மற்றும் ரசீதுகள்.',

    route: '#/reviews',

    btnEn: 'View Reviews',
    btnTa: 'விமர்சனங்களைப் பார்',

    bgImg:
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1600&auto=format&fit=crop',
  },

];

  return (
    <div id="home-page-container" className="w-full">
      {/* Immersive Cinematic Hero Header */}
      <section id="home-hero" className="relative text-white pt-36 pb-24 md:py-48 overflow-hidden bg-slate-950">
      {/* Background Image Panel */}
<div className="absolute inset-0 z-0">

  {/* Dark overlays */}
  <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-900/80 to-transparent z-10" />

  <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent z-10" />

  {/* Hero Background Image */}
  <img
    src={IMAGES.heroBg}
    alt="Tractor field Tamil Nadu"
    className="w-full h-full object-cover object-center opacity-45 scale-105"
  />

</div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Block: Slogans and CTAs */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center space-x-2 bg-primary-green px-3 py-1.5 rounded-full border border-green-400/20 shadow-lg"
              >
                <Sparkles className="h-4 w-4 text-secondary-yellow fill-secondary-yellow" />
                <span className="text-[10px] sm:text-xs font-black tracking-widest uppercase">
                  {lang === 'ta' ? 'அசலான திருவண்ணாமலை தயாரிப்பு' : 'AUTHENTIC TIRUVANNAMALAI CRAFT'}
                </span>
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl sm:text-6xl font-black tracking-tight leading-[1.1] text-white"
              >
                {lang === 'ta' ? (
                  <>
                    வளையாத உழைப்பு, <br />
                    <span className="text-secondary-yellow bg-gradient-to-r from-yellow-300 to-amber-400 bg-clip-text text-transparent">உறுதியான கருவிகள்!</span>
                  </>
                ) : (
                  <>
                    Unyielding Power for <br />
                    <span className="text-secondary-yellow bg-gradient-to-r from-yellow-300 to-amber-400 bg-clip-text text-transparent">Tough Agrarian Soils.</span>
                  </>
                )}
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="text-base sm:text-lg text-slate-300 max-w-xl font-medium leading-relaxed"
              >
                {lang === 'ta' ? 
                  'வந்தவாசி பொன் அக்ரோ இம்ப்ளிமெண்ட்ஸ் - ஸ்ட்ரக்சுரல் கார்பன் ஸ்டீல் மற்றும் போரான் பிளேடுகள் கொண்டு விவசாய மக்களுக்காக உருவாக்கப்படும் உன்னத கருவிகள்.' :
                  'PON AGRO IMPLEMENTS - Heavy duty, single and dual spring levelers, adapters, and high-precision farm attachments fabricated directly at our Vandavasi forge workshop.'}
              </motion.p>

              {/* Primary Dual Actions */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 pt-4"
              >
                <button
                  onClick={() => onNavigate('#/products')}
                  className="flex items-center justify-center space-x-2 px-6 py-4 rounded-xl bg-primary-green hover:bg-green-700 text-white font-black text-base shadow-lg shadow-green-700/20 hover:shadow-green-700/40 transition-all cursor-pointer group-hover:scale-105"
                >
                  <Tractor className="h-5 w-5 text-secondary-yellow shrink-0" />
                  <span>{t.btnViewProducts}</span>
                  <ArrowRight className="h-4.5 w-4.5" />
                </button>

                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="flex items-center justify-center space-x-2 px-6 py-4 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-extrabold text-base transition-colors"
                >
                  <Phone className="h-5 w-5 text-emerald-400 shrink-0" />
                  <span>{lang === 'ta' ? 'அதிகாரியை அழைக்க' : 'Speak to Workshop Managers'}</span>
                </a>
              </motion.div>
            </div>

            {/* Right Block: Floating visual card representing product layout */}
            <div className="lg:col-span-5 relative hidden lg:block">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, rotate: 1 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.8 }}
                className="relative bg-gradient-to-br from-slate-900 to-slate-950 p-6 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl" />
                
               <img
  src={IMAGES.rotaLevelerProd}
  alt="Rota Leveler structural detail"
  className="w-full aspect-[4/3] object-cover rounded-2xl border border-white/5 opacity-90 group-hover:scale-105 transition-transform duration-500"
/>

                <div className="mt-4 flex justify-between items-center bg-white/5 p-4 rounded-2xl border border-white/5">
                  <div>
                    <span className="font-mono text-[10px] text-secondary-yellow uppercase tracking-widest font-black block">Best Seller Implement</span>
                    <span className="text-sm font-black text-white mt-1 block">
                      {lang === 'ta' ? 'இரட்டை ஸ்பிரிங் ரொட்டோ லெவலர்' : 'Dual-Spring Rota Leveler'}
                    </span>
                  </div>
                  <div className="bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-lg text-xs font-black border border-emerald-500/20 shadow-inner">
                    ₹38,000
                  </div>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* Trust Badges section */}
      <section id="trust-features" className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase font-extrabold tracking-widest text-primary-green bg-green-50 px-3.5 py-1.5 rounded-full inline-block mb-3">
              {lang === 'ta' ? 'எங்கள் தரம்' : 'OUR GUARANTEES'}
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-950 tracking-tight leading-none">
              {t.trustTitle}
            </h2>
            <p className="text-gray-600 font-medium mt-3 text-sm sm:text-base">
              {t.trustSub}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {valueProps.map((prop, idx) => (
              <motion.div
                key={prop.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`p-8 rounded-3xl border ${prop.color} hover:shadow-xl transition-all flex flex-col justify-between`}
              >
                <div>
                  <div className="bg-slate-950 text-white p-3.5 rounded-2xl inline-block mb-6 shadow-md shadow-emerald-950/10">
                    {prop.icon}
                  </div>
                  <h3 className="text-xl font-black text-gray-950 mb-3">
                    {lang === 'ta' ? prop.titleTa : prop.titleEn}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm font-semibold leading-relaxed">
                    {lang === 'ta' ? prop.descTa : prop.descEn}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

    {/* Path Finder Navigation Promotion cards */}
<section
  id="services-routes"
  className="py-20 bg-slate-50 border-t border-b border-gray-200/40 relative overflow-hidden"
>
  {/* Background Glow */}
  <div className="absolute top-0 left-[-10%] w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[120px]" />
  <div className="absolute bottom-0 right-[-10%] w-[400px] h-[400px] bg-yellow-400/10 rounded-full blur-[120px]" />

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    
    {/* Section Heading */}
    <div className="text-center mb-14">
      <span className="inline-flex items-center gap-2 bg-primary-green/10 text-primary-green px-4 py-2 rounded-full text-xs font-black uppercase tracking-[0.2em] mb-5">
        <span className="w-2 h-2 rounded-full bg-primary-green animate-pulse" />
        {lang === 'ta'
          ? 'பொன் அக்ரோ சேவைகள்'
          : 'EXPLORE PON AGRO'}
      </span>

      <h2 className="text-4xl md:text-5xl font-black text-gray-950 tracking-tight leading-[1.05]">
        {lang === 'ta'
          ? 'உங்களுக்கு தேவையான பிரிவை தேர்வு செய்யுங்கள்'
          : 'Choose Your Destination'}
      </h2>

      <p className="mt-5 text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
        {lang === 'ta'
          ? 'உயர்தர விவசாய கருவிகள் மற்றும் உண்மையான வாடிக்கையாளர் பதிவுகளை நேரடியாக பார்க்கவும்.'
          : 'Explore our heavy-duty agricultural machinery and verified customer review records directly from our workshop.'}
      </p>
    </div>

    {/* Cards Container */}
    <div className="flex flex-col lg:flex-row justify-center items-stretch gap-10 max-w-6xl mx-auto">
      
      {promoCards.map((p, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.12 }}
          whileHover={{ y: -10 }}
          className="group relative flex-1 min-h-[340px] rounded-[34px] overflow-hidden border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.18)] transition-all duration-500"
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src={p.bgImg}
              alt={p.titleEn}
              className="w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-700"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/10" />

            {/* Shine */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-white/10 via-transparent to-transparent transition-opacity duration-500" />
          </div>

          {/* Content */}
          <div className="relative z-20 h-full flex flex-col justify-between p-8 sm:p-10">
            
            {/* Top Badge */}
            <div className="flex items-start justify-between">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-xl border border-white/10 px-4 py-2 rounded-full">
                <span className="w-2 h-2 rounded-full bg-secondary-yellow animate-pulse" />

                <span className="text-[10px] uppercase tracking-[0.25em] font-black text-white">
                  {i === 0
                    ? lang === 'ta'
                      ? 'கருவிகள்'
                      : 'MACHINERY'
                    : lang === 'ta'
                    ? 'விமர்சனங்கள்'
                    : 'REVIEWS'}
                </span>
              </div>

              <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white">
                <ArrowUpRight className="h-5 w-5 group-hover:rotate-45 transition-transform duration-500" />
              </div>
            </div>

            {/* Bottom Content */}
            <div>
              <h3 className="text-3xl sm:text-4xl font-black text-white leading-tight max-w-sm">
                {lang === 'ta' ? p.titleTa : p.titleEn}
              </h3>

              <p className="mt-5 text-sm sm:text-base text-gray-200 leading-relaxed max-w-md font-medium">
                {lang === 'ta' ? p.descTa : p.descEn}
              </p>

              {/* CTA */}
              <button
                onClick={() => onNavigate(p.route)}
                className="mt-8 inline-flex items-center gap-3 bg-primary-green hover:bg-green-700 text-white px-6 py-4 rounded-2xl text-sm font-black uppercase tracking-wide shadow-xl shadow-green-900/20 transition-all duration-300 hover:scale-105"
              >
                <span>
                  {lang === 'ta' ? p.btnTa : p.btnEn}
                </span>

                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Border Glow */}
          <div className="absolute inset-0 rounded-[34px] border border-white/10 pointer-events-none" />
        </motion.div>
      ))}
    </div>
  </div>
</section>

      {/* Highlighted numeric trust stats */}
      <section id="trust-stats" className="py-16 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-950/40 via-gray-950 to-gray-950 opacity-80" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-2xl sm:text-3xl font-black mb-12 tracking-tight text-slate-100">
            {lang === 'ta' ? 'அடிமட்ட உண்மை புள்ளிவிவரங்கள்' : 'Grounded In Real Farm Accomplishments'}
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((stat) => (
              <div key={stat.id} className="p-4 bg-white/5 rounded-2xl border border-white/5 backdrop-blur-sm">
                <span className="text-4xl sm:text-5xl font-black text-secondary-yellow tracking-tight block">
                  {stat.count}{stat.suffix}
                </span>
                <span className="text-xs sm:text-sm font-bold text-gray-300 block mt-2 px-2">
                  {lang === 'ta' ? stat.labelTa : stat.labelEn}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <FAQs lang={lang} />

      {/* Call To Action for Visiting */}
      <section id="visit-cta" className="py-20 bg-gradient-to-br from-emerald-900 to-emerald-950 text-white text-center relative overflow-hidden">
        <div className="absolute top-[-50%] left-[-20%] w-[50%] h-[100%] bg-white/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <span className="text-xs font-black uppercase text-secondary-yellow tracking-widest bg-white/10 px-3 py-1.5 rounded-full inline-block">
            {lang === 'ta' ? 'இலவச ஆலோசனை' : 'TALK TO A BLACKSMITH'}
          </span>
          <h2 className="text-3xl sm:text-5xl font-black leading-tight">
            {lang === 'ta' ? 'உங்கள் டூல் அளவிற்கு ஆர்டர் செய்ய வேண்டுமா?' : 'Need Custom Sizes for Your Tractor HP?'}
          </h2>
          <p className="text-gray-200 text-sm sm:text-base max-w-xl mx-auto font-medium leading-relaxed">
            {lang === 'ta' ? 
              'நாங்கள் உங்கள் டிராக்டரின் குதிரைத்திறனுக்கு (HP) ஏற்றவாறு தனிப்பயனாக்கப்பட்ட நீளம் கொண்ட சேசிஸ் பிரேம்களை 1 வாரத்தில் வெல்டிங் செய்து தருவோம்.' : 
              'We fabricate customized levelers from 5 feet to 10 feet hydraulic models specifically matched to your tractor profile. Speak with us now.'}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={() => onNavigate('#/contact')}
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-7 py-4 rounded-xl bg-secondary-yellow hover:bg-yellow-500 text-slate-950 font-black text-base shadow-lg cursor-pointer"
            >
              <span>{lang === 'ta' ? 'நேரடித் விபரங்களை அனுப்ப' : 'Get Custom Quote'}</span>
              <ArrowRight className="h-4.5 w-4.5" />
            </button>
            <a
              href={`https://wa.me/918870712295?text=Hi%20PON%20AGRO,%20I%20have%20a%20tractor%20and%20want%20to%20know%20which%20implement%20is%20best`}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-7 py-4 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-extrabold text-base cursor-pointer"
            >
              <MessageSquare className="h-5 w-5 fill-white text-white shrink-0" />
              <span>{lang === 'ta' ? 'வாட்ஸ்அப் அரட்டை' : 'Quick Chat'}</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
