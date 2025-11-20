import React, { Component } from 'react';
import { Icon } from '@iconify/react';
import '@/styles/globals.css';
import Image from 'next/image';

export default class Companies extends Component {
  render() {
    return (
      <div className=" flex flex-col items-center w-7xl max-w-full mx-auto mt-10 gap-5">
        <div className="flex items-center">
          <span className="ml-2 text-3xl font-black text-sky-800">Trusted by Hostels and Hotels</span>
        </div>
        <div className="flex justify-center items-center gap-10 mt-6 mb-10">
          <Image src="/funker.png" alt="Funker" width={160} height={80} className="object-contain grayscale hover:opacity-100 transition opacity-50" />
          <Image src="/elgranado.png" alt="El Granado" width={160} height={80} className="object-contain grayscale hover:opacity-100 transition opacity-50" />{' '}
          <Image src="/funker.png" alt="Funker" width={160} height={80} className="object-contain grayscale hover:opacity-100 transition opacity-50" />
          <Image src="/elgranado.png" alt="El Granado" width={160} height={80} className="object-contain grayscale hover:opacity-100 transition opacity-50" />
        </div>
      </div>
    );
  }
}
