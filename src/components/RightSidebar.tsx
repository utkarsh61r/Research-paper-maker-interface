import { useState } from 'react';
import { Sparkles, FileText, BookOpen, Plus, ChevronDown, ChevronRight } from 'lucide-react';

export function RightSidebar() {
  const [activeTab, setActiveTab] = useState<'suggestions' | 'outline' | 'citations'>('suggestions');
  const [expandedOutline, setExpandedOutline] = useState<string[]>(['introduction', 'methodology']);

  const toggleOutlineSection = (section: string) => {
    setExpandedOutline(prev =>
      prev.includes(section)
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 sticky top-32">
      {/* Tabs */}
      <div className="border-b border-gray-200 dark:border-gray-700 flex">
        <button
          onClick={() => setActiveTab('suggestions')}
          className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 border-b-2 transition-colors ${
            activeTab === 'suggestions'
              ? 'border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400'
              : 'border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100'
          }`}
        >
          <Sparkles className="w-4 h-4" />
          AI
        </button>
        <button
          onClick={() => setActiveTab('outline')}
          className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 border-b-2 transition-colors ${
            activeTab === 'outline'
              ? 'border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400'
              : 'border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100'
          }`}
        >
          <FileText className="w-4 h-4" />
          Outline
        </button>
        <button
          onClick={() => setActiveTab('citations')}
          className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 border-b-2 transition-colors ${
            activeTab === 'citations'
              ? 'border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400'
              : 'border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          Citations
        </button>
      </div>

      {/* Tab Content */}
      <div className="p-5 max-h-[calc(100vh-240px)] overflow-y-auto">
        {activeTab === 'suggestions' && (
          <div className="space-y-4">
            <h3 className="text-gray-900 dark:text-gray-100">AI Suggestions</h3>
            <div className="space-y-3">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                <p className="text-gray-900 dark:text-gray-100 mb-3">
                  "The abstract should summarize the key findings and methodology used in this research. Consider including the research question, methods, main results, and implications."
                </p>
                <button className="px-4 py-2 bg-blue-600 dark:bg-blue-500 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors w-full">
                  Insert
                </button>
              </div>
              
              <div className="p-4 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg">
                <p className="text-gray-900 dark:text-gray-100 mb-3">
                  "Add a transition sentence that connects your introduction to the literature review section for better flow."
                </p>
                <button className="px-4 py-2 bg-purple-600 dark:bg-purple-500 text-white rounded-lg hover:bg-purple-700 dark:hover:bg-purple-600 transition-colors w-full">
                  Insert
                </button>
              </div>
            </div>
            
            <button className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
              Generate More Suggestions
            </button>
          </div>
        )}

        {activeTab === 'outline' && (
          <div className="space-y-2">
            <h3 className="text-gray-900 dark:text-gray-100 mb-4">Paper Outline</h3>
            
            <div className="space-y-1">
              <button
                onClick={() => toggleOutlineSection('introduction')}
                className="w-full flex items-center gap-2 px-3 py-2 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg text-left"
              >
                {expandedOutline.includes('introduction') ? (
                  <ChevronDown className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                ) : (
                  <ChevronRight className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                )}
                <span className="text-gray-900 dark:text-gray-100">Introduction</span>
              </button>
              {expandedOutline.includes('introduction') && (
                <div className="ml-6 space-y-1 text-gray-600 dark:text-gray-400">
                  <div className="py-1.5 px-3">Background context</div>
                  <div className="py-1.5 px-3">Research question</div>
                  <div className="py-1.5 px-3">Significance</div>
                </div>
              )}

              <button className="w-full flex items-center gap-2 px-3 py-2 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg text-left">
                <ChevronRight className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                <span className="text-gray-900 dark:text-gray-100">Literature Review</span>
              </button>

              <button
                onClick={() => toggleOutlineSection('methodology')}
                className="w-full flex items-center gap-2 px-3 py-2 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg text-left"
              >
                {expandedOutline.includes('methodology') ? (
                  <ChevronDown className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                ) : (
                  <ChevronRight className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                )}
                <span className="text-gray-900 dark:text-gray-100">Methodology</span>
              </button>
              {expandedOutline.includes('methodology') && (
                <div className="ml-6 space-y-1 text-gray-600 dark:text-gray-400">
                  <div className="py-1.5 px-3">Research design</div>
                  <div className="py-1.5 px-3">Data collection</div>
                  <div className="py-1.5 px-3">Analysis methods</div>
                </div>
              )}

              <button className="w-full flex items-center gap-2 px-3 py-2 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg text-left">
                <ChevronRight className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                <span className="text-gray-900 dark:text-gray-100">Results</span>
              </button>

              <button className="w-full flex items-center gap-2 px-3 py-2 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg text-left">
                <ChevronRight className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                <span className="text-gray-900 dark:text-gray-100">Discussion</span>
              </button>

              <button className="w-full flex items-center gap-2 px-3 py-2 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg text-left">
                <ChevronRight className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                <span className="text-gray-900 dark:text-gray-100">Conclusion</span>
              </button>
            </div>
          </div>
        )}

        {activeTab === 'citations' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-gray-900 dark:text-gray-100">Citations</h3>
              <span className="text-gray-600 dark:text-gray-400">12 sources</span>
            </div>
            
            <div className="space-y-3">
              <div className="p-3 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-blue-200 dark:hover:border-blue-700 transition-colors">
                <div className="text-gray-900 dark:text-gray-100 mb-1">Smith, J. (2023)</div>
                <p className="text-gray-600 dark:text-gray-400">Machine learning in healthcare applications</p>
              </div>
              
              <div className="p-3 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-blue-200 dark:hover:border-blue-700 transition-colors">
                <div className="text-gray-900 dark:text-gray-100 mb-1">Johnson, A. (2022)</div>
                <p className="text-gray-600 dark:text-gray-400">Deep learning techniques for medical diagnosis</p>
              </div>
              
              <div className="p-3 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-blue-200 dark:hover:border-blue-700 transition-colors">
                <div className="text-gray-900 dark:text-gray-100 mb-1">Williams, R. (2021)</div>
                <p className="text-gray-600 dark:text-gray-400">Neural networks in predictive healthcare</p>
              </div>
            </div>
            
            <div className="flex gap-2 pt-2">
              <button className="flex-1 px-4 py-2.5 bg-blue-600 dark:bg-blue-500 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors flex items-center justify-center gap-2">
                <Plus className="w-4 h-4" />
                Add Citation
              </button>
            </div>
            
            <button className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
              Import from DOI/URL
            </button>
          </div>
        )}
      </div>
    </div>
  );
}