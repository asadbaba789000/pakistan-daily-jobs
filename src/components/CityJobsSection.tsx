import React from 'react';
import { MapPin, Building, ArrowRight, Compass, Sparkles } from 'lucide-react';
import { PAKISTANI_CITIES } from '../data/jobsData';
import { PakistaniCity } from '../types/job';

interface CityJobsSectionProps {
  onSelectCity: (city: PakistaniCity) => void;
  selectedCity: string;
}

export const CityJobsSection: React.FC<CityJobsSectionProps> = ({
  onSelectCity,
  selectedCity
}) => {
  return (
    <section id="cities" className="py-16 bg-slate-50/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200 mb-2">
              <Compass className="w-3.5 h-3.5" />
              <span>Geographic Hubs</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Jobs by City in Pakistan
            </h2>
            <p className="text-sm text-slate-500 mt-1 max-w-xl">
              Explore hyper-local career postings across Pakistan&apos;s primary economic, commercial, and administrative capitals.
            </p>
          </div>

          <span className="text-xs text-slate-500 italic">
            Select a city to filter all active opportunities
          </span>
        </div>

        {/* 6 Core Pakistani Cities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PAKISTANI_CITIES.map((city) => {
            const isSelected = selectedCity === city.name;
            return (
              <div
                key={city.name}
                onClick={() => onSelectCity(city.name)}
                className={`group bg-white rounded-2xl p-5 border transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'border-blue-600 ring-2 ring-blue-500 shadow-lg'
                    : 'border-slate-200 hover:border-blue-400 hover:shadow-md'
                }`}
              >
                <div>
                  {/* Top Bar: City Name + Province Badge */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center font-bold">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                          {city.name}
                        </h3>
                        <p className="text-xs text-slate-500">{city.province}, Pakistan</p>
                      </div>
                    </div>

                    <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 group-hover:bg-blue-50 group-hover:text-blue-700 transition-colors">
                      {city.jobCount.toLocaleString()} Jobs
                    </span>
                  </div>

                  {/* City Description */}
                  <p className="text-xs text-slate-600 mt-3.5 leading-relaxed">
                    {city.imageDesc}
                  </p>

                  {/* Top Industries */}
                  <div className="mt-4 pt-3 border-t border-slate-100">
                    <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2">
                      Key Hiring Industries:
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {city.featuredIndustries.map((ind) => (
                        <span
                          key={ind}
                          className="text-[11px] font-medium bg-slate-50 text-slate-700 border border-slate-200/80 px-2 py-0.5 rounded-md"
                        >
                          {ind}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom CTA */}
                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-blue-600 group-hover:translate-x-1 transition-transform">
                  <span>Explore Jobs in {city.name}</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
