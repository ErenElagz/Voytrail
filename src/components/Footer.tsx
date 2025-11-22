'use client';

import React from 'react';
import { Icon } from '@iconify/react';
import '@/styles/globals.css';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-b from-gray-900 to-black text-white mt-20 py-16">
      <div className="w-6xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Column 1: Company Info */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <Image src="/logo.png" alt="South Tours Logo" width={48} height={48} className="rounded-full" />
              <div>
                <h3 className="text-3xl font-black text-white">Voytrail.</h3>
                <a
                  href="https://south.tours/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-400 font-medium text-sm hover:underline"
                >
                  <p className="text-sm text-sky-300">from South.Tours</p>
                </a>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Discover the world&apos;s most amazing travel destinations with South Tours. Your journey starts here.
            </p>
            <p className="text-sm text-gray-400">©2026 South Tours. All rights reserved.</p>
          </div>

          {/* Column 2: General Page Contents */}
          <div className="flex flex-col gap-2">
            <h4 className="text-lg font-bold text-white">Quick Links</h4>
            <nav className="flex flex-col gap-3">
              <a href="#" className="text-gray-400 hover:text-gray-200 transition text-sm font-medium">
                Pricing
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-200 transition text-sm font-medium">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-200 transition text-sm font-medium">
                Careers
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-200 transition text-sm font-medium">
                Contact Us
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-200 transition text-sm font-medium">
                Terms of Service
              </a>
            </nav>
          </div>

          {/* Column 3: Social Media Icons */}
          <div className="flex flex-col gap-2">
            <h4 className="text-lg font-bold text-white">Follow Us</h4>
            <p className="text-gray-400 text-sm mb-4">Connect with us on social media</p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/southtoursmalaga/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-800 hover:bg-sky-700 rounded-full flex items-center justify-center transition duration-300 transform hover:scale-102"
                aria-label="Facebook"
              >
                <Icon icon="mdi:facebook" width={24} height={24} className="text-white" />
              </a>
              <a
                href="https://www.instagram.com/southtours/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-800 hover:bg-sky-700 rounded-full flex items-center justify-center transition duration-300 transform hover:scale-102"
                aria-label="Instagram"
              >
                <Icon icon="mdi:instagram" width={24} height={24} className="text-white" />
              </a>
              <a
                href="https://www.linkedin.com/company/south-tours-malaga/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-800 hover:bg-sky-700 rounded-full flex items-center justify-center transition duration-300 transform hover:scale-102"
                aria-label="LinkedIn"
              >
                <Icon icon="mdi:linkedin" width={24} height={24} className="text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-xs text-center md:text-left">Made by South Tours Team</p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-500 hover:text-gray-300 transition text-sm">
                Sitemap
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-300 transition text-sm">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
