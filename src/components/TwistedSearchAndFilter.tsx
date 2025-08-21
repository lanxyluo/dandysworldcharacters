import React from 'react';

interface TwistedSearchAndFilterProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  currentTypeFilter: string;
  onTypeFilterChange: (filter: string) => void;
  currentDangerFilter: string;
  onDangerFilterChange: (filter: string) => void;
}

const TwistedSearchAndFilter: React.FC<TwistedSearchAndFilterProps> = ({
  searchTerm,
  onSearchChange,
  currentTypeFilter,
  onTypeFilterChange,
  currentDangerFilter,
  onDangerFilterChange
}) => {
  const typeFilters = [
    { key: 'all', label: 'All Types', icon: '🔮' },
    { key: 'hunter', label: 'Hunter', icon: '🏹' },
    { key: 'patrol', label: 'Patrol', icon: '👁️' },
    { key: 'special', label: 'Special', icon: '✨' },
    { key: 'boss', label: 'Boss', icon: '👑' }
  ];

  const dangerFilters = [
    { key: 'all', label: 'All Levels', icon: '📊' },
    { key: 'low', label: 'Low Risk', icon: '✅' },
    { key: 'medium', label: 'Medium Risk', icon: '⚠️' },
    { key: 'high', label: 'High Risk', icon: '🚨' },
    { key: 'extreme', label: 'Extreme Risk', icon: '💀' }
  ];

  return (
    <section className="px-4 mb-12">
      <div className="max-w-7xl mx-auto">
        <div className="glass-effect rounded-2xl p-6">
          {/* 搜索栏 */}
          <div className="mb-6">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search twisted entities..." 
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full bg-bg-card text-white px-4 py-3 pl-12 rounded-lg border border-gray-600 focus:border-accent-main focus:outline-none transition-colors"
              />
              <svg className="w-5 h-5 absolute left-4 top-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>
          </div>
          
          {/* 筛选按钮组 */}
          <div className="space-y-4">
            {/* 类型筛选 */}
            <div>
              <h3 className="text-sm font-medium text-text-secondary mb-3">Filter by Type</h3>
              <div className="flex flex-wrap gap-2">
                {typeFilters.map((filter) => (
                  <button
                    key={filter.key}
                    onClick={() => onTypeFilterChange(filter.key)}
                    className={`filter-btn ${currentTypeFilter === filter.key ? 'active' : ''}`}
                  >
                    <span className="mr-2">{filter.icon}</span>
                    {filter.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 危险等级筛选 */}
            <div>
              <h3 className="text-sm font-medium text-text-secondary mb-3">Filter by Danger Level</h3>
              <div className="flex flex-wrap gap-2">
                {dangerFilters.map((filter) => (
                  <button
                    key={filter.key}
                    onClick={() => onDangerFilterChange(filter.key)}
                    className={`filter-btn ${currentDangerFilter === filter.key ? 'active' : ''}`}
                  >
                    <span className="mr-2">{filter.icon}</span>
                    {filter.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TwistedSearchAndFilter;
