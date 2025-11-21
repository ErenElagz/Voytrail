'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import '@/styles/globals.css';

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

  return (
    <div className="w-full max-w-[1000px] flex flex-col my-20 mx-auto">
      <div className="w-full bg-gradient-to-r from-sky-950 to-blue-950 rounded-3xl overflow-hidden shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center p-8 md:p-12">
          {/* Content Section */}
          <div className="flex flex-col justify-center gap-4">
            <h2 className="text-4xl md:text-5xl font-black text-white">Stay Updated</h2>
            <p className="text-lg text-sky-100">
              Subscribe to our newsletter and get the latest travel tips, exclusive deals, and destination guides
              delivered to your inbox.
            </p>

            {/* Email Input Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-3 mt-4">
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-3 rounded-lg bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-sky-400 transition-all"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={isLoading}
                  className="px-6 py-3 bg-sky-500 hover:bg-sky-600 text-white font-bold rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? 'Subscribing...' : 'Subscribe'}
                </button>
              </div>

              {message && (
                <p className={`text-sm font-medium ${message.includes('✓') ? 'text-green-300' : 'text-red-300'}`}>
                  {message}
                </p>
              )}
            </form>

            <p className="text-xs text-sky-200 mt-2">We respect your privacy. Unsubscribe at any time.</p>
          </div>

          {/* Image Section */}
          <div className="flex justify-center">
            <div className="relative w-full h-64 md:h-80">
              <Image src="/newsletter.png" alt="Newsletter" fill className="object-contain" priority />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
