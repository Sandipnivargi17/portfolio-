import React, { useState } from 'react';
import { portfolioConfig } from '../data/portfolioData';
import { 
  GraduationCap, 
  Briefcase, 
  Target, 
  MapPin, 
  ArrowRight, 
  FileText, 
  CheckCircle2,
  ExternalLink,
  Code2,
  BookOpen
} from 'lucide-react';

interface AboutProps {
  onConnectClick: () => void;
}

export const About: React.FC<AboutProps> = ({ onConnectClick }) => {
  const [showProfileModal, setShowProfileModal] = useState(false);

  const focusAreas = [
    { title: "Web Development", desc: "Crafting modern, accessible, and high-performance web applications using React & modern tools." },
    { title: "Software Development", desc: "Translating algorithmic problem-solving into clean, maintainable, modular software code." },
    { title: "Freelancing", desc: "Collaborating with clients, startups, and individuals to deliver projects on-time and within budget." },
    { title: "Computer Science Education", desc: "Demystifying core CS concepts for college students and beginners through structured teaching." },
    { title: "Technical Mentoring", desc: "Guiding learners through hands-on project architecture, debugging sessions, and viva preparation." },
    { title: "Content & Documentation", desc: "Creating clear, well-structured developer guides, cheat sheets, and technical walkthroughs." }
  ];

  return (
    <section id="about" className="py-20 border-t border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="mb-14">
          <span className="text-xs font-semibold text-sky-600 dark:text-sky-400 tracking-wider uppercase">
            Background & Mission
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-1.5 tracking-tight">
            About Me
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400 mt-2 max-w-2xl">
            Passionate about building digital solutions and making technology education affordable, hands-on, and accessible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Portrait & Key Attributes Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 shadow-xs overflow-hidden">
              
              {/* Photo with Fallback Container */}
              <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-800 mb-6 group">
                <img
                  src={portfolioConfig.personal.avatarImage}
                  alt="Sandip Nivargi – Computer Science Engineer and Tech Educator"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    // Fallback container in case image load fails
                    e.currentTarget.style.display = 'none';
                    const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />
                <div 
                  className="hidden w-full h-full absolute inset-0 bg-gradient-to-br from-sky-900 to-slate-900 items-center justify-center p-6 text-center text-white"
                >
                  <div>
                    <span className="text-3xl font-bold font-mono">SN</span>
                    <p className="mt-2 text-sm font-medium">Sandip Nivargi</p>
                    <p className="text-xs text-sky-300">CS Engineer & Educator</p>
                  </div>
                </div>

                <div className="absolute bottom-3 left-3 right-3 bg-slate-950/80 backdrop-blur-md px-3.5 py-2 rounded-lg border border-slate-800/80 text-white flex items-center justify-between text-xs">
                  <span className="font-medium text-slate-200">Sandip Nivargi</span>
                  <span className="text-sky-400 font-mono text-[11px]">CS Engineer</span>
                </div>
              </div>

              {/* Profile Details List */}
              <div className="space-y-3.5 text-sm">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-sky-50 dark:bg-sky-950/50 text-sky-600 dark:text-sky-400 shrink-0 mt-0.5">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 dark:text-slate-400 block">Education</span>
                    <span className="font-semibold text-slate-900 dark:text-white">
                      {portfolioConfig.personal.education}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5">
                    <Briefcase className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 dark:text-slate-400 block">Role</span>
                    <span className="font-semibold text-slate-900 dark:text-white">
                      Freelancer & Tech Educator
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5">
                    <Target className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 dark:text-slate-400 block">Focus</span>
                    <span className="font-semibold text-slate-900 dark:text-white">
                      Web Development & Computer Science
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-amber-50 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 dark:text-slate-400 block">Location</span>
                    <span className="font-semibold text-slate-900 dark:text-white">
                      {portfolioConfig.personal.location} (Remote Available Worldwide)
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons in Card */}
              <div className="mt-6 pt-5 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={onConnectClick}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-white font-medium text-xs shadow-xs transition-colors cursor-pointer"
                >
                  <span>Let's Connect</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setShowProfileModal(true)}
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-medium text-xs transition-colors cursor-pointer"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>View Bio Summary</span>
                </button>
              </div>

            </div>
          </div>

          {/* Right Column: Narrative & Work Domains */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <p className="text-lg sm:text-xl text-slate-800 dark:text-slate-200 font-medium leading-relaxed mb-6">
                "{portfolioConfig.personal.aboutBio}"
              </p>

              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
                I believe that modern technology should be neither intimidating nor prohibitively expensive. As an engineer and educator, I bridge the gap between academic theory and practical software engineering—crafting performant client websites while coaching learners to write clean, deployable code.
              </p>

              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-4">
                What I Focus On Daily
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {focusAreas.map((area) => (
                  <div
                    key={area.title}
                    className="p-4 rounded-xl border border-slate-200/80 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-900/40 hover:border-sky-500/40 transition-colors"
                  >
                    <div className="flex items-center gap-2 mb-1.5">
                      <CheckCircle2 className="w-4 h-4 text-sky-500 shrink-0" />
                      <h4 className="text-sm font-semibold text-slate-900 dark:text-white">
                        {area.title}
                      </h4>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed pl-6">
                      {area.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick trust strip */}
            <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800/80 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
              <span className="flex items-center gap-2">
                <Code2 className="w-4 h-4 text-sky-500" />
                <span>Production Web Standards</span>
              </span>
              <span className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-indigo-500" />
                <span>Zero-Jargon Explanations</span>
              </span>
              <span className="flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-emerald-500" />
                <span>Reliable Client Communication</span>
              </span>
            </div>

          </div>

        </div>

      </div>

      {/* Bio Summary Modal */}
      {showProfileModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-xs"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-white dark:bg-slate-900 rounded-2xl max-w-lg w-full p-6 border border-slate-200 dark:border-slate-800 shadow-2xl animate-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Sandip Nivargi — Profile Overview
              </h3>
              <button
                onClick={() => setShowProfileModal(false)}
                className="p-1 rounded-md text-slate-400 hover:text-slate-900 dark:hover:text-white"
                aria-label="Close dialog"
              >
                ✕
              </button>
            </div>
            
            <div className="py-4 space-y-4 text-sm text-slate-600 dark:text-slate-300">
              <p>
                <strong className="text-slate-900 dark:text-white">Profile:</strong> Computer Science Engineering student, independent web developer, and practical coding instructor based in India.
              </p>
              <p>
                <strong className="text-slate-900 dark:text-white">Primary Objective:</strong> Partnering with businesses for clean web development while mentoring undergraduate peers and aspiring developers with affordable, project-first courses.
              </p>
              <p>
                <strong className="text-slate-900 dark:text-white">Philosophy:</strong> "Turning Ideas Into Digital Solutions & Skills Into Careers."
              </p>
              <div className="p-3 bg-sky-50 dark:bg-sky-950/40 rounded-xl border border-sky-100 dark:border-sky-900 text-xs text-sky-800 dark:text-sky-300">
                All course curriculums and freelance scopes are fully tailored to student budgets and real-world deadlines.
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-end gap-3">
              <button
                onClick={() => setShowProfileModal(false)}
                className="px-4 py-2 text-xs font-semibold text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                Close
              </button>
              <button
                onClick={() => {
                  setShowProfileModal(false);
                  onConnectClick();
                }}
                className="px-4 py-2 text-xs font-semibold text-white bg-sky-600 hover:bg-sky-500 rounded-lg"
              >
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
