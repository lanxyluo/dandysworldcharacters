'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { mainNavigation } from '../../config/navigation'

const MainNavigation: React.FC = () => {
  const pathname = usePathname()
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileOpen(false);
  };

  return (
    <nav className="bg-gray-900 border-b border-gray-800 sticky top-0 z-50 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2" onClick={closeMobileMenu}>
            <div className="text-2xl font-extrabold text-purple-400">DW</div>
            <span className="hidden md:block text-white font-semibold">Dandy's World Tools</span>
          </Link>

          <div className="hidden md:flex items-center space-x-1">
            {mainNavigation.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link
                  key={item.id}
                  href={item.path}
                  onClick={closeMobileMenu}
                  title={item.description}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-2 ${
                    isActive ? 'bg-purple-600 text-white' : 'text-gray-300 hover:text-white hover:bg-gray-800'
                  }`}
                >
                  <span>{item.icon}</span>
                  {item.name}
                </Link>
              );
            })}
          </div>

          <button
            className="md:hidden p-2 text-gray-300 hover:text-white"
            onClick={toggleMobileMenu}
            aria-label="Toggle navigation menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {isMobileOpen && (
          <div className="md:hidden pb-4">
            <div className="space-y-1">
              {mainNavigation.map((item) => {
                const isActive = pathname === item.path;
                return (
                  <Link
                    key={item.id}
                    href={item.path}
                    onClick={closeMobileMenu}
                    className={`block px-3 py-2 rounded font-medium transition-colors flex items-center gap-2 ${
                      isActive ? 'bg-purple-600 text-white' : 'text-gray-300 hover:text-white hover:bg-gray-800'
                    }`}
                  >
                    <span>{item.icon}</span>
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default MainNavigation;
