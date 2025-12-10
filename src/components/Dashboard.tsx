import { NewPaperWizard } from './NewPaperWizard';
import { RecentPapers } from './RecentPapers';
import { InfoBanner } from './InfoBanner';
import { QuickActions } from './QuickActions';
import { ProgressCards } from './ProgressCards';

interface DashboardProps {
  onEditPaper: (paper: any) => void;
  onNavigate: (page: 'dashboard' | 'my-papers' | 'templates' | 'stats') => void;
}

export function Dashboard({ onEditPaper, onNavigate }: DashboardProps) {
  return (
    <div className="max-w-[1600px] mx-auto px-6 py-8 animate-in fade-in duration-500">
      <div className="mb-8">
        <h1 className="text-gray-900 dark:text-gray-100 mb-2">Welcome back, John 👋</h1>
        <p className="text-gray-600 dark:text-gray-400">Let's continue building your research papers</p>
      </div>

      <InfoBanner />

      {/* Progress Overview Cards */}
      <div className="mt-8">
        <ProgressCards onNavigate={onNavigate} />
      </div>

      {/* Quick Actions */}
      <div className="mt-8">
        <QuickActions />
      </div>

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* New Paper Wizard - Takes 2 columns on large screens */}
        <div className="lg:col-span-2">
          <NewPaperWizard />
        </div>

        {/* Recent Papers - Takes 1 column on large screens */}
        <div className="lg:col-span-1">
          <RecentPapers onEditPaper={onEditPaper} />
        </div>
      </div>
    </div>
  );
}