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
    <div className="min-h-screen selection:bg-rose-200 selection:text-rose-900 dark:selection:bg-rose-800 dark:selection:text-rose-100">
      
      {/* Navigation - Glassmorphic & Minimal */}
      <nav className="fixed top-0 w-full z-40 bg-sand-50/80 dark:bg-sage-950/80 backdrop-blur-md border-b border-transparent transition-all duration-700">
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
          <div className="font-serif text-2xl tracking-widest text-sage-900 dark:text-sage-100">
            BEWEGTESTILLE
          </div>

          <div className="hidden md:flex items-center gap-10">
            <a href="#offers" className="text-sm tracking-wide text-sage-700 hover:text-sage-900 dark:text-sage-300 dark:hover:text-sage-100 transition-colors">Angebote</a>
            <a href="#about" className="text-sm tracking-wide text-sage-700 hover:text-sage-900 dark:text-sage-300 dark:hover:text-sage-100 transition-colors">Über Mich</a>
            <a href="#journal" className="text-sm tracking-wide text-sage-700 hover:text-sage-900 dark:text-sage-300 dark:hover:text-sage-100 transition-colors">Journal</a>
            <button onClick={toggleTheme} className="p-2 rounded-full text-sage-600 hover:bg-sage-100/50 dark:text-sage-400 dark:hover:bg-sage-800/50 transition-colors">
              {isDarkMode ? <Sun size={20} strokeWidth={1.5} /> : <Moon size={20} strokeWidth={1.5} />}
            </button>
            <Button onClick={() => openBooking()} size="sm" variant="outline" className="border-sage-400 text-sage-800 dark:border-sage-600 dark:text-sage-100">Termin Buchen</Button>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <button onClick={toggleTheme} className="p-2 text-sage-600 dark:text-sage-400">
              {isDarkMode ? <Sun size={20} strokeWidth={1.5} /> : <Moon size={20} strokeWidth={1.5} />}
            </button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-sage-800 dark:text-sage-100">
              {isMenuOpen ? <CloseIcon size={24} strokeWidth={1.5}/> : <Menu size={24} strokeWidth={1.5} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-24 left-0 w-full h-[calc(100vh-6rem)] bg-sand-50 dark:bg-sage-950 animate-fade-in z-50 overflow-y-auto">
            <div className="flex flex-col p-8 gap-8 items-center text-center mt-10">
               <a href="#offers" onClick={() => setIsMenuOpen(false)} className="text-2xl font-serif text-sage-900 dark:text-sage-100">Angebote</a>
               <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-2xl font-serif text-sage-900 dark:text-sage-100">Über Mich</a>
               <a href="#journal" onClick={() => setIsMenuOpen(false)} className="text-2xl font-serif text-sage-900 dark:text-sage-100">Journal</a>
               <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-2xl font-serif text-sage-900 dark:text-sage-100">Kontakt</a>
               <div className="pt-8 w-full max-w-xs">
                 <Button onClick={() => openBooking()} className="w-full" variant="accent">Jetzt Buchen</Button>
               </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden" style={{ backgroundImage: "url('/iStock-1564622193.jpg')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
        {/* Abstract Background Shapes */}
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
            <div className="absolute top-[10%] left-[20%] w-[60vh] h-[60vh] bg-rose-200/30 dark:bg-rose-900/10 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen animate-pulse-slow" />
            <div className="absolute bottom-[10%] right-[20%] w-[50vh] h-[50vh] bg-sage-200/40 dark:bg-sage-800/20 rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-screen animate-pulse-slow" style={{ animationDelay: '2s' }} />
        </div>
        
        <div className="max-w-4xl mx-auto text-center space-y-8">
            <Reveal delay={0.1}>
              <div className="inline-block px-4 py-1.5 rounded-full mb-2 bg-white/30 dark:bg-black/10 backdrop-blur-sm border border-transparent">
                 <span className="text-[10px] uppercase tracking-[0.3em] text-sage-600 dark:text-sage-400 font-medium">Körpertherapie Luzern</span>
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              <h1 className="text-5xl md:text-7xl font-serif text-sage-900 dark:text-sage-50 tracking-wide">
                Bewegtestille<span className="text-rose-400/80">.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.5}>
              <p className="text-base text-sage-500 dark:text-sage-400 max-w-md mx-auto leading-relaxed font-light">
                Finden Sie zurück zu Ihrer inneren Balance durch Fussreflexzonen-Therapie und Neurosomatische Körperarbeit.
              </p>
            </Reveal>
            <Reveal delay={0.7}>
              <div className="pt-6 flex flex-col sm:flex-row gap-6 justify-center items-center">
                 <Button onClick={() => openBooking()} size="md" variant="outline" className="min-w-[160px] border-sage-300 text-sage-700 hover:bg-sage-50 dark:border-sage-700 dark:text-sage-300 dark:hover:bg-sage-800">
                    Termin vereinbaren
                 </Button>
                 <a href="#about" className="text-xs font-medium uppercase tracking-widest text-sage-400 hover:text-sage-600 dark:text-sage-500 dark:hover:text-sage-300 transition-colors">
                    Mehr erfahren
                 </a>
              </div>
            </Reveal>
        </div>
      </section>

      {/* Offers Section */}
      <section id="offers" className="py-32 px-6 max-w-7xl mx-auto">
        <Reveal>
            <div className="flex flex-col items-center text-center mb-24 space-y-4">
                <span className="text-xs font-medium uppercase tracking-widest text-rose-500">Angebot</span>
                <h2 className="text-4xl md:text-5xl font-serif text-sage-900 dark:text-sage-100">Therapeutische Wege</h2>
                <p className="max-w-md mx-auto text-sage-500 dark:text-sage-400 leading-relaxed pt-2">
                    Krankenkassenanerkannt (ZSR-Nr. {CONTACT_INFO.zsr}).<br/> Ein Raum für Heilung und Ruhe.
                </p>
            </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {SERVICES.map((service, idx) => (
                <Reveal key={service.id} delay={idx * 0.2}>
                    <div className="group p-10 rounded-[2.5rem] bg-white dark:bg-sage-900 border border-sand-100 dark:border-sage-800 hover:border-rose-200 dark:hover:border-rose-900/50 shadow-sm hover:shadow-2xl hover:shadow-rose-100/30 dark:hover:shadow-none transition-all duration-500 h-full flex flex-col justify-between relative overflow-hidden">
                        {/* Decorative blob on hover */}
                        <div className="absolute -right-20 -top-20 w-64 h-64 bg-rose-50 dark:bg-rose-900/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                        
                        <div className="relative">
                            <div className="flex justify-between items-start mb-6">
                                <h3 className="text-3xl font-serif text-sage-900 dark:text-sage-100 pr-4">{service.title}</h3>
                            </div>
                            <div className="flex gap-3 mb-8">
                                <span className="inline-block px-3 py-1 rounded-full bg-sand-100 dark:bg-sage-800 text-xs font-medium tracking-wide text-sage-600 dark:text-sage-300">
                                    {service.duration}
                                </span>
                                {service.isReflexology && (
                                    <span className="inline-block px-3 py-1 rounded-full bg-rose-50 dark:bg-rose-900/30 text-xs font-medium tracking-wide text-rose-700 dark:text-rose-200">
                                        Krankenkasse
                                    </span>
                                )}
                            </div>
                            <p className="text-sage-600 dark:text-sage-300 mb-8 leading-relaxed text-lg font-light">
                                {service.description}
                            </p>
                        </div>
                        <div className="flex items-end justify-between relative pt-8 border-t border-sand-100 dark:border-sage-800/50">
                            <div>
                                <span className="block text-xs text-sage-400 uppercase tracking-wider mb-1">Preis</span>
                                <span className="text-2xl font-serif text-sage-800 dark:text-sage-200">
                                    CHF {service.priceRange || service.price}
                                </span>
                            </div>
                            <div className="flex gap-3">
                                <button 
                                    onClick={() => openServiceModal(service)}
                                    className="px-6 py-3 rounded-full border border-sage-200 dark:border-sage-700 text-sage-600 dark:text-sage-300 hover:bg-sage-50 dark:hover:bg-sage-800 transition-colors text-sm font-medium"
                                >
                                    Details
                                </button>
                                <button 
                                    onClick={() => openBooking(service.id)}
                                    className="w-12 h-12 rounded-full bg-sage-50 dark:bg-sage-800 flex items-center justify-center text-sage-600 dark:text-sage-300 group-hover:bg-rose-400 group-hover:text-white dark:group-hover:bg-rose-500 dark:group-hover:text-white transition-all duration-300 shadow-sm"
                                >
                                    <ArrowRight size={20} />
                                </button>
                            </div>
                        </div>
                    </div>
                </Reveal>
            ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-white dark:bg-sage-900/30">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
            <Reveal>
                <div className="aspect-[3/4] rounded-t-[10rem] rounded-b-[2rem] overflow-hidden bg-sand-200 dark:bg-sage-800 relative shadow-2xl shadow-sage-200/50 dark:shadow-none group">
                     <div className="absolute inset-0 bg-rose-500/10 dark:bg-rose-500/5 group-hover:opacity-0 transition-opacity duration-700 z-10" />
                     <img 
                        src="https://picsum.photos/800/1000?grayscale" 
                        alt="Géraldine von Ehrenberg" 
                        className="object-cover w-full h-full opacity-90 group-hover:scale-105 transition-transform duration-[2s]"
                    />
                </div>
            </Reveal>
            <div className="space-y-10">
                <Reveal delay={0.2}>
                    <span className="text-xs font-medium uppercase tracking-widest text-rose-500">Über Mich</span>
                    <h2 className="text-5xl font-serif text-sage-900 dark:text-sage-50 mt-4">Géraldine <br/>von Ehrenberg</h2>
                </Reveal>
                <Reveal delay={0.3}>
                    <div className="space-y-6 text-lg font-light text-sage-700 dark:text-sage-300 leading-relaxed">
                        <p>
                            In meiner Arbeit verbinde ich fundiertes medizinisches Wissen mit intuitiver Körperwahrnehmung. 
                            Mein Ziel ist es, nicht nur Symptome zu behandeln, sondern den Menschen in seiner Ganzheit zu erfassen.
                        </p>
                        <p>
                            Als EMR-anerkannte Therapeutin begleite ich Sie auf Ihrem Weg zu mehr Wohlbefinden, 
                            Schmerzfreiheit und innerer Stille.
                        </p>
                    </div>
                </Reveal>
                <Reveal delay={0.4}>
                     <ul className="space-y-4 pt-4">
                        <li className="flex items-center gap-4 text-sm font-medium uppercase tracking-wide text-sage-600 dark:text-sage-400">
                            <span className="w-8 h-[1px] bg-rose-400"></span> 
                            Dipl. Fussreflexzonen-Therapeutin
                        </li>
                        <li className="flex items-center gap-4 text-sm font-medium uppercase tracking-wide text-sage-600 dark:text-sage-400">
                             <span className="w-8 h-[1px] bg-rose-400"></span> 
                             Neurosomatische Integration®
                        </li>
                        <li className="flex items-center gap-4 text-sm font-medium uppercase tracking-wide text-sage-600 dark:text-sage-400">
                             <span className="w-8 h-[1px] bg-rose-400"></span> 
                             EMR Qualitätslabel
                        </li>
                     </ul>
                </Reveal>
            </div>
        </div>
      </section>

      {/* Journal Section */}
      <section id="journal" className="py-32 px-6 max-w-7xl mx-auto">
         <Reveal>
            <div className="flex justify-between items-end mb-16">
                 <div>
                     <span className="text-xs font-medium uppercase tracking-widest text-rose-500 mb-2 block">Journal</span>
                     <h2 className="text-4xl md:text-5xl font-serif text-sage-900 dark:text-sage-100">Gedanken</h2>
                 </div>
            </div>
         </Reveal>

         <div className="grid md:grid-cols-3 gap-10">
            {ARTICLES.map((article, idx) => (
                <Reveal key={article.id} delay={idx * 0.1}>
                    <article 
                        className="group cursor-pointer space-y-6"
                        onClick={() => openJournalModal(article)}
                    >
                        <div className="aspect-[5/4] bg-sand-200 dark:bg-sage-800 rounded-3xl overflow-hidden shadow-sm relative">
                            <div className="absolute inset-0 bg-sage-900/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                            <img 
                                src={article.image} 
                                alt={article.title}
                                className="object-cover w-full h-full opacity-90 group-hover:scale-105 transition-all duration-1000" 
                            />
                        </div>
                        <div className="space-y-3">
                            <h3 className="text-2xl font-serif text-sage-900 dark:text-sage-100 group-hover:text-rose-600 dark:group-hover:text-rose-300 transition-colors">{article.title}</h3>
                            <p className="text-sage-500 dark:text-sage-400 leading-relaxed font-light line-clamp-2">{article.excerpt}</p>
                            <span className="inline-block pt-2 text-xs font-bold uppercase tracking-widest text-sage-400 group-hover:text-rose-500 transition-colors">Lesen</span>
                        </div>
                    </article>
                </Reveal>
            ))}
         </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 bg-sand-100 dark:bg-sage-950/50">
         <div className="max-w-3xl mx-auto px-6">
            <Reveal>
                <div className="text-center mb-16">
                     <span className="text-xs font-medium uppercase tracking-widest text-sage-500 mb-2 block">Wissenswertes</span>
                     <h2 className="text-4xl font-serif text-sage-900 dark:text-sage-100">Häufige Fragen</h2>
                </div>
            </Reveal>
            <div className="space-y-6">
                {FAQS.map((faq, idx) => (
                    <Reveal key={idx} delay={idx * 0.1}>
                        <div className="bg-white dark:bg-sage-900 p-8 rounded-2xl shadow-sm border border-transparent hover:border-rose-200 dark:hover:border-sage-700 transition-all duration-300">
                            <h4 className="text-lg font-medium text-sage-900 dark:text-sage-100 mb-3">{faq.question}</h4>
                            <p className="text-sage-600 dark:text-sage-400 leading-relaxed font-light">{faq.answer}</p>
                        </div>
                    </Reveal>
                ))}
            </div>
         </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="bg-sage-900 text-sage-200 pt-32 pb-12 px-6">
         <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
            <div className="space-y-8">
                <span className="font-serif text-3xl font-medium tracking-wide text-white">BEWEGTESTILLE</span>
                <p className="text-sage-400 font-light max-w-xs leading-relaxed">
                    Ein Ort der Ruhe und Regeneration im Herzen von Luzern.
                </p>
            </div>
            
            <div className="lg:col-start-3">
                <h4 className="text-xs font-bold uppercase tracking-widest text-sage-500 mb-8">Kontakt</h4>
                <ul className="space-y-6 text-sage-300 font-light">
                    <li className="flex items-start gap-4">
                        <MapPin size={20} className="shrink-0 text-rose-400"/>
                        <span className="leading-relaxed">{CONTACT_INFO.address}</span>
                    </li>
                    <li className="flex items-center gap-4">
                        <Mail size={20} className="shrink-0 text-rose-400"/>
                        <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-white transition-colors">{CONTACT_INFO.email}</a>
                    </li>
                    <li className="flex items-center gap-4">
                        <Phone size={20} className="shrink-0 text-rose-400"/>
                        <a href={`tel:${CONTACT_INFO.phone}`} className="hover:text-white transition-colors">{CONTACT_INFO.phone}</a>
                    </li>
                </ul>
            </div>

            <div>
                 <h4 className="text-xs font-bold uppercase tracking-widest text-sage-500 mb-8">Rechtliches</h4>
                 <ul className="space-y-4 text-sage-400 text-sm font-light">
                    <li><a href="#" className="hover:text-white transition-colors">Impressum</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Datenschutz</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">AGB</a></li>
                 </ul>
                 <div className="mt-8">
                     <Button onClick={() => openBooking()} variant="accent" className="w-full">Termin Buchen</Button>
                 </div>
            </div>
         </div>
         
         <p className="max-w-7xl mx-auto mb-6 text-[11px] text-sage-500">
            Demo build by P. Heiniger Design (Andermatt) — design@pascalheiniger.ch
         </p>

         <div className="max-w-7xl mx-auto border-t border-sage-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-sage-600 uppercase tracking-widest">
            <p>&copy; {new Date().getFullYear()} Bewegte Stille.</p>
            <p className="flex items-center gap-2">
              <span>Designed by</span>
              <span className="text-sage-400 hover:text-rose-400 transition-colors cursor-default">P. Heiniger Design</span>
            </p>
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