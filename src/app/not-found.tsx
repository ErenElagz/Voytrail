'use client';

import React from 'react';
import { Icon } from '@iconify/react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-gradient-to-br from-zinc-50 to-zinc-100 px-4">
      <div className="text-center">
        {/* 404 Illustration */}
        <div className="mb-12 flex justify-center">
          <div className="text-9xl font-black text-transparent bg-clip-text bg-gradient-to-br from-sky-600 to-sky-800">
            404
          </div>
        </div>

        {/* Mini Explanations */}
        <div className="mb-12 max-w-md">
          <p className="text-lg text-zinc-600">Page not found. Let&apos;s get you back on track.</p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/"
            className="rounded-2xl bg-sky-700 px-8 py-4 font-bold text-white transition-all duration-300 hover:bg-sky-800 flex items-center justify-center gap-2"
          >
            <Icon icon="mdi:home" width={20} height={20} />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
