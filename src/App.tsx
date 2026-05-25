/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Language } from './types';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import StickyMobileCTA from './components/StickyMobileCTA';

// Import our 7 newly created discrete pages
import Home from './pages/Home';
import ProductsPage from './pages/ProductsPage';
import ReviewsPage from './pages/ReviewsPage';
import SparesPage from './pages/SparesPage';
import WorkshopPage from './pages/WorkshopPage';
import VideosPage from './pages/VideosPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  // Default to Tamil (ta) since the app theme is focused on modern Tamil farmers
  const [lang, setLang] = useState<Language>('ta');

  // Sync HTML lang attribute with current language state for perfect accessibility & metadata
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  // URL Hash-Routing States
  const [currentPath, setCurrentPath] = useState<string>(() => {
    return window.location.hash || '#/';
  });

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPath(window.location.hash || '#/');
      // Instantly scroll to the absolute top of the page on route transition
      window.scrollTo({ top: 0, behavior: 'instant' as any });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Shared helper to coordinate manual custom page transitions
  const handleNavigate = (hash: string) => {
    window.location.hash = hash;
  };

  // Determine which page component to display
  const renderActivePage = () => {
    switch (currentPath) {
      case '#/':
      case '':
        return <Home lang={lang} onNavigate={handleNavigate} />;
      case '#/products':
        return <ProductsPage lang={lang} />;
      case '#/reviews':
      case '#/consultancy':
        return <ReviewsPage lang={lang} />;
      case '#/spares':
        return <SparesPage lang={lang} />;
      case '#/workshop':
        return <WorkshopPage lang={lang} />;
      case '#/videos':
        return <VideosPage lang={lang} />;
      case '#/gallery':
        return <GalleryPage lang={lang} />;
      case '#/contact':
        return <ContactPage lang={lang} />;
      default:
        return <Home lang={lang} onNavigate={handleNavigate} />;
    }
  };

  return (
    <div id="app-root-container" className="relative w-full min-h-screen bg-slate-50 overflow-x-hidden select-none pb-14 md:pb-0">
      
      {/* Sticky Bilingual Navbar */}
      <Navbar lang={lang} setLang={setLang} />

      {/* Primary Routing view container */}
      <main id="main-content-flow" className="w-full">
        {renderActivePage()}
      </main>

      {/* Global Footer */}
      <Footer lang={lang} />

      {/* Floating Sticky mobile CTA dock */}
      <StickyMobileCTA lang={lang} />
      
    </div>
  );
}
