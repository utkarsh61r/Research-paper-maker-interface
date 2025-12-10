import { useState } from 'react';
import { Check, FileText, Sparkles, FileType, BookOpen, Upload, ArrowRight, ArrowLeft } from 'lucide-react';

interface MultiStepWizardProps {
  onClose: () => void;
}

const steps = [
  { id: 1, title: 'Paper Type', icon: FileType },
  { id: 2, title: 'Details', icon: FileText },
  { id: 3, title: 'Citation Style', icon: BookOpen },
  { id: 4, title: 'Context (Optional)', icon: Upload },
];

const paperTypes = [
  { id: 'research', name: 'Research Paper', icon: '🔬', description: 'Original research and findings' },
  { id: 'review', name: 'Literature Review', icon: '📚', description: 'Analysis of existing research' },
  { id: 'case', name: 'Case Study', icon: '🔍', description: 'In-depth analysis of specific cases' },
  { id: 'thesis', name: 'Thesis/Dissertation', icon: '🎓', description: 'Graduate-level research' },
  { id: 'lab', name: 'Lab Report', icon: '🧪', description: 'Experimental documentation' },
  { id: 'essay', name: 'Academic Essay', icon: '✍️', description: 'Argumentative or analytical writing' },
];

export function MultiStepWizard({ onClose }: MultiStepWizardProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    paperType: '',
    title: '',
    topic: '',
    keywords: [] as string[],
    citationStyle: '',
  });

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleFinish = () => {
    // Create paper logic here
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 w-full max-w-4xl max-h-[90vh] overflow-hidden animate-in slide-in-from-bottom-4 duration-300">
        {/* Header */}
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-gray-900 dark:text-gray-100 mb-6">Create New Research Paper</h2>

          {/* Progress Steps */}
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center flex-1">
                <div className="flex flex-col items-center flex-1">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                      currentStep > step.id
                        ? 'bg-green-500 text-white'
                        : currentStep === step.id
                        ? 'bg-blue-600 text-white scale-110'
                        : 'bg-gray-200 dark:bg-gray-700 text-gray-500'
                    }`}
                  >
                    {currentStep > step.id ? (
                      <Check className="w-6 h-6" />
                    ) : (
                      <step.icon className="w-6 h-6" />
                    )}
                  </div>
                  <span
                    className={`mt-2 text-sm transition-colors ${
                      currentStep >= step.id
                        ? 'text-gray-900 dark:text-gray-100'
                        : 'text-gray-500 dark:text-gray-400'
                    }`}
                  >
                    {step.title}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`h-1 flex-1 mx-2 transition-all duration-300 ${
                      currentStep > step.id ? 'bg-green-500' : 'bg-gray-200 dark:bg-gray-700'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-300px)]">
          {/* Step 1: Paper Type */}
          {currentStep === 1 && (
            <div className="animate-in fade-in duration-300">
              <h3 className="text-gray-900 dark:text-gray-100 mb-4">Choose Your Paper Type</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {paperTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setFormData({ ...formData, paperType: type.id })}
                    className={`p-6 rounded-xl border-2 transition-all duration-300 text-left hover:scale-105 ${
                      formData.paperType === type.id
                        ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/30 shadow-lg'
                        : 'border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600'
                    }`}
                  >
                    <div className="text-4xl mb-3">{type.icon}</div>
                    <div className="text-gray-900 dark:text-gray-100 mb-2">{type.name}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">{type.description}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Details */}
          {currentStep === 2 && (
            <div className="animate-in fade-in duration-300 space-y-6">
              <div>
                <label className="block text-gray-700 dark:text-gray-300 mb-2">Paper Title</label>
                <input
                  type="text"
                  placeholder="Enter your paper title..."
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                />
              </div>

              <div>
                <label className="block text-gray-700 dark:text-gray-300 mb-2">Research Topic / Brief Description</label>
                <textarea
                  placeholder="Describe your research topic or question..."
                  value={formData.topic}
                  onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                />
              </div>

              <div>
                <label className="block text-gray-700 dark:text-gray-300 mb-2">Keywords (Press Enter to add)</label>
                <input
                  type="text"
                  placeholder="Add keywords..."
                  onKeyPress={(e) => {
                    if (e.key === 'Enter' && (e.target as HTMLInputElement).value) {
                      setFormData({
                        ...formData,
                        keywords: [...formData.keywords, (e.target as HTMLInputElement).value],
                      });
                      (e.target as HTMLInputElement).value = '';
                    }
                  }}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                />
                <div className="flex flex-wrap gap-2 mt-3">
                  {formData.keywords.map((keyword, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm flex items-center gap-2"
                    >
                      {keyword}
                      <button
                        onClick={() =>
                          setFormData({
                            ...formData,
                            keywords: formData.keywords.filter((_, i) => i !== index),
                          })
                        }
                        className="text-blue-500 hover:text-blue-700"
                      >
                        ×
                      </button>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Citation Style */}
          {currentStep === 3 && (
            <div className="animate-in fade-in duration-300">
              <h3 className="text-gray-900 dark:text-gray-100 mb-4">Select Citation Style</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {['APA 7th', 'MLA 9th', 'Chicago', 'IEEE', 'Harvard', 'Vancouver'].map((style) => (
                  <button
                    key={style}
                    onClick={() => setFormData({ ...formData, citationStyle: style })}
                    className={`p-6 rounded-xl border-2 transition-all duration-300 hover:scale-105 ${
                      formData.citationStyle === style
                        ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/30 shadow-lg'
                        : 'border-gray-200 dark:border-gray-700 hover:border-blue-300'
                    }`}
                  >
                    <div className="text-gray-900 dark:text-gray-100 mb-2">{style}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {style.includes('APA') && 'Social sciences format'}
                      {style.includes('MLA') && 'Humanities format'}
                      {style.includes('Chicago') && 'History and arts'}
                      {style.includes('IEEE') && 'Engineering format'}
                      {style.includes('Harvard') && 'Business and sciences'}
                      {style.includes('Vancouver') && 'Medical sciences'}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 4: Upload Context */}
          {currentStep === 4 && (
            <div className="animate-in fade-in duration-300">
              <h3 className="text-gray-900 dark:text-gray-100 mb-4">Upload Context (Optional)</h3>
              <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-xl p-12 text-center hover:border-blue-400 dark:hover:border-blue-500 transition-colors">
                <Upload className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-900 dark:text-gray-100 mb-2">
                  Upload PDFs, notes, or documents for context
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  This will help AI generate better suggestions
                </p>
                <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                  Choose Files
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gray-200 dark:border-gray-700 flex justify-between">
          <button
            onClick={onClose}
            className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
          >
            Cancel
          </button>

          <div className="flex gap-3">
            {currentStep > 1 && (
              <button
                onClick={handleBack}
                className="flex items-center gap-2 px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back
              </button>
            )}

            {currentStep < steps.length ? (
              <button
                onClick={handleNext}
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Next
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={handleFinish}
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Sparkles className="w-4 h-4" />
                Create Paper
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
