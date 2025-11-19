import React, { Component } from 'react';
import { Icon } from '@iconify/react';
import '@/styles/globals.css';
import Image from 'next/image';

export default class Companies extends Component {
  render() {
    return (
      <div className=" flex flex-col items-center w-full mt-10 gap-5">
        <div className="flex items-center">
          <span className="ml-2 text-2xl font-black text-sky-700">Trusted by Hostels and Hotels</span>
        </div>
        <div className="flex justify-center items-center gap-10 mt-6 mb-10">
          <Image src="/company1.png" alt="Company 1" width={120} height={60} className="object-contain" />
          <Image src="/company2.png" alt="Company 2" width={120} height={60} className="object-contain" />
          <Image src="/company3.png" alt="Company 3" width={120} height={60} className="object-contain" />
          <Image src="/company4.png" alt="Company 4" width={120} height={60} className="object-contain" />
          <Image src="/company5.png" alt="Company 5" width={120} height={60} className="object-contain" />
          <Image src="/company1.png" alt="Company 1" width={120} height={60} className="object-contain" />
          <Image src="/company2.png" alt="Company 2" width={120} height={60} className="object-contain" />
          <Image src="/company3.png" alt="Company 3" width={120} height={60} className="object-contain" />
          <Image src="/company4.png" alt="Company 4" width={120} height={60} className="object-contain" />
          <Image src="/company5.png" alt="Company 5" width={120} height={60} className="object-contain" />
        </div>
      </div>
    );
  }
}
