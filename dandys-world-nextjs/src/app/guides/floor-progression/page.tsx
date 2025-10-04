'use client'

import React from 'react';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Floor Progression Guide',
  description: "Learn how to pace your floor objectives, unlock requirements, and upgrade routes in Dandy's World.",
};

const FloorProgressionGuide: React.FC = () => {
  return (
    <>

      <Navigation />

      <main className="bg-gray-900 min-h-screen text-white pt-16">
        <section className="bg-gradient-to-b from-purple-900 via-gray-900 to-gray-900 py-16 border-b border-gray-800">
          <div className="max-w-4xl mx-auto px-6 text-center space-y-4">
            <h1 className="text-4xl font-extrabold">Floor Progression Guide</h1>
            <p className="text-lg text-gray-300">
              We're regrouping this guide in English. A refreshed breakdown covering route planning, capsule farming, and
              late-floor prep is on the way.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-6 py-12 space-y-6 text-gray-300">
          <p>
            Until the full rewrite lands, rely on the Progress Tracker to set unlock goals, and check the Twisted Guide for
            floor-specific threat intel.
          </p>
          <p>
            Need something specific? Drop a note via the feedback button and we will prioritise the sections you care about
            first.
          </p>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default FloorProgressionGuide;
