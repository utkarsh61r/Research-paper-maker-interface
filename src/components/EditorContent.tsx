import { useState } from 'react';
import { Bold, Italic, List, ListOrdered, Quote } from 'lucide-react';

interface EditorContentProps {
  currentSection: string;
}

export function EditorContent({ currentSection }: EditorContentProps) {
  const [content, setContent] = useState('');
  const [wordCount, setWordCount] = useState(0);

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    setContent(text);
    const words = text.trim().split(/\s+/).filter(word => word.length > 0);
    setWordCount(words.length);
  };

  const getSectionLabel = () => {
    return currentSection
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700">
      {/* Section Header */}
      <div className="border-b border-gray-200 dark:border-gray-700 px-6 py-4">
        <div className="text-blue-600 dark:text-blue-400 mb-1">Editing: {getSectionLabel()}</div>
        <p className="text-gray-600 dark:text-gray-400">
          {currentSection === 'abstract' && 'Provide a concise summary of your research paper (150-250 words)'}
          {currentSection === 'introduction' && 'Introduce your research topic and establish context'}
          {currentSection === 'methodology' && 'Describe your research methods and procedures'}
          {currentSection === 'results' && 'Present your research findings and data'}
          {currentSection === 'conclusion' && 'Summarize your findings and their implications'}
        </p>
      </div>

      {/* Formatting Toolbar */}
      <div className="border-b border-gray-200 dark:border-gray-700 px-4 py-3 flex items-center gap-2">
        <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors" title="Bold">
          <Bold className="w-4 h-4 text-gray-700 dark:text-gray-300" />
        </button>
        <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors" title="Italic">
          <Italic className="w-4 h-4 text-gray-700 dark:text-gray-300" />
        </button>
        <div className="w-px h-6 bg-gray-300 dark:bg-gray-600 mx-1"></div>
        <select className="px-3 py-1.5 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors bg-white dark:bg-gray-800">
          <option>Normal</option>
          <option>Heading 1</option>
          <option>Heading 2</option>
          <option>Heading 3</option>
        </select>
        <div className="w-px h-6 bg-gray-300 dark:bg-gray-600 mx-1"></div>
        <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors" title="Bullet List">
          <List className="w-4 h-4 text-gray-700 dark:text-gray-300" />
        </button>
        <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors" title="Numbered List">
          <ListOrdered className="w-4 h-4 text-gray-700 dark:text-gray-300" />
        </button>
        <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors" title="Quote">
          <Quote className="w-4 h-4 text-gray-700 dark:text-gray-300" />
        </button>
        <div className="w-px h-6 bg-gray-300 dark:bg-gray-600 mx-1"></div>
        <button className="px-3 py-1.5 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded-lg transition-colors">
          Insert Citation
        </button>
      </div>

      {/* Text Editor */}
      <div className="p-6">
        <textarea
          value={content}
          onChange={handleContentChange}
          placeholder="Start writing your content here..."
          className="w-full h-[500px] border-none focus:outline-none focus:ring-0 resize-none text-gray-900 dark:text-gray-100 leading-relaxed bg-transparent placeholder-gray-400 dark:placeholder-gray-600"
        />
      </div>

      {/* Footer */}
      <div className="border-t border-gray-200 dark:border-gray-700 px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="text-gray-600 dark:text-gray-400">
            {wordCount} words • {content.length} characters
          </div>
          <div className="flex items-center gap-2 px-3 py-1 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 rounded-full text-sm">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            Grammar Check: Good
          </div>
        </div>
        <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
          Save Section
        </button>
      </div>
    </div>
  );
}