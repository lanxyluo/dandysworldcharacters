import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation: React.FC = () => {
  const location = useLocation();
  const [isToolsOpen, setIsToolsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const isToolsActive = () => {
    return location.pathname === '/trinket-optimizer' || location.pathname === '/twisted-guide';
  };

  const mainMenuItems = [
    { name: 'Characters', href: '/characters', icon: '👥' },
    { name: 'Floor Calculator', href: '/floor-predictor', icon: '🏢' },
    { name: 'Compare', href: '/compare', icon: '⚖️' },
    { name: 'Calculator', href: '/calculator', icon: '🧮' },
    { name: 'Tools', href: '#', icon: '🔧' },
    { name: 'Guides', href: '/guides/game-mechanics', icon: '📚' }
  ];

  const toolsMenuItems = [
    { name: 'Trinket Optimizer', href: '/trinket-optimizer', icon: '⚡' },
    { name: 'Twisted Guide', href: '/twisted-guide', icon: '🚨' }
  ];

  const toggleTools = () => {
    setIsToolsOpen(!isToolsOpen);
  };

  const closeTools = () => {
    setIsToolsOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="fixed top-0 w-full z-50 glass-effect">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-rainbow-1 to-rainbow-5 rounded-lg flex items-center justify-center font-bold text-lg">
                DW
              </div>
              <div>
                <h1 className="text-xl font-bold">Dandy's World</h1>
                <p className="text-xs text-text-secondary">Characters Database</p>
              </div>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {mainMenuItems.map((item) => {
              if (item.name === 'Tools') {
                return (
                  <div key={item.name} className="relative">
                    <button
                      onClick={toggleTools}
                      onBlur={() => setTimeout(closeTools, 150)}
                      className={`flex items-center space-x-2 hover:text-accent-main transition-colors ${
                        isToolsActive() ? 'text-accent-main' : ''
                      }`}
                    >
                      <span className="text-lg">{item.icon}</span>
                      <span>{item.name}</span>
                      <svg 
                        className={`w-4 h-4 transition-transform ${isToolsOpen ? 'rotate-180' : ''}`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                      </svg>
                    </button>
                    
                    {/* Dropdown Menu */}
                    {isToolsOpen && (
                      <div className="absolute top-full left-0 mt-2 w-48 bg-bg-card border border-gray-600 rounded-lg shadow-xl z-50">
                        <div className="py-2">
                          {toolsMenuItems.map((toolItem) => (
                            <Link
                              key={toolItem.name}
                              to={toolItem.href}
                              onClick={closeTools}
                              className={`flex items-center space-x-3 px-4 py-2 text-sm hover:bg-bg-secondary transition-colors ${
                                isActive(toolItem.href) ? 'text-accent-main bg-accent-main/10' : 'text-text-secondary'
                              }`}
                            >
                              <span className="text-lg">{toolItem.icon}</span>
                              <span>{toolItem.name}</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }
              
              return (
                <Link 
                  key={item.name}
                  to={item.href} 
                  className={`flex items-center space-x-2 hover:text-accent-main transition-colors ${
                    isActive(item.href) ? 'text-accent-main' : ''
                  } ${
                    item.name === 'Calculator' 
                      ? 'hover:text-purple-300 hover:scale-105 transform transition-all duration-200' 
                      : ''
                  }`}
                >
                  <span className={`text-lg ${item.name === 'Calculator' ? 'animate-pulse' : ''}`}>
                    {item.icon}
                  </span>
                  <span>{item.name}</span>
                </Link>
              );
                        })}
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-lg hover:bg-bg-card transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-600 bg-bg-card">
            <div className="px-4 py-2 space-y-1">
              {mainMenuItems.map((item) => {
                if (item.name === 'Tools') {
                  return (
                    <div key={item.name}>
                      <div className="px-3 py-2 text-xs font-medium text-text-secondary uppercase tracking-wider">
                        Tools
                      </div>
                      {toolsMenuItems.map((toolItem) => (
                        <Link
                          key={toolItem.name}
                          to={toolItem.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={`flex items-center space-x-3 px-6 py-2 rounded-lg text-sm transition-colors ${
                            isActive(toolItem.href) 
                              ? 'text-accent-main bg-accent-main/10' 
                              : 'text-text-secondary hover:bg-bg-secondary'
                          }`}
                        >
                          <span className="text-lg">{toolItem.icon}</span>
                          <span>{toolItem.name}</span>
                        </Link>
                      ))}
                    </div>
                  );
                }
                
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm transition-colors ${
                      isActive(item.href) 
                        ? 'text-accent-main bg-accent-main/10' 
                        : 'text-text-secondary hover:bg-bg-secondary'
                    }`}
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
