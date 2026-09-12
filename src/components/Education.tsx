import React from 'react';
import { education } from '../data/portfolioData';
import { GraduationCap, Calendar, MapPin, Award, CheckCircle2, BookOpen } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-100/60 dark:bg-zinc-950/60 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-200 dark:border-indigo-800/40 text-xs font-mono text-indigo-600 dark:text-indigo-400 mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>ACADEMIC FOUNDATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            My <span className="text-gradient-brand">Education</span>
          </h2>
          <p className="mt-3 text-slate-600 dark:text-zinc-400 text-sm sm:text-base">
            Systematic computer science engineering education, core fundamentals, and academic achievements.
          </p>
        </div>

        {/* Education Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {education.map((item) => (
            <div
              key={item.id}
              className="glass-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between group"
            >
              <div>
                {/* Header with Icon & Score */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-200 dark:border-indigo-800/40 text-indigo-600 dark:text-indigo-400 group-hover:scale-105 transition-transform">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-xs font-mono font-bold text-amber-700 dark:text-amber-300 shadow-xs">
                    <Award className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400" />
                    <span>{item.score}</span>
                  </div>
                </div>

                {/* Degree & Institution */}
                <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors mb-2">
                  {item.degree}
                </h3>

                <p className="text-sm font-medium text-slate-700 dark:text-zinc-300 mb-3">
                  {item.institution}
                </p>

                {/* Period & Location */}
                <div className="flex flex-col space-y-1.5 text-xs text-slate-500 dark:text-zinc-400 font-mono mb-5 pb-4 border-b border-slate-200 dark:border-zinc-900">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-indigo-500 dark:text-indigo-400" />
                    {item.period}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 dark:text-zinc-500" />
                    {item.location}
                  </span>
                </div>

                {/* Highlights */}
                <div className="space-y-2">
                  {item.highlights.map((hl, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-zinc-400 leading-relaxed">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200 dark:border-zinc-900 flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-zinc-500">
                <span className="flex items-center gap-1">
                  <BookOpen className="w-3 h-3" /> CSE Discipline
                </span>
                <span className="text-indigo-600 dark:text-indigo-400">Verified</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
