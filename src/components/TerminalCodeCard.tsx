import React, { useState } from 'react';
import { Copy, Check, Terminal, ShieldCheck, Sparkles } from 'lucide-react';

export const TerminalCodeCard: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'java' | 'json'>('java');

  const javaCode = `// VikasGanjure.java
package com.vikas.portfolio;

@DeveloperProfile(
    name = "Vikas Ganjure",
    role = "Software & Java Backend Engineer",
    location = "Pune, Maharashtra, India"
)
public class VikasGanjure implements SoftwareEngineer {

    private final String status = "Open to Opportunities";
    private final double academicCgpa = 8.16;

    @Override
    public List<String> getCoreCompetencies() {
        return List.of(
            "Core Java", "Spring Boot", "Spring Security",
            "JWT Auth & RBAC", "REST APIs", "MySQL",
            "Linux Deployment", "React & TypeScript"
        );
    }

    @Override
    public String executeMission() {
        return "Building robust, scalable, and secure backend systems.";
    }
}`;

  const jsonCode = `{
  "developer": "Vikas Ganjure",
  "status": "Ready for Hire",
  "education": {
    "degree": "B.E. Computer Science Engineering",
    "cgpa": 8.16,
    "year": 2025
  },
  "specialization": [
    "Enterprise Java & Spring Boot",
    "RESTful Microservice Architecture",
    "Stateless JWT Security & RBAC",
    "Database Schema & SQL Optimization"
  ],
  "contact": {
    "email": "vikasganjure2002@gmail.com",
    "location": "Pune, India"
  }
}`;

  const handleCopy = () => {
    const textToCopy = activeTab === 'java' ? javaCode : jsonCode;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative w-full max-w-lg mx-auto rounded-2xl overflow-hidden glass-panel shadow-2xl border border-slate-300 dark:border-zinc-800/80 transition-all duration-300 hover:border-indigo-500/40 group">
      {/* Ambient background glow */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-indigo-500/20 transition-all" />
      <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-purple-500/20 transition-all" />

      {/* Terminal Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-zinc-900/90 border-b border-zinc-800">
        <div className="flex items-center space-x-2">
          <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
          <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block"></span>
          <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
          <div className="ml-2 flex items-center space-x-2 text-xs font-mono text-zinc-400">
            <Terminal className="w-3.5 h-3.5 text-indigo-400" />
            <span className="hidden sm:inline">engineer-terminal</span>
          </div>
        </div>

        {/* Tab switcher */}
        <div className="flex items-center space-x-1 bg-zinc-950/80 p-0.5 rounded-lg border border-zinc-800">
          <button
            onClick={() => setActiveTab('java')}
            className={`px-2.5 py-1 rounded text-xs font-mono transition-all ${
              activeTab === 'java'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            Vikas.java
          </button>
          <button
            onClick={() => setActiveTab('json')}
            className={`px-2.5 py-1 rounded text-xs font-mono transition-all ${
              activeTab === 'json'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            profile.json
          </button>
        </div>

        {/* Copy button */}
        <button
          onClick={handleCopy}
          className="p-1.5 rounded-md text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/80 transition-colors"
          title="Copy code"
        >
          {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
        </button>
      </div>

      {/* Code Editor Body */}
      <div className="p-4 sm:p-5 font-mono text-xs sm:text-[13px] leading-relaxed overflow-x-auto text-zinc-300 max-h-[380px] bg-zinc-950/70">
        <pre className="font-mono">
          {activeTab === 'java' ? (
            <code>
              <span className="text-zinc-500">// VikasGanjure.java</span>
              {'\n'}
              <span className="text-purple-400">package</span> com.vikas.portfolio;
              {'\n\n'}
              <span className="text-amber-400">@DeveloperProfile</span>(
              {'\n'}    name = <span className="text-emerald-300">"Vikas Ganjure"</span>,
              {'\n'}    role = <span className="text-emerald-300">"Software & Java Backend Engineer"</span>,
              {'\n'}    location = <span className="text-emerald-300">"Pune, Maharashtra, India"</span>
              {'\n'})
              {'\n'}
              <span className="text-purple-400">public class</span>{' '}
              <span className="text-yellow-200">VikasGanjure</span>{' '}
              <span className="text-purple-400">implements</span>{' '}
              <span className="text-cyan-300">SoftwareEngineer</span> {'{'}
              {'\n\n'}    <span className="text-purple-400">private final</span> String status ={' '}
              <span className="text-emerald-300">"Open to Opportunities"</span>;
              {'\n'}    <span className="text-purple-400">private final double</span> cgpa ={' '}
              <span className="text-amber-300">8.16</span>;
              {'\n\n'}    <span className="text-amber-400">@Override</span>
              {'\n'}    <span className="text-purple-400">public</span> List&lt;String&gt;{' '}
              <span className="text-blue-400">getCoreCompetencies</span>() {'{'}
              {'\n'}        <span className="text-purple-400">return</span> List.of(
              {'\n'}            <span className="text-emerald-300">"Core Java"</span>,{' '}
              <span className="text-emerald-300">"Spring Boot"</span>,{' '}
              <span className="text-emerald-300">"Spring Security"</span>,
              {'\n'}            <span className="text-emerald-300">"JWT Auth & RBAC"</span>,{' '}
              <span className="text-emerald-300">"REST APIs"</span>,{' '}
              <span className="text-emerald-300">"MySQL"</span>,
              {'\n'}            <span className="text-emerald-300">"Linux Deployment"</span>,{' '}
              <span className="text-emerald-300">"React & TypeScript"</span>
              {'\n'}        );
              {'\n'}    {'}'}
              {'\n\n'}    <span className="text-amber-400">@Override</span>
              {'\n'}    <span className="text-purple-400">public</span> String{' '}
              <span className="text-blue-400">executeMission</span>() {'{'}
              {'\n'}        <span className="text-purple-400">return</span>{' '}
              <span className="text-emerald-300">"Building robust, secure backend systems."</span>;
              {'\n'}    {'}'}
              {'\n'}{'}'}
            </code>
          ) : (
            <code>
              {'{'}
              {'\n'}  <span className="text-indigo-400">"developer"</span>:{' '}
              <span className="text-emerald-300">"Vikas Ganjure"</span>,
              {'\n'}  <span className="text-indigo-400">"status"</span>:{' '}
              <span className="text-emerald-300">"Available for Hire"</span>,
              {'\n'}  <span className="text-indigo-400">"degree"</span>:{' '}
              <span className="text-emerald-300">"B.E. Computer Science (BNCOE Pusad)"</span>,
              {'\n'}  <span className="text-indigo-400">"cgpa"</span>:{' '}
              <span className="text-amber-300">8.16</span>,
              {'\n'}  <span className="text-indigo-400">"specialization"</span>: [
              {'\n'}    <span className="text-emerald-300">"Enterprise Java & Spring Boot"</span>,
              {'\n'}    <span className="text-emerald-300">"RESTful Microservices & APIs"</span>,
              {'\n'}    <span className="text-emerald-300">"Stateless JWT Security & RBAC"</span>,
              {'\n'}    <span className="text-emerald-300">"Database Normalization & MySQL"</span>
              {'\n'}  ],
              {'\n'}  <span className="text-indigo-400">"location"</span>:{' '}
              <span className="text-emerald-300">"Pune, Maharashtra, India"</span>
              {'\n'}{'}'}
            </code>
          )}
        </pre>
      </div>

      {/* Terminal Footer Info */}
      <div className="flex flex-wrap items-center justify-between px-4 py-2.5 bg-zinc-900/90 border-t border-zinc-800 text-[11px] text-zinc-400 font-mono">
        <div className="flex items-center space-x-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>COMPILER: READY</span>
        </div>
        <div className="flex items-center space-x-3">
          <span className="flex items-center gap-1 text-indigo-400">
            <ShieldCheck className="w-3.5 h-3.5" /> Spring Security
          </span>
          <span className="flex items-center gap-1 text-purple-400">
            <Sparkles className="w-3.5 h-3.5" /> Java 17+
          </span>
        </div>
      </div>
    </div>
  );
};
