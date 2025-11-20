'use client';

import React, { useState } from 'react';
import '@/styles/globals.css';
import { Icon } from '@iconify/react';

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const faqs = [
    {
      id: 1,
      title: 'Can I cancel my subscription whenever I want?',
      description: 'Yes, you can cancel your subscription at any time without any hidden fees or penalties.',
      color: 'bg-lime-400',
    },
    {
      id: 2,
      title: 'What is the Refund Policy',
      description: 'We offer full refunds within 30 days of purchase if you are not satisfied with our service.',
      color: 'bg-yellow-400',
    },
    {
      id: 3,
      title: 'How to Initiate a Return',
      description: 'Log into your account, navigate to orders, select the item, and follow the return process.',
      color: 'bg-orange-500',
    },
    {
      id: 4,
      title: 'What Items Are Eligible for a Refund',
      description: 'Most items are eligible for refund within 30 days. Exclusions: digital products and custom items.',
      color: 'bg-lime-300',
    },
  ];

  const toggleItem = (id: number) => {
    setOpenItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]));
  };

  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-5xl font-black text-gray-800 mb-12 text-center">Frequently Asked Questions</h2>

        <div className="flex flex-col gap-6">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className={`${faq.color} rounded-3xl shadow-lg transition-all overflow-hidden`}
            >
              <button
                onClick={() => toggleItem(faq.id)}
                className="w-full p-6 flex items-center justify-between text-left font-bold text-gray-800 hover:opacity-90"
              >
                <span className="text-lg">{faq.title}</span>
                <Icon
                  icon={openItems.includes(faq.id) ? 'mdi:chevron-up' : 'mdi:chevron-down'}
                  width={28}
                  height={28}
                  className="text-gray-800 flex-shrink-0"
                />
              </button>

              {openItems.includes(faq.id) && (
                <div className="px-6 pb-6 border-t-2 border-gray-700 border-opacity-20">
                  <p className="text-gray-800 text-sm leading-relaxed">{faq.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
