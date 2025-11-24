import React from 'react';
import Image from 'next/image';
import { Icon } from '@iconify/react';
import taplink from '@/assets/images/compares/taplink.png';
import beacons from '@/assets/images/compares/beacons.png';
import linktree from '@/assets/images/compares/linktree.png';
import pallyy from '@/assets/images/compares/pallyy.png';
import voytrail from '@/assets/images/compares/voytrail.png';

export default function Compares() {
  // Comparison data configuration
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

  // Platform comparison data
  const platforms = [
    { key: 'taplink', name: 'Taplink', image: taplink, price: '6€' },
    { key: 'beacons', name: 'Beacons', image: beacons, price: '25€' },
    { key: 'linktree', name: 'Linktree', image: linktree, price: '13€' },
    { key: 'pallyy', name: 'Pallyy', image: pallyy, price: '25€' },
    { key: 'voytrail', name: 'VoyTrail', image: voytrail, price: '12€' },
  ];

  // Reusable class strings
  const containerClasses = 'w-full';
  const wrapperClasses = 'mx-auto my-20 max-w-6xl';
  const headingClasses = 'mb-6 text-3xl font-bold tracking-tight text-zinc-900';
  const tableContainerClasses = 'overflow-hidden rounded-4xl border-2 border-zinc-200';

  return (
    <div className={containerClasses}>
      <div className={wrapperClasses}>
        <h2 className={headingClasses}>Compare Voytrail with Others</h2>

        {/* Comparison Table */}
        <div className={tableContainerClasses}>
          <div className="overflow-x-auto">
            <table className="w-full">
              {/* Header with Logos */}
              <thead>
                <tr>
                  <th className="w-1/4 text-left"></th>
                  {platforms.map((platform) => (
                    <th key={platform.key} className="text-center">
                      <div className="flex flex-col items-center gap-3 bg-zinc-50">
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

              {/* Features comparison rows */}
              <tbody>
                {comparison.map((row, rowIndex) => (
                  <tr
                    key={rowIndex}
                    className="border-t border-zinc-200 transition-colors duration-300 hover:bg-zinc-100"
                  >
                    <td className="bg-zinc-50 px-4 py-5 text-left font-semibold text-zinc-700">{row.feature}</td>
                    {platforms.map((platform) => (
                      <td key={platform.key} className="px-4 py-5 text-center">
                        {row[platform.key as keyof typeof row] ? (
                          <Icon icon="mdi:check-circle" width={28} height={28} className="mx-auto text-green-600" />
                        ) : (
                          <Icon icon="mdi:close-circle" width={28} height={28} className="mx-auto text-red-600" />
                        )}
                      </td>
                    ))}
                  </tr>
                ))}

                {/* Pricing row */}
                <tr className="border-t border-zinc-200 bg-zinc-50 font-bold">
                  <td className="px-4 py-6 text-left text-zinc-800">Pricing (€/month)</td>
                  {platforms.map((platform) => (
                    <td
                      key={platform.key}
                      className="px-4 py-4 text-center text-3xl font-bold tracking-tight text-zinc-700"
                    >
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
