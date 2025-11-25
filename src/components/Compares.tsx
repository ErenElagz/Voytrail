import React from 'react';
import Image from 'next/image';
import { Icon } from '@iconify/react';
import taplink from '@/assets/images/compares/taplink.png';
import beacons from '@/assets/images/compares/beacons.png';
import linktree from '@/assets/images/compares/linktree.png';
import bitly from '@/assets/images/compares/bitly.png';
import voytrail from '@/assets/images/compares/voytrail.png';

export default function Compares() {
  // Comparison data configuration
  const comparison = [
    {
      feature: 'Free Usage Option',
      tooltip: 'Start for free without payment to test the service',
      taplink: true,
      beacons: true,
      linktree: true,
      bitly: true,
      voytrail: true,
    },
    {
      feature: 'Accommodation-Specific Modules',
      tooltip:
        'Specialized modules for accommodation properties with guest manuals, housing info, and check-in features',
      taplink: false,
      beacons: false,
      linktree: false,
      bitly: false,
      voytrail: true,
    },

    {
      feature: 'Event/Calendar Cards',
      tooltip: 'Display event and calendar data with customized cards for property-specific information',
      taplink: false,
      beacons: false,
      linktree: false,
      bitly: false,
      voytrail: true,
    },
    {
      feature: 'Upselling Modules',
      tooltip: 'Monetize your platform by offering additional products and services',
      taplink: false,
      beacons: true,
      linktree: true,
      bitly: false,
      voytrail: true,
    },
    {
      feature: 'Tabbed Content Support',
      tooltip: 'Organize complex content into tabs for better presentation and user experience',
      taplink: false,
      beacons: true,
      linktree: true,
      bitly: false,
      voytrail: true,
    },
    {
      feature: 'Advanced Analytics Support',
      tooltip: 'Track user behavior, conversions, and performance metrics in real-time',
      taplink: false,
      beacons: true,
      linktree: true,
      bitly: false,
      voytrail: true,
    },
  ];
  // Platform comparison data
  const platforms = [
    { key: 'taplink', name: 'Taplink', image: taplink, price: '12€/mo' },
    { key: 'bitly', name: 'bitly', image: bitly, price: '99€/mo' },
    { key: 'beacons', name: 'Beacons', image: beacons, price: '26€/mo' },
    { key: 'linktree', name: 'Linktree', image: linktree, price: '32€/mo' },
    { key: 'voytrail', name: 'VoyTrail', image: voytrail, price: '13€/mo' },
  ];

  // Reusable class strings
  const containerClasses = 'w-full';
  const wrapperClasses = 'mx-auto my-20 max-w-6xl px-4';
  const headingClasses = 'mb-6 text-3xl font-bold tracking-tight text-zinc-900';
  const tableContainerClasses = 'overflow-hidden rounded-4xl border-2 border-zinc-200 shadow-lg';

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
                      <div className="flex flex-col items-center">
                        <Image
                          src={platform.image}
                          alt={platform.name}
                          width={240}
                          height={120}
                          className="w-16 sm:w-auto"
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
                    <td className="group relative bg-zinc-50 px-2 py-3 sm:px-4 sm:py-5 text-left font-semibold text-zinc-500">
                      <div className="flex items-center gap-3 underline">
                        <span className="text-sm sm:text-base">{row.feature}</span>
                        <div className="relative ml-auto flex items-center ">
                          <Icon
                            icon="mdi:help-circle-outline"
                            width={20}
                            height={20}
                            className="cursor-help text-zinc-500"
                          />
                          <div className="absolute bottom-full left-0 z-50 mb-2 hidden whitespace-normal rounded-lg bg-zinc-800 px-3 py-2 text-xs text-white group-hover:block w-80 shadow-xl">
                            {row.tooltip}
                            <div className="absolute left-4 top-full border-4 border-transparent border-t-zinc-800"></div>
                          </div>
                        </div>
                      </div>
                    </td>
                    {platforms.map((platform) => (
                      <td key={platform.key} className="px-2 py-3 sm:px-4 sm:py-5 text-center">
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
                  <td className="px-2 py-3 sm:px-4 sm:py-6 text-left text-zinc-800">Pricing</td>
                  {platforms.map((platform) => (
                    <td
                      key={platform.key}
                      className="px-2 py-3 sm:px-4 sm:py-4 text-center text-xl sm:text-3xl font-bold tracking-tight text-zinc-700"
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
