'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header: React.FC = () => {
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/manufacturing', label: 'Manufacturing' },
    { href: '/products', label: 'Products' },
    { href: '/marketing', label: 'Marketing' },
    { href: '/careers', label: 'Careers' },
    { href: '/contact', label: 'Contact Us' },
  ];

  return (
    <header className="bg-white shadow-md">
      {/* Top curve decoration */}
      <div className="h-3 bg-gradient-to-r from-blue-600 to-blue-800"></div>
      
      {/* Logo section */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-center">
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
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-blue-50 border-t border-blue-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center">
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
                  >
                    {item.label}
                  </Link>
                  {index < navItems.length - 1 && (
                    <div className="h-4 w-px bg-blue-300"></div>
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Mobile menu */}
            <div className="md:hidden w-full">
              <select
                className="w-full p-2 border border-blue-300 rounded bg-white text-blue-800"
                value={pathname}
                onChange={(e) => window.location.href = e.target.value}
              >
                {navItems.map((item) => (
                  <option key={item.href} value={item.href}>
                    {item.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
