import React, { useState } from 'react';
import { portfolioConfig, Testimonial } from '../data/portfolioData';
import { Star, MessageSquareQuote, Plus, CheckCircle2, User, X } from 'lucide-react';

interface TestimonialsProps {
  onSuccessToast: (msg: string) => void;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ onSuccessToast }) => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>(() => {
    try {
      const stored = localStorage.getItem('sandip_testimonials');
      if (stored) {
        return JSON.parse(stored);
      }
    } catch {
      // Fallback
    }
    return portfolioConfig.testimonials;
  });

  const [showAddModal, setShowAddModal] = useState(false);
  const [newName, setNewName] = useState('');
  const [newRole, setNewRole] = useState('');
  const [newOrg, setNewOrg] = useState('');
  const [newReview, setNewReview] = useState('');
  const [newRating, setNewRating] = useState(5);

  const handleAddTestimonial = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName.trim() || !newReview.trim()) return;

    const newEntry: Testimonial = {
      id: 'test-' + Date.now(),
      name: newName,
      role: newRole || 'Course Student / Client',
      organization: newOrg || 'Independent Learner',
      review: newReview,
      rating: newRating,
      isPlaceholder: false
    };

    const updated = [newEntry, ...testimonials];
    setTestimonials(updated);
    try {
      localStorage.setItem('sandip_testimonials', JSON.stringify(updated));
    } catch {
      // Local fallback
    }

    setShowAddModal(false);
    setNewName('');
    setNewRole('');
    setNewOrg('');
    setNewReview('');
    onSuccessToast('Thank you! Your testimonial has been recorded.');
  };

  return (
    <section className="py-20 border-t border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-semibold text-sky-600 dark:text-sky-400 tracking-wider uppercase">
              Student & Client Feedback
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-1.5 tracking-tight">
              Testimonials
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-400 mt-2 max-w-2xl">
              Authentic feedback from course learners and freelance collaborators. All testimonials are easily configurable in <code className="font-mono text-sky-500">src/data/portfolioData.ts</code>.
            </p>
          </div>

          <button
            onClick={() => setShowAddModal(true)}
            className="self-start md:self-auto inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-900 dark:text-white text-xs font-semibold border border-slate-300 dark:border-slate-700 transition-colors cursor-pointer"
          >
            <Plus className="w-4 h-4 text-sky-500" />
            <span>Add Student / Client Review</span>
          </button>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className={`rounded-2xl border p-6 flex flex-col justify-between shadow-xs transition-all ${
                item.isPlaceholder
                  ? 'border-dashed border-slate-300 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-900/40'
                  : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  {/* Rating Stars */}
                  <div className="flex items-center gap-1 text-amber-400">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < item.rating ? 'fill-current' : 'text-slate-300 dark:text-slate-700'
                        }`}
                      />
                    ))}
                  </div>

                  {item.isPlaceholder ? (
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-slate-200/70 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                      Editable Slot
                    </span>
                  ) : (
                    <MessageSquareQuote className="w-5 h-5 text-sky-500/50" />
                  )}
                </div>

                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed italic mb-6">
                  "{item.review}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-sky-500/10 text-sky-600 dark:text-sky-400 flex items-center justify-center font-bold text-xs shrink-0">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white">
                    {item.name}
                  </h4>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">
                    {item.role} · {item.organization}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Add Review Dialog Modal */}
      {showAddModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xs"
          role="dialog"
          aria-modal="true"
        >
          <div className="w-full max-w-md bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-2xl animate-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                Add Testimonial or Review
              </h3>
              <button
                onClick={() => setShowAddModal(false)}
                className="text-slate-400 hover:text-slate-900 dark:hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleAddTestimonial} className="mt-4 space-y-3.5 text-xs">
              <div>
                <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  placeholder="e.g. Ananya Patel"
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-sky-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Role / Context
                  </label>
                  <input
                    type="text"
                    value={newRole}
                    onChange={(e) => setNewRole(e.target.value)}
                    placeholder="e.g. Web Dev Student"
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-sky-500"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    College / Organization
                  </label>
                  <input
                    type="text"
                    value={newOrg}
                    onChange={(e) => setNewOrg(e.target.value)}
                    placeholder="e.g. Engineering College"
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-sky-500"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Rating (1 to 5 Stars)
                </label>
                <select
                  value={newRating}
                  onChange={(e) => setNewRating(Number(e.target.value))}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-sky-500"
                >
                  <option value={5}>⭐⭐⭐⭐⭐ (5 - Exceptional)</option>
                  <option value={4}>⭐⭐⭐⭐ (4 - Very Good)</option>
                  <option value={3}>⭐⭐⭐ (3 - Good)</option>
                </select>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Review & Feedback *
                </label>
                <textarea
                  rows={3}
                  required
                  value={newReview}
                  onChange={(e) => setNewReview(e.target.value)}
                  placeholder="Share how the course or freelance project went..."
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-sky-500"
                />
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 font-medium"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg bg-sky-600 hover:bg-sky-500 text-white font-semibold shadow-xs"
                >
                  Save Review
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};
