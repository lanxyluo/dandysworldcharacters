import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation: React.FC = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const menuItems = [
    { name: 'Characters', href: '/', icon: '👥' },
    { name: 'Compare', href: '/compare', icon: '⚖️' },
    { name: 'Calculator', href: '/calculator', icon: '🧮' },
    { name: 'Community', href: '/community', icon: '💬' }
  ];

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
          
          <div className="hidden md:flex items-center space-x-6">
            {menuItems.map((item) => (
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
            ))}
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
