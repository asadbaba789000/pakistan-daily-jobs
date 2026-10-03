import React from 'react';
import {
  X,
  MapPin,
  Briefcase,
  DollarSign,
  Calendar,
  Clock,
  Building2,
  GraduationCap,
  ShieldCheck,
  CheckCircle2,
  Bookmark,
  BookmarkCheck,
  Share2,
  Landmark,
  Award,
  AlertCircle
} from 'lucide-react';
import { Job } from '../types/job';

interface JobDetailModalProps {
  job: Job | null;
  isOpen: boolean;
  onClose: () => void;
  onApply: (job: Job) => void;
  isSaved: boolean;
  onToggleSave: (jobId: string) => void;
}

export const JobDetailModal: React.FC<JobDetailModalProps> = ({
  job,
  isOpen,
  onClose,
  onApply,
  isSaved,
  onToggleSave
}) => {
  if (!isOpen || !job) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div
        className="bg-white rounded-3xl max-w-3xl w-full shadow-2xl border border-slate-200 overflow-hidden relative max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="p-6 border-b border-slate-100 flex items-start justify-between gap-4 bg-slate-50/70">
          <div className="flex items-start gap-4">
            <div
              className={`w-14 h-14 rounded-2xl shrink-0 ${
                job.logoBgColor || 'bg-blue-600'
              } ${job.logoTextColor || 'text-white'} flex items-center justify-center font-black text-lg shadow-sm`}
            >
              {job.logoInitials || job.company.substring(0, 2).toUpperCase()}
            </div>

            <div>
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <span
                  className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                    job.sector === 'Government'
                      ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                      : 'bg-blue-100 text-blue-800 border border-blue-200'
                  }`}
                >
                  {job.sector === 'Government' ? 'Federal / Provincial Govt' : 'Private Sector'}
                </span>

                {job.bpsScale && (
                  <span className="text-[10px] font-extrabold bg-amber-100 text-amber-900 px-2 py-0.5 rounded-full border border-amber-300">
                    Grade {job.bpsScale}
                  </span>
                )}

                {job.isDemo && (
                  <span className="text-[10px] font-medium bg-slate-200/80 text-slate-700 px-2 py-0.5 rounded-full">
                    Demo Listing
                  </span>
                )}
              </div>

              <h2 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight">
                {job.title}
              </h2>

              <p className="text-xs sm:text-sm font-semibold text-slate-600 mt-1 flex items-center gap-1.5">
                <Building2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>{job.company}</span>
                {job.department && (
                  <span className="text-slate-400">({job.department})</span>
                )}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm">
          {/* Key Facts Summary Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80">
              <span className="text-[11px] text-slate-500 font-medium block">Location</span>
              <span className="text-xs font-bold text-slate-900 mt-0.5 block flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                {job.location}
              </span>
            </div>

            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80">
              <span className="text-[11px] text-slate-500 font-medium block">Job Type</span>
              <span className="text-xs font-bold text-slate-900 mt-0.5 block flex items-center gap-1">
                <Briefcase className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                {job.jobType}
              </span>
            </div>

            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80">
              <span className="text-[11px] text-slate-500 font-medium block">Salary / Scale</span>
              <span className="text-xs font-bold text-emerald-700 mt-0.5 block truncate">
                {job.salary || 'Market Competitive'}
              </span>
            </div>

            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80">
              <span className="text-[11px] text-slate-500 font-medium block">Deadline</span>
              <span className="text-xs font-bold text-rose-600 mt-0.5 block flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 shrink-0" />
                {job.deadline || 'Immediate'}
              </span>
            </div>
          </div>

          {/* Job Description */}
          <div>
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider text-slate-500 mb-2">
              Position Overview
            </h3>
            <p className="text-slate-700 leading-relaxed text-xs sm:text-sm">
              {job.description}
            </p>
          </div>

          {/* Education & Experience Eligibility */}
          <div className="p-4 bg-blue-50/70 rounded-2xl border border-blue-100 space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-blue-900 flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4 text-blue-700" />
              Eligibility Criteria & Qualifications
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700 pt-1">
              <div>
                <span className="font-semibold text-slate-900">Required Education: </span>
                <span>{job.education}</span>
              </div>
              <div>
                <span className="font-semibold text-slate-900">Required Experience: </span>
                <span>{job.experience || 'Fresh / Relevant experience'}</span>
              </div>
              {job.province && (
                <div>
                  <span className="font-semibold text-slate-900">Domicile / Province: </span>
                  <span>{job.province} Domicile Holders</span>
                </div>
              )}
              {job.testOrganization && (
                <div>
                  <span className="font-semibold text-slate-900">Screening Test Body: </span>
                  <span>{job.testOrganization} Written Examination</span>
                </div>
              )}
            </div>
          </div>

          {/* Requirements */}
          {job.requirements && job.requirements.length > 0 && (
            <div>
              <h3 className="text-sm font-bold text-slate-900 mb-2.5">
                Key Requirements & Competencies
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                {job.requirements.map((req, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Responsibilities */}
          {job.responsibilities && job.responsibilities.length > 0 && (
            <div>
              <h3 className="text-sm font-bold text-slate-900 mb-2.5">
                Core Duties & Responsibilities
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                {job.responsibilities.map((resp, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0 mt-2"></span>
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Benefits */}
          {job.benefits && job.benefits.length > 0 && (
            <div>
              <h3 className="text-sm font-bold text-slate-900 mb-2.5">
                Compensation, Perks & Allowances
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                {job.benefits.map((ben, i) => (
                  <div key={i} className="flex items-center gap-2 p-2 bg-slate-50 rounded-lg border border-slate-100">
                    <Award className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                    <span>{ben}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Verification notice */}
          <div className="p-3 bg-slate-100 rounded-xl text-[11px] text-slate-600 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>
              Verified by <strong>Pakistan Daily Jobs Editorial Team</strong>. Free to apply directly.
            </span>
          </div>
        </div>

        {/* Modal Sticky Bottom Actions */}
        <div className="p-4 sm:p-5 border-t border-slate-200 bg-white flex items-center justify-between gap-3">
          <button
            onClick={() => onToggleSave(job.id)}
            className={`px-4 py-2.5 rounded-xl border text-xs font-semibold flex items-center gap-2 transition-colors cursor-pointer ${
              isSaved
                ? 'border-blue-600 text-blue-600 bg-blue-50'
                : 'border-slate-300 text-slate-700 hover:bg-slate-50'
            }`}
          >
            {isSaved ? (
              <>
                <BookmarkCheck className="w-4 h-4 fill-blue-600" />
                <span>Saved</span>
              </>
            ) : (
              <>
                <Bookmark className="w-4 h-4" />
                <span>Save Job</span>
              </>
            )}
          </button>

          <div className="flex items-center gap-2.5">
            <button
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100 cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onApply(job);
              }}
              className="px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-600/30 transition-all cursor-pointer"
            >
              Apply for this Job
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
