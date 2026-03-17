'use client';

import { useEffect, useRef } from 'react';

const steps = [
  {
    num: 1,
    title: 'Get Your API Key',
    desc: 'Sign up free, no credit card. Your key is ready in 30 seconds.',
    code: 'POST /v1/register\n{ "email": "you@co.com" }',
  },
  {
    num: 2,
    title: 'Send a Verification',
    desc: 'One call with license number and state. We handle the rest.',
    code: 'POST /v1/verify\n{ "license_number": "RN-284751",\n  "state": "MA" }',
  },
  {
    num: 3,
    title: 'Get Everything Back',
    desc: 'License status, NPI match, exclusion screening — one response, under 100ms.',
    code: '{ "status": "ACTIVE",\n  "exclusions": {\n    "oig": false, "sam": false\n  }}',
  },
];

export default function HowItWorks() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll('.reveal');
    if (!els) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.15 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-charcoal py-24 lg:py-32 section-divider" id="how-it-works">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <p className="text-emerald-brand font-mono text-sm uppercase tracking-widest mb-3">How It Works</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-white">Three steps. That&apos;s it.</h2>
        </div>

        {/* Desktop: horizontal timeline */}
        <div className="hidden lg:grid grid-cols-3 gap-0 relative">
          {/* Connecting line */}
          <div className="absolute top-8 left-[16.67%] right-[16.67%] h-px bg-gray-700" />

          {steps.map((step, i) => (
            <div key={i} className={`relative text-center px-8 reveal reveal-delay-${i + 1}`}>
              <div className="w-16 h-16 rounded-full bg-emerald-brand mx-auto mb-6 flex items-center justify-center relative z-10">
                <span className="text-white font-bold text-xl">{step.num}</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-5">{step.desc}</p>
              <div className="bg-charcoal-light rounded-xl p-4 text-left border border-gray-700/50">
                <pre className="text-xs font-mono text-gray-400 whitespace-pre-wrap"><code>{step.code}</code></pre>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: vertical timeline */}
        <div className="lg:hidden space-y-0 relative">
          <div className="absolute top-0 bottom-0 left-8 w-px bg-gray-700" />
          {steps.map((step, i) => (
            <div key={i} className={`relative pl-20 pb-12 reveal reveal-delay-${i + 1}`}>
              <div className="absolute left-[17px] w-10 h-10 rounded-full bg-emerald-brand flex items-center justify-center z-10">
                <span className="text-white font-bold text-sm">{step.num}</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-1">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-3">{step.desc}</p>
              <div className="bg-charcoal-light rounded-xl p-3 border border-gray-700/50">
                <pre className="text-xs font-mono text-gray-400 whitespace-pre-wrap"><code>{step.code}</code></pre>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
