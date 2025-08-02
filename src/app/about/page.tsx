import React from 'react';
import Image from 'next/image';
import HeroSection from '@/components/HeroSection';

export default function About() {
  const aboutStats = [
    {
      icon: "🚀",
      title: "Fast Growing",
      subtitle: "Indian Pharma"
    },
    {
      icon: "⭐",
      title: "Excellence",
      subtitle: "Quality Focus"
    },
    {
      icon: "🤝",
      title: "Trust",
      subtitle: "Global Partners"
    }
  ];

  return (
    <div className="bg-white">
      <HeroSection 
        title="About Castle Pharma"
        description="Dedicated to good health"
        showStats={true}
        stats={aboutStats}
      />

      {/* Main Content */}
      <section className="py-8 sm:py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-start">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="prose prose-lg">
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  We take pleasure in introducing ourselves as a professionally managed fast
                  growing company among the spectrum of Indian Pharmaceutical companies which are
                  spreading their wings across the globe.
                </p>
                
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  Castle pharma was incepted in the year 2000 at Navi Mumbai, Maharashtra, India.
                  Under the enterprising headship of Mr. M. N. Juikar and Mr. Siraj Khairatkar, the owners of the company Castle Pharma has been scaling new heights in its
                  business endeavor. We have marked our presence in this sector as one of the
                  reliable Allopathic Medicines Manufacturers and Marketer in India.
                </p>
              </div>

              {/* Our Mission */}
              <div className="bg-blue-50 p-4 sm:p-6 rounded-lg">
                <h3 className="text-lg sm:text-xl font-semibold text-blue-800 mb-4">Our Mission</h3>
                <p className="text-gray-700 text-sm sm:text-base">
                  To provide health care products to all strata&apos;s of society across the globe
                </p>
              </div>

              {/* Our Markets */}
              <div className="bg-green-50 p-4 sm:p-6 rounded-lg">
                <h3 className="text-lg sm:text-xl font-semibold text-green-800 mb-4">Our Markets</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-green-700 mb-2">■ International</h4>
                    <p className="text-gray-700 text-sm sm:text-base">
                      Our primary markets consist of underdeveloped and developing countries of Asia,
                      Middle East and Africa.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-green-700 mb-2">■ Home Market</h4>
                    <p className="text-gray-700 text-sm sm:text-base">
                      In our home market in India, we distribute pharmaceuticals to other
                      pharmaceutical wholesalers as well as to major pharmacy retail multiples across the country.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="space-y-6">
              {/* WHO GMP Certificate */}
              <div className="bg-green-50 rounded-lg p-4 sm:p-6 text-center">
                <h3 className="text-lg sm:text-xl font-semibold text-green-800 mb-4">Our Certification</h3>
                <div className="w-36 h-44 sm:w-48 sm:h-60 mx-auto mb-4 relative">
                  <Image
                    src="/images/certificate-big.gif"
                    alt="WHO GMP Certificate - Castle Pharma"
                    fill
                    className="object-contain rounded-lg"
                  />
                </div>
                <p className="text-green-700 font-semibold text-sm sm:text-base">WHO GMP Certified</p>
                <p className="text-xs sm:text-sm text-green-600 mt-2">International Quality Standards</p>
              </div>

              {/* Company Building */}
              <div className="bg-blue-100 rounded-lg p-4 sm:p-6 text-center">
                <h3 className="text-lg sm:text-xl font-semibold text-blue-800 mb-4">Our Facility</h3>
                <div className="w-full h-36 sm:h-48 relative mb-4 rounded-lg overflow-hidden">
                  <Image
                    src="/images/building.jpg"
                    alt="Castle Pharma Manufacturing Facility"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <p className="text-blue-700 text-sm sm:text-base">Castle Pharma facilities and team</p>
              </div>

              {/* Contact Information */}
              <div className="bg-gray-50 p-4 sm:p-6 rounded-lg">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">Contact Information</h3>
                <div className="space-y-2 text-gray-700">
                  <p className="text-sm sm:text-base">
                    <strong>Email:</strong> 
                    <a href="mailto:info@Castlepharma.in" className="text-blue-600 hover:text-blue-800 ml-2 break-all">
                      info@Castlepharma.in
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gray-50 py-8 sm:py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-800 mb-4">Our Values</h2>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 text-lg sm:text-2xl">⚖️</span>
              </div>
              <h3 className="text-sm sm:text-lg font-semibold text-blue-800 mb-2">Ethics</h3>
              <p className="text-gray-600 text-xs sm:text-sm">Maintaining highest ethical standards</p>
            </div>

            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 text-lg sm:text-2xl">💎</span>
              </div>
              <h3 className="text-sm sm:text-lg font-semibold text-blue-800 mb-2">Values</h3>
              <p className="text-gray-600 text-xs sm:text-sm">Strong foundation of core values</p>
            </div>

            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 text-lg sm:text-2xl">🤝</span>
              </div>
              <h3 className="text-sm sm:text-lg font-semibold text-blue-800 mb-2">Commitment</h3>
              <p className="text-gray-600 text-xs sm:text-sm">Dedicated to healthcare excellence</p>
            </div>

            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 text-lg sm:text-2xl">🏆</span>
              </div>
              <h3 className="text-sm sm:text-lg font-semibold text-blue-800 mb-2">Quality</h3>
              <p className="text-gray-600 text-xs sm:text-sm">Uncompromising quality standards</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
