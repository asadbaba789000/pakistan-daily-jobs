import React, { useState } from 'react';
import {
  X,
  CheckCircle2,
  UploadCloud,
  FileText,
  User,
  Phone,
  Mail,
  MapPin,
  GraduationCap,
  Briefcase,
  AlertCircle,
  Building2
} from 'lucide-react';
import { Job } from '../types/job';

interface ApplyJobModalProps {
  job: Job | null;
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (jobTitle: string, applicantName: string) => void;
}

export const ApplyJobModal: React.FC<ApplyJobModalProps> = ({
  job,
  isOpen,
  onClose,
  onSuccess
}) => {
  const [fullName, setFullName] = useState('');
  const [cnic, setCnic] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('Lahore');
  const [education, setEducation] = useState('Bachelors (16 Years)');
  const [experience, setExperience] = useState('1-3 Years');
  const [coverNote, setCoverNote] = useState('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

  if (!isOpen || !job) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !mobile || !email) {
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      const refNum = `PDJ-${Math.floor(100000 + Math.random() * 900000)}`;
      setSubmittedRef(refNum);
      onSuccess(job.title, fullName);
    }, 900);
  };

  const handleClose = () => {
    setSubmittedRef(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div
        className="bg-white rounded-3xl max-w-xl w-full shadow-2xl border border-slate-200 overflow-hidden relative max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 border-b border-slate-100 flex items-center justify-between bg-slate-50">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
              Direct Job Application
            </span>
            <h3 className="text-lg font-bold text-slate-900 mt-1 line-clamp-1">
              Apply for {job.title}
            </h3>
            <p className="text-xs text-slate-500">{job.company} • {job.location}</p>
          </div>

          <button
            onClick={handleClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        {submittedRef ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <h3 className="text-xl font-bold text-slate-900">Application Submitted!</h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto">
              Your application for <strong>{job.title}</strong> at <strong>{job.company}</strong> has been transmitted successfully.
            </p>

            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 inline-block text-left w-full text-xs">
              <div className="flex justify-between py-1 border-b border-slate-200/60">
                <span className="text-slate-500">Applicant:</span>
                <span className="font-semibold text-slate-800">{fullName}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-200/60">
                <span className="text-slate-500">Reference Number:</span>
                <span className="font-mono font-bold text-blue-600">{submittedRef}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-slate-500">Notice:</span>
                <span className="text-emerald-700 font-semibold">Saved to Candidate Records</span>
              </div>
            </div>

            <button
              onClick={handleClose}
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold transition-all cursor-pointer"
            >
              Back to Job Search
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 overflow-y-auto space-y-4 text-xs">
            {job.sector === 'Government' && (
              <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-[11px] text-emerald-800 flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Public Sector Post:</strong> Please ensure your Domicile and CNIC details match your official documents for scrutiny.
                </span>
              </div>
            )}

            {/* Full Name & CNIC */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Full Legal Name *</label>
                <div className="flex items-center gap-2 px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus-within:border-blue-600 focus-within:bg-white">
                  <User className="w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Muhammad Ali"
                    className="w-full bg-transparent focus:outline-hidden text-xs text-slate-900"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Pakistani CNIC Number *</label>
                <input
                  type="text"
                  required
                  value={cnic}
                  onChange={(e) => setCnic(e.target.value)}
                  placeholder="35201-XXXXXXX-X"
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:outline-hidden focus:border-blue-600 focus:bg-white text-xs font-mono"
                />
              </div>
            </div>

            {/* Mobile & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Mobile / WhatsApp Number *</label>
                <div className="flex items-center gap-2 px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus-within:border-blue-600 focus-within:bg-white">
                  <Phone className="w-4 h-4 text-slate-400" />
                  <input
                    type="tel"
                    required
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    placeholder="+92 300 1234567"
                    className="w-full bg-transparent focus:outline-hidden text-xs text-slate-900"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Email Address *</label>
                <div className="flex items-center gap-2 px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus-within:border-blue-600 focus-within:bg-white">
                  <Mail className="w-4 h-4 text-slate-400" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your.email@domain.com"
                    className="w-full bg-transparent focus:outline-hidden text-xs text-slate-900"
                  />
                </div>
              </div>
            </div>

            {/* City & Highest Education */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">City of Residence</label>
                <select
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
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
                  <option value="Other">Other Pakistani City</option>
                </select>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Highest Qualification</label>
                <select
                  value={education}
                  onChange={(e) => setEducation(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:outline-hidden focus:border-blue-600 focus:bg-white text-xs"
                >
                  <option value="Bachelors (16 Years)">Bachelors (BS / BA / B.Com / BE)</option>
                  <option value="Masters / MPhil (18 Years)">Masters / MPhil / MS</option>
                  <option value="Intermediate / FA / FSc">Intermediate (FA / FSc / ICS / I.Com)</option>
                  <option value="Matriculation">Matriculation (SSC)</option>
                  <option value="PhD / Doctorate">PhD / Doctorate</option>
                  <option value="Diploma / Certification">DAE / Technical Diploma</option>
                </select>
              </div>
            </div>

            {/* Experience & CV Upload */}
            <div>
              <label className="block font-semibold text-slate-700 mb-1">Attach Resume / CV (PDF or DOC)</label>
              <div className="border-2 border-dashed border-slate-200 hover:border-blue-400 rounded-2xl p-4 text-center cursor-pointer transition-colors bg-slate-50">
                <input
                  type="file"
                  id="cv-upload"
                  accept=".pdf,.doc,.docx"
                  onChange={(e) => {
                    if (e.target.files && e.target.files[0]) {
                      setSelectedFile(e.target.files[0]);
                    }
                  }}
                  className="hidden"
                />
                <label htmlFor="cv-upload" className="cursor-pointer">
                  <UploadCloud className="w-8 h-8 text-blue-600 mx-auto mb-1.5" />
                  {selectedFile ? (
                    <span className="font-semibold text-blue-700 block truncate">
                      {selectedFile.name} ({(selectedFile.size / 1024).toFixed(0)} KB)
                    </span>
                  ) : (
                    <>
                      <span className="font-bold text-slate-800 block">Click to upload your CV</span>
                      <span className="text-[11px] text-slate-400 block mt-0.5">Supports PDF, DOCX up to 5MB</span>
                    </>
                  )}
                </label>
              </div>
            </div>

            {/* Cover Note */}
            <div>
              <label className="block font-semibold text-slate-700 mb-1">
                Brief Cover Note or Relevant Highlights (Optional)
              </label>
              <textarea
                rows={2}
                value={coverNote}
                onChange={(e) => setCoverNote(e.target.value)}
                placeholder="Briefly state your key strengths, years of experience, or notice period..."
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:outline-hidden focus:border-blue-600 focus:bg-white text-xs"
              />
            </div>

            {/* Action buttons */}
            <div className="pt-2 flex items-center justify-end gap-2.5">
              <button
                type="button"
                onClick={handleClose}
                className="px-4 py-2.5 rounded-xl text-slate-600 hover:bg-slate-100 font-semibold cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold shadow-md shadow-blue-600/30 flex items-center gap-2 cursor-pointer disabled:opacity-60"
              >
                {isSubmitting ? 'Submitting Application...' : 'Send Application Now'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
