import { useState } from 'react';
import { FileText, Eye, Download, Star, Search } from 'lucide-react';

interface TemplatesProps {
  onSelectTemplate: () => void;
}

const templates = [
  {
    id: 1,
    name: 'APA 7th Edition',
    description: 'Standard format for psychology, education, and social sciences',
    category: 'Citation Style',
    popular: true,
    icon: '📄',
    color: 'from-blue-500 to-cyan-500',
    sections: ['Title Page', 'Abstract', 'Body', 'References'],
  },
  {
    id: 2,
    name: 'MLA 9th Edition',
    description: 'Format for humanities, literature, and language studies',
    category: 'Citation Style',
    popular: true,
    icon: '📚',
    color: 'from-purple-500 to-pink-500',
    sections: ['Header', 'Body', 'Works Cited'],
  },
  {
    id: 3,
    name: 'IEEE Standard',
    description: 'Technical and engineering research papers',
    category: 'Citation Style',
    popular: true,
    icon: '⚙️',
    color: 'from-orange-500 to-red-500',
    sections: ['Abstract', 'Introduction', 'Methodology', 'Results', 'References'],
  },
  {
    id: 4,
    name: 'Literature Review',
    description: 'Comprehensive review of existing research',
    category: 'Research Type',
    popular: false,
    icon: '📖',
    color: 'from-green-500 to-emerald-500',
    sections: ['Introduction', 'Theoretical Framework', 'Review', 'Conclusion'],
  },
  {
    id: 5,
    name: 'Case Study',
    description: 'In-depth analysis of a specific case or phenomenon',
    category: 'Research Type',
    popular: false,
    icon: '🔍',
    color: 'from-indigo-500 to-blue-500',
    sections: ['Background', 'Case Description', 'Analysis', 'Findings'],
  },
  {
    id: 6,
    name: 'Thesis/Dissertation',
    description: 'Graduate-level research document',
    category: 'Research Type',
    popular: true,
    icon: '🎓',
    color: 'from-pink-500 to-rose-500',
    sections: ['Abstract', 'Literature Review', 'Methodology', 'Results', 'Discussion'],
  },
  {
    id: 7,
    name: 'Lab Report',
    description: 'Scientific experiment documentation',
    category: 'Research Type',
    popular: false,
    icon: '🧪',
    color: 'from-teal-500 to-cyan-500',
    sections: ['Objective', 'Procedure', 'Results', 'Conclusion'],
  },
  {
    id: 8,
    name: 'Conference Paper',
    description: 'Academic conference submission format',
    category: 'Research Type',
    popular: false,
    icon: '🎤',
    color: 'from-yellow-500 to-orange-500',
    sections: ['Abstract', 'Introduction', 'Main Content', 'Conclusion'],
  },
];

export function Templates({ onSelectTemplate }: TemplatesProps) {
  const [selectedTemplate, setSelectedTemplate] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', 'Citation Style', 'Research Type'];

  const filteredTemplates = templates.filter(template => {
    const matchesSearch = template.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         template.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || template.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-[1600px] mx-auto px-6 py-8 animate-in fade-in duration-500">
      <div className="mb-8">
        <h1 className="text-gray-900 dark:text-gray-100 mb-2">Research Templates</h1>
        <p className="text-gray-600 dark:text-gray-400">Choose a template to get started quickly</p>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <div className="flex-1 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-gray-500" />
          <input
            type="text"
            placeholder="Search templates..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 transition-all duration-300"
          />
        </div>

        <div className="flex gap-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-3 rounded-xl transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-blue-600 dark:bg-blue-500 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600'
              }`}
            >
              {category === 'all' ? 'All Templates' : category}
            </button>
          ))}
        </div>
      </div>

      {/* Templates Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredTemplates.map((template, index) => (
          <div
            key={template.id}
            className="group relative bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 hover:shadow-xl hover:scale-105 transition-all duration-300 overflow-hidden cursor-pointer"
            style={{ animationDelay: `${index * 50}ms` }}
            onClick={() => setSelectedTemplate(template.id)}
          >
            {/* Gradient Background */}
            <div className={`absolute inset-0 bg-gradient-to-br ${template.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>

            {/* Popular Badge */}
            {template.popular && (
              <div className="absolute top-4 right-4 flex items-center gap-1 px-2 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 rounded-full text-xs">
                <Star className="w-3 h-3 fill-current" />
                Popular
              </div>
            )}

            <div className="relative">
              {/* Icon */}
              <div className="text-4xl mb-4">{template.icon}</div>

              {/* Content */}
              <h3 className="text-gray-900 dark:text-gray-100 mb-2">{template.name}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">{template.description}</p>

              {/* Category Badge */}
              <div className="inline-flex px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs mb-4">
                {template.category}
              </div>

              {/* Sections */}
              <div className="mb-4">
                <div className="text-xs text-gray-500 dark:text-gray-400 mb-2">Includes:</div>
                <div className="flex flex-wrap gap-1">
                  {template.sections.slice(0, 3).map((section, idx) => (
                    <span key={idx} className="text-xs px-2 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded">
                      {section}
                    </span>
                  ))}
                  {template.sections.length > 3 && (
                    <span className="text-xs px-2 py-1 bg-gray-50 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded">
                      +{template.sections.length - 3}
                    </span>
                  )}
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectTemplate();
                  }}
                  className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  <FileText className="w-4 h-4" />
                  Use Template
                </button>
                <button
                  onClick={(e) => e.stopPropagation()}
                  className="p-2 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors"
                >
                  <Eye className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredTemplates.length === 0 && (
        <div className="text-center py-16">
          <p className="text-gray-600 dark:text-gray-400">No templates found matching your criteria</p>
        </div>
      )}

      {/* Preview Modal */}
      {selectedTemplate && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
          onClick={() => setSelectedTemplate(null)}
        >
          <div
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 p-8 max-w-2xl w-full animate-in slide-in-from-bottom-4 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-gray-900 dark:text-gray-100 mb-4">
              {templates.find(t => t.id === selectedTemplate)?.name}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              {templates.find(t => t.id === selectedTemplate)?.description}
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => {
                  onSelectTemplate();
                  setSelectedTemplate(null);
                }}
                className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg transition-all duration-300"
              >
                Use This Template
              </button>
              <button
                onClick={() => setSelectedTemplate(null)}
                className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
