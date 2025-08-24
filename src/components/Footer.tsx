import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-bg-secondary py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-rainbow-1 to-rainbow-5 rounded-lg flex items-center justify-center font-bold">
                DW
              </div>
              <span className="text-xl font-bold">Dandy's World Characters</span>
            </div>
            <p className="text-text-secondary mb-4">
              The ultimate resource for Dandy's World players. Stay updated with the latest character information, strategies, and community insights.
            </p>
            <p className="text-sm text-text-secondary">
              © 2025 DandysWorldCharacters.com - Not affiliated with BlushCrunch Studio
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-text-secondary">
              <li>
                <Link to="/" className="hover:text-accent-main transition-colors flex items-center">
                  🏠 Browse Characters
                </Link>
              </li>
              <li>
                <Link to="/compare" className="hover:text-accent-main transition-colors flex items-center">
                  ⚖️ Compare & Plan
                </Link>
              </li>
              <li>
                <Link to="/calculator" className="hover:text-accent-main transition-colors flex items-center">
                  🧮 Calculate Resources
                </Link>
              </li>
              <li>
                <Link to="/guides/game-mechanics" className="hover:text-accent-main transition-colors flex items-center">
                  📚 Learn Strategies
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Advanced Tools</h3>
            <ul className="space-y-2 text-text-secondary">
              <li>
                <Link to="/trinket-optimizer" className="hover:text-accent-main transition-colors flex items-center">
                  ⚡ Trinket Optimizer
                </Link>
              </li>
              <li>
                <Link to="/twisted-guide" className="hover:text-accent-main transition-colors flex items-center">
                  🚨 Twisted Guide
                </Link>
              </li>
              <li>
                <Link to="/floor-predictor" className="hover:text-accent-main transition-colors flex items-center">
                  🏢 Floor Predictor
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
