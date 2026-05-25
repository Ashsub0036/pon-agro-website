import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Youtube, Award, ExternalLink, MessageSquare, Flame, HelpCircle, Layers, Search } from 'lucide-react';
import { Language, YouTubeVideo } from '../types';
import { TRANSLATIONS, YOUTUBE_VIDEOS, CONTACT_INFO } from '../data';

interface VideosPageProps {
  lang: Language;
}

export default function VideosPage({ lang }: VideosPageProps) {
  const t = TRANSLATIONS[lang];
  const [activeVideo, setActiveVideo] = useState<YouTubeVideo | null>(null);
  const [activeTab, setActiveTab] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const tags = [
    { id: 'All', labelEn: 'All Videos', labelTa: 'அனைத்து வீடியோக்கள்' },
    { id: 'field', labelEn: 'Field Demos', labelTa: 'களச் சோதனைகள்' },
    { id: 'maint', labelEn: 'Assembly Guidance', labelTa: 'அமைக்கும் முறைகள்' }
  ];

  // Dummy highly descriptive image matches representing live field tests on soil
  const thumbs = [
    'https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&q=80&w=800', // paddy mud
    'https://images.unsplash.com/photo-1473973266408-ed4e27abdd47?auto=format&fit=crop&q=80&w=800', // steel
    'https://images.unsplash.com/photo-1530906358369-a5dcf85b8801?auto=format&fit=crop&q=80&w=800'  // tractor
  ];

  const filteredVideos = YOUTUBE_VIDEOS.filter(video => {
    const matchesSearch = `${video.titleEn} ${video.titleTa}`.toLowerCase().includes(searchTerm.toLowerCase());
    
    let matchesTab = true;
    if (activeTab === 'field') {
      matchesTab = video.titleEn.toLowerCase().includes('tractor') || video.titleEn.toLowerCase().includes('demo') || video.titleEn.toLowerCase().includes('test');
    } else if (activeTab === 'maint') {
      matchesTab = video.titleEn.toLowerCase().includes('inside') || video.titleEn.toLowerCase().includes('parts') || video.titleEn.toLowerCase().includes('shaft');
    }
    
    return matchesSearch && matchesTab;
  });

  return (
    <div id="videos-page-container" className="pt-32 pb-24 min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="bg-slate-900 border border-slate-800 text-white rounded-3xl p-8 sm:p-12 shadow-sm relative overflow-hidden mb-12">
          <div className="absolute top-[-30%] right-[-10%] w-96 h-96 bg-rose-600/15 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-2xl text-left space-y-4">
            <span className="text-rose-400 font-black text-xs uppercase tracking-widest bg-rose-600/20 px-3 py-1.5 rounded-full inline-block">
              {lang === 'ta' ? 'அசலான திருவண்ணாமலை களப் பதிவுகள்' : 'PON AGRO YT STREAM'}
            </span>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-none">
              {lang === 'ta' ? 'விவசாயக் கள செயல்விளக்கங்கள்' : 'Field Demonstration Videos'}
            </h1>
            <p className="text-slate-300 text-xs sm:text-sm font-semibold leading-relaxed">
              {lang === 'ta' ? 
                'நாங்கள் திருவண்ணாமலை மற்றும் சுற்றியுள்ள கிராமங்களில் உள்ள ஏரி உழவுகளிலும் சேற்று நிலங்களிலும் பொன் அக்ரோ கருவிகளை இயக்கி எடுத்த உண்மையான களப்பதிவுகள்.' : 
                'Watch our double spring levelers and heavy duty roto adapters on the job dragging clay, sand and loam soil across Tamil Nadu.'}
            </p>
          </div>
        </div>

        {/* Video Search Control Panels */}
        <div className="flex flex-col md:flex-row justify-between items-center bg-white p-5 rounded-2xl border border-gray-150 gap-4 mb-10 shadow-sm">
          <div className="flex items-center space-x-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {tags.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 text-xs font-black rounded-lg transition-colors cursor-pointer shrink-0 ${
                  activeTab === tab.id 
                    ? 'bg-rose-600 text-white shadow-sm' 
                    : 'bg-gray-50 border border-gray-100 text-gray-700 hover:bg-gray-100'
                }`}
              >
                {lang === 'ta' ? tab.labelTa : tab.labelEn}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input 
              type="text"
              placeholder={lang === 'ta' ? 'வீடியோக்களைத் தேடுக...' : 'Search demo title...'}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-xs border border-gray-200 rounded-xl focus:ring-2 focus:ring-rose-500 bg-gray-50 font-bold"
            />
          </div>
        </div>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVideos.map((video, idx) => (
            <div 
              key={video.id}
              className="bg-white rounded-3xl border border-gray-150 shadow-sm hover:shadow-xl hover:border-rose-500/10 overflow-hidden flex flex-col justify-between group transition-all"
            >
              <div 
                className="relative aspect-video w-full overflow-hidden bg-slate-900 cursor-pointer"
                onClick={() => setActiveVideo(video)}
              >
                <img 
                  src={thumbs[idx % thumbs.length]} 
                  alt={video.titleEn}
                  className="w-full h-full object-cover opacity-85 group-hover:scale-103 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <div className="bg-rose-600/90 text-white p-3.5 rounded-full shadow-lg group-hover:scale-106 group-hover:bg-rose-600 transition-transform">
                    <Play className="h-5 w-5 fill-white ml-0.5" />
                  </div>
                </div>

                <span className="absolute bottom-3 right-3 bg-slate-950/80 px-2 rounded font-mono text-[10px] text-white">
                  {video.duration}
                </span>

                {video.isPopular && (
                  <span className="absolute top-3 left-3 bg-amber-500 text-slate-950 font-black text-[9px] uppercase tracking-wider px-2 py-0.5 rounded">
                    {lang === 'ta' ? 'மிகவும் பார்க்கப்பட்டது' : 'Farmer Top Hit'}
                  </span>
                )}
              </div>

              <div className="p-6 md:p-8 flex-grow flex flex-col justify-between text-left">
                <div>
                  <div className="flex items-center space-x-1 mb-2">
                    <Youtube className="h-3.5 w-3.5 text-rose-600" />
                    <span className="text-[10px] font-black text-rose-600 uppercase tracking-widest">PON AGRO TV</span>
                  </div>
                  <h3 className="font-extrabold text-base sm:text-lg text-gray-950 leading-snug group-hover:text-rose-600 transition-colors">
                    {lang === 'ta' ? video.titleTa : video.titleEn}
                  </h3>
                </div>

                <div className="pt-4 border-t border-gray-100 mt-6 flex justify-between items-center text-[11px] font-bold text-gray-400">
                  <span className="uppercase font-black text-emerald-800">✓ Tested and Calibrated</span>
                  <button 
                    onClick={() => setActiveVideo(video)}
                    className="text-rose-600 hover:text-rose-700 flex items-center space-x-1 cursor-pointer"
                  >
                    <span>{lang === 'ta' ? 'இப்போதே இயக்குக' : 'Watch Embed'}</span>
                    <ExternalLink className="h-3 w-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredVideos.length === 0 && (
          <div className="text-center py-16 bg-white border border-gray-200 max-w-sm mx-auto rounded-2xl">
            <Youtube className="h-8 w-8 text-gray-300 mx-auto mb-2" />
            <span className="text-gray-500 font-bold block">No videos found matching searchTerm.</span>
          </div>
        )}

      </div>

      {/* Playing Frame Modal */}
      <AnimatePresence>
        {activeVideo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-950/80 backdrop-blur-lg">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-gray-900 border border-white/10 w-full max-w-3xl rounded-3xl overflow-hidden shadow-2xl"
            >
              <div className="flex items-center justify-between p-4 sm:p-6 border-b border-white/5 bg-gray-950/50">
                <div className="flex items-center space-x-2">
                  <Youtube className="h-6 w-6 text-rose-500 shrink-0" />
                  <span className="text-white font-extrabold text-sm sm:text-base line-clamp-1">
                    {lang === 'ta' ? activeVideo.titleTa : activeVideo.titleEn}
                  </span>
                </div>
                
                <button
                  onClick={() => setActiveVideo(null)}
                  className="p-1 px-3 py-1 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white font-bold transition-colors cursor-pointer"
                >
                  ✕
                </button>
              </div>

              <div className="relative aspect-video bg-black w-full">
                <iframe
                  title="PON AGRO TV"
                  src={`https://www.youtube.com/embed/${activeVideo.youtubeId}?autoplay=1`}
                  className="w-full h-full border-0 absolute inset-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              <div className="p-4 sm:p-6 bg-gray-955 text-sm flex flex-col sm:flex-row justify-between items-center gap-4 text-left border-t border-white/5">
                <p className="text-gray-400 text-xs font-semibold">
                  {lang === 'ta' ? 'அசலான இந்திய உழவர்களின் நம்பிக்கை சின்னம்.' : 'Grounded field insights recorded live on gravel and loam clay fields.'}
                </p>

                <a
                  href={`https://wa.me/91210641?text=Hi%20PON%20AGRO,%20I%20saw%20your%20field%2520demo%20"${encodeURIComponent(activeVideo.titleEn)}"%20and%20want%2520to%20quote`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-5 py-2.5 rounded-xl bg-primary-green hover:bg-green-700 text-white font-bold"
                >
                  <MessageSquare className="h-4 w-4" />
                  <span>{lang === 'ta' ? 'விசாரித்து வாங்க' : 'Inquire Price'}</span>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
