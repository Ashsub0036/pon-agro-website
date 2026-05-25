import React, { useState } from 'react';
import { motion } from 'framer-motion';

import {
  Image as ImageIcon,
  Sparkles,
  PlayCircle,
} from 'lucide-react';

import { Language } from '../types';
import { TRANSLATIONS } from '../data';

interface GalleryPageProps {
  lang: Language;
}

export default function GalleryPage({
  lang,
}: GalleryPageProps) {
  const t = TRANSLATIONS[lang];

  const [activeTab, setActiveTab] =
    useState<string>('All');

  /* -------------------------------- */
  /* YOUTUBE VIDEOS */
  /* -------------------------------- */

  const videoData = [
    {
      id: 1,
      title:
        'WE LAUNCH ROTA LEVELER',
      url: 'https://www.youtube.com/embed/-0m-4gMqlOE',
    },

    {
      id: 2,
      title: 'ROTA SD',
      url: 'https://www.youtube.com/embed/h0m_HKSyBs4',
    },

    {
      id: 3,
      title:
        'WE LAUNCH SOUTH INDIA’S FIRST ADJUSTABLE ROTO SD',
      url: 'https://www.youtube.com/embed/_DdAz2X7sYY',
    },
  ];

  /* -------------------------------- */
  /* COMMUNITY POSTS */
  /* -------------------------------- */

  const communityPosts = [
    {
      title:
        'ROTA SD DELIVERED TO NEWHOLLAND TRACTOR',
      link:
        'https://www.youtube.com/post/UgkxCjepDzlkYjEMzhcdPoAD7t-UQhkaYD-C',
      image:
        'https://i.ytimg.com/vi/h0m_HKSyBs4/maxresdefault.jpg',
      category: 'Manufacturing',
    },

    {
      title:
        'ROTA SD DELIVERED TO T.V MALAI CUSTOMER',
      link:
        'https://www.youtube.com/post/UgkxzuEDCaPaxj743Uwxfn-S7H22inCTyr6y',
      image:
        'https://i.ytimg.com/vi/_DdAz2X7sYY/maxresdefault.jpg',
      category: 'Field Demonstration',
    },

    {
      title:
        'ROTA SD DELIVERED TO PONDICHERRY CUSTOMER',
      link:
        'https://www.youtube.com/post/Ugkx9fUMc3O508KszguMLww3LR4vkq_w-0zT',
      image:
        'https://i.ytimg.com/vi/-0m-4gMqlOE/maxresdefault.jpg',
      category: 'Happy Customers',
    },

    {
      title:
        'ROTA SD DELIVERED TO OUR AREA FARMERS',
      link:
        'https://www.youtube.com/post/Ugkx1aZJj5Mm9AX9JpPX0SlM2wrdg1Yzw9_B',
      image:
        'https://i.ytimg.com/vi/h0m_HKSyBs4/maxresdefault.jpg',
      category: 'Manufacturing',
    },

    {
      title:
        'ROTA SD DELIVERED TO THIRUVANNAMALAI CUSTOMER',
      link:
        'https://www.youtube.com/post/Ugkx8WtuIwAzd1R_1rsnMIj49Nct7VihP4tz',
      image:
        'https://i.ytimg.com/vi/_DdAz2X7sYY/maxresdefault.jpg',
      category: 'Field Demonstration',
    },

    {
      title:
        'LATEST ROTA SD FIELD DELIVERY',
      link:
        'https://www.youtube.com/post/UgkxRFXGuCi1JiFxnrgaWvRGBJKCgoBPXB8P',
      image:
        'https://i.ytimg.com/vi/-0m-4gMqlOE/maxresdefault.jpg',
      category: 'Happy Customers',
    },
  ];

  /* -------------------------------- */
  /* FILTER CATEGORIES */
  /* -------------------------------- */

  const categories = [
    {
      id: 'All',
      labelEn: 'All Captures',
      labelTa: 'அனைத்தும்',
    },

    {
      id: 'Manufacturing',
      labelEn: 'Workshop',
      labelTa: 'பட்டறை',
    },

    {
      id: 'Field Demonstration',
      labelEn: 'Field Demo',
      labelTa: 'வயல்வெளி',
    },

    {
      id: 'Happy Customers',
      labelEn: 'Customers',
      labelTa: 'வாடிக்கையாளர்கள்',
    },
  ];

  /* -------------------------------- */
  /* FILTERED POSTS */
  /* -------------------------------- */

  const filteredPosts =
    activeTab === 'All'
      ? communityPosts
      : communityPosts.filter(
          (post) =>
            post.category === activeTab
        );

  return (
    <div className="min-h-screen overflow-hidden bg-black text-white">

      {/* BACKGROUND */}
      <div className="fixed inset-0 -z-10 overflow-hidden">

        <div className="absolute left-[-10%] top-[-10%] h-[500px] w-[500px] rounded-full bg-emerald-500/10 blur-[160px]" />

        <div className="absolute bottom-[-10%] right-[-10%] h-[500px] w-[500px] rounded-full bg-yellow-500/10 blur-[160px]" />

      </div>

      {/* HERO */}
      <section className="relative px-6 pb-24 pt-32">

        <div className="mx-auto max-w-7xl">

          <motion.div
            initial={{
              opacity: 0,
              y: 80,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
            }}
            className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/5 p-10 backdrop-blur-2xl"
          >
            <div className="absolute right-0 top-0 h-[300px] w-[300px] rounded-full bg-emerald-500/20 blur-[120px]" />

            <div className="relative z-10 max-w-3xl">

              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-5 py-2 text-xs font-black uppercase tracking-[0.25em] text-emerald-300">

                <Sparkles className="h-4 w-4" />

                FARM STORIES

              </div>

              <h1 className="text-5xl font-black leading-none md:text-7xl">

                {lang === 'ta'
                  ? 'கேலரி மற்றும் வீடியோக்கள்'
                  : 'Gallery & Videos'}

              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">

                {lang === 'ta'
                  ? 'உண்மையான விவசாய காட்சிகள் மற்றும் வீடியோக்கள்.'
                  : 'Explore real field captures, manufacturing stories, customer showcases and farming machine demos.'}

              </p>

            </div>
          </motion.div>
        </div>
      </section>

      {/* VIDEOS */}
      <section className="px-6 pb-24">

        <div className="mx-auto max-w-7xl">

          <div className="mb-14 flex items-center gap-4">

            <div className="rounded-2xl bg-red-500/20 p-4">
              <PlayCircle className="h-8 w-8 text-red-400" />
            </div>

            <div>

              <h2 className="text-4xl font-black">
                Featured Videos
              </h2>

              <p className="mt-2 text-slate-400">
                Product launches and field demonstrations
              </p>

            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">

            {videoData.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{
                  opacity: 0,
                  y: 60,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.15,
                }}
                viewport={{ once: true }}
                className="overflow-hidden rounded-[34px] border border-white/10 bg-white/5 backdrop-blur-2xl"
              >
                <div className="relative aspect-video overflow-hidden">

                  <iframe
                    src={video.url}
                    title={video.title}
                    allowFullScreen
                    className="h-full w-full"
                  />

                </div>

                <div className="p-6">

                  <h3 className="text-xl font-black text-white">
                    {video.title}
                  </h3>

                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FILTERS */}
      <section className="px-6 pb-10">

        <div className="mx-auto flex max-w-7xl flex-wrap gap-4">

          {categories.map((tab) => (
            <button
              key={tab.id}
              onClick={() =>
                setActiveTab(tab.id)
              }
              className={`rounded-full px-6 py-3 text-sm font-black uppercase tracking-wider transition-all duration-500 ${
                activeTab === tab.id
                  ? 'bg-emerald-500 text-black shadow-2xl shadow-emerald-500/30'
                  : 'border border-white/10 bg-white/5 text-slate-300 backdrop-blur-xl hover:bg-white/10'
              }`}
            >
              {lang === 'ta'
                ? tab.labelTa
                : tab.labelEn}
            </button>
          ))}
        </div>
      </section>

      {/* YOUTUBE POSTS */}
      <section className="px-6 pb-28">

        <div className="mx-auto max-w-7xl">

          <div className="mb-14 flex items-center gap-4">

            <div className="rounded-2xl bg-yellow-500/20 p-4">
              <ImageIcon className="h-8 w-8 text-yellow-400" />
            </div>

            <div>

              <h2 className="text-4xl font-black text-white">
                Customer Delivery Posts
              </h2>

              <p className="mt-2 text-slate-400">
                Real customer deliveries shared on YouTube
              </p>

            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">

            {filteredPosts.map(
              (post, index) => (
                <motion.a
                  key={index}
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{
                    opacity: 0,
                    y: 40,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.7,
                    delay:
                      index * 0.08,
                  }}
                  whileHover={{
                    y: -12,
                  }}
                  className="group overflow-hidden rounded-[34px] border border-white/10 bg-white/5 backdrop-blur-2xl"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">

                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                    <div className="absolute left-5 top-5 rounded-full bg-red-500 px-4 py-2 text-[10px] font-black uppercase tracking-widest text-white shadow-2xl">
                      YOUTUBE POST
                    </div>

                    <div className="absolute right-5 top-5 flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-black/50 backdrop-blur-xl transition-all duration-500 group-hover:scale-110 group-hover:bg-red-500">

                      <PlayCircle className="h-7 w-7 text-white" />

                    </div>

                    <div className="absolute bottom-6 left-6 right-6">

                      <h3 className="text-2xl font-black leading-tight text-white">
                        {post.title}
                      </h3>

                      <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-emerald-300">
                        View Community Post
                      </div>

                    </div>
                  </div>
                </motion.a>
              )
            )}

          </div>
        </div>
      </section>
    </div>
  );
}