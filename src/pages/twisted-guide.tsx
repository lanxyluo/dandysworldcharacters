import React, { useState, useMemo } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import TwistedSearchAndFilter from '../components/TwistedSearchAndFilter';
import TwistedCard from '../components/TwistedCard';
import TwistedModal from '../components/TwistedModal';
import { twisted } from '../data/twisted';
import { Twisted } from '../types/twisted';

const TwistedGuidePage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentTypeFilter, setCurrentTypeFilter] = useState('all');
  const [currentDangerFilter, setCurrentDangerFilter] = useState('all');
  const [selectedTwisted, setSelectedTwisted] = useState<Twisted | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 筛选和搜索twisted实体
  const filteredTwisted = useMemo(() => {
    return twisted.filter(entity => {
      const matchesType = currentTypeFilter === 'all' || entity.type === currentTypeFilter;
      const matchesDanger = currentDangerFilter === 'all' || entity.dangerLevel === currentDangerFilter;
      const matchesSearch = entity.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          entity.description.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesType && matchesDanger && matchesSearch;
    });
  }, [searchTerm, currentTypeFilter, currentDangerFilter]);

  const handleTwistedClick = (twisted: Twisted) => {
    setSelectedTwisted(twisted);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedTwisted(null);
  };

  // 统计信息
  const stats = useMemo(() => {
    const total = twisted.length;
    const byType = twisted.reduce((acc, entity) => {
      acc[entity.type] = (acc[entity.type] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
    const byDanger = twisted.reduce((acc, entity) => {
      acc[entity.dangerLevel] = (acc[entity.dangerLevel] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    return { total, byType, byDanger };
  }, []);

  return (
    <>
      <SEO
        title="Twisted Survival Guide - Dandy's World Calculator"
        description="Comprehensive survival guide for all Twisted entities in Dandy's World. Learn identification, strategies, and survival tips."
        keywords="Dandy's World, twisted entities, survival guide, horror game, entity identification, survival strategies"
        ogTitle="Twisted Survival Guide"
        ogDescription="Master the art of survival against twisted entities"
        canonical="/twisted-guide"
      />
      <Navigation />
      
      <div className="min-h-screen bg-bg-primary pt-20">
        {/* 页面标题 */}
        <div className="text-center mb-12 px-4">
          <h1 className="text-5xl font-bold text-text-primary mb-4">
            🚨 Twisted Survival Guide 🚨
          </h1>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Master the art of survival against the twisted entities that lurk in the shadows. 
            Learn to identify, avoid, and survive encounters with these dangerous beings.
          </p>
        </div>

        {/* 统计信息 */}
        <div className="max-w-7xl mx-auto px-4 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-bg-card border border-gray-600 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-text-primary">{stats.total}</div>
              <div className="text-sm text-text-secondary">Total Entities</div>
            </div>
            <div className="bg-bg-card border border-gray-600 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-red-400">{stats.byDanger.extreme || 0}</div>
              <div className="text-sm text-text-secondary">Extreme Risk</div>
            </div>
            <div className="bg-bg-card border border-gray-600 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-orange-400">{stats.byDanger.high || 0}</div>
              <div className="text-sm text-text-secondary">High Risk</div>
            </div>
            <div className="bg-bg-card border border-gray-600 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-yellow-400">{stats.byDanger.medium || 0}</div>
              <div className="text-sm text-text-secondary">Medium Risk</div>
            </div>
          </div>
        </div>

        {/* 搜索和筛选 */}
        <TwistedSearchAndFilter
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          currentTypeFilter={currentTypeFilter}
          onTypeFilterChange={setCurrentTypeFilter}
          currentDangerFilter={currentDangerFilter}
          onDangerFilterChange={setCurrentDangerFilter}
        />
        
        {/* Twisted实体网格 */}
        <section className="px-4 pb-16">
          <div className="max-w-7xl mx-auto">
            {filteredTwisted.length > 0 ? (
              <>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-text-primary">
                    {filteredTwisted.length} Entity{filteredTwisted.length !== 1 ? 's' : ''} Found
                  </h2>
                  <div className="text-sm text-text-secondary">
                    Showing {filteredTwisted.length} of {twisted.length}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {filteredTwisted.map((entity) => (
                    <TwistedCard
                      key={entity.id}
                      twisted={entity}
                      onClick={() => handleTwistedClick(entity)}
                    />
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-text-primary mb-2">
                  No Entities Found
                </h3>
                <p className="text-text-secondary mb-6">
                  Try adjusting your search terms or filters to find what you're looking for.
                </p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setCurrentTypeFilter('all');
                    setCurrentDangerFilter('all');
                  }}
                  className="bg-accent-main hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition-colors"
                >
                  Clear All Filters
                </button>
              </div>
            )}
          </div>
        </section>

        {/* 生存提示 */}
        <section className="px-4 pb-16">
          <div className="max-w-4xl mx-auto">
            <div className="bg-bg-card border border-gray-600 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-text-primary mb-6 text-center">
                🛡️ General Survival Tips
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-green-400 mb-3">✅ Always Remember</h3>
                  <ul className="space-y-2 text-text-secondary">
                    <li>• Stay in well-lit areas when possible</li>
                    <li>• Move quietly and avoid unnecessary noise</li>
                    <li>• Trust your instincts - if something feels wrong, it probably is</li>
                    <li>• Keep track of your surroundings and escape routes</li>
                    <li>• Never engage unless absolutely necessary</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-red-400 mb-3">🚨 Never Do</h3>
                  <ul className="space-y-2 text-text-secondary">
                    <li>• Don't investigate strange sounds alone</li>
                    <li>• Don't touch or interact with unknown entities</li>
                    <li>• Don't split up from your group</li>
                    <li>• Don't ignore warning signs or feelings</li>
                    <li>• Don't panic - stay calm and think clearly</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Twisted详情模态框 */}
      <TwistedModal
        twisted={selectedTwisted}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
      
      <Footer />
    </>
  );
};

export default TwistedGuidePage;
