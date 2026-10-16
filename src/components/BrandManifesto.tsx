import React from 'react';
import { portfolioConfig } from '../data/portfolioData';
import { Sparkles, Terminal, BookOpen, Compass } from 'lucide-react';

export const BrandManifesto: React.FC = () => {
  return (
    <section className="py-20 border-t border-slate-200/60 dark:border-slate-800/60 relative overflow-hidden">
      {/* Background soft ambient glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-80 bg-gradient-to-r from-sky-500/10 via-indigo-500/10 to-purple-500/10 blur-3xl rounded-full pointer-events-none"
        aria-hidden="true" 
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md p-8 sm:p-12 lg:p-16 text-center shadow-lg">
          
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-500/10 dark:bg-sky-500/20 text-sky-700 dark:text-sky-300 text-xs font-semibold uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Core Philosophy</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6">
            {portfolioConfig.brandStatement.title}
          </h2>

          <blockquote className="text-lg sm:text-xl lg:text-2xl font-medium text-slate-700 dark:text-slate-200 max-w-3xl mx-auto leading-relaxed mb-8">
            "{portfolioConfig.brandStatement.quote}"
          </blockquote>

          <div className="pt-8 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-center gap-8 text-xs text-slate-500 dark:text-slate-400">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-sky-500" />
              <span>Full-Stack Development</span>
            </div>
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-indigo-500" />
              <span>Tech Pedagogy & Mentorship</span>
            </div>
            <div className="flex items-center gap-2">
              <Compass className="w-4 h-4 text-emerald-500" />
              <span>Accessible Innovation</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
