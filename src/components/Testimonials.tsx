'use client';

import React from 'react';
import Image from 'next/image';
import '@/styles/globals.css';
import { Icon } from '@iconify/react';
import funkerReview from '@/assets/images/companies/funker-review.png';
import centralReview from '@/assets/images/companies/central-review.png';
import tocReview from '@/assets/images/companies/toc-review.png';
import suitersReview from '@/assets/images/companies/suiters-review.png';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      quote: 'Better than Linktree, Voytrail makes sharing all our booking links effortless."',
      image: funkerReview,
      name: 'John Davis',
      role: 'Director',
      company: 'FUNKER HOSTEL',
      bgColor: 'from-gray-700 to-gray-900',
    },
    {
      id: 2,
      quote: '"With Voytrail, our guests can easily find every booking option in one place."',
      image: centralReview,
      name: 'Maria Lopez',
      role: 'Manager',
      company: 'CENTRAL HOSTEL',
      bgColor: 'from-gray-700 to-gray-900',
    },
    {
      id: 3,
      quote: '"Voytrail streamlines our online presence. Our bookings have increased!"',
      image: tocReview,
      name: 'Alex Kim',
      role: 'Manager',
      company: 'TOC HOSTEL',
      bgColor: 'from-gray-700 to-gray-900',
    },
    {
      id: 4,
      quote:
        '"We love how Voytrail brings all our booking channels together. It’s the perfect Linktree alternative for our co-living space."',
      image: suitersReview,
      name: 'Sophie Martin',
      role: 'Manager',
      company: 'SUITERS CoLiving',
      bgColor: 'from-gray-700 to-gray-900',
    },
  ];

  return (
    <div className="w-full bg-gray-100 py-20">
      <div className="w-full max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold tracking-tight text-black mb-8">Testimonials from Our Customers</h2>

        {/* Testimonials Carousel */}
        <div className="relative overflow-visible flex justify-center">
          {/* Carousel Container */}
          <div className="overflow-visible w-full">
            <div className="flex flex-col md:flex-row gap-2 justify-center items-center">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className={`flex-shrink-0 w-full max-w-sm h-80 md:w-72 bg-gradient-to-br ${testimonial.bgColor} rounded-3xl overflow-hidden shadow-xl transition-all duration-500 relative group`}
                >
                  {/* Background Image */}
                  <div className="absolute inset-0 overflow-hidden">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
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
