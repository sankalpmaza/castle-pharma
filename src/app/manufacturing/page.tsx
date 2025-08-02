import React, { useState } from 'react';
import Image from 'next/image';
import HeroSection from '@/components/HeroSection';

export default function Manufacturing() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  return (
    <div className="bg-white">
      <HeroSection 
        title="Manufacturing"
        description="Excellence in Pharmaceutical Manufacturing"
      />

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="prose prose-lg">
              <p className="text-gray-700 leading-relaxed text-lg">
                Castle Pharma is with a powerful combination of skills and resources that
                provides a platform for delivering strong growth in today&apos;s rapidly changing
                healthcare environment.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                Everyday, we strive to discover new medicines that are designed to improve the
                health and quality of life of patients around the world - medicines which are
                innovative, effective and which offer added benefits such as reduced side effects
                or better ways of functioning.
              </p>

              <p className="text-gray-700 leading-relaxed">
                Our Manufacturer processes a well-oiled unit where all the manufacturing
                activities take place hygienically. Our manufacturers units are well-equiped with
                modern plants and machinery to manufacture world class pharmacy products.
              </p>

              <p className="text-gray-700 leading-relaxed">
                A vast area is dedicated for the purpose of manufacturing and processing of all
                the products. They provide sampling facilities as per the requirements of the
                client.
              </p>

              <p className="text-gray-700 leading-relaxed">
                Machineries and plants are checked and rechecked at regular intervals for the
                flawless performance and ease in operations. The plants and machinery are kept
                clean and well-greased for good operations.
              </p>

              <p className="text-gray-700 leading-relaxed">
                Our facilities are approved by leading Indian and Multinational Companies for
                whom we contract manufacture for their Domestic as well as International markets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Features */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-blue-800 mb-4">Our Manufacturing Excellence</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 text-2xl">🏭</span>
              </div>
              <h3 className="text-xl font-semibold text-blue-800 mb-2 text-center">Modern Facilities</h3>
              <p className="text-gray-600 text-center">State-of-the-art manufacturing units with advanced technology</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 text-2xl">🔬</span>
              </div>
              <h3 className="text-xl font-semibold text-blue-800 mb-2 text-center">Quality Control</h3>
              <p className="text-gray-600 text-center">Rigorous quality control measures at every stage</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 text-2xl">🧪</span>
              </div>
              <h3 className="text-xl font-semibold text-blue-800 mb-2 text-center">Research & Development</h3>
              <p className="text-gray-600 text-center">Continuous innovation and product development</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-800 mb-4 text-center">WHO GMP Certified</h3>
              <div 
                className="w-48 h-60 mx-auto mb-4 relative cursor-pointer group"
                onClick={() => setSelectedImage("/images/certificate-big.gif")}
              >
                <Image
                  src="/images/certificate-big.gif"
                  alt="WHO GMP Certificate - Castle Pharma Manufacturing"
                  fill
                  className="object-contain rounded-lg group-hover:scale-105 transition-transform duration-200"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-200 flex items-center justify-center rounded-lg">
                  <div className="bg-white bg-opacity-90 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 text-center font-semibold">International Quality Standards</p>
              <p className="text-sm text-gray-500 text-center mt-2">Compliance with global manufacturing guidelines</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 text-2xl">🔧</span>
              </div>
              <h3 className="text-xl font-semibold text-blue-800 mb-2 text-center">Equipment Maintenance</h3>
              <p className="text-gray-600 text-center">Regular maintenance and calibration of all machinery</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 text-2xl">🧽</span>
              </div>
              <h3 className="text-xl font-semibold text-blue-800 mb-2 text-center">Hygienic Environment</h3>
              <p className="text-gray-600 text-center">Strict hygiene protocols and clean room facilities</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-blue-800 mb-4">Manufacturing Process</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold text-blue-800 mb-2">Raw Material Testing</h3>
              <p className="text-gray-600 text-sm">Comprehensive testing of all incoming raw materials</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold text-blue-800 mb-2">Production</h3>
              <p className="text-gray-600 text-sm">Manufacturing under controlled conditions</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold text-blue-800 mb-2">Quality Testing</h3>
              <p className="text-gray-600 text-sm">Rigorous quality checks and batch testing</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                4
              </div>
              <h3 className="text-lg font-semibold text-blue-800 mb-2">Packaging & Distribution</h3>
              <p className="text-gray-600 text-sm">Secure packaging and timely distribution</p>
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
