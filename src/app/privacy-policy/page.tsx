'use client';

import React from 'react';
import { Icon } from '@iconify/react';
import { Footer, NavBar } from '@/components';

export default function PrivacyPolicy() {
  const containerClasses = 'w-full min-h-screen bg-white jsutify-center font-sans items-center flex flex-col';
  const wrapperClasses = 'mx-auto max-w-4xl py-10';
  const headingClasses = 'mb-4 text-5xl font-black tracking-tight text-zinc-900';
  const lastUpdatedClasses = 'mb-8 text-lg text-zinc-600';
  const sectionClasses = 'mb-12';
  const sectionTitleClasses = 'mb-6 text-2xl font-bold text-zinc-900 flex items-center gap-3';
  const sectionIconClasses = 'text-sky-700';
  const textClasses = 'mb-4 text-zinc-700 leading-relaxed';
  const listItemClasses = 'mb-3 ml-6 flex items-start gap-3 text-zinc-700';

  const sections = [
    {
      icon: 'mdi:information',
      title: '1. Introduction',
      content: [
        'Welcome to Voytrail ("we", "our", or "us"). We are committed to protecting your privacy and ensuring you have a positive experience on our platform.',
        'This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, application, and related services.',
      ],
    },
    {
      icon: 'mdi:database',
      title: '2. Information We Collect',
      content: [
        'We collect information you provide directly:',
        [
          'Account information (name, email, password)',
          'Profile information (company name, contact details)',
          'Payment and billing information',
          'Communications you send us',
          'Feedback and support requests',
        ],
        'We automatically collect information about your device and usage:',
        [
          'Device information (type, OS, browser)',
          'Access logs and timestamps',
          'Pages visited and features used',
          'IP address and general location',
          'Cookies and similar tracking technologies',
        ],
      ],
    },
    {
      icon: 'mdi:shield-check',
      title: '3. How We Use Your Information',
      content: [
        'We use the information we collect for the following purposes:',
        [
          'Providing and maintaining our services',
          'Processing transactions and sending notifications',
          'Improving and personalizing your experience',
          'Sending marketing communications (with your consent)',
          'Conducting analytics and research',
          'Detecting and preventing fraud',
          'Complying with legal obligations',
        ],
      ],
    },
    {
      icon: 'mdi:share-variant',
      title: '4. Information Sharing and Disclosure',
      content: [
        'We do not sell your personal information. We may share your information in these circumstances:',
        [
          'With service providers who assist in our operations',
          'When required by law or to protect our rights',
          'In case of merger, acquisition, or sale of assets',
          'With your explicit consent',
          'To prevent fraud or security issues',
        ],
      ],
    },
    {
      icon: 'mdi:lock',
      title: '5. Data Security',
      content: [
        'We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.',
        'However, no method of transmission over the Internet is 100% secure. We cannot guarantee absolute security, but we strive to use commercially acceptable means.',
      ],
    },
    {
      icon: 'mdi:cookie',
      title: '6. Cookies and Tracking',
      content: [
        'We use cookies and similar tracking technologies to enhance your experience. You can control cookie preferences through your browser settings.',
        'Types of cookies we use:',
        [
          'Essential cookies (functionality)',
          'Analytics cookies (usage patterns)',
          'Marketing cookies (personalization)',
          'Session cookies (temporary)',
        ],
      ],
    },
    {
      icon: 'mdi:account-clock',
      title: '7. Data Retention',
      content: [
        'We retain your personal information for as long as necessary to provide our services and fulfill the purposes outlined in this policy.',
        'You can request deletion of your account and associated data at any time, subject to legal retention requirements.',
      ],
    },
    {
      icon: 'mdi:earth',
      title: '8. International Transfers',
      content: [
        'Your information may be transferred to and maintained in countries other than your country of residence.',
        'These countries may have data protection laws that differ from your country. By using Voytrail, you consent to such transfers.',
      ],
    },
    {
      icon: 'mdi:human-male-board',
      title: '9. Your Rights',
      content: [
        'Depending on your location, you may have certain rights regarding your personal information:',
        [
          'Right to access your personal data',
          'Right to correct inaccurate information',
          'Right to request deletion of your data',
          'Right to opt-out of marketing communications',
          'Right to data portability',
          'Right to withdraw consent',
        ],
      ],
    },
    {
      icon: 'mdi:file-document',
      title: "10. Children's Privacy",
      content: [
        'Voytrail is not intended for children under 13. We do not knowingly collect personal information from children under 13.',
        'If we become aware that a child under 13 has provided us with personal information, we will delete such information promptly.',
      ],
    },
    {
      icon: 'mdi:email-edit',
      title: '11. Changes to This Policy',
      content: [
        'We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the updated policy on our website.',
        'Your continued use of Voytrail following the posting of revised Privacy Policy means you accept and agree to the changes.',
      ],
    },
    {
      icon: 'mdi:contacts',
      title: '12. Contact Us',
      content: [
        'If you have questions about this Privacy Policy or our privacy practices, please contact us:',
        ['Email: privacy@voytrail.com', 'Address: 123 Main Street, City, Country', 'Phone: +1 (555) 123-4567'],
      ],
    },
  ];

  return (
    <div className={containerClasses}>
      <NavBar />
      <div className={wrapperClasses}>
        {/* Header */}
        <h1 className={headingClasses}>Privacy Policy</h1>
        <p className={lastUpdatedClasses}>Last updated: December 2025</p>

        {/* Intro Banner */}
        <div className="mb-12 rounded-3xl border-2 border-sky-200 bg-sky-50 p-8">
          <div className="flex items-start gap-4">
            <Icon icon="mdi:information-outline" width={32} height={32} className={sectionIconClasses} />
            <div>
              <h2 className="mb-2 text-xl font-bold text-zinc-900">Your Privacy Matters</h2>
              <p className="text-zinc-700">
                We are committed to transparency and protecting your personal information. This policy describes how we
                collect, use, and protect your data.
              </p>
            </div>
          </div>
        </div>

        {/* Sections */}
        {sections.map((section, index) => (
          <div key={index} className={sectionClasses}>
            <h2 className={sectionTitleClasses}>
              <Icon icon={section.icon} width={28} height={28} className={sectionIconClasses} />
              {section.title}
            </h2>

            {section.content.map((item, itemIndex) => {
              if (Array.isArray(item)) {
                return (
                  <div key={itemIndex}>
                    {item.map((listItem, listIndex) => (
                      <div key={listIndex} className={listItemClasses}>
                        <Icon
                          icon="mdi:check-circle"
                          width={20}
                          height={20}
                          className="mt-0.5 text-sky-600 flex-shrink-0"
                        />
                        <span>{listItem}</span>
                      </div>
                    ))}
                  </div>
                );
              }
              return (
                <p key={itemIndex} className={textClasses}>
                  {item}
                </p>
              );
            })}
          </div>
        ))}

        {/* Footer CTA */}
        <div className="mt-16 border-t-2 border-zinc-200 pt-12">
          <div className="rounded-3xl border-2 border-zinc-200 bg-zinc-50 p-8 text-center">
            <h3 className="mb-3 text-2xl font-bold text-zinc-900">Have Questions?</h3>
            <p className="mb-6 text-zinc-700">
              If you have concerns about our privacy practices, please don&apos;t hesitate to contact us.
            </p>
            <a
              href="mailto:privacy@voytrail.com"
              className="inline-block rounded-2xl bg-sky-700 px-8 py-3 font-bold text-white transition-colors duration-300 hover:bg-sky-800"
            >
              Contact Privacy Team
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
