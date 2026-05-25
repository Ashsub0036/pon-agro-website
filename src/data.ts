/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import {
  Product,
  Stat,
  Testimonial,
  YouTubeVideo,
} from './types';

import heroBg from './assets/images/hero_tractor_field_1779611911714.png';

import workshopDetail from './assets/images/agro_workshop_craft_1779611929907.png';

import rotaLevelerProd from './assets/images/rota_leveler_machinery_1779611945867.png';

export const IMAGES = {
  heroBg,
  workshopDetail,
  rotaLevelerProd,

  bearings:
    'https://images.unsplash.com/photo-1618979287755-900f07466cf8?auto=format&fit=crop&q=80&w=800',

  adapters:
    'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800',

  spareParts:
    'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&q=80&w=800',

  rotavatorFields:
    'https://images.unsplash.com/photo-1530906358369-a5dcf85b8801?auto=format&fit=crop&q=80&w=800',

  customerDelivery:
    'https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&q=80&w=800',
};

export const CONTACT_INFO = {
  phone: '+918870712295', // Simulated authentic business phone
  phoneDisplay: '+91 88707 12295',
  whatsapp: 'https://wa.me/918870712295?text=Hi%20PON%20AGRO%20IMPLEMENTS,%20I%20am%20interested%20in%20your%20agricultural%20products.',
  directions: 'https://maps.google.com/?q=PON+AGRO+IMPLEMENTS+Vandavasi+Tamil+Nadu',
  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15582.564756858276!2d79.60538356396593!3d12.500599426915865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f9c465646f91%3A0xc6cb5a3d073efff2!2sVandavasi%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
  email: 'ponagroimplements@gmail.com',
  addressEn: 'PON AGRO IMPLEMENTS, Chetpet to Vandavasi Road,Kozhipuliyur, Thiruvanamalai- 604502',
  addressTa: 'பொன் அக்ரோ இம்ப்ளிமெண்ட்ஸ்,சேத்துப்பட்டு - வந்தவாசி சாலை, கோழிபுலியூர், திருவண்ணாமலை - 604502',
  hoursEn: 'Mon - Sat: 9:00 AM - 7:30 PM | Sun: Closed',
  hoursTa: 'திங்கள் - சனி: காலை 9:00 - மாலை 7:30 | ஞாயிறு: விடுமுறை',
};

