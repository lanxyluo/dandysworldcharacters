import React from 'react';
import { Link } from 'react-router-dom';
import ScrollToTopLink from './ScrollToTopLink';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bg-card border-t border-border-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-text-primary mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <ScrollToTopLink to="/" className="text-text-secondary hover:text-accent-main transition-colors">
                  🏠 Browse Characters
                </ScrollToTopLink>
              </li>
              <li>
                <ScrollToTopLink to="/compare" className="text-text-secondary hover:text-accent-main transition-colors">
                  ⚖️ Compare & Plan
                </ScrollToTopLink>
              </li>
              <li>
                <ScrollToTopLink to="/calculator" className="text-text-secondary hover:text-accent-main transition-colors">
                  🧮 Calculate Resources
                </ScrollToTopLink>
              </li>
              <li>
                <ScrollToTopLink to="/guides/game-mechanics" className="text-text-secondary hover:text-accent-main transition-colors">
                  📚 Learn Strategies
                </ScrollToTopLink>
              </li>
            </ul>
          </div>

          {/* Advanced Tools */}
          <div>
            <h3 className="text-lg font-semibold text-text-primary mb-4">Advanced Tools</h3>
            <ul className="space-y-2">
              <li>
                <ScrollToTopLink to="/trinket-optimizer" className="text-text-secondary hover:text-accent-main transition-colors">
                  ⚡ Trinket Optimizer
                </ScrollToTopLink>
              </li>
              <li>
                <ScrollToTopLink to="/twisted-guide" className="text-text-secondary hover:text-accent-main transition-colors">
                  🚨 Twisted Guide
                </ScrollToTopLink>
              </li>
              <li>
                <ScrollToTopLink to="/floor-predictor" className="text-text-secondary hover:text-accent-main transition-colors">
                  🏢 Floor Predictor
                </ScrollToTopLink>
              </li>
            </ul>
          </div>

          {/* Game Guides */}
          <div>
            <h3 className="text-lg font-semibold text-text-primary mb-4">Game Guides</h3>
            <ul className="space-y-2">
              <li>
                <ScrollToTopLink to="/guides/beginner-tips" className="text-text-secondary hover:text-accent-main transition-colors">
                  🌟 Beginner Tips
                </ScrollToTopLink>
              </li>
              <li>
                <ScrollToTopLink to="/guides/skill-check-guide" className="text-text-secondary hover:text-accent-main transition-colors">
                  🎯 Skill Check Guide
                </ScrollToTopLink>
              </li>
              <li>
                <ScrollToTopLink to="/guides/stamina-management" className="text-text-secondary hover:text-accent-main transition-colors">
                  ⚡ Stamina Management
                </ScrollToTopLink>
              </li>
              <li>
                <ScrollToTopLink to="/guides/team-strategies" className="text-text-secondary hover:text-accent-main transition-colors">
                  👥 Team Strategies
                </ScrollToTopLink>
              </li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="text-lg font-semibold text-text-primary mb-4">About</h3>
            <p className="text-text-secondary text-sm mb-4">
              Comprehensive database and tools for Dandys World characters, helping players optimize their gameplay and character progression.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-text-secondary hover:text-accent-main transition-colors">
                <span className="sr-only">Discord</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.0189 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1568 2.4189Z"/>
                </svg>
              </a>
              <a href="#" className="text-text-secondary hover:text-accent-main transition-colors">
                <span className="sr-only">GitHub</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border-primary">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-text-secondary text-sm">
              © {currentYear} Dandys World Characters. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <ScrollToTopLink to="/privacy" className="text-text-secondary hover:text-accent-main transition-colors text-sm">
                Privacy Policy
              </ScrollToTopLink>
              <ScrollToTopLink to="/terms" className="text-text-secondary hover:text-accent-main transition-colors text-sm">
                Terms of Service
              </ScrollToTopLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
