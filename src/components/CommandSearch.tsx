import { useState, useEffect } from 'react';
import { Search, FileText, Sparkles, BookOpen, BarChart3, FileType, Home, X } from 'lucide-react';

interface CommandSearchProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (page: 'dashboard' | 'my-papers' | 'templates' | 'stats') => void;
}

const quickActions = [
  { icon: Home, label: 'Go to Dashboard', action: 'dashboard', color: 'text-blue-500' },
  { icon: FileText, label: 'My Papers', action: 'my-papers', color: 'text-purple-500' },
  { icon: FileType, label: 'Browse Templates', action: 'templates', color: 'text-green-500' },
  { icon: BarChart3, label: 'View Stats & Insights', action: 'stats', color: 'text-orange-500' },
  { icon: Sparkles, label: 'Ask AI Assistant', action: 'ai', color: 'text-pink-500' },
  { icon: BookOpen, label: 'Import References', action: 'import', color: 'text-indigo-500' },
];

export function CommandSearch({ isOpen, onClose, onNavigate }: CommandSearchProps) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);

  const filteredActions = quickActions.filter(action =>
    action.label.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    if (!isOpen) {
      setQuery('');
      setSelectedIndex(0);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex(prev => (prev + 1) % filteredActions.length);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex(prev => (prev - 1 + filteredActions.length) % filteredActions.length);
      } else if (e.key === 'Enter' && filteredActions[selectedIndex]) {
        e.preventDefault();
        handleAction(filteredActions[selectedIndex].action);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, selectedIndex, filteredActions]);

  const handleAction = (action: string) => {
    if (['dashboard', 'my-papers', 'templates', 'stats'].includes(action)) {
      onNavigate(action as any);
    }
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] flex items-start justify-center pt-32 animate-in fade-in duration-200">
      <div className="w-full max-w-2xl bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden animate-in slide-in-from-top-4 duration-300">
        {/* Search Input */}
        <div className="flex items-center gap-3 p-4 border-b border-gray-200 dark:border-gray-700">
          <Search className="w-5 h-5 text-gray-400" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command or search..."
            className="flex-1 bg-transparent border-none focus:outline-none text-gray-900 dark:text-gray-100 placeholder-gray-500"
            autoFocus
          />
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
          >
            <X className="w-4 h-4 text-gray-500" />
          </button>
        </div>

        {/* Results */}
        <div className="max-h-96 overflow-y-auto p-2">
          {filteredActions.length > 0 ? (
            <div className="space-y-1">
              {filteredActions.map((action, index) => (
                <button
                  key={action.action}
                  onClick={() => handleAction(action.action)}
                  onMouseEnter={() => setSelectedIndex(index)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                    index === selectedIndex
                      ? 'bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-500'
                      : 'hover:bg-gray-50 dark:hover:bg-gray-700/50'
                  }`}
                >
                  <action.icon className={`w-5 h-5 ${action.color}`} />
                  <span className="text-gray-900 dark:text-gray-100">{action.label}</span>
                  {index === selectedIndex && (
                    <span className="ml-auto text-gray-400 text-sm">↵</span>
                  )}
                </button>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 text-gray-500 dark:text-gray-400">
              No results found for "{query}"
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-4 py-3 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 flex items-center justify-between text-gray-500 dark:text-gray-400">
          <div className="flex items-center gap-4 text-xs">
            <div className="flex items-center gap-1">
              <kbd className="px-2 py-1 bg-white dark:bg-gray-800 rounded border border-gray-300 dark:border-gray-600">↑</kbd>
              <kbd className="px-2 py-1 bg-white dark:bg-gray-800 rounded border border-gray-300 dark:border-gray-600">↓</kbd>
              <span>Navigate</span>
            </div>
            <div className="flex items-center gap-1">
              <kbd className="px-2 py-1 bg-white dark:bg-gray-800 rounded border border-gray-300 dark:border-gray-600">↵</kbd>
              <span>Select</span>
            </div>
            <div className="flex items-center gap-1">
              <kbd className="px-2 py-1 bg-white dark:bg-gray-800 rounded border border-gray-300 dark:border-gray-600">Esc</kbd>
              <span>Close</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
