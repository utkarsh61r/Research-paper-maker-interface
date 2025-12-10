import { Lightbulb } from 'lucide-react';

export function InfoBanner() {
  return (
    <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl px-5 py-4 flex items-start gap-3">
      <Lightbulb className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
      <p className="text-blue-900 dark:text-blue-100">
        <span className="text-blue-700 dark:text-blue-300">Tip:</span> Add a clear research question for better AI suggestions and a more focused paper structure.
      </p>
    </div>
  );
}