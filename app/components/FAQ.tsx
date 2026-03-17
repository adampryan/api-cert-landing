'use client';

import { useState } from 'react';

const categories = [
  {
    title: 'Coverage & Data',
    questions: [
      {
        q: 'What license types do you cover?',
        a: 'We verify RN, LPN, NP, PA, MD, and DO licenses. Additional license types are being added regularly.',
      },
      {
        q: 'How fresh is the data?',
        a: 'Our database is updated weekly through automated ingestion from official state board registries and federal databases.',
      },
      {
        q: 'Do you cover all 50 states?',
        a: 'We currently have deep board-level data for 14 states with a focus on New England (MA, RI, CT). NPI and exclusion screening covers all 50 states. New states are added weekly.',
      },
    ],
  },
  {
    title: 'Compliance & Security',
    questions: [
      {
        q: 'Is this HIPAA compliant?',
        a: 'We verify publicly available license information only. No Protected Health Information (PHI) is transmitted or stored. License verification data is public record.',
      },
      {
        q: 'What exclusion lists do you check?',
        a: 'Every verification automatically checks OIG LEIE, SAM.gov, and CMS Preclusion List — no extra cost or separate API calls needed.',
      },
    ],
  },
  {
    title: 'Using the API',
    questions: [
      {
        q: 'Can I verify in bulk?',
        a: 'Yes. Upload a CSV or send up to 100 providers in a single API call. Perfect for onboarding and re-credentialing.',
      },
      {
        q: "What if a license isn't found?",
        a: 'We return a "not_found" status along with query latency. We also attempt a secondary lookup through NPPES as a fallback.',
      },
    ],
  },
];

export default function FAQ() {
  const [openKey, setOpenKey] = useState<string | null>('0-0');

  return (
    <section className="py-24 lg:py-32 bg-surface" id="faq">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-emerald-brand font-mono text-sm uppercase tracking-widest mb-3">FAQ</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-charcoal">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-10">
          {categories.map((cat, ci) => (
            <div key={ci}>
              <p className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-4">{cat.title}</p>
              <div className="border-t border-border">
                {cat.questions.map((item, qi) => {
                  const key = `${ci}-${qi}`;
                  const isOpen = openKey === key;
                  return (
                    <div key={key} className="border-b border-border">
                      <button
                        onClick={() => setOpenKey(isOpen ? null : key)}
                        className="flex w-full items-center justify-between py-5 text-left group"
                      >
                        <span className="text-base font-medium text-charcoal pr-8 group-hover:text-emerald-brand transition-colors">
                          {item.q}
                        </span>
                        <span className="flex-shrink-0 w-6 h-6 rounded-full border border-border flex items-center justify-center text-gray-400 group-hover:border-emerald-brand group-hover:text-emerald-brand transition-colors">
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                            {isOpen ? (
                              <path d="M5 12h14" />
                            ) : (
                              <>
                                <path d="M12 5v14" />
                                <path d="M5 12h14" />
                              </>
                            )}
                          </svg>
                        </span>
                      </button>
                      <div className={`faq-content ${isOpen ? 'open' : ''}`}>
                        <div>
                          <p className="text-gray-500 leading-relaxed pb-5">{item.a}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500 mb-3">Still have questions?</p>
          <a
            href="mailto:adam@oneweeklabs.com?subject=API-Cert%20Question"
            className="inline-flex items-center gap-1 text-emerald-brand font-medium hover:underline"
          >
            Contact our team
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
