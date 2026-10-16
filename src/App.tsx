/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { QuickStats } from './components/QuickStats';
import { About } from './components/About';
import { Services } from './components/Services';
import { Courses } from './components/Courses';
import { CourseEnquiryModal } from './components/CourseEnquiryModal';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { FreelancingProcess } from './components/FreelancingProcess';
import { WhyChooseMe } from './components/WhyChooseMe';
import { BrandManifesto } from './components/BrandManifesto';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { BackToTop } from './components/BackToTop';
import { Toast } from './components/Toast';
import { Course } from './data/portfolioData';

export default function App() {
  const [contactPrefill, setContactPrefill] = useState<string>('Website Development');
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const [selectedCourseForEnquiry, setSelectedCourseForEnquiry] = useState<Course | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const scrollToContact = (intent?: string) => {
    if (intent) {
      setContactPrefill(intent);
    }
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToCourses = () => {
    const coursesElem = document.getElementById('courses');
    if (coursesElem) {
      coursesElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const projectsElem = document.getElementById('projects');
    if (projectsElem) {
      projectsElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleEnrollCourse = (course: Course) => {
    setSelectedCourseForEnquiry(course);
    setEnquiryModalOpen(true);
  };

  const handleAskAboutCourses = () => {
    scrollToContact('Course Inquiry / Learning');
  };

  const showToast = (message: string) => {
    setToastMessage(message);
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-sky-500/25 selection:text-sky-400 font-sans transition-colors duration-200">
        
        {/* Scroll Progress Bar */}
        <ScrollProgressBar />

        {/* Sticky 3-Zone Navbar */}
        <Navbar onOpenContact={() => scrollToContact('Freelance Inquiry')} />

        <main id="main-content">
          {/* Hero Section */}
          <Hero
            onHireMeClick={() => scrollToContact('Website Development')}
            onExploreCoursesClick={scrollToCourses}
            onViewWorkClick={scrollToProjects}
          />

          {/* Quick Stats Strip */}
          <QuickStats />

          {/* About Me Section */}
          <About onConnectClick={() => scrollToContact('General Inquiry')} />

          {/* Services Section */}
          <Services onServiceSelect={(intent) => scrollToContact(intent)} />

          {/* Courses Section */}
          <Courses
            onEnrollCourse={handleEnrollCourse}
            onAskAboutCourses={handleAskAboutCourses}
          />

          {/* Technical Skills Section */}
          <Skills />

          {/* Projects Showcase Section */}
          <Projects />

          {/* Freelancing Process Section */}
          <FreelancingProcess onStartProject={() => scrollToContact('Website Development')} />

          {/* Why Choose Me Section */}
          <WhyChooseMe />

          {/* Personal Brand Section: More Than a Developer */}
          <BrandManifesto />

          {/* Testimonials Section */}
          <Testimonials onSuccessToast={showToast} />

          {/* FAQ Accordion Section */}
          <FAQ />

          {/* Contact Section */}
          <Contact
            prefillIntent={contactPrefill}
            onSuccessToast={showToast}
          />
        </main>

        {/* Footer */}
        <Footer />

        {/* Course Enquiry Modal Dialog */}
        <CourseEnquiryModal
          isOpen={enquiryModalOpen}
          onClose={() => setEnquiryModalOpen(false)}
          selectedCourse={selectedCourseForEnquiry}
          onSuccessToast={showToast}
        />

        {/* Toast Feedback */}
        <Toast
          message={toastMessage}
          onClose={() => setToastMessage(null)}
        />

        {/* Back to top floating button */}
        <BackToTop />

      </div>
    </ThemeProvider>
  );
}
