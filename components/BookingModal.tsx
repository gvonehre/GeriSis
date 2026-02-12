import React, { useState, useEffect, useRef } from 'react';
import { X, ChevronLeft, Calendar, Clock, Check, Info, ShieldCheck } from 'lucide-react';
import { Button } from './ui/Button';
import { SERVICES } from '../constants';
import { Service, BookingState, DayAvailability, Gender } from '../types';
import { getAvailableSlots, submitBooking } from '../services/bookingService';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preSelectedServiceId?: string | null;
}

const INITIAL_STATE: BookingState = {
  step: 1,
  selectedService: null,
  selectedDate: null,
  selectedSlot: null,
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  isFirstSession: null,
  age: '',
  gender: '',
  concern: '',
  painArea: '',
  painIntensity: 5,
  injuries: '',
  notes: '',
  consent: false
};

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, preSelectedServiceId }) => {
  const [state, setState] = useState<BookingState>(INITIAL_STATE);
  const [availabilities, setAvailabilities] = useState<DayAvailability[]>([]);
  const [isLoadingSlots, setIsLoadingSlots] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize service if passed via props
  useEffect(() => {
    if (isOpen) {
      if (preSelectedServiceId) {
        const service = SERVICES.find(s => s.id === preSelectedServiceId) || null;
        setState(prev => ({ ...prev, selectedService: service }));
      }
      // Load slots
      setIsLoadingSlots(true);
      getAvailableSlots().then(slots => {
        setAvailabilities(slots);
        setIsLoadingSlots(false);
      });
      
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setTimeout(() => setState(INITIAL_STATE), 500);
    }
  }, [isOpen, preSelectedServiceId]);

  const handleNext = () => {
    setState(prev => ({ ...prev, step: (prev.step + 1) as any }));
  };

  const handleBack = () => {
    setState(prev => ({ ...prev, step: (prev.step - 1) as any }));
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      await submitBooking(state);
      setState(prev => ({ ...prev, step: 4 })); // Success state
    } catch (error) {
      console.error(error);
      alert("Es gab einen Fehler. Bitte versuchen Sie es erneut.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center" role="dialog" aria-modal="true">
      {/* Soft blurred Backdrop */}
      <div 
        className="absolute inset-0 bg-sage-900/30 dark:bg-black/50 backdrop-blur-md transition-opacity duration-700 animate-fade-in"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-2xl bg-white/95 dark:bg-sage-900/95 backdrop-blur-xl rounded-t-3xl sm:rounded-3xl shadow-2xl max-h-[90vh] overflow-hidden flex flex-col transition-transform duration-700 animate-slide-up border border-white/20 ring-1 ring-black/5">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 md:p-8 border-b border-sand-200 dark:border-sage-800/50">
            {state.step > 1 && state.step < 4 && (
                <button onClick={handleBack} className="p-2 -ml-2 text-sage-400 hover:text-sage-800 dark:hover:text-sage-200 transition-colors">
                    <ChevronLeft size={24} />
                </button>
            )}
            <div className="flex-1 text-center">
                <span className="text-xs uppercase tracking-widest text-sage-500 font-medium">
                    {state.step === 4 ? 'Bestätigung' : `Schritt ${state.step} von 3`}
                </span>
            </div>
            <button onClick={onClose} className="p-2 -mr-2 text-sage-400 hover:text-sage-800 dark:hover:text-sage-200 transition-colors">
                <X size={24} />
            </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8 custom-scrollbar bg-sand-50/50 dark:bg-sage-950/30">
            {state.step === 1 && (
                <Step1ServiceTime 
                    state={state} 
                    setState={setState} 
                    availabilities={availabilities} 
                    loading={isLoadingSlots}
                    onNext={handleNext}
                />
            )}
            {state.step === 2 && (
                <Step2Contact 
                    state={state} 
                    setState={setState} 
                    onNext={handleNext}
                />
            )}
            {state.step === 3 && (
                <Step3Concern 
                    state={state} 
                    setState={setState} 
                    onSubmit={handleSubmit}
                    isSubmitting={isSubmitting}
                />
            )}
            {state.step === 4 && (
                <StepSuccess state={state} onClose={onClose} />
            )}
        </div>
      </div>
    </div>
  );
};

// --- Sub-Components ---

const Step1ServiceTime = ({ state, setState, availabilities, loading, onNext }: any) => {
    const isValid = state.selectedService && state.selectedDate && state.selectedSlot;

    return (
        <div className="space-y-10 animate-fade-in">
            <section>
                <h3 className="text-2xl font-serif text-sage-900 dark:text-sage-50 mb-6">Behandlung wählen</h3>
                <div className="space-y-4">
                    {SERVICES.map(service => (
                        <div 
                            key={service.id}
                            onClick={() => setState((prev: any) => ({ ...prev, selectedService: service }))}
                            className={`p-5 rounded-2xl border cursor-pointer transition-all duration-300 group relative overflow-hidden ${
                                state.selectedService?.id === service.id 
                                ? 'border-rose-400 bg-white dark:border-rose-400 dark:bg-sage-800/80 shadow-md' 
                                : 'border-transparent bg-white dark:bg-sage-800/30 hover:bg-white/80 dark:hover:bg-sage-800/50 shadow-sm'
                            }`}
                        >
                            {/* Accent Bar for selected */}
                            {state.selectedService?.id === service.id && (
                              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-rose-400"></div>
                            )}

                            <div className="flex justify-between items-baseline mb-2 pl-3">
                                <span className={`font-medium text-lg ${state.selectedService?.id === service.id ? 'text-sage-900 dark:text-sage-50' : 'text-sand-800 dark:text-sand-100'}`}>
                                    {service.title}
                                </span>
                                <span className="font-serif text-lg text-sage-600 dark:text-sage-300">
                                  {service.priceRange ? `CHF ${service.priceRange}` : `CHF ${service.price}`}
                                </span>
                            </div>
                            <div className="text-sm text-sage-500 dark:text-sage-400 flex gap-4 pl-3">
                                <span className="flex items-center gap-1.5"><Clock size={14}/> {service.duration}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {state.selectedService && (
                <section className="animate-fade-in">
                    <h3 className="text-2xl font-serif text-sage-900 dark:text-sage-50 mb-6">Termin wählen</h3>
                    {loading ? (
                        <div className="h-32 flex flex-col items-center justify-center text-sage-400 gap-2">
                            <div className="w-6 h-6 border-2 border-sage-300 border-t-rose-400 rounded-full animate-spin"></div>
                            <span className="text-sm">Kalender wird geladen...</span>
                        </div>
                    ) : (
                        <div className="space-y-6">
                            <div className="flex gap-3 overflow-x-auto pb-4 no-scrollbar -mx-2 px-2">
                                {availabilities.map((day: DayAvailability) => {
                                    const isSelected = state.selectedDate?.toDateString() === day.date.toDateString();
                                    return (
                                        <button
                                            key={day.date.toISOString()}
                                            onClick={() => setState((prev: any) => ({ ...prev, selectedDate: day.date, selectedSlot: null }))}
                                            className={`flex-shrink-0 flex flex-col items-center justify-center w-16 h-24 rounded-2xl border transition-all duration-300 ${
                                                isSelected 
                                                ? 'bg-sage-800 text-white border-sage-800 shadow-md transform -translate-y-1' 
                                                : 'bg-white border-transparent text-sage-600 hover:bg-sage-50 dark:bg-sage-800 dark:text-sage-300 dark:hover:bg-sage-700'
                                            }`}
                                        >
                                            <span className="text-xs uppercase font-medium tracking-wide mb-1">{day.date.toLocaleDateString('de-DE', { weekday: 'short' })}</span>
                                            <span className="text-xl font-serif">{day.date.getDate()}</span>
                                        </button>
                                    )
                                })}
                            </div>

                            {state.selectedDate && (
                                <div className="animate-fade-in">
                                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                                        {availabilities
                                            .find((d: DayAvailability) => d.date.toDateString() === state.selectedDate?.toDateString())
                                            ?.slots.map((slot: any) => (
                                                <button
                                                    key={slot.id}
                                                    onClick={() => setState((prev: any) => ({ ...prev, selectedSlot: slot.time }))}
                                                    className={`py-3 px-2 rounded-xl text-sm transition-all duration-300 ${
                                                        state.selectedSlot === slot.time
                                                        ? 'bg-rose-400 text-white shadow-md dark:bg-rose-500'
                                                        : 'bg-white text-sage-700 hover:bg-rose-50 hover:text-rose-900 dark:bg-sage-800 dark:text-sage-300 dark:hover:bg-sage-700'
                                                    }`}
                                                >
                                                    {slot.time}
                                                </button>
                                            ))}
                                    </div>
                                    <p className="text-xs text-sage-500 mt-6 flex items-center gap-1.5 bg-sage-50 dark:bg-sage-800/50 p-3 rounded-lg">
                                        <Info size={14} className="shrink-0 text-rose-400"/>
                                        Absagen mind. 24h vorher, sonst wird verrechnet.
                                    </p>
                                </div>
                            )}
                        </div>
                    )}
                </section>
            )}

            <div className="pt-6 flex justify-end">
                <Button onClick={onNext} disabled={!isValid} variant="accent" className="w-full sm:w-auto">
                    Weiter
                </Button>
            </div>
        </div>
    );
};

const Step2Contact = ({ state, setState, onNext }: any) => {
    const isValid = state.firstName && state.lastName && state.email && state.phone;
    const update = (field: string, value: any) => setState((prev: any) => ({ ...prev, [field]: value }));

    const inputClasses = "w-full bg-white dark:bg-sage-800/50 border border-sand-200 dark:border-sage-700 rounded-xl p-3.5 focus:ring-2 focus:ring-rose-200 dark:focus:ring-rose-900 outline-none transition-all placeholder:text-sand-400 dark:placeholder:text-sage-600";
    const labelClasses = "block text-xs font-medium uppercase tracking-wider text-sage-500 mb-1.5 ml-1";

    return (
        <div className="space-y-8 animate-fade-in">
            <h3 className="text-2xl font-serif text-sage-900 dark:text-sage-50">Ihre Kontaktdaten</h3>
            
            <div className="grid grid-cols-2 gap-5">
                <div>
                    <label className={labelClasses}>Vorname</label>
                    <input type="text" value={state.firstName} onChange={(e) => update('firstName', e.target.value)} className={inputClasses} placeholder="Anna" />
                </div>
                <div>
                    <label className={labelClasses}>Nachname</label>
                    <input type="text" value={state.lastName} onChange={(e) => update('lastName', e.target.value)} className={inputClasses} placeholder="Muster" />
                </div>
            </div>

            <div className="space-y-5">
                 <div>
                    <label className={labelClasses}>E-Mail</label>
                    <input type="email" value={state.email} onChange={(e) => update('email', e.target.value)} className={inputClasses} placeholder="anna@beispiel.ch" />
                </div>
                <div>
                    <label className={labelClasses}>Telefon</label>
                    <input type="tel" value={state.phone} onChange={(e) => update('phone', e.target.value)} className={inputClasses} placeholder="+41 79 123 45 67" />
                </div>
            </div>

            <div className="pt-6 border-t border-sand-200 dark:border-sage-800 space-y-6">
                <p className="font-serif text-lg text-sage-800 dark:text-sage-200">Ein paar Details zu Ihnen</p>
                
                <div className="flex gap-5">
                     <div className="flex-1">
                        <label className={labelClasses}>Alter</label>
                        <input type="number" value={state.age} onChange={(e) => update('age', e.target.value)} className={inputClasses} placeholder="35" />
                    </div>
                     <div className="flex-1">
                        <label className={labelClasses}>Erster Besuch?</label>
                        <div className="flex gap-2">
                             <button 
                                onClick={() => update('isFirstSession', true)}
                                className={`flex-1 py-3.5 rounded-xl text-sm transition-all ${state.isFirstSession === true ? 'bg-sage-800 text-white shadow-md' : 'bg-white border border-sand-200 text-sage-600 dark:bg-sage-800 dark:border-sage-700 dark:text-sage-400'}`}
                             >Ja</button>
                             <button 
                                onClick={() => update('isFirstSession', false)}
                                className={`flex-1 py-3.5 rounded-xl text-sm transition-all ${state.isFirstSession === false ? 'bg-sage-800 text-white shadow-md' : 'bg-white border border-sand-200 text-sage-600 dark:bg-sage-800 dark:border-sage-700 dark:text-sage-400'}`}
                             >Nein</button>
                        </div>
                    </div>
                </div>
                
                {/* Dynamic Price Hint */}
                {state.selectedService?.isReflexology && state.isFirstSession !== null && (
                  <div className="bg-rose-50 dark:bg-rose-900/20 p-4 rounded-xl text-sm text-sage-800 dark:text-rose-100 flex items-start gap-2">
                    <Info size={16} className="shrink-0 mt-0.5 text-rose-500" />
                    <div>
                      {state.isFirstSession ? (
                        <span>Erstbehandlung (inkl. Anamnese): <strong>1 Std. 15 Min. – CHF 150</strong></span>
                      ) : (
                        <span>Folgebehandlung: <strong>1 Std. – CHF 120</strong></span>
                      )}
                    </div>
                  </div>
                )}

                <div>
                    <label className={labelClasses}>Geschlecht (Optional)</label>
                    <div className="relative">
                        <select value={state.gender} onChange={(e) => update('gender', e.target.value)} className={`${inputClasses} appearance-none cursor-pointer`}>
                            <option value="">Bitte wählen...</option>
                            <option value="female">Weiblich</option>
                            <option value="male">Männlich</option>
                            <option value="diverse">Divers</option>
                            <option value="prefer-not-to-say">Keine Angabe</option>
                        </select>
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-sage-400">
                             <ChevronLeft size={16} className="-rotate-90" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="pt-6 flex justify-end">
                <Button onClick={onNext} disabled={!isValid} variant="accent" className="w-full sm:w-auto">
                    Weiter
                </Button>
            </div>
        </div>
    );
};

const Step3Concern = ({ state, setState, onSubmit, isSubmitting }: any) => {
    const update = (field: string, value: any) => setState((prev: any) => ({ ...prev, [field]: value }));
    const isReady = state.consent && state.concern.length > 0;
    const inputClasses = "w-full bg-white dark:bg-sage-800/50 border border-sand-200 dark:border-sage-700 rounded-xl p-3.5 focus:ring-2 focus:ring-rose-200 dark:focus:ring-rose-900 outline-none transition-all placeholder:text-sand-400 dark:placeholder:text-sage-600";
    const labelClasses = "block text-xs font-medium uppercase tracking-wider text-sage-500 mb-1.5 ml-1";

    return (
        <div className="space-y-8 animate-fade-in">
             <div>
                <h3 className="text-2xl font-serif text-sage-900 dark:text-sage-50">Ihr Anliegen</h3>
                <p className="text-sm text-sage-500 mt-1">Helfen Sie mir, mich optimal auf unsere Sitzung vorzubereiten.</p>
             </div>

             <div>
                <label className={labelClasses}>Hauptbeschwerde / Anliegen</label>
                <textarea value={state.concern} onChange={(e) => update('concern', e.target.value)} rows={3} className={inputClasses} placeholder="Warum kommen Sie zu mir?" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                     <label className={labelClasses}>Schmerzbereich (Optional)</label>
                     <input type="text" value={state.painArea} onChange={(e) => update('painArea', e.target.value)} className={inputClasses} placeholder="z.B. Unterer Rücken" />
                </div>
                <div>
                     <label className={labelClasses}>Intensität (0-10)</label>
                     <div className="flex items-center gap-3 bg-white dark:bg-sage-800/50 p-3.5 border border-sand-200 dark:border-sage-700 rounded-xl">
                        <input type="range" min="0" max="10" value={state.painIntensity} onChange={(e) => update('painIntensity', parseInt(e.target.value))} className="w-full h-1.5 bg-sand-200 rounded-lg appearance-none cursor-pointer dark:bg-sage-700 accent-rose-500" />
                        <span className="w-8 text-center font-medium text-sage-900 dark:text-sage-100">{state.painIntensity}</span>
                     </div>
                </div>
            </div>

            <div>
                <label className={labelClasses}>Verletzungen / Operationen</label>
                <input type="text" value={state.injuries} onChange={(e) => update('injuries', e.target.value)} className={inputClasses} placeholder="Kurze Stichworte..." />
            </div>

            <div className="bg-sage-50 dark:bg-sage-800/50 p-5 rounded-xl flex items-start gap-3 mt-4 border border-sage-100 dark:border-sage-700">
                <input type="checkbox" id="consent" checked={state.consent} onChange={(e) => update('consent', e.target.checked)} className="mt-1 w-4 h-4 rounded border-sage-300 text-rose-500 focus:ring-rose-400 cursor-pointer" />
                <label htmlFor="consent" className="text-sm text-sage-600 dark:text-sage-300 cursor-pointer select-none leading-relaxed">
                    Ich bestätige, dass dies keine Notfallbehandlung ist und ich die Datenschutzerklärung akzeptiere.
                </label>
            </div>

            <div className="pt-6 flex justify-end">
                <Button onClick={onSubmit} disabled={!isReady} isLoading={isSubmitting} variant="accent" className="w-full sm:w-auto">
                    Kostenpflichtig buchen
                </Button>
            </div>
        </div>
    )
}

const StepSuccess = ({ state, onClose }: any) => {
    // Dynamic Summary logic
    let finalDuration = state.selectedService?.duration;
    let finalPrice = state.selectedService?.price;

    if (state.selectedService?.isReflexology) {
       if (state.isFirstSession) {
         finalDuration = "1 Std. 15 Min.";
         finalPrice = 150;
       } else {
         finalDuration = "1 Std.";
         finalPrice = 120;
       }
    }

    return (
        <div className="text-center space-y-8 py-10 animate-fade-in flex flex-col items-center">
            <div className="w-24 h-24 bg-sage-50 dark:bg-sage-800 rounded-full flex items-center justify-center text-sage-600 dark:text-sage-200 mb-2">
                <Check size={48} strokeWidth={1.5} />
            </div>
            <div>
                <h3 className="text-3xl font-serif text-sage-900 dark:text-sage-50 mb-3">Vielen Dank, {state.firstName}.</h3>
                <p className="text-sage-500 max-w-sm mx-auto leading-relaxed">
                    Ihr Termin für <strong>{state.selectedService?.title}</strong> am <br/>
                    <strong>{state.selectedDate?.toLocaleDateString()} um {state.selectedSlot}</strong><br/> ist reserviert.
                </p>
                <div className="mt-4 inline-block bg-rose-50 dark:bg-rose-900/20 px-4 py-2 rounded-full text-sm text-sage-800 dark:text-rose-100 font-medium">
                   {finalDuration} — CHF {finalPrice}
                </div>
            </div>
            
            <div className="bg-white border border-sand-200 dark:bg-sage-800/30 dark:border-sage-700 p-6 rounded-2xl text-left max-w-sm w-full mx-auto text-sm space-y-3 shadow-sm">
                <p className="flex items-start gap-3 text-sage-600 dark:text-sage-300">
                    <Info size={18} className="shrink-0 text-sage-400" />
                    Eine Bestätigung wurde an <span className="font-medium text-sage-800 dark:text-sage-100">{state.email}</span> gesendet.
                </p>
            </div>

            <div className="pt-4">
                <Button onClick={onClose} variant="outline">
                    Zurück zur Webseite
                </Button>
            </div>
        </div>
    )
}
