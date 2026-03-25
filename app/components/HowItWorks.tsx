'use client';

import { useEffect, useRef } from 'react';

const steps = [
  {
    num: 1,
    title: 'Add Your Providers',
    desc: 'Upload CSV or add manually. Each provider gets a credentialing file with 18 standard verification tasks.',
    code: 'POST /portal/workflow/new\n{ "provider_name": "Dr. Smith",\n  "license_type": "MD",\n  "state": "MA" }',
  },
  {
    num: 2,
    title: 'Instant Verification',
    desc: '9 automated checks + optional NPDB complete in seconds: license status, exclusions, DEA, disciplinary actions, and more.',
    code: '✓ License: ACTIVE\n✓ OIG: Clear\n✓ SAM: Clear\n✓ CMS: Clear\n✓ Disciplinary: Clean',
  },
  {
    num: 3,
    title: 'AI Drafts the Rest',
    desc: 'For education, training, references — AI generates professional verification emails automatically.',
    code: 'AI → Professional email\n"Dear Registrar,\nWe are credentialing\nDr. Smith and require\neducation verification..."',
  },
  {
    num: 4,
    title: 'Track & Complete',
    desc: 'Dashboard shows exactly what\'s outstanding. Follow-ups tracked automatically.',
    code: 'Dashboard:\n• 12/18 tasks complete\n• 2 pending responses\n• 1 overdue follow-up',
  },
  {
    num: 5,
    title: 'Generate Packet',
    desc: 'One-click committee-ready PDF with all verifications, flagged issues, and compliance summary.',
    code: '📄 Committee Packet\n✓ All verifications\n⚠ Issues flagged\n📊 Compliance summary',
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
          <h2 className="text-3xl lg:text-4xl font-bold text-white">From Provider to Committee Packet</h2>
        </div>

        {/* Desktop: horizontal timeline */}
        <div className="hidden lg:grid grid-cols-5 gap-0 relative">
          {/* Connecting line */}
          <div className="absolute top-8 left-[10%] right-[10%] h-px bg-gray-700" />

          {steps.map((step, i) => (
            <div key={i} className={`relative text-center px-4 reveal reveal-delay-${i + 1}`}>
              <div className="w-14 h-14 rounded-full bg-emerald-brand mx-auto mb-4 flex items-center justify-center relative z-10">
                <span className="text-white font-bold text-lg">{step.num}</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
              <p className="text-gray-400 text-xs leading-relaxed mb-4">{step.desc}</p>
              <div className="bg-charcoal-light rounded-lg p-3 text-left border border-gray-700/50">
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
