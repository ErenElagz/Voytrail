import React, { Component } from 'react';
import Image from 'next/image';
import '@/styles/globals.css';
import { Icon } from '@iconify/react';

export default class Compares extends Component {
  render() {
    const data = [
      {
        title: 'Taplink',
        description: 'Perfect for coliving spaces looking to streamline their online presence and boost bookings.',
        image: '/coliving.png',
        features: ['Free Wi-Fi', '24/7 Customer Support'],
      },
      {
        title: 'Linktree',
        description: 'Perfect for hotels looking to streamline their online presence and boost bookings.',
        image: '/hotel.png',
        features: ['Free Wi-Fi', '24/7 Customer Support'],
      },
      {
        title: 'Beacon',
        description: 'Perfect for hostels looking to streamline their online presence and boost bookings.',
        image: '/hostel.png',
        features: ['Free Wi-Fi', '24/7 Customer Support'],
      },
      {
        title: 'Pallyy',
        description: 'Perfect for coliving spaces looking to streamline their online presence and boost bookings.',
        image: '/coliving.png',
        features: ['Free Wi-Fi', '24/7 Customer Support'],
      },
      {
        title: 'VoyTrail.',
        description: 'Perfect for coliving spaces looking to streamline their online presence and boost bookings.',
        image: '/coliving.png',
        features: ['Free Wi-Fi', '24/7 Customer Support'],
      },
    ];
    return (
      <div className=" w-7xl flex flex-col my-20">
        <h2 className="text-4xl font-black text-gray-800 mb-4 text-center">Compare with other platforms</h2>
        <div className="relative overflow-x-auto bg-neutral-primary shadow-xs rounded-base border border-default my-6">
          <table className="w-full text-sm text-left rtl:text-right text-body">
            <thead className="text-sm text-body border-b border-default">
              <tr>
                <th scope="col" className="px-6 py-3 bg-neutral-secondary-soft font-medium">
                  Feature
                </th>
                {data.map((item, index) => (
                  <th key={index} scope="col" className="px-6 py-3 font-medium">
                    {item.title}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* Assuming all items have the same features for comparison */}
              {data[0].features.map((feature, fIndex) => (
                <tr key={fIndex} className="border-b border-default">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-heading whitespace-nowrap bg-neutral-secondary-soft"
                  >
                    {feature}
                  </th>
                  {data.map((item, index) => (
                    <td key={index} className={`px-6 py-4 ${index % 2 === 0 ? 'bg-neutral-secondary-soft' : ''}`}>
                      <Icon icon="mdi:check" width={24} height={24} className="text-gray-400 mx-auto" />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
