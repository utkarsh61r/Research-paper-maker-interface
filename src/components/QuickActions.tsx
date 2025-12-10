import { Plus, Sparkles, BookOpen, FileType, Download, Wand2 } from 'lucide-react';

const actions = [
  {
    icon: Plus,
    label: 'Create New Paper',
    description: 'Start from scratch',
    color: 'from-blue-500 to-cyan-500',
    iconBg: 'bg-blue-100 dark:bg-blue-900/30',
    iconColor: 'text-blue-600 dark:text-blue-400',
  },
  {
    icon: Wand2,
    label: 'Auto-Generate Abstract',
    description: 'AI-powered summary',
    color: 'from-purple-500 to-pink-500',
    iconBg: 'bg-purple-100 dark:bg-purple-900/30',
    iconColor: 'text-purple-600 dark:text-purple-400',
  },
  {
    icon: BookOpen,
    label: 'Import References',
    description: 'From DOI or URL',
    color: 'from-green-500 to-emerald-500',
    iconBg: 'bg-green-100 dark:bg-green-900/30',
    iconColor: 'text-green-600 dark:text-green-400',
  },
  {
    icon: Sparkles,
    label: 'Generate Outline',
    description: 'AI structure creation',
    color: 'from-orange-500 to-red-500',
    iconBg: 'bg-orange-100 dark:bg-orange-900/30',
    iconColor: 'text-orange-600 dark:text-orange-400',
  },
  {
    icon: FileType,
    label: 'Use Template',
    description: 'APA, MLA, IEEE, etc.',
    color: 'from-indigo-500 to-blue-500',
    iconBg: 'bg-indigo-100 dark:bg-indigo-900/30',
    iconColor: 'text-indigo-600 dark:text-indigo-400',
  },
  {
    icon: Download,
    label: 'Export Paper',
    description: 'PDF, Word, LaTeX',
    color: 'from-pink-500 to-rose-500',
    iconBg: 'bg-pink-100 dark:bg-pink-900/30',
    iconColor: 'text-pink-600 dark:text-pink-400',
  },
];

export function QuickActions() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-gray-900 dark:text-gray-100">Quick Actions</h2>
        <button className="text-sm text-blue-600 dark:text-blue-400 hover:underline">Customize</button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        {actions.map((action, index) => (
          <button
            key={action.label}
            className="group relative flex flex-col items-center p-4 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-transparent hover:shadow-lg transition-all duration-300 hover:scale-105 overflow-hidden"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            {/* Gradient Background on Hover */}
            <div className={`absolute inset-0 bg-gradient-to-br ${action.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
            
            <div className="relative">
              <div className={`${action.iconBg} p-3 rounded-xl mb-3 group-hover:scale-110 transition-transform duration-300`}>
                <action.icon className={`w-6 h-6 ${action.iconColor}`} />
              </div>
              <div className="text-sm text-center text-gray-900 dark:text-gray-100 mb-1">{action.label}</div>
              <div className="text-xs text-center text-gray-500 dark:text-gray-400">{action.description}</div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
