import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Dashboard } from './components/Dashboard';
import { PaperEditor } from './components/PaperEditor';
import { MyPapers } from './components/MyPapers';
import { CollapsibleSidebar } from './components/CollapsibleSidebar';
import { CommandSearch } from './components/CommandSearch';
import { Templates } from './components/Templates';
import { Stats } from './components/Stats';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'dashboard' | 'my-papers' | 'editor' | 'templates' | 'stats'>('dashboard');
  const [currentPaper, setCurrentPaper] = useState<any>(null);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('darkMode');
      return saved ? JSON.parse(saved) : false;
    }
    return false;
  });
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [commandSearchOpen, setCommandSearchOpen] = useState(false);

  // Command + K shortcut
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setCommandSearchOpen(true);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    if (typeof window !== 'undefined') {
      localStorage.setItem('darkMode', JSON.stringify(newMode));
    }
  };

  const handleNewPaper = () => {
    setCurrentPage('dashboard');
  };

  const handleEditPaper = (paper: any) => {
    setCurrentPaper(paper);
    setCurrentPage('editor');
  };

  const handleNavigate = (page: 'dashboard' | 'my-papers' | 'templates' | 'stats') => {
    setCurrentPage(page);
  };

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <Navbar 
          onNewPaper={handleNewPaper}
          onNavigate={handleNavigate}
          currentPage={currentPage}
          isDarkMode={isDarkMode}
          onToggleDarkMode={toggleDarkMode}
          onOpenCommandSearch={() => setCommandSearchOpen(true)}
        />
        
        <CollapsibleSidebar
          currentPage={currentPage}
          onNavigate={handleNavigate}
          collapsed={sidebarCollapsed}
          onToggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)}
        />

        <CommandSearch
          isOpen={commandSearchOpen}
          onClose={() => setCommandSearchOpen(false)}
          onNavigate={handleNavigate}
        />
        
        <main className={`pt-16 transition-all duration-300 ${sidebarCollapsed ? 'ml-20' : 'ml-64'}`}>
          {currentPage === 'dashboard' && (
            <Dashboard onEditPaper={handleEditPaper} onNavigate={handleNavigate} />
          )}
          {currentPage === 'my-papers' && (
            <MyPapers onEditPaper={handleEditPaper} />
          )}
          {currentPage === 'templates' && (
            <Templates onSelectTemplate={handleNewPaper} />
          )}
          {currentPage === 'stats' && (
            <Stats />
          )}
          {currentPage === 'editor' && (
            <PaperEditor paper={currentPaper} onBack={() => setCurrentPage('dashboard')} />
          )}
        </main>
      </div>
    </div>
  );
}