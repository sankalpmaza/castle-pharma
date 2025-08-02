import React from 'react';
import HeroSection from '@/components/HeroSection';

export default function Marketing() {
  const marketingStats = [
    {
      icon: "🌐",
      title: "Global Reach",
      subtitle: "Multiple Countries"
    },
    {
      icon: "🎯",
      title: "Strategic Focus",
      subtitle: "Distribution Network"
    },
    {
      icon: "💼",
      title: "Expert Team",
      subtitle: "Mumbai Office"
    }
  ];

  return (
    <div className="bg-white">
      <HeroSection 
        title="Marketing"
        description="Reaching out"
        showStats={true}
        stats={marketingStats}
      />

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="prose prose-lg">
              <p className="text-gray-700 leading-relaxed text-lg">
                The heart of any good business activity is its Marketing and Distribution strength.
                Our consistent growth can be attributed to expertise in this area.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                We are professionally managed fast growing company among the spectrum of Indian
                pharmaceutical companies which are spreading their wings across the globe.
              </p>

              <p className="text-gray-700 leading-relaxed">
                Our market is not only expanded in India but also in the countries of Africa,
                Lesontho, Maseru, Durban, Cape Town, Kuwait, Srilanka and Botswana. Consequently,
                we are one of the most credible Pharmaceutical Manufacturers as well as
                Exporters in the market.
              </p>

              <p className="text-gray-700 leading-relaxed">
                Our Product and Brand Management team based at our Marketing office in New Mumbai, guide them with required Marketing and Training inputs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Marketing Strengths */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-blue-800 mb-4">Marketing Excellence</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-blue-800 mb-2">Strategic Distribution</h3>
              <p className="text-gray-600">Comprehensive distribution network across multiple countries</p>
            </div>

            <div className="bg-green-50 p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 text-2xl">📈</span>
              </div>
              <h3 className="text-xl font-semibold text-blue-800 mb-2">Brand Management</h3>
              <p className="text-gray-600">Expert product and brand management team</p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 text-2xl">🏆</span>
              </div>
              <h3 className="text-xl font-semibold text-blue-800 mb-2">Market Leadership</h3>
              <p className="text-gray-600">Credible manufacturer and exporter in pharmaceutical industry</p>
            </div>

            <div className="bg-green-50 p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 text-2xl">🎓</span>
              </div>
              <h3 className="text-xl font-semibold text-blue-800 mb-2">Training & Support</h3>
              <p className="text-gray-600">Comprehensive marketing and training inputs for partners</p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 text-2xl">🌍</span>
              </div>
              <h3 className="text-xl font-semibold text-blue-800 mb-2">Global Expansion</h3>
              <p className="text-gray-600">Continuously expanding international market presence</p>
            </div>

            <div className="bg-green-50 p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold text-blue-800 mb-2">Partnership Focus</h3>
              <p className="text-gray-600">Strong relationships with distributors and retailers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Marketing Office */}
      <section className="bg-blue-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-blue-800 mb-6">Marketing Headquarters</h2>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">New Mumbai Office</h3>
              <p className="text-gray-700 mb-4">
                Our Product and Brand Management team is strategically located in New Mumbai, 
                providing comprehensive marketing and training support to our distribution network.
              </p>
              <div className="flex justify-center space-x-4">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-blue-600 text-xl">📍</span>
                  </div>
                  <span className="text-sm text-gray-600">Strategic Location</span>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-green-600 text-xl">👥</span>
                  </div>
                  <span className="text-sm text-gray-600">Expert Team</span>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-blue-600 text-xl">📚</span>
                  </div>
                  <span className="text-sm text-gray-600">Training Programs</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
