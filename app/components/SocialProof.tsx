'use client';

import { useEffect, useRef, useState } from 'react';

function AnimatedNumber({ target, suffix = '', prefix = '' }: { target: number; suffix?: string; prefix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 1200;
          const start = performance.now();
          const animate = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{prefix}{count}{suffix}</span>;
}

const dataSources = ['NPPES', 'OIG LEIE', 'SAM.gov', 'CMS', 'MA Board', 'RI Board', 'CT Board', 'State Boards'];

const metrics = [
  { value: 100, prefix: '<', suffix: 'ms', label: 'Average Response' },
  { value: 14, prefix: '', suffix: '', label: 'States with Board Data' },
  { value: 6, prefix: '', suffix: 'M+', label: 'License Records' },
  { value: 99, prefix: '', suffix: '.9%', label: 'Uptime' },
];

export default function SocialProof() {
  return (
    <section className="relative bg-surface py-20">
      {/* Data sources marquee */}
      <div className="border-b border-border pb-8 mb-12">
        <p className="text-center text-xs font-mono text-gray-400 uppercase tracking-widest mb-6">Trusted Data Sources</p>
        <div className="overflow-hidden max-w-5xl mx-auto">
          <div className="marquee-track">
            {[...dataSources, ...dataSources].map((source, i) => (
              <div key={i} className="flex items-center gap-3 px-6 whitespace-nowrap">
                <div className="w-2 h-2 rounded-full bg-emerald-brand/40" />
                <span className="text-sm font-medium text-gray-500">{source}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Metric cards */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {metrics.map((m, i) => (
            <div
              key={i}
              className="border border-border rounded-2xl p-6 lg:p-8 text-center hover:border-emerald-brand/30 transition-colors"
            >
              <p className="text-4xl lg:text-5xl font-bold text-charcoal mb-2 font-mono">
                <AnimatedNumber target={m.value} suffix={m.suffix} prefix={m.prefix} />
              </p>
              <p className="text-sm text-gray-500">{m.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
