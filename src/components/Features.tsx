import React, { Component } from 'react';
import '@/styles/globals.css';
import Image from 'next/image';
import { Accordion, AccordionItem } from '@szhsin/react-accordion';

export default class Features extends Component {
  render() {
    const data = [
      {
        title: 'Unified Guest Hub',
        description:
          'Voytrail replaces scattered PDFs, WhatsApp messages, and outdated house manuals with a single, dynamic hub containing check-in instructions, house rules, Wi-Fi, guides, events, and everything a guest needs.',
      },
      {
        title: 'Modular System Built for Real Hosts',
        description:
          'Unlike generic link builders, every section is a real module: House Info, Directions, Events, Local Tips, Add-Ons, Room Details, Emergency Info, and more. Hosts activate only what they need and customize the order.',
      },
      {
        title: 'Live Updates Without Re-Sending Anything',
        description:
          'Hosts edit any detail and guests instantly see the change. No re-sending links, PDFs, or instructions. One link. Always up to date.',
      },
      {
        title: 'Analytics That Actually Matter',
        description:
          'Voytrail shows what guests view, what they ignore, and where they drop off. Hosts finally understand guest behavior instead of guessing.',
      },
      {
        title: 'Frictionless Guest Experience',
        description:
          'Guests don’t install apps or log in. They open one clean page with every detail structured properly. Zero confusion. Zero searching.',
      },
      {
        title: 'QR-Ready for Rooms and Properties',
        description:
          'Every module and every page generates QR codes for physical placement inside rooms, lobbies, or common areas. Offline signage becomes interactive instantly.',
      },
    ];

    return (
      <div className="flex w-7xl flex-col my-20 gap-4 md:gap-16 md:flex-row justify-between items-center">
        <div className="flex flex-col gap-2 md:w-1/2">
          <h2 className="text-4xl font-black text-gray-800 mb-6">Features</h2>
          <Accordion transition transitionTimeout={400}>
            {data.map((item, index) => (
              <AccordionItem
                key={index}
                header={item.title}
                className={({ isEnter }) =>
                  `w-full border-2 rounded-2xl transition-all mb-2 duration-400 ${isEnter ? 'border-slate-800 bg-slate-950' : 'border-slate-200 bg-slate-50'}`
                }
                buttonProps={{
                  className: ({ isEnter }) =>
                    `flex w-full text-justify text-xl font-bold p-4 transition-colors duration-400 ${isEnter ? 'text-slate-100' : 'text-slate-500'}`,
                }}
              >
                <p className="text-gray-400 text-justify p-4 pt-0">{item.description}</p>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <div className="md:w-1/2 flex justify-center items-center">
          <Image
            src="/hero.png"
            alt="Hero Image"
            width={300}
            className="rounded-4xl shadow-2xl border-2 border-black"
            height={300}
          />
        </div>
      </div>
    );
  }
}
