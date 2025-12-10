import { Clock, ArrowRight } from 'lucide-react';
import { StatusBadge } from './StatusBadge';

interface RecentPapersProps {
  onEditPaper: (paper: any) => void;
}

const recentPapers = [
  {
    id: 1,
    title: 'Machine Learning Applications in Healthcare',
    subject: 'Computer Science',
    status: 'in-progress',
    lastEdited: '2 hours ago',
  },
  {
    id: 2,
    title: 'Climate Change Impact on Marine Ecosystems',
    subject: 'Biology',
    status: 'draft',
    lastEdited: '1 day ago',
  },
  {
    id: 3,
    title: 'Quantum Computing and Cryptography',
    subject: 'Physics',
    status: 'completed',
    lastEdited: '3 days ago',
  },
  {
    id: 4,
    title: 'Social Media Influence on Youth Mental Health',
    subject: 'Psychology',
    status: 'in-progress',
    lastEdited: '5 days ago',
  },
];

export function RecentPapers({ onEditPaper }: RecentPapersProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-8 hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-gray-900 dark:text-gray-100">Recent Papers</h2>
        <span className="text-sm text-gray-500 dark:text-gray-400">{recentPapers.length} papers</span>
      </div>

      <div className="space-y-4">
        {recentPapers.map((paper, index) => (
          <div
            key={paper.id}
            className="p-5 border border-gray-200 dark:border-gray-700 rounded-xl hover:border-blue-200 dark:hover:border-blue-700 hover:bg-blue-50/50 dark:hover:bg-blue-900/20 transition-all duration-300 group cursor-pointer hover:scale-[1.02] hover:shadow-md"
            onClick={() => onEditPaper(paper)}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1 min-w-0">
                <h3 className="text-gray-900 dark:text-gray-100 mb-2 truncate group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{paper.title}</h3>
                <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400">
                  <span className="text-blue-600 dark:text-blue-400">{paper.subject}</span>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4" />
                    <span>{paper.lastEdited}</span>
                  </div>
                </div>
                <div className="mt-3">
                  <StatusBadge status={paper.status} />
                </div>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onEditPaper(paper);
                }}
                className="flex items-center gap-2 px-4 py-2 text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/40 rounded-lg transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-105"
              >
                Continue Editing
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        ))}
      </div>

      <button className="w-full mt-6 py-2.5 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-all duration-300 hover:scale-105">
        View All Papers
      </button>
    </div>
  );
}