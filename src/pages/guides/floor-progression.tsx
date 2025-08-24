import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../../components/Navigation';
import SEO from '../../components/SEO';

const FloorProgressionGuide: React.FC = () => {
  const floorTypes = [
    {
      name: 'Dyle\'s Floor',
      description: '神秘的实验楼层，充满未知的危险和机遇',
      icon: '🧪',
      difficulty: 'Extreme',
      objectives: [
        '探索实验区域和实验室',
        '收集研究数据和样本',
        '避免实验失败的后果',
        '寻找隐藏的研究资料'
      ],
      tips: [
        '保持高度警惕，实验区域变化莫测',
        '利用实验设备作为掩护',
        '注意环境中的异常现象',
        '团队协作至关重要'
      ],
      specialFeatures: [
        '动态环境变化',
        '实验失败机制',
        '稀有研究奖励',
        '特殊解锁条件'
      ]
    },
    {
      name: 'Rainbow Rooms',
      description: '色彩斑斓的特殊区域，每个房间都有独特的挑战',
      icon: '🌈',
      difficulty: 'Hard',
      objectives: [
        '探索不同颜色的房间',
        '解决色彩相关的谜题',
        '收集彩虹能量',
        '解锁隐藏通道'
      ],
      tips: [
        '注意房间颜色的变化规律',
        '彩虹能量可以增强能力',
        '某些颜色组合有特殊效果',
        '团队需要协调行动'
      ],
      specialFeatures: [
        '颜色变化机制',
        '彩虹能量系统',
        '隐藏房间解锁',
        '特殊奖励机制'
      ]
    },
    {
      name: 'Diner',
      description: '复古风格的餐厅区域，充满怀旧氛围和隐藏秘密',
      icon: '🍽️',
      difficulty: 'Medium',
      objectives: [
        '探索餐厅各个区域',
        '寻找食物和补给品',
        '解决餐厅相关谜题',
        '发现隐藏的菜单'
      ],
      tips: [
        '利用餐厅布局进行战术移动',
        '食物可以提供临时增益',
        '注意餐厅的营业时间机制',
        '厨房区域可能有特殊物品'
      ],
      specialFeatures: [
        '营业时间系统',
        '食物增益效果',
        '隐藏菜单解锁',
        '特殊用餐区域'
      ]
    },
    {
      name: 'Greenhouse',
      description: '充满生机的植物园，但植物可能具有危险性',
      icon: '🌱',
      difficulty: 'Medium',
      objectives: [
        '探索温室各个区域',
        '收集植物样本',
        '避免危险植物攻击',
        '寻找稀有植物'
      ],
      tips: [
        '注意植物的生长状态',
        '某些植物可以提供保护',
        '温室环境会影响角色状态',
        '利用植物进行掩护'
      ],
      specialFeatures: [
        '植物生长系统',
        '环境状态影响',
        '稀有植物收集',
        '生态平衡机制'
      ]
    },
    {
      name: 'Gift Shop',
      description: '充满惊喜的礼品店，每个礼物都可能带来意外',
      icon: '🎁',
      difficulty: 'Easy',
      objectives: [
        '探索礼品店区域',
        '收集有用的礼物',
        '解决礼物相关谜题',
        '寻找隐藏的惊喜'
      ],
      tips: [
        '礼物可能有正面或负面效果',
        '某些礼物可以组合使用',
        '注意礼物的包装颜色',
        '团队分享礼物效果'
      ],
      specialFeatures: [
        '礼物效果系统',
        '包装颜色机制',
        '组合礼物效果',
        '惊喜解锁机制'
      ]
    },
    {
      name: 'Warehouse',
      description: '巨大的仓储区域，充满机械设备和隐藏通道',
      icon: '🏭',
      difficulty: 'Hard',
      objectives: [
        '探索仓库各个区域',
        '操作机械设备',
        '寻找隐藏通道',
        '收集仓储物品'
      ],
      tips: [
        '利用机械设备进行掩护',
        '注意机械运转的声音',
        '隐藏通道可能通向重要区域',
        '团队分工探索不同区域'
      ],
      specialFeatures: [
        '机械设备系统',
        '隐藏通道网络',
        '仓储物品收集',
        '机械操作机制'
      ]
    }
  ];

  const characterSpecificFloors = [
    {
      name: 'Astro Map',
      description: '专为Astro设计的特殊楼层，充分利用潜行能力',
      icon: '🌙',
      difficulty: 'Hard',
      requirements: '需要Astro角色',
      specialMechanics: [
        '月光照明系统',
        '潜行检测机制',
        '阴影掩护区域',
        '特殊潜行奖励'
      ]
    },
    {
      name: 'Shelly Map',
      description: 'Shelly的专属楼层，考验团队协作和激励能力',
      icon: '🐚',
      difficulty: 'Hard',
      requirements: '需要Shelly角色',
      specialMechanics: [
        '团队激励系统',
        '协作任务机制',
        '团队状态共享',
        '特殊团队奖励'
      ]
    },
    {
      name: 'Sprout Map',
      description: 'Sprout的烘焙主题楼层，需要专注和细节处理',
      icon: '🍰',
      difficulty: 'Medium',
      requirements: '需要Sprout角色',
      specialMechanics: [
        '烘焙任务系统',
        '专注度检测',
        '细节观察挑战',
        '烘焙成果奖励'
      ]
    },
    {
      name: 'Vee Map',
      description: 'Vee的探索楼层，高亮显示重要目标和未完成机器',
      icon: '🔍',
      difficulty: 'Medium',
      requirements: '需要Vee角色',
      specialMechanics: [
        '目标高亮系统',
        '机器状态检测',
        '探索进度追踪',
        '特殊探索奖励'
      ]
    }
  ];

  const progressionStrategies = [
    {
      title: '楼层准备阶段',
      content: '在进入新楼层前，确保团队角色配置合理，携带必要的道具和装备。了解楼层的基本信息和特殊机制。'
    },
    {
      title: '探索策略',
      content: '系统性地探索每个区域，标记重要位置，识别安全区域和逃生路线。注意环境中的异常现象和变化。'
    },
    {
      title: '资源管理',
      content: '合理分配和使用资源，不要浪费珍贵物品。团队协作收集和分享资源，确保每个人都有必要的装备。'
    },
    {
      title: '适应性调整',
      content: '根据遇到的情况灵活调整策略。每个楼层都有独特的机制，需要快速学习和适应。'
    }
  ];

  const researchCapsules = [
    {
      name: '基础研究胶囊',
      description: '提供基础的游戏机制和楼层信息',
      location: '所有楼层',
      rewards: '基础知识和少量Ichor'
    },
    {
      name: '进阶研究胶囊',
      description: '包含高级策略和特殊机制信息',
      location: '中等难度楼层',
      rewards: '进阶策略和中等Ichor奖励'
    },
    {
      name: '专家研究胶囊',
      description: '提供专家级攻略和隐藏机制',
      location: '高难度楼层',
      rewards: '专家攻略和大量Ichor奖励'
    }
  ];

  const panicMode = {
    description: '当团队遇到极端危险时触发的特殊模式',
    triggers: [
      '团队成员大量受伤',
      '资源严重不足',
      '遇到无法应对的敌人',
      '环境条件极度恶劣'
    ],
    effects: [
      '角色能力临时提升',
      '特殊技能解锁',
      '团队状态共享',
      '紧急逃生机制激活'
    ],
    strategies: [
      '保持冷静，不要慌乱',
      '利用临时能力优势',
      '团队紧密协作',
      '寻找安全区域'
    ]
  };

  const blackouts = {
    description: '楼层中的电力中断现象，影响照明和机械设备',
    effects: [
      '环境变得极度黑暗',
      '机械设备停止运转',
      '敌人行为模式改变',
      '特殊机制激活'
    ],
    strategies: [
      '携带光源设备',
      '利用黑暗进行潜行',
      '注意声音线索',
      '团队保持联系'
    ]
  };

  return (
    <>
      <SEO
        title="Dandys World Floor Progression Guide | Complete Strategy & Tips"
        description="Master Dandy's World floor progression with comprehensive strategies, tips, and optimization techniques for each level."
        keywords="dandys world, floor progression, level strategy, game progression, floor guide, level tips"
        ogTitle="Dandys World Floor Progression Guide"
        ogDescription="Master Dandy's World floor progression with comprehensive strategies and tips"
        canonical="/guides/floor-progression"
      />
      <Navigation />
      <div className="min-h-screen bg-bg-primary text-white pt-20">
        

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <ol className="flex items-center space-x-2 text-text-secondary">
              <li><Link to="/guides/game-mechanics" className="hover:text-accent-main transition-colors">Game Mechanics Guide</Link></li>
              <li><span className="mx-2">/</span></li>
              <li className="text-white">Floor Progression Guide</li>
            </ol>
          </nav>

          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              🏢 Floor Progression Guide
            </h1>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              掌握Dandy's World中各种楼层的攻略策略，了解特殊机制和进阶技巧
            </p>
          </div>

          {/* Floor Types */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">楼层类型详解</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {floorTypes.map((floor, index) => (
                <div key={index} className="bg-bg-card rounded-lg p-6 border border-gray-600">
                  <div className="text-4xl mb-4">{floor.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{floor.name}</h3>
                  <p className="text-text-secondary mb-4">{floor.description}</p>
                  
                  <div className="mb-4">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      floor.difficulty === 'Easy' ? 'bg-green-600' :
                      floor.difficulty === 'Medium' ? 'bg-yellow-600' :
                      floor.difficulty === 'Hard' ? 'bg-orange-600' : 'bg-red-600'
                    }`}>
                      {floor.difficulty}
                    </span>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">主要目标：</h4>
                    <ul className="text-sm text-text-secondary space-y-1">
                      {floor.objectives.map((objective, idx) => (
                        <li key={idx}>• {objective}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">实用技巧：</h4>
                    <ul className="text-sm text-text-secondary space-y-1">
                      {floor.tips.map((tip, idx) => (
                        <li key={idx}>💡 {tip}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">特殊机制：</h4>
                    <ul className="text-sm text-text-secondary space-y-1">
                      {floor.specialFeatures.map((feature, idx) => (
                        <li key={idx}>🌟 {feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Character Specific Floors */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">角色专属楼层</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {characterSpecificFloors.map((floor, index) => (
                <div key={index} className="bg-bg-secondary rounded-lg p-6 border border-accent-main">
                  <div className="text-4xl mb-4">{floor.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{floor.name}</h3>
                  <p className="text-text-secondary mb-4">{floor.description}</p>
                  
                  <div className="mb-4">
                    <span className="px-2 py-1 rounded text-xs font-medium bg-accent-main">
                      {floor.difficulty}
                    </span>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">解锁要求：</h4>
                    <p className="text-sm text-text-secondary">{floor.requirements}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">特殊机制：</h4>
                    <ul className="text-sm text-text-secondary space-y-1">
                      {floor.specialMechanics.map((mechanic, idx) => (
                        <li key={idx}>⚡ {mechanic}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Progression Strategies */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">进阶策略</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {progressionStrategies.map((strategy, index) => (
                <div key={index} className="bg-bg-card rounded-lg p-6 border border-gray-600">
                  <h3 className="text-xl font-bold mb-3 text-accent-main">{strategy.title}</h3>
                  <p className="text-text-secondary">{strategy.content}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Research Capsules */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">研究胶囊系统</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {researchCapsules.map((capsule, index) => (
                <div key={index} className="bg-bg-secondary rounded-lg p-6 text-center">
                  <h3 className="text-lg font-bold mb-2">{capsule.name}</h3>
                  <p className="text-text-secondary mb-4">{capsule.description}</p>
                  <div className="text-sm">
                    <p className="font-semibold mb-1">位置：{capsule.location}</p>
                    <p className="text-accent-main">奖励：{capsule.rewards}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Special Mechanics */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">特殊机制</h2>
            
            {/* Panic Mode */}
            <div className="bg-bg-card rounded-lg p-6 mb-8 border border-red-600">
              <h3 className="text-2xl font-bold mb-4 text-red-400">🚨 恐慌模式</h3>
              <p className="text-text-secondary mb-4">{panicMode.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">触发条件：</h4>
                  <ul className="text-sm text-text-secondary space-y-1">
                    {panicMode.triggers.map((trigger, idx) => (
                      <li key={idx}>• {trigger}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">效果：</h4>
                  <ul className="text-sm text-text-secondary space-y-1">
                    {panicMode.effects.map((effect, idx) => (
                      <li key={idx}>⚡ {effect}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-4">
                <h4 className="font-semibold mb-2">应对策略：</h4>
                <ul className="text-sm text-text-secondary space-y-1">
                  {panicMode.strategies.map((strategy, idx) => (
                    <li key={idx}>💡 {strategy}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Blackouts */}
            <div className="bg-bg-card rounded-lg p-6 border border-gray-600">
              <h3 className="text-2xl font-bold mb-4 text-yellow-400">⚡ 停电机制</h3>
              <p className="text-text-secondary mb-4">{blackouts.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">影响：</h4>
                  <ul className="text-sm text-text-secondary space-y-1">
                    {blackouts.effects.map((effect, idx) => (
                      <li key={idx}>• {effect}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">应对策略：</h4>
                  <ul className="text-sm text-text-secondary space-y-1">
                    {blackouts.strategies.map((strategy, idx) => (
                      <li key={idx}>💡 {strategy}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Navigation Links */}
          <section className="text-center">
            <h3 className="text-2xl font-bold mb-6">继续探索其他指南</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/guides/twisted-mechanics"
                className="px-6 py-3 bg-accent-main text-white rounded-lg hover:bg-accent-main/80 transition-colors"
              >
                Twisted Mechanics Guide
              </Link>
              <Link
                to="/guides/team-strategies"
                className="px-6 py-3 bg-bg-card text-white rounded-lg hover:bg-accent-main transition-colors border border-gray-600"
              >
                Team Strategies Guide
              </Link>
              <Link
                to="/guides/beginner-tips"
                className="px-6 py-3 bg-bg-card text-white rounded-lg hover:bg-accent-main transition-colors border border-gray-600"
              >
                Beginner Tips Guide
              </Link>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default FloorProgressionGuide;
