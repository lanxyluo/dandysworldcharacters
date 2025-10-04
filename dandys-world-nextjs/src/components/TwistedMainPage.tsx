import React, { useState } from 'react';
import TwistedSearch from './TwistedSearch';
import TwistedSurvivalGuide from './TwistedSurvivalGuide';

const TwistedMainPage: React.FC = () => {
  const [selectedTwistedId, setSelectedTwistedId] = useState<string | null>(null);
  const [activeView, setActiveView] = useState<'search' | 'guide'>('search');

  const handleSelectTwisted = (twistedId: string) => {
    setSelectedTwistedId(twistedId);
    setActiveView('guide');
  };

  const handleBackToSearch = () => {
    setActiveView('search');
    setSelectedTwistedId(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">Translation pending<div className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-gray-800">Twisted Survival Guide</h1>
              <div className="flex space-x-2">
                <button
                  onClick={() => setActiveView('search')}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    activeView === 'search'
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  🔍 Search Strategies
                </button>
                {selectedTwistedId && (
                  <button
                    onClick={() => setActiveView('guide')}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                      activeView === 'guide'
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    📖 View Guide
                  </button>
                )}
              </div>
            </div>
            
            {activeView === 'guide' && selectedTwistedId && (
              <button
                onClick={handleBackToSearch}
                className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
              >
                ← Back to Search
              </button>
            )}
          </div>
        </div>
      </div>Translation pending<div className="py-6">
        {activeView === 'search' && (
          <TwistedSearch onSelectTwisted={handleSelectTwisted} />
        )}
        
        {activeView === 'guide' && selectedTwistedId && (
          <TwistedSurvivalGuide twistedId={selectedTwistedId} />
        )}
      </div>Translation pending<div className="bg-white border-t mt-12">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">About This Guide</h3>
              <p className="text-sm text-gray-600">
                Comprehensive survival strategies and tactics for surviving encounters with Twisted entities. 
                Includes detailed audio recognition, lethal combination warnings, and priority target systems.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">Key Features</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Detailed survival strategies (3-5 per entity)</li>
                <li>• Audio recognition system</li>
                <li>• Lethal combination warnings</li>
                <li>• Priority target system</li>
                <li>• Advanced search functionality</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">Quick Tips</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Use the search to find specific scenarios</li>
                <li>• Check audio cues for early detection</li>
                <li>• Avoid lethal combinations at all costs</li>
                <li>• Focus on priority targets first</li>
                <li>• Practice strategies in safe environments</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TwistedMainPage;
