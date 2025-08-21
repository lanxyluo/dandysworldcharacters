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

  // 从localStorage加载保存的构建
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

  // 保存构建到localStorage
  const saveToLocalStorage = (builds: SavedBuild[]) => {
    localStorage.setItem('trinket-builds', JSON.stringify(builds));
  };

  // 保存新构建
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

  // 更新构建
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

  // 删除构建
  const deleteBuild = (buildId: string) => {
    if (window.confirm('确定要删除这个构建吗？此操作无法撤销。')) {
      const updatedBuilds = savedBuilds.filter(build => build.id !== buildId);
      setSavedBuilds(updatedBuilds);
      saveToLocalStorage(updatedBuilds);
      if (selectedBuild?.id === buildId) {
        setSelectedBuild(null);
      }
    }
  };

  // 分享构建
  const shareBuild = (build: SavedBuild) => {
    const shareData = {
      title: `${build.name} - ${build.character} ${build.gameStyle} 构建`,
      text: `查看我在Dandy's World中为${build.character}创建的${build.gameStyle}构建！`,
      url: window.location.href,
      buildData: build.build
    };

    if (navigator.share) {
      navigator.share(shareData);
    } else {
      // 复制到剪贴板
      const buildJson = JSON.stringify(build.build, null, 2);
      navigator.clipboard.writeText(buildJson).then(() => {
        alert('构建数据已复制到剪贴板！');
      });
    }
  };

  // 导出构建
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

  // 导入构建
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
            alert('构建导入成功！');
          } else {
            alert('无效的构建文件格式');
          }
        } catch (error) {
          alert('导入失败：文件格式错误');
        }
      };
      reader.readAsText(file);
    }
  };

  // 过滤和排序构建
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

  // 获取所有标签
  const allTags = Array.from(new Set(savedBuilds.flatMap(build => build.tags)));

  // 渲染构建卡片
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
              {build.isPublic ? '公开' : '私有'}
            </span>
          </div>
        </div>

        <div className="space-y-2 mb-3">
          <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
            <span>👤 {build.character}</span>
            <span>🎯 {build.gameStyle}</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
            <span>⭐ 效果: {build.build.effectiveness.overall}/5</span>
            <span>🎯 置信度: {build.build.confidence}/5</span>
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
          创建于: {new Date(build.createdAt).toLocaleDateString()}
        </div>
      </div>
    );
  };

  // 渲染构建详情
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
              编辑
            </button>
            <button
              onClick={() => onLoadBuild(build.build)}
              className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 text-sm"
            >
              加载
            </button>
            <button
              onClick={() => shareBuild(build)}
              className="px-3 py-1 bg-purple-500 text-white rounded hover:bg-purple-600 text-sm"
            >
              分享
            </button>
            <button
              onClick={() => exportBuild(build)}
              className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600 text-sm"
            >
              导出
            </button>
            <button
              onClick={() => deleteBuild(build.id)}
              className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 text-sm"
            >
              删除
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              构建信息
            </h4>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">角色:</span>
                <span className="text-gray-900 dark:text-white">{build.character}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">游戏风格:</span>
                <span className="text-gray-900 dark:text-white">{build.gameStyle}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">总体效果:</span>
                <span className="text-gray-900 dark:text-white">{build.build.effectiveness.overall}/5</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">置信度:</span>
                <span className="text-gray-900 dark:text-white">{build.build.confidence}/5</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">难度:</span>
                <span className="text-gray-900 dark:text-white capitalize">{build.build.difficulty}</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              元数据
            </h4>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">创建时间:</span>
                <span className="text-gray-900 dark:text-white">
                  {new Date(build.createdAt).toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">最后修改:</span>
                <span className="text-gray-900 dark:text-white">
                  {new Date(build.lastModified).toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">状态:</span>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  build.isPublic 
                    ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                    : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200'
                }`}>
                  {build.isPublic ? '公开' : '私有'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {build.tags.length > 0 && (
          <div className="mt-6">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              标签
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
              备注
            </h4>
            <p className="text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
              {build.notes}
            </p>
          </div>
        )}
      </div>
    );
  };

  // 渲染编辑表单
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
              编辑构建
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
                构建名称
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
                标签 (用逗号分隔)
              </label>
              <input
                type="text"
                value={formData.tags}
                onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="例如: 新手友好, 高伤害, 团队支援"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                备注
              </label>
              <textarea
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="添加一些关于这个构建的说明..."
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
                设为公开构建
              </label>
            </div>

            <div className="flex justify-end space-x-3 pt-4">
              <button
                type="button"
                onClick={() => setEditingBuild(null)}
                className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors"
              >
                取消
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
              >
                保存
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
        {/* 头部 */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            📚 构建历史记录
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
                📥 导入
              </span>
            </label>
            <button
              onClick={onClose}
              className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors"
            >
              关闭
            </button>
          </div>
        </div>

        {/* 内容 */}
        <div className="p-6">
          {/* 搜索和过滤 */}
          <div className="mb-6 space-y-4">
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex-1 min-w-64">
                <input
                  type="text"
                  placeholder="搜索构建..."
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
                  <option value="date">按日期</option>
                  <option value="name">按名称</option>
                  <option value="effectiveness">按效果</option>
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
                  降序
                </button>
                <button
                  onClick={() => setSortOrder('asc')}
                  className={`px-3 py-2 text-sm font-medium rounded-r-md border-t border-r border-b ${
                    sortOrder === 'asc'
                      ? 'bg-blue-500 text-white border-blue-500'
                      : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600'
                  }`}
                >
                  升序
                </button>
              </div>
            </div>

            {allTags.length > 0 && (
              <div>
                <div className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  按标签过滤:
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

          {/* 构建列表和详情 */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* 构建列表 */}
            <div className="lg:col-span-1">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                保存的构建 ({filteredAndSortedBuilds.length})
              </h3>
              
              {filteredAndSortedBuilds.length === 0 ? (
                <div className="text-center py-8 text-gray-500 dark:text-gray-400">
                  <div className="text-4xl mb-2">📚</div>
                  <p>还没有保存的构建</p>
                  <p className="text-sm">在Trinket Optimizer中生成推荐后可以保存构建</p>
                </div>
              ) : (
                <div className="space-y-3 max-h-96 overflow-y-auto">
                  {filteredAndSortedBuilds.map(renderBuildCard)}
                </div>
              )}
            </div>

            {/* 构建详情 */}
            <div className="lg:col-span-2">
              {selectedBuild ? (
                renderBuildDetail(selectedBuild)
              ) : (
                <div className="text-center py-12 text-gray-500 dark:text-gray-400">
                  <div className="text-4xl mb-2">🔍</div>
                  <p>选择一个构建查看详情</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* 编辑表单 */}
      {editingBuild && renderEditForm(editingBuild)}
    </div>
  );
};

export default BuildHistory;
