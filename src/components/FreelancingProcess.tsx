import React from 'react';
import { portfolioConfig } from '../data/portfolioData';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface FreelancingProcessProps {
  onStartProject: () => void;
}

export const FreelancingProcess: React.FC<FreelancingProcessProps> = ({ onStartProject }) => {
  return (
    <section className="py-20 border-t border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold text-sky-600 dark:text-sky-400 tracking-wider uppercase">
            Structured Execution
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-1.5 tracking-tight">
            How I Work
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400 mt-2">
            A clear, 4-step collaborative process ensuring every freelance milestone is predictable, transparent, and delivered on time.
          </p>
        </div>

        {/* 4-Step Process Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative mb-14">
          {portfolioConfig.freelancingProcess.map((item, idx) => (
            <div
              key={item.step}
              className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 flex flex-col justify-between shadow-xs relative hover:border-sky-500/50 transition-colors group"
            >
              <div>
                {/* Step Number */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-black font-mono text-sky-600 dark:text-sky-400">
                    {item.step}
                  </span>
                  <span className="text-[11px] font-medium text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                    Phase {idx + 1}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                  {item.title}
                </h3>
                <p className="text-xs font-medium text-sky-600 dark:text-sky-400 mb-3">
                  {item.subtitle}
                </p>

                {/* Description */}
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              {/* Deliverable Box */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80">
                <span className="text-[10px] uppercase font-semibold text-slate-400 dark:text-slate-500 block mb-1">
                  Deliverable
                </span>
                <span className="text-xs font-medium text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span>{item.deliverable}</span>
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <button
            onClick={onStartProject}
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-semibold text-xs shadow-md transition-all cursor-pointer"
          >
            <span>Start Your Project</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
