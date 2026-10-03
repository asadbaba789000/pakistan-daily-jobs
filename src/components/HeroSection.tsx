import React from 'react';
import {
  Search,
  MapPin,
  Briefcase,
  ChevronDown,
  Sparkles,
  TrendingUp,
  ShieldCheck,
  Building,
  CheckCircle,
  BellRing
} from 'lucide-react';
import { POPULAR_SEARCH_KEYWORDS } from '../data/jobsData';

interface HeroSectionProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCity: string;
  setSelectedCity: (city: string) => void;
  selectedCategory: string;
  setSelectedCategory: (cat: string) => void;
  onSearchSubmit: (e?: React.FormEvent) => void;
  onSelectPopularKeyword: (keyword: string) => void;
  totalJobsCount: number;
  onOpenAlertsModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  searchQuery,
  setSearchQuery,
  selectedCity,
  setSelectedCity,
  selectedCategory,
  setSelectedCategory,
  onSearchSubmit,
  onSelectPopularKeyword,
  totalJobsCount,
  onOpenAlertsModal
}) => {
  const citiesList = [
    'All Pakistan',
    'Lahore',
    'Karachi',
    'Islamabad',
    'Rawalpindi',
    'Faisalabad',
    'Multan',
    'Peshawar',
    'Quetta',
    'Remote'
  ];

  const categoriesList = [
    'All Categories',
    'Government Jobs',
    'Banking Jobs',
    'IT & Software',
    'Engineering',
    'Education',
    'Healthcare',
    'Accounting & Finance',
    'Sales & Marketing',
    'HR & Administration',
    'Customer Support',
    'Construction',
    'Security',
    'Driving',
    'Internships',
    'Remote Jobs'
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-900 via-blue-800 to-slate-900 text-white pt-12 pb-16 lg:pt-16 lg:pb-24">
      {/* Decorative Pakistani geometric subtle grid backdrop */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>
      
      {/* Soft radiant glow circles */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-blue-500/20 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 right-10 w-[300px] h-[250px] bg-emerald-500/15 blur-[90px] rounded-full pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top verified badge */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-blue-200 border border-white/15 backdrop-blur-xs">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
            </span>
            <span>Pakistan’s Most Trusted Employment Directory</span>
            <span className="text-white/40">•</span>
            <span className="text-emerald-300 font-bold">{totalJobsCount}+ Active Vacancies</span>
          </div>

          <button
            onClick={onOpenAlertsModal}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/20 text-emerald-300 hover:bg-emerald-500/30 border border-emerald-500/40 transition-colors cursor-pointer"
          >
            <BellRing className="w-3 h-3" />
            Get Daily WhatsApp Alerts
          </button>
        </div>

        {/* Main Heading & Subheading */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Find Your Next Job in Pakistan
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-blue-100/90 max-w-2xl mx-auto font-normal leading-relaxed">
            Discover the latest government, private, remote, internship and career opportunities from across Pakistan.
          </p>
        </div>

        {/* Big Search Form Box */}
        <div className="mt-8 lg:mt-10 max-w-5xl mx-auto">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              onSearchSubmit(e);
            }}
            className="bg-white rounded-2xl p-3 sm:p-4 shadow-2xl shadow-blue-950/40 border border-blue-100 flex flex-col lg:flex-row items-stretch gap-2.5"
          >
            {/* 1. Keyword search input */}
            <div className="flex-1 flex items-center gap-3 px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200/90 hover:border-blue-400 focus-within:border-blue-600 focus-within:bg-white focus-within:ring-2 focus-within:ring-blue-100 transition-all">
              <Search className="w-5 h-5 text-slate-400 shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Job title, keyword or company"
                className="w-full bg-transparent text-slate-900 placeholder-slate-400 text-sm font-medium focus:outline-hidden"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="text-xs text-slate-400 hover:text-slate-600 font-semibold px-1"
                >
                  ✕
                </button>
              )}
            </div>

            {/* 2. City dropdown */}
            <div className="w-full lg:w-56 flex items-center gap-2.5 px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200/90 hover:border-blue-400 focus-within:border-blue-600 focus-within:bg-white focus-within:ring-2 focus-within:ring-blue-100 transition-all relative">
              <MapPin className="w-5 h-5 text-blue-600 shrink-0" />
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="w-full bg-transparent text-slate-900 text-sm font-medium focus:outline-hidden appearance-none cursor-pointer pr-5"
              >
                <option value="">Select City</option>
                {citiesList.map((city) => (
                  <option key={city} value={city === 'All Pakistan' ? '' : city}>
                    {city}
                  </option>
                ))}
              </select>
              <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 pointer-events-none" />
            </div>

            {/* 3. Category dropdown */}
            <div className="w-full lg:w-60 flex items-center gap-2.5 px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200/90 hover:border-blue-400 focus-within:border-blue-600 focus-within:bg-white focus-within:ring-2 focus-within:ring-blue-100 transition-all relative">
              <Briefcase className="w-5 h-5 text-emerald-600 shrink-0" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full bg-transparent text-slate-900 text-sm font-medium focus:outline-hidden appearance-none cursor-pointer pr-5"
              >
                <option value="">Select Category</option>
                {categoriesList.map((cat) => (
                  <option key={cat} value={cat === 'All Categories' ? '' : cat}>
                    {cat}
                  </option>
                ))}
              </select>
              <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 pointer-events-none" />
            </div>

            {/* 4. Search Button */}
            <button
              type="submit"
              className="w-full lg:w-auto px-7 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 active:scale-98 text-white font-bold text-sm tracking-wide transition-all shadow-md shadow-blue-600/30 flex items-center justify-center gap-2 cursor-pointer"
            >
              <Search className="w-4 h-4" />
              <span>Search Jobs</span>
            </button>
          </form>

          {/* Popular Searches Underneath */}
          <div className="mt-5 flex flex-wrap items-center justify-center gap-2 text-xs">
            <span className="text-blue-200/80 font-semibold flex items-center gap-1.5 mr-1">
              <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
              Popular Searches:
            </span>
            {POPULAR_SEARCH_KEYWORDS.map((keyword) => (
              <button
                key={keyword}
                type="button"
                onClick={() => onSelectPopularKeyword(keyword)}
                className="px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-blue-100 hover:text-white transition-all cursor-pointer font-medium hover:scale-105 active:scale-95"
              >
                {keyword}
              </button>
            ))}
          </div>
        </div>

        {/* Quick Highlights Strip */}
        <div className="mt-12 max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-3 text-center">
          <div className="bg-white/5 border border-white/10 rounded-xl p-3 backdrop-blur-xs">
            <p className="text-2xl font-black text-white">100%</p>
            <p className="text-xs text-blue-200 font-medium">Free Job Applications</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-3 backdrop-blur-xs">
            <p className="text-2xl font-black text-emerald-400">FPSC & PPSC</p>
            <p className="text-xs text-blue-200 font-medium">Direct Gazette Notices</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-3 backdrop-blur-xs">
            <p className="text-2xl font-black text-amber-300">Daily</p>
            <p className="text-xs text-blue-200 font-medium">Verified New Openings</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-3 backdrop-blur-xs">
            <p className="text-2xl font-black text-blue-300">All 6 Zones</p>
            <p className="text-xs text-blue-200 font-medium">Federal & Provincial</p>
          </div>
        </div>
      </div>
    </section>
  );
};