export const STATS: Stat[] = [
  {
    id: 'exp',
    count: 1,
    suffix: ' Year',
    labelEn: 'Young & Growing Brand',
    labelTa: 'வளர்ந்து வரும் இளம் பிராண்ட்',
    iconName: 'Zap'
  },
  {
    id: 'farmers',
    count: 200,
    suffix: '+',
    labelEn: 'Farmers Trusted',
    labelTa: 'மகிழ்ச்சியான விவசாயிகள்',
    iconName: 'Users'
  },
  {
    id: 'products',
    count: 10,
    suffix: '+',
    labelEn: 'Variants Manufactured',
    labelTa: 'தயாரிப்பு வகைகள்',
    iconName: 'Settings'
  },
  {
    id: 'villages',
    count: 30,
    suffix: '+',
    labelEn: 'Villages Covered',
    labelTa: 'கிராமங்களில் விநியோகம்',
    iconName: 'MapPin'
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'arecanut-dehusker',
    nameEn: 'PON Motorized Arecanut Dehusker',
    nameTa: 'பொன் அதிநவீன பாக்கு உரிக்கும் மெஷின்',
    category: 'Machinery',
    price: '₹1,25,000',
    descEn: 'High-performance automated arecanut peeling/de-husking machine. Handles up to 250kg of nuts per hour, protecting core kernels from breakage with precise rubber-coated spline technology.',
    descTa: 'அதிவேக தானியங்கி பாக்கு உரிக்கும் மெஷின். ஒரு மணி நேரத்திற்கு 250 கிலோ வரை உரிக்கும் திறன் கொண்டது. பாக்குப்பருப்பு உடையாமல் முழுமையாக பிரித்தெடுக்கும் தொழில்நுட்பம் கொண்டது.',
    specsEn: [
      'Heavy-duty 2HP high-torque single-phase electric motor',
      'Adjustable rollers matching dry or wet harvest conditions',
      'Highly durable steel structural frame with rubber-covered splines',
      'Dual-chute output for immediate separate grading'
    ],
    specsTa: [
      'அதிக இழுவிசை கொண்ட 2HP சிங்கிள் பேஸ் மின்சார மோட்டார்',
      'ஈரமான அல்லது காய்ந்த பாக்குகளுக்கு ஏற்ப அட்ஜஸ்ட் செய்யும் உருளைகள்',
      'ரப்பர் பூசப்பட்ட உருளைகள் மூலம் பருப்பு உடையா பாதுகாப்பு',
      'உரித்த பாக்கு மற்றும் உமிகளை உடனே பிரித்தெடுக்கும் இரட்டை வழி'
    ],
    image: 'https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&q=80&w=800',
    isAvailable: true,
    badgeEn: 'Best Machine',
    badgeTa: 'சிறந்த மெஷின்',
    modelCode: 'PON-AD-250'
  },
  {
    id: 'sugarcane-harvester-attachment',
    nameEn: 'PON Sugarcane Loader Crane',
    nameTa: 'பொன் கரும்பு ஏற்றும் ஹைட்ராலிக் கிரேன்',
    category: 'Machinery',
    price: '₹2,65,000',
    descEn: 'Tractor-mounted sugarcane grabber/loader with high-pressure double hydraulic rams. Features a 360-degree rotating mechanical arm, heavy boom, and reinforced grab claws for immediate tractor loading.',
    descTa: 'டிராக்டரில் இணைக்கக்கூடிய அதிநவீன கரும்பு ஏற்றி மற்றும் கிராபர். 360 டிகிரி சுழலும் இயந்திர கை மற்றும் இரட்டை ஹைட்ராலிக் சிலிண்டர்கள் மூலம் கரும்பு கட்டுகளை எளிதாக்குகிறது.',
    specsEn: [
      'Compatible with 45HP - 70HP leading utility tractors',
      'High-pressure dual cylinders with oil-cooling safety relief valves',
      'Forged heavy-gauge carbon steel claws with non-slip ridges',
      'Maximum lifting height of 14 feet for high-sided agro trucks'
    ],
    specsTa: [
      '45HP முதல் 70HP வரையிலான அனைத்து ரக டிராக்டர்களுடன் இயங்கும்',
      'பாதுகாப்பான பிரஷர் ரிலீஃப் வால்வு கொண்ட மெகா சிலிண்டர்கள்',
      'கரும்பு கட்டுகள் நழுவாதவாறு வளைக்கப்பட்ட கார்பன் இரும்பு நகங்கள்',
      'லாரிகளில் சுலபமாக ஏற்றக்கூடிய 14 அடி தூக்கும் ஹைட்ராலிக் நீளம்'
    ],
    image: 'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&q=80&w=800',
    isAvailable: true,
    badgeEn: 'Farmer’s Choice',
    badgeTa: 'வழக்கமான விருப்பம்',
    modelCode: 'PON-SCL-360'
  },
  {
    id: 'rota-leveler-premium',
    nameEn: 'PON Rota Leveler (Premium)',
    nameTa: 'ரொட்டோ லெவலர் (பிரீமியம்)',
    category: 'Rota Leveler',
    price: '₹38,000',
    descEn: 'Heavy duty flat soil bed leveler attachment with highly durable structural box frames and premium thick laser-finished blades. Tailored for Tamil Nadu wetland and dryland paddy preparations.',
    descTa: 'பயிர்களுக்கு ஏற்ப மண்ணை நேர்த்தியாக சமப்படுத்தும் ஹெவி டியூட்டி லெவலர். தடிமனான லேசர் பினிஷிங் பிளேடுகள் மற்றும் உறுதியான பாக்ஸ் ஃபிரேம் தொழில்நுட்பத்துடன் உருவாக்கப்பட்டது.',
    specsEn: [
      'High-grade anti-bend reinforced structural carbon steel framework',
      'Thick multi-wear laser scraper plate for perfect levels',
      'Dual heavy tension springs for ultra-smooth leveling action',
      'Double coat paint to prevent chemical and rust erosion'
    ],
    specsTa: [
      'வளையாத மற்றும் உடையாத உயர்தர வலுவூட்டப்பட்ட கார்பன் ஸ்டீல் கட்டமைப்பு',
      'மண்ணை சமப்படுத்தக்கூடிய தடிமனான லேசர் ஸ்கிராப்பர் பிளேடுகள்',
      'அதிர்வு மற்றும் சுமையை தாங்கும் இரட்டை ஸ்பிரிங் தொழில்நுட்பம்',
      'துருப்பிடிக்காத உயர்தர இரட்டை அடுக்கு பெயின்ட் கோட்டிங்'
    ],
    image: IMAGES.rotaLevelerProd,
    isAvailable: true,
    badgeEn: 'Best Seller',
    badgeTa: 'அதிக விற்பனை',
    modelCode: 'PON-RL-08'
  },
  {
    id: 'rota-leveler-standard',
    nameEn: 'PON Rota Leveler (Eco-Comfort)',
    nameTa: 'ரொட்டோ லெவலர் (எக்கோ ஸ்டாண்டர்ட்)',
    category: 'Rota Leveler',
    price: '₹32,500',
    descEn: 'A high-efficiency lightweight soil leveler for medium HP tractors. Provides excellent structural rigidity and saves tractor diesel consumption through reduced drag.',
    descTa: 'நடுத்தர திறன் (HP) கொண்ட டிராக்டர்களுக்காக வடிவமைக்கப்பட்ட எடையற்ற மற்றும் அதிக உறுதி வாய்ந்த லெவலர். டீசல் தேவையை வெகுவாகக் குறைக்கிறது.',
    specsEn: [
      'Optimized weight design for 35HP - 45HP tractors',
      'Quick-hitch compatible attachment for single-person setup',
      'Corrosion resistant powder-coated primer',
      '1 Year full structural warranty against manufacturing defects'
    ],
    specsTa: [
      '35HP முதல் 45HP டிராக்டர்களுக்கு மிகச் சிறந்த வடிவமைப்பு',
      'ஒரே நபர் எளிதாக இணைக்கக்கூடிய குவிக்-ஹிட்ச் வசதி',
      'துருபிடிப்பதை தடுக்கும் பவுடர் கோட்டிங் ப்ரைமர்',
      'உற்பத்தி குறைபாடுகளுக்கு 1 வருட முழு உத்தரவாதம்'
    ],
    image: IMAGES.rotavatorFields,
    isAvailable: true,
    badgeEn: 'Best Value',
    badgeTa: 'சிறந்த மதிப்பு',
    modelCode: 'PON-RL-ECO'
  },
  {
    id: 'rota-sd-heavy-duty',
    nameEn: 'PON Rota SD Heavy Duty Drive',
    nameTa: 'பொன் ரோட்டா எஸ்டி ஹெவி டியூட்டி',
    category: 'Rota SD',
    price: '₹45,000',
    descEn: 'Super durable heavy-duty drive levelers created specially for clay-rich and tough soils in Tiruvannamalai region. Built to endure immense mechanical stress with specialized vibration dampeners.',
    descTa: 'களிமண் மற்றும் கடினமான நிலப்பகுதிகளுக்கு ஏற்ற சூப்பர் டியூரபிள் டிரைவ் லெவலர். அதிர்வுகளை தாங்கி மிக நீண்ட நாள் உழைக்கக்கூடியது.',
    specsEn: [
      'Full cast-iron heavy hubs for absolute solid balance',
      'Specially engineered soundless spring mechanism',
      'Extra thick support columns to withstanding deep clay drag',
      'Custom grease points for easy maintenance'
    ],
    specsTa: [
      'நிலையான சமநிலைக்கு முழு வார்ப்பிரும்பு ஹெவி ஹப்கள்',
      'சத்தமின்றி மென்மையாக இயங்கும் பிரத்யேக ஸ்பிரிங் சிஸ்டம்',
      'களிமண்ணின் இழுவையை தாங்கும் கூடுதல் தடிமனான தூண்கள்',
      'பராமரிப்பை எளிதாக்கும் கிரீஸ் பாயிண்டுகள்'
    ],
    image: IMAGES.workshopDetail,
    isAvailable: true,
    badgeEn: 'New Launch',
    badgeTa: 'புதிய அறிமுகம்',
    modelCode: 'PON-RSD-HD2'
  },
  {
    id: 'bearings-premium-pack',
    nameEn: 'PON Premium Carbon Bearings',
    nameTa: 'பொன் பிரீமியம் கார்பன் பேரிங்ஸ்',
    category: 'Bearings',
    price: '₹1,850',
    descEn: 'Heavy duty anti-friction ball bearings with multi-lip polymer seals. Keeps mud, dust, and slurry water out during deep flooded field work.',
    descTa: 'மண், தூசி மற்றும் சேற்று நீர் உள்ளே புகாதவாறு லூப்ரிகேஷன் செய்யப்பட்ட உயர்தர பேரிங்கிள். சேற்று உழவின் போது நீண்ட காலம் உழைக்கும்.',
    specsEn: [
      'High-chromium alloy steel balls of grade G10 precision',
      'Double-sided water-resistant rubber and steel seals',
      'Pre-lubricated with heat-stable synthetic agro grease',
      'Guaranteed rotation longevity under extreme farm slurry'
    ],
    specsTa: [
      'உயர்தர குரோமியம் அலாய் ஸ்டீல் கொண்டு தயாரிக்கப்பட்டது',
      'நீர் மற்றும் சேறு உள்ளே புகாதவாறு இருபுறமும் லப்பர் சீல்',
      'வெப்பத்தைத் தாங்கும் செயற்கை அக்ரோ கிரீஸ் போடப்பட்டுள்ளது',
      'சேற்றில் வேலை செய்தாலும் நீண்ட ஆயுளைத் தரும்'
    ],
    image: IMAGES.bearings,
    isAvailable: true,
    modelCode: 'PON-BRG-6208'
  },
  {
    id: 'agro-adapters-multi',
    nameEn: 'PON Universal Agro Shaft Adapters',
    nameTa: 'பொன் யுனிவர்சல் அக்ரோ அடாப்டர்',
    category: 'Agro Adapters',
    price: '₹2,400',
    descEn: 'High-torque PTO shaft adapters to bridge various tractor splines with rotavators, levelers, and water pumps seamlessly with zero slip.',
    descTa: 'அனைத்து வகை டிராக்டர்களின் பி.டி.ஓ (PTO) ஷாஃப்ட் மற்றும் ரொட்டாவேட்டர் போன்ற கருவிகளை இணைக்கக்கூடிய கச்சிதமான அடாப்டர்.',
    specsEn: [
      'Full CNC precision machined from high tensile forged steel',
      'Standard 6-spline to 21-spline conversion configurations',
      'Heat-treated spline walls for minimum metal rounding wear',
      'Simple secure pin locking system'
    ],
    specsTa: [
      'உயர் இழுவிசை கொண்ட ஃபோர்ஜ்டு ஸ்டீல் கொண்டு CNC-இல் செய்யப்பட்டது',
      'அனைத்து விதமான 6-ஸ்ப்லைன் மற்றும் 21-ஸ்ப்லைன் மாற்றும் வசதி',
      'தேய்மானத்தைத் தடுக்கும் ஹீட்-டிரீட்டட் தொழில்நுட்பம்',
      'எளிமையான மற்றும் பாதுகாப்பான பின் லாக்கிங் சிஸ்டம்'
    ],
    image: IMAGES.adapters,
    isAvailable: true,
    modelCode: 'PON-ADP-U6'
  },
  {
    id: 'spare-parts-kit',
    nameEn: 'Rotavator Spare Blades & Bolt Kit',
    nameTa: 'ரொட்டாவேட்டர் பிளேடுகள் மற்றும் நட்-போல்ட்',
    category: 'Spare Parts',
    price: '₹4,800',
    descEn: 'Ready-to-use replacement kit containing Boron steel L-type blades and high-tensile locking bolts to overhaul worn attachments.',
    descTa: 'கொதிநிலைக்கு உட்படுத்தப்பட்ட போரான் ஸ்டீல் L-வகை பிளேடுகள் மற்றும் மெட்டல் நட்-போல்ட் அடங்கிய முழு உதிரிபாக கிட்.',
    specsEn: [
      'Made from tough Boron steel that sharpens as it wears',
      'High shear-strength grade 10.9 locking hex bolts included',
      'Precisely curved profile for excellent trash clearance',
      'Kit contains 36 high performance blades'
    ],
    specsTa: [
      'மண்ணில் வேலை செய்ய செய்ய தானாகவே கூர்மையாகும் போரான் ஸ்டீல்',
      'அதிக உறுதியான 10.9 கிரேடு ஹெக்ஸ் போல்ட்கள் கொண்டது',
      'புல் மற்றும் செடிகள் சிக்காதவாறு கச்சிதமாக வளைக்கப்பட்ட வடிவம்',
      'இந்த கிட்-டில் 36 உயர்தர பிளேடுகள் உள்ளன'
    ],
    image: IMAGES.spareParts,
    isAvailable: true,
    badgeEn: 'Popular Spares',
    badgeTa: 'தேவைப்படும் உதிரிபாகம்',
    modelCode: 'PON-KIT-36'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    nameEn: 'K. Ramasamy',
    nameTa: 'K. இராமசாமி',
    villageEn: 'Salai Village, Vandavasi',
    villageTa: 'சாலை கிராமம், வந்தவாசி',
    productEn: 'PON Rota Leveler Premium',
    productTa: 'PON ரொட்டோ லெவலர் பிரீமியம்',
    feedbackEn: 'Being a 1-year-old local manufacturer, I tested PON Agro leveler directly in our wet paddy soil in Vandavasi. It levels completely in a single pass. The twin heavy springs handle vibrations so well. Highly recommended!',
    feedbackTa: 'எங்கள் வந்தவாசிக்கு பக்கத்திலேயே தயாரிப்பதால் வாங்குவது சுலபமாக இருந்தது. சேற்று உழவில் ஒரே நடையில் நிலத்தை அருமையாக சமப்படுத்துகிறது. ஸ்பிரிங் அமைப்பு அதிர்வை சுத்தமாக குறைக்கிறது!',
    rating: 5
  },
  {
    id: 't2',
    nameEn: 'M. Senthilkumar',
    nameTa: 'M. செந்தில்குமார்',
    villageEn: 'Polur Taluk',
    villageTa: 'போளூர் தாலுகா',
    productEn: 'PON Rota SD Heavy Duty Drive',
    productTa: 'PON ரோட்டா எஸ்டி ஹெவி டியூட்டி',
    feedbackEn: 'Standard shop levelers break easily in the hard red and clay soils of Polur. PON Rota SD has extra-thick support steel that did not bend even after 200 acres of intensive operations. Outstanding fabrication quality.',
    feedbackTa: 'மற்ற கடைகளில் வாங்கியது போளூர் களிமண்ணில் சீக்கிரம் உடைந்துவிடும். ஆனால் PON ரோட்டா எஸ்டி 200 ஏக்கருக்கு மேல் ஓட்டிய பின்னும் வளைவோ உடைப்போ இல்லை. மிகவும் பலம்!',
    rating: 5
  },
  {
    id: 't3',
    nameEn: 'V. Elumalai',
    nameTa: 'V. எழுமலை',
    villageEn: 'Cheyyar Bypass Road',
    villageTa: 'செய்யாறு பைபாஸ் ரோடு',
    productEn: 'Rotavator Spare Blades & Bolt Kit',
    productTa: 'ரொட்டாவேட்டர் உதிரிபாக கிட்',
    feedbackEn: 'Their Boron steel blades are incredibly tough. Generally, normal blades wear out in a single season, but PON blades have lasted double the time, saving me a lot of money and mechanics charge.',
    feedbackTa: 'வந்தவாசியில் பொன் அக்ரோவில் வாங்கிய போரான் ஸ்டீல் பிளேடுகள் தரம் அற்புதம். வழக்கமான பிளேடுகளை விட இரண்டு மடங்கு நைந்து போகாமல் உழைக்கிறது. என் பணம் மிச்சமாகியுள்ளது.',
    rating: 5
  }
];

