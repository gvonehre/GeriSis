import React from 'react';
import { X } from 'lucide-react';
import { Article } from '../types';

interface JournalModalProps {
  article: Article | null;
  isOpen: boolean;
  onClose: () => void;
}

export const JournalModal: React.FC<JournalModalProps> = ({ article, isOpen, onClose }) => {
  if (!isOpen || !article) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6" role="dialog" aria-modal="true">
      <div 
        className="absolute inset-0 bg-sage-900/40 dark:bg-black/60 backdrop-blur-md transition-opacity duration-500 animate-fade-in"
        onClick={onClose}
      />
      
      <div className="relative w-full max-w-3xl bg-sand-50 dark:bg-sage-950 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-slide-up border border-white/20">
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-black/50 to-transparent pointer-events-none z-10" />
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 z-20 p-2 bg-white/20 backdrop-blur-lg rounded-full text-white hover:bg-white/40 transition-colors"
        >
            <X size={24} />
        </button>

        <div className="overflow-y-auto custom-scrollbar">
            <div className="h-64 sm:h-80 w-full relative">
                <img 
                    src={article.image} 
                    alt={article.title} 
                    className="w-full h-full object-cover" 
                />
            </div>

            <div className="p-8 sm:p-12">
                <span className="text-xs font-bold uppercase tracking-widest text-rose-500 mb-3 block">Journal</span>
                <h2 className="text-3xl sm:text-4xl font-serif text-sage-900 dark:text-sage-50 mb-8 leading-tight">{article.title}</h2>
                
                <div 
                    className="prose prose-lg prose-sage dark:prose-invert max-w-none font-light leading-relaxed text-sage-700 dark:text-sage-300"
                    dangerouslySetInnerHTML={{ __html: article.content }}
                />
            </div>
        </div>
      </div>
    </div>
  );
};
