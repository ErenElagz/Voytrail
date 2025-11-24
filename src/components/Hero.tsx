import React, { Component } from 'react';
import { Icon } from '@iconify/react';
import Image from 'next/image';
import heroImage from '@/assets/images/hero.png';

export default class Hero extends Component {
  render() {
    // Reusable class strings
    const containerClasses =
      'mb-20 mt-10 flex w-full max-w-7xl flex-col justify-center gap-4 px-4 md:flex-row md:gap-16';
    const contentClasses = 'mt-10 flex flex-col items-start px-4';
    const headingClasses = 'mb-4 text-8xl font-bold leading-tighter tracking-tighter text-zinc-800';
    const highlightClasses = 'font-extrabold text-sky-700 underline';
    const subheadingClasses = 'mb-6 text-2xl leading-tight tracking-tight text-zinc-500';
    const buttonContainerClasses = 'mt-4 flex gap-4';
    const primaryButtonClasses =
      'flex items-center rounded-full bg-sky-800 px-12 py-3 font-medium text-white transition-colors duration-300 hover:bg-zinc-900';
    const iconClasses = 'mr-2 inline-block';
    const secondaryButtonClasses =
      'px-2 py-3 font-medium tracking-tight text-zinc-500 transition-colors duration-300 hover:text-zinc-900';
    const imageClasses = 'pointer-events-none rounded-4xl border-2 border-zinc-900 shadow-2xl';

    return (
      <div className={containerClasses}>
        {/* Hero content */}
        <div className={contentClasses}>
          <h1 className={headingClasses}>
            Linktree, Rebuilt for the <span className={highlightClasses}>Hospitality</span> World.
          </h1>
          <p className={subheadingClasses}>
            Everything your hostel or hotel needs to stand out <br /> online in one simple platform.
          </p>

          {/* CTA buttons */}
          <div className={buttonContainerClasses}>
            <a href="https://app.voytrail.com/login" target="_blank" rel="noopener noreferrer">
              <button className={primaryButtonClasses}>
                <Icon icon="mdi:rocket-launch" width="20" height="20" className={iconClasses} />
                Get Started for Free
              </button>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <button className={secondaryButtonClasses}>Learn More</button>
            </a>
          </div>
        </div>

        {/* Hero image */}
        <div>
          <Image src={heroImage} alt="Hero Image" width={650} height={300} className={imageClasses} priority />
        </div>
      </div>
    );
  }
}
