'use client';

import React from 'react';
import Image from 'next/image';
import '@/styles/globals.css';
import { Icon } from '@iconify/react';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      title: 'Better than LinkTree!',
      description:
        'We moved Voytrail from LinkTree, and we improved our engagement, event bookings! Highly recommended!',
      image: '/hotel.png',
      name: 'Eren Elagoz',
      role: 'Funker Hostel',
      avatar: '/logo.png',
    },
    {
      id: 2,
      title: 'Good Alternative',
      description:
        'We moved Voytrail from LinkTree, and we improved our engagement, event bookings! Highly recommended!',
      image: '/hostel.png',
      name: 'Eren Elagoz',
      role: 'El-Granado Hostel',
      avatar: '/logo.png',
    },
    {
      id: 3,
      title: 'Better than LinkTree!',
      description:
        'We moved Voytrail from LinkTree, and we improved our engagement, event bookings! Highly recommended!',
      image: '/coliving.png',
      name: 'Eren Elagoz',
      role: 'iLoveMadrid Hostel',
      avatar: '/logo.png',
    },
    {
      id: 4,
      title: 'Better than LinkTree!',
      description:
        'We moved Voytrail from LinkTree, and we improved our engagement, event bookings! Highly recommended!',
      image: '/cohost.png',
      name: 'Eren Elagoz',
      role: 'Packer Hostel',
      avatar: '/logo.png',
    },
  ];

  return (
    <div className="w-full bg-gradient-to-r from-lime-300 via-lime-400 to-lime-300 py-16 px-4 my-20">
      <div className="w-7xl mx-auto">
        {/* Title Section */}
        <div className="flex items-center gap-3 mb-8">
          <Icon icon="game-icons:laurel-crown" width={60} height={60} className="text-gray-800" />
          <h2 className="text-4xl font-black text-gray-800">Testimonials</h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-4 gap-4">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className=" bg-lime-900 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-101"
            >
              {/* Testimonial Image */}
              <div className="relative h-48 w-full">
                <Image src={testimonial.image} alt={testimonial.role} fill className="object-cover" />
              </div>

              {/* Testimonial Content */}
              <div className="p-4 flex flex-col gap-2">
                {/* Title */}
                <h3 className="text-xl font-bold text-white">{testimonial.title}</h3>

                {/* Description */}
                <p className="text-sm text-green-50 leading-relaxed text-justify mb-4">{testimonial.description}</p>

                {/* Author Info */}
                <div className="flex items-center gap-3">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image src={testimonial.avatar} alt={testimonial.name} fill className="object-cover" />
                  </div>
                  <div>
                    <p className="text-lg font-bold text-white">{testimonial.name}</p>
                    <p className="text-md text-lime-200">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
