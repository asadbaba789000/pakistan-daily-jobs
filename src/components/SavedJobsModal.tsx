import React from 'react';
import {
  X,
  Bookmark,
  Trash2,
  ExternalLink,
  MapPin,
  Briefcase,
  DollarSign,
  ArrowRight
} from 'lucide-react';
import { Job } from '../types/job';

interface SavedJobsModalProps {
  isOpen: boolean;
  onClose: () => void;
  savedJobs: Job[];
  onRemoveSaved: (jobId: string) => void;
  onOpenJobDetail: (job: Job) => void;
  onApplyJob: (job: Job) => void;
}

export const SavedJobsModal: React.FC<SavedJobsModalProps> = ({
  isOpen,
  onClose,
  savedJobs,
  onRemoveSaved,
  onOpenJobDetail,
  onApplyJob
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div
        className="bg-white rounded-3xl max-w-2xl w-full shadow-2xl border border-slate-200 overflow-hidden relative max-h-[85vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 border-b border-slate-100 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center">
              <Bookmark className="w-5 h-5 fill-blue-700" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">Saved Jobs ({savedJobs.length})</h3>
              <p className="text-xs text-slate-500">Your bookmarked career opportunities</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content list */}
        <div className="p-5 overflow-y-auto space-y-3">
          {savedJobs.length === 0 ? (
            <div className="text-center py-12">
              <Bookmark className="w-12 h-12 text-slate-300 mx-auto mb-2" />
              <p className="text-sm font-bold text-slate-700">No saved jobs yet</p>
              <p className="text-xs text-slate-500 mt-1">
                Click the bookmark icon on any job card to save opportunities for later.
              </p>
            </div>
          ) : (
            savedJobs.map((job) => (
              <div
                key={job.id}
                className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80 hover:border-blue-300 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        job.sector === 'Government'
                          ? 'bg-emerald-100 text-emerald-800'
                          : 'bg-blue-100 text-blue-800'
                      }`}
                    >
                      {job.sector}
                    </span>
                    <h4
                      onClick={() => {
                        onClose();
                        onOpenJobDetail(job);
                      }}
                      className="text-sm font-bold text-slate-900 hover:text-blue-600 cursor-pointer truncate"
                    >
                      {job.title}
                    </h4>
                  </div>
                  <p className="text-xs text-slate-600 mt-0.5">
                    {job.company} • {job.location}
                  </p>
                  {job.salary && (
                    <p className="text-xs font-semibold text-emerald-700 mt-1">
                      {job.salary}
                    </p>
                  )}
                </div>

                <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
                  <button
                    onClick={() => onRemoveSaved(job.id)}
                    title="Remove from saved"
                    className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-xl transition-colors cursor-pointer"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => {
                      onClose();
                      onApplyJob(job);
                    }}
                    className="px-3.5 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold transition-all shadow-2xs cursor-pointer"
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="p-4 border-t border-slate-100 bg-slate-50 text-right">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-200 hover:bg-slate-300 rounded-xl text-xs font-semibold text-slate-800 cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
