import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const GameMechanicsGuide: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const guideCategories = [
    {
      id: 'skill-check',
      title: '技能检查机制详解',
      description: '掌握各种技能检查的触发条件和应对策略',
      icon: '🎯',
      href: '/guides/skill-check-guide',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'stamina',
      title: '体力管理技巧',
      description: '优化体力使用，延长探索时间',
      icon: '⚡',
      href: '/guides/stamina-management',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      id: 'stealth',
      title: '隐秘系统说明',
      description: '学会隐藏和躲避扭曲角色的技巧',
      icon: '👻',
      href: '/guides/stealth-system',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'twisted',
      title: '扭曲角色机制',
      description: '深入理解扭曲角色的行为模式和弱点',
      icon: '🚨',
      href: '/guides/twisted-mechanics',
      color: 'from-red-500 to-pink-500'
    },
    {
      id: 'trinkets',
      title: '饰品组合指南',
      description: '最佳饰品搭配和协同效果',
      icon: '💎',
      href: '/guides/trinket-combinations',
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'floors',
      title: '楼层进程攻略',
      description: '高效通关各楼层的策略',
      icon: '🏢',
      href: '/guides/floor-progression',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      id: 'teams',
      title: '团队策略',
      description: '多人合作的最佳配合方式',
      icon: '👥',
      href: '/guides/team-strategies',
      color: 'from-teal-500 to-blue-500'
    },
    {
      id: 'beginner',
      title: '新手入门',
      description: '从零开始的完整游戏指南',
      icon: '🌟',
      href: '/guides/beginner-tips',
      color: 'from-amber-500 to-yellow-500'
    }
  ];

  const filteredCategories = guideCategories.filter(category =>
    category.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    category.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const quickTips = [
    '扭曲角色听到声音会追踪，保持安静很重要',
    '体力不足时寻找休息点，不要冒险',
    '饰品组合比单个饰品效果更强',
    '技能检查失败不要慌，有备选方案',
    '团队合作时分配角色职责更高效'
  ];

  return (
    <div className="min-h-screen bg-bg-primary text-white pt-20">
      <Helmet>
        <title>Dandy's World完整游戏机制指南 - 最全面的攻略解析</title>
        <meta name="description" content="最全面的Dandy's World游戏机制解析，包含角色能力、扭曲角色对抗、饰品搭配等攻略。掌握游戏技巧，成为生存专家！" />
        <meta name="keywords" content="Dandy's World攻略,Dandy's World怎么玩,扭曲角色怎么躲避,Dandy's World guide,Twisted survival,游戏机制,生存技巧" />
        <meta property="og:title" content="Dandy's World完整游戏机制指南" />
        <meta property="og:description" content="最全面的Dandy's World游戏机制解析，包含角色能力、扭曲角色对抗、饰品搭配等攻略" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/guides/game-mechanics" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-rainbow-1 via-rainbow-3 to-rainbow-5 bg-clip-text text-transparent">
            Dandy's World完整游戏机制指南
          </h1>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            最全面的游戏机制解析，从基础操作到高级策略，助你掌握生存技巧，成为Dandy's World的专家玩家
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <input
              type="text"
              placeholder="搜索游戏机制、技巧或策略..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-6 py-4 bg-bg-card border border-gray-600 rounded-xl text-white placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-accent-main focus:border-transparent"
            />
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-text-secondary">
              🔍
            </div>
          </div>
        </div>

        {/* Quick Tips */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">💡 快速技巧</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {quickTips.map((tip, index) => (
              <div key={index} className="bg-bg-card p-4 rounded-lg border border-gray-600 hover:border-accent-main transition-colors">
                <p className="text-text-secondary">{tip}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Guide Categories */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">📚 完整指南目录</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredCategories.map((category) => (
              <Link
                key={category.id}
                to={category.href}
                className="group block"
              >
                <div className="bg-bg-card p-6 rounded-xl border border-gray-600 hover:border-accent-main transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${category.color} flex items-center justify-center text-2xl group-hover:scale-110 transition-transform`}>
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-center group-hover:text-accent-main transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-sm text-text-secondary text-center leading-relaxed">
                    {category.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Related Tools */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">🛠️ 实用工具</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link to="/trinket-optimizer" className="group">
              <div className="bg-bg-card p-6 rounded-xl border border-gray-600 hover:border-accent-main transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center text-2xl">
                  ⚡
                </div>
                <h3 className="text-lg font-semibold mb-2 text-center group-hover:text-accent-main transition-colors">
                  饰品优化器
                </h3>
                <p className="text-sm text-text-secondary text-center">
                  找到最适合你的饰品组合
                </p>
              </div>
            </Link>
            
            <Link to="/twisted-guide" className="group">
              <div className="bg-bg-card p-6 rounded-xl border border-gray-600 hover:border-accent-main transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-red-500 to-pink-500 flex items-center justify-center text-2xl">
                  🚨
                </div>
                <h3 className="text-lg font-semibold mb-2 text-center group-hover:text-accent-main transition-colors">
                  扭曲角色指南
                </h3>
                <p className="text-sm text-text-secondary text-center">
                  了解每个扭曲角色的特点
                </p>
              </div>
            </Link>
            
            <Link to="/floor-predictor" className="group">
              <div className="bg-bg-card p-6 rounded-xl border border-gray-600 hover:border-accent-main transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-2xl">
                  🏢
                </div>
                <h3 className="text-lg font-semibold mb-2 text-center group-hover:text-accent-main transition-colors">
                  楼层预测器
                </h3>
                <p className="text-sm text-text-secondary text-center">
                  预测楼层布局和难度
                </p>
              </div>
            </Link>
          </div>
        </div>

        {/* SEO Content */}
        <div className="bg-bg-card p-8 rounded-xl border border-gray-600">
          <h2 className="text-2xl font-bold mb-6">🎮 为什么选择我们的游戏机制指南？</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-text-secondary">
            <div>
              <h3 className="text-lg font-semibold mb-3 text-white">📖 全面性</h3>
              <p>涵盖从基础操作到高级策略的所有内容，适合各个水平的玩家</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3 text-white">🔬 准确性</h3>
              <p>基于大量游戏测试和社区反馈，确保信息的准确性和实用性</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3 text-white">⚡ 实用性</h3>
              <p>每个技巧都经过验证，可以直接应用到游戏中提升表现</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3 text-white">🔄 更新性</h3>
              <p>随着游戏更新持续优化内容，保持指南的时效性</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameMechanicsGuide;
