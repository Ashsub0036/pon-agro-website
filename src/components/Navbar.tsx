/**
 * PREMIUM MINIMAL NAVBAR
 */
import logo from '../assets/images/pon-logo.jpeg';
import React, { useEffect, useState } from 'react';
import { Menu, X, Globe, MessageSquare, Tractor } from 'lucide-react';
import { motion } from 'framer-motion';
import { Language } from '../types';
import { TRANSLATIONS, CONTACT_INFO } from '../data';

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
}

export default function Navbar({
  lang,
  setLang,
}: NavbarProps) {
  const t = TRANSLATIONS[lang];

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);

    return () =>
      window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: t.navHome, hash: '#/' },
    { label: t.navProducts, hash: '#/products' },
    { label: t.navGallery, hash: '#/gallery' },
    { label: t.navContact, hash: '#/contact' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/70 backdrop-blur-xl border-b border-white/10'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="h-20 flex items-center justify-between">
{/* Logo */}
<div className="flex items-center gap-3">

  <img
    src={logo}
    alt="PON AGRO"
    className="h-11 w-11 rounded-2xl object-cover shadow-lg"
  />

  <div>
    <h2
      className={`font-black text-lg ${
        isScrolled
          ? 'text-slate-900'
          : 'text-white'
      }`}
    >
      PON AGRO
    </h2>

    <p
      className={`text-xs ${
        isScrolled
          ? 'text-slate-500'
          : 'text-slate-300'
      }`}
    >
      Agricultural Implements
    </p>
  </div>

</div>
            {/* Desktop menu */}
            <div className="hidden lg:flex items-center gap-10">
              {menuItems.map((item) => (
                <a
                  key={item.hash}
                  href={item.hash}
                  className={`font-medium transition-colors ${
                    isScrolled
                      ? 'text-slate-700 hover:text-green-600'
                      : 'text-white hover:text-green-400'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Right */}
            <div className="hidden lg:flex items-center gap-4">

              <button
                onClick={() =>
                  setLang(lang === 'en' ? 'ta' : 'en')
                }
                className={`flex items-center gap-2 px-4 py-2 rounded-xl border ${
                  isScrolled
                    ? 'border-slate-200 text-slate-700'
                    : 'border-white/20 text-white'
                }`}
              >
                <Globe className="h-4 w-4" />
                <span className="text-sm font-medium">
                  {lang === 'en'
                    ? 'தமிழ்'
                    : 'EN'}
                </span>
              </button>

              <a
                href={CONTACT_INFO.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-green-600 hover:bg-green-700 text-white font-semibold transition-all"
              >
                <MessageSquare className="h-4 w-4" />
                <span>{t.btnEnquiry}</span>
              </a>
            </div>

            {/* Mobile */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden ${
                isScrolled
                  ? 'text-slate-900'
                  : 'text-white'
              }`}
            >
              {mobileOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </nav>
      {/* Mobile Menu */}
{mobileOpen && (
  <motion.div
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.3 }}
    className="fixed top-20 left-0 w-full bg-slate-950 border-t border-white/10 z-40 lg:hidden"
  >
    <div className="flex flex-col px-6 py-6 space-y-5">

      {menuItems.map((item) => (
        <a
          key={item.hash}
          href={item.hash}
          onClick={() => setMobileOpen(false)}
          className="text-white text-lg font-semibold hover:text-green-400 transition-colors"
        >
          {item.label}
        </a>
      ))}

      {/* Language Button */}
      <button
        onClick={() =>
          setLang(lang === 'en' ? 'ta' : 'en')
        }
        className="flex items-center gap-2 text-white pt-2"
      >
        <Globe className="h-5 w-5" />

        <span>
          {lang === 'en'
            ? 'தமிழ்'
            : 'EN'}
        </span>
      </button>

      {/* WhatsApp */}
      <a
        href={CONTACT_INFO.whatsapp}
        target="_blank"
        rel="noreferrer"
        className="flex items-center justify-center gap-2 px-5 py-4 rounded-xl bg-green-600 hover:bg-green-700 text-white font-semibold transition-all"
      >
        <MessageSquare className="h-5 w-5" />

        <span>{t.btnEnquiry}</span>
      </a>

    </div>
  </motion.div>
)}
    </>
  );
}