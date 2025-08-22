import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navigation from '../../components/Navigation';

const TwistedMechanicsGuide: React.FC = () => {
  const twistedTypes = [
    {
      name: 'Bloodlust',
      description: '具有强烈攻击欲望的追踪者，通过声音和移动来追踪目标',
      icon: '🩸',
      behavior: '一旦被惊动就会 relentless 地追击玩家',
      weaknesses: [
        '巨大的噪音会分散它们的注意力',
        '在开阔区域可以被机动性超越',
        '如果失去目标会逐渐失去兴趣'
      ],
      strategies: [
        '利用环境噪音制造干扰',
        '在开阔区域保持移动优势',
        '利用障碍物甩开追击'
      ]
    },
    {
      name: 'Shadow Stalker',
      description: '从阴影中出现的潜行型敌人，擅长伏击战术',
      icon: '👤',
      behavior: '从阴影中突然出现进行伏击',
      weaknesses: [
        '避免光线充足的区域',
        '可以被光源检测到',
        '在转换阶段比较脆弱'
      ],
      strategies: [
        '携带光源设备',
        '注意阴影变化',
        '在转换阶段进行反击'
      ]
    },
    {
      name: 'Mimic',
      description: '能够伪装成友好角色或物体的欺骗者',
      icon: '🎭',
      behavior: '通过欺骗引诱玩家进入陷阱',
      weaknesses: [
        '会露出细微的行为线索',
        '无法无限期维持伪装',
        '在变形时比较脆弱'
      ],
      strategies: [
        '仔细观察行为模式',
        '注意细节差异',
        '在变形时抓住机会'
      ]
    },
    {
      name: 'Phantom',
      description: '能够穿墙和障碍物的超自然存在',
      icon: '👻',
      behavior: '突然出现并能够困住玩家',
      weaknesses: [
        '只能在特定区域活动',
        '无法穿过某些材料',
        '相位移动有冷却时间'
      ],
      strategies: [
        '了解活动范围限制',
        '利用特殊材料作为屏障',
        '在冷却期间行动'
      ]
    }
  ];

  const twistedCharacters = [
    {
      name: 'Twisted Boxten',
      description: '扭曲版本的Boxten，具有增强的追踪和攻击能力',
      type: 'Common',
      specialAbilities: [
        '增强的移动速度',
        '改进的追踪系统',
        '更强的攻击力'
      ],
      counterStrategies: [
        '利用Boxten的潜行能力',
        '团队协作分散注意力',
        '利用环境优势'
      ]
    },
    {
      name: 'Twisted Astro',
      description: '扭曲版本的Astro，具有黑暗和混乱的能力',
      type: 'Main Character',
      specialAbilities: [
        '黑暗操控能力',
        '混乱状态施加',
        '增强的潜行检测'
      ],
      counterStrategies: [
        '使用光源对抗黑暗',
        '保持团队状态稳定',
        '利用Astro的恢复能力'
      ]
    },
    {
      name: 'Twisted Rodger',
      description: '扭曲版本的Rodger，具有破坏性的研究能力',
      type: 'Rare',
      specialAbilities: [
        '破坏性研究技能',
        '环境干扰能力',
        '增强的追踪'
      ],
      counterStrategies: [
        '避免研究区域',
        '快速完成目标',
        '利用Rodger的研究优势'
      ]
    },
    {
      name: 'Twisted Vee',
      description: '扭曲版本的Vee，具有误导性的标记能力',
      type: 'Main Character',
      specialAbilities: [
        '误导性标记',
        '虚假目标显示',
        '增强的追踪能力'
      ],
      counterStrategies: [
        '验证标记的真实性',
        '团队信息共享',
        '利用Vee的检测能力'
      ]
    }
  ];

  const survivalStrategies = [
    {
      title: '预防检测',
      content: '学会无声移动并保持隐蔽。有效利用掩护，避免制造不必要的噪音。了解每个Twisted的检测范围和机制。'
    },
    {
      title: '逃生路线',
      content: '在进入新区域前，始终识别多条逃生路径。知道被发现时应该往哪里跑，以及如何重新获得隐蔽。'
    },
    {
      title: '分散注意力技巧',
      content: '利用环境物体和声音制造干扰，让你能够逃脱或重新定位。了解哪些物品可以制造噪音，哪些可以阻挡视线。'
    },
    {
      title: '团队协调',
      content: '在多人游戏中，协调移动并分享敌人位置和行为信息。制定清晰的沟通协议和紧急情况应对计划。'
    }
  ];

  const researchMechanics = {
    description: '研究Twisted角色是游戏的核心机制，需要策略和耐心',
    process: [
      '观察Twisted的行为模式',
      '记录它们的弱点和能力',
      '测试不同的应对策略',
      '收集研究数据和分析'
    ],
    rewards: [
      '解锁新的角色能力',
      '获得Ichor奖励',
      '解锁特殊内容',
      '提升团队整体实力'
    ],
    tips: [
      '研究需要时间，不要急于求成',
      '团队协作可以加速研究进度',
      '记录所有发现供团队分享',
      '利用Rodger的研究加成'
    ]
  };

  const dailyTwistedBoard = {
    description: '每日Twisted公告板系统，提供特殊的挑战和奖励',
    mechanics: [
      '每天更新不同的Twisted目标',
      '完成挑战获得额外奖励',
      '特殊的研究加成',
      '独特的解锁条件'
    ],
    strategies: [
      '每天检查公告板更新',
      '优先完成每日挑战',
      '利用特殊加成进行研究',
      '团队协作完成困难挑战'
    ]
  };

  const twistedResearch = {
    description: '深入研究Twisted角色的机制和弱点',
    researchAreas: [
      '行为模式分析',
      '弱点识别和利用',
      '环境互动机制',
      '团队协作策略'
    ],
    advancedTechniques: [
      '预测性移动',
      '环境操控',
      '心理战术',
      '资源优化利用'
    ]
  };

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-bg-primary text-white pt-20">
        <Helmet>
          <title>Twisted Character Mechanics Guide - Dandy's World Game Strategy</title>
          <meta name="description" content="深入了解Dandy's World中Twisted角色的行为模式、机制和生存策略。" />
          <meta name="keywords" content="Dandy's World Twisted characters,enemy mechanics,survival strategies,game guide" />
          <meta property="og:title" content="Twisted Character Mechanics Guide - Dandy's World Game Strategy" />
          <meta property="og:description" content="深入了解Twisted角色行为模式、机制和生存策略。" />
          <link rel="canonical" href="/guides/twisted-mechanics" />
        </Helmet>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <ol className="flex items-center space-x-2 text-text-secondary">
              <li><Link to="/guides/game-mechanics" className="hover:text-accent-main transition-colors">Game Mechanics Guide</Link></li>
              <li><span className="mx-2">/</span></li>
              <li className="text-white">Twisted Character Mechanics Guide</li>
            </ol>
          </nav>

          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              🚨 Twisted Character Mechanics Guide
            </h1>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              深入了解Twisted角色的行为模式、特殊能力和应对策略，掌握生存的关键技巧
            </p>
          </div>

          {/* Twisted Types */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Twisted类型详解</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {twistedTypes.map((type, index) => (
                <div key={index} className="bg-bg-card rounded-lg p-6 border border-gray-600">
                  <div className="text-4xl mb-4">{type.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{type.name}</h3>
                  <p className="text-text-secondary mb-4">{type.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">行为模式：</h4>
                    <p className="text-text-secondary text-sm">{type.behavior}</p>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">弱点：</h4>
                    <ul className="text-sm text-text-secondary space-y-1">
                      {type.weaknesses.map((weakness, idx) => (
                        <li key={idx}>• {weakness}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">应对策略：</h4>
                    <ul className="text-sm text-text-secondary space-y-1">
                      {type.strategies.map((strategy, idx) => (
                        <li key={idx}>💡 {strategy}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Twisted Characters */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">具体Twisted角色</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {twistedCharacters.map((character, index) => (
                <div key={index} className="bg-bg-secondary rounded-lg p-6 border border-accent-main">
                  <h3 className="text-xl font-bold mb-2">{character.name}</h3>
                  <p className="text-text-secondary mb-4">{character.description}</p>
                  
                  <div className="mb-4">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      character.type === 'Main Character' ? 'bg-purple-600' :
                      character.type === 'Rare' ? 'bg-purple-600' :
                      character.type === 'Uncommon' ? 'bg-blue-600' : 'bg-gray-600'
                    }`}>
                      {character.type}
                    </span>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">特殊能力：</h4>
                    <ul className="text-sm text-text-secondary space-y-1">
                      {character.specialAbilities.map((ability, idx) => (
                        <li key={idx}>⚡ {ability}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">应对策略：</h4>
                    <ul className="text-sm text-text-secondary space-y-1">
                      {character.counterStrategies.map((strategy, idx) => (
                        <li key={idx}>💡 {strategy}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Survival Strategies */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">生存策略</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {survivalStrategies.map((strategy, index) => (
                <div key={index} className="bg-bg-card rounded-lg p-6 border border-gray-600">
                  <h3 className="text-xl font-bold mb-3 text-accent-main">{strategy.title}</h3>
                  <p className="text-text-secondary">{strategy.content}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Research Mechanics */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">研究机制</h2>
            <div className="bg-bg-secondary rounded-lg p-6 border border-accent-main">
              <h3 className="text-xl font-bold mb-4">🔬 研究Twisted角色</h3>
              <p className="text-text-secondary mb-6">{researchMechanics.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">研究过程：</h4>
                  <ul className="text-sm text-text-secondary space-y-2">
                    {researchMechanics.process.map((step, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-accent-main mr-2">•</span>
                        {step}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3">研究奖励：</h4>
                  <ul className="text-sm text-text-secondary space-y-2">
                    {researchMechanics.rewards.map((reward, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-yellow-400 mr-2">⭐</span>
                        {reward}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6">
                <h4 className="font-semibold mb-3">研究技巧：</h4>
                <ul className="text-sm text-text-secondary space-y-2">
                  {researchMechanics.tips.map((tip, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-accent-main mr-2">💡</span>
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Daily Twisted Board */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">每日Twisted公告板</h2>
            <div className="bg-bg-card rounded-lg p-6 border border-yellow-600">
              <h3 className="text-2xl font-bold mb-4 text-yellow-400">📋 每日挑战系统</h3>
              <p className="text-text-secondary mb-6">{dailyTwistedBoard.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">系统机制：</h4>
                  <ul className="text-sm text-text-secondary space-y-2">
                    {dailyTwistedBoard.mechanics.map((mechanic, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-yellow-400 mr-2">⚡</span>
                        {mechanic}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3">策略建议：</h4>
                  <ul className="text-sm text-text-secondary space-y-2">
                    {dailyTwistedBoard.strategies.map((strategy, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-accent-main mr-2">💡</span>
                        {strategy}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Advanced Research */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">高级研究技巧</h2>
            <div className="bg-bg-secondary rounded-lg p-6 border border-purple-600">
              <h3 className="text-xl font-bold mb-4 text-purple-400">🔬 深入研究</h3>
              <p className="text-text-secondary mb-6">{twistedResearch.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">研究领域：</h4>
                  <ul className="text-sm text-text-secondary space-y-2">
                    {twistedResearch.researchAreas.map((area, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-purple-400 mr-2">•</span>
                        {area}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3">高级技巧：</h4>
                  <ul className="text-sm text-text-secondary space-y-2">
                    {twistedResearch.advancedTechniques.map((technique, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-accent-main mr-2">🎯</span>
                        {technique}
                      </li>
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
                to="/guides/floor-progression"
                className="px-6 py-3 bg-accent-main text-white rounded-lg hover:bg-accent-main/80 transition-colors"
              >
                Floor Progression Guide
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

export default TwistedMechanicsGuide;
