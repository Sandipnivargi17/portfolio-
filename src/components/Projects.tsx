import React, { useState } from 'react';
import { portfolioConfig, Project } from '../data/portfolioData';
import { ExternalLink, Github, Eye, ArrowRight, Layers } from 'lucide-react';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const filterTabs = [
    { id: 'all', label: 'All Projects' },
    { id: 'Full Stack', label: 'Full Stack' },
    { id: 'Frontend', label: 'Frontend & UI' }
  ];

  const filteredProjects = portfolioConfig.projects.filter((p) => {
    if (selectedFilter === 'all') return true;
    return p.category === selectedFilter;
  });

  return (
    <section id="projects" className="py-20 border-t border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-semibold text-sky-600 dark:text-sky-400 tracking-wider uppercase">
              Selected Works
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-1.5 tracking-tight">
              Featured Projects
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-400 mt-2 max-w-2xl">
              Real web applications, systems, and practical software solutions built with modern technology stacks.
            </p>
          </div>

          {/* Filter tabs (buttons with functional click handlers) */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 self-start md:self-auto">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedFilter(tab.id)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                  selectedFilter === tab.id
                    ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-semibold shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-xs hover:border-sky-500/40 transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Visual Preview */}
                <div 
                  className="relative aspect-16/9 w-full bg-slate-100 dark:bg-slate-950 overflow-hidden border-b border-slate-100 dark:border-slate-800/80 cursor-pointer"
                  onClick={() => setActiveModalProject(project)}
                >
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-103"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />
                  <div className="hidden w-full h-full absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 items-center justify-center p-6 text-center text-white">
                    <span className="text-base font-semibold">{project.title}</span>
                  </div>

                  {/* Overlay inspect trigger */}
                  <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-white/95 text-slate-900 font-semibold text-xs shadow-md">
                      <Eye className="w-3.5 h-3.5" />
                      <span>Inspect Details</span>
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7">
                  <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-2.5">
                    <span className="font-mono text-sky-600 dark:text-sky-400 font-medium">
                      {project.category}
                    </span>
                    {project.featured && (
                      <span className="text-slate-400 dark:text-slate-500">Featured Build</span>
                    )}
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Unboxed Tech List */}
                  <div className="text-xs text-slate-500 dark:text-slate-400 pt-3 border-t border-slate-100 dark:border-slate-800/80">
                    <span className="font-medium text-slate-700 dark:text-slate-300 mr-2">Technologies:</span>
                    <span>{project.technologies.join(' · ')}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="px-6 pb-6 pt-2 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 dark:border-slate-800/60">
                <button
                  onClick={() => setActiveModalProject(project)}
                  className="text-xs font-semibold text-sky-600 dark:text-sky-400 hover:text-sky-500 transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <span>Project Specs</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <div className="flex items-center gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-medium transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>GitHub</span>
                    </a>
                  )}
                  {project.liveDemoUrl && (
                    <a
                      href={project.liveDemoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-white text-xs font-medium transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center">
          <button
            onClick={() => setSelectedFilter('all')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-semibold text-xs border border-slate-300 dark:border-slate-700 transition-colors cursor-pointer"
          >
            <Layers className="w-4 h-4 text-sky-500" />
            <span>View All Projects ({portfolioConfig.projects.length})</span>
          </button>
        </div>

      </div>

      {/* Project Lightbox / Detail Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
