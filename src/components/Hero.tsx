import React, { Component } from 'react';
import { Icon } from '@iconify/react';
import '@/styles/globals.css';
import Image from 'next/image';

export default class Hero extends Component {
  render() {
    return (
      <div className="flex w-full flex-col justify-center max-w-7xl px-4 mt-10 mb-20 gap-4 md:gap-16 md:flex-row">
        <div className="flex flex-col items-start px-4 mt-10">
          <h1 className="text-8xl font-bold text-zinc-900 mb-4 leading">
            Linktree, Rebuilt for the <span className="text-sky-800 underline">Hospitality</span> World.
          </h1>
          <p className="text-lg text-zinc-700 mb-6 ">
            Everything your hostel or hotel needs to stand out online in one simple platform.
          </p>
          <div className="flex gap-4">
            <button className="bg-zinc-900 hover:bg-zinc-700 text-white font-medium py-3 px-6 rounded-full transition">
              <Icon icon="mdi:rocket-launch" width="20" height="20" className="inline-block mr-2" />
              Get Started
            </button>
            <button className="hover:underline transition text-zinc-900 font-medium py-3 px-6 rounded-full">
              Learn More
            </button>
          </div>
        </div>
        <div>
          <Image
            src="/hero.png"
            alt="Hero Image"
            width={650}
            className="rounded-4xl shadow-2xl border-2 border-black"
            height={300}
          />
        </div>
      </div>
    );
  }
}
