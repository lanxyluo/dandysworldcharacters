import React from 'react';

const Navigation: React.FC = () => {
  return (
    <nav className="fixed top-0 w-full z-50 glass-effect">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-rainbow-1 to-rainbow-5 rounded-lg flex items-center justify-center font-bold text-lg">
              DW
            </div>
            <div>
              <h1 className="text-xl font-bold">Dandy's World</h1>
              <p className="text-xs text-text-secondary">Characters Database</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <a href="#characters" className="hover:text-accent-main transition-colors">Characters</a>
            <a href="#compare" className="hover:text-accent-main transition-colors">Compare</a>
            <a href="#guides" className="hover:text-accent-main transition-colors">Guides</a>
            <a href="#updates" className="hover:text-accent-main transition-colors">Updates</a>
          </div>
          
          <button className="md:hidden p-2 rounded-lg hover:bg-bg-card transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
