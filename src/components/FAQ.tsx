'use client';

import React, { useState } from 'react';
import '@/styles/globals.css';
import Image from 'next/image';
import { Accordion, AccordionItem } from '@szhsin/react-accordion';
import { Icon } from '@iconify/react';

export default class FAQ extends React.Component {
  render() {
    const data = [
      {
        title: 'What is Voytrail?',
        description:
          'Voytrail is a unified guest hub platform designed for hosts to provide guests with all necessary information in one dynamic location, enhancing the guest experience and streamlining host operations.',
      },
      {
        title: 'How does Voytrail work?',
        description:
          'Voytrail provides hosts with a customizable platform where they can create a dynamic hub containing check-in instructions, house rules, Wi-Fi details, local guides, events, and more. Guests can access this information through a single link or QR code, ensuring they have everything they need at their fingertips.',
      },
      {
        title: 'What features does Voytrail offer?',
        description:
          'Voytrail offers a comprehensive guest hub, modular system for hosts, live updates, detailed analytics, a frictionless guest experience, and QR code generation for easy access to information.',
      },
      {
        title: 'Is Voytrail free to use?',
        description:
          'Voytrail offers a free plan with essential features. For more advanced features and capabilities, we offer premium plans that can be explored on our Pricing page.',
      },
      {
        title: 'How can I get started with Voytrail?',
        description:
          'Getting started with Voytrail is easy! Simply sign up on our website, choose a plan that suits your needs, and start creating your unified guest hub today.',
      },
    ];

    return (
      <div className=" w-7xl flex-col my-20 gap-4 md:gap-16 items-center">
        <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 text-center">Frequently Asked Questions</h2>
        <Accordion transition transitionTimeout={400} className="w-2/3 mx-auto">
          {data.map((item, index) => (
            <AccordionItem
              key={index}
              header={item.title}
              className={({ isEnter }) =>
                `w-full border-2  rounded-4xl transition-all mb-2 duration-400 ${isEnter ? 'border-slate-300  bg-slate-100' : 'border-slate-200 bg-slate-50 hover:bg-slate-100 '}`
              }
              buttonProps={{
                className: ({ isEnter }) =>
                  `flex w-full text-justify text-lg font-semibold p-6 transition-colors duration-400 ${isEnter ? 'text-slate-800 pb-2' : 'text-slate-800 '}`,
              }}
            >
              <p className="text-gray-500 text-md font-medium leading-relaxed tracking-tight text-justify p-6 pt-0">
                {item.description}
              </p>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    );
  }
}
