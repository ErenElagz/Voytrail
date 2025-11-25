'use client';

import React, { useState } from 'react';
import { Icon } from '@iconify/react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const containerClasses = 'w-full pt-25';
  const wrapperClasses = 'mx-auto max-w-6xl px-4';

  return (
    <div className={containerClasses} id="Contact">
      <div className={wrapperClasses}>
        {/* Header Section */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-5xl font-black tracking-tight text-zinc-900">Let&apos;s Talk</h2>
          <p className="text-xl text-zinc-600">Got a question? We&apos;re here to help.</p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          {/* Left Side - Contact Cards */}
          <div className="space-y-4">
            {/* Email Card */}
            <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-sky-600 to-sky-800 p-8 shadow-lg transition-transform duration-300 hover:scale-102">
              <div className="relative z-10">
                <div className="mb-3 flex items-center gap-4 items-center">
                  <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm">
                    <Icon icon="mdi:email" width={28} height={28} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Email Us</h3>
                    <p className="text-sky-100">Drop us a line anytime</p>
                  </div>
                </div>
                <a
                  href="mailto:info@voytrail.com"
                  className="inline-block text-lg font-semibold text-white underline decoration-2 underline-offset-4 transition-colors hover:text-sky-100"
                >
                  info@voytrail.com
                </a>
              </div>
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/10"></div>
            </div>

            {/* Phone Card */}
            <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-zinc-800 to-zinc-950 p-8 shadow-lg transition-transform duration-300 hover:scale-102">
              <div className="relative z-10">
                <div className="mb-3 flex items-center gap-4 items-center">
                  <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm">
                    <Icon icon="mdi:phone" width={28} height={28} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Call Us</h3>
                    <p className="text-zinc-300">Mon-Fri from 8am to 5pm</p>
                  </div>
                </div>
                <a
                  href="tel:+15551234567"
                  className="inline-block text-lg font-semibold text-white underline decoration-2 underline-offset-4 transition-colors hover:text-zinc-300"
                >
                  +1 (555) 123-4567
                </a>
              </div>
              <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-white/5"></div>
            </div>

            {/* Social Media Card */}
            <div className="group relative overflow-hidden rounded-3xl border-2 border-zinc-200 bg-zinc-50 p-8 shadow-lg transition-all duration-300 hover:border-zinc-300 hover:bg-white">
              <div className="relative z-10">
                <div className="mb-3 flex items-center gap-4 items-center">
                  <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-zinc-900">
                    <Icon icon="mdi:earth" width={28} height={28} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-zinc-900">Follow Us</h3>
                    <p className="text-zinc-600">Stay connected on social media</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <a
                    href="#"
                    className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-900 text-white transition-transform duration-300 hover:scale-110"
                  >
                    <Icon icon="mdi:twitter" width={20} height={20} />
                  </a>
                  <a
                    href="#"
                    className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-900 text-white transition-transform duration-300 hover:scale-110"
                  >
                    <Icon icon="mdi:linkedin" width={20} height={20} />
                  </a>
                  <a
                    href="#"
                    className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-900 text-white transition-transform duration-300 hover:scale-110"
                  >
                    <Icon icon="mdi:instagram" width={20} height={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="rounded-3xl border-2 border-zinc-200 bg-white p-6 shadow-lg">
            <h3 className="mb-6 text-2xl font-bold text-zinc-900">Send us a message</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded-2xl border-2 border-zinc-200 bg-zinc-50 px-5 py-4 text-zinc-900 transition-all duration-300 placeholder:text-zinc-400 focus:border-sky-600 focus:bg-white focus:outline-none"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-2xl border-2 border-zinc-200 bg-zinc-50 px-5 py-4 text-zinc-900 transition-all duration-300 placeholder:text-zinc-400 focus:border-sky-600 focus:bg-white focus:outline-none"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full resize-none rounded-2xl border-2 border-zinc-200 bg-zinc-50 px-5 py-4 text-zinc-900 transition-all duration-300 placeholder:text-zinc-400 focus:border-sky-600 focus:bg-white focus:outline-none"
                  placeholder="Tell us what you're thinking about..."
                  rows={6}
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-2xl bg-zinc-900 px-6 py-4 text-lg font-bold text-white transition-all duration-300 hover:bg-zinc-800 disabled:bg-zinc-400"
                disabled={isSubmitted}
              >
                {isSubmitted ? (
                  <span className="flex items-center justify-center gap-2">
                    <Icon icon="mdi:check-circle" width={24} height={24} />
                    Sent Successfully!
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    Send Message
                    <Icon icon="mdi:arrow-right" width={24} height={24} />
                  </span>
                )}
              </button>

              {isSubmitted && (
                <div className="animate-pulse rounded-2xl bg-green-50 p-4 text-center text-green-700">
                  <p className="font-semibold">We&apos;ll get back to you soon!</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
