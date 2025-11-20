import React, { Component } from 'react';
import { Icon } from '@iconify/react';
import '@/styles/globals.css';
import Image from 'next/image';

export default class Hero extends Component {
  render() {
    return (
      <div className="flex w-full flex-col justify-center max-w-7xl px-4 mt-10 mb-20 gap-4 md:gap-16 md:flex-row">
        <div className="flex flex-col items-start px-4 mt-10">
          <h1 className="text-8xl font-bold text-zinc-800 mb-4 leading tracking-tighter">
            Linktree, Rebuilt for the <span className="text-sky-700 underline font-extrabold">Hospitality</span> World.
          </h1>
          <p className="text-2xl text-gray-500 mb-6 leading tracking-tight">
            Everything your hostel or hotel needs to stand out <br /> online in one simple platform.
          </p>
          <div className="flex gap-4">
            <button className="bg-sky-700 hover:bg-sky-900 text-white font-medium py-3 px-6 rounded-full transition">
              <Icon icon="mdi:rocket-launch" width="20" height="20" className="inline-block mr-2" />
              Get Started
            </button>
            <button className="hover:underline transition text-zinc-900 font-medium py-3 px-2">Learn More</button>
          </div>
        </div>
        <div>
          <Image
            src="/hero.png"
            alt="Hero Image"
            width={650}
            className="rounded-4xl shadow-2xl border-2 border-black pointer-events-none"
            height={300}
          />
        </div>
      </div>
    );
  }
}
