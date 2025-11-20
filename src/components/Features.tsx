import React, { Component } from 'react';
import '@/styles/globals.css';
import Image from 'next/image';
import { Accordion, AccordionItem } from '@szhsin/react-accordion';

export default class Features extends Component {
  render() {
    const data = [
      {
        title: 'What is Lorem Ipsum?',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        title: 'Where does it come from?',
        description:
          'Quisque eget luctus mi, vehicula mollis lorem. Proin fringilla vel erat quis sodales. Nam ex enim, eleifend venenatis lectus vitae, accumsan auctor mi.',
      },
      {
        title: 'Why do we use it?',
        description:
          'Suspendisse massa risus, pretium id interdum in, dictum sit amet ante. Fusce vulputate purus sed tempus feugiat.',
      },
    ];
    return (
      <div className="flex w-full max-w-7xl flex-col justify-center px-4 mt-10 mb-20 gap-4 md:gap-16 md:flex-row">
        <div className="flex flex-col gap-6 md:w-1/2">
          <span className=" text-4xl font-black text-zinc-700">What can do with Voytrail?</span>
          <Accordion className="w-full" transition transitionTimeout={200}>
            {data.map((item, index) => (
              <AccordionItem
                key={index}
                header={item.title}
                className="mb-4 p-4 border-2 border-gray-300 rounded-xl hover:border-gray-400 "
                buttonProps={{
                  className: ({ isEnter }) =>
                    `flex w-full text-left text-xl font-bold ${isEnter && 'text-sky-950'}`,
                }}
              >
                <p className="mt-4 text-gray-700 text-justify">{item.description}</p>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <div>
          <Image
            src="/hero.png"
            alt="Hero Image"
            width={250}
            className="rounded-4xl shadow-2xl border-2 border-black"
            height={300}
          />
        </div>
      </div>
    );
  }
}
