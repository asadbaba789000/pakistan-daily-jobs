import React, { useState } from 'react';
import {
  Briefcase,
  Bookmark,
  PlusCircle,
  LogIn,
  User,
  Menu,
  X,
  Bell,
  CheckCircle2,
  ChevronDown,
  LogOut
} from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  savedCount: number;
  onOpenSavedModal: () => void;
  onOpenPostJobModal: () => void;
  onOpenAuthModal: () => void;
  onOpenAlertsModal: () => void;
  currentUser: { name: string; email: string; role: 'seeker' | 'employer' } | null;
  onLogout: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  savedCount,
  onOpenSavedModal,
  onOpenPostJobModal,
  onOpenAuthModal,
  onOpenAlertsModal,
  currentUser,
  onLogout
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'latest-jobs', label: 'Latest Jobs' },
    { id: 'government-jobs', label: 'Government Jobs' },
    { id: 'private-jobs', label: 'Private Jobs' },
    { id: 'internships', label: 'Internships' },
    { id: 'remote-jobs', label: 'Remote Jobs' },
    { id: 'companies', label: 'Companies' },
    { id: 'cities', label: 'Cities' },
    { id: 'career-guide', label: 'Career Guide' },
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);

    // Smooth scroll to section if on home
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
      {/* Top micro bar for nationwide announcement */}
      <div className="bg-slate-900 text-slate-300 text-xs py-1.5 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              Live Updates
            </span>
            <span>Federal (FPSC) & Punjab (PPSC) New Vacancies Announced • Free Job Alerts for Pakistani Youth</span>
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <button
              onClick={onOpenAlertsModal}
              className="hover:text-emerald-400 transition-colors flex items-center gap-1 cursor-pointer"
            >
              <Bell className="w-3.5 h-3.5 text-emerald-400" />
              WhatsApp Job Alerts
            </button>
            <span className="text-slate-600">|</span>
            <span className="text-slate-400">Lahore • Karachi • Islamabad • Rawalpindi • Multan • Faisalabad</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Logo */}
          <div
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 cursor-pointer group select-none"
          >
            <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-blue-700 via-blue-800 to-slate-900 text-white shadow-md shadow-blue-900/20 group-hover:scale-105 transition-transform duration-200">
              {/* Crescent & Star inspired insignia badge */}
              <div className="absolute inset-0 rounded-xl border border-white/20"></div>
              <Briefcase className="w-6 h-6 text-white" />
              <div className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-white flex items-center justify-center">
                <span className="text-[7px] text-white font-black">★</span>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-lg sm:text-xl tracking-tight text-slate-900 leading-none">
                  PAKISTAN <span className="text-blue-600">DAILY JOBS</span>
                </span>
              </div>
              <p className="text-[11px] font-medium text-slate-500 leading-tight mt-0.5 tracking-wide">
                Find Your Next Opportunity in Pakistan
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-3 py-1.5 rounded-lg text-[13px] font-medium transition-all duration-150 cursor-pointer ${
                    isActive
                      ? 'bg-blue-50 text-blue-700 font-semibold shadow-2xs'
                      : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center gap-2.5">
            {/* Bookmarks Counter */}
            <button
              onClick={onOpenSavedModal}
              title="Saved Jobs"
              className="relative p-2 rounded-lg text-slate-600 hover:text-blue-600 hover:bg-slate-100 transition-colors cursor-pointer"
            >
              <Bookmark className="w-5 h-5" />
              {savedCount > 0 && (
                <span className="absolute -top-1 -right-1 flex items-center justify-center w-5 h-5 text-[11px] font-bold text-white bg-blue-600 rounded-full ring-2 ring-white">
                  {savedCount}
                </span>
              )}
            </button>

            {/* Post a Job button */}
            <button
              onClick={onOpenPostJobModal}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold text-blue-700 bg-blue-50 hover:bg-blue-100 border border-blue-200 transition-all cursor-pointer shadow-2xs"
            >
              <PlusCircle className="w-4 h-4 text-blue-600" />
              <span>Post a Job</span>
            </button>

            {/* User Login/Register or Profile */}
            {currentUser ? (
              <div className="relative">
                <button
                  onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 text-xs font-semibold text-slate-800 cursor-pointer"
                >
                  <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-[11px] font-bold">
                    {currentUser.name.charAt(0)}
                  </div>
                  <span className="max-w-[100px] truncate">{currentUser.name}</span>
                  <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
                </button>

                {profileDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-slate-100 py-2 z-50">
                    <div className="px-3 py-1.5 border-b border-slate-100 text-xs">
                      <p className="font-semibold text-slate-800">{currentUser.name}</p>
                      <p className="text-[11px] text-slate-500 capitalize">{currentUser.role} Account</p>
                    </div>
                    <button
                      onClick={() => {
                        setProfileDropdownOpen(false);
                        onOpenSavedModal();
                      }}
                      className="w-full text-left px-3 py-2 text-xs text-slate-700 hover:bg-slate-50 flex items-center gap-2 cursor-pointer"
                    >
                      <Bookmark className="w-3.5 h-3.5 text-blue-600" />
                      Saved Jobs ({savedCount})
                    </button>
                    <button
                      onClick={() => {
                        setProfileDropdownOpen(false);
                        onLogout();
                      }}
                      className="w-full text-left px-3 py-2 text-xs text-rose-600 hover:bg-rose-50 flex items-center gap-2 cursor-pointer border-t border-slate-100"
                    >
                      <LogOut className="w-3.5 h-3.5" />
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center gap-1.5">
                <button
                  onClick={onOpenAuthModal}
                  className="px-3 py-2 text-xs font-semibold text-slate-700 hover:text-blue-600 transition-colors cursor-pointer"
                >
                  Login
                </button>
                <button
                  onClick={onOpenAuthModal}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-sm shadow-blue-500/20 cursor-pointer"
                >
                  <User className="w-3.5 h-3.5" />
                  Register
                </button>
              </div>
            )}
          </div>

          {/* Mobile hamburger menu toggle */}
          <div className="flex items-center gap-2 xl:hidden">
            <button
              onClick={onOpenSavedModal}
              title="Saved Jobs"
              className="relative p-2 rounded-lg text-slate-600 hover:bg-slate-100 cursor-pointer"
            >
              <Bookmark className="w-5 h-5" />
              {savedCount > 0 && (
                <span className="absolute top-0 right-0 flex items-center justify-center w-4 h-4 text-[10px] font-bold text-white bg-blue-600 rounded-full">
                  {savedCount}
                </span>
              )}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:bg-slate-100 focus:outline-hidden cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-xl">
          <div className="grid grid-cols-2 gap-1.5">
            {navLinks.map((link) => {
              const isActive = activeTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`text-left px-3 py-2 rounded-lg text-xs font-medium ${
                    isActive
                      ? 'bg-blue-50 text-blue-700 font-bold'
                      : 'text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          <div className="pt-3 border-t border-slate-100 space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPostJobModal();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold text-blue-700 bg-blue-50 border border-blue-200"
            >
              <PlusCircle className="w-4 h-4" />
              Post a Job for Free
            </button>

            {currentUser ? (
              <div className="flex items-center justify-between px-3 py-2 bg-slate-50 rounded-lg text-xs">
                <div>
                  <span className="font-semibold text-slate-800">{currentUser.name}</span>
                  <span className="block text-[11px] text-slate-500">{currentUser.email}</span>
                </div>
                <button
                  onClick={onLogout}
                  className="text-rose-600 text-xs font-semibold hover:underline"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenAuthModal();
                  }}
                  className="px-4 py-2 rounded-lg text-xs font-semibold text-slate-700 bg-slate-100 text-center"
                >
                  Login
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenAuthModal();
                  }}
                  className="px-4 py-2 rounded-lg text-xs font-semibold text-white bg-blue-600 text-center"
                >
                  Register
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
