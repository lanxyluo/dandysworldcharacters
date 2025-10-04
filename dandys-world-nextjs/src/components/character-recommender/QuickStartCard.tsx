import React from 'react';

export const QuickStartCard: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-6 text-white shadow-lg shadow-blue-900/40">
      <h2 className="text-2xl font-bold mb-2">🚀 Quick Start</h2>
      <p className="text-sm text-purple-100 mb-4">
        Answer a few prompts and get a curated roster in under three minutes.
      </p>
      <ul className="space-y-2 text-sm">
        <li>✅ Set your experience and floor goals.</li>
        <li>✅ Mark unlocked characters and your current roster.</li>
        <li>✅ Review tailored picks and instantly compare stats.</li>
      </ul>
    </div>
  );
};

export default QuickStartCard;
