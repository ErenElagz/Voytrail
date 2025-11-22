import React, { Component } from 'react';
import Image from 'next/image';
import '@/styles/globals.css';
import { Icon } from '@iconify/react';

export default class ForWhom extends Component {
  render() {
    const data = [
      {
        title: 'Hotels',
        description: 'Perfect for hotels looking to streamline their online presence and boost bookings.',
        image: '/services/hotel.png',
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
        image: '/services/hostel.png',
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
        image: '/services/airbnb.png',
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
        image: '/services/coliving.png',
        features: [
          'Roommate and Shared-Space Guidelines',
          'Event Calendar for Activities',
          'Maintenance Requests and Announcements',
          'Social Links & Group Chats',
        ],
      },
    ];

    return (
      <div className="w-full bg-gray-100 py-20 my-20">
        <div className="w-6xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-black mb-8">Trusted by Over 50+ Hostels and Hotels</h2>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
            {data.map((item, index) => (
              <div
                key={index}
                className="h-96 bg-white rounded-3xl overflow-hidden transition-all duration-300 relative group border-2 border-gray-200 hover:border-gray-300 hover:shadow-2xl"
              >
                {/* Background Image */}
                <div className="absolute inset-0 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={500}
                    height={500}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/30" />

                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/80 to-transparent">
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>

                  {/* Description */}
                  <p className="text-sm text-gray-200 leading-relaxed mb-4">{item.description}</p>

                  {/* Features */}
                  <ul className="space-y-1">
                    {item.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex gap-2 items-start">
                        <Icon
                          icon="mdi:check-circle"
                          width={16}
                          height={16}
                          className="text-green-400 flex-shrink-0 mt-0.5"
                        />
                        <span className="text-xs text-gray-100">{feature}</span>
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
