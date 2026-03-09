import React from 'react';
import { X } from 'lucide-react';
import { Button } from './ui/Button';
import { Service } from '../types';
import '../index.css';

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
        className="absolute inset-0 bg-sage-900/40 backdrop-blur-md transition-opacity duration-500 animate-fade-in"
        onClick={onClose}
      />
      
      <div className="relative w-full max-w-4xl bg-[#F6E6D2] rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-slide-up">
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 z-10 p-2 bg-black/20 backdrop-blur rounded-full text-white hover:bg-white/50 transition-colors"
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
                        className="w-full flex-shrink-0 h-full object-cover snap-start" 
                    />
                ))}
            </div>

            <div className="p-8 sm:p-12 space-y-8">
                <div>
                    <h2 className="text-3xl sm:text-4xl hero-color mb-2">{service.title}</h2>
                    <div className="flex flex-wrap gap-4 text-sm font-medium uppercase tracking-wide hero-color">
                        <span>{service.duration}</span>
                        <span>&bull;</span>
                        <span>{service.priceRange ? `CHF ${service.priceRange}` : `CHF ${service.price}`}</span>
                    </div>
                </div>

                <div className="prose prose-sage dark:prose-invert max-w-none text-lg hero-color font-light leading-relaxed whitespace-pre-line">
                    {service.longDescription || service.description}
                </div>

                <div className="pt-8 flex flex-col sm:flex-row gap-4 border-t border-[#174652]">
                    <Button onClick={() => window.open("https://calendar.app.google/pXGyFkn9dMtQRvnQA", "_blank", "noopener,noreferrer")} variant="accent" size="lg" className="w-full sm:w-auto shadow-xl shadow-rose-200/50">
                        Termin vereinbaren
                    </Button>
                    <Button onClick={onClose} variant="ghost" className="w-full sm:w-auto hero-color">
                        Schliessen
                    </Button>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};
