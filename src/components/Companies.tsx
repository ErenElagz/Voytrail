import React, { Component } from 'react';
import { Icon } from '@iconify/react';
import '@/styles/globals.css';
import Image from 'next/image';

export default class Companies extends Component {
  render() {
    return (
      <div className=" flex flex-col items-center w-7xl max-w-full mx-auto my-20 gap-10">
        <div className="flex items-center">
          <span className="text-3xl font-bold tracking-tight text-black">Trusted by Over 50+ Hostels and Hotels</span>
        </div>
        <div className="flex justify-center items-center gap-10">
          <Image
            src="/funker.png"
            alt="Funker"
            width={160}
            height={80}
            className="object-contain grayscale hover:opacity-100 transition opacity-30 duration-500"
          />
          <Image
            src="/elgranado.png"
            alt="El Granado"
            width={160}
            height={80}
            className="object-contain grayscale hover:opacity-100 transition opacity-30 duration-500"
          />
          <Image
            src="/thelights.png"
            alt="The Lights Hostel"
            width={160}
            height={80}
            className="object-contain grayscale hover:opacity-100 transition opacity-30 duration-500"
          />
        </div>
      </div>
    );
  }
}
