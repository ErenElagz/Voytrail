import React, { Component } from 'react';
import Image from 'next/image';
import '@/styles/globals.css';
import { Icon } from '@iconify/react';

export default class Pricing extends Component {
  render() {
    const data = [
      {plan : 'Basic', price: '$9.99/month', features: ['Feature A', 'Feature B']},
      {plan : 'Standard', price: '$19.99/month', features: ['Feature A', 'Feature B', 'Feature C']},
      {plan : 'Premium', price: '$29.99/month', features: ['Feature A', 'Feature B', 'Feature C', 'Feature D']},
    ];

    return (
      <div className=" w-full max-w-[1000px] flex flex-col w-full mt-10">
        <div className=" w-full flex items-center">
          <span className=" text-4xl font-black text-zinc-700">For Whom?</span>
        </div>
        <div className=" flex gap-3 my-6">
          {data.map((item, index) => (
            <div
              key={index}
              className="w-full h-full  bg-gray-900 rounded-3xl flex flex-col items-center justify-center p-2 border-2 border-sky-100 hover:scale-101 hover:shadow-sm transition-all duration-300"
            >
              <span className="text-3xl font-bold text-gray-300 mb-2 w-full px-3">{item.plan}</span>
              <p className="text-gray-300 text-justify px-3">{item.price}</p>
              <ul className=" list-disc list-inside text-sky-600 mt-4 mb-6 w-full px-3">
                {item.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center gap-2">
                    <Icon icon="mdi:check" width={24} height={24} className="text-gray-400" />
                    <span className="text-gray-300">{feature}</span>
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
