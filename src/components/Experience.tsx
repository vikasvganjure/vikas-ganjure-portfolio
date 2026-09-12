import React from 'react';
import { experience } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-100/60 dark:bg-zinc-950/60 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-200 dark:border-indigo-800/40 text-xs font-mono text-indigo-600 dark:text-indigo-400 mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>CAREER TRACK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Professional <span className="text-gradient-brand">Experience</span>
          </h2>
          <p className="mt-3 text-slate-600 dark:text-zinc-400 text-sm sm:text-base">
            Work history, software development internships, and enterprise training.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical central/left spine line */}
          <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500/50 to-slate-300 dark:to-zinc-800 -translate-x-1/2" />

          <div className="space-y-12">
            {experience.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={item.id}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? 'md:flex-row-reverse' : ''
                  } group`}
                >
                  {/* Timeline Center Node */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-5 z-10">
                    <div
                      className={`w-6 h-6 rounded-full border-4 border-slate-100 dark:border-zinc-950 flex items-center justify-center ${
                        item.current
                          ? 'bg-emerald-500 shadow-lg shadow-emerald-500/40 ring-4 ring-emerald-500/20'
                          : 'bg-indigo-600 shadow-md shadow-indigo-600/30'
                      }`}
                    >
                      {item.current && (
                        <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping"></span>
                      )}
                    </div>
                  </div>

                  {/* Empty spacer for alternating layout on desktop */}
                  <div className="hidden md:block w-1/2" />

                  {/* Card Container */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8">
                    <div className="glass-card p-6 sm:p-7 rounded-2xl">
                      
                      {/* Top Badges */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <div className="flex items-center gap-2">
                          <span
                            className={`px-2.5 py-0.5 rounded-full text-[11px] font-semibold uppercase tracking-wider ${
                              item.current
                                ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/50'
                                : 'bg-slate-200 dark:bg-zinc-800 text-slate-700 dark:text-zinc-300'
                            }`}
                          >
                            {item.current ? 'Current Role' : item.type}
                          </span>
                        </div>

                        <div className="flex items-center gap-1.5 text-xs font-mono text-slate-500 dark:text-zinc-400">
                          <Calendar className="w-3.5 h-3.5 text-indigo-500 dark:text-indigo-400" />
                          <span>{item.period}</span>
                        </div>
                      </div>

                      {/* Title & Organization */}
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors">
                        {item.role}
                      </h3>

                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1 mb-4 text-xs sm:text-sm text-slate-600 dark:text-zinc-300">
                        <span className="font-semibold text-indigo-600 dark:text-indigo-400">{item.company}</span>
                        <span className="text-slate-400 dark:text-zinc-500">•</span>
                        <span className="flex items-center gap-1 text-slate-500 dark:text-zinc-400">
                          <MapPin className="w-3.5 h-3.5 text-slate-400 dark:text-zinc-500" /> {item.location}
                        </span>
                      </div>

                      {/* Bullet points */}
                      <ul className="space-y-2 mb-5">
                        {item.points.map((pt, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-zinc-300 leading-relaxed">
                            <CheckCircle2 className="w-4 h-4 text-indigo-500 dark:text-indigo-400 shrink-0 mt-0.5" />
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Skills Tags */}
                      <div className="pt-3 border-t border-slate-200 dark:border-zinc-800/60 flex flex-wrap gap-1.5">
                        {item.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-slate-100 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-slate-600 dark:text-zinc-400"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
