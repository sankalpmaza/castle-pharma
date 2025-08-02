'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header: React.FC = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/manufacturing', label: 'Manufacturing' },
    { href: '/products', label: 'Products' },
    { href: '/marketing', label: 'Marketing' },
    { href: '/careers', label: 'Careers' },
    { href: '/contact', label: 'Contact Us' },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-md relative">
      {/* Top curve decoration */}
      <div className="h-3 bg-gradient-to-r from-blue-600 to-blue-800"></div>
      
      {/* Logo section */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between md:justify-center">
          {/* Mobile Hamburger Menu - Top Left */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-md text-blue-700 hover:text-blue-800 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Toggle mobile menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Company Logo and Name */}
          <Link href="/" className="flex items-center space-x-2 sm:space-x-3 hover:opacity-90 transition-opacity">
            {/* Castle Icon */}
            <div className="flex items-center">
              <svg 
                width="40" 
                height="40"
                className="sm:w-[50px] sm:h-[50px]"
                viewBox="0 0 100 100" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="10" y="40" width="80" height="40" fill="#3B82F6" />
                <rect x="15" y="30" width="15" height="20" fill="#3B82F6" />
                <rect x="35" y="25" width="15" height="25" fill="#3B82F6" />
                <rect x="50" y="25" width="15" height="25" fill="#3B82F6" />
                <rect x="70" y="30" width="15" height="20" fill="#3B82F6" />
                <rect x="20" y="50" width="8" height="12" fill="white" />
                <rect x="40" y="45" width="8" height="17" fill="white" />
                <rect x="52" y="45" width="8" height="17" fill="white" />
                <rect x="72" y="50" width="8" height="12" fill="white" />
              </svg>
            </div>
            {/* Company Name */}
            <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-800 tracking-wide">
              CASTLE PHARMA
            </span>
          </Link>

          {/* Spacer for mobile to center the logo */}
          <div className="md:hidden w-10"></div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-blue-50 border-t border-blue-200">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center">
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item, index) => (
                <React.Fragment key={item.href}>
                  <Link
                    href={item.href}
                    className={`px-4 py-3 text-sm font-medium transition-colors relative ${
                      pathname === item.href
                        ? 'text-blue-800 bg-blue-100'
                        : 'text-blue-700 hover:text-blue-800 hover:bg-blue-100'
                    }`}
                    onClick={closeMobileMenu}
                  >
                    {item.label}
                  </Link>
                  {index < navItems.length - 1 && (
                    <div className="h-4 w-px bg-blue-300"></div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Mobile Menu Dropdown */}
          {isMobileMenuOpen && (
            <div className="md:hidden absolute left-0 right-0 top-full bg-white shadow-lg border-t border-blue-200 z-50">
              <div className="py-2">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`block px-4 py-3 text-base font-medium transition-colors border-l-4 ${
                      pathname === item.href
                        ? 'text-blue-800 bg-blue-50 border-blue-500'
                        : 'text-blue-700 hover:text-blue-800 hover:bg-blue-50 border-transparent hover:border-blue-300'
                    }`}
                    onClick={closeMobileMenu}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
