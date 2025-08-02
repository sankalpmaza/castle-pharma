import React from 'react';
import HeroSection from '@/components/HeroSection';

export default function Careers() {
  const values = [
    "Excellence",
    "Innovation", 
    "Can-Do Spirit",
    "Teamwork",
    "Sharing & Learning",
    "Courage",
    "Empowerment",
    "Speed & Flexibility"
  ];

  return (
    <div className="bg-white">
      <HeroSection 
        title="Careers"
        description="With Castle Pharma"
      />

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="prose prose-lg">
              <p className="text-gray-700 leading-relaxed text-lg">
                Castle Pharma offers a wide range of career opportunities and is keen to employ
                a workforce of innovative people who can work together and add value to our
                vision.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                Castle Pharma is an equal opportunity employer and provides employment to people
                from diverse backgrounds. All individuals who believe that they can contribute
                to the organisation&apos;s goals are welcome to apply for a job with us.
              </p>

              <p className="text-gray-700 leading-relaxed">
                They&apos;re the standards against which we measure ourselves in everything we do,
                from client work to building the company. If these resonate with you, consider
                joining us.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-blue-800 mb-4">At Castle Pharma, we value:</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 text-2xl font-bold">{index + 1}</span>
                </div>
                <h3 className="text-lg font-semibold text-blue-800">{value}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-blue-800 mb-4">Why Join Castle Pharma?</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 text-2xl">🌟</span>
              </div>
              <h3 className="text-xl font-semibold text-blue-800 mb-2 text-center">Growth Opportunities</h3>
              <p className="text-gray-600 text-center">Wide range of career opportunities in a fast-growing pharmaceutical company</p>
            </div>

            <div className="bg-green-50 p-6 rounded-lg">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 text-2xl">🌍</span>
              </div>
              <h3 className="text-xl font-semibold text-blue-800 mb-2 text-center">Global Impact</h3>
              <p className="text-gray-600 text-center">Contribute to healthcare solutions that reach patients worldwide</p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold text-blue-800 mb-2 text-center">Inclusive Culture</h3>
              <p className="text-gray-600 text-center">Equal opportunity employer welcoming diverse backgrounds and perspectives</p>
            </div>

            <div className="bg-green-50 p-6 rounded-lg">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-blue-800 mb-2 text-center">Mission-Driven</h3>
              <p className="text-gray-600 text-center">Work towards meaningful healthcare goals with ethics and commitment</p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 text-2xl">💡</span>
              </div>
              <h3 className="text-xl font-semibold text-blue-800 mb-2 text-center">Innovation Focus</h3>
              <p className="text-gray-600 text-center">Be part of innovative pharmaceutical research and development</p>
            </div>

            <div className="bg-green-50 p-6 rounded-lg">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 text-2xl">⚖️</span>
              </div>
              <h3 className="text-xl font-semibold text-blue-800 mb-2 text-center">Quality Standards</h3>
              <p className="text-gray-600 text-center">Work in WHO GMP certified facilities with highest quality standards</p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Section */}
      <section className="bg-blue-600 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Join Our Team?</h2>
            <p className="text-xl mb-8">
              We&apos;re looking for innovative individuals who share our values and vision for healthcare excellence.
            </p>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-blue-800 mb-4">Submit Your Resume</h3>
              <p className="text-gray-700 mb-6">
                Send your resume and cover letter to our HR team. We review all applications and will contact qualified candidates.
              </p>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <p className="text-blue-800 font-semibold mb-2">Email your resume to:</p>
                <a 
                  href="mailto:info@castlepharma.com"
                  className="text-2xl font-bold text-blue-600 hover:text-blue-800 transition-colors"
                >
                  info@castlepharma.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-blue-800 mb-4">What We Look For</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">Professional Qualities</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Strong work ethic and commitment to excellence
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Team collaboration and communication skills
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Adaptability and continuous learning mindset
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Problem-solving and analytical thinking
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">Areas of Opportunity</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    Manufacturing and Quality Control
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    Research and Development
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    Marketing and Sales
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    Regulatory Affairs and Compliance
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
