import React, { useState } from 'react';
import { portfolioConfig, SkillCategory } from '../data/portfolioData';
import { Search, Code2, Database, Server, Terminal, Wrench, CheckCircle } from 'lucide-react';

export const Skills: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'frontend':
        return <Code2 className="w-4 h-4 text-sky-500" />;
      case 'backend':
        return <Server className="w-4 h-4 text-indigo-500" />;
      case 'database':
        return <Database className="w-4 h-4 text-emerald-500" />;
      case 'programming':
        return <Terminal className="w-4 h-4 text-amber-500" />;
      case 'tools & ecosystem':
        return <Wrench className="w-4 h-4 text-purple-500" />;
      default:
        return <Code2 className="w-4 h-4 text-sky-500" />;
    }
  };

  const filteredCategories = portfolioConfig.skills
    .map((cat: SkillCategory) => {
      const matchesCategory = activeCategory === 'all' || cat.category.toLowerCase().includes(activeCategory.toLowerCase());
      if (!matchesCategory) return null;

      const filteredSkills = cat.skills.filter((s) =>
        s.name.toLowerCase().includes(searchQuery.toLowerCase())
      );

      if (filteredSkills.length === 0 && searchQuery) return null;

      return {
        ...cat,
        skills: filteredSkills
      };
    })
    .filter(Boolean) as SkillCategory[];

  return (
    <section id="skills" className="py-20 border-t border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-semibold text-sky-600 dark:text-sky-400 tracking-wider uppercase">
              Competencies & Toolset
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-1.5 tracking-tight">
              Technical Skills
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-400 mt-2 max-w-2xl">
              Grounded in strong computer science fundamentals and modern web engineering toolchains.
            </p>
          </div>

          {/* Search bar & Category filter */}
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search skill (e.g. React, SQL)..."
                className="pl-9 pr-4 py-2 text-xs rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white w-full sm:w-60 focus:border-sky-500 focus:outline-hidden"
              />
            </div>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
              activeCategory === 'all'
                ? 'bg-sky-600 text-white font-semibold'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            All Areas ({portfolioConfig.skills.reduce((acc, c) => acc + c.skills.length, 0)})
          </button>
          {portfolioConfig.skills.map((cat) => (
            <button
              key={cat.category}
              onClick={() => setActiveCategory(cat.category)}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                activeCategory === cat.category
                  ? 'bg-sky-600 text-white font-semibold'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {cat.category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((group) => (
            <div
              key={group.category}
              className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-xs hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
            >
              <div className="flex items-center gap-2.5 pb-4 mb-4 border-b border-slate-100 dark:border-slate-800">
                <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800">
                  {getCategoryIcon(group.category)}
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  {group.category}
                </h3>
              </div>

              {/* Skills list (clean unboxed text with typographic separators per anti-slop rules) */}
              <div className="space-y-3">
                {group.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center justify-between text-xs py-1"
                  >
                    <span className="font-medium text-slate-800 dark:text-slate-200 flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-sky-500 shrink-0" />
                      {skill.name}
                    </span>
                    <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Note on skills configuration */}
        <div className="mt-8 text-center text-xs text-slate-500 dark:text-slate-400">
          Skills are organized by practical development competency and updated in <code className="font-mono text-sky-500">src/data/portfolioData.ts</code>.
        </div>

      </div>
    </section>
  );
};
