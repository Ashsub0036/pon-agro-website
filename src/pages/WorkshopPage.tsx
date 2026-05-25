import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Flame, Hammer, MapPin, Sparkles, Star, Award, Pocket } from 'lucide-react';
import { Language } from '../types';

interface WorkshopPageProps {
  lang: Language;
}

export default function WorkshopPage({ lang }: WorkshopPageProps) {
  const processStages = [
    {
      num: '01',
      titleEn: 'Carbon Steel Shearing',
      titleTa: 'எஃகு வளைத்தல் & கட்டிங்',
      descEn: 'Raw carbon steel beams and genuine Boron sheets are cold-sheared with 150-ton hydraulic press machines to avoid edge stress fractures.',
      descTa: 'மூல கார்பன் பீம்களும் போரான் இரும்பு தாள்களும் 150-டன் பிரஸ் மெஷின் கொண்டு துல்லியமாக கட் செய்யப்படுகின்றன.'
    },
    {
      num: '02',
      titleEn: 'Multi-Pass MIG Welding',
      titleTa: 'கனரக எம்ஐஜி (MIG) வெல்டிங்',
      descEn: 'Instead of single-tack welds, we practice deep structural multi-pass MIG-welding. This guarantees our double-spring hinges never shear off under 1.5 tons of load.',
      descTa: 'சாதாரண வெல்டிங்கிற்கு பதிலாக ஆழ்கலவை மல்டி-பாஸ் MIG வெல்டிங் செய்யப்படுகிறது. இதனால் 1.5 டன் அழுத்தத்திலும் வெல்டிங் உடையாமல் இருக்கும்.'
    },
    {
      num: '03',
      titleEn: 'Hydraulic Trueing & Alignment',
      titleTa: 'ஹைட்ராலிக் அச்சமைப்பு சீரமைப்பு',
      descEn: 'Using high-pressure laser calibrators, the scraper beam is perfectly leveled to 0.5mm tolerances. If the scrap beam is off, the tractor pulls unsteadily, wasting fuel.',
      descTa: 'லேசர் அளவீடுகள் மற்றும் ஹைட்ராலிக் அலைன்மென்ட் கொண்ட சீரமைப்பு. லெவலர் 0.5 மிமீ கூட துல்லிய விலகல் இல்லாமல் நேராக அமைக்கப்படுகிறது.'
    },
    {
      num: '04',
      titleEn: 'Anti-Oxidative Double Priming',
      titleTa: 'துருப்பிடிக்காத இரட்டை கோட்டிங் பெயிண்ட்',
      descEn: 'Implements are sandblasted, sprayed with a zinc-heavy anti-rust primer, and cured under premium gloss enamel to withstand wet, alkaline clay soils.',
      descTa: 'நீர் மற்றும் காரத்தன்மை கொண்ட களிமண்ணில் துருப்பிடிக்காமல் இருக்க துத்தநாக பிரைமர் மற்றும் அல்கைட் எனாமல் பெயிண்ட் இரட்டை அடுக்கு அடிக்கப்படுகிறது.'
    }
  ];

  const welders = [
    {
      nameEn: 'Murugan Loganathan',
      nameTa: 'முருகன் லோகநாதன்',
      roleEn: 'Master Welder & Co-founder',
      roleTa: 'தலைமை வெல்டர் & இணை நிறுவனர்',
      expEn: '15+ years forging heavy machinery across Tamil Nadu.',
      expTa: 'தமிழகத்தின் கனரக மெட்டல் துறையில் 15 ஆண்டு கால அனுபவம் கொண்டவர்.',
      specialtyEn: 'High-torque structural MIG fabrication',
      specialtyTa: 'கனரக சேஸிஸ் வெல்டிங் நிபுணர்'
    },
    {
      nameEn: 'Karthik Raja',
      nameTa: 'கார்த்திக் ராஜா',
      roleEn: 'Precision Sheet Calibrator',
      roleTa: 'துல்லிய தட்டு சீரமைப்பாளர்',
      expEn: 'Expertise in high-stress hydraulic steel trueing.',
      expTa: 'ஹைட்ராலிக் அலைன்மென்ட் மற்றும் லேசர் துல்லிய கட்டிங் நிபுணர்.',
      specialtyEn: 'Laser calibration & leveling accuracy',
      specialtyTa: 'லேசர் துல்லியம் மற்றும் சீரமைப்பு'
    }
  ];

  return (
    <div id="workshop-page-container" className="pt-32 pb-24 min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cinematic Page Header */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-md relative overflow-hidden mb-16">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-905 via-gray-900/80 to-transparent z-10" />
            <img 
              src="/src/assets/images/agro_workshop_craft_1779611929907.png" 
              alt="PON AGRO Vandavasi Workshop Forge" 
              className="w-full h-full object-cover object-center opacity-30 select-none pointer-events-none"
            />
          </div>
          
          <div className="relative z-10 max-w-2xl text-left space-y-4">
            <span className="text-secondary-yellow font-black text-xs uppercase tracking-widest bg-white/10 px-3 py-1.5 rounded-full inline-block">
              {lang === 'ta' ? 'வந்தவாசியில் உள்ள தரம்' : 'GROUNDED AUTHENTIC MANUFACTURE'}
            </span>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-none">
              {lang === 'ta' ? 'வந்தவாசி பட்டறையின் தரம்' : 'Our Vandavasi Workshop Forge'}
            </h1>
            <p className="text-slate-300 text-xs sm:text-sm font-semibold leading-relaxed">
              {lang === 'ta' ? 
                '2025 இல் திருவண்ணாமலை மாவட்டத்தில் விவசாய நிலங்களை காக்கும் நோக்குடன் தொடங்கப்பட்ட குடும்ப வெல்டிங் பட்டறை. போலியான பிராண்ட் விளம்பரங்கள் இன்றி மெய் உழைப்பை நம்பிய தளம்.' : 
                'Established in 2025 at Vandavasi, we are a family-owned agrarian blacksmith workshop. No corporate larping, just honest Tamil craftsmanship, solid carbon steel, and zero markups.'}
            </p>
          </div>
        </div>

        {/* Brand Inception & Mission block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-7 space-y-6 text-left">
            <h2 className="text-2xl sm:text-3xl font-black text-gray-950 tracking-tight leading-tight">
              {lang === 'ta' ? 'மண்ணின் தேவையை அறிந்த உழவுத் தயாரிப்புகள்' : 'We Melt Steel For The Hard-Working Indian Farmer'}
            </h2>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed font-semibold">
              {lang === 'ta' ? 
                'பெரும் கார்ப்பரேட் நிறுவனங்கள் வெறும் வரைபடங்களை கொண்டு கருவிகளை தயாரிக்கின்றன. ஆனால், வந்தவாசி மண்ணில் இருக்கும் ஒவ்வொரு உழுபவனின் கஷ்டங்களையும் கண்குளிரக் கண்டு, அவர்களின் டிராக்டர்களின் ஆயுளைக் காக்க ஸ்ட்ரக்சுரல் கார்பன் இரும்பு பீம்களைக் கொண்டு பொன் அக்ரோ கருவிகளை வடிவமைக்கின்றோம்.' : 
                'Big multinational corporate conglomerates manufacture implements on paper blueprints using thin sheet metal to decrease product weight and maximize profit margins. Murugan and Loganathan founded PON AGRO at Vandavasi because we got tired of seeing young farmers waste fuel due to bent leveler edges.'}
            </p>
            <p className="text-gray-650 text-xs sm:text-sm leading-relaxed">
              {lang === 'ta' ? 
                'எங்கள் தயாரிப்பில் வெல்டிங் செய்வதற்கு திருவண்ணாமலையில் உள்ள சிறந்த உலோக கைவினைஞர்களைக் குழுவாகக் கொண்டுள்ளோம். லேசர் அலைன்மென்ட் விலகல் இல்லாது உழவு இழுவிசையைக் வெகுவாக குறைக்கிறது.' : 
                'Every single weld bead is inspected by our co-founders of the forge. This keeps the leveling scrap blade perfectly aligned with the tractor’s three-point linkage system, reducing tractor drag, and cutting fuel consumption by up to 18%.'}
            </p>
            
            <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-100/50 inline-flex items-center space-x-3">
              <Award className="h-5 w-5 text-primary-green" />
              <span className="text-primary-green font-black text-xs uppercase tracking-wider">
                {lang === 'ta' ? 'அசலான போரான் இரும்புக்கு நாங்கள் பொறுப்பு' : '100% Genuine Certified Boron steel only'}
              </span>
            </div>
          </div>

          <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-slate-950 p-6 rounded-3xl border border-white/5 shadow-inner text-white flex flex-col justify-between min-h-[280px]">
            <div className="flex items-center space-x-2 text-secondary-yellow">
              <Star className="h-5 w-5 fill-current" />
              <span className="text-xs font-black uppercase tracking-wider">{lang === 'ta' ? 'முக்கிய உத்திரவாதம்' : 'Workshop Integrity Rules'}</span>
            </div>

            <div className="space-y-3 my-6">
              <div className="flex items-start space-x-2 text-xs">
                <ShieldCheck className="h-4 w-4 text-emerald-400 mt-0.5 shrink-0" />
                <span>{lang === 'ta' ? 'நேரடி தொழிற்சாலை விலை (இடைத்தரகர்கள் கமிஷன் இல்லை)' : 'Factory pricing - save up to ₹15,000 in dealer commission.'}</span>
              </div>
              <div className="flex items-start space-x-2 text-xs">
                <ShieldCheck className="h-4 w-4 text-emerald-400 mt-0.5 shrink-0" />
                <span>{lang === 'ta' ? 'அனைத்து உதிரிபாகங்களும் பட்டறையிலேயே உடனடியாகக் கிடைக்கும்' : 'Over-the-counter spare elements immediately available.'}</span>
              </div>
              <div className="flex items-start space-x-2 text-xs">
                <ShieldCheck className="h-4 w-4 text-emerald-400 mt-0.5 shrink-0" />
                <span>{lang === 'ta' ? 'உங்கள் நிலத்திற்கு ஏற்ற தனிப்பயன் நீளப் பரிமாணம்' : 'Custom frame specifications made to order in 1 week.'}</span>
              </div>
            </div>

            <span className="text-[10px] text-zinc-400 block border-t border-white/10 pt-3">
              {lang === 'ta' ? 'சரக்கு வாங்கும் முன் வந்தவாசி பட்டறையை நேரடியாக பார்வையிடலாம்.' : 'Farmers are always welcome to drop by our Vandavasi site to inspect.'}
            </span>
          </div>
        </div>

        {/* Fabrication stages breakdown */}
        <div className="mb-20">
          <h2 className="text-xl sm:text-2xl font-black text-gray-950 mb-8 tracking-tight text-center">
            {lang === 'ta' ? 'படிப்படியான தயாரிப்பு நிலைகள்' : 'Honest Steelforge Manufacturing Process'}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processStages.map((stage) => (
              <div 
                key={stage.num}
                className="bg-white p-6 rounded-3xl border border-gray-150 relative hover:border-emerald-500/20 shadow-sm hover:shadow-md transition-all text-left"
              >
                <span className="absolute top-4 right-4 text-gray-200 font-extrabold text-3xl font-mono leading-none">{stage.num}</span>
                <span className="text-emerald-700 bg-emerald-50 p-2 rounded-xl inline-block mb-6 font-extrabold text-xs">{lang === 'ta' ? 'உறுதி' : 'Stage'}</span>
                
                <h3 className="text-base sm:text-lg font-black text-gray-950 mb-2 leading-tight">
                  {lang === 'ta' ? stage.titleTa : stage.titleEn}
                </h3>
                <p className="text-gray-500 text-xs sm:text-xs font-semibold leading-relaxed">
                  {lang === 'ta' ? stage.descTa : stage.descEn}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Welder guild profiles */}
        <div className="bg-slate-100 rounded-3xl p-8 border border-gray-200/50">
          <h2 className="text-xl sm:text-2xl font-black text-gray-950 mb-6 tracking-tight text-center">
            {lang === 'ta' ? 'எங்கள் கைவினைஞர்கள்' : 'Meet Our Forge Welder Masters'}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {welders.map((welder, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-gray-200 flex flex-col justify-between text-left">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="bg-slate-950 text-white p-2.5 rounded-xl">
                      <Flame className="h-5 w-5 text-secondary-yellow animate-pulse" />
                    </div>
                    <div>
                      <h4 className="font-extrabold text-base sm:text-lg text-gray-950 leading-tight">
                        {lang === 'ta' ? welder.nameTa : welder.nameEn}
                      </h4>
                      <p className="text-xs text-emerald-800 font-black tracking-wider uppercase mt-0.5">
                        {lang === 'ta' ? welder.roleTa : welder.roleEn}
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-600 text-xs sm:text-xs font-semibold leading-relaxed">
                    {lang === 'ta' ? welder.expTa : welder.expEn}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-gray-100 flex justify-between items-center text-[11px] font-bold text-gray-400">
                  <span>Specialty:</span>
                  <span className="text-gray-800 font-extrabold">{lang === 'ta' ? welder.specialtyTa : welder.specialtyEn}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
