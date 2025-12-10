import { FileText, CheckCircle, Clock, TrendingUp } from 'lucide-react';

interface ProgressCardsProps {
  onNavigate: (page: 'dashboard' | 'my-papers' | 'templates' | 'stats') => void;
}

const cards = [
  {
    title: 'Papers in Draft',
    value: '3',
    change: '+2 this week',
    icon: FileText,
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-50 dark:bg-blue-900/20',
    iconColor: 'text-blue-600 dark:text-blue-400',
    trend: 'up',
  },
  {
    title: 'In Progress',
    value: '5',
    change: '2 due soon',
    icon: Clock,
    color: 'from-purple-500 to-pink-500',
    bgColor: 'bg-purple-50 dark:bg-purple-900/20',
    iconColor: 'text-purple-600 dark:text-purple-400',
    trend: 'neutral',
  },
  {
    title: 'Completed',
    value: '12',
    change: '+3 this month',
    icon: CheckCircle,
    color: 'from-green-500 to-emerald-500',
    bgColor: 'bg-green-50 dark:bg-green-900/20',
    iconColor: 'text-green-600 dark:text-green-400',
    trend: 'up',
  },
  {
    title: 'Total Words',
    value: '45.2k',
    change: '+8.5k this week',
    icon: TrendingUp,
    color: 'from-orange-500 to-red-500',
    bgColor: 'bg-orange-50 dark:bg-orange-900/20',
    iconColor: 'text-orange-600 dark:text-orange-400',
    trend: 'up',
  },
];

export function ProgressCards({ onNavigate }: ProgressCardsProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {cards.map((card, index) => (
        <button
          key={card.title}
          onClick={() => onNavigate('stats')}
          className="group relative bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 hover:shadow-xl hover:scale-105 transition-all duration-300 hover:border-transparent overflow-hidden"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          {/* Gradient Background on Hover */}
          <div className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
          
          <div className="relative">
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 ${card.bgColor} rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                <card.icon className={`w-6 h-6 ${card.iconColor}`} />
              </div>
              {card.trend === 'up' && (
                <div className="flex items-center gap-1 text-green-600 dark:text-green-400 text-sm">
                  <TrendingUp className="w-4 h-4" />
                </div>
              )}
            </div>
            
            <div className="mb-1 text-3xl font-bold text-gray-900 dark:text-gray-100 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
              {card.value}
            </div>
            <div className="text-gray-600 dark:text-gray-400 mb-2">{card.title}</div>
            <div className="text-sm text-gray-500 dark:text-gray-500">{card.change}</div>
          </div>
        </button>
      ))}
    </div>
  );
}
