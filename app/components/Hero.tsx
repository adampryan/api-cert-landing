'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

const jsonResponse = {
  verified: true,
  license_type: "RN",
  state: "MA",
  full_name: "SARAH J. CHEN",
  license_number: "RN298741",
  status: "ACTIVE",
  expiration_date: "2027-06-30",
  oig_excluded: false,
  sam_excluded: false,
  disciplinary_flag: false,
  latency_ms: 4
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
    <section className="bg-[#0a1628] min-h-screen flex items-center relative overflow-hidden">
      {/* Nav */}
      <nav className="absolute top-0 left-0 right-0 z-20 px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between">
        <Image src="/logo-white.png" alt="API-Cert" width={160} height={40} className="h-9 w-auto" />
        <div className="flex items-center gap-6">
          <a href="#pricing" className="text-sm text-slate-300 hover:text-white transition-colors">Pricing</a>
          <a href="/docs" className="text-sm text-slate-300 hover:text-white transition-colors">Docs</a>
          <a href="mailto:adam@oneweeklabs.com?subject=API-Cert%20API%20Key%20Request" className="text-sm bg-[#2563EB] text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">Get Free Key</a>
        </div>
      </nav>
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#0f1d32] to-[#0a1628]" />
      <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-blue-600/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-blue-600/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Text content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Verify Any Healthcare License.{' '}
              <span className="text-[#2563EB]">Instantly.</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 mb-8 max-w-xl mx-auto lg:mx-0">
              API-Cert checks RN, LPN, NP, PA, MD, and DO licenses across all 50 states
              in under 100ms — using official government data sources, updated daily.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="mailto:adam@oneweeklabs.com?subject=API-Cert%20API%20Key%20Request&body=Hi%20Adam%2C%0A%0AI%27d%20like%20to%20try%20API-Cert.%20Please%20send%20me%20a%20free%20API%20key.%0A%0AThanks!"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#2563EB] text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200 text-lg"
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
                        <span>
                          {line.replace('false', '')}
                          <span className="text-green-400">false</span>
                        </span>
                      )}
                      {line.includes('"sam_excluded": false') && (
                        <span>
                          {line.replace('false', '')}
                          <span className="text-green-400">false</span>
                        </span>
                      )}
                      {line.includes('"disciplinary_flag": false') && (
                        <span>
                          {line.replace('false', '')}
                          <span className="text-green-400">false</span>
                        </span>
                      )}
                      {line.includes('"latency_ms": 4') && (
                        <span>
                          {line.replace('4', '')}
                          <span className="text-yellow-400">4</span>
                        </span>
                      )}
                      {!line.includes('"verified"') &&
                       !line.includes('"status"') &&
                       !line.includes('"oig_excluded"') &&
                       !line.includes('"sam_excluded"') &&
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
              <span className="text-green-400 font-mono text-sm">4ms response</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
