import React, { useState } from 'react';
import { skillCategories } from '../data/portfolioData';
import { Cpu, Check, Layers, Sparkles, Server, Database, Globe, Terminal, Shield } from 'lucide-react';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...skillCategories.map((c) => c.name)];

  const getCategoryIcon = (name: string) => {
    switch (name) {
      case 'Backend & Core':
        return <Server className="w-4 h-4 text-indigo-500 dark:text-indigo-400" />;
      case 'Database & Storage':
        return <Database className="w-4 h-4 text-cyan-500 dark:text-cyan-400" />;
      case 'Frontend & Web':
        return <Globe className="w-4 h-4 text-emerald-500 dark:text-emerald-400" />;
      case 'DevOps, Cloud & Linux':
        return <Terminal className="w-4 h-4 text-amber-500 dark:text-amber-400" />;
      default:
        return <Shield className="w-4 h-4 text-purple-500 dark:text-purple-400" />;
    }
  };

  const filteredCategories =
    selectedCategory === 'All'
      ? skillCategories
      : skillCategories.filter((c) => c.name === selectedCategory);

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-white dark:bg-zinc-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-200 dark:border-indigo-800/40 text-xs font-mono text-indigo-600 dark:text-indigo-400 mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>CORE EXPERTISE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Technical <span className="text-gradient-brand">Skills</span>
          </h2>
          <p className="mt-3 text-slate-600 dark:text-zinc-400 text-sm sm:text-base">
            Engineered with a focus on robust backend services, data architecture, security, and web standards.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/25'
                  : 'bg-white dark:bg-zinc-900/80 text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-zinc-800 border border-slate-200 dark:border-zinc-800 shadow-sm'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => (
            <div
              key={category.name}
              className="glass-card rounded-2xl p-6 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-slate-100 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 group-hover:border-indigo-400 dark:group-hover:border-indigo-500/30 transition-colors">
                      {getCategoryIcon(category.name)}
                    </div>
                    <h3 className="font-bold text-base text-slate-900 dark:text-zinc-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors">
                      {category.name}
                    </h3>
                  </div>
                </div>

                <p className="text-xs text-slate-600 dark:text-zinc-400 mb-5 leading-relaxed">
                  {category.description}
                </p>

                {/* Skills tags list */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                        skill.highlight
                          ? 'bg-indigo-50 dark:bg-indigo-950/40 border-indigo-200 dark:border-indigo-700/50 text-indigo-700 dark:text-indigo-200 shadow-xs'
                          : 'bg-white dark:bg-zinc-900/90 border-slate-200 dark:border-zinc-800/80 text-slate-700 dark:text-zinc-300 hover:border-slate-300 dark:hover:border-zinc-700 shadow-xs'
                      }`}
                    >
                      {skill.highlight ? (
                        <Sparkles className="w-3 h-3 text-indigo-500 dark:text-indigo-400 shrink-0" />
                      ) : (
                        <Check className="w-3 h-3 text-emerald-500 dark:text-emerald-400 shrink-0" />
                      )}
                      <span>{skill.name}</span>
                      <span className="text-[10px] font-mono text-slate-500 dark:text-zinc-400 ml-1">
                        [{skill.level}]
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom footer badge */}
              <div className="mt-6 pt-4 border-t border-slate-200 dark:border-zinc-900/90 flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-zinc-500">
                <span className="flex items-center gap-1">
                  <Layers className="w-3 h-3" /> {category.skills.length} competencies
                </span>
                <span className="text-slate-600 dark:text-zinc-400">Enterprise Ready</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
