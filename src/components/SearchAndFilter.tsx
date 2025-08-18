import React from 'react';

interface SearchAndFilterProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  currentFilter: string;
  onFilterChange: (filter: string) => void;
}

const SearchAndFilter: React.FC<SearchAndFilterProps> = ({
  searchTerm,
  onSearchChange,
  currentFilter,
  onFilterChange
}) => {
  const filters = [
    { key: 'all', label: 'All' },
    { key: 'main', label: 'Main' },
    { key: 'regular', label: 'Regular' },
    { key: 'event', label: 'Event' }
  ];

  return (
    <section className="px-4 mb-12">
      <div className="max-w-7xl mx-auto">
        <div className="glass-effect rounded-2xl p-6">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
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
        </div>
      </div>
    </section>
  );
};

export default SearchAndFilter;
