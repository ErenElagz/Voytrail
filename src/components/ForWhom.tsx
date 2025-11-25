import React, { Component } from 'react';
import Image from 'next/image';
import { Icon } from '@iconify/react';
import hotel from '@/assets/images/services/hotel.png';
import hostel from '@/assets/images/services/hostel.png';
import airbnb from '@/assets/images/services/airbnb.png';
import coliving from '@/assets/images/services/coliving.png';

export default class ForWhom extends Component {
  render() {
    // Service card data configuration
    const data = [
      {
        title: 'Hotels',
        description: 'Perfect for hotels looking to streamline their online presence and boost bookings.',
        image: hotel,
        features: [
          'Live Event & Facilities Updates',
          'Smart House Guide for Guests',
          'Digital QR Access for Every Room',
          'Check-in & Checkout Instructions',
        ],
      },
      {
        title: 'Hostels',
        description: 'Perfect for hostels looking to streamline their online presence and boost bookings.',
        image: hostel,
        features: [
          'Weekly Events & Activity Scheduling',
          'Community Rules and House Info',
          'Social Links & Group Chats',
          'Instant Announcements',
        ],
      },
      {
        title: 'Airbnb Homes',
        description: 'Perfect for Airbnb homes looking to streamline their online presence and boost bookings.',
        image: airbnb,
        features: [
          'Guest Portal with All Details',
          'Check-in & Checkout Instructions',
          'Rules, Guides, and Hosts',
          'Pre-Arrival Information and Onboarding',
        ],
      },
      {
        title: 'Co-Living',
        description: 'Perfect for coliving spaces looking to streamline their online presence and boost bookings.',
        image: coliving,
        features: [
          'Roommate and Shared-Space Guidelines',
          'Event Calendar for Activities',
          'Maintenance Requests and Announcements',
          'Social Links & Group Chats',
        ],
      },
    ];

    // Reusable class strings for consistency
    const containerClasses = 'my-20 w-full bg-zinc-100 py-20';
    const wrapperClasses = 'mx-auto max-w-6xl px-4';
    const headingClasses = 'mb-8 text-3xl font-bold tracking-tight text-zinc-900';
    const gridClasses = 'grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4';
    const cardClasses =
      'group relative h-96 overflow-hidden rounded-3xl border-2 border-zinc-200 bg-white transition-all duration-300 hover:border-zinc-300 hover:shadow-2xl';
    const imageContainerClasses = 'absolute inset-0 overflow-hidden';
    const imageClasses = 'h-full w-full object-cover transition-transform duration-300 group-hover:scale-110';
    const overlayClasses = 'absolute inset-0 bg-black/30';
    const contentClasses =
      'absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 to-transparent p-6';
    const titleClasses = 'mb-2 text-2xl font-bold text-white';
    const descriptionClasses = 'mb-4 text-sm leading-relaxed text-zinc-200';
    const listClasses = 'space-y-1';
    const listItemClasses = 'flex items-start gap-2';
    const iconClasses = 'mt-0.5 flex-shrink-0 text-green-400';
    const featureTextClasses = 'text-xs text-zinc-100';

    return (
      <div className={containerClasses}>
        <div className={wrapperClasses}>
          <h2 className={headingClasses}>Trusted by Over 50+ Hostels and Hotels</h2>

          {/* Service cards grid */}
          <div className={gridClasses}>
            {data.map((item, index) => (
              <div key={index} className={cardClasses}>
                {/* Background image */}
                <div className={imageContainerClasses}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={500}
                    height={500}
                    className={imageClasses}
                    priority={index === 0}
                  />
                </div>

                {/* Dark overlay for readability */}
                <div className={overlayClasses} />

                {/* Content overlay with gradient */}
                <div className={contentClasses}>
                  <h3 className={titleClasses}>{item.title}</h3>
                  <p className={descriptionClasses}>{item.description}</p>

                  {/* Feature list */}
                  <ul className={listClasses}>
                    {item.features.map((feature, fIndex) => (
                      <li key={fIndex} className={listItemClasses}>
                        <Icon icon="mdi:check-circle" width={16} height={16} className={iconClasses} />
                        <span className={featureTextClasses}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
