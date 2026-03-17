'use client';

import { useEffect, useRef } from 'react';

const providerTypes = ['RN', 'LPN', 'NP', 'PA', 'MD', 'DO'];

const features = [
  {
    icon: '🏥',
    title: 'All Provider Types, One Call',
    description: 'Verify any healthcare provider with a single API endpoint. Deepest coverage in New England, expanding nationally.',
    span: 'lg:col-span-2', // double-wide
    extra: (
      <div className="flex flex-wrap gap-2 mt-4">
        {providerTypes.map((type) => (
          <span
            key={type}
            className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-light text-emerald-brand"
          >
            {type}
          </span>
        ))}
      </div>
    ),
  },
  {
    icon: '🛡',
    title: 'Built-In Exclusion Screening',
    description: 'OIG LEIE, SAM.gov, and CMS Preclusion List checked automatically. No separate lookups, no extra cost.',
    span: 'lg:row-span-2', // tall
    extra: (
      <div className="flex flex-col gap-3 mt-4">
        {['OIG LEIE', 'SAM.gov', 'CMS Preclusion'].map((name) => (
          <div key={name} className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-emerald-brand/10 flex items-center justify-center">
              <svg className="w-3.5 h-3.5 text-emerald-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
            </div>
            <span className="text-sm font-medium text-charcoal">{name}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    icon: '🔑',
    title: 'Developer-First',
    description: 'Get a free API key instantly. Standard REST, JSON responses, Swagger docs. Integrate in minutes, not weeks.',
    span: '',
  },
  {
    icon: '⚡',
    title: 'Sub-100ms Responses',
    description: 'Pre-indexed data, not live scraping. Fast enough for real-time credentialing workflows and intake forms.',
    span: '',
  },
  {
    icon: '📦',
    title: 'Bulk CSV Verification',
    description: 'Upload a CSV or send up to 100 providers in a single API call. Perfect for onboarding and re-credentialing.',
    span: '',
  },
  {
    icon: '📍',
    title: 'Built in Massachusetts',
    description: 'Built in Somerset, MA by a healthcare data analyst. 14 states live today, with new states added weekly.',
    span: '',
  },
];

export default function Features() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll('.reveal');
    if (!els) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-surface" id="features">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <p className="text-emerald-brand font-mono text-sm uppercase tracking-widest mb-3">Features</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-charcoal">Replace Four Systems With One</h2>
          <p className="text-gray-500 text-lg mt-4 max-w-2xl mx-auto">
            License verification, exclusion screening, and compliance checks — unified for credentialing teams and developers
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className={`bg-white border border-border rounded-2xl p-7 card-hover reveal reveal-delay-${i + 1} ${feature.span}`}
            >
              <span className="text-2xl block mb-3">{feature.icon}</span>
              <h3 className="text-lg font-semibold text-charcoal mb-1">{feature.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
              {feature.extra}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
