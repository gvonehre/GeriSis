// -----------------------------------------------------------------------------
// File: App.tsx
// Purpose: Main page composition, navigation, theming, and modal orchestration.
// PHD: P. Heiniger Design — Practical creative solutions from Andermatt. (design@pascalheiniger.ch)
// -----------------------------------------------------------------------------

import React, { useState, useEffect } from 'react';
import { Menu, Moon, Sun, MapPin, Mail, Phone, ArrowRight, X as CloseIcon } from 'lucide-react';
import { Button } from './components/ui/Button';
import { Reveal } from './components/ui/Reveal';
import { BookingModal } from './components/BookingModal';
import { ServiceModal } from './components/ServiceModal';
import { JournalModal } from './components/JournalModal';
import { SERVICES, ARTICLES, FAQS, CONTACT_INFO } from './constants';
import { Service, Article } from './types';
import './index.css';

/**
 * Renders the full landing page and coordinates UI state for theme, navigation,
 * and modal dialogs.
 * Side effects: reads/writes localStorage theme and toggles `documentElement` class.
 */
function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Modal States
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [preSelectedServiceId, setPreSelectedServiceId] = useState<string | null>(null);
  
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [isServiceModalOpen, setIsServiceModalOpen] = useState(false);
  
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [isJournalModalOpen, setIsJournalModalOpen] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => setIsScrolled(window.scrollY > 80);
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);

  // -----------------------------------------------------------------------------
  // Section: Theme handling
  // -----------------------------------------------------------------------------
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (storedTheme === 'dark' || (!storedTheme && systemPrefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    if (newMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  // -----------------------------------------------------------------------------
  // Section: UI event handlers
  // -----------------------------------------------------------------------------
  const openBooking = (serviceId?: string) => {
    setPreSelectedServiceId(serviceId || null);
    setIsServiceModalOpen(false); // Close service modal if open
    setIsBookingOpen(true);
    setIsMenuOpen(false);
  };

  const openServiceModal = (service: Service) => {
    setSelectedService(service);
    setIsServiceModalOpen(true);
  };

  const openJournalModal = (article: Article) => {
    setSelectedArticle(article);
    setIsJournalModalOpen(true);
  };

  return (
    <div className="min-h-screen selection:bg-rose-200 selection:text-rose-900 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/iStock-1564622193_extended.jpg')" }}>
      
      
{/* Navigation - verschwindet beim Scrollen */}
<nav className={`fixed top-0 w-full z-40 transition-all duration-500 ${isScrolled ? '-translate-y-full' : 'translate-y-0'}`}>
  <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
    <div className="sans-serif font-light text-2xl tracking-widest text-sage-900">
      
    </div>

    {/* Hamburger mit Hover-Dropdown */}
    <div className="relative group">
      <button className="p-2 hero-color">
        <Menu size={24} strokeWidth={1.5} />
      </button>

      {/* Dropdown on hover */}
      <div className="hero-color absolute left-1/2 -translate-x-1/2 top-full mt-2 w-40 bg-transparent text-center opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 py-4">
        <a href="#offers" className="block px-6 py-3 text-sm tracking-wide hover:text-sage-100 transition-colors font-medium">Angebote</a>
        <a href="#about" className="block px-6 py-3 text-sm tracking-wide hover:text-sage-100 transition-colors font-medium">Über Mich</a>
        <a href="#contact" className="block px-6 py-3 text-sm tracking-wide hover:text-sage-100 transition-colors font-medium">Kontakt</a>
          <button
            onClick={() => window.open("https://calendar.app.google/pXGyFkn9dMtQRvnQA", "_blank", "noopener,noreferrer")}
            className="text-sm py-3 tracking-wide hover:text-sage-100 transition-colors font-bold"
          >
            Termin buchen
          </button>
      </div>
    </div>
  </div>
</nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
            <div className="absolute top-[10%] left-[20%] w-[60vh] h-[60vh] bg-rose-200/30 dark:bg-rose-900/10 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen animate-pulse-slow" />
            <div className="absolute bottom-[10%] right-[20%] w-[50vh] h-[50vh] bg-sage-200/40 dark:bg-sage-800/20 rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-screen animate-pulse-slow" style={{ animationDelay: '2s' }} />
        </div>
        
        <div className="max-w-4xl mx-auto text-center space-y-8">
            <Reveal delay={0.3}>
              <h1 className="decorated-heading mb-14">
                BEWEGTE STILLE
              </h1>
            </Reveal>
            <Reveal delay={0.5}>
                 <span className="hero-color uppercase tracking-[0.3em]" style={{ fontSize: 'clamp(12px, 3vw, 18px)' }}>Neurosomatische Körpertherapie</span>
            </Reveal>
            <Reveal delay={0.7}>
                 <span className="hero-color uppercase tracking-[0.3em]" style={{ fontSize: 'clamp(12px, 3vw, 18px)' }}>Fussreflexzonen Therapie</span>
            </Reveal>
        </div>
      </section>

      {/* Offers Section */}
      {/* <section id="offers" className="py-32 px-6 max-w-7xl mx-auto"> */}
      <section id="offers" className="relative min-h-screen z-10 py-24 px-6">
        <Reveal>
            <div className="flex flex-col items-center max-w-7xl mx-auto text-center mb-24 space-y-4">
                <span className="text-xs hero-color font-medium uppercase tracking-widest">Angebot</span>
                <h2 className="text-4xl md:text-5xl hero-color">Therapeutische Wege</h2>
                <p className="max-w-md mx-auto hero-color leading-relaxed pt-2">
                    Mit der Fussreflexzonen-Behandlung bin ich Krankenkassenanerkannt (ZSR-Nr. {CONTACT_INFO.zsr}).
                </p>
            </div>
        </Reveal>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 lg:gap-12">
            {SERVICES.map((service, idx) => (
                <Reveal key={service.id} delay={idx * 0.2}>
                    <div className="group p-10 rounded-[2.5rem] bg-[#F6E6D2] border border-[#F6E6D2]  hover:border-rose-200 shadow-sm hover:shadow-2xl hover:shadow-rose-100/30 dark:hover:shadow-none transition-all duration-500 h-full flex flex-col justify-between relative overflow-hidden">

                        
                        <div className="relative">
                            <div className="flex justify-between items-start mb-6">
                                <h3 className="text-3xl hero-color pr-4">{service.title}</h3>
                            </div>
                            <div className="flex gap-3 mb-8">
                                <span className="inline-block px-3 py-1 rounded-full bg-[#174652] text-xs font-medium tracking-wide text-sage-100">
                                    {service.duration}
                                </span>
                                {service.isReflexology && (
                                    <span className="inline-block px-3 py-1 hero-color rounded-full bg-rose-900/30 text-xs font-medium tracking-wide text-rose-200">
                                        Krankenkasse
                                    </span>
                                )}
                            </div>
                            <p className="hero-color mb-8 leading-relaxed text-lg font-light">
                                {service.description}
                            </p>
                        </div>
                        <div className="flex items-end justify-between relative pt-8 border-t border-[#174652]">
                            <div>
                                <span className="block text-xs hero-color uppercase tracking-wider mb-1">Preis</span>
                                <span className="text-2xl hero-color">
                                    CHF {service.priceRange || service.price}
                                </span>
                            </div>
                            <div className="flex gap-3">
                                <button 
                                    onClick={() => openServiceModal(service)}
                                    className="px-6 py-3 rounded-full border border-sage-700 hero-color hover:bg-[#174652] hover:text-sage-100 transition-colors text-sm font-medium"
                                >
                                    Details
                                </button>
                            </div>
                        </div>
                    </div>
                </Reveal>
            ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 min-h-screen">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
            <Reveal>
                <div className="aspect-[3/4] overflow-hidden bg-sand-200 dark:bg-sage-800 relative shadow-none dark:shadow-none group">
                     <div className="absolute inset-0 bg-rose-500/10 dark:bg-rose-500/5 group-hover:opacity-0 transition-opacity duration-700 z-10" />
                     <img 
                        src="/20220224_GVE_001.jpg" 
                        alt="Géraldine von Ehrenberg" 
                        className="object-cover w-full h-full opacity-90 group-hover:scale-105 transition-transform duration-[2s]"
                    />
                </div>
            </Reveal>
            <div className="space-y-10">
                <Reveal delay={0.2}>
                    <span className="text-xs font-medium uppercase tracking-widest text-rose-500" style={{ color: "#174652" }}>Über Mich</span>
                    <h2 className="text-5xl dark:text-sage-50 mt-4" style={{ color: "#174652", paddingBottom: "0.15em"}}>Géraldine <br/>von Ehrenberg</h2>
                </Reveal>
                <Reveal delay={0.3}>
                    <div className="space-y-6 text-lg font-light text-sage-950 dark:text-sage-300 leading-relaxed" style={{ color: "#174652" }}>
                        <p>
                            Ich bin gerne…
                            in Bewegung, in den Bergen, neues am Entdecken, am Lernen, mit Menschen, in der Stille.
                        </p>
                        <p>
                            Mit Bewegung und Sport – sei es als Bewegungstherapeutin oder Sportlehrerin - habe ich schon immer gerne Menschen begleitet und unterstützt. Ich habe ein ehrliches Interesse an jedem Menschen und seiner Geschichte.
Mit Präsenz und Ruhe begleite ich dich wertschätzend, herzlich und klar. Zusammen erkunden wir deine persönlichen Themen und ich begleite dich durch Körperwahrnehmung, Berührung und Bewegung bei den aktuellen Anliegen. Durch meine Fähigkeit erlerntes Wissen und Intuition miteinander zu verbinden, gestaltet sich jede Behandlung individuell und auf deine Bedürfnisse angepasst. 
                        </p>
                    </div>
                </Reveal>
            </div>
        </div>
        <div className="max-w-6xl mx-auto items-center py-10 hero-color">
                <Reveal delay={0.4}>
                  <div className="flex justify-center pt-4">
                    <ul className="space-y-4">
                      <li className="flex items-center gap-4 text-sm uppercase tracking-wide hero-color" >
                        <span className="w-8 h-[1px] bg-[#174652]"></span> 
                        2024 Practitioner NSTI® III i.A., Institut für Traumaintegration Zürich
                      </li>
                      <li className="flex items-center gap-4 text-sm uppercase tracking-wide">
                        <span className="w-8 h-[1px] bg-[#174652]"></span> 
                        2024 Assistenz Practitioner NSTI® I, Institut für Traumaintegration Zürich
                      </li>
                      <li className="flex items-center gap-4 text-sm uppercase tracking-wide">
                        <span className="w-8 h-[1px] bg-[#174652]"></span> 
                        2023 Dipl. Fussreflexzonen-Therapeutin, HPS Ebikon
                      </li>
                      <li className="flex items-center gap-4 text-sm uppercase tracking-wide">
                        <span className="w-8 h-[1px] bg-[#174652]"></span> 
                        2020 Woman-Coaching Training Petra Nussbaum, Zürich
                      </li>
                      <li className="flex items-center gap-4 text-sm uppercase tracking-wide">
                        <span className="w-8 h-[1px] bg-[#174652]"></span> 
                        2018 200h Yoga Ausbildung, Sanapurna Ayurveda & Yoga, Zürich
                      </li>
                      <li className="flex items-center gap-4 text-sm uppercase tracking-wide">
                        <span className="w-8 h-[1px] bg-[#174652]"></span> 
                        2017 Lehrdiplom Sek II, ETH Zürich
                      </li>
                      <li className="flex items-center gap-4 text-sm uppercase tracking-wide">
                        <span className="w-8 h-[1px] bg-[#174652]"></span> 
                        2016 Medizinische Trainingstherapie, SVGS Zürich
                      </li>
                      <li className="flex items-center gap-4 text-sm uppercase tracking-wide">
                        <span className="w-8 h-[1px] bg-[#174652]"></span> 
                        2014 Master Bewegungswissenschaften und Sport, ETH Zürich
                      </li>
                    </ul>
                  </div>
                </Reveal>
        </div>


      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="hero-color pt-32 pb-12 px-6 text-center">
         <div className="mx-auto gap-16 mb-14 text-center">
                <h4 className="uppercase tracking-widest mb-14">Kontakt</h4>
                <ul className="font-light flex flex-col items-center">
                    {/* NAME */}
                    <li className="flex gap-4">
                      <span className="font-medium">
                        {CONTACT_INFO.name}
                      </span>
                    </li>
                    <li className="flex items-start gap-4">
                        <span className="leading-relaxed">{CONTACT_INFO.address}</span>
                    </li>
                    <li className="flex items-center gap-4">
                        <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-white transition-colors">{CONTACT_INFO.email}</a>
                    </li>
                    <li className="flex items-center gap-4">
                        <a href={`tel:${CONTACT_INFO.phone}`} className="hover:text-white transition-colors">{CONTACT_INFO.phone}</a>
                    </li>
                </ul>

            <div>
                 {/* <h4 className="text-xs font-bold uppercase tracking-widest text-sage-500 mb-8">Rechtliches</h4>
                 <ul className="space-y-4 text-sage-400 text-sm font-light">
                    <li><a href="#" className="hover:text-white transition-colors">Impressum</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Datenschutz</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">AGB</a></li>
                 </ul> */}
                 <div className="mt-8">
                     <Button onClick={() => window.open("https://calendar.app.google/pXGyFkn9dMtQRvnQA", "_blank", "noopener,noreferrer")} variant="accent">Termin Buchen</Button>
                 </div>
            </div>
         </div>
         
        {/*  <p className="max-w-7xl mx-auto mb-6 text-[11px] text-sage-500">
            Demo build by P. Heiniger Design (Andermatt) — design@pascalheiniger.ch
         </p> */}

         <div className="max-w-7xl mx-auto pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs uppercase tracking-widest">
            <p>&copy; {new Date().getFullYear()} Bewegte Stille.</p>
            {/* <p className="flex items-center gap-2">
              <span>Designed by</span>
              <span className="text-sage-400 hover:text-rose-400 transition-colors cursor-default">P. Heiniger Design</span>
            </p> */}
         </div>
      </footer>

      <BookingModal 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
        preSelectedServiceId={preSelectedServiceId}
      />

      <ServiceModal
        service={selectedService}
        isOpen={isServiceModalOpen}
        onClose={() => setIsServiceModalOpen(false)}
        onBook={openBooking}
      />

      <JournalModal
        article={selectedArticle}
        isOpen={isJournalModalOpen}
        onClose={() => setIsJournalModalOpen(false)}
      />
    </div>
  );
}

export default App;
