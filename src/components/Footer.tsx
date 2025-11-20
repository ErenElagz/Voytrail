'use client';

import React from 'react';
import { Icon } from '@iconify/react';
import '@/styles/globals.css';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-b from-gray-900 to-black text-white mt-20 py-16">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Column 1: Company Info */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Image src="/logo.png" alt="South Tours Logo" width={48} height={48} className="rounded-full" />
              <div>
                <h3 className="text-2xl font-black text-white">Voytrail.</h3>
                <p className="text-xs text-sky-400">from South.Tours</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Discover the world&apos;s most amazing travel destinations with South Tours. Your journey starts here.
            </p>
            <p className="text-xs text-gray-500">© 2025 South Tours. All rights reserved.</p>
          </div>

          {/* Column 2: General Page Contents */}
          <div className="flex flex-col gap-4">
            <h4 className="text-lg font-bold text-white mb-2">Quick Links</h4>
            <nav className="flex flex-col gap-3">
              <a href="#" className="text-gray-400 hover:text-sky-400 transition text-sm font-medium">
                Pricing
              </a>
              <a href="#" className="text-gray-400 hover:text-sky-400 transition text-sm font-medium">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-sky-400 transition text-sm font-medium">
                Careers
              </a>
              <a href="#" className="text-gray-400 hover:text-sky-400 transition text-sm font-medium">
                Contact Us
              </a>
              <a href="#" className="text-gray-400 hover:text-sky-400 transition text-sm font-medium">
                Terms of Service
              </a>
            </nav>
          </div>

          {/* Column 3: Social Media Icons */}
          <div className="flex flex-col gap-4">
            <h4 className="text-lg font-bold text-white mb-2">Follow Us</h4>
            <p className="text-gray-400 text-sm mb-4">Connect with us on social media</p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-12 h-12 bg-gray-800 hover:bg-sky-600 rounded-full flex items-center justify-center transition duration-300 transform hover:scale-110"
                aria-label="Facebook"
              >
                <Icon icon="mdi:facebook" width={24} height={24} className="text-white" />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-gray-800 hover:bg-sky-600 rounded-full flex items-center justify-center transition duration-300 transform hover:scale-110"
                aria-label="Twitter"
              >
                <Icon icon="mdi:twitter" width={24} height={24} className="text-white" />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-gray-800 hover:bg-sky-600 rounded-full flex items-center justify-center transition duration-300 transform hover:scale-110"
                aria-label="Instagram"
              >
                <Icon icon="mdi:instagram" width={24} height={24} className="text-white" />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-gray-800 hover:bg-sky-600 rounded-full flex items-center justify-center transition duration-300 transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <Icon icon="mdi:linkedin" width={24} height={24} className="text-white" />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-gray-800 hover:bg-sky-600 rounded-full flex items-center justify-center transition duration-300 transform hover:scale-110"
                aria-label="YouTube"
              >
                <Icon icon="mdi:youtube" width={24} height={24} className="text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-xs text-center md:text-left">Made with passion by South Tours Team</p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-500 hover:text-sky-400 transition text-xs">
                Sitemap
              </a>
              <a href="#" className="text-gray-500 hover:text-sky-400 transition text-xs">
                Cookie Policy
              </a>
              <a href="#" className="text-gray-500 hover:text-sky-400 transition text-xs">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
