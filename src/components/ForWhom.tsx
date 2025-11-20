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
      <div className=" w-7xl flex flex-col my-20">
        <h2 className="text-4xl font-black text-gray-800 mb-4">For Whom?</h2>
        <div className=" flex justify-center items-center gap-3">
          {data.map((item, index) => (
            <div
              key={index}
              className="w-full bg-gray-900 rounded-4xl flex flex-col items-center justify-center p-2 border-2 border-sky-100 hover:scale-101 hover:shadow-sm transition-all duration-300"
            >
              <Image src={item.image} width={300} height={200} alt={item.title} className=" rounded-3xl mb-5" />
              <span className="text-3xl font-bold text-gray-300 mb-2 w-full px-3">{item.title}</span>
              <p className="text-gray-300 text-justify px-3">{item.description}</p>
              <ul className=" list-disc list-inside text-sky-600 mt-4 mb-6 w-full px-3">
                {item.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex gap-2 mb-2">
                    <Icon icon="mdi:check" width={24} height={24} className="text-gray-400" />
                    <span className="text-gray-400 text-md">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
