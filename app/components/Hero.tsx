'use client';

import { useEffect, useState } from 'react';

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen bg-charcoal overflow-hidden hero-grid">
      {/* Gradient orbs */}
      <div className="absolute top-[-200px] right-[-200px] w-[600px] h-[600px] rounded-full bg-emerald-brand/20 blur-[128px] pointer-events-none" />
      <div className="absolute bottom-[-100px] left-[-100px] w-[400px] h-[400px] rounded-full bg-teal-brand/10 blur-[96px] pointer-events-none" />

      {/* Nav */}
      <nav className="relative z-10 max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-emerald-brand flex items-center justify-center">
            <span className="text-white font-bold text-sm">AC</span>
          </div>
          <span className="text-white font-semibold text-lg">api-cert</span>
        </div>
        <div className="flex items-center gap-6">
          <a href="/#pricing" className="text-gray-400 hover:text-white transition-colors text-sm">Pricing</a>
          <a href="/docs" className="text-gray-400 hover:text-white transition-colors text-sm">Docs</a>
          <a
            href="/docs#register"
            className="bg-amber-brand hover:bg-amber-brand/90 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
          >
            Get Free Key
          </a>
        </div>
      </nav>

      {/* Hero content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-16 pb-24 lg:pt-24 lg:pb-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Copy */}
          <div className={`${mounted ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <p className="text-emerald-brand font-mono text-sm mb-6 tracking-wide uppercase">Healthcare Credentialing API</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.1] mb-6">
              <span className="font-light">Credential Verification</span>
              <br />
              <span className="font-bold">That Actually Works.</span>
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed max-w-lg mb-8">
              One API call. Real-time license status, NPI data, and exclusion screening across New England — powered by official state board data.
            </p>
            <div className="flex flex-wrap gap-4 mb-6">
              <a
                href="/docs#register"
                className="bg-amber-brand hover:bg-amber-brand/90 text-white px-6 py-3 rounded-lg font-semibold transition-colors text-base"
              >
                Start Free
              </a>
              <a
                href="/docs"
                className="border border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white px-6 py-3 rounded-lg font-medium transition-colors text-base"
              >
                See the Docs
              </a>
            </div>
            <div className="flex flex-wrap gap-x-5 gap-y-1 text-sm text-gray-500">
              <span>&#10003; No credit card</span>
              <span>&#10003; 50 free verifications</span>
              <span>&#10003; API key in 30 seconds</span>
            </div>
          </div>

          {/* Right — Dashboard mockup */}
          <div className={`relative ${mounted ? 'animate-fade-in-up animation-delay-200' : 'opacity-0'}`}>
            <div className="hero-float">
              {/* Verification result card */}
              <div className="bg-white rounded-2xl shadow-2xl p-6 max-w-md mx-auto">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-gray-400 uppercase tracking-wide">Verification Result</span>
                  <span className="text-xs font-mono text-emerald-brand">42ms</span>
                </div>
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 rounded-full bg-emerald-light flex items-center justify-center text-emerald-brand font-bold text-lg">
                    SJ
                  </div>
                  <div>
                    <p className="font-semibold text-charcoal">Sarah Johnson, RN</p>
                    <p className="text-sm text-gray-500">NPI 1234567890</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3 mb-5">
                  <div className="bg-surface rounded-lg px-3 py-2">
                    <p className="text-xs text-gray-500 mb-1">License Status</p>
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-brand">
                      <span className="w-2 h-2 rounded-full bg-emerald-brand" />
                      ACTIVE
                    </span>
                  </div>
                  <div className="bg-surface rounded-lg px-3 py-2">
                    <p className="text-xs text-gray-500 mb-1">State</p>
                    <p className="text-sm font-semibold text-charcoal">Massachusetts</p>
                  </div>
                  <div className="bg-surface rounded-lg px-3 py-2">
                    <p className="text-xs text-gray-500 mb-1">Expiration</p>
                    <p className="text-sm font-semibold text-charcoal">03/2027</p>
                  </div>
                  <div className="bg-surface rounded-lg px-3 py-2">
                    <p className="text-xs text-gray-500 mb-1">License #</p>
                    <p className="text-sm font-semibold text-charcoal">RN-284751</p>
                  </div>
                </div>
                {/* Exclusion checks */}
                <div className="border-t border-gray-100 pt-4">
                  <p className="text-xs text-gray-400 uppercase tracking-wide mb-2">Exclusion Screening</p>
                  <div className="flex gap-4">
                    {['OIG', 'SAM', 'CMS'].map((name) => (
                      <span key={name} className="flex items-center gap-1.5 text-sm text-emerald-brand font-medium">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                        {name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Terminal snippet */}
              <div className="mt-4 bg-charcoal-light rounded-xl p-4 max-w-md mx-auto border border-gray-700/50">
                <div className="flex items-center gap-2 mb-3">
                  <span className="terminal-dot bg-red-500/80" />
                  <span className="terminal-dot bg-yellow-500/80" />
                  <span className="terminal-dot bg-emerald-brand/80" />
                </div>
                <pre className="text-xs font-mono text-gray-400 overflow-x-auto">
                  <code>
                    <span className="syntax-method">curl</span>{' '}<span className="syntax-url">api-cert.com/v1/verify</span>{' \\\n'}
                    {'  '}<span className="syntax-key">-H</span>{' '}<span className="syntax-string">&quot;X-API-Key: sk_live_...&quot;</span>{' \\\n'}
                    {'  '}<span className="syntax-key">-d</span>{' '}<span className="syntax-string">&apos;&#123;&quot;license_number&quot;: &quot;RN-284751&quot;,</span>{'\n'}
                    {'       '}<span className="syntax-string">&quot;state&quot;: &quot;MA&quot;&#125;&apos;</span>
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
