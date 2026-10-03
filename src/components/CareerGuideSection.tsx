import React, { useState } from 'react';
import {
  BookOpen,
  CheckCircle2,
  FileCheck,
  TrendingUp,
  HelpCircle,
  Award,
  ChevronDown,
  Sparkles,
  Download
} from 'lucide-react';

export const CareerGuideSection: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const guides = [
    {
      title: 'FPSC & PPSC Examination Strategy',
      badge: 'Public Sector Exams',
      description: 'Master the 100-mark General Screening MCQs test. Focus on Pakistan Affairs, Current Affairs, Islamic Studies, Everyday Science, and basic Arithmetic.',
      tips: [
        'Practice past 10-year FPSC & PPSC solved papers',
        'Stay updated with Dawn Editorials & national policy briefs',
        'Review HEC syllabus guidelines for your specific academic cadre'
      ]
    },
    {
      title: 'Pakistani Corporate CV Guidelines',
      badge: 'Resume Writing',
      description: 'Format your curriculum vitae for top multinationals, software export houses, and commercial banks in Pakistan.',
      tips: [
        'Include CNIC, city of residence, and active +92 WhatsApp number',
        'Highlight PEC (Engineering) or PMDC (Medical) registration numbers if applicable',
        'Keep CV to maximum 2 pages with quantifiable achievements'
      ]
    },
    {
      title: 'Pakistan Salary Benchmarks 2026',
      badge: 'Compensation Insights',
      description: 'Realistic monthly pay scales in PKR across major tech and corporate hubs in Lahore, Karachi, and Islamabad.',
      tips: [
        'Software Engineer (2-4 Yrs): PKR 180,000 – 320,000 / mo',
        'Commercial Banking Officer: PKR 60,000 – 95,000 / mo',
        'Fresh Graduate Trainee (FMCG/Textiles): PKR 65,000 – 90,000 / mo'
      ]
    }
  ];

  const faqs = [
    {
      q: 'How do I apply for FPSC / PPSC Gazetted posts on Pakistan Daily Jobs?',
      a: 'We provide direct official challan fee submission guidelines and test syllabus details. Once you click "Apply Online", you will be guided to enter your CNIC, upload qualifications, and generate the treasury challan (Form 32-A) required for National Bank of Pakistan (NBP) or State Bank branches.'
    },
    {
      q: 'Are the jobs on Pakistan Daily Jobs free of charge to apply for?',
      a: 'Yes, 100%. Pakistan Daily Jobs does NOT charge any job application fee or commission from job seekers. Beware of any unauthorized agent asking for money.'
    },
    {
      q: 'Can overseas Pakistanis apply for remote positions from abroad or returnees?',
      a: 'Absolutely. Many of our listed software companies, digital marketing agencies, and remote firms welcome applications from overseas Pakistanis looking to return or work collaboratively across time zones.'
    }
  ];

  return (
    <section id="career-guide" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200 mb-2">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Career Resources for Pakistani Youth</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Pakistan Career Guide & Insights
          </h2>
          <p className="text-sm text-slate-500 mt-2">
            Expert strategies to crack public service commissions, craft competitive resumes for top Pakistani employers, and negotiate compensation.
          </p>
        </div>

        {/* 3 Guide Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {guides.map((g, idx) => (
            <div
              key={idx}
              className="bg-slate-50 rounded-2xl p-6 border border-slate-200/90 hover:border-blue-400 hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-blue-100 text-blue-800">
                  {g.badge}
                </span>
                <h3 className="text-base font-bold text-slate-900 mt-3">{g.title}</h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">{g.description}</p>

                <div className="mt-4 pt-4 border-t border-slate-200/80 space-y-2">
                  {g.tips.map((tip, tIdx) => (
                    <div key={tIdx} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{tip}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive FAQ Accordion */}
        <div className="max-w-3xl mx-auto bg-slate-50 rounded-2xl p-6 border border-slate-200">
          <h3 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
            <HelpCircle className="w-4 h-4 text-blue-600" />
            Frequently Asked Questions by Pakistani Job Seekers
          </h3>

          <div className="space-y-3">
            {faqs.map((faq, i) => {
              const isOpen = activeFaq === i;
              return (
                <div
                  key={i}
                  className="bg-white rounded-xl border border-slate-200 overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : i)}
                    className="w-full text-left p-4 flex items-center justify-between gap-3 text-xs sm:text-sm font-bold text-slate-900 hover:text-blue-600 cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${
                        isOpen ? 'rotate-180 text-blue-600' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-4 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
