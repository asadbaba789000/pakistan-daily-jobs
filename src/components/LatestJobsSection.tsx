import React, { useState } from 'react';
import {
  MapPin,
  Briefcase,
  Calendar,
  Clock,
  Bookmark,
  BookmarkCheck,
  ArrowRight,
  Sparkles,
  Building2,
  DollarSign,
  GraduationCap,
  ShieldAlert,
  SlidersHorizontal,
  ChevronRight
} from 'lucide-react';
import { Job } from '../types/job';

interface LatestJobsSectionProps {
  jobs: Job[];
  savedJobIds: Set<string>;
  onToggleSaveJob: (jobId: string) => void;
  onOpenJobDetail: (job: Job) => void;
  onApplyJob: (job: Job) => void;
  onViewAllJobs: () => void;
  activeFilterSummary?: string;
  onResetFilters?: () => void;
}

export const LatestJobsSection: React.FC<LatestJobsSectionProps> = ({
  jobs,
  savedJobIds,
  onToggleSaveJob,
  onOpenJobDetail,
  onApplyJob,
  onViewAllJobs,
  activeFilterSummary,
  onResetFilters
}) => {
  const [filterSector, setFilterSector] = useState<'All' | 'Government' | 'Private' | 'Remote'>('All');
  const [sortBy, setSortBy] = useState<'newest' | 'vacancies'>('newest');

  // Filter jobs based on local sector tab
  const filteredJobs = jobs.filter((job) => {
    if (filterSector === 'All') return true;
    if (filterSector === 'Government') return job.sector === 'Government';
    if (filterSector === 'Private') return job.sector === 'Private';
    if (filterSector === 'Remote') return job.jobType === 'Remote' || job.location.toLowerCase().includes('remote');
    return true;
  });

  // Display top jobs (e.g. first 8-10 or user can click View All Jobs)
  const [displayCount, setDisplayCount] = useState(8);
  const visibleJobs = filteredJobs.slice(0, displayCount);

  return (
    <section id="latest-jobs" className="py-16 bg-slate-50/60 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-100/70 text-blue-800 border border-blue-200 mb-2">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>Real-Time Feed</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Latest Jobs in Pakistan
            </h2>
            <p className="text-sm text-slate-500 mt-1 max-w-xl">
              Fresh opportunities updated daily across Punjab, Sindh, Khyber Pakhtunkhwa, Balochistan, and Federal capital.
            </p>
          </div>

          {/* Sector Quick Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 bg-white p-1 rounded-xl border border-slate-200 shadow-2xs self-start md:self-auto">
            {(['All', 'Government', 'Private', 'Remote'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setFilterSector(tab)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  filterSector === tab
                    ? 'bg-blue-600 text-white shadow-2xs'
                    : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'
                }`}
              >
                {tab === 'All' ? 'All Sectors' : tab}
              </button>
            ))}
          </div>
        </div>

        {/* Active Filter Notice if searching */}
        {activeFilterSummary && (
          <div className="mb-6 px-4 py-2.5 bg-blue-50/80 border border-blue-200 rounded-xl flex items-center justify-between text-xs text-blue-900">
            <span>
              Filtered by: <strong>{activeFilterSummary}</strong> ({filteredJobs.length} results)
            </span>
            {onResetFilters && (
              <button
                onClick={onResetFilters}
                className="font-bold text-blue-700 hover:underline cursor-pointer"
              >
                Clear Filters
              </button>
            )}
          </div>
        )}

        {/* Demo Data Disclaimer Banner */}
        <div className="mb-6 p-3 bg-amber-50/90 border border-amber-200/80 rounded-xl flex items-start gap-2.5 text-xs text-amber-900">
          <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
          <p>
            <strong className="font-semibold">Notice regarding demo listings:</strong> Some positions (e.g. Software Engineer in Lahore, HR Officer in Islamabad, Data Entry in Karachi, Junior Accountant in Rawalpindi, Teacher in Multan) are curated demonstration vacancies for portal evaluation and test applications.
          </p>
        </div>

        {/* Job Cards Grid */}
        {visibleJobs.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 p-8 shadow-xs">
            <Briefcase className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-base font-bold text-slate-800">No jobs match your criteria</h3>
            <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
              Try adjusting your search keyword, city selection, or category filter.
            </p>
            {onResetFilters && (
              <button
                onClick={onResetFilters}
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg text-xs font-semibold hover:bg-blue-700 cursor-pointer"
              >
                Reset All Filters
              </button>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {visibleJobs.map((job) => {
              const isSaved = savedJobIds.has(job.id);
              return (
                <div
                  key={job.id}
                  className="group bg-white rounded-2xl p-5 border border-slate-200/90 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-900/5 transition-all duration-200 flex flex-col justify-between relative"
                >
                  {/* Top Bar: Company Logo/Initials, Title, Company Name, Bookmark */}
                  <div>
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-start gap-3.5">
                        {/* Company Logo Placeholder */}
                        <div
                          className={`w-12 h-12 rounded-xl shrink-0 flex items-center justify-center font-extrabold text-sm shadow-xs ${
                            job.logoBgColor || 'bg-blue-600'
                          } ${job.logoTextColor || 'text-white'}`}
                        >
                          {job.logoInitials || job.company.substring(0, 2).toUpperCase()}
                        </div>

                        <div>
                          <div className="flex flex-wrap items-center gap-2">
                            <span
                              className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                                job.sector === 'Government'
                                  ? 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                                  : 'bg-blue-100 text-blue-800 border border-blue-200'
                              }`}
                            >
                              {job.sector === 'Government' ? 'Govt Sector' : 'Private'}
                            </span>

                            {job.bpsScale && (
                              <span className="text-[10px] font-bold bg-amber-100 text-amber-900 px-2 py-0.5 rounded-full border border-amber-200">
                                {job.bpsScale}
                              </span>
                            )}

                            {job.isDemo && (
                              <span className="text-[10px] font-semibold bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded-md border border-slate-200">
                                Demo Listing
                              </span>
                            )}
                          </div>

                          <h3
                            onClick={() => onOpenJobDetail(job)}
                            className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors mt-1 line-clamp-1 cursor-pointer"
                          >
                            {job.title}
                          </h3>

                          <div className="flex items-center gap-1.5 text-xs text-slate-600 font-medium mt-0.5">
                            <Building2 className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                            <span className="truncate">{job.company}</span>
                            {job.department && (
                              <span className="text-slate-400 truncate hidden sm:inline">
                                • {job.department}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Save/Bookmark Button */}
                      <button
                        onClick={() => onToggleSaveJob(job.id)}
                        title={isSaved ? 'Remove from Saved' : 'Save this job'}
                        className={`p-2 rounded-xl transition-all cursor-pointer ${
                          isSaved
                            ? 'bg-blue-50 text-blue-600 hover:bg-blue-100'
                            : 'text-slate-400 hover:text-blue-600 hover:bg-slate-100'
                        }`}
                      >
                        {isSaved ? (
                          <BookmarkCheck className="w-5 h-5 fill-blue-600" />
                        ) : (
                          <Bookmark className="w-5 h-5" />
                        )}
                      </button>
                    </div>

                    {/* Metadata chips: Location, Job Type, Education, Deadline */}
                    <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs text-slate-600">
                      <div className="flex items-center gap-1.5 truncate">
                        <MapPin className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                        <span className="truncate font-medium">{job.location}, {job.province || 'Pakistan'}</span>
                      </div>

                      <div className="flex items-center gap-1.5 truncate">
                        <Briefcase className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                        <span className="truncate">{job.jobType}</span>
                      </div>

                      <div className="flex items-center gap-1.5 truncate col-span-2 sm:col-span-1">
                        <Clock className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                        <span className="truncate">Posted {job.postedDate}</span>
                      </div>
                    </div>

                    {/* Salary Tag */}
                    {job.salary && (
                      <div className="mt-3.5 inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-800 text-xs font-semibold border border-emerald-200/80">
                        <DollarSign className="w-3 h-3 text-emerald-600" />
                        <span>{job.salary}</span>
                      </div>
                    )}
                  </div>

                  {/* Card Bottom Actions */}
                  <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between gap-3">
                    <button
                      onClick={() => onOpenJobDetail(job)}
                      className="text-xs font-semibold text-slate-600 hover:text-blue-600 transition-colors flex items-center gap-1 cursor-pointer"
                    >
                      <span>View Details</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => onApplyJob(job)}
                        className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 active:scale-98 transition-all shadow-xs shadow-blue-500/20 cursor-pointer"
                      >
                        Apply Now
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* View All Jobs button */}
        <div className="mt-10 text-center">
          {displayCount < filteredJobs.length ? (
            <button
              onClick={() => setDisplayCount((prev) => prev + 6)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 font-bold text-sm shadow-xs hover:shadow-md transition-all cursor-pointer"
            >
              <span>Load More Jobs ({filteredJobs.length - displayCount} remaining)</span>
              <ChevronRight className="w-4 h-4 text-blue-600" />
            </button>
          ) : (
            <button
              onClick={onViewAllJobs}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md shadow-blue-600/20 transition-all cursor-pointer"
            >
              <span>View All Jobs ({jobs.length}) →</span>
            </button>
          )}
        </div>
      </div>
    </section>
  );
};
