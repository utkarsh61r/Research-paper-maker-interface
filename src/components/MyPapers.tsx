import { useState } from 'react';
import { Search, Filter, Grid, List, Clock, MoreVertical } from 'lucide-react';
import { StatusBadge } from './StatusBadge';

interface MyPapersProps {
  onEditPaper: (paper: any) => void;
}

const papers = [
  {
    id: 1,
    title: 'Machine Learning Applications in Healthcare',
    subject: 'Computer Science',
    status: 'in-progress',
    lastEdited: '2 hours ago',
    createdAt: 'Nov 28, 2024',
    wordCount: 3420,
  },
  {
    id: 2,
    title: 'Climate Change Impact on Marine Ecosystems',
    subject: 'Biology',
    status: 'draft',
    lastEdited: '1 day ago',
    createdAt: 'Nov 27, 2024',
    wordCount: 1250,
  },
  {
    id: 3,
    title: 'Quantum Computing and Cryptography',
    subject: 'Physics',
    status: 'completed',
    lastEdited: '3 days ago',
    createdAt: 'Nov 20, 2024',
    wordCount: 5800,
  },
  {
    id: 4,
    title: 'Social Media Influence on Youth Mental Health',
    subject: 'Psychology',
    status: 'in-progress',
    lastEdited: '5 days ago',
    createdAt: 'Nov 15, 2024',
    wordCount: 2900,
  },
  {
    id: 5,
    title: 'Renewable Energy Policy Analysis',
    subject: 'Economics',
    status: 'draft',
    lastEdited: '1 week ago',
    createdAt: 'Nov 10, 2024',
    wordCount: 890,
  },
  {
    id: 6,
    title: 'Neural Networks in Image Recognition',
    subject: 'Computer Science',
    status: 'completed',
    lastEdited: '2 weeks ago',
    createdAt: 'Oct 30, 2024',
    wordCount: 6200,
  },
];

export function MyPapers({ onEditPaper }: MyPapersProps) {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const filteredPapers = papers.filter(paper => {
    const matchesSearch = paper.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         paper.subject.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filterStatus === 'all' || paper.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="max-w-[1600px] mx-auto px-6 py-8">
      <div className="mb-8">
        <h1 className="text-gray-900 dark:text-gray-100 mb-6">My Papers</h1>

        {/* Search and Filters */}
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <div className="flex-1 max-w-md relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-gray-500" />
            <input
              type="text"
              placeholder="Search papers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500"
            />
          </div>

          <div className="flex items-center gap-3">
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            >
              <option value="all">All Status</option>
              <option value="draft">Draft</option>
              <option value="in-progress">In Progress</option>
              <option value="completed">Completed</option>
            </select>

            <button className="p-2.5 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
              <Filter className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            </button>

            <div className="flex gap-1 border border-gray-300 dark:border-gray-600 rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded transition-colors ${
                  viewMode === 'grid'
                    ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                    : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                <Grid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded transition-colors ${
                  viewMode === 'list'
                    ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                    : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Papers Display */}
      {viewMode === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPapers.map((paper, index) => (
            <div
              key={paper.id}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 hover:border-blue-200 dark:hover:border-blue-700 hover:shadow-xl transition-all duration-300 cursor-pointer group hover:scale-105 animate-in fade-in"
              onClick={() => onEditPaper(paper)}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="flex items-start justify-between mb-4">
                <StatusBadge status={paper.status} />
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                  className="p-1 opacity-0 group-hover:opacity-100 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-all hover:scale-110"
                >
                  <MoreVertical className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                </button>
              </div>

              <h3 className="text-gray-900 dark:text-gray-100 mb-3 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{paper.title}</h3>

              <div className="space-y-2 text-gray-600 dark:text-gray-400">
                <div className="flex items-center justify-between">
                  <span>Subject:</span>
                  <span className="text-blue-600 dark:text-blue-400">{paper.subject}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Words:</span>
                  <span>{paper.wordCount.toLocaleString()}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>Edited {paper.lastEdited}</span>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                <span className="text-gray-600 dark:text-gray-400">Created {paper.createdAt}</span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
              <tr>
                <th className="text-left px-6 py-4 text-gray-700 dark:text-gray-300">Title</th>
                <th className="text-left px-6 py-4 text-gray-700 dark:text-gray-300">Subject</th>
                <th className="text-left px-6 py-4 text-gray-700 dark:text-gray-300">Status</th>
                <th className="text-left px-6 py-4 text-gray-700 dark:text-gray-300">Words</th>
                <th className="text-left px-6 py-4 text-gray-700 dark:text-gray-300">Last Edited</th>
                <th className="text-left px-6 py-4 text-gray-700 dark:text-gray-300">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredPapers.map((paper) => (
                <tr
                  key={paper.id}
                  className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                >
                  <td className="px-6 py-4">
                    <div className="text-gray-900 dark:text-gray-100 max-w-md truncate">{paper.title}</div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-blue-600 dark:text-blue-400">{paper.subject}</span>
                  </td>
                  <td className="px-6 py-4">
                    <StatusBadge status={paper.status} />
                  </td>
                  <td className="px-6 py-4 text-gray-600 dark:text-gray-400">
                    {paper.wordCount.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 text-gray-600 dark:text-gray-400">
                    {paper.lastEdited}
                  </td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => onEditPaper(paper)}
                      className="px-4 py-2 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded-lg transition-colors"
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {filteredPapers.length === 0 && (
        <div className="text-center py-16">
          <p className="text-gray-600 dark:text-gray-400 mb-4">No papers found matching your criteria</p>
          <button className="px-6 py-3 bg-blue-600 dark:bg-blue-500 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors">
            Create New Paper
          </button>
        </div>
      )}
    </div>
  );
}