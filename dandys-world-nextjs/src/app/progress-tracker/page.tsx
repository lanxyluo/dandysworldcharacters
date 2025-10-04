'use client'

import React from 'react';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ProgressTrackerDashboard from '@/components/progress-tracker/ProgressTracker';

export const metadata: Metadata = {
  title: 'Progress Tracker',
  description: 'Track your research progress and unlock timeline in Dandy's World',
};

const ProgressTrackerPage: React.FC = () => {

  const softwareSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: "Dandy's World Progress Tracker",
    description: 'Track Twisted research progress and optimize unlock planning.',
    applicationCategory: 'GameApplication',
    operatingSystem: 'Web Browser',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
  };

  return (
    <>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />

      <Navigation />

      <main className="pt-16 bg-gray-900 text-white">
        <ProgressTrackerDashboard />
      </main>

      <Footer />
    </>
  );
};

export default ProgressTrackerPage;
