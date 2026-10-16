import React, { useState } from 'react';
import { portfolioConfig } from '../data/portfolioData';
import { 
  ArrowRight, 
  Terminal as TerminalIcon, 
  Code2, 
  FileCode2, 
  Sparkles, 
  Copy, 
  Check, 
  FolderGit2, 
  Layers, 
  Cpu
} from 'lucide-react';

interface HeroProps {
  onHireMeClick: () => void;
  onExploreCoursesClick: () => void;
  onViewWorkClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onHireMeClick,
  onExploreCoursesClick,
  onViewWorkClick
}) => {
  const [activeTab, setActiveTab] = useState<'config' | 'terminal' | 'stats'>('config');
  const [copied, setCopied] = useState(false);
  const [termOutput, setTermOutput] = useState<string>('Ready for new project assignments. Run a command or click below.');

  const codeSnippet = `const sandip = {
  role: "Computer Science Engineer",
  services: ["Web Development", "Freelancing"],
  teaching: ["Web Development", "Computer Science"],
  passion: "Technology & Learning"
};`;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const runTerminalCommand = (cmd: string) => {
    if (cmd === 'status') {
      setTermOutput('🟢 Available: Open for freelance web projects & mentoring 1-on-1.');
    } else if (cmd === 'courses') {
      setTermOutput('📚 Active: Web Dev Mastery, CS Fundamentals & Freelance Kickstart.');
    } else if (cmd === 'tech') {
      setTermOutput('⚡ Stack: React 19, TypeScript, Tailwind CSS, Node.js, Express, MySQL.');
    }
  };

  return (
    <section id="home" className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
      {/* Background ambient gradient glow */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 sm:w-[650px] sm:h-[650px] bg-sky-500/10 dark:bg-sky-500/15 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Small status indicator (anti-slop clean typography) */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-sky-500/20 bg-sky-500/5 dark:bg-sky-950/40 text-xs font-medium text-sky-700 dark:text-sky-300 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
              <span>{portfolioConfig.personal.headlineBadge}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.12] mb-6">
              <span className="block text-slate-700 dark:text-slate-300 font-semibold text-3xl sm:text-4xl mb-1">
                {portfolioConfig.personal.headlineLead}
              </span>
              <span className="bg-gradient-to-r from-slate-900 via-sky-800 to-indigo-900 dark:from-white dark:via-sky-200 dark:to-indigo-300 bg-clip-text text-transparent">
                {portfolioConfig.personal.headlineTitle}
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed mb-8">
              {portfolioConfig.personal.supportingText}
            </p>

            {/* 3 Call-To-Action buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 w-full sm:w-auto">
              {/* Primary CTA */}
              <button
                onClick={onHireMeClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all cursor-pointer"
              >
                <span>Hire Me</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Secondary CTA */}
              <button
                onClick={onExploreCoursesClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-semibold text-sm border border-slate-300 dark:border-slate-700 transition-all cursor-pointer"
              >
                <span>Explore Courses</span>
              </button>

              {/* Additional CTA */}
              <button
                onClick={onViewWorkClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-slate-700 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 font-medium text-sm transition-colors cursor-pointer"
              >
                <span>View My Work</span>
                <span aria-hidden="true">→</span>
              </button>
            </div>

            {/* Brand statement micro-kicker */}
            <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800/80 w-full flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
              <span className="font-semibold text-slate-700 dark:text-slate-300">Identity:</span>
              <span>Web Development</span>
              <span>·</span>
              <span>Computer Science</span>
              <span>·</span>
              <span>Tech Education</span>
            </div>
          </div>

          {/* Right Column: Interactive Developer-Style Coding Window */}
          <div className="lg:col-span-5 relative">
            
            {/* Floating tech badges with subtle animations */}
            <div className="hidden sm:flex absolute -top-4 -left-4 z-20 items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/95 dark:bg-slate-900/95 border border-slate-200 dark:border-slate-700/80 shadow-md text-xs font-mono text-sky-600 dark:text-sky-400 backdrop-blur-sm animate-pulse">
              <Code2 className="w-3.5 h-3.5" />
              <span>React 19</span>
            </div>

            <div className="hidden sm:flex absolute -bottom-4 -left-6 z-20 items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/95 dark:bg-slate-900/95 border border-slate-200 dark:border-slate-700/80 shadow-md text-xs font-mono text-indigo-600 dark:text-indigo-400 backdrop-blur-sm">
              <Cpu className="w-3.5 h-3.5" />
              <span>TypeScript</span>
            </div>

            <div className="hidden sm:flex absolute top-1/2 -right-5 z-20 items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/95 dark:bg-slate-900/95 border border-slate-200 dark:border-slate-700/80 shadow-md text-xs font-mono text-emerald-600 dark:text-emerald-400 backdrop-blur-sm">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>Node & MySQL</span>
            </div>

            {/* Window Container */}
            <div className="w-full rounded-2xl bg-slate-900 text-slate-100 border border-slate-800 shadow-2xl overflow-hidden font-mono text-xs">
              
              {/* Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-950/80 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-slate-400 text-[11px] font-sans">sandip-workspace</span>
                </div>

                <div className="flex items-center gap-1">
                  <button
                    onClick={handleCopyCode}
                    className="p-1.5 text-slate-400 hover:text-white rounded hover:bg-slate-800 transition-colors"
                    title="Copy code"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              {/* Tabs */}
              <div className="flex items-center border-b border-slate-800 bg-slate-950/40 px-2 overflow-x-auto">
                <button
                  onClick={() => setActiveTab('config')}
                  className={`flex items-center gap-1.5 px-3 py-2 text-xs font-medium border-b-2 transition-colors whitespace-nowrap ${
                    activeTab === 'config'
                      ? 'border-sky-500 text-sky-400 bg-slate-900/60'
                      : 'border-transparent text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <FileCode2 className="w-3.5 h-3.5" />
                  <span>sandip.config.ts</span>
                </button>

                <button
                  onClick={() => setActiveTab('terminal')}
                  className={`flex items-center gap-1.5 px-3 py-2 text-xs font-medium border-b-2 transition-colors whitespace-nowrap ${
                    activeTab === 'terminal'
                      ? 'border-sky-500 text-sky-400 bg-slate-900/60'
                      : 'border-transparent text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <TerminalIcon className="w-3.5 h-3.5" />
                  <span>terminal.sh</span>
                </button>

                <button
                  onClick={() => setActiveTab('stats')}
                  className={`flex items-center gap-1.5 px-3 py-2 text-xs font-medium border-b-2 transition-colors whitespace-nowrap ${
                    activeTab === 'stats'
                      ? 'border-sky-500 text-sky-400 bg-slate-900/60'
                      : 'border-transparent text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>mission.json</span>
                </button>
              </div>

              {/* Tab Contents */}
              <div className="p-4 sm:p-5 min-h-[260px] flex flex-col justify-between">
                {activeTab === 'config' && (
                  <div className="space-y-1 leading-relaxed">
                    <p className="text-slate-500">// Personal developer & educator profile</p>
                    <p>
                      <span className="text-pink-400">const </span>
                      <span className="text-yellow-300">sandip</span>
                      <span className="text-slate-400"> = </span>
                      <span className="text-slate-400">{'{'}</span>
                    </p>
                    <p className="pl-4">
                      <span className="text-sky-300">role</span>
                      <span className="text-slate-400">: </span>
                      <span className="text-emerald-300">"Computer Science Engineer"</span>
                      <span className="text-slate-400">,</span>
                    </p>
                    <p className="pl-4">
                      <span className="text-sky-300">services</span>
                      <span className="text-slate-400">: [</span>
                      <span className="text-emerald-300">"Web Development"</span>
                      <span className="text-slate-400">, </span>
                      <span className="text-emerald-300">"Freelancing"</span>
                      <span className="text-slate-400">],</span>
                    </p>
                    <p className="pl-4">
                      <span className="text-sky-300">teaching</span>
                      <span className="text-slate-400">: [</span>
                      <span className="text-emerald-300">"Web Development"</span>
                      <span className="text-slate-400">, </span>
                      <span className="text-emerald-300">"Computer Science"</span>
                      <span className="text-slate-400">],</span>
                    </p>
                    <p className="pl-4">
                      <span className="text-sky-300">passion</span>
                      <span className="text-slate-400">: </span>
                      <span className="text-emerald-300">"Technology & Learning"</span>
                    </p>
                    <p>
                      <span className="text-slate-400">{'}'};</span>
                    </p>
                    <p className="text-slate-500 pt-2">
                      <span className="text-indigo-400">export default </span>
                      <span className="text-yellow-300">sandip</span>
                      <span className="text-slate-400">;</span>
                    </p>
                  </div>
                )}

                {activeTab === 'terminal' && (
                  <div className="space-y-3 font-mono text-xs">
                    <div className="text-slate-400 flex items-center gap-1.5">
                      <span className="text-emerald-400">sandip@macbook</span>
                      <span className="text-slate-500">:</span>
                      <span className="text-sky-400">~/portfolio</span>
                      <span className="text-slate-500">$</span>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-1">
                      <button
                        onClick={() => runTerminalCommand('status')}
                        className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-sky-300 transition-colors cursor-pointer"
                      >
                        $ sandip --status
                      </button>
                      <button
                        onClick={() => runTerminalCommand('courses')}
                        className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-indigo-300 transition-colors cursor-pointer"
                      >
                        $ sandip --courses
                      </button>
                      <button
                        onClick={() => runTerminalCommand('tech')}
                        className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-emerald-300 transition-colors cursor-pointer"
                      >
                        $ sandip --tech
                      </button>
                    </div>

                    <div className="p-3 rounded-lg bg-slate-950/70 border border-slate-800/80 text-slate-300 text-[11px] leading-relaxed">
                      {termOutput}
                    </div>
                  </div>
                )}

                {activeTab === 'stats' && (
                  <div className="space-y-2 text-xs">
                    <p className="text-slate-400">// Philosophy & Objective</p>
                    <p>
                      <span className="text-sky-300">"mission"</span>
                      <span className="text-slate-400">: </span>
                      <span className="text-emerald-300">"Make technology affordable and accessible."</span>
                    </p>
                    <p>
                      <span className="text-sky-300">"pricingModel"</span>
                      <span className="text-slate-400">: </span>
                      <span className="text-emerald-300">"Transparent, student-friendly, honest"</span>
                    </p>
                    <p>
                      <span className="text-sky-300">"codeStandard"</span>
                      <span className="text-slate-400">: </span>
                      <span className="text-emerald-300">"Modern React, clean TypeScript & responsive CSS"</span>
                    </p>
                  </div>
                )}

                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500">
                  <span>UTF-8</span>
                  <span className="flex items-center gap-1 text-emerald-400">
                    <Sparkles className="w-3 h-3" />
                    <span>TypeScript 5.x</span>
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
