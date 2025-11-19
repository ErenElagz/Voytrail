import React, { Component } from 'react';
import { Icon } from '@iconify/react';
import '@/styles/globals.css';
import Image from 'next/image';

export default class Footer extends Component {
  render() {
    return (
      <div className="w-[1000px] my-4 mx-4 rounded-full bg-zinc-900 text-white flex items-center justify-between px-2 py-2 shadow-md">
        <div className="flex items-center">
          <Image src="/logo.png" alt="Voytrail Logo" width={48} height={48} className="rounded-full" />
          <span className="ml-2 text-xl font-bold text-zinc-200">Voytrail.</span>
        </div>
        <nav className="flex items-center gap-4">
          <a href="#" className="px-3 py-2 text-sm font-medium text-zinc-400 hover:text-white transition">
            Home
          </a>
          <a href="#" className="px-3 py-2 text-sm font-medium text-zinc-400 hover:text-white transition">
            Contact
          </a>
          <a href="#" className="px-3 py-2 text-sm font-medium text-zinc-400 hover:text-white transition">
            Pricing
          </a>
          <a href="#" className="px-3 py-2 text-sm font-medium text-zinc-400 hover:text-white transition">
            Service
          </a>
        </nav>
        <div>
          <button className="hover:underline transition text-sm text-white font-medium py-3 px-5 rounded-full">
            Get Demo
          </button>
          <button className="bg-zinc-800 hover:bg-zinc-700 text-sm text-white font-medium py-3 px-5 rounded-full transition">
            <Icon icon="mdi:login" width="20" height="20" className="inline-block mr-2" />
            Login
          </button>
        </div>
      </div>
    );
  }
}
