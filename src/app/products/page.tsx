import React from 'react';
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
            {products.map((product, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-64 relative">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-2"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-blue-800 mb-2">{product.name}</h3>
                  {product.therapeuticSegment && (
                    <p className="text-sm text-gray-600 mb-1">
                      <span className="font-medium">Therapeutic Segment:</span> {product.therapeuticSegment}
                    </p>
                  )}
                  <p className="text-sm text-gray-600 mb-1">
                    <span className="font-medium">Form:</span> {product.form}
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Strength:</span> {product.strength}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Table */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-800 mb-4">Healthcare Products</h2>
          </div>

          {/* Mobile View - Cards */}
          <div className="lg:hidden space-y-4 mb-8">
            {products.map((product, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-4">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 relative flex-shrink-0">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain rounded-md"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-blue-800 mb-1">{product.name}</h3>
                    {product.therapeuticSegment && (
                      <p className="text-sm text-gray-600 mb-1">
                        <span className="font-medium">Therapeutic:</span> {product.therapeuticSegment}
                      </p>
                    )}
                    <p className="text-sm text-gray-600 mb-1">
                      <span className="font-medium">Form:</span> {product.form}
                    </p>
                    <p className="text-sm text-gray-600">
                      <span className="font-medium">Strength:</span> {product.strength}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop View - Table */}
          <div className="hidden lg:block bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-blue-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Image</th>
                    <th className="px-6 py-4 text-left">Product Name</th>
                    <th className="px-6 py-4 text-left">Therapeutic Segment</th>
                    <th className="px-6 py-4 text-left">Form</th>
                    <th className="px-6 py-4 text-left">Strength</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="px-6 py-4">
                        <div className="w-20 h-20 relative">
                          <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-contain rounded-md"
                          />
                        </div>
                      </td>
                      <td className="px-6 py-4 font-semibold text-blue-800">{product.name}</td>
                      <td className="px-6 py-4 text-gray-700">{product.therapeuticSegment || "-"}</td>
                      <td className="px-6 py-4 text-gray-700">{product.form}</td>
                      <td className="px-6 py-4 text-gray-700">{product.strength}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Product Categories */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-blue-800 mb-4">Additional Product Categories</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">Ointments</h3>
              <p className="text-gray-600 text-sm">Topical pharmaceutical preparations</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">Antibiotics</h3>
              <p className="text-gray-600 text-sm">Various antibiotic formulations</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">Vaccines</h3>
              <p className="text-gray-600 text-sm">Preventive healthcare solutions</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">Protein Powders</h3>
              <p className="text-gray-600 text-sm">Nutritional protein supplements</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">Food Supplements</h3>
              <p className="text-gray-600 text-sm">Nutritional food supplement products</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">Dietary Supplements</h3>
              <p className="text-gray-600 text-sm">Health and wellness supplements</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">Eye-Ear Drops</h3>
              <p className="text-gray-600 text-sm">Specialized ophthalmic and otic solutions</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">Injectables</h3>
              <p className="text-gray-600 text-sm">Injectable pharmaceutical products</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
