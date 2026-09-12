import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { User, Award, MapPin, Mail, GraduationCap, Briefcase, ExternalLink, CheckCircle2, ShieldCheck, Server, Cpu } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-100/60 dark:bg-zinc-950/60 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-200 dark:border-indigo-800/40 text-xs font-mono text-indigo-600 dark:text-indigo-400 mb-3">
            <User className="w-3.5 h-3.5" />
            <span>ENGINEER PROFILE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            About <span className="text-gradient-brand">Me</span>
          </h2>
          <p className="mt-3 text-slate-600 dark:text-zinc-400 text-sm sm:text-base">
            Background, technical discipline, and engineering philosophy.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Key Engineering Highlights Grid (Replaces old photo) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              {personalInfo.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="glass-card p-5 rounded-2xl flex flex-col justify-between"
                >
                  <div className="text-3xl font-extrabold font-mono text-indigo-600 dark:text-indigo-400 mb-1">
                    {stat.value}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-800 dark:text-zinc-200">{stat.label}</h4>
                    <p className="text-xs text-slate-500 dark:text-zinc-400 mt-0.5">{stat.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Architecture Highlights Card */}
            <div className="glass-card p-6 rounded-2xl space-y-4">
              <h4 className="text-sm font-mono uppercase text-slate-500 dark:text-zinc-400 tracking-wider flex items-center gap-2">
                <Cpu className="w-4 h-4 text-indigo-500 dark:text-indigo-400" />
                Technical Foundations
              </h4>
              <div className="space-y-2.5 text-xs text-slate-700 dark:text-zinc-300">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span>Deep foundation in Core Java, OOP, Collections, and Exception Handling.</span>
                </div>
                <div className="flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
                  <span>Robust security implementation using Spring Security, JWT, and RBAC.</span>
                </div>
                <div className="flex items-start gap-2">
                  <Server className="w-4 h-4 text-purple-600 dark:text-purple-400 shrink-0 mt-0.5" />
                  <span>Practical server configuration, Linux shell administration, and deployment.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Professional Narrative & Metadata */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4 text-slate-700 dark:text-zinc-300 text-sm sm:text-base leading-relaxed">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                Java & Software Developer based in Pune, India
              </h3>
              
              <p>
                I am a 2025 Computer Science Engineering graduate from{' '}
                <span className="text-slate-900 dark:text-zinc-100 font-medium">Babasaheb Naik College of Engineering (BNCOE Pusad)</span> with an academic CGPA of{' '}
                <span className="text-indigo-600 dark:text-indigo-400 font-semibold font-mono">8.16</span>.
              </p>

              <p>
                My core expertise centers around building robust backend applications with{' '}
                <span className="text-slate-900 dark:text-zinc-100 font-medium">Java, Spring Boot, Spring Security</span>, and{' '}
                <span className="text-slate-900 dark:text-zinc-100 font-medium">MySQL</span>. I have hands-on experience developing RESTful APIs, securing microservices with stateless JWT tokens and role-based permissions, writing efficient SQL queries, and deploying production environments on Linux servers.
              </p>

              <p className="text-slate-600 dark:text-zinc-400">
                Whether orchestrating database connectivity via JDBC/Hibernate or integrating modern TypeScript frontends with backend APIs, I focus on system reliability, clean code structure, and maintainable software patterns.
              </p>
            </div>

            {/* Quick Metadata Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-white dark:bg-zinc-900/60 border border-slate-200 dark:border-zinc-800/80 shadow-sm">
                <GraduationCap className="w-5 h-5 text-indigo-500 dark:text-indigo-400 shrink-0" />
                <div className="text-xs">
                  <span className="text-slate-500 dark:text-zinc-400 block">Degree:</span>
                  <span className="font-semibold text-slate-800 dark:text-zinc-200">B.E. Computer Science (2025)</span>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-white dark:bg-zinc-900/60 border border-slate-200 dark:border-zinc-800/80 shadow-sm">
                <Award className="w-5 h-5 text-purple-500 dark:text-purple-400 shrink-0" />
                <div className="text-xs">
                  <span className="text-slate-500 dark:text-zinc-400 block">Institution:</span>
                  <span className="font-semibold text-slate-800 dark:text-zinc-200">BNCOE Pusad | CGPA: 8.16</span>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-white dark:bg-zinc-900/60 border border-slate-200 dark:border-zinc-800/80 shadow-sm">
                <MapPin className="w-5 h-5 text-emerald-500 dark:text-emerald-400 shrink-0" />
                <div className="text-xs">
                  <span className="text-slate-500 dark:text-zinc-400 block">Location:</span>
                  <span className="font-semibold text-slate-800 dark:text-zinc-200">{personalInfo.location}</span>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-white dark:bg-zinc-900/60 border border-slate-200 dark:border-zinc-800/80 shadow-sm">
                <Briefcase className="w-5 h-5 text-amber-500 dark:text-amber-400 shrink-0" />
                <div className="text-xs">
                  <span className="text-slate-500 dark:text-zinc-400 block">Status:</span>
                  <span className="font-semibold text-emerald-600 dark:text-emerald-400">Open to Opportunities</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm text-white bg-indigo-600 hover:bg-indigo-500 shadow-md shadow-indigo-600/25 transition-all active:scale-95"
              >
                <span>View Full Resume</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm text-slate-700 dark:text-zinc-300 bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 hover:bg-slate-100 dark:hover:bg-zinc-800 hover:text-slate-900 dark:hover:text-white transition-all shadow-sm"
              >
                <Mail className="w-4 h-4 text-indigo-500 dark:text-indigo-400" />
                <span>Contact Vikas</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
