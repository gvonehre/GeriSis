import React from 'react';
import { X } from 'lucide-react';
import { Button } from './ui/Button';
import { Service } from '../types';

interface ServiceModalProps {
  service: Service | null;
  isOpen: boolean;
  onClose: () => void;
  onBook: (serviceId: string) => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({ service, isOpen, onClose, onBook }) => {
  if (!isOpen || !service) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6" role="dialog" aria-modal="true">
      <div 
        className="absolute inset-0 bg-sage-900/40 dark:bg-black/60 backdrop-blur-md transition-opacity duration-500 animate-fade-in"
        onClick={onClose}
      />
      
      <div className="relative w-full max-w-4xl bg-white dark:bg-sage-950 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-slide-up">
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 z-10 p-2 bg-white/50 dark:bg-black/20 backdrop-blur rounded-full text-sage-800 dark:text-white hover:bg-white transition-colors"
        >
            <X size={24} />
        </button>

        <div className="overflow-y-auto custom-scrollbar">
            {/* Gallery */}
            <div className="h-64 sm:h-80 w-full bg-sand-200 overflow-x-auto flex snap-x snap-mandatory no-scrollbar">
                {service.images?.map((img, i) => (
                    <img 
                        key={i} 
                        src={img} 
                        alt={service.title} 
                        className="w-full sm:w-[80%] flex-shrink-0 h-full object-cover snap-center" 
                    />
                ))}
            </div>

            <div className="p-8 sm:p-12 space-y-8">
                <div>
                    <h2 className="text-3xl sm:text-4xl font-serif text-sage-900 dark:text-sage-50 mb-2">{service.title}</h2>
                    <div className="flex flex-wrap gap-4 text-sm font-medium uppercase tracking-wide text-sage-500 dark:text-sage-400">
                        <span>{service.duration}</span>
                        <span>&bull;</span>
                        <span>{service.priceRange ? `CHF ${service.priceRange}` : `CHF ${service.price}`}</span>
                    </div>
                </div>

                <div className="prose prose-sage dark:prose-invert max-w-none text-lg text-sage-600 dark:text-sage-300 font-light leading-relaxed whitespace-pre-line">
                    {service.longDescription || service.description}
                </div>

                <div className="pt-8 flex flex-col sm:flex-row gap-4 border-t border-sand-200 dark:border-sage-800">
                    <Button onClick={() => onBook(service.id)} variant="accent" size="lg" className="w-full sm:w-auto shadow-xl shadow-rose-200/50 dark:shadow-none">
                        Termin vereinbaren
                    </Button>
                    <Button onClick={onClose} variant="ghost" className="w-full sm:w-auto">
                        Schliessen
                    </Button>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};
