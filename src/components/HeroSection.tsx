import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <div className="hero-gradient bg-clip-text text-transparent mb-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Dandy's World
          </h1>
          <h2 className="text-3xl md:text-4xl font-semibold">
            Characters Database
          </h2>
        </div>
        
        <p className="text-xl text-text-secondary mb-8 max-w-3xl mx-auto">
          The most comprehensive database for all Dandy's World characters. 
          Explore stats, abilities, unlock requirements, and build the perfect team.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
          <div className="glass-effect px-8 py-4 rounded-xl min-w-[160px]">
            <div className="text-3xl font-bold text-accent-main mb-1">36+</div>
            <div className="text-text-secondary text-sm">Total Characters</div>
          </div>
          <div className="glass-effect px-8 py-4 rounded-xl min-w-[160px]">
            <div className="text-3xl font-bold text-rainbow-3 mb-1">7</div>
            <div className="text-text-secondary text-sm">Main Characters</div>
          </div>
          <div className="glass-effect px-8 py-4 rounded-xl min-w-[160px]">
            <div className="text-3xl font-bold text-rainbow-2 mb-1">8</div>
            <div className="text-text-secondary text-sm">Event Characters</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
