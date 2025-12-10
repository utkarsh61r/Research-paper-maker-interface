import { useState } from 'react';
import { Sparkles, FileType, Wand2 } from 'lucide-react';
import { MultiStepWizard } from './MultiStepWizard';

export function NewPaperWizard() {
  const [activeMode, setActiveMode] = useState<'generate' | 'template'>('generate');
  const [showWizard, setShowWizard] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    subject: '',
    citationStyle: 'APA',
    description: '',
  });

  return (
    <>
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-8 hover:shadow-lg transition-shadow duration-300">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-gray-900 dark:text-gray-100">Create a New Research Paper</h2>
          <button
            onClick={() => setShowWizard(true)}
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            <Wand2 className="w-4 h-4" />
            Advanced Wizard
          </button>
        </div>

        <div className="space-y-5">
          {/* Paper Title */}
          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-2">Paper Title</label>
            <input
              type="text"
              placeholder="Enter your paper title..."
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500"
            />
          </div>

          {/* Subject/Domain */}
          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-2">Subject / Domain</label>
            <select
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            >
              <option value="">Select a subject...</option>
              <option value="computer-science">Computer Science</option>
              <option value="biology">Biology</option>
              <option value="chemistry">Chemistry</option>
              <option value="physics">Physics</option>
              <option value="psychology">Psychology</option>
              <option value="sociology">Sociology</option>
              <option value="economics">Economics</option>
              <option value="medicine">Medicine</option>
              <option value="engineering">Engineering</option>
              <option value="literature">Literature</option>
            </select>
          </div>

          {/* Citation Style */}
          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-2">Citation Style</label>
            <select
              value={formData.citationStyle}
              onChange={(e) => setFormData({ ...formData, citationStyle: e.target.value })}
              className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            >
              <option value="APA">APA</option>
              <option value="MLA">MLA</option>
              <option value="IEEE">IEEE</option>
              <option value="Chicago">Chicago</option>
              <option value="Harvard">Harvard</option>
            </select>
          </div>

          {/* Research Topic / Brief Description */}
          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-2">Research Topic / Brief Description</label>
            <textarea
              placeholder="Describe your research topic or question..."
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              rows={4}
              className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500"
            />
          </div>

          {/* Mode Selection */}
          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-3">Paper Creation Mode</label>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => setActiveMode('generate')}
                className={`p-4 border-2 rounded-xl transition-all ${
                  activeMode === 'generate'
                    ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/30'
                    : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                }`}
              >
                <Sparkles className={`w-5 h-5 mx-auto mb-2 ${
                  activeMode === 'generate' ? 'text-blue-600 dark:text-blue-400' : 'text-gray-400 dark:text-gray-600'
                }`} />
                <div className={activeMode === 'generate' ? 'text-blue-900 dark:text-blue-100' : 'text-gray-600 dark:text-gray-400'}>
                  Auto-generate outline
                </div>
              </button>
              <button
                onClick={() => setActiveMode('template')}
                className={`p-4 border-2 rounded-xl transition-all ${
                  activeMode === 'template'
                    ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/30'
                    : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                }`}
              >
                <FileType className={`w-5 h-5 mx-auto mb-2 ${
                  activeMode === 'template' ? 'text-blue-600 dark:text-blue-400' : 'text-gray-400 dark:text-gray-600'
                }`} />
                <div className={activeMode === 'template' ? 'text-blue-900 dark:text-blue-100' : 'text-gray-600 dark:text-gray-400'}>
                  Start from template
                </div>
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4">
            <button className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
              Continue
            </button>
            <button className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
              Save Draft
            </button>
          </div>
        </div>
      </div>

      {showWizard && <MultiStepWizard onClose={() => setShowWizard(false)} />}
    </>
  );
}