import React, { useState } from 'react';
import {
  Landmark,
  Calendar,
  GraduationCap,
  MapPin,
  Clock,
  ShieldCheck,
  FileText,
  ChevronRight,
  ExternalLink,
  Award,
  AlertCircle
} from 'lucide-react';
import { Job, Province } from '../types/job';
import { PROVINCES } from '../data/jobsData';

interface GovernmentJobsSectionProps {
  jobs: Job[];
  onOpenJobDetail: (job: Job) => void;
  onApplyJob: (job: Job) => void;
}

export const GovernmentJobsSection: React.FC<GovernmentJobsSectionProps> = ({
  jobs,
  onOpenJobDetail,
  onApplyJob
}) => {
  const [selectedProvince, setSelectedProvince] = useState<string>('All');
  const [bpsFilter, setBpsFilter] = useState<string>('All');

  // Filter government jobs only
  const govJobs = jobs.filter((job) => job.sector === 'Government');

  const filteredGovJobs = govJobs.filter((job) => {
    const matchesProvince =
      selectedProvince === 'All' ||
      job.province?.toLowerCase() === selectedProvince.toLowerCase();

    const matchesBps =
      bpsFilter === 'All' ||
      (job.bpsScale && job.bpsScale.includes(bpsFilter));

    return matchesProvince && matchesBps;
  });

  return (
    <section id="government-jobs" className="py-16 bg-gradient-to-b from-white to-emerald-50/40 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-300 mb-2">
              <Landmark className="w-3.5 h-3.5 text-emerald-700" />
              <span>Official Public Sector Gazettes</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Latest Government Jobs in Pakistan
            </h2>
            <p className="text-sm text-slate-600 mt-1 max-w-2xl">
              Verified Federal and Provincial Public Service Commission gazettes, BPS scales, autonomous departmental vacancies, and uniformed services recruitments.
            </p>
          </div>

          {/* Quick stats counter */}
          <div className="flex items-center gap-3 bg-white p-3 rounded-xl border border-emerald-200 shadow-2xs self-start lg:self-auto">
            <div className="w-10 h-10 rounded-lg bg-emerald-700 text-white flex items-center justify-center font-black text-sm">
              PK
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900">National Gazette Desk</p>
              <p className="text-[11px] text-emerald-700 font-semibold">
                {govJobs.length} Live Official Competitions
              </p>
            </div>
          </div>
        </div>

        {/* Dashboard Filter Bar - Provinces */}
        <div className="bg-white p-3.5 sm:p-4 rounded-2xl border border-emerald-200/90 shadow-xs mb-8 space-y-3.5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-emerald-600" />
              Filter by Province / Jurisdiction:
            </span>

            {/* BPS Scale Filter dropdown */}
            <div className="flex items-center gap-2 text-xs">
              <span className="text-slate-500 font-medium">BPS Scale:</span>
              <select
                value={bpsFilter}
                onChange={(e) => setBpsFilter(e.target.value)}
                className="bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1 text-xs font-semibold text-slate-800 focus:outline-hidden"
              >
                <option value="All">All Scales (BPS 1-22)</option>
                <option value="BPS-14">BPS-14</option>
                <option value="BPS-16">BPS-16</option>
                <option value="BPS-17">BPS-17 (Gazetted Class-1)</option>
                <option value="BPS-18">BPS-18</option>
              </select>
            </div>
          </div>

          {/* Province Buttons: Federal, Punjab, Sindh, KPK, Balochistan, AJK, Gilgit-Baltistan */}
          <div className="flex flex-wrap items-center gap-1.5 pt-1">
            {PROVINCES.map((prov) => {
              const isSelected = selectedProvince === prov;
              return (
                <button
                  key={prov}
                  onClick={() => setSelectedProvince(prov)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-emerald-700 text-white shadow-sm shadow-emerald-700/30'
                      : 'bg-slate-50 text-slate-700 hover:bg-emerald-50 hover:text-emerald-800 border border-slate-200/80'
                  }`}
                >
                  {prov === 'All' ? 'All Pakistan (Federal & Provinces)' : prov}
                </button>
              );
            })}
          </div>
        </div>

        {/* Government Job Cards Dashboard */}
        {filteredGovJobs.length === 0 ? (
          <div className="bg-white rounded-2xl border border-dashed border-slate-300 p-8 text-center my-6">
            <AlertCircle className="w-10 h-10 text-slate-400 mx-auto mb-2" />
            <p className="text-sm font-bold text-slate-700">No government jobs found for {selectedProvince}</p>
            <p className="text-xs text-slate-500 mt-1">Try switching to &quot;All Pakistan&quot; or resetting scale filters.</p>
            <button
              onClick={() => {
                setSelectedProvince('All');
                setBpsFilter('All');
              }}
              className="mt-3 px-4 py-1.5 rounded-lg bg-emerald-700 text-white text-xs font-semibold hover:bg-emerald-800"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredGovJobs.map((job) => (
              <div
                key={job.id}
                className="bg-white rounded-2xl border border-slate-200 hover:border-emerald-500/80 hover:shadow-xl hover:shadow-emerald-900/5 transition-all duration-200 p-5 flex flex-col justify-between relative overflow-hidden group"
              >
                {/* Official Green Top Accent Strip */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700" />

                <div>
                  {/* Badge row: Department + BPS Scale + Testing Agency */}
                  <div className="flex items-center justify-between gap-2 pt-1">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200">
                      {job.province || 'Federal'} Domicile
                    </span>

                    <div className="flex items-center gap-1.5">
                      {job.testOrganization && (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-blue-50 text-blue-800 border border-blue-200">
                          {job.testOrganization}
                        </span>
                      )}
                      {job.bpsScale && (
                        <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-md bg-amber-50 text-amber-900 border border-amber-300">
                          {job.bpsScale}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Job Title */}
                  <h3
                    onClick={() => onOpenJobDetail(job)}
                    className="text-base font-bold text-slate-900 group-hover:text-emerald-700 transition-colors mt-3 line-clamp-2 cursor-pointer leading-snug"
                  >
                    {job.title}
                  </h3>

                  {/* Department & Company */}
                  <div className="mt-2 space-y-1 text-xs">
                    <p className="font-semibold text-slate-700 flex items-center gap-1.5">
                      <Landmark className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span className="truncate">{job.company}</span>
                    </p>
                    {job.department && (
                      <p className="text-slate-500 text-[11px] truncate pl-5">
                        Dept: {job.department}
                      </p>
                    )}
                  </div>

                  {/* Required Education */}
                  <div className="mt-3.5 p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-700 space-y-1.5">
                    <div className="flex items-start gap-1.5">
                      <GraduationCap className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                      <span className="line-clamp-2 text-[11px] leading-snug">
                        <strong>Required:</strong> {job.education}
                      </span>
                    </div>

                    {job.vacanciesCount && (
                      <div className="flex items-center gap-1.5 text-[11px] text-emerald-800 font-semibold">
                        <Award className="w-3 h-3 text-emerald-600" />
                        <span>{job.vacanciesCount} Total Quota Seats Announced</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Footer: Last Date & Action Buttons */}
                <div className="mt-5 pt-3 border-t border-slate-100">
                  <div className="flex items-center justify-between text-xs mb-3">
                    <span className="text-slate-500 font-medium">Last Date to Apply:</span>
                    <span className="inline-flex items-center gap-1 font-bold text-rose-600 bg-rose-50 px-2 py-0.5 rounded-md border border-rose-200">
                      <Calendar className="w-3 h-3" />
                      {job.deadline || 'Closing Soon'}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => onOpenJobDetail(job)}
                      className="px-3 py-2 rounded-xl text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors flex items-center justify-center gap-1 cursor-pointer"
                    >
                      <FileText className="w-3.5 h-3.5 text-slate-500" />
                      <span>Details / Ad</span>
                    </button>
                    <button
                      onClick={() => onApplyJob(job)}
                      className="px-3 py-2 rounded-xl text-xs font-bold text-white bg-emerald-700 hover:bg-emerald-800 transition-colors flex items-center justify-center gap-1 cursor-pointer shadow-xs shadow-emerald-700/20"
                    >
                      <span>Apply Online</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
