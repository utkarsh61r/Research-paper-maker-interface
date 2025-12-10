import { Home, FileText, FileType, BarChart3, ChevronLeft, ChevronRight, Sparkles, BookOpen, Settings } from 'lucide-react';

interface CollapsibleSidebarProps {
  currentPage: string;
  onNavigate: (page: 'dashboard' | 'my-papers' | 'templates' | 'stats') => void;
  collapsed: boolean;
  onToggleCollapse: () => void;
}

const menuItems = [
  { id: 'dashboard', icon: Home, label: 'Dashboard', color: 'text-blue-500' },
  { id: 'my-papers', icon: FileText, label: 'My Papers', color: 'text-purple-500' },
  { id: 'templates', icon: FileType, label: 'Templates', color: 'text-green-500' },
  { id: 'stats', icon: BarChart3, label: 'Analytics', color: 'text-orange-500' },
];

const bottomItems = [
  { id: 'ai', icon: Sparkles, label: 'AI Assistant', color: 'text-pink-500' },
  { id: 'library', icon: BookOpen, label: 'Library', color: 'text-indigo-500' },
  { id: 'settings', icon: Settings, label: 'Settings', color: 'text-gray-500' },
];

export function CollapsibleSidebar({ currentPage, onNavigate, collapsed, onToggleCollapse }: CollapsibleSidebarProps) {
  return (
    <aside
      className={`fixed left-0 top-16 bottom-0 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 transition-all duration-300 z-40 ${
        collapsed ? 'w-20' : 'w-64'
      }`}
    >
      <div className="flex flex-col h-full">
        {/* Main Navigation */}
        <nav className="flex-1 p-3 space-y-1">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id as any)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 group ${
                currentPage === item.id
                  ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 shadow-sm'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
              }`}
            >
              <item.icon
                className={`w-5 h-5 transition-all duration-300 ${
                  currentPage === item.id
                    ? item.color
                    : 'text-gray-400 dark:text-gray-500 group-hover:text-gray-600 dark:group-hover:text-gray-300'
                } ${!collapsed && currentPage === item.id ? 'animate-pulse' : ''}`}
              />
              {!collapsed && (
                <span className="font-medium transition-all duration-300">{item.label}</span>
              )}
              {!collapsed && currentPage === item.id && (
                <div className="ml-auto w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              )}
            </button>
          ))}
        </nav>

        {/* Divider */}
        <div className="px-3 py-2">
          <div className="h-px bg-gray-200 dark:bg-gray-700"></div>
        </div>

        {/* Bottom Items */}
        <nav className="p-3 space-y-1">
          {bottomItems.map((item) => (
            <button
              key={item.id}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 group"
            >
              <item.icon className={`w-5 h-5 ${item.color} transition-all duration-300`} />
              {!collapsed && <span className="font-medium">{item.label}</span>}
            </button>
          ))}
        </nav>

        {/* Collapse Toggle */}
        <div className="p-3">
          <button
            onClick={onToggleCollapse}
            className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300 group"
          >
            {collapsed ? (
              <ChevronRight className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:scale-125 transition-transform" />
            ) : (
              <>
                <ChevronLeft className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:scale-125 transition-transform" />
                <span className="text-gray-600 dark:text-gray-400">Collapse</span>
              </>
            )}
          </button>
        </div>
      </div>
    </aside>
  );
}
