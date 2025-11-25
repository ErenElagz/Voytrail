'use client';

import React from 'react';
import { Icon } from '@iconify/react';
import { Footer, NavBar } from '@/components';

export default function TermsOfService() {
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
      icon: 'mdi:check-circle',
      title: '1. Acceptance of Terms',
      content: [
        'By accessing and using Voytrail, you accept and agree to be bound by the terms and provision of this agreement.',
        'If you do not agree to abide by the above, please do not use this service. We reserve the right to modify these terms at any time without notice.',
      ],
    },
    {
      icon: 'mdi:account-lock',
      title: '2. User Accounts and Responsibilities',
      content: [
        'When you create an account with Voytrail, you must provide accurate, complete, and current information.',
        'You are responsible for:',
        [
          'Maintaining the confidentiality of your password and account information',
          'All activities that occur under your account',
          'Notifying us immediately of any unauthorized use of your account',
          'Complying with all applicable laws and regulations',
        ],
      ],
    },
    {
      icon: 'mdi:copyright',
      title: '3. Intellectual Property Rights',
      content: [
        'Voytrail and its content, features, and functionality are owned by Voytrail, its licensors, or other providers of such material.',
        'You may not reproduce, distribute, transmit, modify, or create derivative works without our prior written consent. All intellectual property rights are reserved.',
      ],
    },
    {
      icon: 'mdi:alert-circle',
      title: '4. User Conduct and Restrictions',
      content: [
        'You agree not to use Voytrail for any unlawful or prohibited purpose. Specifically, you agree not to:',
        [
          "Engage in any conduct that restricts others' use or enjoyment of the service",
          'Harass, abuse, or harm another person',
          'Transmit obscene, vulgar, or offensive content',
          'Attempt to gain unauthorized access to our systems',
          'Interfere with the proper functioning of the service',
          'Violate any applicable laws or regulations',
        ],
      ],
    },
    {
      icon: 'mdi:credit-card',
      title: '5. Payment Terms',
      content: [
        'If you subscribe to a paid plan, you agree to pay all charges as described in the pricing information at the time of purchase.',
        'Billing is processed automatically at the frequency you select (monthly, annually, etc.). You may cancel your subscription at any time, but no refunds will be issued for partial subscription periods.',
      ],
    },
    {
      icon: 'mdi:delete-alert',
      title: '6. Termination',
      content: [
        'We reserve the right to terminate or suspend your account and access to Voytrail at any time, with or without cause.',
        'Causes for termination include violation of these Terms of Service, non-payment, or any behavior we deem harmful to the service or other users.',
      ],
    },
    {
      icon: 'mdi:information-outline',
      title: '7. Disclaimers',
      content: [
        'Voytrail is provided on an "AS IS" and "AS AVAILABLE" basis without any warranties of any kind, either express or implied.',
        'We disclaim all warranties including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, and non-infringement.',
      ],
    },
    {
      icon: 'mdi:shield-alert',
      title: '8. Limitation of Liability',
      content: [
        'In no event shall Voytrail be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use the service.',
        'Our total liability for any claim arising from these Terms of Service shall not exceed the amount you paid for using our service.',
      ],
    },
    {
      icon: 'mdi:link-variant',
      title: '9. Third-Party Links and Services',
      content: [
        'Voytrail may contain links to third-party websites and services. We are not responsible for the content, accuracy, or practices of these external sites.',
        'Your access to and use of third-party services are governed by their respective terms and policies, not these Terms of Service.',
      ],
    },
    {
      icon: 'mdi:pencil',
      title: '10. Modifications to Service',
      content: [
        'We reserve the right to modify, suspend, or discontinue any part of the service at any time without notice or liability.',
        'We are not liable to you or any third party for any modification, suspension, or discontinuance of the service.',
      ],
    },
    {
      icon: 'mdi:file-upload',
      title: '11. User-Generated Content',
      content: [
        'You retain all rights to any content you upload or create using Voytrail ("User Content").',
        'By uploading User Content, you grant Voytrail a worldwide, non-exclusive license to use, reproduce, and distribute your content for the purpose of providing our services.',
      ],
    },
    {
      icon: 'mdi:email-multiple',
      title: '12. Contact Information',
      content: [
        'For questions or concerns regarding these Terms of Service, please contact us:',
        ['Email: legal@voytrail.com', 'Address: 123 Main Street, City, Country', 'Phone: +1 (555) 123-4567'],
      ],
    },
  ];

  return (
    <div className={containerClasses}>
      <NavBar />
      <div className={wrapperClasses}>
        {/* Header */}
        <h1 className={headingClasses}>Terms of Service</h1>
        <p className={lastUpdatedClasses}>Last updated: December 2025</p>

        {/* Intro Banner */}
        <div className="mb-12 rounded-3xl border-2 border-sky-200 bg-sky-50 p-8">
          <div className="flex items-start gap-4">
            <Icon icon="mdi:file-document" width={32} height={32} className={sectionIconClasses} />
            <div>
              <h2 className="mb-2 text-xl font-bold text-zinc-900">Agreement to Our Terms</h2>
              <p className="text-zinc-700">
                These Terms of Service govern your use of Voytrail and constitute a legally binding agreement between
                you and our company. Please read carefully before proceeding.
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
            <h3 className="mb-3 text-2xl font-bold text-zinc-900">Questions About Our Terms?</h3>
            <p className="mb-6 text-zinc-700">
              If you have any questions or concerns about our Terms of Service, please feel free to reach out to our
              legal team.
            </p>
            <a
              href="mailto:legal@voytrail.com"
              className="inline-block rounded-2xl bg-sky-700 px-8 py-3 font-bold text-white transition-colors duration-300 hover:bg-sky-800"
            >
              Contact Legal Team
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
