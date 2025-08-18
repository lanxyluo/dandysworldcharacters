import React from 'react';

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
              <li><a href="#characters" className="hover:text-accent-main transition-colors">All Characters</a></li>
              <li><a href="#main" className="hover:text-accent-main transition-colors">Main Characters</a></li>
              <li><a href="#guides" className="hover:text-accent-main transition-colors">Unlock Guides</a></li>
              <li><a href="#compare" className="hover:text-accent-main transition-colors">Character Compare</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Community</h3>
            <ul className="space-y-2 text-text-secondary">
              <li><a href="#" className="hover:text-accent-main transition-colors">Discord</a></li>
              <li><a href="#" className="hover:text-accent-main transition-colors">Reddit</a></li>
              <li><a href="#" className="hover:text-accent-main transition-colors">Updates</a></li>
              <li><a href="#" className="hover:text-accent-main transition-colors">Feedback</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
