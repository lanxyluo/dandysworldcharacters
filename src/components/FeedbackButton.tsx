import React, { useState, useEffect, useRef } from 'react';
import { FORMSPREEE_CONFIG } from '../config/formspree';

interface FeedbackData {
  issueType: 'character-data' | 'calculation-bug' | 'ui-issue' | 'feature-request' | '';
  characterOrPage: string;
  description: string;
  userEmail: string;
  currentPage: string;
  currentTab: string;
  timestamp: string;
  userAgent: string;
}

interface FeedbackButtonProps {
  currentTab: string;
}

const FeedbackButton: React.FC<FeedbackButtonProps> = ({ currentTab }) => {
  const [showFeedback, setShowFeedback] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const [feedbackData, setFeedbackData] = useState<FeedbackData>Translation pending<>Translation pending<div className="fixed bottom-6 right-6 z-50">
        <button 
          onClick={() => setShowFeedback(true)}
          className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-gray-900"
        >
          🐛 Report Issue
        </button>
      </div>Translation pending<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div 
            ref={modalRef}
            className="bg-gray-800 rounded-lg p-6 w-full max-w-md mx-auto border-2 border-purple-600 shadow-2xl"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-white">Report an Issue</h2>
              <button
                onClick={() => setShowFeedback(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                ✕
              </button>
            </div>

            <form onSubmit={submitFeedback}>Translation pending<div className="mb-4">
                <label className="block text-purple-400 font-semibold mb-2">
                  Issue Type *
                </label>
                <select 
                  value={feedbackData.issueType}
                  onChange={(e) => handleInputChange('issueType', e.target.value)}
                  required
                  className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                >
                  <option value="">Select issue type...</option>
                  <option value="character-data">📊 Character Data Error</option>
                  <option value="calculation-bug">🧮 Calculation Bug</option>
                  <option value="ui-issue">🎨 UI/Display Issue</option>
                  <option value="feature-request">💡 Feature Request</option>
                </select>
              </div>Translation pending<div className="mb-4">
                <label className="block text-purple-400 font-semibold mb-2">
                  Character/Page
                </label>
                <input 
                  value={feedbackData.characterOrPage}
                  onChange={(e) => handleInputChange('characterOrPage', e.target.value)}
                  type="text" 
                  placeholder="e.g., Twisted Astro, Research Calculator"
                  className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                />
              </div>Translation pending<div className="mb-4">
                <label className="block text-purple-400 font-semibold mb-2">
                  Description *
                </label>
                <textarea 
                  value={feedbackData.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  required
                  rows={4}
                  placeholder="Please describe the issue or your suggestion in detail..."
                  className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors resize-none"
                />
              </div>Translation pending<div className="mb-6">
                <label className="block text-purple-400 font-semibold mb-2">
                  Your Email (optional)
                </label>
                <input 
                  value={feedbackData.userEmail}
                  onChange={(e) => handleInputChange('userEmail', e.target.value)}
                  type="email" 
                  placeholder="If you want us to follow up with you"
                  className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                />
              </div>Translation pending<div className="flex justify-end space-x-3">
                <button 
                  type="button" 
                  onClick={() => setShowFeedback(false)}
                  className="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  disabled={!feedbackData.issueType || !feedbackData.description || isSubmitting}
                  className="px-4 py-2 bg-purple-600 hover:bg-purple-700 disabled:bg-gray-600 text-white rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Report'}
                </button>
              </div>
            </form>
          </div>
        </div>Translation pending<div className="fixed bottom-6 left-6 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-slide-up">
          ✅ Feedback submitted successfully! Thank you for helping us improve.
        </div>
      )}

      <style jsx>{`
        @keyframes slide-up {
          from {
            transform: translateY(100px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }
      `}</style>
    </>
  );
};

export default FeedbackButton;
