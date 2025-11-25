import React, { Component } from 'react';
import Image from 'next/image';
import funker from '@/assets/images/companies/funker.png';
import elgranado from '@/assets/images/companies/elgranado.png';
import thelights from '@/assets/images/companies/thelights.png';
import coeo from '@/assets/images/companies/coeo.png';
import central from '@/assets/images/companies/central.png';
import larios from '@/assets/images/companies/larios.png';
import toc from '@/assets/images/companies/toc.png';
import suiters from '@/assets/images/companies/suiters.png';

export default class Companies extends Component {
  render() {
    // Company logos data
    const companies = [
      { name: 'Funker', image: funker },
      { name: 'Larios', image: larios },
      { name: 'The Other Corner', image: toc },
      { name: 'Suiters', image: suiters },
      { name: 'Central Hostel', image: central },
      { name: 'Coeo', image: coeo },
      { name: 'El Granado', image: elgranado },
      { name: 'The Lights Hostel', image: thelights },
    ];

    // Reusable class strings
    const containerClasses = 'mx-auto mt-20 flex w-7xl max-w-full flex-col items-center gap-10';
    const headingClasses = 'text-3xl font-bold tracking-tight text-zinc-900';
    const logoContainerClasses = 'flex items-center justify-center gap-10';
    const logoClasses = 'grayscale opacity-30 object-contain transition-opacity duration-300 hover:opacity-100';

    return (
      <div className={containerClasses}>
        {/* Heading */}
        <div className="flex items-center">
          <span className={headingClasses}>Trusted by Hostels and Hotels</span>
        </div>

        {/* Company logos */}
        <div className={logoContainerClasses}>
          {companies.map((company) => (
            <Image
              key={company.name}
              src={company.image}
              alt={company.name}
              width={160}
              height={80}
              className={logoClasses}
            />
          ))}
        </div>
      </div>
    );
  }
}
