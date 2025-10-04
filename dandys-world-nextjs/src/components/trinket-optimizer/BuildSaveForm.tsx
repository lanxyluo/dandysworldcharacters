import React, { useState } from 'react';
import { IntelligentRecommendation } from '../../types/trinketOptimizer';

interface BuildSaveFormProps {
  build: IntelligentRecommendation;
  character: string;
  gameStyle: string;
  onSave: (build: IntelligentRecommendation, character: string, gameStyle: string, tags: string[], notes: string, isPublic: boolean) => void;
  onCancel: () => void;
}

const BuildSaveForm: React.FC<BuildSaveFormProps> = ({ 
  build, 
  character, 
  gameStyle, 
  onSave, 
  onCancel 
}) => {
  const [formData, setFormData] = useState({
    name: build.name,
    tags: '',
    notes: '',
    isPublic: false
  });

  const [suggestedTags, setSuggestedTags] = useState<string[]>([
    'beginner-friendly',
    'high-damage',
    'high-survival',
    'team-support',
    'solo-play',
    'high-floor',
    'fast-extraction',
    'stealth-expert',
    'balanced',
    'expert-level'
  ]);

  const [customTags, setCustomTags] = useState<string[]>([]);

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Combine suggested tags and custom tags
    const allTags = [
      ...suggestedTags.filter(tag => formData.tags.includes(tag)),
      ...customTags
    ];

    onSave(build, character, gameStyle, allTags, formData.notes, formData.isPublic);
  };

  // Add custom tag
  const addCustomTag = () => {
    const newTag = formData.tags.trim();
    if (newTag && !suggestedTags.includes(newTag) && !customTags.includes(newTag)) {
      setCustomTags([...customTags, newTag]);
      setFormData({ ...formData, tags: '' });
    }
  };

  // Remove custom tag
  const removeCustomTag = (tagToRemove: string) => {
    setCustomTags(customTags.filter(tag => tag !== tagToRemove));
  };

  // Remove suggested tag
  const removeSuggestedTag = (tagToRemove: string) => {
    setSuggestedTags(suggestedTags.filter(tag => tag !== tagToRemove));
  };

  // Auto-generate tag suggestions
  const generateSuggestedTags = () => {
    const suggestions: string[] = [];
    
    // Generate tags based on effectiveness scores
    if (build.effectiveness.overall >= 4) suggestions.push('excellent-build');
    if (build.effectiveness.damage >= 4) suggestions.push('high-damage');
    if (build.effectiveness.survival >= 4) suggestions.push('high-survival');
    if (build.effectiveness.utility >= 4) suggestions.push('high-utility');
    if (build.effectiveness.teamSupport >= 4) suggestions.push('team-support');
    if (build.effectiveness.soloPlay >= 4) suggestions.push('solo-play');
    if (build.effectiveness.highFloor >= 4) suggestions.push('high-floor');
    
    // Generate tags based on difficulty
    if (build.difficulty === 'beginner') suggestions.push('beginner-friendly');
    if (build.difficulty === 'advanced') suggestions.push('expert-level');
    
    // Generate tags based on meta data
    if (build.metaAnalysis.tier === 'S') suggestions.push('top-tier');
    if (build.metaAnalysis.winRate >= 60) suggestions.push('high-winrate');
    
    return suggestions;
  };

  // Initialize suggested tags
  React.useEffect(() => {
    const autoSuggestions = generateSuggestedTags();
    setSuggestedTags(prev => [...new Set([...prev, ...autoSuggestions])]);
  }, [build]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            💾 Save Build
          </h2>
          <button
            onClick={onCancel}
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Build preview */}
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 mb-6">
            <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-200 mb-3">
              📋 Build Preview
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <div className="text-sm text-blue-700 dark:text-blue-300">Build Name</div>
                <div className="text-lg font-bold text-blue-800 dark:text-blue-200">
                  {build.name}
                </div>
              </div>
              <div>
                <div className="text-sm text-blue-700 dark:text-blue-300">Character</div>
                <div className="text-lg font-bold text-blue-800 dark:text-blue-200">
                  {character}
                </div>
              </div>
              <div>
                <div className="text-sm text-blue-700 dark:text-blue-300">Game Style</div>
                <div className="text-lg font-bold text-blue-800 dark:text-blue-200">
                  {gameStyle}
                </div>
              </div>
            </div>
            <div className="mt-3 grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                  {build.effectiveness.overall}
                </div>
                <div className="text-sm text-blue-700 dark:text-blue-300">Overall Effect</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                  {build.confidence}
                </div>
                <div className="text-sm text-green-700 dark:text-green-300">Confidence</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                  {build.metaAnalysis.tier}
                </div>
                <div className="text-sm text-purple-700 dark:text-purple-300">Meta Tier</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-600 dark:text-yellow-400 capitalize">
                  {build.difficulty}
                </div>
                <div className="text-sm text-yellow-700 dark:text-yellow-300">Difficulty</div>
              </div>
            </div>
          </div>

          {/* Save form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Build name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Build Name *
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Give your build a name..."
                required
              />
            </div>

            {/* Tag selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                Select Tags
              </label>
              
              {/* Suggested tags */}
              <div className="mb-4">
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  Suggested tags (click to select):
                </div>
                <div className="flex flex-wrap gap-2">
                  {suggestedTags.map(tag => (
                    <button
                      key={tag}
                      type="button"
                      onClick={() => {
                        if (formData.tags.includes(tag)) {
                          setFormData({ 
                            ...formData, 
                            tags: formData.tags.replace(tag, '').replace(/,\s*,/g, ',').replace(/^,|,$/g, '')
                          });
                        } else {
                          setFormData({ 
                            ...formData, 
                            tags: formData.tags ? `${formData.tags}, ${tag}` : tag
                          });
                        }
                      }}
                      className={`px-3 py-2 rounded-full text-sm font-medium transition-colors ${
                        formData.tags.includes(tag)
                          ? 'bg-blue-500 text-white'
                          : 'bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-500'
                      }`}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>

              {/* Custom tag input */}
              <div className="mb-4">
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  Add custom tags:
                </div>
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={formData.tags}
                    onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                    className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter custom tag..."
                  />
                  <button
                    type="button"
                    onClick={addCustomTag}
                    className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
                  >
                    Add
                  </button>
                </div>
              </div>

              {/* Selected tags display */}
              {(formData.tags || customTags.length > 0) && (
                <div className="mb-4">
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    Selected tags:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag).map(tag => (
                      <span key={tag} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm flex items-center space-x-2">
                        <span>{tag}</span>
                        <button
                          type="button"
                          onClick={() => {
                            const newTags = formData.tags.split(',').map(t => t.trim()).filter(t => t !== tag).join(', ');
                            setFormData({ ...formData, tags: newTags });
                          }}
                          className="text-blue-600 hover:text-blue-800"
                        >
                          ×
                        </button>
                      </span>
                    ))}
                    {customTags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm flex items-center space-x-2">
                        <span>{tag}</span>
                        <button
                          type="button"
                          onClick={() => removeCustomTag(tag)}
                          className="text-green-600 hover:text-green-800"
                        >
                          ×
                        </button>
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Notes */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Notes
              </label>
              <textarea
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Add some notes about this build, usage tips, or important considerations..."
              />
            </div>

            {/* Public setting */}
            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                id="isPublic"
                checked={formData.isPublic}
                onChange={(e) => setFormData({ ...formData, isPublic: e.target.checked })}
                className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <label htmlFor="isPublic" className="text-sm text-gray-700 dark:text-gray-300">
                Make this build public (other players can view and share)
              </label>
            </div>

            {/* Save tips */}
            <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <span className="text-yellow-500 text-lg">💡</span>
                <div className="text-yellow-800 dark:text-yellow-200">
                  <p className="font-medium mb-1">Save Tips:</p>
                  <ul className="text-sm space-y-1">
                    <li>• Builds will be saved to your browser's local storage</li>
                    <li>• You can edit, delete, or export builds at any time</li>
                    <li>• Public builds can be viewed and shared by other players</li>
                    <li>• Consider adding meaningful tags for easy searching later</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex justify-end space-x-3 pt-4">
              <button
                type="button"
                onClick={onCancel}
                className="px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors font-medium"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium"
              >
                💾 Save Build
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BuildSaveForm;