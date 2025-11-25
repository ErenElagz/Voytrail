'use client';

import React, { useState } from 'react';
import { Icon } from '@iconify/react';

export default function Pricing() {
  const [billingPeriod, setBillingPeriod] = useState('monthly');

  // Pricing plans configuration
  const plans = [
    {
      id: 'free',
      name: 'Free',
      monthlyPrice: 'Free',
      yearlyPrice: 'Free',
      badge: null,
      bgColor: 'border-2 border-zinc-200 bg-zinc-50',
      textColor: 'text-zinc-800',
      buttonBg: 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200',
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
      id: 'premium',
      name: 'Premium',
      monthlyPrice: '€12.99',
      yearlyPrice: '€124.49',
      badge: 'Most Popular',
      bgColor: 'scale-102 transform bg-gradient-to-br from-sky-600 to-sky-950 shadow-2xl',
      textColor: 'text-white',
      buttonBg: 'bg-white text-zinc-950 hover:bg-zinc-100',
      badgeBg: 'bg-sky-950 shadow-2xl' ,
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
      bgColor: 'bg-gradient-to-br from-zinc-800 to-zinc-950',
      textColor: 'text-zinc-100',
      buttonBg: 'bg-zinc-900 text-white hover:bg-zinc-100',
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

  // Reusable class strings
  const containerClasses = 'my-20 w-full';
  const wrapperClasses = 'mx-auto max-w-6xl';
  const headerClasses = 'mb-12 flex w-full flex-col items-center gap-4';
  const headingClasses = 'text-4xl font-black text-zinc-800 underline';
  const toggleContainerClasses = 'flex items-center justify-start rounded-full border-2 border-zinc-200 bg-zinc-50';
  const gridClasses = 'grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-3';

  return (
    <div className={containerClasses} id="Pricing">
      <div className={wrapperClasses}>
        {/* Header */}
        <div className={headerClasses}>
          <div>
            <h1 className={headingClasses}>Pricing Plans</h1>
          </div>

          {/* Billing toggle */}
          <div className={toggleContainerClasses}>
            <button
              onClick={() => setBillingPeriod('monthly')}
              className={`rounded-full px-6 py-2 font-bold transition-all duration-300 ${
                billingPeriod === 'monthly' ? 'bg-white text-zinc-900 shadow-md' : 'text-zinc-600 hover:text-zinc-900'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingPeriod('yearly')}
              className={`rounded-full px-6 py-2 font-bold transition-all duration-300 ${
                billingPeriod === 'yearly' ? 'bg-zinc-800 text-white shadow-lg' : 'text-zinc-600 hover:text-zinc-900'
              }`}
            >
              Yearly<span className="ml-1 text-sm font-semibold text-zinc-400">(20% off)</span>
            </button>
          </div>
        </div>

        {/* Pricing cards */}
        <div className={gridClasses}>
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-4xl px-4 py-8 pb-4 transition-transform duration-300 hover:scale-101 ${plan.bgColor}`}
            >
              {/* Badge */}
              {plan.badge && (
                <div
                  className={`absolute -top-0 right-0 rounded-full px-5 py-2 text-md font-bold text-white ${plan.badgeBg}`}
                >
                  {plan.badge}
                </div>
              )}

              {/* Plan name */}
              <h3 className={`mb-8 px-2 text-3xl font-bold underline ${plan.textColor}`}>{plan.name}</h3>

              {/* Features */}
              <div className="mb-8 space-y-4 px-2">
                {plan.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="group flex items-center gap-3 opacity-60 transition-opacity duration-300 hover:opacity-100"
                  >
                    <span className={`text-md font-semibold underline ${plan.textColor}`}>{feature.name}</span>
                    <div className="relative ml-auto flex items-center">
                      <Icon
                        icon="mdi:help-circle-outline"
                        width={20}
                        height={20}
                        className={`cursor-help ${plan.textColor}`}
                      />
                      <div className="absolute bottom-full right-0 z-10 mb-2 hidden whitespace-nowrap rounded-lg bg-zinc-800 px-3 py-2 text-xs text-white group-hover:block">
                        {feature.tooltip}
                        <div className="absolute right-2 top-full border-4 border-transparent border-t-zinc-800"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Price */}
              <div className={`mb-4 mr-2 text-end text-3xl font-black tracking-tight underline ${plan.textColor}`}>
                {billingPeriod === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
              </div>

              {/* CTA button */}
              <a href="https://app.voytrail.com/login" target="_blank" rel="noopener noreferrer">

              <button
                className={`w-full rounded-2xl border-2 border-current py-2 font-bold transition-all duration-300 ${
                  plan.name === 'Premium'
                    ? 'bg-white text-sky-900 hover:bg-sky-800 hover:text-white'
                    : plan.bgColor.includes('zinc-50')
                      ? `${plan.textColor} hover:bg-zinc-800 hover:text-white`
                      : `${plan.textColor} hover:bg-zinc-100 hover:text-zinc-800`
                }`}
              >
                {plan.cta}
              </button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
