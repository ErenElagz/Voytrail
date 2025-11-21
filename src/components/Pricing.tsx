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
      bgColor: 'bg-gray-50 border-2 border-gray-200',
      textColor: 'text-blue-600',
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
      monthlyPrice: '6.49€',
      yearlyPrice: '64.90€',
      badge: null,
      bgColor: 'bg-lime-100 border-2 border-lime-200',
      textColor: 'text-blue-600',
      buttonBg: 'bg-blue-600 hover:bg-blue-700 text-white',
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
      monthlyPrice: '29.99€',
      yearlyPrice: '299.90€',
      badge: 'Most Popular',
      bgColor: 'bg-blue-600 shadow-2xl transform scale-105',
      textColor: 'text-white',
      buttonBg: 'bg-white hover:bg-gray-100 text-blue-600',
      badgeBg: 'bg-blue-800',
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
      monthlyPrice: 'Custom',
      yearlyPrice: 'Custom',
      badge: null,
      bgColor: 'bg-lime-400 border-2 border-lime-500',
      textColor: 'text-gray-900',
      buttonBg: 'bg-gray-900 hover:bg-gray-800 text-white',
      badgeBg: null,
      features: [
        { name: 'Full Analytics', tooltip: 'Custom analytics' },
        { name: 'User Behavior Insights', tooltip: 'Custom insights' },
        { name: 'Conversion Tracking', tooltip: 'Custom tracking' },
        { name: 'Performance Metrics', tooltip: 'Custom metrics' },
        { name: 'Social Engagement', tooltip: 'Custom integration' },
      ],
      cta: 'Contact Us',
    },
  ];

  return (
    <div className="w-full bg-gradient-to-b from-white to-gray-50 py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-start mb-16">
          <div>
            <h1 className="text-7xl font-black text-gray-900 border-b-4 border-gray-900 pb-3 inline-block">
              Pricing Plans
            </h1>
          </div>

          {/* Billing Toggle */}
          <div className="flex gap-2 items-center bg-gray-100 rounded-full p-1 shadow-md">
            <button
              onClick={() => setBillingPeriod('monthly')}
              className={`px-6 py-2 font-bold rounded-full transition-all duration-300 ${
                billingPeriod === 'monthly' ? 'text-gray-900 bg-white shadow-md' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              monthly
            </button>
            <button
              onClick={() => setBillingPeriod('yearly')}
              className={`px-6 py-2 rounded-full font-bold transition-all duration-300 ${
                billingPeriod === 'yearly' ? 'bg-gray-900 text-white shadow-md' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              yearly
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-4 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative ${plan.bgColor} rounded-4xl p-8 transition-transform hover:scale-105`}
            >
              {/* Badge */}
              {plan.badge && (
                <div
                  className={`absolute -top-4 left-1/2 transform -translate-x-1/2 ${plan.badgeBg} text-white px-6 py-2 rounded-full text-sm font-bold`}
                >
                  {plan.badge}
                </div>
              )}

              {/* Plan Name */}
              <h3 className={`text-3xl font-bold mb-8 ${plan.textColor} underline`}>{plan.name}</h3>

              {/* Features */}
              <div className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3 group">
                    <span className={`${plan.textColor} font-semibold text-sm`}>{feature.name}</span>
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
              <div className={`text-3xl font-bold mb-8 ${plan.textColor} text-center`}>
                {billingPeriod === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
              </div>

              {/* CTA Button */}
              <button
                className={`w-full py-3 rounded-lg font-bold transition-all ${
                  plan.name === 'Premium'
                    ? 'bg-white text-blue-600 hover:bg-gray-100'
                    : plan.bgColor === 'bg-gray-100'
                      ? `${plan.textColor} border-2 border-current hover:bg-gray-200`
                      : `${plan.textColor} border-2 border-current hover:opacity-90`
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
