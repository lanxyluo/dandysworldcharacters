import React from 'react';

interface SearchAndFilterProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  currentFilter: string;
  onFilterChange: (filter: string) => void;
  sortBy: string;
  onSortChange: (sort: string) => void;
  sortOrder: 'asc' | 'desc';
  onSortOrderChange: (order: 'asc' | 'desc') => void;
  onResetFilters: () => void;
}

const SearchAndFilter: React.FC<SearchAndFilterProps> = ({
  searchTerm,
  onSearchChange,
  currentFilter,
  onFilterChange,
  sortBy,
  onSortChange,
  sortOrder,
  onSortOrderChange,
  onResetFilters
}) => {
  const filters = [
    { key: 'all', label: 'All' },
    { key: 'main', label: 'Main' },
    { key: 'regular', label: 'Regular' },
    { key: 'event', label: 'Event' }
  ];

  const sortOptions = [
    { value: 'name', label: 'Name' },
    { value: 'type', label: 'Type' },
    { value: 'rarity', label: 'Rarity' },
    { value: 'skillCheck', label: 'Skill Check' },
    { value: 'stealth', label: 'Stealth' },
    { value: 'speed', label: 'Speed' },
    { value: 'health', label: 'Health' },
    { value: 'damage', label: 'Damage' }
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
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
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
                  onClick={() => onFilterChange(filter.key)}
                  className={`filter-btn ${currentFilter === filter.key ? 'active' : ''}`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>

          {/* 排序和重置 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            {/* 排序 */}
            <div>
              <label className="block text-sm font-medium mb-2 text-white">Sort By</label>
              <select
                value={sortBy}
                onChange={(e) => onSortChange(e.target.value)}
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
                onClick={() => onSortOrderChange(sortOrder === 'asc' ? 'desc' : 'asc')}
                className="w-full px-4 py-2 bg-accent-main hover:bg-accent-main/80 text-white rounded-md transition-colors flex items-center justify-center space-x-2"
              >
                <span>{sortOrder === 'asc' ? '↑' : '↓'}</span>
                <span>{sortOrder === 'asc' ? 'Ascending' : 'Descending'}</span>
              </button>
            </div>

            {/* 重置筛选按钮 */}
            <div className="flex items-end">
              <button
                onClick={onResetFilters}
                className="w-full px-4 py-2 bg-gray-600 hover:bg-gray-500 text-white rounded-md transition-colors flex items-center justify-center space-x-2"
              >
                <span>🔄</span>
                <span>Reset Filters</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchAndFilter;
