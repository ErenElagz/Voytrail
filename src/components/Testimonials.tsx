'use client';

import React from 'react';
import Image from 'next/image';
import '@/styles/globals.css';
import { Icon } from '@iconify/react';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      quote: '"Framify has completely transformed my design workflow"',
      image: '/hotel.png',
      name: 'John Davis',
      role: 'Sales Director',
      company: 'FUNKER HOSTEL',
      bgColor: 'from-purple-400 to-purple-600',
    },
    {
      id: 2,
      quote: '"Framify has completely transformed my design workflow"',
      image: '/hostel.png',
      name: 'John Davis',
      role: 'Sales Director',
      company: 'EL-GRANADO',
      bgColor: 'from-gray-600 to-gray-800',
    },
    {
      id: 3,
      quote: '"Framify has completely transformed my design workflow"',
      image: '/coliving.png',
      name: 'John Davis',
      role: 'Sales Director',
      company: 'COLIVING INC.',
      bgColor: 'from-orange-400 via-yellow-300 to-green-400',
    },
    {
      id: 4,
      quote: '"Framify has completely transformed my design workflow"',
      image: '/cohost.png',
      name: 'John Davis',
      role: 'Sales Director',
      company: 'COHOST LTD.',
      bgColor: 'from-blue-400 to-blue-600',
    },
  ];

  return (
    <div className="w-full bg-gray-50 py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex items-start justify-between gap-8 mb-16">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-4">
              <Icon icon="mdi:flag-outline" width={20} height={20} className="text-gray-600" />
              <span className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Testimonials</span>
            </div>
            <h2 className="text-5xl font-black text-gray-900 mb-0 leading-tight">
              Trusted by Over 50+ 
              <br /> Hostels
           </h2>
          </div>

          <div className="flex-1 flex flex-col items-end justify-start gap-6">
            <p className="text-lg text-gray-700 text-right">
              Convertify has helped businesses across industries enhance their sales performance and achieve their
              goals.
            </p>
            <button className="bg-sky-600 hover:bg-sky-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 hover:shadow-lg">
              Get Started Now
            </button>
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative overflow-visible flex justify-center">
          {/* Carousel Container */}
          <div className="overflow-visible">
            <div className="flex gap-6 pb-4 justify-center">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className={`flex-shrink-0 w-80 h-96 bg-gradient-to-br ${testimonial.bgColor} rounded-3xl overflow-hidden shadow-xl transition-all duration-500 relative group`}
                >
                  {/* Background Image */}
                  <div className="absolute inset-0 overflow-hidden">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-black/30" />

                  {/* Content Overlay */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/70 to-transparent">
                    {/* Quote */}
                    <p className="text-white text-lg font-medium mb-6 leading-relaxed">{testimonial.quote}</p>

                    {/* Author Info */}
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-white font-bold text-sm">{testimonial.name}</p>
                        <p className="text-gray-300 text-xs">{testimonial.role}</p>
                      </div>
                      <p className="text-white text-xs font-bold tracking-wider">{testimonial.company}</p>
                    </div>
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
