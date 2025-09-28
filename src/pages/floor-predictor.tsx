import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

const FloorPredictor: React.FC = () => {
  return (
    <>
      <SEO
        title="Dandy's World Floor Predictor"
        description="Planning tool placeholder while the English rewrite is underway."
        keywords="dandys world, floor predictor"
        ogTitle="Dandy's World Floor Predictor"
        ogDescription="Plan your run floor-by-floor with new English content coming soon."
        canonical="https://dandysworldcharacters.com/floor-predictor"
        robots="noindex, follow"
      />

      <Navigation />

      <main className="bg-gray-900 min-h-screen text-white pt-16">
        <section className="max-w-4xl mx-auto px-6 py-16 text-center space-y-4">
          <h1 className="text-4xl font-extrabold">Floor Predictor</h1>
          <p className="text-lg text-gray-300">
            The original floor predictor is being translated and refreshed. Use the Progress Tracker for unlock pacing, and
            check back soon for the full tool.
          </p>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default FloorPredictor;
