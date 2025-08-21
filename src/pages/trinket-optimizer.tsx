import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { characters } from '../data/characters';
import { 
  getIntelligentRecommendations,
  defaultEngineConfig 
} from '../data/intelligentRecommendations';
import { 
  IntelligentRecommendation,
  UserPreferences,
  RecommendationEngineConfig 
} from '../types/trinketOptimizer';
import BuildComparison from '../components/trinket-optimizer/BuildComparison';
import BuildSimulator from '../components/trinket-optimizer/BuildSimulator';

// 游戏风格类型
type GameStyle = 'extractor' | 'distractor' | 'support' | 'balanced';

const TrinketOptimizer: React.FC = () => {
  const [selectedCharacter, setSelectedCharacter] = useState<string>('');
  const [selectedGameStyle, setSelectedGameStyle] = useState<GameStyle>('balanced');
  const [recommendations, setRecommendations] = useState<IntelligentRecommendation[]>([]);
  const [selectedRecommendation, setSelectedRecommendation] = useState<IntelligentRecommendation | null>(null);
  const [showAcquisitionPath, setShowAcquisitionPath] = useState(false);
  const [showAlternatives, setShowAlternatives] = useState(false);
  const [showBuildComparison, setShowBuildComparison] = useState(false);
  const [showBuildSimulator, setShowBuildSimulator] = useState(false);
  const [selectedBuildForSimulation, setSelectedBuildForSimulation] = useState<IntelligentRecommendation | null>(null);
  const [userPreferences, setUserPreferences] = useState<UserPreferences>({
    playstyle: 'balanced',
    difficulty: 'intermediate',
    budget: 'moderate',
    focus: 'balanced',
    preferredRoles: [],
    avoidRoles: [],
    metaPreference: 'balanced'
  });
  const [engineConfig, setEngineConfig] = useState<RecommendationEngineConfig>(defaultEngineConfig);

  // 当角色或游戏风格改变时生成推荐
  useEffect(() => {
    if (selectedCharacter && selectedGameStyle) {
      const character = characters.find(c => c.id === selectedCharacter);
      if (character) {
        // 更新用户偏好
        const updatedPreferences = {
          ...userPreferences,
          playstyle: selectedGameStyle as any,
          preferredRoles: [character.type]
        };
        setUserPreferences(updatedPreferences);
        
        // 更新引擎配置
        const updatedConfig = {
          ...engineConfig,
          preferences: updatedPreferences
        };
        setEngineConfig(updatedConfig);
        
        // 生成智能推荐
        const newRecommendations = getIntelligentRecommendations(character, selectedGameStyle, 4);
        setRecommendations(newRecommendations);
        setSelectedRecommendation(null);
      }
    }
  }, [selectedCharacter, selectedGameStyle]);

  // 生成推荐
  const generateRecommendations = () => {
    if (selectedCharacter && selectedGameStyle) {
      const character = characters.find(c => c.id === selectedCharacter);
      if (character) {
        const newRecommendations = getIntelligentRecommendations(character, selectedGameStyle, 4);
        setRecommendations(newRecommendations);
        setSelectedRecommendation(null);
      }
    }
  };

  // 打开构建比较
  const openBuildComparison = () => {
    if (recommendations.length >= 2) {
      setShowBuildComparison(true);
    }
  };

  // 打开构建模拟器
  const openBuildSimulator = (build: IntelligentRecommendation) => {
    setSelectedBuildForSimulation(build);
    setShowBuildSimulator(true);
  };

  // 获取稀有度颜色
  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'common': return 'text-gray-400';
      case 'uncommon': return 'text-green-400';
      case 'rare': return 'text-blue-400';
      case 'epic': return 'text-purple-400';
      case 'legendary': return 'text-yellow-400';
      default: return 'text-gray-400';
    }
  };

  // 获取稀有度背景色
  const getRarityBgColor = (rarity: string) => {
    switch (rarity) {
      case 'common': return 'bg-gray-100 dark:bg-gray-800';
      case 'uncommon': return 'bg-green-100 dark:bg-green-900';
      case 'rare': return 'bg-blue-100 dark:bg-blue-900';
      case 'epic': return 'bg-purple-100 dark:bg-purple-900';
      case 'legendary': return 'bg-yellow-100 dark:bg-yellow-900';
      default: return 'bg-gray-100 dark:bg-gray-800';
    }
  };

  // 渲染星级评分
  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={`text-lg ${
              star <= rating ? 'text-yellow-400' : 'text-gray-300'
            }`}
          >
            ★
          </span>
        ))}
        <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
          {rating}/5
        </span>
      </div>
    );
  };

  // 渲染获取路径
  const renderAcquisitionPath = (recommendation: IntelligentRecommendation) => {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
        <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
          🎯 获取路径
        </h3>
        
        {/* 总体信息 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
            <div className="text-sm text-blue-600 dark:text-blue-400">总成本</div>
            <div className="text-lg font-semibold text-blue-800 dark:text-blue-200">
              {recommendation.acquisition.estimatedCost}
            </div>
          </div>
          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
            <div className="text-sm text-green-600 dark:text-green-400">优先级</div>
            <div className="text-lg font-semibold text-green-800 dark:text-green-200 capitalize">
              {recommendation.acquisition.priority}
            </div>
          </div>
          <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
            <div className="text-sm text-purple-600 dark:text-purple-400">总时间</div>
            <div className="text-lg font-semibold text-purple-800 dark:text-purple-200">
              {recommendation.progressionPath.estimatedTime}
            </div>
          </div>
        </div>

        {/* 解锁步骤 */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
            解锁步骤
          </h4>
          {recommendation.progressionPath.steps.map((step, index) => (
            <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                {step.step}
              </div>
              <div className="flex-1">
                <div className="font-medium text-gray-900 dark:text-white">
                  {step.description}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  要求: {step.requirement}
                </div>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    预计时间: {step.estimatedTime}
                  </span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    step.priority === 'high' ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200' :
                    step.priority === 'medium' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' :
                    'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                  }`}>
                    {step.priority} 优先级
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 资源需求 */}
        <div className="mt-6">
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
            资源需求
          </h4>
          <div className="flex flex-wrap gap-2">
            {recommendation.progressionPath.resourceRequirements.map((resource, index) => (
              <span key={index} className="px-3 py-1 bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-full text-sm">
                {resource}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  };

  // 渲染替代构建
  const renderAlternatives = (recommendation: IntelligentRecommendation) => {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
        <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
          🔄 替代构建
        </h3>
        
        <div className="space-y-4">
          {recommendation.alternatives.map((alternative, index) => (
            <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {alternative.name}
                </h4>
                <div className="flex items-center space-x-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    alternative.difficulty === 'advanced' ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200' :
                    alternative.difficulty === 'intermediate' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' :
                    'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                  }`}>
                    {alternative.difficulty}
                  </span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    alternative.cost === 'expensive' ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200' :
                    alternative.cost === 'moderate' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' :
                    'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                  }`}>
                    {alternative.cost}
                  </span>
                </div>
              </div>
              
              <div className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                {alternative.reasoning}
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-500 dark:text-gray-400">效果:</span>
                  {renderStars(alternative.effectiveness)}
                </div>
                <button className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm">
                  查看详情
                </button>
              </div>
              
              {alternative.tradeoffs.length > 0 && (
                <div className="mt-3">
                  <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">权衡:</div>
                  <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                    {alternative.tradeoffs.map((tradeoff, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <span className="text-red-500">⚠</span>
                        <span>{tradeoff}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

  // 渲染推荐详情
  const renderRecommendationDetail = (recommendation: IntelligentRecommendation) => {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            {recommendation.name}
          </h3>
          <div className="flex items-center space-x-2">
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
              recommendation.difficulty === 'advanced' ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200' :
              recommendation.difficulty === 'intermediate' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' :
              'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
            }`}>
              {recommendation.difficulty}
            </span>
            <span className="px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
              {recommendation.metaAnalysis.tier} Tier
            </span>
          </div>
        </div>

        {/* 置信度 */}
        <div className="mb-4">
          <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">置信度:</div>
          {renderStars(recommendation.confidence)}
        </div>

        {/* 效果评分 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              {recommendation.effectiveness.overall}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">总体</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-red-600 dark:text-red-400">
              {recommendation.effectiveness.damage}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">伤害</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600 dark:text-green-400">
              {recommendation.effectiveness.survival}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">生存</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
              {recommendation.effectiveness.utility}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">实用</div>
          </div>
        </div>

        {/* 推荐推理 */}
        <div className="mb-6">
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
            💡 推荐推理
          </h4>
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
            <p className="text-blue-800 dark:text-blue-200">
              {recommendation.reasoning.primary}
            </p>
          </div>
        </div>

        {/* 统计协同 */}
        <div className="mb-6">
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
            📊 统计协同
          </h4>
          <div className="space-y-3">
            {recommendation.reasoning.statSynergy.map((synergy, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div>
                  <div className="font-medium text-gray-900 dark:text-white">
                    {synergy.description}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {synergy.stats.join(', ')}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {synergy.beforeValue} → {synergy.afterValue}
                  </div>
                  <div className="text-sm font-medium text-green-600 dark:text-green-400">
                    +{synergy.improvement}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 场景适用性 */}
        <div className="mb-6">
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
            🎯 适用场景
          </h4>
          <div className="flex flex-wrap gap-2">
            {recommendation.scenarios.map((scenario, index) => (
              <span key={index} className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm">
                {scenario}
              </span>
            ))}
          </div>
        </div>

        {/* 元数据分析 */}
        <div className="mb-6">
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
            📈 元数据分析
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-lg font-bold text-blue-600 dark:text-blue-400">
                {recommendation.metaAnalysis.popularity}%
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">使用率</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-green-600 dark:text-green-400">
                {recommendation.metaAnalysis.winRate}%
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">胜率</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-purple-600 dark:text-purple-400">
                {recommendation.metaAnalysis.tier}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">等级</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-yellow-600 dark:text-yellow-400">
                {recommendation.metaAnalysis.counterStrategies.length}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">克制策略</div>
            </div>
          </div>
        </div>

        {/* 操作按钮 */}
        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => setShowAcquisitionPath(!showAcquisitionPath)}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          >
            {showAcquisitionPath ? '隐藏' : '显示'} 获取路径
          </button>
          <button
            onClick={() => setShowAlternatives(!showAlternatives)}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
          >
            {showAlternatives ? '隐藏' : '显示'} 替代构建
          </button>
          <button
            onClick={() => openBuildSimulator(recommendation)}
            className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition-colors"
          >
            🎮 构建模拟器
          </button>
          <button className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition-colors">
            生成代码
          </button>
        </div>

        {/* 获取路径 */}
        {showAcquisitionPath && renderAcquisitionPath(recommendation)}

        {/* 替代构建 */}
        {showAlternatives && renderAlternatives(recommendation)}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navigation />
      <SEO 
        title="Trinket Optimizer - 智能饰品推荐系统"
        description="Dandy's World智能饰品推荐系统，基于AI算法为每个角色提供个性化饰品组合建议，包含获取路径、构建比较和元数据分析。"
        keywords="trinket optimizer, 饰品优化, 智能推荐, 构建分析, 获取路径, 元数据分析"
      />
      
      <div className="container mx-auto px-4 py-8">
        {/* 页面标题 */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            🎯 Trinket Optimizer
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            智能饰品推荐系统 - 为每个角色提供最佳的饰品组合
          </p>
          <Link 
            to="/calculator" 
            className="inline-block mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            ← 返回 Calculator
          </Link>
        </div>

        {/* 配置区域 */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            ⚙️ 配置设置
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 角色选择 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                选择角色
              </label>
              <select
                value={selectedCharacter}
                onChange={(e) => setSelectedCharacter(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">请选择角色</option>
                {characters.map((character) => (
                  <option key={character.id} value={character.id}>
                    {character.name} - {character.type}
                  </option>
                ))}
              </select>
            </div>

            {/* 游戏风格选择 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                游戏风格
              </label>
              <div className="grid grid-cols-2 gap-2">
                {(['extractor', 'distractor', 'support', 'balanced'] as GameStyle[]).map((style) => (
                  <button
                    key={style}
                    onClick={() => setSelectedGameStyle(style)}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      selectedGameStyle === style
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-500'
                    }`}
                  >
                    {style === 'extractor' && '🎯 提取者'}
                    {style === 'distractor' && '🎭 干扰者'}
                    {style === 'support' && '💫 支援者'}
                    {style === 'balanced' && '⚖️ 平衡者'}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* 生成按钮 */}
          <div className="mt-6 text-center">
            <button
              onClick={generateRecommendations}
              disabled={!selectedCharacter || !selectedGameStyle}
              className="px-8 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors text-lg font-medium"
            >
              🚀 生成智能推荐
            </button>
          </div>
        </div>

        {/* 推荐结果 */}
        {recommendations.length > 0 && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                🎉 智能推荐结果
              </h2>
              
              {/* 构建比较按钮 */}
              {recommendations.length >= 2 && (
                <button
                  onClick={openBuildComparison}
                  className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
                >
                  🔍 构建比较
                </button>
              )}
            </div>
            
            {/* 推荐列表 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {recommendations.map((recommendation, index) => (
                <div key={recommendation.id} className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                      #{index + 1} {recommendation.name}
                    </h3>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        recommendation.difficulty === 'advanced' ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200' :
                        recommendation.difficulty === 'intermediate' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' :
                        'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                      }`}>
                        {recommendation.difficulty}
                      </span>
                      <span className="px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                        {recommendation.metaAnalysis.tier} Tier
                      </span>
                    </div>
                  </div>

                  {/* 饰品组合 */}
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      饰品组合:
                    </h4>
                    <div className="space-y-2">
                      {recommendation.trinkets.map((trinket, idx) => (
                        <div key={idx} className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                          <span className="text-2xl">{trinket.image}</span>
                          <div className="flex-1">
                            <div className="font-medium text-gray-900 dark:text-white">
                              {trinket.name}
                            </div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">
                              {trinket.slot} • {trinket.type}
                            </div>
                          </div>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getRarityBgColor(trinket.rarity)} ${getRarityColor(trinket.rarity)}`}>
                            {trinket.rarity}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 效果评分 */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        总体效果:
                      </span>
                      <span className="text-lg font-bold text-blue-600 dark:text-blue-400">
                        {recommendation.effectiveness.overall}/5
                      </span>
                    </div>
                    {renderStars(recommendation.effectiveness.overall)}
                  </div>

                  {/* 置信度 */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        置信度:
                      </span>
                      <span className="text-lg font-bold text-green-600 dark:text-green-400">
                        {recommendation.confidence}/5
                      </span>
                    </div>
                    {renderStars(recommendation.confidence)}
                  </div>

                  {/* 推荐推理 */}
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      推荐理由:
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                      {recommendation.reasoning.primary}
                    </p>
                  </div>

                  {/* 操作按钮 */}
                  <div className="flex space-x-2">
                    <button
                      onClick={() => setSelectedRecommendation(recommendation)}
                      className="flex-1 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors text-sm"
                    >
                      查看详情
                    </button>
                    <button
                      onClick={() => openBuildSimulator(recommendation)}
                      className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition-colors text-sm"
                    >
                      🎮 模拟
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 推荐详情 */}
        {selectedRecommendation && (
          <div className="mt-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                📋 推荐详情
              </h2>
              <button
                onClick={() => setSelectedRecommendation(null)}
                className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors"
              >
                关闭
              </button>
            </div>
            {renderRecommendationDetail(selectedRecommendation)}
          </div>
        )}

        {/* 空状态 */}
        {!selectedCharacter && !selectedGameStyle && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🎯</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              开始使用 Trinket Optimizer
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              选择角色和游戏风格，获取个性化的饰品推荐
            </p>
          </div>
        )}
      </div>
      
      {/* 构建比较模态框 */}
      {showBuildComparison && (
        <BuildComparison
          builds={recommendations}
          onClose={() => setShowBuildComparison(false)}
        />
      )}

      {/* 构建模拟器模态框 */}
      {showBuildSimulator && selectedBuildForSimulation && (
        <BuildSimulator
          build={selectedBuildForSimulation}
          onClose={() => {
            setShowBuildSimulator(false);
            setSelectedBuildForSimulation(null);
          }}
        />
      )}
      
      <Footer />
    </div>
  );
};

export default TrinketOptimizer;
