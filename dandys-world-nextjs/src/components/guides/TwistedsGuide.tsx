import React, { useState } from 'react';

interface TwistedCharacter {
  name: string;
  description: string;
  unlockCondition: string;
  difficulty: 'easy' | 'medium' | 'hard' | 'extreme';
  recommendedCharacters: string[];
  strategy: string[];
  tips: string[];
  researchBonus?: string;
}

const twistedCharacters: TwistedCharacter[] = [
  {
    name: 'Twisted Alice',
    description: 'Translation pending',
    unlockCondition: 'Translation pending',
    difficulty: 'medium',
    recommendedCharacters: ['Astro', 'Pebble', 'Shelly'],
    strategy: [
      'Translation pending',
      'Translation pending',
      'Translation pending'
    ],
    tips: [
      'Translation pending',
      'Translation pending',
      'Translation pending'
    ],
    researchBonus: 'Translation pending'
  },
  {
    name: 'Twisted Bob',
    description: 'Translation pending',
    unlockCondition: 'Translation pending',
    difficulty: 'hard',
    recommendedCharacters: ['Vee', 'Rodger', 'Brightney'],
    strategy: [
      'Translation pending',
      'Translation pending',
      'Translation pending'
    ],
    tips: [
      'Translation pending',
      'Translation pending',
      'Translation pending'
    ],
    researchBonus: 'Translation pending'
  },
  {
    name: 'Twisted Charlie',
    description: 'Translation pending',
    unlockCondition: 'Translation pending',
    difficulty: 'extreme',
    recommendedCharacters: ['Sprout', 'Tisha', 'Goob'],
    strategy: [
      'Translation pending',
      'Translation pending',
      'Translation pending'
    ],
    tips: [
      'Translation pending',
      'Translation pending',
      'Translation pending'
    ],
    researchBonus: 'Translation pending'
  },
  {
    name: 'Twisted Delta',
    description: 'Translation pending',
    unlockCondition: 'Translation pending',
    difficulty: 'hard',
    recommendedCharacters: ['Finn', 'Connie', 'Flutter'],
    strategy: [
      'Translation pending',
      'Translation pending',
      'Translation pending'
    ],
    tips: [
      'Translation pending',
      'Translation pending',
      'Translation pending'
    ],
    researchBonus: 'Translation pending'
  },
  {
    name: 'Twisted Echo',
    description: 'Translation pending',
    unlockCondition: 'Translation pending',
    difficulty: 'medium',
    recommendedCharacters: ['Toodles', 'Gigi', 'Teagan'],
    strategy: [
      'Translation pending',
      'Translation pending',
      'Translation pending'
    ],
    tips: [
      'Translation pending',
      'Translation pending',
      'Translation pending'
    ],
    researchBonus: 'Translation pending'
  }
];

