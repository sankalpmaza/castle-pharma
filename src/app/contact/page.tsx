import React from 'react';
import Image from 'next/image';
import HeroSection from '@/components/HeroSection';

export default function Contact() {
  return (
    <div className="bg-white">
      <HeroSection 
        title="Contact Us"
        description="Thank you for your interest in Castle Pharma"
      />

      {/* Contact Information */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <p className="text-lg text-gray-700">
                Here you can contact us directly or order in-depth information.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Registered Office */}
              <div className="bg-blue-50 p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-blue-800 mb-6">Registered Office</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-blue-700 mb-2">Castle Pharma</h3>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Address:</h4>
                    <p className="text-gray-700 leading-relaxed">
                      MIDC Area Bandhan,<br />
                      Plot No.17/1B, Post Poynad,<br />
                      Taluka Alibag,<br />
                      District Raigad - 402 108,<br />
                      Maharashtra, India.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Tel. No.:</h4>
                    <div className="space-y-1">
                     
                      <p className="text-gray-700">
                        <a href="tel:+919421936203" className="hover:text-blue-600 transition-colors">
                          +91-9421936203
                        </a>
                      </p>
                      <p className="text-gray-700">
                        <a href="tel:+919158144414" className="hover:text-blue-600 transition-colors">
                          +91-9158144414
                        </a>
                      </p>
                      
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Fax:</h4>
                    <p className="text-gray-700">+91-02141-252674</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Email:</h4>
                    <p className="text-gray-700">
                      <a 
                        href="mailto:support@castlepharma.co.in"
                        className="text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        support@castlepharma.co.in
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white p-8 rounded-lg shadow-lg border">
                <h2 className="text-2xl font-bold text-blue-800 mb-6">Send us a Message</h2>
                
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Please provide details about your inquiry..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors font-medium"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact Cards */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-blue-800 mb-4">Get in Touch</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 text-2xl">📞</span>
              </div>
              <h3 className="text-lg font-semibold text-blue-800 mb-2">Call Us</h3>
              <p className="text-gray-600 text-sm mb-3">Speak directly with our team</p>
              <a 
                href="tel:+912141252674"
                className="text-blue-600 hover:text-blue-800 transition-colors font-medium"
              >
                +91/02141/252674
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 text-2xl">✉️</span>
              </div>
              <h3 className="text-lg font-semibold text-blue-800 mb-2">Email Us</h3>
              <p className="text-gray-600 text-sm mb-3">Send us your inquiries</p>
              <a 
                href="mailto:support@castlepharma.co.in"
                className="text-blue-600 hover:text-blue-800 transition-colors font-medium"
              >
                support@castlepharma.co.in
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 text-2xl">📍</span>
              </div>
              <h3 className="text-lg font-semibold text-blue-800 mb-2">Visit Us</h3>
              <p className="text-gray-600 text-sm mb-3">Our registered office location</p>
              <p className="text-gray-700 font-medium">
                Raigad, Maharashtra
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certification Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-blue-800 mb-6">Our Certification</h2>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="w-48 h-60 mx-auto mb-6 relative">
                <Image
                  src="/images/certificate-big.gif"
                  alt="WHO GMP Certificate - Castle Pharma"
                  fill
                  className="object-contain rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold text-blue-800 mb-2">WHO GMP Certified</h3>
              <p className="text-gray-600 mb-4">
                Castle Pharma is certified under WHO Good Manufacturing Practices (GMP) standards, 
                ensuring the highest quality in pharmaceutical manufacturing.
              </p>
              <div className="text-sm text-gray-500">
                <p>✓ International Quality Standards</p>
                <p>✓ Rigorous Quality Control</p>
                <p>✓ Compliance with Global Guidelines</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Hours */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-blue-50 p-8 rounded-lg text-center">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">Business Hours</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-blue-700 mb-2">Office Hours</h3>
                <p className="text-gray-700">Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p className="text-gray-700">Saturday: 9:00 AM - 1:00 PM</p>
                <p className="text-gray-700">Sunday: Closed</p>
              </div>
              <div>
                <h3 className="font-semibold text-blue-700 mb-2">Emergency Contact</h3>
                <p className="text-gray-700">For urgent inquiries, please call:</p>
                <p className="text-blue-600 font-medium">+91/9421936203</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
