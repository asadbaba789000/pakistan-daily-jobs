import React from 'react';
import {
  Briefcase,
  MapPin,
  Mail,
  Phone,
  ShieldCheck,
  Heart,
  ArrowUp,
  Landmark
} from 'lucide-react';
import { PAKISTANI_CITIES, PROVINCES } from '../data/jobsData';

interface FooterProps {
  onSelectCity: (city: any) => void;
  onSelectCategory: (cat: string) => void;
  onOpenAlertsModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onSelectCity,
  onSelectCategory,
  onOpenAlertsModal
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-12 border-b border-slate-800">
          {/* Brand info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 via-blue-700 to-emerald-700 text-white flex items-center justify-center shadow-md">
                <Briefcase className="w-5 h-5" />
              </div>
              <div>
                <span className="font-extrabold text-lg text-white tracking-tight">
                  PAKISTAN <span className="text-blue-400">DAILY JOBS</span>
                </span>
                <p className="text-[11px] text-slate-400">
                  Find Your Next Opportunity in Pakistan
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Pakistan&apos;s independent, premium career platform connecting Pakistani talent with civil service gazettes (FPSC/PPSC/SPSC/KPPSC/BPSC), top multinationals, tech export unicorns, commercial banks, and remote global employers.
            </p>

            <div className="pt-2 flex items-center gap-4 text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>100% Free for Job Seekers</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Landmark className="w-4 h-4 text-blue-400" />
                <span>Verified Gazettes</span>
              </div>
            </div>
          </div>

          {/* Quick Categories */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">
              Top Categories
            </h4>
            <ul className="space-y-2 text-xs">
              {[
                'Government Jobs',
                'Banking Jobs',
                'IT & Software',
                'Engineering',
                'Education',
                'Healthcare',
                'Internships',
                'Remote Jobs'
              ].map((cat) => (
                <li key={cat}>
                  <button
                    onClick={() => {
                      onSelectCategory(cat);
                      scrollToTop();
                    }}
                    className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Jobs by Province */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">
              Jobs by Province
            </h4>
            <ul className="space-y-2 text-xs">
              {[
                'Federal (Islamabad)',
                'Punjab',
                'Sindh',
                'Khyber Pakhtunkhwa (KPK)',
                'Balochistan',
                'Azad Jammu & Kashmir (AJK)',
                'Gilgit-Baltistan'
              ].map((p) => (
                <li key={p}>
                  <button
                    onClick={scrollToTop}
                    className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                  >
                    {p}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Jobs by City */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">
              Top Pakistani Cities
            </h4>
            <ul className="space-y-2 text-xs">
              {PAKISTANI_CITIES.map((c) => (
                <li key={c.name}>
                  <button
                    onClick={() => {
                      onSelectCity(c.name);
                      scrollToTop();
                    }}
                    className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                  >
                    Jobs in {c.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Disclaimer Bar */}
        <div className="py-6 border-b border-slate-800 text-[11px] text-slate-500 leading-relaxed">
          <strong className="text-slate-400 font-semibold">Disclaimer & Attribution: </strong>
          Pakistan Daily Jobs compiles career advertisements, corporate listings, and public service gazettes for informational purposes. Fictional demo jobs (such as Software Engineer in Lahore, HR Officer in Islamabad, Data Entry in Karachi, Junior Accountant in Rawalpindi, Teacher in Multan) are strictly marked as demonstration listings. We do not charge application fees.
        </div>

        {/* Bottom copyright and scroll top */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} PAKISTAN DAILY JOBS. Built with pride for Pakistan.</p>

          <div className="flex items-center gap-4">
            <button
              onClick={onOpenAlertsModal}
              className="text-emerald-400 hover:underline cursor-pointer"
            >
              WhatsApp Job Alerts
            </button>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
