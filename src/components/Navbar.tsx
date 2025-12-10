import { Bell, ChevronDown, FileText, Moon, Sun, Search } from 'lucide-react';

interface NavbarProps {
  onNewPaper: () => void;
  onNavigate: (page: 'dashboard' | 'my-papers' | 'templates' | 'stats') => void;
  currentPage: string;
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
  onOpenCommandSearch: () => void;
}

export function Navbar({ onNewPaper, onNavigate, currentPage, isDarkMode, onToggleDarkMode, onOpenCommandSearch }: NavbarProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-700 z-50 transition-all duration-300">
      <div className="max-w-full px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
            <FileText className="w-5 h-5 text-white" />
          </div>
          <span className="text-gray-900 dark:text-gray-100">Research Paper Maker</span>
        </div>

        {/* Command Search Bar */}
        <button
          onClick={onOpenCommandSearch}
          className="flex items-center gap-3 px-4 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-xl transition-all duration-300 hover:scale-105 group max-w-md flex-1 mx-8"
        >
          <Search className="w-4 h-4 text-gray-500 dark:text-gray-400 group-hover:text-blue-500 transition-colors" />
          <span className="text-gray-500 dark:text-gray-400 flex-1 text-left">Quick search...</span>
          <kbd className="hidden sm:inline-flex items-center gap-1 px-2 py-1 bg-white dark:bg-gray-800 rounded border border-gray-300 dark:border-gray-600 text-gray-500 dark:text-gray-400">
            <span className="text-xs">⌘K</span>
          </kbd>
        </button>

        {/* Right side actions */}
        <div className="flex items-center gap-4">
          <button 
            onClick={onToggleDarkMode}
            className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-all duration-300 hover:scale-110"
            title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          <button className="relative p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-all duration-300 hover:scale-110">
            <Bell className="w-5 h-5" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
          </button>

          <button className="flex items-center gap-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-all duration-300">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white">
              JD
            </div>
            <ChevronDown className="w-4 h-4 text-gray-600 dark:text-gray-400" />
          </button>

          <button
            onClick={onNewPaper}
            className="px-5 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg transition-all duration-300 shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 hover:scale-105"
          >
            New Paper
          </button>
        </div>
      </div>
    </nav>
  );
}