import React from 'react';
import { portfolioConfig } from '../data/portfolioData';

export const QuickStats: React.FC = () => {
  return (
    <section className="relative z-10 -mt-2 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-slate-200/90 dark:border-slate-800/90 bg-white/70 dark:bg-slate-900/60 backdrop-blur-md shadow-xs p-6 sm:p-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y lg:divide-y-0 lg:divide-x divide-slate-100 dark:divide-slate-800">
            {portfolioConfig.quickStats.map((stat, idx) => (
              <div
                key={stat.label}
                className={`flex flex-col ${idx !== 0 ? 'pt-4 lg:pt-0 lg:pl-6' : ''}`}
              >
                <span className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white tabular-nums">
                  {stat.value}
                </span>
                <span className="text-sm font-semibold text-slate-700 dark:text-slate-200 mt-1">
                  {stat.label}
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  {stat.note}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
