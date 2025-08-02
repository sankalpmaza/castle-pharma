import React, { useState } from 'react';
import Image from 'next/image';
import HeroSection from '@/components/HeroSection';

interface Product {
  name: string;
  therapeuticSegment: string;
  form: string;
  strength: string;
  image: string;
}

export default function Products() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const products: Product[] = [
    {
      name: "Casirab",
      therapeuticSegment: "Rabeprazole",
      form: "Tablet",
      strength: "20mg",
      image: "/images/casirab-20.jpg"
    },
    {
      name: "F-200",
      therapeuticSegment: "Ofloxacin",
      form: "Tablet",
      strength: "200mg",
      image: "/images/f-200.jpg"
    },
    {
      name: "Saara-MR",
      therapeuticSegment: "",
      form: "Tablet",
      strength: "N/A",
      image: "/images/saara-mr.jpg"
    },
    {
      name: "Saara",
      therapeuticSegment: "",
      form: "Tablet",
      strength: "N/A",
      image: "/images/saara.jpg"
    },
    {
      name: "Freecold",
      therapeuticSegment: "",
      form: "Syrup",
      strength: "N/A",
      image: "/images/freecold.jpg"
    },
    {
      name: "F-0D",
      therapeuticSegment: "Ofloxacin Ornidazole",
      form: "Tablet",
      strength: "200mg, 500mg",
      image: "/images/F-OD.jpg"
    },
    {
      name: "Casovin",
      therapeuticSegment: "",
      form: "Tablet",
      strength: "N/A",
      image: "/images/casovin.jpg"
    },
    {
      name: "Casovin-D+",
      therapeuticSegment: "",
      form: "Tablet",
      strength: "N/A",
      image: "/images/casovin-dplus.jpg"
    },
    {
      name: "Fulcef-200",
      therapeuticSegment: "",
      form: "Tablet",
      strength: "N/A",
      image: "/images/fulcef-200.jpg"
    },
    {
      name: "Casfer",
      therapeuticSegment: "Ferrous Ascorbate & Folic Acid",
      form: "Tablets",
      strength: "N/A",
      image: "/images/casfer.jpg"
    },
    {
      name: "Casiban",
      therapeuticSegment: "",
      form: "Tablet",
      strength: "N/A",
      image: "/images/casiban.jpg"
    }
  ];

  return (
    <div className="bg-white">
      <HeroSection 
        title="Products"
        description="Health Care Products"
      />

      {/* Products Overview */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-800 mb-4">Our Product Range</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Castle Pharma offers a comprehensive range of pharmaceutical products including tablets, capsules, 
              syrups, injectables, and specialized healthcare solutions manufactured to the highest quality standards.
            </p>
          </div>

          {/* Product Categories */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 text-2xl">💊</span>
              </div>
              <h3 className="text-xl font-semibold text-blue-800 mb-2">Tablets & Capsules</h3>
              <p className="text-gray-600">All forms of solid dosage pharmaceutical products</p>
            </div>

            <div className="bg-green-50 p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 text-2xl">🧪</span>
              </div>
              <h3 className="text-xl font-semibold text-blue-800 mb-2">Syrups & Liquids</h3>
              <p className="text-gray-600">Dry-syrups and liquid syrups for various therapeutic needs</p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 text-2xl">💉</span>
              </div>
              <h3 className="text-xl font-semibold text-blue-800 mb-2">Injectables & Drops</h3>
              <p className="text-gray-600">Injectables, eye-ear drops, and specialized formulations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-blue-800 mb-4">Our Product Showcase</h2>
            <p className="text-lg text-gray-700">Explore our range of healthcare products</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
            {products.map((product, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div 
                  className="h-48 sm:h-56 relative cursor-pointer group"
                  onClick={() => setSelectedImage(product.image)}
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-200"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-200 flex items-center justify-center">
                    <div className="bg-white bg-opacity-90 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-3 sm:p-4">
                  <h3 className="text-base sm:text-lg font-semibold text-blue-800 mb-2">{product.name}</h3>
                  {product.therapeuticSegment && (
                    <p className="text-xs sm:text-sm text-gray-600 mb-1">
                      <span className="font-medium">Therapeutic Segment:</span> {product.therapeuticSegment}
                    </p>
                  )}
                  <p className="text-xs sm:text-sm text-gray-600 mb-1">
                    <span className="font-medium">Form:</span> {product.form}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-600">
                    <span className="font-medium">Strength:</span> {product.strength}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Product Categories */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-blue-800 mb-4">Additional Product Categories</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border-l-4 border-blue-500">
              <h3 className="text-base sm:text-lg font-semibold text-blue-800 mb-2">Ointments</h3>
              <p className="text-gray-600 text-xs sm:text-sm">Topical pharmaceutical preparations</p>
            </div>

            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border-l-4 border-green-500">
              <h3 className="text-base sm:text-lg font-semibold text-blue-800 mb-2">Antibiotics</h3>
              <p className="text-gray-600 text-xs sm:text-sm">Various antibiotic formulations</p>
            </div>

            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border-l-4 border-blue-500">
              <h3 className="text-base sm:text-lg font-semibold text-blue-800 mb-2">Vaccines</h3>
              <p className="text-gray-600 text-xs sm:text-sm">Preventive healthcare solutions</p>
            </div>

            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border-l-4 border-green-500">
              <h3 className="text-base sm:text-lg font-semibold text-blue-800 mb-2">Protein Powders</h3>
              <p className="text-gray-600 text-xs sm:text-sm">Nutritional protein supplements</p>
            </div>

            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border-l-4 border-blue-500">
              <h3 className="text-base sm:text-lg font-semibold text-blue-800 mb-2">Food Supplements</h3>
              <p className="text-gray-600 text-xs sm:text-sm">Nutritional food supplement products</p>
            </div>

            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border-l-4 border-green-500">
              <h3 className="text-base sm:text-lg font-semibold text-blue-800 mb-2">Dietary Supplements</h3>
              <p className="text-gray-600 text-xs sm:text-sm">Health and wellness supplements</p>
            </div>

            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border-l-4 border-blue-500">
              <h3 className="text-base sm:text-lg font-semibold text-blue-800 mb-2">Eye-Ear Drops</h3>
              <p className="text-gray-600 text-xs sm:text-sm">Specialized ophthalmic and otic solutions</p>
            </div>

            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border-l-4 border-green-500">
              <h3 className="text-base sm:text-lg font-semibold text-blue-800 mb-2">Injectables</h3>
              <p className="text-gray-600 text-xs sm:text-sm">Injectable pharmaceutical products</p>
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
                alt="Product Detail"
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
