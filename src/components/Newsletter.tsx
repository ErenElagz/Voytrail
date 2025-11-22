'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      setMessage('Please enter an email address');
      return;
    }

    setIsLoading(true);
    setMessage('');

    try {
      // Simulate API call - replace with actual endpoint
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setMessage('✓ Successfully subscribed!');
      setEmail('');
      setTimeout(() => setMessage(''), 3000);
    } catch {
      setMessage('Failed to subscribe. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  // Reusable class strings
  const containerClasses = 'mx-auto my-32 flex w-full max-w-5xl flex-col';
  const cardClasses = 'w-full overflow-hidden rounded-4xl bg-gradient-to-br from-sky-700 to-sky-950 shadow-lg';
  const gridClasses = 'grid grid-cols-1 items-center gap-8 p-8 pr-0 md:grid-cols-2 md:p-12';
  const contentClasses = 'flex flex-col justify-center gap-4';
  const headingClasses = 'text-4xl font-black text-white md:text-5xl';
  const descriptionClasses = 'text-lg text-zinc-300';
  const formClasses = 'mt-4 flex flex-col gap-3';
  const inputContainerClasses = 'flex flex-col gap-2 sm:flex-row';
  const inputClasses =
    'flex-1 rounded-lg bg-white px-4 py-3 text-zinc-800 placeholder-zinc-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-zinc-400';
  const buttonClasses =
    'rounded-lg bg-zinc-800 px-4 py-2 font-medium text-white transition-all duration-300 hover:bg-zinc-600 disabled:cursor-not-allowed disabled:opacity-50';
  const privacyClasses = 'mt-2 text-sm text-zinc-300';
  const imageContainerClasses = 'flex justify-center';
  const imageWrapperClasses = 'relative h-64 w-full md:h-80';
  const imageClasses = 'object-contain';

  return (
    <div className={containerClasses}>
      <div className={cardClasses}>
        <div className={gridClasses}>
          {/* Content section */}
          <div className={contentClasses}>
            <h2 className={headingClasses}>Stay Updated</h2>
            <p className={descriptionClasses}>
              Subscribe to our newsletter and get the latest travel tips, exclusive deals, and destination guides
              delivered to your inbox.
            </p>

            {/* Email input form */}
            <form onSubmit={handleSubmit} className={formClasses}>
              <div className={inputContainerClasses}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={inputClasses}
                  disabled={isLoading}
                />
                <button type="submit" disabled={isLoading} className={buttonClasses}>
                  {isLoading ? 'Subscribing...' : 'Subscribe'}
                </button>
              </div>

              {message && (
                <p className={`text-sm font-medium ${message.includes('✓') ? 'text-green-300' : 'text-red-300'}`}>
                  {message}
                </p>
              )}
            </form>

            <p className={privacyClasses}>We respect your privacy. Unsubscribe at any time.</p>
          </div>

          {/* Image section */}
          <div className={imageContainerClasses}>
            <div className={imageWrapperClasses}>
              <Image src="/newsletter.png" alt="Newsletter" fill className={imageClasses} priority />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
