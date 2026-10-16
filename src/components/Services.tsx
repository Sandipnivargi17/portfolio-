import React from 'react';
import { portfolioConfig, Service } from '../data/portfolioData';
import { 
  Globe, 
  Layers, 
  UserCheck, 
  GraduationCap, 
  FileCode, 
  ArrowRight, 
  Check 
} from 'lucide-react';

interface ServicesProps {
  onServiceSelect: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onServiceSelect }) => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'website-dev':
        return <Globe className="w-5 h-5 text-sky-500" />;
      case 'webapp-dev':
        return <Layers className="w-5 h-5 text-indigo-500" />;
      case 'portfolio-branding':
        return <UserCheck className="w-5 h-5 text-emerald-500" />;
      case 'cs-guidance':
        return <GraduationCap className="w-5 h-5 text-purple-500" />;
      case 'technical-content':
        return <FileCode className="w-5 h-5 text-amber-500" />;
      default:
        return <Globe className="w-5 h-5 text-sky-500" />;
    }
  };

  return (
    <section id="services" className="py-20 border-t border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
          <div>
            <span className="text-xs font-semibold text-sky-600 dark:text-sky-400 tracking-wider uppercase">
              Freelance & Development
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-1.5 tracking-tight">
              What I Can Do For You
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-400 mt-2 max-w-2xl">
              Professional freelance development, personal branding portfolios, and academic technical guidance designed for real impact.
            </p>
          </div>

          <div className="text-xs text-slate-500 dark:text-slate-400">
            <span>5 Specialized Services</span>
            <span className="mx-2">·</span>
            <span>Tailored Pricing</span>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {portfolioConfig.services.map((service: Service, idx: number) => {
            const isLarge = idx === 0 || idx === 1;
            return (
              <div
                key={service.id}
                className={`rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-7 shadow-xs flex flex-col justify-between hover:border-sky-500/50 dark:hover:border-sky-500/50 transition-all group ${
                  isLarge ? 'md:col-span-1' : ''
                }`}
              >
                <div>
                  {/* Top Bar inside card */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700/60 group-hover:scale-105 transition-transform">
                      {getIcon(service.id)}
                    </div>
                    <span className="text-xs font-mono font-semibold text-slate-400 dark:text-slate-500">
                      {service.number}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2.5 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Deliverables Checklist */}
                  <div className="mb-6 space-y-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 block">
                      Key Highlights:
                    </span>
                    <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-400">
                      {service.deliverables.map((item, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  {/* Technologies text metadata (no pill enclosures per anti-slop rules) */}
                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 mb-5 text-xs text-slate-500 dark:text-slate-400">
                    <span className="font-medium text-slate-700 dark:text-slate-300 mr-2">Stack:</span>
                    <span>{service.technologies.join(' · ')}</span>
                  </div>

                  {/* Service CTA */}
                  <button
                    onClick={() => onServiceSelect(service.ctaIntent)}
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700 text-white font-medium text-xs transition-colors cursor-pointer group/btn"
                  >
                    <span>{service.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
