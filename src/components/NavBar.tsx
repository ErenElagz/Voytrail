'use client';

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { Icon } from '@iconify/react';
import logoWhite from '@/assets/images/logo-white.png';

export default function NavBar() {
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Reusable class strings
  const containerClasses =
    'sticky top-2 z-50 mx-2 sm:mx-4 my-2 flex max-w-7xl items-center justify-between rounded-full border-2 border-zinc-100 bg-white/70 p-2 sm:p-3 backdrop-blur-md';
  const logoContainerClasses = 'flex items-center flex-shrink-0';
  const logoClasses = 'rounded-full w-8 h-8 sm:w-10 sm:h-10';
  const brandClasses =
    'ml-1 sm:ml-2 text-lg sm:text-2xl md:text-3xl font-bold text-zinc-700 pointer-events-none whitespace-nowrap';
  const navClasses = 'hidden md:flex items-center gap-4';
  const linkClasses =
    'px-3 py-2 text-md font-medium tracking-tight text-zinc-500 transition-colors duration-300 hover:text-zinc-900';
  const buttonContainerClasses = 'hidden md:flex justify-end gap-2';
  const demoButtonClasses =
    'px-4 py-2 text-md font-medium tracking-tight text-zinc-500 transition-colors duration-300 hover:text-zinc-900';
  const loginButtonClasses =
    'rounded-full bg-zinc-800 px-6 py-2 text-md font-medium text-white transition-colors duration-300 hover:bg-zinc-700';

  // Helper function to get correct href
  const getHref = (section: string) => {
    return isHomePage ? `#${section}` : `/#${section}`;
  };

  return (
    <div className="sticky top-2 z-50 flex justify-center px-2 sm:px-4 my-2">
      <div className={containerClasses}>
        {/* Logo and brand */}
        <a className={logoContainerClasses} href={getHref('Home')}>
          <Image src={logoWhite} alt="Voytrail Logo" width={40} height={40} className={logoClasses} priority />
          <span className={brandClasses}>voytrail.</span>
        </a>

        {/* Navigation links */}
        <nav className={navClasses}>
          <a href={getHref('Home')} className={linkClasses}>
            Home
          </a>
          <a href={getHref('Features')} className={linkClasses}>
            Solutions
          </a>
          <a href={getHref('Pricing')} className={linkClasses}>
            Pricing
          </a>
          <a href={getHref('Contact')} className={linkClasses}>
            Contact
          </a>
        </nav>

        {/* Action buttons */}
        <div className={buttonContainerClasses}>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <button className={demoButtonClasses}>Get Demo</button>
          </a>
          <a href="https://app.voytrail.com/login" target="_blank" rel="noopener noreferrer">
            <button className={loginButtonClasses}>Login</button>
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden rounded-full p-2 text-zinc-700 hover:bg-zinc-100 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <Icon icon={mobileMenuOpen ? 'mdi:close' : 'mdi:menu'} width={24} height={24} />
        </button>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-4 right-4 mt-2 md:hidden rounded-3xl border-2 border-zinc-100 bg-white/95 backdrop-blur-md shadow-lg">
            <nav className="flex flex-col p-4">
              <a
                href={getHref('Home')}
                className="px-4 py-3 text-md font-medium text-zinc-700 hover:bg-zinc-50 rounded-2xl transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </a>
              <a
                href={getHref('Features')}
                className="px-4 py-3 text-md font-medium text-zinc-700 hover:bg-zinc-50 rounded-2xl transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Solutions
              </a>
              <a
                href={getHref('Pricing')}
                className="px-4 py-3 text-md font-medium text-zinc-700 hover:bg-zinc-50 rounded-2xl transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Pricing
              </a>
              <a
                href={getHref('Contact')}
                className="px-4 py-3 text-md font-medium text-zinc-700 hover:bg-zinc-50 rounded-2xl transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
              <div className="mt-4 flex flex-col gap-2">
                <a href="https://app.voytrail.com/login" target="_blank" rel="noopener noreferrer" className="w-full">
                  <button className="w-full rounded-full bg-zinc-800 px-6 py-3 text-md font-medium text-white hover:bg-zinc-700 transition-colors">
                    Login
                  </button>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </div>
  );
}
