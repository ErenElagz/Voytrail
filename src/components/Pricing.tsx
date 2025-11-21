'use client';

import React, { useState } from 'react';
import '@/styles/globals.css';
import { Icon } from '@iconify/react';

export default function Pricing() {
  const [billingPeriod, setBillingPeriod] = useState('monthly');

  const plans = [
    {
      id: 'free',
      name: 'Free',
      monthlyPrice: 'Free',
      yearlyPrice: 'Free',
      badge: null,
      bgColor: 'bg-gray-100 border-2 border-gray-200',
      textColor: 'text-slate-800',
      buttonBg: 'bg-blue-100 hover:bg-blue-200 text-blue-600',
      badgeBg: null,
      features: [
        { name: 'Full Analytics', tooltip: 'Basic analytics dashboard' },
        { name: 'User Behavior Insights', tooltip: 'Track user activity' },
        { name: 'Conversion Tracking', tooltip: 'Monitor conversions' },
        { name: 'Performance Metrics', tooltip: 'View performance data' },
        { name: 'Social Engagement', tooltip: 'Track social metrics' },
      ],
      cta: 'Get Started',
    },
    {
      id: 'basic',
      name: 'Basic',
      monthlyPrice: '€9.99',
      yearlyPrice: '€64.90',
      badge: null,
      bgColor: 'bg-gray-100 border-2 border-gray-200',
      textColor: 'text-slate-800',
      buttonBg: 'bg-slate-600 hover:bg-slate-700 text-white',
      badgeBg: null,
      features: [
        { name: 'Full Analytics', tooltip: 'Comprehensive analytics' },
        { name: 'User Behavior Insights', tooltip: 'Detailed user insights' },
        { name: 'Conversion Tracking', tooltip: 'Advanced conversion tracking' },
        { name: 'Performance Metrics', tooltip: 'Full performance metrics' },
        { name: 'Social Engagement', tooltip: 'Social media analytics' },
      ],
      cta: 'Choose Plan',
    },
    {
      id: 'premium',
      name: 'Premium',
      monthlyPrice: '€29.99',
      yearlyPrice: '€299.99',
      badge: 'Most Popular',
      bgColor: 'bg-linear-to-br from-indigo-600 to-indigo-800 shadow-2xl transform scale-102',
      textColor: 'text-white',
      buttonBg: 'bg-white hover:bg-indigo-100 text-indigo-950',
      badgeBg: 'bg-indigo-950 shadow-lg ',
      features: [
        { name: 'Full Analytics', tooltip: 'Enterprise analytics' },
        { name: 'User Behavior Insights', tooltip: 'Advanced user tracking' },
        { name: 'Conversion Tracking', tooltip: 'Conversion optimization' },
        { name: 'Performance Metrics', tooltip: 'Real-time performance' },
        { name: 'Social Engagement', tooltip: 'Social media optimization' },
      ],
      cta: 'Choose Plan',
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      monthlyPrice: 'Contact Us',
      yearlyPrice: 'Contact Us',
      badge: null,
      bgColor: 'bg-linear-to-br from-slate-800 to-slate-950 ',
      textColor: 'text-gray-100',
      buttonBg: 'bg-gray-900 hover:bg-gray-100 text-white',
      badgeBg: null,
      features: [
        { name: 'Full Analytics', tooltip: 'Custom analytics' },
        { name: 'User Behavior Insights', tooltip: 'Custom insights' },
        { name: 'Conversion Tracking', tooltip: 'Custom tracking' },
        { name: 'Performance Metrics', tooltip: 'Custom metrics' },
        { name: 'Social Engagement', tooltip: 'Custom integration' },
      ],
      cta: 'Continue',
    },
  ];

  return (
    <div className="w-full py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="w-full flex flex-col items-center gap-4 mb-8">
          <div>
            <h1 className="text-4xl font-black text-slate-800 underline">Pricing</h1>
          </div>

          {/* Billing Toggle */}
          <div className="flex justify-start items-center bg-gray-100 border-2 border-gray-200 rounded-full">
            <button
              onClick={() => setBillingPeriod('monthly')}
              className={`px-6 py-2 font-bold rounded-full transition-all duration-300 ${
                billingPeriod === 'monthly' ? 'text-gray-900 bg-white shadow-md' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingPeriod('yearly')}
              className={`px-6 py-2 rounded-full font-bold transition-all duration-300 ${
                billingPeriod === 'yearly' ? 'bg-slate-800 text-white shadow-lg' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Yearly<span className="ml-2 text-sm font-semibold text-gray-400">(20% off)</span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-4 gap-4">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative ${plan.bgColor} rounded-4xl px-4 py-8 pb-4 transition-transform hover:scale-101`}
            >
              {/* Badge */}
              {plan.badge && (
                <div
                  className={`absolute -top-0 right-0 ${plan.badgeBg} text-white px-4 py-2 rounded-full text-md  font-bold`}
                >
                  {plan.badge}
                </div>
              )}

              {/* Plan Name */}
              <h3 className={`text-3xl font-bold mb-8 ${plan.textColor} underline px-2`}>{plan.name}</h3>

              {/* Features */}
              <div className="space-y-4 mb-8 px-2">
                {plan.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 group opacity-60 hover:opacity-100 transition-opacity"
                  >
                    <span className={`${plan.textColor} font-semibold text-sm underline`}>{feature.name}</span>
                    <div className="relative flex items-center ml-auto">
                      <Icon
                        icon="mdi:help-circle-outline"
                        width={20}
                        height={20}
                        className={`${plan.textColor} cursor-help`}
                      />
                      <div className="absolute bottom-full right-0 mb-2 hidden group-hover:block bg-gray-800 text-white text-xs rounded-lg px-3 py-2 whitespace-nowrap z-10">
                        {feature.tooltip}
                        <div className="absolute top-full right-2 border-4 border-transparent border-t-gray-800"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Price */}
              <div className={`text-3xl font-black underline traking-tight mb-4 ${plan.textColor} text-end`}>
                {billingPeriod === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
              </div>

              {/* CTA Button */}
              <button
                className={`w-full py-2 rounded-2xl font-bold transition-all duration-300 ${
                  plan.name === 'Premium'
                    ? 'bg-white text-indigo-900 border-2 border-current hover:bg-indigo-900 hover:text-white '
                    : plan.bgColor === 'bg-gray-100 border-2 border-gray-200'
                      ? `${plan.textColor} border-2 border-current hover:bg-gray-800 hover:text-white`
                      : `${plan.textColor} border-2 border-current hover:bg-gray-100 hover:text-gray-800`
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
