import { Check, Circle } from 'lucide-react';

interface EditorSidebarProps {
  currentSection: string;
  onSectionChange: (section: string) => void;
}

const sections = [
  { id: 'title-page', label: 'Title Page', completed: true },
  { id: 'abstract', label: 'Abstract', completed: true },
  { id: 'introduction', label: 'Introduction', completed: false },
  { id: 'literature-review', label: 'Literature Review', completed: false },
  { id: 'methodology', label: 'Methodology', completed: false },
  { id: 'results', label: 'Results', completed: false },
  { id: 'discussion', label: 'Discussion', completed: false },
  { id: 'conclusion', label: 'Conclusion', completed: false },
  { id: 'references', label: 'References', completed: false },
];

export function EditorSidebar({ currentSection, onSectionChange }: EditorSidebarProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-4 sticky top-32">
      <h3 className="text-gray-900 dark:text-gray-100 mb-4 px-2">Sections</h3>
      <nav className="space-y-1">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => onSectionChange(section.id)}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors text-left ${
              currentSection === section.id
                ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400'
                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
            }`}
          >
            {section.completed ? (
              <Check className="w-4 h-4 text-green-600 dark:text-green-400 flex-shrink-0" />
            ) : (
              <Circle className="w-4 h-4 text-gray-400 dark:text-gray-600 flex-shrink-0" />
            )}
            <span className="truncate">{section.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}