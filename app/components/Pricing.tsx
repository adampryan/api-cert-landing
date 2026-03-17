'use client';

import { useEffect, useRef } from 'react';

const plans = [
  { name: 'Free', price: '$0', period: '', featured: false },
  { name: 'Starter', price: '$99', period: '/mo', featured: false },
  { name: 'Growth', price: '$299', period: '/mo', featured: true },
  { name: 'Agency', price: '$799', period: '/mo', featured: false },
];

type FeatureValue = string | boolean;

const rows: { label: string; values: FeatureValue[] }[] = [
  { label: 'Verifications/mo', values: ['50', '500', '2,000', '10,000'] },
  { label: 'Requests/min', values: ['10', '60', '120', '300'] },
  { label: 'Support', values: ['Community', 'Email', 'Priority Email', 'Phone & Email'] },
  { label: 'Bulk CSV Upload', values: [false, true, true, true] },
  { label: 'Uptime SLA', values: [false, 'Standard', '99.9%', '99.95%'] },
  { label: 'Webhooks', values: [false, false, false, true] },
];

export default function Pricing() {
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
    <section ref={sectionRef} className="py-24 lg:py-32 bg-white" id="pricing">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <p className="text-emerald-brand font-mono text-sm uppercase tracking-widest mb-3">Pricing</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-charcoal">Simple, Transparent Pricing</h2>
          <p className="text-gray-500 text-lg mt-4">Start free. No credit card required.</p>
        </div>

        {/* Desktop: comparison table */}
        <div className="hidden lg:block reveal reveal-delay-1">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="text-left py-4 px-6 w-48" />
                  {plans.map((plan) => (
                    <th
                      key={plan.name}
                      className={`text-center py-6 px-6 ${plan.featured ? 'pricing-featured-col rounded-t-2xl' : ''}`}
                    >
                      {plan.featured && (
                        <span className="inline-block bg-emerald-brand text-white text-xs font-medium px-3 py-1 rounded-full mb-3">
                          Most Popular
                        </span>
                      )}
                      <p className="text-lg font-semibold text-charcoal">{plan.name}</p>
                      <p className="mt-1">
                        <span className="text-3xl font-bold text-charcoal">{plan.price}</span>
                        <span className="text-gray-500 text-sm">{plan.period}</span>
                      </p>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr key={row.label} className={i % 2 === 0 ? 'bg-surface/50' : ''}>
                    <td className="py-4 px-6 text-sm font-medium text-charcoal">{row.label}</td>
                    {row.values.map((val, j) => (
                      <td
                        key={j}
                        className={`py-4 px-6 text-center text-sm ${plans[j].featured ? 'pricing-featured-col' : ''}`}
                      >
                        {val === true ? (
                          <svg className="w-5 h-5 text-emerald-brand mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                        ) : val === false ? (
                          <span className="text-gray-300">&mdash;</span>
                        ) : (
                          <span className="text-gray-600">{val}</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
                {/* CTA row */}
                <tr>
                  <td className="py-6 px-6" />
                  {plans.map((plan) => (
                    <td key={plan.name} className={`py-6 px-6 text-center ${plan.featured ? 'pricing-featured-col rounded-b-2xl' : ''}`}>
                      <a
                        href="/docs#register"
                        className={`inline-block px-6 py-2.5 rounded-lg font-semibold text-sm transition-colors ${
                          plan.featured
                            ? 'bg-amber-brand text-white hover:bg-amber-brand/90'
                            : plan.name === 'Free'
                              ? 'border-2 border-emerald-brand text-emerald-brand hover:bg-emerald-light'
                              : 'bg-amber-brand text-white hover:bg-amber-brand/90'
                        }`}
                      >
                        {plan.name === 'Free' ? 'Get Free Key' : 'Start Free Trial'}
                      </a>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile: stacked cards */}
        <div className="lg:hidden grid sm:grid-cols-2 gap-6">
          {plans.map((plan, planIdx) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-6 reveal reveal-delay-${planIdx + 1} ${
                plan.featured
                  ? 'ring-2 ring-emerald-brand shadow-xl bg-white'
                  : 'border border-border bg-white'
              }`}
            >
              {plan.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-brand text-white text-xs font-medium px-3 py-1 rounded-full">
                  Most Popular
                </span>
              )}
              <div className="text-center mb-4">
                <p className="text-lg font-semibold text-charcoal">{plan.name}</p>
                <p className="mt-1">
                  <span className="text-3xl font-bold text-charcoal">{plan.price}</span>
                  <span className="text-gray-500 text-sm">{plan.period}</span>
                </p>
              </div>
              <ul className="space-y-2 mb-6">
                {rows.map((row, i) => {
                  const val = row.values[planIdx];
                  if (val === false) return null;
                  return (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                      <svg className="w-4 h-4 text-emerald-brand flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      {row.label}: {val === true ? 'Yes' : val}
                    </li>
                  );
                })}
              </ul>
              <a
                href="/docs#register"
                className={`block w-full text-center py-2.5 rounded-lg font-semibold text-sm transition-colors ${
                  plan.featured
                    ? 'bg-amber-brand text-white hover:bg-amber-brand/90'
                    : plan.name === 'Free'
                      ? 'border-2 border-emerald-brand text-emerald-brand hover:bg-emerald-light'
                      : 'bg-amber-brand text-white hover:bg-amber-brand/90'
                }`}
              >
                {plan.name === 'Free' ? 'Get Free Key' : 'Start Free Trial'}
              </a>
            </div>
          ))}
        </div>

        {/* Enterprise callout */}
        <div className="mt-16 bg-charcoal rounded-2xl p-8 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-6 reveal reveal-delay-2">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">Enterprise</h3>
            <p className="text-gray-400">
              Unlimited verifications, custom SLA, dedicated support, and white-glove onboarding.
            </p>
          </div>
          <a
            href="mailto:adam@oneweeklabs.com?subject=API-Cert%20Enterprise%20Inquiry"
            className="bg-amber-brand hover:bg-amber-brand/90 text-white px-8 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap"
          >
            Contact Sales
          </a>
        </div>
      </div>
    </section>
  );
}
