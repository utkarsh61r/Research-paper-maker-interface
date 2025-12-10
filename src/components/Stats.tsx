import { BarChart3, TrendingUp, Calendar, Award } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const writingProgressData = [
  { date: 'Mon', words: 850 },
  { date: 'Tue', words: 1200 },
  { date: 'Wed', words: 950 },
  { date: 'Thu', words: 1500 },
  { date: 'Fri', words: 1100 },
  { date: 'Sat', words: 800 },
  { date: 'Sun', words: 600 },
];

const citationData = [
  { source: 'Journal Articles', count: 45 },
  { source: 'Books', count: 28 },
  { source: 'Web Sources', count: 15 },
  { source: 'Conference Papers', count: 12 },
];

const papersBySubject = [
  { name: 'Computer Science', value: 8 },
  { name: 'Biology', value: 5 },
  { name: 'Psychology', value: 4 },
  { name: 'Physics', value: 3 },
];

const COLORS = ['#3b82f6', '#8b5cf6', '#ec4899', '#f59e0b'];

const stats = [
  {
    title: 'Avg. Words/Day',
    value: '1,043',
    change: '+12%',
    trend: 'up',
    icon: TrendingUp,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Papers This Month',
    value: '8',
    change: '+2 from last month',
    trend: 'up',
    icon: BarChart3,
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Writing Streak',
    value: '12 days',
    change: 'Keep it up!',
    trend: 'neutral',
    icon: Calendar,
    color: 'from-green-500 to-emerald-500',
  },
  {
    title: 'Completion Rate',
    value: '87%',
    change: '+5% this month',
    trend: 'up',
    icon: Award,
    color: 'from-orange-500 to-red-500',
  },
];

export function Stats() {
  return (
    <div className="max-w-[1600px] mx-auto px-6 py-8 animate-in fade-in duration-500">
      <div className="mb-8">
        <h1 className="text-gray-900 dark:text-gray-100 mb-2">Analytics & Insights</h1>
        <p className="text-gray-600 dark:text-gray-400">Track your research and writing progress</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div
            key={stat.title}
            className="group relative bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 hover:shadow-xl hover:scale-105 transition-all duration-300 overflow-hidden"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
            
            <div className="relative">
              <div className="flex items-center justify-between mb-4">
                <stat.icon className="w-8 h-8 text-gray-400 dark:text-gray-500 group-hover:scale-110 transition-transform" />
                {stat.trend === 'up' && (
                  <div className="text-green-600 dark:text-green-400 text-sm flex items-center gap-1">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                )}
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-1">{stat.value}</div>
              <div className="text-gray-600 dark:text-gray-400 mb-2">{stat.title}</div>
              <div className="text-sm text-gray-500 dark:text-gray-500">{stat.change}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Writing Progress Chart */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-gray-900 dark:text-gray-100 mb-6">Writing Progress This Week</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={writingProgressData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.1} />
              <XAxis dataKey="date" stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#1f2937',
                  border: 'none',
                  borderRadius: '0.5rem',
                  color: '#fff',
                }}
              />
              <Line
                type="monotone"
                dataKey="words"
                stroke="#3b82f6"
                strokeWidth={3}
                dot={{ fill: '#3b82f6', r: 6 }}
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Citation Sources Chart */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-gray-900 dark:text-gray-100 mb-6">Most Used Citations</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={citationData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.1} />
              <XAxis dataKey="source" stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#1f2937',
                  border: 'none',
                  borderRadius: '0.5rem',
                  color: '#fff',
                }}
              />
              <Bar dataKey="count" fill="#8b5cf6" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Papers by Subject */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-gray-900 dark:text-gray-100 mb-6">Papers by Subject</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={papersBySubject}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {papersBySubject.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: '#1f2937',
                  border: 'none',
                  borderRadius: '0.5rem',
                  color: '#fff',
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Achievements */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-gray-900 dark:text-gray-100 mb-6">Recent Achievements</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl">
              <div className="text-3xl">🏆</div>
              <div>
                <div className="text-gray-900 dark:text-gray-100">10 Papers Published</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Unlocked 2 days ago</div>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl">
              <div className="text-3xl">🔥</div>
              <div>
                <div className="text-gray-900 dark:text-gray-100">2-Week Writing Streak</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Keep it going!</div>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-xl">
              <div className="text-3xl">📚</div>
              <div>
                <div className="text-gray-900 dark:text-gray-100">100+ Citations Added</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Research master!</div>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20 rounded-xl">
              <div className="text-3xl">⚡</div>
              <div>
                <div className="text-gray-900 dark:text-gray-100">5000 Words in a Day</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Amazing productivity!</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
