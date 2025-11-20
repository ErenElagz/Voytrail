'use client';

import React, { useState } from 'react';
import '@/styles/globals.css';
import { Icon } from '@iconify/react';

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([0]);

  const faqs = [
    {
      id: 1,
      title: 'Can I cancel my subscription whenever I want?',
      description:
        'Tracking engagement in SaaS is crucial for understanding user behavior and improving product offerings. By analyzing metrics such as login frequency, feature usage patterns, and engagement trends, businesses can identify areas for enhancement. Implementing tools like analytics dashboards can provide insights into how users interact with the software, allowing for data-driven decisions to boost retention and satisfaction. Regularly reviewing this data helps in adapting strategies to meet customer needs effectively.',
      color: 'bg-lime-400',
    },
    {
      id: 2,
      title: 'What is the Refund Policy',
      description:
        'Our refund policy ensures customer satisfaction and protection. We offer full refunds within 30 days of purchase if you are not completely satisfied with our service. No questions asked refunds are available for all subscription plans.',
      color: 'bg-yellow-400',
    },
    {
      id: 3,
      title: 'How to Initiate a Return',
      description:
        'To initiate a return, simply log into your account, navigate to your orders, select the item you wish to return, and follow the return authorization process. You will receive a prepaid shipping label and further instructions.',
      color: 'bg-orange-500',
    },
    {
      id: 4,
      title: 'What Items Are Eligible for a Refund',
      description:
        'Most items are eligible for refund within 30 days of purchase. Exclusions include digital products, customized items, and final sale merchandise. Please refer to our complete refund policy for detailed information.',
      color: 'bg-lime-300',
    },
    {
      id: 5,
      title: 'How to Initiate a Return',
      description:
        'To initiate a return, simply log into your account, navigate to your orders, select the item you wish to return, and follow the return authorization process.',
      color: 'bg-orange-500',
    },
    {
      id: 6,
      title: 'What is the Refund Policy',
      description:
        'Our refund policy ensures customer satisfaction and protection. We offer full refunds within 30 days of purchase.',
      color: 'bg-lime-400',
    },
  ];

  const toggleItem = (id: number) => {
    setOpenItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]));
  };

  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1200px] mx-auto">
        {/* Title */}
        <h2 className="text-5xl font-black text-gray-800 mb-12">Frequently Asked Questions</h2>

        {/* FAQ Single Column */}
        <div className="flex flex-col gap-6 max-w-2xl">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className={`${faq.color} rounded-3xl shadow-lg transition-all duration-300 overflow-hidden`}
            >
              <button
                onClick={() => toggleItem(faq.id)}
                className="w-full p-6 flex items-center justify-between text-left font-bold text-gray-800 hover:opacity-90 transition-opacity"
              >
                <span className="text-lg">{faq.title}</span>
                <Icon
                  icon={openItems.includes(faq.id) ? 'mdi:chevron-up' : 'mdi:chevron-down'}
                  width={28}
                  height={28}
                  className="text-gray-800 flex-shrink-0"
                />
              </button>

              {/* Accordion Content */}
              {openItems.includes(faq.id) && (
                <div className="px-6 pb-6 pt-0 border-t-2 border-gray-700 border-opacity-20">
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
