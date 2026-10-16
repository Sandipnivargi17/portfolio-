import React from 'react';
import { portfolioConfig } from '../data/portfolioData';
import { 
  BadgePercent, 
  Cpu, 
  Smartphone, 
  MessagesSquare, 
  Wrench, 
  LifeBuoy 
} from 'lucide-react';

export const WhyChooseMe: React.FC = () => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'student-pricing':
        return <BadgePercent className="w-5 h-5 text-sky-500" />;
      case 'modern-tech':
        return <Cpu className="w-5 h-5 text-indigo-500" />;
      case 'responsive-design':
        return <Smartphone className="w-5 h-5 text-emerald-500" />;
      case 'clear-comm':
        return <MessagesSquare className="w-5 h-5 text-amber-500" />;
      case 'practical-learning':
        return <Wrench className="w-5 h-5 text-purple-500" />;
      case 'continuous-support':
        return <LifeBuoy className="w-5 h-5 text-rose-500" />;
      default:
        return <Cpu className="w-5 h-5 text-sky-500" />;
    }
  };

  return (
    <section className="py-20 border-t border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-semibold text-sky-600 dark:text-sky-400 tracking-wider uppercase">
            Value & Commitment
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-1.5 tracking-tight">
            Why Work With Me?
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400 mt-2">
            Combining engineering precision with an educator's empathy for clear outcomes and accessible pricing.
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioConfig.whyChooseMe.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-xs hover:border-sky-500/40 transition-colors"
            >
              <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 w-fit mb-4">
                {getIcon(item.id)}
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
