/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Youtube, Instagram, Facebook, Users, Heart, Share2, Award, ExternalLink, Send } from 'lucide-react';
import { Language, YouTubeVideo } from '../types';
import { TRANSLATIONS, YOUTUBE_VIDEOS } from '../data';

interface YouTubeVideosProps {
  lang: Language;
}

export default function YouTubeVideos({ lang }: YouTubeVideosProps) {
  const t = TRANSLATIONS[lang];
  const [activeVideo, setActiveVideo] = useState<YouTubeVideo | null>(null);

  // Unsplash backgrounds that act as custom highly realistic agro video thumbnail overlays
  const videoThumbnails = [
    'https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&q=80&w=800', // Paddy soil
    'https://images.unsplash.com/photo-1473973266408-ed4e27abdd47?auto=format&fit=crop&q=80&w=800', // Workshop assembly
    'https://images.unsplash.com/photo-1530906358369-a5dcf85b8801?auto=format&fit=crop&q=80&w=800'  // Spring levelers field
  ];

  return (
    <section id="videos" className="py-24 bg-gray-950 relative overflow-hidden">
      {/* Cinematic grid overlay and glowing shapes */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f29370d_1px,transparent_1px),linear-gradient(to_bottom,#1f29370d_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30" />
      <div className="absolute -top-[10%] left-[25%] w-[50%] h-[30%] bg-primary-green/10 rounded-full blur-[120px]" />
      <div className="absolute top-[60%] right-[-10%] w-[35%] h-[35%] bg-secondary-yellow/5 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Youtube Channel Header & Subscriber Badges */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          <div className="lg:col-span-7 text-left">
            <span className="text-xs uppercase font-extrabold tracking-widest text-secondary-yellow bg-yellow-400/15 border border-yellow-400/20 px-3.5 py-1.5 rounded-full inline-block mb-3">
              {lang === 'ta' ? 'விவசாயக் கள செயல்விளக்கம்' : 'FARM FIELD DEMOS'}
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
              {t.videoTitle}
            </h2>
            <p className="text-gray-400 mt-3 text-base">
              {t.videoSub}
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-wrap gap-4 items-center justify-start lg:justify-end">
            <div id="youtube-stats-tag" className="bg-white/5 border border-white/10 p-4 rounded-2xl flex items-center space-x-3 backdrop-blur-md">
              <Youtube className="h-8 w-8 text-rose-500" />
              <div>
                <span className="text-white font-black text-lg block leading-none">PON AGRO TV</span>
                <span className="text-xs text-gray-400">{t.youtubeStats}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Video Cards Grid with Glow Hover microinteractions */}
        <div id="video-cards-grid" className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {YOUTUBE_VIDEOS.map((video, index) => (
            <motion.div
              key={video.id}
              id={`video-card-${video.id}`}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="glass-panel-dark bg-gray-900/60 border border-white/5 hover:border-green-500/20 rounded-3xl overflow-hidden flex flex-col justify-between group shadow-xl"
            >
              <div 
                id={`video-thumbnail-overlay-${video.id}`}
                className="relative aspect-video w-full overflow-hidden bg-slate-800 cursor-pointer"
                onClick={() => setActiveVideo(video)}
              >
                {/* Dummy/Realistic background thumbnail representation */}
                <img
                  src={videoThumbnails[index]}
                  alt={video.titleEn}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                />
                
                {/* Overlay Play Button glow */}
                <div className="absolute inset-0 bg-gray-950/40 group-hover:bg-gray-950/20 transition-all duration-300" />
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-primary-green/90 text-white p-4 rounded-full shadow-2xl scale-100 group-hover:scale-110 group-hover:bg-green-600 transition-all duration-350 shadow-green-950/60 flex items-center justify-center">
                    <Play className="h-6 w-6 fill-white ml-0.5" />
                  </div>
                </div>

                {/* Duration Badge */}
                <span className="absolute bottom-3 right-3 bg-gray-950/80 backdrop-blur-md text-white text-[10px] sm:text-xs font-semibold px-2.5 py-1 rounded-md">
                  {video.duration}
                </span>

                {/* Popular Badge */}
                {video.isPopular && (
                  <span className="absolute top-3 left-3 bg-rose-600 text-white text-[10px] x-bold uppercase tracking-wider px-2.5 py-0.5 rounded shadow-lg">
                    {t.videoPopular}
                  </span>
                )}
              </div>

              {/* Title descriptions */}
              <div className="p-6 md:p-8">
                <h3 className="text-base sm:text-lg font-bold text-white leading-tight mb-2 group-hover:text-green-400 transition-colors">
                  {lang === 'ta' ? video.titleTa : video.titleEn}
                </h3>
                
                <div className="flex items-center justify-between mt-4 pt-3 border-t border-white/5">
                  <span className="text-xs text-slate-400 uppercase tracking-widest flex items-center gap-1">
                    <Award className="h-3 w-3 text-secondary-yellow" />
                    PON Factory Test
                  </span>
                  
                  <button
                    id={`video-enquiry-anchor-${video.id}`}
                    onClick={() => setActiveVideo(video)}
                    className="text-xs font-bold text-secondary-yellow hover:text-white transition-colors flex items-center space-x-1"
                  >
                    <span>{lang === 'ta' ? 'இப்போதே பார்' : 'Watch Now'}</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Social Platforms Links Button Row */}
        <div id="socials-links-row" className="flex flex-wrap items-center justify-center gap-6 pt-8 border-t border-white/5">
          <span className="text-gray-400 font-bold text-xs uppercase tracking-wider">
            {lang === 'ta' ? 'எங்களைப் பின்தொடரவும்:' : 'Get updates on social channels:'}
          </span>
          
          {/* YouTube Channel link */}
          <a
            id="social-youtube"
            href="https://youtube.com" // Standard channel landing placeholder
            target="_blank"
            rel="noreferrer"
            className="flex items-center space-x-2 px-5 py-2.5 rounded-full bg-rose-600/10 border border-rose-600/20 text-rose-500 text-xs sm:text-xs font-black uppercase tracking-wider hover:bg-rose-600 hover:text-white transition-all duration-300"
          >
            <Youtube className="h-4 w-4" />
            <span>YouTube</span>
          </a>

          {/* Instagram Link */}
          <a
            id="social-instagram"
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="flex items-center space-x-2 px-5 py-2.5 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-500 text-xs sm:text-xs font-black uppercase tracking-wider hover:bg-pink-500 hover:text-white transition-all duration-300"
          >
            <Instagram className="h-4 w-4" />
            <span>Instagram</span>
          </a>

          {/* Facebook Link */}
          <a
            id="social-facebook"
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            className="flex items-center space-x-2 px-5 py-2.5 rounded-full bg-blue-600/10 border border-blue-600/20 text-blue-500 text-xs sm:text-xs font-black uppercase tracking-wider hover:bg-blue-600 hover:text-white transition-all duration-300"
          >
            <Facebook className="h-4 w-4" />
            <span>Facebook</span>
          </a>

          {/* Telegram Channel Link */}
          <a
            id="social-telegram"
            href="https://telegram.org"
            target="_blank"
            rel="noreferrer"
            className="flex items-center space-x-2 px-5 py-2.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs sm:text-xs font-black uppercase tracking-wider hover:bg-cyan-500 hover:text-white transition-all duration-300"
          >
            <Send className="h-3.5 w-3.5 text-cyan-400 group-hover:text-white" />
            <span>Telegram Channel</span>
          </a>
        </div>

      </div>

      {/* Embedded interactive Video Playing Modal Container */}
      <AnimatePresence>
        {activeVideo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-950/80 backdrop-blur-lg">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              id="video-player-modal"
              className="bg-gray-900 border border-white/10 w-full max-w-3xl rounded-3xl overflow-hidden shadow-2xl"
            >
              {/* Modal Head */}
              <div className="flex items-center justify-between p-4 sm:p-6 border-b border-white/5">
                <div className="flex items-center space-x-2">
                  <Youtube className="h-6 w-6 text-rose-500" />
                  <span className="text-white font-extrabold text-sm sm:text-base line-clamp-1">
                    {lang === 'ta' ? activeVideo.titleTa : activeVideo.titleEn}
                  </span>
                </div>
                
                <button
                  id="close-video-modal-btn"
                  onClick={() => setActiveVideo(null)}
                  className="p-1 px-3 py-1 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white font-bold transition-colors"
                >
                  ✕
                </button>
              </div>

              {/* Embed Box */}
              <div className="relative aspect-video bg-black w-full">
                {/* Standard Youtube clean autoplay embed placeholder */}
                <iframe
                  title="PON AGRO IMPLEMENTS DEMO"
                  src={`https://www.youtube.com/embed/${activeVideo.youtubeId}?autoplay=1`}
                  className="w-full h-full border-0 absolute inset-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              {/* Action row */}
              <div className="p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 bg-gray-950/90 text-sm">
                <span className="text-gray-400 font-medium text-xs sm:text-sm">
                  {lang === 'ta' ? 'வந்தவாசியில் அசல் விவசாயிகளுக்கு தயாரிக்கப்பட்டது.' : 'Crafted with premium metallurgy steel in Vandavasi.'}
                </span>

                <a
                  id="modal-youtube-enquire"
                  href={`https://wa.me/918870712295?text=Hi%20PON%20AGRO,%20I%20saw%20your%20field%20demo%20video%20"${encodeURIComponent(activeVideo.titleEn)}"%20and%20want%20to%20enquire.`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto flex items-center justify-center space-x-2 px-5 py-3 rounded-xl bg-primary-green hover:bg-green-700 text-white font-bold"
                >
                  <Play className="h-3.5 w-3.5" />
                  <span>{lang === 'ta' ? 'வாட்ஸ்அப்பில் விலை கேட்க' : 'Enquire this Model'}</span>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
