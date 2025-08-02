import React from 'react';
import Image from 'next/image';

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  description: string;
  showStats?: boolean;
  stats?: Array<{
    icon: string;
    title: string;
    subtitle: string;
  }>;
}

export default function HeroSection({ 
  title, 
  subtitle = "Castle Pharmaceuticals", 
  description, 
  showStats = false, 
  stats = [] 
}: HeroSectionProps) {
  return (
    <section className="bg-gradient-to-br from-slate-50 via-emerald-50 to-blue-50 py-8 relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-emerald-100/20 via-transparent to-blue-100/20"></div>
        <div className="absolute top-10 right-10 w-32 h-32 bg-emerald-200/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-blue-200/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-slate-200/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-2 relative z-10">
        <div className="grid lg:grid-cols-2 gap-4 items-center min-h-[400px]">
          {/* Content Section */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              {title}
            </h1>
            <p className="text-xl font-medium text-emerald-600 mb-3">{subtitle}</p>
            <p className="text-lg text-slate-600 italic leading-relaxed mb-8">
              {description}
            </p>
            
            {/* Key Stats */}
            {showStats && stats.length > 0 && (
              <div className="flex justify-center lg:justify-start space-x-8 mt-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-emerald-600 text-xl">{stat.icon}</span>
                    </div>
                    <p className="text-sm font-semibold text-slate-700">{stat.title}</p>
                    <p className="text-xs text-slate-500">{stat.subtitle}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          {/* Hero Image Section */}
          <div className="flex justify-center lg:justify-end h-full">
            <div className="relative w-full h-[350px] lg:h-[400px]">
              <Image
                src="/images/castlepharma_hero.png"
                alt="Castle Pharma - Pharmaceutical Excellence"
                fill
                className="object-cover drop-shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
