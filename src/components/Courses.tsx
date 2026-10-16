import React, { useState } from 'react';
import { portfolioConfig, Course } from '../data/portfolioData';
import { 
  BookOpen, 
  Clock, 
  BarChart, 
  Check, 
  ArrowRight, 
  ChevronDown, 
  ChevronUp, 
  HelpCircle,
  GraduationCap
} from 'lucide-react';

interface CoursesProps {
  onEnrollCourse: (course: Course) => void;
  onAskAboutCourses: () => void;
}

export const Courses: React.FC<CoursesProps> = ({
  onEnrollCourse,
  onAskAboutCourses
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [expandedSyllabus, setExpandedSyllabus] = useState<{ [id: string]: boolean }>({});

  const filterTabs = [
    { id: 'all', label: 'All Courses' },
    { id: 'web-dev', label: 'Web Development' },
    { id: 'cs-core', label: 'CS Fundamentals' },
    { id: 'programming', label: 'Beginners' },
    { id: 'freelancing', label: 'Freelancing' }
  ];

  const filteredCourses = portfolioConfig.courses.filter((course) => {
    if (selectedCategory === 'all') return true;
    return course.category === selectedCategory;
  });

  const toggleSyllabus = (id: string) => {
    setExpandedSyllabus((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <section id="courses" className="py-20 border-t border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-semibold text-sky-600 dark:text-sky-400 tracking-wider uppercase">
            Practical Tech Education
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-1.5 tracking-tight">
            Learn Technology Without Breaking Your Budget
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400 mt-3 leading-relaxed">
            Practical, affordable and beginner-friendly courses designed to help students build real-world skills and step confidently into software development.
          </p>

          {/* Interactive Filter Tabs (functional segmented buttons per anti-slop rules) */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 p-1 mt-8 bg-slate-100 dark:bg-slate-900 rounded-xl max-w-md mx-auto border border-slate-200 dark:border-slate-800">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                  selectedCategory === tab.id
                    ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-xs font-semibold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Courses Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {filteredCourses.map((course) => {
            const isExpanded = !!expandedSyllabus[course.id];
            return (
              <div
                key={course.id}
                className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-xs flex flex-col justify-between hover:border-sky-500/40 transition-all"
              >
                <div>
                  {/* Metadata Row: Level & Duration (Unboxed typography with dots per rules) */}
                  <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-3">
                    <div className="flex items-center gap-1.5">
                      <BarChart className="w-3.5 h-3.5 text-sky-500" />
                      <span>{course.level}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      <span>{course.duration}</span>
                    </div>
                  </div>

                  {/* Title & Short Description */}
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-2 tracking-tight">
                    {course.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                    {course.shortDescription}
                  </p>

                  {/* Price Banner Placeholder (Transparent & Editable) */}
                  <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/70 dark:border-slate-800 flex items-center justify-between mb-6">
                    <div>
                      <span className="text-[11px] uppercase tracking-wider text-slate-500 dark:text-slate-400 block font-semibold">
                        Student Fee
                      </span>
                      <span className="text-lg font-bold text-sky-600 dark:text-sky-400 font-mono">
                        {course.priceTag}
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                        Student Subsidy Eligible
                      </span>
                      <p className="text-[11px] text-slate-500">Pay-as-you-learn options</p>
                    </div>
                  </div>

                  {/* Key Features */}
                  <div className="space-y-2 mb-6">
                    <span className="text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider block">
                      Course Inclusions:
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600 dark:text-slate-400">
                      {course.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-center gap-1.5">
                          <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Syllabus Toggle & Curriculum */}
                  <div className="border-t border-slate-100 dark:border-slate-800 pt-4 mb-6">
                    <button
                      onClick={() => toggleSyllabus(course.id)}
                      className="w-full flex items-center justify-between text-xs font-semibold text-sky-600 dark:text-sky-400 hover:text-sky-500 transition-colors py-1 cursor-pointer"
                    >
                      <span className="flex items-center gap-1.5">
                        <BookOpen className="w-3.5 h-3.5" />
                        <span>{isExpanded ? 'Hide Full Syllabus' : 'View Core Topics & Modules'}</span>
                      </span>
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>

                    {isExpanded && (
                      <div className="mt-3 p-4 rounded-xl bg-slate-50/80 dark:bg-slate-950/40 border border-slate-100 dark:border-slate-800 text-xs space-y-2 animate-in fade-in duration-200">
                        <span className="font-semibold text-slate-800 dark:text-slate-200 block mb-1">
                          Curriculum Modules:
                        </span>
                        <ul className="space-y-1.5 text-slate-600 dark:text-slate-400">
                          {course.topics.map((topic, tIdx) => (
                            <li key={tIdx} className="flex items-start gap-2">
                              <span className="font-mono text-[10px] text-sky-500 font-bold shrink-0 mt-0.5">
                                {tIdx + 1 < 10 ? `0${tIdx + 1}` : tIdx + 1}.
                              </span>
                              <span>{topic}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Bottom CTA */}
                <div>
                  <button
                    onClick={() => onEnrollCourse(course)}
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-semibold text-xs shadow-xs transition-all cursor-pointer group"
                  >
                    <span>Enroll / Enquire</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                  <p className="text-[11px] text-center text-slate-500 dark:text-slate-400 mt-2">
                    Flexible batch timings & batch doubt sessions included.
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Course CTA Banner */}
        <div className="rounded-2xl border border-sky-200 dark:border-sky-900/60 bg-gradient-to-r from-sky-500/10 via-indigo-500/10 to-sky-500/5 dark:from-sky-950/40 dark:via-indigo-950/30 dark:to-slate-950 p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-sky-600 dark:text-sky-400 mb-2">
              <GraduationCap className="w-4 h-4" />
              <span>Affordable Computer Science & Web Dev</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Want to Learn Technology at an Affordable Price?
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 mt-2">
              Join practical courses designed for students and beginners. Learn real coding without expensive bootcamp fees.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
            <button
              onClick={() => setSelectedCategory('all')}
              className="px-5 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white text-xs font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
            >
              View All Courses
            </button>
            <button
              onClick={onAskAboutCourses}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-semibold shadow-xs transition-colors"
            >
              <HelpCircle className="w-4 h-4" />
              <span>Ask About Courses</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
