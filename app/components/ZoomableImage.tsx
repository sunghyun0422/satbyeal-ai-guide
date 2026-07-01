"use client";
import { useState } from 'react';

export default function ZoomableImage({ src, alt, className }: { src: string, alt: string, className?: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="relative group">
        <img 
          src={src} 
          alt={alt} 
          className={`${className} cursor-zoom-in transition-all duration-300 group-hover:shadow-lg`} 
          onClick={() => setIsOpen(true)} 
        />
        <div className="absolute top-2 right-2 bg-black/50 text-white p-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          <span className="material-symbols-outlined text-sm">zoom_in</span>
        </div>
      </div>
      
      {isOpen && (
        <div 
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 md:p-8 cursor-zoom-out backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        >
          <img 
            src={src} 
            alt={alt} 
            className="max-w-full max-h-full object-contain rounded shadow-2xl"
          />
          <button 
            className="absolute top-4 right-4 text-white hover:text-primary transition-colors flex items-center justify-center p-2"
            onClick={(e) => { e.stopPropagation(); setIsOpen(false); }}
          >
            <span className="material-symbols-outlined text-3xl">close</span>
          </button>
        </div>
      )}
    </>
  );
}
