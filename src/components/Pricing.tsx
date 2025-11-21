import React, { Component } from 'react';
import Image from 'next/image';
import '@/styles/globals.css';
import { Icon } from '@iconify/react';

export default class Pricing extends Component {
  render() {
    const data = [
      {
        plan: 'Free',
        price: '$9.99/month',
        features: [
          { name: 'Feature A', tooltip: 'This is a basic feature included in the Free plan' },
          { name: 'Feature B', tooltip: 'Essential functionality for getting started' },
          { name: 'Feature C', tooltip: 'Core capability for standard users' },
          { name: 'Feature A', tooltip: 'This is a basic feature included in the Free plan' },
          { name: 'Feature B', tooltip: 'Essential functionality for getting started' },
          { name: 'Feature C', tooltip: 'Core capability for standard users' },
        ],
      },
      {
        plan: 'Premium',
        price: '$19.99/month',
        features: [
          { name: 'Feature A', tooltip: 'Enhanced version with premium support' },
          { name: 'Feature B', tooltip: 'Advanced functionality unlocked' },
          { name: 'Feature C', tooltip: 'Priority processing included' },
          { name: 'Feature A', tooltip: 'Enhanced version with premium support' },
          { name: 'Feature B', tooltip: 'Advanced functionality unlocked' },
          { name: 'Feature C', tooltip: 'Priority processing included' },
        ],
      },
      {
        plan: 'Enterprise',
        price: '$29.99/month',
        features: [
          { name: 'Feature A', tooltip: 'Full enterprise-grade feature' },
          { name: 'Feature B', tooltip: 'Unlimited access and usage' },
          { name: 'Feature C', tooltip: 'Dedicated support team' },
          { name: 'Feature A', tooltip: 'Full enterprise-grade feature' },
          { name: 'Feature B', tooltip: 'Unlimited access and usage' },
          { name: 'Feature C', tooltip: 'Dedicated support team' },
        ],
      },
    ];

    return (
      <div className=" w-7xl flex flex-col my-20">
        <h2 className="text-4xl font-black text-gray-800 mb-6">Pricing</h2>
        <div className=" flex justify-center items-center gap-6">
          {data.map((item, index) => (
            <div
              key={index}
              className="w-full bg-gray-100 rounded-4xl flex flex-col items-center justify-center p-4 pt-8 border-2 border-gray-200 hover:scale-101 hover:shadow-sm transition-all duration-300"
            >
              <span className="text-4xl font-bold text-gray-800 mb-2 w-full px-3">{item.plan}</span>
              <ul className=" list-disc list-inside text-sky-600 mt-4 mb-6 w-full px-3">
                {item.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex gap-2 mb-2 items-center group">
                    <Icon icon="mdi:check" width={24} height={24} className="text-gray-400" />
                    <span className="text-gray-500 text-md">{feature.name}</span>
                    <div className="relative flex items-center ml-auto">
                      <Icon
                        icon="mdi:help-circle-outline"
                        width={20}
                        height={20}
                        className="text-gray-400 cursor-help hover:text-gray-600 transition-colors"
                      />
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-gray-800 text-white text-xs rounded-lg px-3 py-2 whitespace-nowrap z-10">
                        {feature.tooltip}
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-800"></div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              <p className="text-gray-800 w-full text-end px-3 mb-4 text-3xl font-bold">{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