export const YOUTUBE_VIDEOS: YouTubeVideo[] = [
  {
    id: 'y1',
    titleEn: 'PON Rota Leveler Live Wet Paddy Field Demo - Featured by @villagethamizhan',
    titleTa: 'நெல் வயலில் பொன் இரட்டை ஸ்பிரிங் லெவலர் நேரடி சோதனை | @villagethamizhan',
    youtubeId: 'Lia_pMcl9Ew',
    duration: '11:45',
    isPopular: true
  },
  {
    id: 'y2',
    titleEn: 'High Speed Arecanut Dehusker Machine Demonstration - @villagethamizhan Vlog',
    titleTa: 'பாக்கு உரிக்கும் மெஷின் நேரடி களச் செயல்விளக்கம் | @villagethamizhan',
    youtubeId: 'r16L5FuxdCI',
    duration: '14:20',
    isPopular: true
  },
  {
    id: 'y3',
    titleEn: 'Tractor Sugarcane Grabber Crane Operational Guide - @villagethamizhan Review',
    titleTa: 'டிராக்டர் கரும்பு ஏற்றும் ஹைட்ராலிக் அக்ரோ கிரேன் டெமோ | @villagethamizhan',
    youtubeId: 'F9k4Yy_vUas',
    duration: '9:30'
  }
];


