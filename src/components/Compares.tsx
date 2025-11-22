import React from 'react';
import Image from 'next/image';
import '@/styles/globals.css';
import { Icon } from '@iconify/react';

export default function Compares() {
  const comparison = [
    {
      feature: 'Free Usage',
      taplink: true,
      beacons: true,
      linktree: true,
      pallyy: true,
      voytrail: true,
    },
    {
      feature: 'Implement Links',
      taplink: true,
      beacons: true,
      linktree: true,
      pallyy: true,
      voytrail: true,
    },
    {
      feature: 'Social Media Links',
      taplink: false,
      beacons: false,
      linktree: true,
      pallyy: true,
      voytrail: true,
    },
    {
      feature: 'Featured Cards',
      taplink: false,
      beacons: false,
      linktree: true,
      pallyy: true,
      voytrail: true,
    },
    {
      feature: 'Tab Section',
      taplink: false,
      beacons: false,
      linktree: false,
      pallyy: false,
      voytrail: true,
    },
    {
      feature: 'Event Cards',
      taplink: false,
      beacons: false,
      linktree: false,
      pallyy: false,
      voytrail: true,
    },
    {
      feature: 'Analytics Support',
      taplink: false,
      beacons: false,
      linktree: false,
      pallyy: false,
      voytrail: true,
    },
  ];

  const platforms = [
    { key: 'taplink', name: 'Taplink', image: '/compares/taplink.png', price: '6€' },
    { key: 'beacons', name: 'Beacons', image: '/compares/beacons.png', price: '25€' },
    { key: 'linktree', name: 'Linktree', image: '/compares/linktree.png', price: '13€' },
    { key: 'pallyy', name: 'Pallyy', image: '/compares/pallyy.png', price: '25€' },
    { key: 'voytrail', name: 'VoyTrail', image: '/compares/voytrail.png', price: '12€' },
  ];

  return (
    <div className="w-full">
      <div className="max-w-6xl mx-auto my-20">
        <h2 className="text-3xl font-bold tracking-tight text-black mb-6">Compare Voytrail with Others</h2>

        {/* Comparison Table */}
        <div className="rounded-4xl overflow-hidden border-2 border-gray-200">
          <div className="overflow-x-auto">
            <table className="w-full">
              {/* Header with Logos */}
              <thead>
                <tr>
                  <th className="text-left w-1/4"></th>
                  {platforms.map((platform) => (
                    <th key={platform.key} className="text-center">
                      <div className="flex flex-col items-center gap-3 bg-gray-50">
                        <Image
                          src={platform.image}
                          alt={platform.name}
                          width={240}
                          height={120}
                          className="object-contain"
                        />
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>

              {/* Features */}
              <tbody>
                {comparison.map((row, rowIndex) => (
                  <tr key={rowIndex} className="border-t border-gray-200 hover:bg-gray-100 transition-colors">
                    <td className="py-5 px-4 text-left font-semibold text-gray-700 bg-gray-50">{row.feature}</td>
                    {platforms.map((platform) => (
                      <td key={platform.key} className="py-5 px-4 text-center">
                        {row[platform.key as keyof typeof row] ? (
                          <Icon icon="mdi:check-circle" width={28} height={28} className="text-green-600 mx-auto" />
                        ) : (
                          <Icon icon="mdi:close-circle" width={28} height={28} className="text-red-600 mx-auto" />
                        )}
                      </td>
                    ))}
                  </tr>
                ))}

                {/* Pricing Row */}
                <tr className="border-t border-gray-200 bg-gray-50 font-bold">
                  <td className="py-6 px-4 text-left text-gray-800">Pricing (€/month)</td>
                  {platforms.map((platform) => (
                    <td key={platform.key} className="py-4 px-4 text-center font-bold tracking-tight text-3xl text-gray-700">
                      {platform.price}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
