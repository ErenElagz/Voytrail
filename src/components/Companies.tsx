import React, { Component } from 'react';
import Image from 'next/image';

export default class Companies extends Component {
  render() {
    // Company logos data
    const companies = [
      { name: 'Funker', image: '/funker.png' },
      { name: 'El Granado', image: '/elgranado.png' },
      { name: 'The Lights Hostel', image: '/thelights.png' },
    ];

    // Reusable class strings
    const containerClasses = 'mx-auto my-20 flex w-7xl max-w-full flex-col items-center gap-10';
    const headingClasses = 'text-3xl font-bold tracking-tight text-zinc-900';
    const logoContainerClasses = 'flex items-center justify-center gap-10';
    const logoClasses = 'grayscale opacity-30 object-contain transition-opacity duration-300 hover:opacity-100';

    return (
      <div className={containerClasses}>
        {/* Heading */}
        <div className="flex items-center">
          <span className={headingClasses}>Trusted by Over 50+ Hostels and Hotels</span>
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
