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
      <div className="w-full bg-gray-100 py-24 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="flex items-start justify-center gap-8 mb-4">
            <h2 className="text-4xl font-black text-gray-900 mb-0 leading-tight">For Whom?</h2>
          </div>

          {/* Cards Grid */}
          <div className="relative overflow-visible flex justify-center">
            <div className="overflow-visible">
              <div className="flex gap-4 pb-4 justify-center flex-wrap">
                {data.map((item, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-72 h-96 bg-white rounded-3xl overflow-hidden shadow-xl transition-all duration-500 relative group border-2 border-gray-200 hover:border-gray-300 hover:shadow-2xl"
                  >
                    {/* Background Image */}
                    <div className="absolute inset-0 overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
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
        </div>
      </div>
    );
  }
}
