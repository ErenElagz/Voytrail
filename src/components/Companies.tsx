import React, { Component } from 'react';
import Image from 'next/image';
import funker from '@/assets/images/companies/funker.png';
import elgranado from '@/assets/images/companies/elgranado.png';
import thelights from '@/assets/images/companies/thelights.png';

export default class Companies extends Component {
  render() {
    // Company logos data
    const companies = [
      { name: 'Funker', image: funker },
      { name: 'El Granado', image: elgranado },
      { name: 'The Lights Hostel', image: thelights },
    ];

    // Reusable class strings
    const containerClasses = 'mx-auto mt-20 flex w-7xl max-w-full flex-col items-center gap-10 px-4';
    const headingClasses = 'text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-zinc-900 text-center';
    const logoContainerClasses = 'flex flex-wrap items-center justify-center gap-6 sm:gap-8 md:gap-10';
    const logoClasses =
      'grayscale opacity-30 object-contain transition-opacity duration-300 hover:opacity-100 w-24 sm:w-32 md:w-40 h-auto';

    return (
      <div className={containerClasses}>
        {/* Heading */}
        <div className="flex items-center">
          <span className={headingClasses}>Trusted by Over 50+ Hostels and Hotels</span>
        </div>

        {/* Company logos */}
        <div className={logoContainerClasses}>
          {companies.map((company) => (
            <div key={company.name} className="w-24 sm:w-32 md:w-40">
              <Image src={company.image} alt={company.name} width={160} height={80} className={logoClasses} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
