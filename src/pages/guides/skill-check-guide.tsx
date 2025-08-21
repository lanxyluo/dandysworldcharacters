import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const SkillCheckGuide: React.FC = () => {
  const skillCheckTypes = [
    {
      name: '感知检查',
      description: '发现隐藏物品和秘密通道',
      icon: '👁️',
      difficulty: '中等',
      tips: [
        '在黑暗区域使用手电筒提高成功率',
        '注意环境中的细微变化',
        '某些饰品可以提升感知能力'
      ]
    },
    {
      name: '技术检查',
      description: '破解密码、修理设备',
      icon: '🔧',
      difficulty: '困难',
      tips: [
        '携带技术相关饰品',
        '在安全区域进行尝试',
        '失败后寻找替代方案'
      ]
    },
    {
      name: '体力检查',
      description: '攀爬、跳跃、搬运重物',
      icon: '💪',
      difficulty: '简单',
      tips: [
        '确保体力充足',
        '使用体力恢复物品',
        '寻找更安全的路径'
      ]
    },
    {
      name: '社交检查',
      description: '与NPC对话、获取信息',
      icon: '💬',
      difficulty: '中等',
      tips: [
        '选择合适的对话选项',
        '注意NPC的情绪状态',
        '某些角色有社交加成'
      ]
    }
  ];

  const strategies = [
    {
      title: '准备阶段',
      content: '在进行技能检查前，确保角色状态良好，携带相关饰品，选择合适的时间和环境。'
    },
    {
      title: '执行阶段',
      content: '专注操作，避免分心。某些检查需要连续成功，保持冷静很重要。'
    },
    {
      title: '失败处理',
      content: '技能检查失败不要气馁，寻找替代方案或等待状态恢复后重试。'
    },
    {
      title: '成功奖励',
      content: '成功完成技能检查通常能获得稀有物品、隐藏信息或解锁新区域。'
    }
  ];

  return (
    <div className="min-h-screen bg-bg-primary text-white pt-20">
      <Helmet>
        <title>技能检查机制详解 - Dandy's World游戏攻略</title>
        <meta name="description" content="深入解析Dandy's World中的技能检查系统，包括感知、技术、体力、社交等各类检查的触发条件和应对策略。" />
        <meta name="keywords" content="Dandy's World技能检查,感知检查,技术检查,体力检查,社交检查,游戏攻略" />
        <meta property="og:title" content="技能检查机制详解 - Dandy's World游戏攻略" />
        <meta property="og:description" content="深入解析Dandy's World中的技能检查系统，包括感知、技术、体力、社交等各类检查的触发条件和应对策略。" />
        <link rel="canonical" href="/guides/skill-check-guide" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-text-secondary">
            <li><Link to="/guides/game-mechanics" className="hover:text-accent-main transition-colors">游戏机制指南</Link></li>
            <li><span className="mx-2">/</span></li>
            <li className="text-white">技能检查机制详解</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            🎯 技能检查机制详解
          </h1>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            掌握各种技能检查的触发条件和应对策略，提高游戏中的成功率
          </p>
        </div>

        {/* Table of Contents */}
        <div className="bg-bg-card p-6 rounded-xl border border-gray-600 mb-12">
          <h2 className="text-2xl font-bold mb-4">📋 目录</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold mb-2">技能检查类型</h3>
              <ul className="space-y-1 text-text-secondary">
                <li>• 感知检查</li>
                <li>• 技术检查</li>
                <li>• 体力检查</li>
                <li>• 社交检查</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">策略指南</h3>
              <ul className="space-y-1 text-text-secondary">
                <li>• 准备阶段</li>
                <li>• 执行阶段</li>
                <li>• 失败处理</li>
                <li>• 成功奖励</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Skill Check Types */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">🔍 技能检查类型详解</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCheckTypes.map((type, index) => (
              <div key={index} className="bg-bg-card p-6 rounded-xl border border-gray-600">
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-4">{type.icon}</span>
                  <div>
                    <h3 className="text-xl font-semibold">{type.name}</h3>
                    <span className={`px-2 py-1 rounded text-xs ${
                      type.difficulty === '简单' ? 'bg-green-500/20 text-green-400' :
                      type.difficulty === '中等' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-red-500/20 text-red-400'
                    }`}>
                      {type.difficulty}
                    </span>
                  </div>
                </div>
                <p className="text-text-secondary mb-4">{type.description}</p>
                <div>
                  <h4 className="font-semibold mb-2">💡 技巧提示：</h4>
                  <ul className="space-y-1 text-sm text-text-secondary">
                    {type.tips.map((tip, tipIndex) => (
                      <li key={tipIndex}>• {tip}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Strategies */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">📚 技能检查策略指南</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {strategies.map((strategy, index) => (
              <div key={index} className="bg-bg-card p-6 rounded-xl border border-gray-600">
                <h3 className="text-xl font-semibold mb-3">{strategy.title}</h3>
                <p className="text-text-secondary leading-relaxed">{strategy.content}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Advanced Tips */}
        <div className="bg-bg-card p-8 rounded-xl border border-gray-600 mb-12">
          <h2 className="text-2xl font-bold mb-6">🚀 高级技巧</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-3 text-accent-main">饰品协同</h3>
              <p className="text-text-secondary">
                某些饰品组合可以显著提升特定技能检查的成功率。例如，技术饰品配合感知饰品可以解锁隐藏的技术检查选项。
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3 text-accent-main">环境利用</h3>
              <p className="text-text-secondary">
                注意环境因素对技能检查的影响。在光线充足的地方进行感知检查，在安静环境中进行技术检查。
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3 text-accent-main">角色选择</h3>
              <p className="text-text-secondary">
                不同角色在特定技能检查上有天然优势。根据任务需求选择合适的角色可以提高成功率。
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3 text-accent-main">时机把握</h3>
              <p className="text-text-secondary">
                某些技能检查需要在特定时机进行。观察游戏节奏，选择最佳时机进行尝试。
              </p>
            </div>
          </div>
        </div>

        {/* Related Guides */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">📖 相关指南</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link to="/guides/stamina-management" className="group">
              <div className="bg-bg-card p-4 rounded-lg border border-gray-600 hover:border-accent-main transition-colors">
                <h3 className="font-semibold mb-2 group-hover:text-accent-main transition-colors">体力管理技巧</h3>
                <p className="text-sm text-text-secondary">学习如何有效管理体力，为技能检查做好准备</p>
              </div>
            </Link>
            <Link to="/guides/stealth-system" className="group">
              <div className="bg-bg-card p-4 rounded-lg border border-gray-600 hover:border-accent-main transition-colors">
                <h3 className="font-semibold mb-2 group-hover:text-accent-main transition-colors">隐秘系统说明</h3>
                <p className="text-sm text-text-secondary">掌握隐秘技巧，在安全环境中进行技能检查</p>
              </div>
            </Link>
            <Link to="/guides/beginner-tips" className="group">
              <div className="bg-bg-card p-4 rounded-lg border border-gray-600 hover:border-accent-main transition-colors">
                <h3 className="font-semibold mb-2 group-hover:text-accent-main transition-colors">新手入门</h3>
                <p className="text-sm text-text-secondary">从基础开始，逐步掌握各种游戏机制</p>
              </div>
            </Link>
          </div>
        </div>

        {/* Back to Main Guide */}
        <div className="text-center">
          <Link 
            to="/guides/game-mechanics"
            className="inline-flex items-center px-6 py-3 bg-accent-main text-white rounded-lg hover:bg-accent-main/80 transition-colors"
          >
            ← 返回游戏机制指南
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SkillCheckGuide;
