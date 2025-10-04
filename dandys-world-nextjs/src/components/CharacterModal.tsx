import React from 'react';
import { Character } from '../types/character';

interface CharacterModalProps {
  character: Character | null;
  isOpen: boolean;
  onClose: () => void;
}

const CharacterModal: React.FC<CharacterModalProps> = ({ character, isOpen, onClose }) => {
  if (!character || !isOpen) return null;

  const stats = character.attributes || (character as any).stats || {};

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50">
      <div className="bg-bg-card border border-gray-700 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-start p-6 border-b border-gray-700">
          <div>
            <h2 className="text-3xl font-bold mb-2">{character.name}</h2>
            <p className="text-text-secondary capitalize">
              {character.type} • {character.rarity}
            </p>
          </div>
          <button onClick={onClose} className="text-2xl text-gray-400 hover:text-white">×</button>
        </div>

        <div className="p-6 space-y-6">
          <section>
            <h3 className="text-xl font-semibold mb-3">Overview</h3>
            <p className="text-text-secondary">
              {character.description || 'Detailed description will be added soon.'}
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-3">Stats</h3>
            {Object.keys(stats).length === 0 ? (
              <p className="text-text-secondary">Stat information is being collected for this character.</p>
            ) : (
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-text-secondary">
                {Object.entries(stats).map(([key, value]) => (
                  <li key={key} className="flex justify-between bg-bg-secondary border border-gray-700 rounded-lg px-4 py-2">
                    <span className="capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                    <span className="text-white font-semibold">{String(value)}</span>
                  </li>
                ))}
              </ul>
            )}
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-3">Unlock Requirements</h3>
            <p className="text-text-secondary">
              Unlock details are being translated. Check the Progress Tracker for up-to-date planning tools.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-3">Strategy Notes</h3>
            <p className="text-text-secondary">
              Playstyle tips, best team pairings, and counter-play guidance will be added once the English rewrite is
              complete.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CharacterModal;
