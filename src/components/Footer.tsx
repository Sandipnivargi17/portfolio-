import React from 'react';
import { portfolioConfig } from '../data/portfolioData';
import { Github, Linkedin, Instagram, Youtube, Heart, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Courses', href: '#courses' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-600 dark:text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start justify-between pb-12 border-b border-slate-100 dark:border-slate-800/80">
          
          {/* Brand & Tagline */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-lg bg-sky-500/10 dark:bg-sky-500/20 text-sky-600 dark:text-sky-400 font-mono font-bold text-sm flex items-center justify-center border border-sky-500/30">
                {portfolioConfig.personal.monogram}
              </span>
              <span className="text-lg font-bold text-slate-900 dark:text-white">
                {portfolioConfig.personal.name}
              </span>
            </div>
            
            <p className="text-slate-600 dark:text-slate-400 max-w-sm leading-relaxed text-xs">
              Building digital solutions. Sharing technical knowledge. Making modern software development accessible and practical for students and clients alike.
            </p>

            <div className="pt-2 text-[11px] text-slate-400">
              <span>Computer Science Engineer & Tech Educator</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-semibold text-slate-900 dark:text-white uppercase tracking-wider">
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-slate-600 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Social Presence */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold text-slate-900 dark:text-white uppercase tracking-wider">
              Connect Online
            </h4>
            <div className="flex items-center gap-3">
              <a
                href={portfolioConfig.personal.socialLinks.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={portfolioConfig.personal.socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={portfolioConfig.personal.socialLinks.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram Profile"
                className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={portfolioConfig.personal.socialLinks.youtube}
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube Channel"
                className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
            <p className="text-[11px] text-slate-400 pt-1">
              Open for collaboration and mentorship inquiries.
            </p>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 dark:text-slate-500 text-[11px]">
          <div>
            <span>© 2026 {portfolioConfig.personal.name}. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <span>Engineered with React & Tailwind</span>
            </span>
            <span>·</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 hover:text-sky-500 transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
