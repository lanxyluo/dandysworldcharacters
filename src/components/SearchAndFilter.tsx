import React from 'react';

interface FilterState {
  tab: 'all' | 'main' | 'regular' | 'event';
  search: string;
  rarity: 'all' | 'common' | 'uncommon' | 'rare' | 'legendary' | 'twisted';
  sortKey: 'name' | 'rarity';
  sortDir: 'asc' | 'desc';
}

interface SearchAndFilterProps {
  value: FilterState;
  counts: { all: number; main: number; regular: number; event: number };
  onChange: (next: Partial<FilterState>) => void;
}

const SearchAndFilter: React.FC<SearchAndFilterProps> = ({
  value,
  counts,
  onChange
}) => {
  const filters = [
    { key: 'all', label: 'All', count: counts.all },
    { key: 'main', label: 'Main', count: counts.main },
    { key: 'regular', label: 'Regular', count: counts.regular },
    { key: 'event', label: 'Event', count: counts.event }
  ] as const;

  const rarities = [
    { value: 'all', label: 'All Rarities' },
    { value: 'common', label: 'Common' },
    { value: 'uncommon', label: 'Uncommon' },
    { value: 'rare', label: 'Rare' },
    { value: 'legendary', label: 'Legendary' },
    { value: 'twisted', label: 'Twisted' }
  ];

  const sortOptions = [
    { value: 'name', label: 'Name' },
    { value: 'rarity', label: 'Rarity' }
  ];

  return (
    <section className="px-4 mb-12">
      <div className="max-w-7xl mx-auto">
        <div className="glass-effect rounded-2xl p-6">
          {/* 搜索和快速筛选 */}
          <div className="flex flex-col lg:flex-row gap-4 items-center mb-6">
            <div className="flex-1 relative">
              <input 
                type="text" 
                placeholder="Search characters..." 
                value={value.search}
                onChange={(e) => onChange({ search: e.target.value })}
                className="w-full bg-bg-card text-white px-4 py-3 pl-12 rounded-lg border border-gray-600 focus:border-accent-main focus:outline-none transition-colors"
              />
              <svg className="w-5 h-5 absolute left-4 top-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>
            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <button
                  key={filter.key}
                  onClick={() => onChange({ tab: filter.key })}
                  className={`filter-btn ${value.tab === filter.key ? 'active' : ''}`}
                >
                  {filter.label}
                  <span className="ml-2 text-xs opacity-70">{filter.count}</span>
                </button>
              ))}
            </div>
          </div>

          {/* 详细筛选和排序 */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
            {/* 稀有度筛选：仅在 Regular 下显示 */}
            <div>
              <label className="block text-sm font-medium mb-2 text-white">Rarity</label>
              <select
                value={value.rarity}
                onChange={(e) => onChange({ rarity: e.target.value as FilterState['rarity'] })}
                disabled={value.tab !== 'regular'}
                className="w-full px-3 py-2 bg-bg-card border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-accent-main disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {rarities.map((rarity) => (
                  <option key={rarity.value} value={rarity.value}>{rarity.label}</option>
                ))}
              </select>
            </div>

            {/* 排序 */}
            <div>
              <label className="block text-sm font-medium mb-2 text-white">Sort By</label>
              <select
                value={value.sortKey}
                onChange={(e) => onChange({ sortKey: e.target.value as FilterState['sortKey'] })}
                className="w-full px-3 py-2 bg-bg-card border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-accent-main"
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </select>
            </div>

            {/* 排序方向切换 */}
            <div className="flex items-end">
              <button
                onClick={() => onChange({ sortDir: value.sortDir === 'asc' ? 'desc' : 'asc' })}
                className="w-full px-4 py-2 bg-accent-main hover:bg-accent-main/80 text-white rounded-md transition-colors flex items-center justify-center space-x-2"
              >
                <span>{value.sortDir === 'asc' ? '↑' : '↓'}</span>
                <span>{value.sortDir === 'asc' ? 'Ascending' : 'Descending'}</span>
              </button>
            </div>
          </div>

          {/* 清除条件 */}
          <div className="mt-4 flex justify-end">
            <button
              onClick={() => onChange({ tab: 'all', search: '', rarity: 'all', sortKey: 'name', sortDir: 'asc' })}
              className="px-4 py-2 border border-gray-600 text-white rounded-md hover:bg-white/5 transition-colors"
            >
              Clear filters
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchAndFilter;
