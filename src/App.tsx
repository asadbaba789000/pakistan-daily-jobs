/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { CategoryGrid } from './components/CategoryGrid';
import { LatestJobsSection } from './components/LatestJobsSection';
import { GovernmentJobsSection } from './components/GovernmentJobsSection';
import { PrivateJobsSection } from './components/PrivateJobsSection';
import { CityJobsSection } from './components/CityJobsSection';
import { CareerGuideSection } from './components/CareerGuideSection';
import { Footer } from './components/Footer';

import { JobDetailModal } from './components/JobDetailModal';
import { ApplyJobModal } from './components/ApplyJobModal';
import { PostJobModal } from './components/PostJobModal';
import { SavedJobsModal } from './components/SavedJobsModal';
import { AuthModal } from './components/AuthModal';
import { AlertsModal } from './components/AlertsModal';

import { INITIAL_JOBS } from './data/jobsData';
import { Job, PakistaniCity } from './types/job';
import { CheckCircle2 } from 'lucide-react';

export default function App() {
  // Master Jobs List (initialized with realistic Pakistani jobs including requested demo items)
  const [jobs, setJobs] = useState<Job[]>(() => {
    try {
      const stored = localStorage.getItem('pk_daily_jobs_custom');
      if (stored) {
        const parsed = JSON.parse(stored);
        return [...parsed, ...INITIAL_JOBS];
      }
    } catch {
      // Fallback
    }
    return INITIAL_JOBS;
  });

  // Saved / Bookmarked Job IDs
  const [savedJobIds, setSavedJobIds] = useState<Set<string>>(() => {
    try {
      const stored = localStorage.getItem('pk_saved_jobs');
      if (stored) {
        return new Set(JSON.parse(stored));
      }
    } catch {
      // Fallback
    }
    return new Set(['pk-demo-001', 'gov-pk-101']);
  });

  // Current active navigation tab / section
  const [activeTab, setActiveTab] = useState<string>('home');

  // Search and Filter State
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCity, setSelectedCity] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  // Active filter applied to the jobs listing
  const [appliedSearchQuery, setAppliedSearchQuery] = useState<string>('');
  const [appliedCity, setAppliedCity] = useState<string>('');
  const [appliedCategory, setAppliedCategory] = useState<string>('');

  // Modals state
  const [selectedJobForDetail, setSelectedJobForDetail] = useState<Job | null>(null);
  const [selectedJobForApply, setSelectedJobForApply] = useState<Job | null>(null);
  const [postJobModalOpen, setPostJobModalOpen] = useState(false);
  const [savedJobsModalOpen, setSavedJobsModalOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [alertsModalOpen, setAlertsModalOpen] = useState(false);

  // Authenticated user state
  const [currentUser, setCurrentUser] = useState<{
    name: string;
    email: string;
    role: 'seeker' | 'employer';
  } | null>(null);

  // Toast Notification state
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Synchronize saved jobs with localStorage
  useEffect(() => {
    try {
      localStorage.setItem('pk_saved_jobs', JSON.stringify(Array.from(savedJobIds)));
    } catch {
      // ignore
    }
  }, [savedJobIds]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  // Toggle Save Job
  const handleToggleSaveJob = (jobId: string) => {
    setSavedJobIds((prev) => {
      const updated = new Set(prev);
      if (updated.has(jobId)) {
        updated.delete(jobId);
        showToast('Job removed from saved list');
      } else {
        updated.add(jobId);
        showToast('Job bookmarked to saved list');
      }
      return updated;
    });
  };

  // Search submit
  const handleSearchSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setAppliedSearchQuery(searchQuery);
    setAppliedCity(selectedCity);
    setAppliedCategory(selectedCategory);

    // Scroll to latest jobs section
    const elem = document.getElementById('latest-jobs');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Click popular keyword
  const handleSelectPopularKeyword = (keyword: string) => {
    if (keyword === 'Government Jobs') {
      const elem = document.getElementById('government-jobs');
      if (elem) elem.scrollIntoView({ behavior: 'smooth' });
      return;
    }
    if (keyword === 'Bank Jobs') {
      setSelectedCategory('Banking Jobs');
      setAppliedCategory('Banking Jobs');
    } else if (keyword === 'Teaching Jobs') {
      setSelectedCategory('Education');
      setAppliedCategory('Education');
    } else if (keyword === 'IT Jobs') {
      setSelectedCategory('IT & Software');
      setAppliedCategory('IT & Software');
    } else if (keyword === 'Engineering Jobs') {
      setSelectedCategory('Engineering');
      setAppliedCategory('Engineering');
    } else if (keyword === 'Healthcare Jobs') {
      setSelectedCategory('Healthcare');
      setAppliedCategory('Healthcare');
    } else if (keyword === 'Remote Jobs') {
      setSelectedCategory('Remote Jobs');
      setAppliedCategory('Remote Jobs');
    } else {
      setSearchQuery(keyword);
      setAppliedSearchQuery(keyword);
    }

    const elem = document.getElementById('latest-jobs');
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  // Click a Category from the Category Grid
  const handleSelectCategoryFromGrid = (catName: string) => {
    if (catName === 'Government Jobs') {
      const elem = document.getElementById('government-jobs');
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    setSelectedCategory(catName);
    setAppliedCategory(catName);
    const elem = document.getElementById('latest-jobs');
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  // Click a City from City Jobs Section
  const handleSelectCity = (city: PakistaniCity) => {
    setSelectedCity(city);
    setAppliedCity(city);
    const elem = document.getElementById('latest-jobs');
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  // Reset filters
  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCity('');
    setSelectedCategory('');
    setAppliedSearchQuery('');
    setAppliedCity('');
    setAppliedCategory('');
  };

  // Filtering the master jobs list
  const filteredJobs = jobs.filter((job) => {
    // Search query matching title, company, category, or description
    if (appliedSearchQuery.trim()) {
      const q = appliedSearchQuery.toLowerCase();
      const matchTitle = job.title.toLowerCase().includes(q);
      const matchCompany = job.company.toLowerCase().includes(q);
      const matchCat = job.category.toLowerCase().includes(q);
      const matchDept = job.department?.toLowerCase().includes(q);
      const matchDesc = job.description.toLowerCase().includes(q);
      if (!matchTitle && !matchCompany && !matchCat && !matchDept && !matchDesc) {
        return false;
      }
    }

    // City match
    if (appliedCity) {
      if (!job.location.toLowerCase().includes(appliedCity.toLowerCase())) {
        return false;
      }
    }

    // Category match
    if (appliedCategory) {
      if (appliedCategory === 'Government Jobs' && job.sector !== 'Government') {
        return false;
      } else if (appliedCategory === 'Remote Jobs' && job.jobType !== 'Remote') {
        return false;
      } else if (appliedCategory === 'Internships' && job.jobType !== 'Internship') {
        return false;
      } else if (
        appliedCategory !== 'Government Jobs' &&
        appliedCategory !== 'Remote Jobs' &&
        appliedCategory !== 'Internships' &&
        job.category !== appliedCategory
      ) {
        return false;
      }
    }

    return true;
  });

  // Handle new job created by recruiter
  const handleJobCreated = (newJob: Job) => {
    setJobs((prev) => [newJob, ...prev]);
    showToast(`Job "${newJob.title}" has been published successfully!`);
    try {
      const stored = localStorage.getItem('pk_daily_jobs_custom');
      const existing = stored ? JSON.parse(stored) : [];
      localStorage.setItem('pk_daily_jobs_custom', JSON.stringify([newJob, ...existing]));
    } catch {
      // ignore
    }
  };

  // Navigation switching based on tab
  const handleNavClick = (tabId: string) => {
    setActiveTab(tabId);
    if (tabId === 'internships') {
      setSelectedCategory('Internships');
      setAppliedCategory('Internships');
      const elem = document.getElementById('latest-jobs');
      if (elem) elem.scrollIntoView({ behavior: 'smooth' });
    } else if (tabId === 'remote-jobs') {
      setSelectedCategory('Remote Jobs');
      setAppliedCategory('Remote Jobs');
      const elem = document.getElementById('latest-jobs');
      if (elem) elem.scrollIntoView({ behavior: 'smooth' });
    } else if (tabId === 'companies') {
      const elem = document.getElementById('private-jobs');
      if (elem) elem.scrollIntoView({ behavior: 'smooth' });
    } else {
      const elem = document.getElementById(tabId);
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const savedJobsList = jobs.filter((j) => savedJobIds.has(j.id));

  // Active filter string for feedback
  const filterTokens = [];
  if (appliedSearchQuery) filterTokens.push(`"${appliedSearchQuery}"`);
  if (appliedCity) filterTokens.push(appliedCity);
  if (appliedCategory) filterTokens.push(appliedCategory);
  const activeFilterSummary = filterTokens.join(' • ');

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col text-slate-900">
      {/* 1. Sticky Navigation Bar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={handleNavClick}
        savedCount={savedJobIds.size}
        onOpenSavedModal={() => setSavedJobsModalOpen(true)}
        onOpenPostJobModal={() => setPostJobModalOpen(true)}
        onOpenAuthModal={() => setAuthModalOpen(true)}
        onOpenAlertsModal={() => setAlertsModalOpen(true)}
        currentUser={currentUser}
        onLogout={() => {
          setCurrentUser(null);
          showToast('Logged out successfully');
        }}
      />

      <main className="flex-1">
        {/* 2. Hero Section with Large Search and Popular Keywords */}
        <HeroSection
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedCity={selectedCity}
          setSelectedCity={setSelectedCity}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          onSearchSubmit={handleSearchSubmit}
          onSelectPopularKeyword={handleSelectPopularKeyword}
          totalJobsCount={jobs.length}
          onOpenAlertsModal={() => setAlertsModalOpen(true)}
        />

        {/* 3. Job Categories Grid (15 distinct categories with demo counts) */}
        <CategoryGrid
          selectedCategory={appliedCategory}
          onSelectCategory={handleSelectCategoryFromGrid}
        />

        {/* 4. Latest Jobs Section (Includes demo data: Software Engineer, HR Officer, Data Entry, Jr Accountant, Teacher) */}
        <LatestJobsSection
          jobs={filteredJobs}
          savedJobIds={savedJobIds}
          onToggleSaveJob={handleToggleSaveJob}
          onOpenJobDetail={(job) => setSelectedJobForDetail(job)}
          onApplyJob={(job) => setSelectedJobForApply(job)}
          onViewAllJobs={() => {
            handleResetFilters();
            const elem = document.getElementById('latest-jobs');
            if (elem) elem.scrollIntoView({ behavior: 'smooth' });
          }}
          activeFilterSummary={activeFilterSummary}
          onResetFilters={handleResetFilters}
        />

        {/* 5. Dedicated Government Jobs Section (Federal, Punjab, Sindh, KPK, Balochistan, AJK, Gilgit-Baltistan) */}
        <GovernmentJobsSection
          jobs={jobs}
          onOpenJobDetail={(job) => setSelectedJobForDetail(job)}
          onApplyJob={(job) => setSelectedJobForApply(job)}
        />

        {/* 6. Private Jobs Section (Industry, City, Experience, Salary, Job Type filters + Company cards) */}
        <PrivateJobsSection
          jobs={jobs}
          savedJobIds={savedJobIds}
          onToggleSaveJob={handleToggleSaveJob}
          onOpenJobDetail={(job) => setSelectedJobForDetail(job)}
          onApplyJob={(job) => setSelectedJobForApply(job)}
          onFilterByCompany={(comp) => {
            setSearchQuery(comp);
            setAppliedSearchQuery(comp);
            const elem = document.getElementById('latest-jobs');
            if (elem) elem.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 7. City Jobs Section (Lahore, Karachi, Islamabad, Rawalpindi, Faisalabad, Multan) */}
        <CityJobsSection
          onSelectCity={handleSelectCity}
          selectedCity={appliedCity}
        />

        {/* 8. Career Guide & Salary Insights Section */}
        <CareerGuideSection />
      </main>

      {/* 9. Comprehensive Pakistani Footer */}
      <Footer
        onSelectCity={handleSelectCity}
        onSelectCategory={handleSelectCategoryFromGrid}
        onOpenAlertsModal={() => setAlertsModalOpen(true)}
      />

      {/* --- Interactive Modals --- */}

      {/* Job Details Modal */}
      <JobDetailModal
        job={selectedJobForDetail}
        isOpen={Boolean(selectedJobForDetail)}
        onClose={() => setSelectedJobForDetail(null)}
        onApply={(job) => {
          setSelectedJobForDetail(null);
          setSelectedJobForApply(job);
        }}
        isSaved={selectedJobForDetail ? savedJobIds.has(selectedJobForDetail.id) : false}
        onToggleSave={handleToggleSaveJob}
      />

      {/* Apply for Job Modal */}
      <ApplyJobModal
        job={selectedJobForApply}
        isOpen={Boolean(selectedJobForApply)}
        onClose={() => setSelectedJobForApply(null)}
        onSuccess={(jobTitle, applicantName) => {
          showToast(`Application sent for ${jobTitle}`);
        }}
      />

      {/* Post a Job Modal */}
      <PostJobModal
        isOpen={postJobModalOpen}
        onClose={() => setPostJobModalOpen(false)}
        onJobCreated={handleJobCreated}
      />

      {/* Saved Jobs Modal */}
      <SavedJobsModal
        isOpen={savedJobsModalOpen}
        onClose={() => setSavedJobsModalOpen(false)}
        savedJobs={savedJobsList}
        onRemoveSaved={handleToggleSaveJob}
        onOpenJobDetail={(job) => {
          setSavedJobsModalOpen(false);
          setSelectedJobForDetail(job);
        }}
        onApplyJob={(job) => {
          setSavedJobsModalOpen(false);
          setSelectedJobForApply(job);
        }}
      />

      {/* Auth Modal (Login / Register) */}
      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        onLoginSuccess={(user) => {
          setCurrentUser(user);
          showToast(`Welcome back, ${user.name}!`);
        }}
      />

      {/* WhatsApp & Email Alerts Modal */}
      <AlertsModal
        isOpen={alertsModalOpen}
        onClose={() => setAlertsModalOpen(false)}
      />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-4 py-3 rounded-2xl shadow-2xl border border-slate-700 text-xs font-semibold flex items-center gap-2.5 animate-slideUp">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
