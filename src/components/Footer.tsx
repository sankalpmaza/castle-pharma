import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          {/* Navigation links */}
          <div className="flex flex-wrap justify-center items-center text-xs sm:text-sm mb-4 gap-2">
            <Link href="/" className="hover:text-blue-200 transition-colors">Home</Link>
            <span className="hidden sm:inline mx-1">|</span>
            <Link href="/about" className="hover:text-blue-200 transition-colors">About us</Link>
            <span className="hidden sm:inline mx-1">|</span>
            <Link href="/manufacturing" className="hover:text-blue-200 transition-colors">Manufacturing</Link>
            <span className="hidden sm:inline mx-1">|</span>
            <Link href="/products" className="hover:text-blue-200 transition-colors">Products</Link>
            <span className="hidden sm:inline mx-1">|</span>
            <Link href="/marketing" className="hover:text-blue-200 transition-colors">Marketing</Link>
            <span className="hidden sm:inline mx-1">|</span>
            <Link href="/careers" className="hover:text-blue-200 transition-colors">Careers</Link>
            <span className="hidden sm:inline mx-1">|</span>
            <Link href="/contact" className="hover:text-blue-200 transition-colors">Contact Us</Link>
          </div>

          {/* Copyright */}
          <div className="text-xs text-blue-200">
            Copyright © 2025 Castle Pharma. All Rights Reserved.
          </div>
        </div>
      </div>

      {/* Bottom curve decoration */}
      <div className="h-3 bg-gradient-to-r from-blue-600 to-blue-800"></div>
    </footer>
  );
};

export default Footer;
