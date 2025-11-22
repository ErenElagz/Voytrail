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
      image: '/companies/funker-review.png',
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
    <div className="w-full bg-gray-100 py-20">
      <div className="w-6xl mx-auto">
        <h2 className="text-3xl font-bold tracking-tight text-black mb-8">Testimonials from Our Customers</h2>

        {/* Testimonials Carousel */}
        <div className="relative overflow-visible flex justify-center">
          {/* Carousel Container */}
          <div className="overflow-visible">
            <div className="flex gap-3 justify-center">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className={`flex-shrink-0 w-72 h-80 bg-gradient-to-br ${testimonial.bgColor} rounded-3xl overflow-hidden shadow-xl transition-all duration-500 relative group`}
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
