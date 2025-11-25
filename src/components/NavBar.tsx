'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import logoWhite from '@/assets/images/logo-white.png';

export default function NavBar() {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  // Reusable class strings
  const containerClasses =
    'sticky top-2 z-50 mx-4 my-2 flex w-5xl items-center justify-between rounded-full border-2 border-zinc-100 bg-white/70 p-2 backdrop-blur-md';
  const logoContainerClasses = 'flex w-full items-center';
  const logoClasses = 'rounded-full';
  const brandClasses = 'ml-2 text-3xl font-bold text-zinc-700 pointer-events-none';
  const navClasses = 'flex items-center gap-4';
  const linkClasses =
    'px-3 py-2 text-md font-medium tracking-tight text-zinc-500 transition-colors duration-300 hover:text-zinc-900';
  const buttonContainerClasses = 'flex w-full justify-end gap-2';
  const demoButtonClasses =
    'px-4 py-2 text-md font-medium tracking-tight text-zinc-500 transition-colors duration-300 hover:text-zinc-900';
  const loginButtonClasses =
    'rounded-full bg-zinc-800 px-6 py-2 text-md font-medium text-white transition-colors duration-300 hover:bg-zinc-700';

  // Helper function to get correct href
  const getHref = (section: string) => {
    return isHomePage ? `#${section}` : `/#${section}`;
  };

  return (
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
    </div>
  );
}
