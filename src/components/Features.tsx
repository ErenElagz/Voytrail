import React, { Component } from 'react';
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

    // Reusable class strings
    const containerClasses = 'my-20 flex w-6xl flex-col items-center justify-between gap-4 md:flex-row md:gap-16';
    const accordionContainerClasses = 'flex flex-col gap-2 md:w-1/2';
    const headingClasses = 'mb-4 text-3xl font-bold tracking-tight text-zinc-900';
    const imageContainerClasses = 'flex items-center justify-center md:w-1/2';
    const imageClasses = 'rounded-4xl border-2 border-zinc-900 shadow-2xl';

    return (
      <div className={containerClasses}>
        {/* Features accordion */}
        <div className={accordionContainerClasses}>
          <h2 className={headingClasses}>Why Hosts Choose Voytrail?</h2>
          <Accordion transition transitionTimeout={300}>
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

        {/* Feature image */}
        <div className={imageContainerClasses}>
          <Image src="/hero.png" alt="Features Preview" width={300} height={300} className={imageClasses} />
        </div>
      </div>
    );
  }
}
