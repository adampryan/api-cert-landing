'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

const jsonResponse = {
  verified: true,
  provider_type: "MD",
  state: "MA",
  full_name: "SARAH K. CHEN",
  license_number: "MD-227415",
  status: "ACTIVE",
  expiration_date: "2028-03-15",
  disciplinary_flag: false,
  oig_excluded: false,
  sam_excluded: false,
  cms_precluded: false,
  latency_ms: 6
};

export default function Hero() {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [isTyping, setIsTyping] = useState(true);

  const jsonLines = JSON.stringify(jsonResponse, null, 2).split('\n');

  useEffect(() => {
    let currentLine = 0;
    const interval = setInterval(() => {
      if (currentLine < jsonLines.length) {
        setDisplayedLines(prev => [...prev, jsonLines[currentLine]]);
        currentLine++;
      } else {
        setIsTyping(false);
        clearInterval(interval);
      }
    }, 80);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#111827] min-h-screen flex items-center relative overflow-hidden">
      {/* Nav */}
      <nav className="absolute top-0 left-0 right-0 z-20 px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between">
        <Image src="/logo-white.png" alt="API-Cert" width={160} height={40} className="h-9 w-auto" />
        <div className="flex items-center gap-6">
          <a href="#pricing" className="text-sm text-slate-300 hover:text-white transition-colors">Pricing</a>
          <a href="/docs" className="text-sm text-slate-300 hover:text-white transition-colors">Docs</a>
          <a href="/docs#register" className="text-sm bg-[#059669] text-white px-4 py-2 rounded-lg hover:bg-amber-700 transition-colors">Get Free Key</a>
        </div>
      </nav>
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#111827] via-[#1a1f2e] to-[#111827]" />
      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-[0.07]" style={{
        backgroundImage: `linear-gradient(rgba(148,163,184,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.5) 1px, transparent 1px)`,
        backgroundSize: '40px 40px',
      }} />
      <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-emerald-600/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-emerald-600/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Text content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              The Fastest Way to Verify Provider Credentials{' '}
              <span className="text-[#059669]">in New England.</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 mb-8 max-w-xl mx-auto lg:mx-0">
              Official state board data for Massachusetts, Rhode Island, and Connecticut — refreshed weekly.
              All provider types. Exclusion screening included.
              Expanding nationwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="/docs#register"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#D97706] text-white font-semibold rounded-lg hover:bg-amber-700 transition-colors duration-200 text-lg"
              >
                Get Free API Key
              </a>
              <a
                href="#api"
                className="inline-flex items-center justify-center px-8 py-4 border border-slate-500 text-slate-300 font-semibold rounded-lg hover:bg-slate-800 hover:border-slate-400 transition-colors duration-200 text-lg"
              >
                View Examples
              </a>
            </div>
          </div>

          {/* Right column - Animated JSON block */}
          <div className="relative">
            <div className="bg-[#0d1117] rounded-lg border border-slate-700 shadow-2xl overflow-hidden">
              {/* Terminal header */}
              <div className="flex items-center gap-2 px-4 py-3 bg-[#161b22] border-b border-slate-700">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-3 text-slate-400 text-sm font-mono">api-cert response</span>
              </div>

              {/* JSON content */}
              <div className="p-6 font-mono text-sm sm:text-base overflow-x-auto">
                <pre className="text-slate-300">
                  {displayedLines.filter((line): line is string => typeof line === 'string').map((line, index) => (
                    <div key={index} className="leading-relaxed">
                      {line.includes('"verified": true') && (
                        <span>
                          {line.replace('true', '')}
                          <span className="text-green-400">true</span>
                          {line.endsWith(',') ? '' : ''}
                        </span>
                      )}
                      {line.includes('"status": "ACTIVE"') && (
                        <span>
                          {line.replace('"ACTIVE"', '')}
                          <span className="text-green-400">&quot;ACTIVE&quot;</span>
                        </span>
                      )}
                      {line.includes('"oig_excluded": false') && (
                        <span className="bg-green-400/10 -mx-2 px-2 rounded">
                          {line.replace('false', '')}
                          <span className="text-green-400 font-bold">false</span>
                        </span>
                      )}
                      {line.includes('"sam_excluded": false') && (
                        <span className="bg-green-400/10 -mx-2 px-2 rounded">
                          {line.replace('false', '')}
                          <span className="text-green-400 font-bold">false</span>
                        </span>
                      )}
                      {line.includes('"cms_precluded": false') && (
                        <span className="bg-green-400/10 -mx-2 px-2 rounded">
                          {line.replace('false', '')}
                          <span className="text-green-400 font-bold">false</span>
                        </span>
                      )}
                      {line.includes('"disciplinary_flag": false') && (
                        <span>
                          {line.replace('false', '')}
                          <span className="text-green-400">false</span>
                        </span>
                      )}
                      {line.includes('"latency_ms": 6') && (
                        <span>
                          {line.replace('6', '')}
                          <span className="text-amber-400">6</span>
                        </span>
                      )}
                      {!line.includes('"verified"') &&
                       !line.includes('"status"') &&
                       !line.includes('"oig_excluded"') &&
                       !line.includes('"sam_excluded"') &&
                       !line.includes('"cms_precluded"') &&
                       !line.includes('"disciplinary_flag"') &&
                       !line.includes('"latency_ms"') && (
                        <span>{line}</span>
                      )}
                    </div>
                  ))}
                  {isTyping && (
                    <span className="inline-block w-2 h-5 bg-slate-400 animate-pulse ml-1" />
                  )}
                </pre>
              </div>
            </div>

            {/* Latency badge */}
            <div className="absolute -bottom-4 -right-4 bg-green-500/10 border border-green-500/30 rounded-lg px-4 py-2">
              <span className="text-green-400 font-mono text-sm">6ms response</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
