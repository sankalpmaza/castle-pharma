import React, { useState } from 'react';
import Image from 'next/image';
import HeroSection from '@/components/HeroSection';

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const homePageStats = [
    {
      icon: "🏆",
      title: "WHO GMP",
      subtitle: "Certified Quality"
    },
    {
      icon: "🌍",
      title: "Global Reach",
      subtitle: "Multiple Countries"
    },
    {
      icon: "💼",
      title: "Expertise",
      subtitle: "Bio-Pharmaceutical"
    }
  ];

  return (
    <div className="bg-white">
      <HeroSection 
        title="Welcome to Castle Pharma"
        description="Extending Concern in Healthcare with Ethics... Values... & Commitment..."
        showStats={true}
        stats={homePageStats}
      />

      {/* Main Content */}
      <section className="py-8 sm:py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base mb-4">
                  Castle Pharma was incorporated to pursue an ambitious goal of introducing
                  specialized healthcare products to meet the needs of a quality conscious market.
                </p>
                
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  Today, Castle Pharma is one of the fast growing Indian bio-pharmaceutical
                  companies. The product portfolio comprises of a wide range of products such as all
                  forms of Tablets / Capsules, Dry-Syrups & Liquid Syrups, Ointments, Antibiotic,
                  Injectables, Eye-Ear drops, Vaccines, Protein Powders, Food Supplements, Dietary
                  Supplements etc.
                </p>
              </div>

              {/* Our Strengths */}
              <div className="bg-slate-50 p-4 sm:p-6 rounded-lg border border-slate-200">
                <h3 className="text-lg sm:text-xl font-semibold text-slate-800 mb-4">Our Strengths:</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-3 mt-0.5 text-lg">•</span>
                    <span className="text-sm sm:text-base">Quality Manufacturing in WHO GMP Standards</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-3 mt-0.5 text-lg">•</span>
                    <span className="text-sm sm:text-base">Affordable medicines to all</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-3 mt-0.5 text-lg">•</span>
                    <span className="text-sm sm:text-base">Vast range of quality products</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-3 mt-0.5 text-lg">•</span>
                    <span className="text-sm sm:text-base">Global reach</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-3 mt-0.5 text-lg">•</span>
                    <span className="text-sm sm:text-base">Tamper proof packing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-3 mt-0.5 text-lg">•</span>
                    <span className="text-sm sm:text-base">Wide industry and marketing experience</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-3 mt-0.5 text-lg">•</span>
                    <span className="text-sm sm:text-base">Timely deliveries</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Content */}
            <div className="flex">
              {/* ISO Certificate */}
              <div className="bg-emerald-50 p-4 sm:p-6 rounded-lg w-full flex flex-col justify-center items-center text-center border border-emerald-200">
                <div 
                  className="w-full max-w-60 sm:max-w-80 h-64 sm:h-96 mx-auto mb-4 sm:mb-6 relative cursor-pointer group"
                  onClick={() => setSelectedImage("/images/certificate-big.gif")}
                >
                  <Image
                    src="/images/certificate-big.gif"
                    alt="WHO GMP Certificate"
                    fill
                    className="object-contain rounded-lg group-hover:scale-105 transition-transform duration-200"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-200 flex items-center justify-center rounded-lg">
                    <div className="bg-white bg-opacity-90 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-emerald-700 mb-2">WHO GMP Certified Manufacturing</h3>
                <p className="text-sm sm:text-base text-emerald-600">Quality Assurance & International Standards</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="bg-white py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-4">Why Choose Castle Pharma?</h2>
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
              Discover what makes us a trusted partner in healthcare
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-slate-50 p-4 sm:p-6 rounded-lg shadow-sm border border-slate-200 text-center hover:shadow-md transition-shadow">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-emerald-600 text-xl sm:text-2xl">🏭</span>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-slate-800 mb-3">WHO GMP Standards</h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">Quality manufacturing following international standards</p>
            </div>

            <div className="bg-slate-50 p-4 sm:p-6 rounded-lg shadow-sm border border-slate-200 text-center hover:shadow-md transition-shadow">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 text-xl sm:text-2xl">🌍</span>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-slate-800 mb-3">Global Reach</h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">Serving customers across multiple countries</p>
            </div>

            <div className="bg-slate-50 p-4 sm:p-6 rounded-lg shadow-sm border border-slate-200 text-center hover:shadow-md transition-shadow sm:col-span-2 lg:col-span-1">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-teal-600 text-xl sm:text-2xl">💊</span>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-slate-800 mb-3">Comprehensive Range</h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">Wide variety of pharmaceutical products</p>
            </div>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="relative w-full h-96 sm:h-[500px] md:h-[600px]">
              <Image
                src={selectedImage}
                alt="Certificate Detail"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
