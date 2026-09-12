import React, { useState } from 'react';
import { certifications } from '../data/portfolioData';
import {
  Award,
  ShieldCheck,
  Code,
  Briefcase,
  Database,
  BarChart3,
  Cloud,
  Terminal,
  ExternalLink,
  Layers,
  Globe,
  Sparkles,
  Cpu,
  Users,
  Server,
  GraduationCap,
  ChevronDown,
  ChevronUp,
  BookOpen
} from 'lucide-react';

export const Certifications: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const featuredCerts = certifications.filter((c) => c.group === 'featured');
  const otherCerts = certifications.filter((c) => c.group === 'other');

  const getCertIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code':
        return <Code className="w-5 h-5 text-indigo-500 dark:text-indigo-400" />;
      case 'Briefcase':
        return <Briefcase className="w-5 h-5 text-purple-500 dark:text-purple-400" />;
      case 'Database':
        return <Database className="w-5 h-5 text-cyan-500 dark:text-cyan-400" />;
      case 'BarChart3':
        return <BarChart3 className="w-5 h-5 text-amber-500 dark:text-amber-400" />;
      case 'Cloud':
        return <Cloud className="w-5 h-5 text-emerald-500 dark:text-emerald-400" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-indigo-500 dark:text-indigo-400" />;
      case 'Globe':
        return <Globe className="w-5 h-5 text-blue-500 dark:text-blue-400" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-violet-500 dark:text-violet-400" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-teal-500 dark:text-teal-400" />;
      case 'Users':
        return <Users className="w-5 h-5 text-pink-500 dark:text-pink-400" />;
      case 'Server':
        return <Server className="w-5 h-5 text-orange-500 dark:text-orange-400" />;
      case 'GraduationCap':
        return <GraduationCap className="w-5 h-5 text-indigo-500 dark:text-indigo-400" />;
      case 'Award':
        return <Award className="w-5 h-5 text-yellow-500 dark:text-yellow-400" />;
      default:
        return <Terminal className="w-5 h-5 text-rose-500 dark:text-rose-400" />;
    }
  };

  const renderCertCard = (cert: (typeof certifications)[0]) => (
    <div
      key={cert.id}
      className="glass-card rounded-2xl p-6 flex flex-col justify-between group transition-all duration-300"
    >
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="p-3 rounded-xl bg-slate-100 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 group-hover:border-indigo-400 dark:group-hover:border-indigo-500/40 transition-all">
            {getCertIcon(cert.iconName)}
          </div>
          <span className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800/40 px-2.5 py-0.5 rounded-full">
            <ShieldCheck className="w-3 h-3" />
            Verified
          </span>
        </div>

        <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors mb-2 leading-snug">
          {cert.title}
        </h3>

        <p className="text-xs font-semibold text-slate-500 dark:text-zinc-400">
          {cert.issuer}
        </p>
      </div>

      <div className="mt-5 pt-3 border-t border-slate-200 dark:border-zinc-900 flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-zinc-500">
        <span className="text-slate-600 dark:text-zinc-400">{cert.tag}</span>
        {cert.credentialUrl ? (
          <a
            href={cert.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300 font-semibold group-hover:underline transition-colors"
          >
            <span>View Credential</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        ) : (
          <span className="text-slate-400 dark:text-zinc-600">Credential</span>
        )}
      </div>
    </div>
  );

  return (
    <section id="certifications" className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-zinc-950 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-200 dark:border-indigo-800/40 text-xs font-mono text-indigo-600 dark:text-indigo-400 mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>CREDENTIALS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Licenses & <span className="text-gradient-brand">Certifications</span>
          </h2>
          <p className="mt-3 text-slate-600 dark:text-zinc-400 text-sm sm:text-base">
            Verified qualifications across core software engineering, databases, cloud architecture, and industrial internships.
          </p>
        </div>

        {/* 1. FEATURED CERTIFICATIONS HEADER */}
        <div className="flex items-center justify-between mb-6 pb-2 border-b border-slate-200 dark:border-zinc-800/80">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-indigo-500" />
            <h3 className="text-lg font-bold text-slate-900 dark:text-zinc-100">
              Featured Certifications
            </h3>
          </div>
          <span className="text-xs font-mono text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800/50 px-2.5 py-0.5 rounded-full">
            {featuredCerts.length} Accredited
          </span>
        </div>

        {/* Featured Certifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {featuredCerts.map(renderCertCard)}
        </div>

        {/* 2. OTHER CERTIFICATIONS & LEARNING SECTION (Expandable/Collapsible) */}
        <div className="mt-8 pt-8 border-t border-slate-200 dark:border-zinc-800">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-2xl bg-slate-50 dark:bg-zinc-900/60 border border-slate-200 dark:border-zinc-800/80 mb-6">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800/50 text-indigo-600 dark:text-indigo-400">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-base text-slate-900 dark:text-zinc-100">
                  Other Certifications & Technical Learning
                </h4>
                <p className="text-xs text-slate-500 dark:text-zinc-400">
                  Additional coursework, workshops, competitions, and specialized technical labs ({otherCerts.length} credentials)
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsExpanded(!isExpanded)}
              type="button"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-700 dark:text-zinc-200 bg-white dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 hover:bg-slate-100 dark:hover:bg-zinc-750 hover:text-slate-900 dark:hover:text-white transition-all shadow-xs"
            >
              <span>{isExpanded ? 'Collapse Additional Certifications' : `View All (${otherCerts.length} More)`}</span>
              {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>

          {/* Expandable Cards Grid */}
          {isExpanded && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in duration-300">
              {otherCerts.map(renderCertCard)}
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
