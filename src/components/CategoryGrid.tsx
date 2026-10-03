import React from 'react';
import { ArrowRight, Layers, Sparkles } from 'lucide-react';
import { JOB_CATEGORIES } from '../data/jobsData';
import { CategoryIcon } from './CategoryIcon';

interface CategoryGridProps {
  selectedCategory: string;
  onSelectCategory: (categoryName: string) => void;
}

export const CategoryGrid: React.FC<CategoryGridProps> = ({
  selectedCategory,
  onSelectCategory
}) => {
  return (
    <section id="categories" className="py-16 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200 mb-2">
              <Layers className="w-3.5 h-3.5" />
              <span>Explore Opportunities</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Popular Job Categories
            </h2>
            <p className="text-sm text-slate-500 mt-1 max-w-xl">
              Browse thousands of verified vacancies categorized across major Pakistani industries, public sectors, and remote workspaces.
            </p>
          </div>

          <div className="mt-4 md:mt-0">
            <span className="text-xs text-slate-400 font-medium italic">
              Showing 15 primary employment sectors
            </span>
          </div>
        </div>

        {/* 15 Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5 sm:gap-4">
          {JOB_CATEGORIES.map((category) => {
            const isSelected = selectedCategory === category.name;
            return (
              <button
                key={category.id}
                onClick={() => onSelectCategory(category.name)}
                className={`group relative p-4 rounded-xl text-left border transition-all duration-200 cursor-pointer flex flex-col justify-between h-34 ${
                  isSelected
                    ? 'bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-600/25 ring-2 ring-blue-500 ring-offset-2'
                    : 'bg-white hover:bg-slate-50/80 border-slate-200 hover:border-blue-300 shadow-2xs hover:shadow-md'
                }`}
              >
                {/* Top row: Icon + Count */}
                <div className="flex items-start justify-between w-full">
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                      isSelected
                        ? 'bg-white/20 text-white'
                        : 'bg-slate-100 text-blue-700 group-hover:bg-blue-50 group-hover:text-blue-600'
                    }`}
                  >
                    <CategoryIcon name={category.iconName} className="w-5 h-5" />
                  </div>

                  <span
                    className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${
                      isSelected
                        ? 'bg-white/25 text-white'
                        : 'bg-slate-100 text-slate-600 group-hover:bg-blue-50 group-hover:text-blue-700'
                    }`}
                  >
                    {category.jobCount}+
                  </span>
                </div>

                {/* Bottom row: Name & Subtitle */}
                <div>
                  <h3
                    className={`text-sm font-bold tracking-tight line-clamp-1 group-hover:translate-x-0.5 transition-transform ${
                      isSelected ? 'text-white' : 'text-slate-900 group-hover:text-blue-600'
                    }`}
                  >
                    {category.name}
                  </h3>
                  <p
                    className={`text-[11px] mt-0.5 truncate ${
                      isSelected ? 'text-blue-100' : 'text-slate-500'
                    }`}
                  >
                    {category.popularTitle}
                  </p>
                </div>

                {/* Hover indicator dot */}
                <div
                  className={`absolute top-2 right-2 w-1.5 h-1.5 rounded-full ${
                    isSelected ? 'bg-white' : 'opacity-0 group-hover:opacity-100 bg-blue-500'
                  } transition-opacity`}
                />
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