const TwistedsGuide: React.FC = () => {
  const [selectedTwisted, setSelectedTwisted] = useState<TwistedCharacter | null>(null);
  const [filterDifficulty, setFilterDifficulty] = useState<string>('all');

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'bg-green-600';
      case 'medium': return 'bg-yellow-600';
      case 'hard': return 'bg-orange-600';
      case 'extreme': return 'bg-red-600';
      default: return 'bg-gray-600';
    }
  };

  const getDifficultyIcon = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return '🟢';
      case 'medium': return '🟡';
      case 'hard': return '🟠';
      case 'extreme': return '🔴';
      default: return '⚪';
    }
  };

  const filteredTwisteds = filterDifficulty === 'all' 
    ? twistedCharacters 
    : twistedCharacters.filter(t => t.difficulty === filterDifficulty);

  return (
    <div className="max-w-6xl mx-auto">
      <div className="bg-bg-card rounded-lg p-8 shadow-lg">
        <h2 className="text-3xl font-bold text-text-primary mb-6 text-center">Translation pending</h2>
        
        <div className="text-center mb-8">
          <p className="text-text-secondary text-lg">Translation pending</p>
        </div>Translation pending<div className="flex flex-wrap justify-center gap-2 mb-8">
          <button
            onClick={() =>Translation pending</button>
          {['easy', 'medium', 'hard', 'extreme'].map(difficulty => (
            <button
              key={difficulty}
              onClick={() => setFilterDifficulty(difficulty)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                filterDifficulty === difficulty
                  ? 'bg-accent-main text-white'
                  : 'bg-bg-secondary text-text-secondary hover:bg-bg-card'
              }`}
            >
              {difficulty === 'easy' ? 'Translation pending' :
               difficulty === 'medium' ? 'Translation pending' :
               difficulty === 'hard' ? 'Translation pending' : 'Translation pending'}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">Translation pending<div className="space-y-4">
            <h3 className="text-xl font-semibold text-text-primary mb-4">Translation pending</h3>
            
            {filteredTwisteds.map((twisted) => (
              <div
                key={twisted.name}
                onClick={() => setSelectedTwisted(twisted)}
                className={`bg-bg-secondary rounded-lg p-4 cursor-pointer transition-all hover:bg-bg-card border-2 ${
                  selectedTwisted?.name === twisted.name
                    ? 'border-accent-main bg-bg-card'
                    : 'border-transparent'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-lg font-semibold text-text-primary">
                    {twisted.name}
                  </h4>
                  <span className={`px-2 py-1 rounded text-xs text-white font-medium ${getDifficultyColor(twisted.difficulty)}`}>
                    {getDifficultyIcon(twisted.difficulty)} {twisted.difficulty.toUpperCase()}
                  </span>
                </div>
                
                <p className="text-text-secondary text-sm mb-3">
                  {twisted.description}
                </p>
                
                <div className="text-xs text-accent-main font-medium">
                  {twisted.unlockCondition}
                </div>
              </div>
            ))}
          </div>Translation pending<div className="bg-bg-secondary rounded-lg p-6">
            {selectedTwisted ? (
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-text-primary">
                    {selectedTwisted.name}
                  </h3>
                  <span className={`px-3 py-1 rounded text-sm text-white font-medium ${getDifficultyColor(selectedTwisted.difficulty)}`}>
                    {getDifficultyIcon(selectedTwisted.difficulty)} {selectedTwisted.difficulty.toUpperCase()}
                  </span>
                </div>

                <div className="space-y-6">Translation pending<div>
                    <h4 className="text-lg font-medium text-text-primary mb-2">Translation pending</h4>
                    <p className="text-text-secondary bg-bg-card p-3 rounded-lg">
                      {selectedTwisted.unlockCondition}
                    </p>
                  </div>Translation pending<div>
                    <h4 className="text-lg font-medium text-text-primary mb-2">Translation pending</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedTwisted.recommendedCharacters.map(char => (
                        <span key={char} className="px-3 py-1 bg-accent-main text-white rounded-full text-sm">
                          {char}
                        </span>
                      ))}
                    </div>
                  </div>Translation pending<div>
                    <h4 className="text-lg font-medium text-text-primary mb-2">Translation pending</h4>
                    <ul className="space-y-2">
                      {selectedTwisted.strategy.map((strategy, index) => (
                        <li key={index} className="text-text-secondary bg-bg-card p-3 rounded-lg">
                          <span className="text-accent-main mr-2">•</span>
                          {strategy}
                        </li>
                      ))}
                    </ul>
                  </div>Translation pending<div>
                    <h4 className="text-lg font-medium text-text-primary mb-2">Translation pending</h4>
                    <ul className="space-y-2">
                      {selectedTwisted.tips.map((tip, index) => (
                        <li key={index} className="text-text-secondary bg-bg-card p-3 rounded-lg">
                          <span className="text-accent-main mr-2">💡</span>
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>Translation pending<div>
                      <h4 className="text-lg font-medium text-text-primary mb-2">Translation pending</h4>
                      <p className="text-text-secondary bg-bg-card p-3 rounded-lg">
                        {selectedTwisted.researchBonus}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🎭</div>
                <h3 className="text-lg font-medium text-text-primary mb-2">Translation pending</h3>
                <p className="text-text-secondary">Translation pending</p>
              </div>
            )}
          </div>
        </div>Translation pending<div className="mt-12 bg-bg-secondary rounded-lg p-6">
          <h3 className="text-xl font-semibold text-text-primary mb-4">Translation pending</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-medium text-text-primary mb-3">Translation pending</h4>
              <ul className="space-y-2 text-text-secondary">
                <li>Translation pending</li>
                <li>Translation pending</li>
                <li>Translation pending</li>
                <li>Translation pending</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-medium text-text-primary mb-3">Translation pending</h4>
              <ul className="space-y-2 text-text-secondary">
                <li>Translation pending</li>
                <li>Translation pending</li>
                <li>Translation pending</li>
                <li>Translation pending</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TwistedsGuide;
