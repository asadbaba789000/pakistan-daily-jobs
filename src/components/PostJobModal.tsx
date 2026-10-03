import React, { useState } from 'react';
import {
  X,
  PlusCircle,
  Building2,
  MapPin,
  Briefcase,
  DollarSign,
  Calendar,
  GraduationCap,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { Job, JobSector, JobType, PakistaniCity, Province } from '../types/job';

interface PostJobModalProps {
  isOpen: boolean;
  onClose: () => void;
  onJobCreated: (newJob: Job) => void;
}

export const PostJobModal: React.FC<PostJobModalProps> = ({
  isOpen,
  onClose,
  onJobCreated
}) => {
  const [sector, setSector] = useState<JobSector>('Private');
  const [title, setTitle] = useState('');
  const [company, setCompany] = useState('');
  const [department, setDepartment] = useState('');
  const [city, setCity] = useState<PakistaniCity>('Lahore');
  const [province, setProvince] = useState<Province>('Punjab');
  const [jobType, setJobType] = useState<JobType>('Full Time');
  const [category, setCategory] = useState('IT & Software');
  const [salary, setSalary] = useState('');
  const [education, setEducation] = useState('Bachelors in relevant field');
  const [experience, setExperience] = useState('1-3 Years');
  const [deadline, setDeadline] = useState('30 Nov 2026');
  const [description, setDescription] = useState('');
  const [bpsScale, setBpsScale] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !company) return;

    const newJob: Job = {
      id: `user-job-${Date.now()}`,
      title,
      company,
      department: department || undefined,
      location: city,
      province,
      sector,
      jobType,
      category,
      salary: salary || 'Negotiable',
      postedDate: 'Just now',
      deadline,
      education,
      experience,
      bpsScale: sector === 'Government' && bpsScale ? bpsScale : undefined,
      isFeatured: true,
      isDemo: false,
      logoBgColor: sector === 'Government' ? 'bg-emerald-800' : 'bg-blue-700',
      logoTextColor: 'text-white',
      logoInitials: company.substring(0, 2).toUpperCase(),
      description: description || 'Exciting opportunity to join our expanding team in Pakistan.',
      requirements: [
        `Strong background in ${category}`,
        `${experience} relevant practical experience`,
        `Minimum ${education}`,
        'Proactive team player with solid verbal and written communication'
      ],
      responsibilities: [
        'Deliver on core project deliverables and organizational objectives',
        'Collaborate across cross-functional teams in Pakistan office',
        'Uphold company standards of quality, safety, and delivery'
      ],
      benefits: [
        'Market-competitive salary package',
        'Health insurance and leave benefits',
        'Career growth & development programs'
      ],
      vacanciesCount: 1
    };

    onJobCreated(newJob);
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div
        className="bg-white rounded-3xl max-w-2xl w-full shadow-2xl border border-slate-200 overflow-hidden relative max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-blue-100 text-blue-700 mb-1">
              <PlusCircle className="w-3.5 h-3.5" />
              <span>Employer Recruitment Portal</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900">Post a Job Opening in Pakistan</h3>
            <p className="text-xs text-slate-500">Reach millions of qualified job seekers across all Pakistani provinces</p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        {isSuccess ? (
          <div className="p-12 text-center space-y-3">
            <CheckCircle2 className="w-16 h-16 text-emerald-600 mx-auto animate-bounce" />
            <h3 className="text-xl font-bold text-slate-900">Job Posted Successfully!</h3>
            <p className="text-xs text-slate-600">
              Your opening &quot;{title}&quot; is now live on Pakistan Daily Jobs.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 overflow-y-auto space-y-4 text-xs">
            {/* Sector Selector */}
            <div>
              <label className="block font-semibold text-slate-700 mb-1.5">Employment Sector *</label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setSector('Private')}
                  className={`p-3 rounded-xl border text-center font-bold transition-all cursor-pointer ${
                    sector === 'Private'
                      ? 'border-blue-600 bg-blue-50 text-blue-700 ring-2 ring-blue-500/20'
                      : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  🏢 Private Sector / Corporate
                </button>
                <button
                  type="button"
                  onClick={() => setSector('Government')}
                  className={`p-3 rounded-xl border text-center font-bold transition-all cursor-pointer ${
                    sector === 'Government'
                      ? 'border-emerald-600 bg-emerald-50 text-emerald-800 ring-2 ring-emerald-500/20'
                      : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  🏛️ Government / Public Sector
                </button>
              </div>
            </div>

            {/* Job Title & Company */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Job Designation / Title *</label>
                <input
                  type="text"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="e.g. Senior Backend Engineer"
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:outline-hidden focus:border-blue-600 focus:bg-white text-xs"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Company / Department Name *</label>
                <input
                  type="text"
                  required
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="e.g. TechCorp PK or Ministry of Planning"
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:outline-hidden focus:border-blue-600 focus:bg-white text-xs"
                />
              </div>
            </div>

            {sector === 'Government' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">BPS Scale (e.g. BPS-17)</label>
                  <input
                    type="text"
                    value={bpsScale}
                    onChange={(e) => setBpsScale(e.target.value)}
                    placeholder="BPS-16 or BPS-17"
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:outline-hidden focus:border-emerald-600 focus:bg-white text-xs"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Department / Commission</label>
                  <input
                    type="text"
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                    placeholder="e.g. FPSC / Revenue Dept"
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:outline-hidden focus:border-emerald-600 focus:bg-white text-xs"
                  />
                </div>
              </div>
            )}

            {/* City & Province */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">City Location *</label>
                <select
                  value={city}
                  onChange={(e) => setCity(e.target.value as PakistaniCity)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:outline-hidden focus:border-blue-600 focus:bg-white text-xs"
                >
                  <option value="Lahore">Lahore</option>
                  <option value="Karachi">Karachi</option>
                  <option value="Islamabad">Islamabad</option>
                  <option value="Rawalpindi">Rawalpindi</option>
                  <option value="Faisalabad">Faisalabad</option>
                  <option value="Multan">Multan</option>
                  <option value="Peshawar">Peshawar</option>
                  <option value="Quetta">Quetta</option>
                  <option value="Remote">Remote (Pakistan-wide)</option>
                </select>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Province / Region *</label>
                <select
                  value={province}
                  onChange={(e) => setProvince(e.target.value as Province)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:outline-hidden focus:border-blue-600 focus:bg-white text-xs"
                >
                  <option value="Punjab">Punjab</option>
                  <option value="Sindh">Sindh</option>
                  <option value="Federal">Federal (Islamabad)</option>
                  <option value="KPK">Khyber Pakhtunkhwa (KPK)</option>
                  <option value="Balochistan">Balochistan</option>
                  <option value="AJK">Azad Jammu & Kashmir</option>
                  <option value="Gilgit-Baltistan">Gilgit-Baltistan</option>
                </select>
              </div>
            </div>

            {/* Category & Job Type */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Category</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:outline-hidden focus:border-blue-600 focus:bg-white text-xs"
                >
                  <option value="IT & Software">IT & Software</option>
                  <option value="Banking Jobs">Banking Jobs</option>
                  <option value="Engineering">Engineering</option>
                  <option value="Education">Education</option>
                  <option value="Healthcare">Healthcare</option>
                  <option value="Accounting & Finance">Accounting & Finance</option>
                  <option value="Sales & Marketing">Sales & Marketing</option>
                  <option value="HR & Administration">HR & Administration</option>
                  <option value="Customer Support">Customer Support</option>
                  <option value="Government Jobs">Government Jobs</option>
                  <option value="Internships">Internships</option>
                  <option value="Remote Jobs">Remote Jobs</option>
                </select>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Job Type</label>
                <select
                  value={jobType}
                  onChange={(e) => setJobType(e.target.value as JobType)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:outline-hidden focus:border-blue-600 focus:bg-white text-xs"
                >
                  <option value="Full Time">Full Time</option>
                  <option value="Part Time">Part Time</option>
                  <option value="Contract">Contract</option>
                  <option value="Internship">Internship</option>
                  <option value="Remote">Remote</option>
                </select>
              </div>
            </div>

            {/* Salary & Deadline */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Salary Range (in PKR)</label>
                <input
                  type="text"
                  value={salary}
                  onChange={(e) => setSalary(e.target.value)}
                  placeholder="e.g. PKR 120,000 - 160,000 / month"
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:outline-hidden focus:border-blue-600 focus:bg-white text-xs"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Last Date to Apply</label>
                <input
                  type="text"
                  value={deadline}
                  onChange={(e) => setDeadline(e.target.value)}
                  placeholder="e.g. 15 Nov 2026"
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:outline-hidden focus:border-blue-600 focus:bg-white text-xs"
                />
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="block font-semibold text-slate-700 mb-1">Job Brief & Responsibilities</label>
              <textarea
                rows={3}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Describe key day-to-day duties, team structure, or perks..."
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:outline-hidden focus:border-blue-600 focus:bg-white text-xs"
              />
            </div>

            {/* Buttons */}
            <div className="pt-3 border-t border-slate-100 flex items-center justify-end gap-2.5">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2.5 rounded-xl text-slate-600 hover:bg-slate-100 font-semibold cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold shadow-md shadow-blue-600/30 cursor-pointer"
              >
                Publish Job Listing
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
