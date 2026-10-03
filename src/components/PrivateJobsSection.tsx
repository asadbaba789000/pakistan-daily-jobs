import React, { useState } from 'react';
import {
  Building2,
  MapPin,
  Briefcase,
  DollarSign,
  TrendingUp,
  Bookmark,
  BookmarkCheck,
  Filter,
  CheckCircle,
  ExternalLink,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { Job } from '../types/job';

interface PrivateJobsSectionProps {
  jobs: Job[];
  savedJobIds: Set<string>;
  onToggleSaveJob: (jobId: string) => void;
  onOpenJobDetail: (job: Job) => void;
  onApplyJob: (job: Job) => void;
  onFilterByCompany?: (company: string) => void;
}

export const PrivateJobsSection: React.FC<PrivateJobsSectionProps> = ({
  jobs,
  savedJobIds,
  onToggleSaveJob,
  onOpenJobDetail,
  onApplyJob,
  onFilterByCompany
}) => {
  // Private jobs only
  const privateJobs = jobs.filter((j) => j.sector === 'Private');

  // Filters state
  const [selectedIndustry, setSelectedIndustry] = useState<string>('All');
  const [selectedCity, setSelectedCity] = useState<string>('All');
  const [selectedExperience, setSelectedExperience] = useState<string>('All');
  const [selectedSalary, setSelectedSalary] = useState<string>('All');
  const [selectedJobType, setSelectedJobType] = useState<string>('All');

  const industries = [
    'All',
    'Information Technology',
    'Telecommunications',
    'Commercial Banking',
    'Textile Manufacturing & Exports',
    'Logistics & Supply Chain',
    'BPO & Call Centers',
    'Energy & Fertilizers',
    'Education & Academics',
    'Construction & Real Estate',
    'Packaging & Consumer Goods'
  ];

  const cities = ['All', 'Lahore', 'Karachi', 'Islamabad', 'Rawalpindi', 'Faisalabad', 'Multan', 'Remote'];
  const experiences = ['All', 'Fresh / Entry Level', '1-3 Years', '3-5 Years', '5+ Years'];
  const salaries = ['All', 'Under 50k', '50k - 100k', '100k - 200k', '200k+'];
  const jobTypes = ['All', 'Full Time', 'Part Time', 'Contract', 'Internship', 'Remote'];

  // Top companies showcase
  const topCompanies = [
    { name: 'Systems Limited', sector: 'Software & IT Export', city: 'Lahore & Karachi', openings: 24, initials: 'SYS', color: 'bg-blue-600' },
    { name: 'Jazz Telecom', sector: 'Telco & Digital', city: 'Islamabad HQ', openings: 18, initials: 'JAZ', color: 'bg-amber-600' },
    { name: 'Habib Bank (HBL)', sector: 'Banking & Fintech', city: 'Nationwide Branches', openings: 35, initials: 'HBL', color: 'bg-emerald-600' },
    { name: 'Arbisoft', sector: 'High-Tech SaaS', city: 'Remote & Lahore', openings: 12, initials: 'ARB', color: 'bg-indigo-600' },
    { name: 'Engro Corp', sector: 'Conglomerate & Energy', city: 'Karachi HQ', openings: 15, initials: 'ENG', color: 'bg-teal-600' },
    { name: 'Interloop Ltd', sector: 'Textile Exports', city: 'Faisalabad & Lahore', openings: 20, initials: 'INT', color: 'bg-sky-700' }
  ];

  // Filter application
  const filteredList = privateJobs.filter((job) => {
    if (selectedIndustry !== 'All' && job.industry !== selectedIndustry) return false;
    if (selectedCity !== 'All' && !job.location.includes(selectedCity)) return false;
    if (selectedJobType !== 'All' && job.jobType !== selectedJobType) return false;

    if (selectedExperience !== 'All') {
      if (selectedExperience === 'Fresh / Entry Level' && !job.experience?.toLowerCase().includes('fresh') && !job.experience?.toLowerCase().includes('graduat')) {
        return false;
      }
    }

    if (selectedSalary !== 'All') {
      const sal = job.salary || '';
      if (selectedSalary === 'Under 50k' && !(sal.includes('40,000') || sal.includes('45,000') || sal.includes('48,000'))) return false;
      if (selectedSalary === '50k - 100k' && !(sal.includes('50,000') || sal.includes('55,000') || sal.includes('60,000') || sal.includes('65,000') || sal.includes('70,000') || sal.includes('75,000') || sal.includes('80,000') || sal.includes('85,000') || sal.includes('90,000') || sal.includes('95,000'))) return false;
      if (selectedSalary === '100k - 200k' && !(sal.includes('120,000') || sal.includes('130,000') || sal.includes('140,000') || sal.includes('170,000') || sal.includes('180,000'))) return false;
      if (selectedSalary === '200k+' && !(sal.includes('250,000') || sal.includes('280,000') || sal.includes('300,000') || sal.includes('420,000'))) return false;
    }

    return true;
  });

  return (
    <section id="private-jobs" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200 mb-2">
              <Building2 className="w-3.5 h-3.5" />
              <span>Corporate & Private Opportunities</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Private Sector Careers in Pakistan
            </h2>
            <p className="text-sm text-slate-500 mt-1 max-w-2xl">
              Connect with Pakistan&apos;s leading multinationals, tech exports unicorns, commercial banks, FMCG leaders, and high-growth ventures.
            </p>
          </div>

          <span className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 border border-slate-200">
            {privateJobs.length} Verified Private Openings
          </span>
        </div>

        {/* Featured Employers Banner */}
        <div className="mb-10">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            Top Hiring Employers in Pakistan:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {topCompanies.map((c) => (
              <div
                key={c.name}
                onClick={() => onFilterByCompany?.(c.name)}
                className="group p-3 rounded-xl border border-slate-200 hover:border-blue-400 bg-slate-50/50 hover:bg-white shadow-2xs hover:shadow-md transition-all cursor-pointer text-center"
              >
                <div className={`w-10 h-10 rounded-lg mx-auto ${c.color} text-white flex items-center justify-center font-black text-xs shadow-xs group-hover:scale-105 transition-transform mb-2`}>
                  {c.initials}
                </div>
                <h4 className="text-xs font-bold text-slate-900 truncate group-hover:text-blue-600">
                  {c.name}
                </h4>
                <p className="text-[10px] text-slate-500 truncate mt-0.5">{c.city}</p>
                <span className="inline-block mt-1 text-[10px] font-semibold text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded">
                  {c.openings} open jobs
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Multi-Dimensional Filter Bar */}
        <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 mb-8">
          <div className="flex items-center gap-2 mb-3 text-xs font-bold text-slate-700">
            <Filter className="w-4 h-4 text-blue-600" />
            <span>Refine Private Sector Jobs:</span>
            {(selectedIndustry !== 'All' || selectedCity !== 'All' || selectedExperience !== 'All' || selectedSalary !== 'All' || selectedJobType !== 'All') && (
              <button
                onClick={() => {
                  setSelectedIndustry('All');
                  setSelectedCity('All');
                  setSelectedExperience('All');
                  setSelectedSalary('All');
                  setSelectedJobType('All');
                }}
                className="ml-auto text-blue-600 hover:underline cursor-pointer font-semibold text-xs"
              >
                Reset All Filters
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {/* 1. Industry */}
            <div>
              <label className="block text-[11px] font-semibold text-slate-500 mb-1">Industry</label>
              <select
                value={selectedIndustry}
                onChange={(e) => setSelectedIndustry(e.target.value)}
                className="w-full bg-white border border-slate-200 rounded-lg px-2.5 py-2 text-xs font-medium text-slate-800 focus:outline-hidden focus:border-blue-500"
              >
                {industries.map((ind) => (
                  <option key={ind} value={ind}>{ind}</option>
                ))}
              </select>
            </div>

            {/* 2. City */}
            <div>
              <label className="block text-[11px] font-semibold text-slate-500 mb-1">City</label>
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="w-full bg-white border border-slate-200 rounded-lg px-2.5 py-2 text-xs font-medium text-slate-800 focus:outline-hidden focus:border-blue-500"
              >
                {cities.map((city) => (
                  <option key={city} value={city}>{city}</option>
                ))}
              </select>
            </div>

            {/* 3. Experience */}
            <div>
              <label className="block text-[11px] font-semibold text-slate-500 mb-1">Experience</label>
              <select
                value={selectedExperience}
                onChange={(e) => setSelectedExperience(e.target.value)}
                className="w-full bg-white border border-slate-200 rounded-lg px-2.5 py-2 text-xs font-medium text-slate-800 focus:outline-hidden focus:border-blue-500"
              >
                {experiences.map((exp) => (
                  <option key={exp} value={exp}>{exp}</option>
                ))}
              </select>
            </div>

            {/* 4. Salary */}
            <div>
              <label className="block text-[11px] font-semibold text-slate-500 mb-1">Salary Bracket</label>
              <select
                value={selectedSalary}
                onChange={(e) => setSelectedSalary(e.target.value)}
                className="w-full bg-white border border-slate-200 rounded-lg px-2.5 py-2 text-xs font-medium text-slate-800 focus:outline-hidden focus:border-blue-500"
              >
                {salaries.map((sal) => (
                  <option key={sal} value={sal}>{sal}</option>
                ))}
              </select>
            </div>

            {/* 5. Job Type */}
            <div>
              <label className="block text-[11px] font-semibold text-slate-500 mb-1">Job Type</label>
              <select
                value={selectedJobType}
                onChange={(e) => setSelectedJobType(e.target.value)}
                className="w-full bg-white border border-slate-200 rounded-lg px-2.5 py-2 text-xs font-medium text-slate-800 focus:outline-hidden focus:border-blue-500"
              >
                {jobTypes.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Private Job Cards Listing */}
        {filteredList.length === 0 ? (
          <div className="bg-slate-50 rounded-2xl border border-slate-200 p-8 text-center">
            <p className="text-sm font-bold text-slate-700">No private sector jobs matched your selected combination.</p>
            <button
              onClick={() => {
                setSelectedIndustry('All');
                setSelectedCity('All');
                setSelectedExperience('All');
                setSelectedSalary('All');
                setSelectedJobType('All');
              }}
              className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-lg text-xs font-semibold hover:bg-blue-700"
            >
              Reset Private Sector Filters
            </button>
          </div>
        ) : (
          <div className="space-y-3.5">
            {filteredList.map((job) => {
              const isSaved = savedJobIds.has(job.id);
              return (
                <div
                  key={job.id}
                  className="bg-white rounded-2xl border border-slate-200/90 hover:border-blue-400 hover:shadow-md transition-all p-4 sm:p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 group"
                >
                  <div className="flex items-start gap-4">
                    {/* Logo */}
                    <div className={`w-12 h-12 rounded-xl shrink-0 ${job.logoBgColor || 'bg-blue-600'} ${job.logoTextColor || 'text-white'} flex items-center justify-center font-bold text-sm shadow-xs`}>
                      {job.logoInitials || job.company.substring(0, 2).toUpperCase()}
                    </div>

                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3
                          onClick={() => onOpenJobDetail(job)}
                          className="text-base font-bold text-slate-900 group-hover:text-blue-600 cursor-pointer transition-colors"
                        >
                          {job.title}
                        </h3>

                        {job.jobType === 'Remote' && (
                          <span className="text-[10px] font-bold bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">
                            Work from Home
                          </span>
                        )}

                        {job.jobType === 'Internship' && (
                          <span className="text-[10px] font-bold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full">
                            Paid Internship
                          </span>
                        )}
                      </div>

                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-600 font-medium mt-1">
                        <span className="text-slate-900 font-semibold">{job.company}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-rose-500" />
                          {job.location}
                        </span>
                        <span>•</span>
                        <span className="text-slate-500">{job.industry || 'Private Sector'}</span>
                      </div>

                      <div className="flex flex-wrap items-center gap-2 mt-2.5">
                        {job.salary && (
                          <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                            {job.salary}
                          </span>
                        )}
                        <span className="text-xs text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md">
                          Exp: {job.experience || '1-3 Years'}
                        </span>
                        <span className="text-xs text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md">
                          {job.jobType}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Right Actions */}
                  <div className="flex items-center gap-2.5 self-end md:self-auto shrink-0 pt-2 md:pt-0 border-t md:border-t-0 border-slate-100 w-full md:w-auto justify-end">
                    <button
                      onClick={() => onToggleSaveJob(job.id)}
                      className={`p-2 rounded-xl transition-colors cursor-pointer ${
                        isSaved ? 'bg-blue-50 text-blue-600' : 'text-slate-400 hover:text-blue-600 hover:bg-slate-100'
                      }`}
                      title="Save Job"
                    >
                      {isSaved ? <BookmarkCheck className="w-5 h-5 fill-blue-600" /> : <Bookmark className="w-5 h-5" />}
                    </button>

                    <button
                      onClick={() => onOpenJobDetail(job)}
                      className="px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors cursor-pointer"
                    >
                      Details
                    </button>

                    <button
                      onClick={() => onApplyJob(job)}
                      className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-xs shadow-blue-600/20 cursor-pointer"
                    >
                      Apply Now
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