export const TRANSLATIONS = {
  en: {
    announcement: '🌱 Premium Agro Implements Directly From Manufacturer - Located in Vandavasi, TN',
    brandName: 'PON AGRO IMPLEMENTS',
    taglineShort: 'Tamil Nadu’s Trusted Farmer Partner',
    taglineDetailed: 'High-quality agricultural implements built for modern farmers across Tamil Nadu.',
    tamilBadge: 'தமிழ்நாட்டின் நம்பகமான விவசாய கருவிகள்',
    navHome: 'Home',
    navProducts: 'Products',
    navAbout: 'About Us',
    navVideos: 'Farming Videos',
    navGallery: 'Gallery',
    navContact: 'Contact',
    btnEnquiry: 'Enquire on WhatsApp',
    btnViewProducts: 'View Products',
    btnDetails: 'View Specifications',
    btnCallNow: 'Call Now',
    btnDirections: 'Get Directions',
    
    // Stats section
    statsTitle: 'Grounded in Quality, Driven by Trust',
    statsSub: 'Though we started just a year ago, our farmer-first dedication has earned real fields-tested credibility across South India.',
    
    // Trust section
    trustTitle: 'Why Farmers Choose PON AGRO',
    trustSub: 'No corporate puffery. Just unyielding Indian steel, direct workshop pricing, and honest Tamil Nadu engineering.',
    badgeManufacturer: 'Direct Manufacturer',
    badgeManufacturerDesc: 'Get complete transparency. No agency broker commissions or dealership markups.',
    badgeQuality: 'Field Tested Quality',
    badgeQualityDesc: 'Tested in real clay, gravel, and muddy wetland paddy soils of Tiruvannamalai.',
    badgeTamilNadu: 'Local Tamil Nadu Brand',
    badgeTamilNaduDesc: 'Crafted in Vandavasi with deep awareness of local land types and hydration conditions.',
    badgeSupport: 'Direct Workshop Support',
    badgeSupportDesc: 'Easy spare parts, quick on-call mechanics advice, and rapid repairs.',
    
    // Products Section
    prodTitle: 'Our Agricultural Implement Catalog',
    prodSub: 'Browse our specialized heavy-duty tools, attachments, adapters, and spares. Filter by category.',
    filterAll: 'All Categories',
    priceText: 'Workshop Price',
    statusInStock: 'In Stock',
    statusOrder: 'On Demand',
    modelLabel: 'Model Code',
    specsHeader: 'Key Mechanical Strength:',
    
    // Video Section
    videoTitle: 'Watch Our Implements In Action',
    videoSub: 'Real video footage of our levelers, rotavator attachments, and workshop fabrications in real Tamil soil.',
    videoPopular: 'Most Watched Demo',
    btnSubscribe: 'Subscribe to PON AGRO Channel',
    btnSocials: 'Follow on Social Media',
    youtubeStats: '4.9★ Rated locally by over 300+ Farmers',
    
    // About Section
    aboutTitle: 'True Local Craftsmanship from Vandavasi',
    aboutSub: 'PON AGRO IMPLEMENTS was started in 2025 by passionate fabricators with a simple dream: build implements that NEVER bend.',
    aboutPara1: 'Most implements in the market are mass-produced with cheap thin-sheet imports. They break inside thick clay, requiring multiple re-welds. At our Vandavasi workshop, we forge every chassis block, spring rod, and leveling plate using deep structural carbon and boron steel, fully welded by seasoned local artisans.',
    aboutPara2: 'We do not sell through flashy corporate stores. We are proud of our simple garage and workshop. When you buy from us, you buy directly from the workshop, ensuring custom color coating, direct-owner interaction, and lifetime support.',
    aboutStatTitle: 'Real Field Statistics',
    
    // Testimonials
    testTitle: 'What Real Farmers are Saying',
    testSub: 'Hear straightforward reviews from Tamil Nadu farmers who own and run our implements on their tractors.',
    verifiedPurchaser: 'Verified Agro User',
    
    // Gallery
    galleryTitle: 'Behind the Scenes & Field Shots',
    gallerySub: 'A look into our everyday fabrication schedules, deliveries, and real-time tractor installations.',
    
    // Contact
    contactTitle: 'Visit Our Vandavasi Workshop',
    contactSub: 'Drop by to inspect materials, ask for a demonstation, or custom-order implement sizes.',
    addressTitle: 'Workshop Address',
    phoneTitle: 'Direct Mobile Inquiry',
    hoursTitle: 'Operational Hours',
    whatsappTitle: 'Direct Chat Link',
    formHeader: 'Send Quick Message',
    formName: 'Name',
    formPhone: 'Phone Number',
    formVillage: 'Your Village/Place',
    formProduct: 'Interested Product',
    formMessage: 'Detailed requirements (Optional)',
    formSubmit: 'Send Inquiry via WhatsApp',
    formSuccess: 'Great! WhatsApp screen opened with your template enquiry detail.',
    
    // Footer
    footerMsg: 'Designed and manufactured with pride for Tamil Nadu farmers. Reliable, unbreakable agricultural implements from Vandavasi.',
    rightsReserved: 'PON AGRO IMPLEMENTS. All Rights Reserved.',
    footerCraft: 'Made with love for Tamil Nadu Farmers 🌾'
  },
  ta: {
    announcement: '🌱 உற்பத்தி நிலையத்திலிருந்து நேரடியாக விவசாய கருவிகள் - வந்தவாசி, தமிழ்நாடு',
    brandName: 'பொன் அக்ரோ இம்ப்ளிமெண்ட்ஸ்',
    taglineShort: 'தமிழ்நாட்டின் நம்பகமான விவசாய கூட்டாளி',
    taglineDetailed: 'தமிழ்நாடு விவசாயிகளின் தேவைகளுக்கேற்ப கச்சிதமாக வடிவமைக்கப்பட்ட தரமான விவசாயக் கருவிகள்.',
    tamilBadge: 'தமிழ்நாட்டின் நம்பகமான விவசாய கருவிகள்',
    navHome: 'முகப்பு',
    navProducts: 'கருவிகள்',
    navAbout: 'எங்களை பற்றி',
    navVideos: 'விவசாய வீடியோக்கள்',
    navGallery: 'புகைப்படங்கள்',
    navContact: 'தொடர்புக்கு',
    btnEnquiry: 'வாட்ஸ்அப் விசாரணை',
    btnViewProducts: 'கருவிகளைப் பார்க்க',
    btnDetails: 'தொழில்நுட்ப விபரங்கள்',
    btnCallNow: 'உடனே அழைக்க',
    btnDirections: 'வழிகாட்டி மேப்',
    
    // Stats section
    statsTitle: 'தரம் மற்றும் நம்பிக்கையின் அடித்தளம்',
    statsSub: 'நாங்கள் தொடங்கி 1 வருடமே ஆனாலும், விவசாயிகளின் தேவையை உணர்ந்து உழைத்ததால் தமிழ்நாடு முழுவதும் சிறந்த வரவேற்பைப் பெற்றுள்ளோம்.',
    
    // Trust section
    trustTitle: 'விவசாயிகள் ஏன் PON AGRO-வை தேர்வு செய்கிறார்கள்?',
    trustSub: 'வெளிப்படையான பட்டறை தயாரிப்பு, நேரடி நியாயமான விலை, மற்றும் தமிழக மண்ணிற்கேற்ற உறுதியான வடிவமைப்பு.',
    badgeManufacturer: 'நேரடி தயாரிப்பாளர்',
    badgeManufacturerDesc: 'டீலர்கள் அல்லது தரகர் கமிஷன்கள் இல்லை. வெளிப்படையான நேரடி தொழிற்சாலை விலை.',
    badgeQuality: 'மண்ணில் சோதிக்கப்பட்ட தரம்',
    badgeQualityDesc: 'நம் திருவண்ணாமலை மாவட்டத்தின் களிமண், செம்மண் மற்றும் சேற்று நிலங்களில் நேரடி சோதனை செய்யப்பட்டது.',
    badgeTamilNadu: 'தமிழக விவசாயி பிராண்ட்',
    badgeTamilNaduDesc: 'வந்தவாசியில் உள்ள தட்பவெப்ப நிலை மற்றும் மண்ணின் ஈரப்பதத்திற்கு ஏற்ப நேர்த்தியான வடிவமைப்பு.',
    badgeSupport: 'நேரடி பட்டறை ஆதரவு',
    badgeSupportDesc: 'உடனடி உதிரிபாகங்கள், போன் மூலம் மெக்கானிக் ஆலோசனைகள் மற்றும் உடனடி பழுதுபார்ப்பு வசதி.',
    
    // Products Section
    prodTitle: 'எங்கள் விவசாயக் கருவிகளின் விபரங்கள்',
    prodSub: 'எங்கள் ஹெவி டியூட்டி ரோட்டோ லெவலர், அடாப்டர்கள், பேரிங்ஸ் போன்ற தயாரிப்புகளை ஆராயுங்கள்.',
    filterAll: 'அனைத்து பிரிவுகளும்',
    priceText: 'பட்டறை விலை',
    statusInStock: 'ஸ்டாக் உள்ளது',
    statusOrder: 'தேவைக்கேற்ப',
    modelLabel: 'மாடல் கோட்',
    specsHeader: 'வடிவமைப்பின் தனிச்சிறப்புகள்:',
    
    // Video Section
    videoTitle: 'செயல்முறை வீடியோக்களைப் பாருங்கள்',
    videoSub: 'எங்கள் கருவிகள் தமிழக மண்ணில் டிராக்டர்களில் இணைந்து வெற்றிகரமாக செயல்படும் நேரடி வீடியோ பதிவுகள்.',
    videoPopular: 'அதிகம் பார்க்கப்பட்ட டெமோ',
    btnSubscribe: 'பொன் அக்ரோ சேனலை சப்ஸ்கிரைப் செய்க',
    btnSocials: 'சமூக வலைத்தளங்களில் பின்தொடரவும்',
    youtubeStats: '300-க்கும் மேற்பட்ட விவசாயிகளால் சான்றளிக்கப்பட்டது 4.9★',
    
    // About Section
    aboutTitle: 'வந்தவாசியின் பாரம்பரிய தயாரிப்பு தரம்',
    aboutSub: 'எந்த சூழ்நிலையிலும் வளையாத மற்றும் பழுதடையாத உயர்தர கருவிகளை வழங்குவதற்காக 2025 இல் ஆரம்பிக்கப்பட்டது பொன் அக்ரோ.',
    aboutPara1: 'இன்றைய மார்க்கெட்டில் பெரும்பாலும் சீனாவில் இருந்து வரும் மலிவான மெல்லிய தகடுகளை கொண்டு செய்து விடுகிறார்கள். அவை களிமண்ணில் வேலை செய்யும்போது எளிதில் வளைந்து விடுகின்றன. எங்கள் வந்தவாசி பட்டறையில், தடிமனான ஸ்ட்ரக்சுரல் கார்பன் ஸ்டீல் மற்றும் போரான் ஸ்டீல் கொண்டு, அனுபவமிக்க உள்ளூர் கலைஞர்களால் முழுமையாக வெல்டிங் செய்யப்படுகிறது.',
    aboutPara2: 'எங்களிடம் ஆடம்பரக் கடைகள் இல்லை, பெருமைமிகு சாதாரண பட்டறையே எங்களின் முகவரி. எங்களிடம் நீங்கள் வாங்கும்போது, நீங்கள் தயாரிப்பாளரிடமிருந்து நேரடியாக வாங்குகிறீர்கள். இதனால் தனிப்பயனாக்கப்பட்ட பெயிண்ட் நிறம், சிறந்த நேரடி தொடர்பு மற்றும் வாழ்நாள் ஆதரவு உறுதி பெறுகிறது.',
    aboutStatTitle: 'உண்மை நிலவரங்கள்',
    
    // Testimonials
    testTitle: 'விவசாயிகளின் நேரடி கருத்துக்கள்',
    testSub: 'பொன் அக்ரோ கருவிகளை தங்கள் டிராக்டர்களில் பயன்படுத்தி பலனடைந்த தமிழக விவசாயிகளின் நேரடி அனுபவங்கள்.',
    verifiedPurchaser: 'உறுதிசெய்யப்பட்ட விவசாயி',
    
    // Gallery
    galleryTitle: 'பட்டறை மற்றும் களப் புகைப்படங்கள்',
    gallerySub: 'எங்களின் அன்றாட பணிகள், தயாரிப்புகள் மற்றும் விவசாயிகளுக்கு விநியோகம் செய்த சில சிறந்த தருணங்கள்.',
    
    // Contact
    contactTitle: 'எங்கள் வந்தவாசி பட்டறைக்கு வாருங்கள்',
    contactSub: 'பயன்படுத்தப்படும் இரும்புத் தகடுகள் மற்றும் கருவிகளை நேரடியாகப் பார்வையிட்டு, ஆர்டர் செய்ய எங்களிடம் வாருங்கள்.',
    addressTitle: 'தொழிற்சாலை முகவரி',
    phoneTitle: 'நேரடி மொபைல் தொடர்பு',
    hoursTitle: 'வேலை நேரம்',
    whatsappTitle: 'நேரடி வாட்ஸ்அப் அரட்டை',
    formHeader: 'விவரங்களை அனுப்பவும்',
    formName: 'உங்கள் பெயர்',
    formPhone: 'தொலைபேசி எண்',
    formVillage: 'உங்கள் ஊர் / கிராமம்',
    formProduct: 'தேவைப்படும் கருவி',
    formMessage: 'கூடுதல் விவரங்கள் (தேவையெனில்)',
    formSubmit: 'வாட்ஸ்அப்பில் விவரங்களை அனுப்பவும்',
    formSuccess: 'மிக்க மகிழ்ச்சி! விவரங்களுடன் கூடிய வாட்ஸ்அப் செய்தித் தளம் திறக்கப்பட்டுள்ளது.',
    
    // Footer
    footerMsg: 'தமிழ்நாடு விவசாயிகளுக்காக பெருமையுடன் தயாரிப்பவர். வந்தவாசியில் இருந்து உறுதியான, வாழ்நாள் முழுவதும் உழைக்கக்கூடிய சாதனங்கள்.',
    rightsReserved: 'பொன் அக்ரோ இம்ப்ளிமெண்ட்ஸ். அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.',
    footerCraft: 'தமிழக விவசாயிகளுக்காக அன்புடன் உருவாக்கப்பட்டது 🌾'
  }
};
