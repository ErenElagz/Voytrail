import React, { Component } from 'react';
import { Icon } from '@iconify/react';
import '@/styles/globals.css';
import Image from 'next/image';

export default class NavBar extends Component {
  render() {
    return (
      <div className="w-5xl backdrop-blur-md border-2 border-black/5 sticky top-2 z-50 transition my-2 mx-4 rounded-full bg-white/70 text-white flex items-center justify-between p-2">
        <div className="flex items-center w-full">
          <Image src="/logo-white.png" alt="Voytrail Logo" width={40} height={40} className="rounded-full" />
          <span className="ml-2 text-2xl font-bold text-zinc-700">Voytrail.</span>
        </div>
        <nav className="items-center gap-4">
          <a
            href="#"
            className="px-3 py-2 text-md font-medium tracking-tight text-zinc-500 hover:text-zinc-900 transition duration-300"
          >
            Home
          </a>
          <a
            href="#"
            className="px-3 py-2 text-md font-medium tracking-tight text-zinc-500 hover:text-zinc-900 transition duration-300"
          >
            Solutions
          </a>
          <a
            href="#Pricing"
            className="px-3 py-2 text-md font-medium tracking-tight text-zinc-500 hover:text-zinc-900 transition duration-300"
          >
            Pricing
          </a>
          <a
            href="#"
            className="px-3 py-2 text-md font-medium tracking-tight text-zinc-500 hover:text-zinc-900 transition duration-300"
          >
            Contact
          </a>
        </nav>
        <div className="flex w-full justify-end">
          <button className="tracking-tight text-zinc-500 hover:text-zinc-900 transition duration-300 text-md font-medium px-4 py-2">
            Get Demo
          </button>
          <button className="bg-zinc-800 hover:bg-zinc-700 text-md text-white font-medium px-6 py-2 rounded-full transition">
            Login
          </button>
        </div>
      </div>
    );
  }
}
