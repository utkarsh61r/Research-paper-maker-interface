import { useState } from 'react';
import { ChevronLeft, Download, FileDown } from 'lucide-react';
import { EditorSidebar } from './EditorSidebar';
import { EditorContent } from './EditorContent';
import { RightSidebar } from './RightSidebar';
import { StatusBadge } from './StatusBadge';
import { AskAIButton } from './AskAIButton';

interface PaperEditorProps {
  paper: any;
  onBack: () => void;
}

export function PaperEditor({ paper, onBack }: PaperEditorProps) {
  const [paperTitle, setPaperTitle] = useState(paper?.title || 'Untitled Research Paper');
  const [currentSection, setCurrentSection] = useState('abstract');

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Sticky Top Bar */}
      <div className="sticky top-16 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 z-40">
        <div className="max-w-[1600px] mx-auto px-6 py-4">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-4 flex-1 min-w-0">
              <button
                onClick={onBack}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
              >
                <ChevronLeft className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              </button>
              <input
                type="text"
                value={paperTitle}
                onChange={(e) => setPaperTitle(e.target.value)}
                className="flex-1 text-gray-900 dark:text-gray-100 bg-transparent border-none focus:outline-none focus:ring-0"
              />
              <StatusBadge status="draft" />
            </div>
            
            <div className="flex items-center gap-3">
              <button className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors flex items-center gap-2">
                <Download className="w-4 h-4" />
                Download
              </button>
              <button className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors flex items-center gap-2">
                <FileDown className="w-4 h-4" />
                Export to Word
              </button>
              <button className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors flex items-center gap-2">
                <FileDown className="w-4 h-4" />
                Export to PDF
              </button>
              <button className="px-5 py-2 bg-blue-600 dark:bg-blue-500 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors shadow-sm">
                Finish Paper
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Three Column Layout */}
      <div className="max-w-[1800px] mx-auto px-6 py-8">
        <div className="grid grid-cols-12 gap-8">
          {/* Left Sidebar - Section Navigation */}
          <div className="col-span-2">
            <EditorSidebar currentSection={currentSection} onSectionChange={setCurrentSection} />
          </div>

          {/* Middle - Main Editor */}
          <div className="col-span-6">
            <EditorContent currentSection={currentSection} />
          </div>

          {/* Right Sidebar - AI & Tools */}
          <div className="col-span-4">
            <RightSidebar />
          </div>
        </div>
      </div>

      {/* Floating AI Assistant */}
      <AskAIButton />
    </div>
  );
}