'use client';

import React from 'react';
import { Icon } from '@iconify/react';
import Image from 'next/image';
import logo from '@/assets/images/logo.png';

export default function Footer() {
  // Reusable class strings
  const footerClasses = 'mt-20 w-full bg-gradient-to-b from-zinc-900 to-black py-16 text-white';
  const containerClasses = 'mx-auto w-full max-w-6xl px-4 md:px-8';
  const gridClasses = 'mb-12 grid grid-cols-1 md:grid-cols-3 gap-12';
  const logoClasses = 'rounded-full';
  const brandContainerClasses = 'flex items-center gap-3';
  const brandNameClasses = 'text-3xl font-black text-white';
  const linkClasses = 'text-sm font-medium text-zinc-400 transition-colors duration-300 hover:text-zinc-200';
  const socialButtonClasses =
    'flex h-12 w-12 scale-102 transform items-center justify-center rounded-full bg-zinc-800 transition-all duration-300 hover:bg-zinc-700';
  const dividerClasses = 'mt-8 border-t border-zinc-800 pt-8';

  return (
    <footer className={footerClasses} id="Contact">
      <div className={containerClasses}>
        <div className={gridClasses}>
          {/* Column 1: Company info */}
          <div className="flex flex-col gap-2">
            <div className={brandContainerClasses}>
              <Image src={logo} alt="South Tours Logo" width={48} height={48} className={logoClasses} />
              <div>
                <h3 className={brandNameClasses}>Voytrail.</h3>
                <a
                  href="https://south.tours/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-zinc-400 hover:underline"
                >
                  <p className="text-sm text-zinc-300">from South.Tours</p>
                </a>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-zinc-300">
              Discover the world&apos;s most amazing travel destinations with South Tours. Your journey starts here.
            </p>
            <p className="text-sm text-zinc-400">©2026 South Tours. All rights reserved.</p>
          </div>

          {/* Column 2: Quick links */}
          <div className="flex flex-col gap-2">
            <h4 className="text-lg font-bold text-white">Quick Links</h4>
            <nav className="flex flex-col gap-3">
              <a href="#Pricing" className={linkClasses}>
                Pricing
              </a>
              <a href="/privacy-policy" className={linkClasses}>
                Privacy Policy
              </a>
              <a href="/terms-of-service" className={linkClasses}>
                Terms of Service
              </a>
              <a href="#Contact" className={linkClasses}>
                Contact Us
              </a>
            </nav>
          </div>

          {/* Column 3: Social media */}
          <div className="flex flex-col gap-2">
            <h4 className="text-lg font-bold text-white">Follow Us</h4>
            <p className="mb-4 text-sm text-zinc-400">Connect with us on social media</p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/southtoursmalaga/"
                target="_blank"
                rel="noopener noreferrer"
                className={socialButtonClasses}
                aria-label="Facebook"
              >
                <Icon icon="mdi:facebook" width={24} height={24} className="text-white" />
              </a>
              <a
                href="https://www.instagram.com/southtours/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className={socialButtonClasses}
                aria-label="Instagram"
              >
                <Icon icon="mdi:instagram" width={24} height={24} className="text-white" />
              </a>
              <a
                href="https://www.linkedin.com/company/south-tours-malaga/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                className={socialButtonClasses}
                aria-label="LinkedIn"
              >
                <Icon icon="mdi:linkedin" width={24} height={24} className="text-white" />
              </a>
            </div>
          </div>
        </div>

        <div className={dividerClasses}>
          <p className="text-center text-sm text-zinc-500">Made with ❤️ in Malaga, Spain.</p>
        </div>
      </div>
    </footer>
  );
}
