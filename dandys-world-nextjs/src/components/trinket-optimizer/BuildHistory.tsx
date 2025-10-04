import React, { useState, useEffect } from 'react';
import { IntelligentRecommendation } from '../../types/trinketOptimizer';

interface SavedBuild {
  id: string;
  name: string;
  character: string;
  gameStyle: string;
  build: IntelligentRecommendation;
  createdAt: string;
  lastModified: string;
  tags: string[];
  notes: string;
  isPublic: boolean;
}

interface BuildHistoryProps {
  onClose: () => void;
  onLoadBuild: (build: IntelligentRecommendation) => void;
}

const BuildHistory: React.FC<BuildHistoryProps> = ({ onClose, onLoadBuild }) => {
  const [savedBuilds, setSavedBuilds] = useState<SavedBuild[]>([]);
  const [selectedBuild, setSelectedBuild] = useState<SavedBuild | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterTags, setFilterTags] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<'date' | 'name' | 'effectiveness'>('date');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');
  const [showSaveForm, setShowSaveForm] = useState(false);
  const [editingBuild, setEditingBuild] = useState<SavedBuild | null>(null);

  // Load saved builds from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('trinket-builds');
    if (saved) {
      try {
        setSavedBuilds(JSON.parse(saved));
      } catch (error) {
        console.error('Failed to load saved builds:', error);
      }
    }
  }, []);

  // Save builds to localStorage
  const saveToLocalStorage = (builds: SavedBuild[]) => {
    localStorage.setItem('trinket-builds', JSON.stringify(builds));
  };

  // Save new build
  const saveBuild = (build: IntelligentRecommendation, character: string, gameStyle: string) => {
    const newBuild: SavedBuild = {
      id: Date.now().toString(),
      name: build.name,
      character,
      gameStyle,
      build,
      createdAt: new Date().toISOString(),
      lastModified: new Date().toISOString(),
      tags: [],
      notes: '',
      isPublic: false
    };

    const updatedBuilds = [...savedBuilds, newBuild];
    setSavedBuilds(updatedBuilds);
    saveToLocalStorage(updatedBuilds);
    setShowSaveForm(false);
  };

  // Update build
  const updateBuild = (buildId: string, updates: Partial<SavedBuild>) => {
    const updatedBuilds = savedBuilds.map(build => 
      build.id === buildId 
        ? { ...build, ...updates, lastModified: new Date().toISOString() }
        : build
    );
    setSavedBuilds(updatedBuilds);
    saveToLocalStorage(updatedBuilds);
    setEditingBuild(null);
  };

  // Delete build
  const deleteBuild = (buildId: string) => {
    if (window.confirm('Are you sure you want to delete this build? This action cannot be undone.')) {
      const updatedBuilds = savedBuilds.filter(build => build.id !== buildId);
      setSavedBuilds(updatedBuilds);
      saveToLocalStorage(updatedBuilds);
      if (selectedBuild?.id === buildId) {
        setSelectedBuild(null);
      }
    }
  };

  // Share build
  const shareBuild = (build: SavedBuild) => {
    const shareData = {
      title: `${build.name} - ${build.character} ${build.gameStyle} Build`,
      text: `Check out my ${build.gameStyle} build for ${build.character} in Dandy's World!`,
      url: window.location.href,
      buildData: build.build
    };

    if (navigator.share) {
      navigator.share(shareData);
    } else {
      // Copy to clipboard
      const buildJson = JSON.stringify(build.build, null, 2);
      navigator.clipboard.writeText(buildJson).then(() => {
        alert('Build data copied to clipboard!');
      });
    }
  };

  // Export build
  const exportBuild = (build: SavedBuild) => {
    const exportData = {
      ...build,
      exportDate: new Date().toISOString(),
      version: '1.0.0'
    };

    const blob = new Blob([JSON.stringify(exportData, null, 2)], {
      type: 'application/json'
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${build.name}-${build.character}-${build.gameStyle}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  // Import build
  const importBuild = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const importedBuild: SavedBuild = JSON.parse(e.target?.result as string);
          if (importedBuild.build && importedBuild.character && importedBuild.gameStyle) {
            const newBuild: SavedBuild = {
              ...importedBuild,
              id: Date.now().toString(),
              createdAt: new Date().toISOString(),
              lastModified: new Date().toISOString()
            };
            const updatedBuilds = [...savedBuilds, newBuild];
            setSavedBuilds(updatedBuilds);
            saveToLocalStorage(updatedBuilds);
            alert('Build imported successfully!');
          } else {
            alert('Invalid build file format');
          }
        } catch (error) {
          alert('Import failed: Invalid file format');
        }
      };
      reader.readAsText(file);
    }
  };

  // Filter and sort builds
  const filteredAndSortedBuilds = savedBuilds
    .filter(build => {
      const matchesSearch = build.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           build.character.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           build.gameStyle.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           build.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesTags = filterTags.length === 0 || 
                          filterTags.every(tag => build.tags.includes(tag));
      
      return matchesSearch && matchesTags;
    })
    .sort((a, b) => {
      let comparison = 0;
      
      switch (sortBy) {
        case 'date':
          comparison = new Date(a.lastModified).getTime() - new Date(b.lastModified).getTime();
          break;
        case 'name':
          comparison = a.name.localeCompare(b.name);
          break;
        case 'effectiveness':
          comparison = a.build.effectiveness.overall - b.build.effectiveness.overall;
          break;
      }
      
      return sortOrder === 'asc' ? comparison : -comparison;
    });

  // Get all tags
  const allTags = Array.from(new Set(savedBuilds.flatMap(build => build.tags)));

  // Render build card
  const renderBuildCard = (build: SavedBuild) => {
    return (
      <div 
        key={build.id}
        className={`bg-white dark:bg-gray-800 rounded-lg p-4 shadow-lg cursor-pointer transition-all hover:shadow-xl ${
          selectedBuild?.id === build.id ? 'ring-2 ring-blue-500' : ''
        }`}
        onClick={() => setSelectedBuild(build)}
      >
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {build.name}
          </h3>
          <div className="flex items-center space-x-2">
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
              build.isPublic 
                ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200'
            }`}>
              {build.isPublic ? 'Public' : 'Private'}
            </span>
          </div>
        </div>

        <div className="space-y-2 mb-3">
          <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
            <span>👤 {build.character}</span>
            <span>🎯 {build.gameStyle}</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
            <span>⭐ Effectiveness: {build.build.effectiveness.overall}/5</span>
            <span>🎯 Confidence: {build.build.confidence}/5</span>
          </div>
        </div>

        {build.tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-3">
            {build.tags.map(tag => (
              <span key={tag} className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-xs">
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="text-xs text-gray-500 dark:text-gray-400">
          Created: {new Date(build.createdAt).toLocaleDateString()}
        </div>
      </div>
    );
  };

  // Render build detail
  const renderBuildDetail = (build: SavedBuild) => {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            {build.name}
          </h3>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setEditingBuild(build)}
              className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm"
            >
              Edit
            </button>
            <button
              onClick={() => onLoadBuild(build.build)}
              className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 text-sm"
            >
              Load
            </button>
            <button
              onClick={() => shareBuild(build)}
              className="px-3 py-1 bg-purple-500 text-white rounded hover:bg-purple-600 text-sm"
            >
              Share
            </button>
            <button
              onClick={() => exportBuild(build)}
              className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600 text-sm"
            >
              Export
            </button>
            <button
              onClick={() => deleteBuild(build.id)}
              className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 text-sm"
            >
              Delete
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Build Information
            </h4>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Character:</span>
                <span className="text-gray-900 dark:text-white">{build.character}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Game Style:</span>
                <span className="text-gray-900 dark:text-white">{build.gameStyle}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Overall Effectiveness:</span>
                <span className="text-gray-900 dark:text-white">{build.build.effectiveness.overall}/5</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Confidence:</span>
                <span className="text-gray-900 dark:text-white">{build.build.confidence}/5</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Difficulty:</span>
                <span className="text-gray-900 dark:text-white capitalize">{build.build.difficulty}</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Metadata
            </h4>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Created:</span>
                <span className="text-gray-900 dark:text-white">
                  {new Date(build.createdAt).toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Last Modified:</span>
                <span className="text-gray-900 dark:text-white">
                  {new Date(build.lastModified).toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Status:</span>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  build.isPublic 
                    ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                    : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200'
                }`}>
                  {build.isPublic ? 'Public' : 'Private'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {build.tags.length > 0 && (
          <div className="mt-6">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Tags
            </h4>
            <div className="flex flex-wrap gap-2">
              {build.tags.map(tag => (
                <span key={tag} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {build.notes && (
          <div className="mt-6">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Notes
            </h4>
            <p className="text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
              {build.notes}
            </p>
          </div>
        )}
      </div>
    );
  };

  // Render edit form
  const renderEditForm = (build: SavedBuild) => {
    const [formData, setFormData] = useState({
      name: build.name,
      tags: build.tags.join(', '),
      notes: build.notes,
      isPublic: build.isPublic
    });

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      const tags = formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag);
      
      updateBuild(build.id, {
        name: formData.name,
        tags,
        notes: formData.notes,
        isPublic: formData.isPublic
      });
    };

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-md w-full">
          <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Edit Build
            </h3>
            <button
              onClick={() => setEditingBuild(null)}
              className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Build Name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Tags (comma separated)
              </label>
              <input
                type="text"
                value={formData.tags}
                onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="e.g., beginner-friendly, high-damage, team-support"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Notes
              </label>
              <textarea
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Add some notes about this build..."
              />
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="isPublic"
                checked={formData.isPublic}
                onChange={(e) => setFormData({ ...formData, isPublic: e.target.checked })}
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <label htmlFor="isPublic" className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                Make this build public
              </label>
            </div>

            <div className="flex justify-end space-x-3 pt-4">
              <button
                type="button"
                onClick={() => setEditingBuild(null)}
                className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-7xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            📚 Build History
          </h2>
          <div className="flex items-center space-x-3">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="file"
                accept=".json"
                onChange={importBuild}
                className="hidden"
                id="import-build"
              />
              <span className="px-3 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors text-sm">
                📥 Import
              </span>
            </label>
            <button
              onClick={onClose}
              className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors"
            >
              Close
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Search and filter */}
          <div className="mb-6 space-y-4">
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex-1 min-w-64">
                <input
                  type="text"
                  placeholder="Search builds..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="date">By Date</option>
                  <option value="name">By Name</option>
                  <option value="effectiveness">By Effectiveness</option>
                </select>
              </div>

              <div className="flex">
                <button
                  onClick={() => setSortOrder('desc')}
                  className={`px-3 py-2 text-sm font-medium rounded-l-md border ${
                    sortOrder === 'desc'
                      ? 'bg-blue-500 text-white border-blue-500'
                      : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600'
                  }`}
                >
                  Descending
                </button>
                <button
                  onClick={() => setSortOrder('asc')}
                  className={`px-3 py-2 text-sm font-medium rounded-r-md border-t border-r border-b ${
                    sortOrder === 'asc'
                      ? 'bg-blue-500 text-white border-blue-500'
                      : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600'
                  }`}
                >
                  Ascending
                </button>
              </div>
            </div>

            {allTags.length > 0 && (
              <div>
                <div className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Filter by tags:
                </div>
                <div className="flex flex-wrap gap-2">
                  {allTags.map(tag => (
                    <button
                      key={tag}
                      onClick={() => {
                        if (filterTags.includes(tag)) {
                          setFilterTags(filterTags.filter(t => t !== tag));
                        } else {
                          setFilterTags([...filterTags, tag]);
                        }
                      }}
                      className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                        filterTags.includes(tag)
                          ? 'bg-blue-500 text-white'
                          : 'bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-500'
                      }`}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Build list and details */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Build list */}
            <div className="lg:col-span-1">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Saved Builds ({filteredAndSortedBuilds.length})
              </h3>
              
              {filteredAndSortedBuilds.length === 0 ? (
                <div className="text-center py-8 text-gray-500 dark:text-gray-400">
                  <div className="text-4xl mb-2">📚</div>
                  <p>No saved builds yet</p>
                  <p className="text-sm">Save builds from the Trinket Optimizer to see them here</p>
                </div>
              ) : (
                <div className="space-y-3 max-h-96 overflow-y-auto">
                  {filteredAndSortedBuilds.map(renderBuildCard)}
                </div>
              )}
            </div>

            {/* Build details */}
            <div className="lg:col-span-2">
              {selectedBuild ? (
                renderBuildDetail(selectedBuild)
              ) : (
                <div className="text-center py-12 text-gray-500 dark:text-gray-400">
                  <div className="text-4xl mb-2">🔍</div>
                  <p>Select a build to view details</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Edit form */}
      {editingBuild && renderEditForm(editingBuild)}
    </div>
  );
};

export default BuildHistory;