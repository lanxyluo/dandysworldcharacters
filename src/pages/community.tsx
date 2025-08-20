import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const CommunityPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'discussions' | 'guides' | 'events'>('discussions');

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-bg-primary pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* 页面标题 */}
          <header className="text-center mb-12">
            <h1 className="text-4xl font-bold text-text-primary mb-4">
              Dandy's World Community
            </h1>
            <p className="text-xl text-text-secondary">
              Connect with other players, share strategies, and discover new content
            </p>
          </header>
          
          {/* 社区选项卡 */}
          <div className="flex justify-center mb-8">
            <div className="bg-bg-card rounded-lg p-1 flex space-x-1">
              <button 
                onClick={() => setActiveTab('discussions')} 
                className={`px-6 py-3 rounded-md font-medium transition-all duration-200 ${
                  activeTab === 'discussions' 
                    ? 'bg-accent-main text-white shadow-lg' 
                    : 'text-text-secondary hover:text-text-primary hover:bg-bg-secondary'
                }`}
              >
                💬 Discussions
              </button>
              <button 
                onClick={() => setActiveTab('guides')} 
                className={`px-6 py-3 rounded-md font-medium transition-all duration-200 ${
                  activeTab === 'guides' 
                    ? 'bg-accent-main text-white shadow-lg' 
                    : 'text-text-secondary hover:text-text-primary hover:bg-bg-secondary'
                }`}
              >
                📚 Guides
              </button>
              <button 
                onClick={() => setActiveTab('events')} 
                className={`px-6 py-3 rounded-md font-medium transition-all duration-200 ${
                  activeTab === 'events' 
                    ? 'bg-accent-main text-white shadow-lg' 
                    : 'text-text-secondary hover:text-text-primary hover:bg-bg-secondary'
                }`}
              >
                🎉 Events
              </button>
            </div>
          </div>
          
          {/* 社区内容区域 */}
          <div className="community-content">
            {activeTab === 'discussions' && (
              <div className="space-y-6">
                <div className="bg-bg-card rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-text-primary mb-4">Recent Discussions</h3>
                  <div className="space-y-4">
                    <div className="border-b border-gray-700 pb-4">
                      <h4 className="font-medium text-text-primary mb-2">Best character combinations for early game?</h4>
                      <p className="text-text-secondary text-sm mb-2">Started by Player123 • 2 hours ago • 15 replies</p>
                      <div className="flex items-center space-x-4 text-xs text-text-secondary">
                        <span>👥 45 views</span>
                        <span>💬 15 replies</span>
                        <span>👍 8 likes</span>
                      </div>
                    </div>
                    <div className="border-b border-gray-700 pb-4">
                      <h4 className="font-medium text-text-primary mb-2">How to optimize research progress efficiently?</h4>
                      <p className="text-text-secondary text-sm mb-2">Started by StrategyGuru • 1 day ago • 23 replies</p>
                      <div className="flex items-center space-x-4 text-xs text-text-secondary">
                        <span>👥 78 views</span>
                        <span>💬 23 replies</span>
                        <span>👍 12 likes</span>
                      </div>
                    </div>
                    <div className="border-b border-gray-700 pb-4">
                      <h4 className="font-medium text-text-primary mb-2">New character unlock strategies</h4>
                      <p className="text-text-secondary text-sm mb-2">Started by UnlockMaster • 3 days ago • 31 replies</p>
                      <div className="flex items-center space-x-4 text-xs text-text-secondary">
                        <span>👥 156 views</span>
                        <span>💬 31 replies</span>
                        <span>👍 25 likes</span>
                      </div>
                    </div>
                  </div>
                  <button className="mt-4 px-6 py-2 bg-accent-main text-white rounded-lg hover:bg-accent-main/80 transition-colors">
                    Start New Discussion
                  </button>
                </div>
              </div>
            )}
            
            {activeTab === 'guides' && (
              <div className="space-y-6">
                <div className="bg-bg-card rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-text-primary mb-4">Community Guides</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-bg-secondary rounded-lg p-4">
                      <h4 className="font-medium text-text-primary mb-2">Beginner's Guide to Dandy's World</h4>
                      <p className="text-text-secondary text-sm mb-3">Essential tips and strategies for new players</p>
                      <div className="flex items-center justify-between text-xs text-text-secondary">
                        <span>By Community</span>
                        <span>📖 Read Guide</span>
                      </div>
                    </div>
                    <div className="bg-bg-secondary rounded-lg p-4">
                      <h4 className="font-medium text-text-primary mb-2">Advanced Research Strategies</h4>
                      <p className="text-text-secondary text-sm mb-3">Optimize your research progress with expert tips</p>
                      <div className="flex items-center justify-between text-xs text-text-secondary">
                        <span>By ResearchPro</span>
                        <span>📖 Read Guide</span>
                      </div>
                    </div>
                    <div className="bg-bg-secondary rounded-lg p-4">
                      <h4 className="font-medium text-text-primary mb-2">Character Unlock Optimization</h4>
                      <p className="text-text-secondary text-sm mb-3">Best practices for unlocking characters efficiently</p>
                      <div className="flex items-center justify-between text-xs text-text-secondary">
                        <span>By UnlockMaster</span>
                        <span>📖 Read Guide</span>
                      </div>
                    </div>
                  </div>
                  <button className="mt-6 px-6 py-2 bg-accent-main text-white rounded-lg hover:bg-accent-main/80 transition-colors">
                    Submit Your Guide
                  </button>
                </div>
              </div>
            )}
            
            {activeTab === 'events' && (
              <div className="space-y-6">
                <div className="bg-bg-card rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-text-primary mb-4">Upcoming Events</h3>
                  <div className="space-y-4">
                    <div className="bg-bg-secondary rounded-lg p-4">
                      <h4 className="font-medium text-text-primary mb-2">Community Challenge Week</h4>
                      <p className="text-text-secondary text-sm mb-3">Join us for a week of challenges and rewards!</p>
                      <div className="flex items-center justify-between text-xs text-text-secondary">
                        <span>📅 Starts in 3 days</span>
                        <span>🎯 Join Event</span>
                      </div>
                    </div>
                    <div className="bg-bg-secondary rounded-lg p-4">
                      <h4 className="font-medium text-text-primary mb-2">Strategy Sharing Contest</h4>
                      <p className="text-text-secondary text-sm mb-3">Share your best strategies and win prizes</p>
                      <div className="flex items-center justify-between text-xs text-text-secondary">
                        <span>📅 Next week</span>
                        <span>🎯 Join Event</span>
                      </div>
                    </div>
                    <div className="bg-bg-secondary rounded-lg p-4">
                      <h4 className="font-medium text-text-primary mb-2">New Player Welcome Party</h4>
                      <p className="text-text-secondary text-sm mb-3">Special event for new community members</p>
                      <div className="flex items-center justify-between text-xs text-text-secondary">
                        <span>📅 This weekend</span>
                        <span>🎯 Join Event</span>
                      </div>
                    </div>
                  </div>
                  <button className="mt-6 px-6 py-2 bg-accent-main text-white rounded-lg hover:bg-accent-main/80 transition-colors">
                    View All Events
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CommunityPage;
