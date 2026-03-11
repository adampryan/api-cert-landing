'use client';

import { useState } from 'react';

const faqs = [
  {
    question: 'What license types do you cover?',
    answer:
      'We verify RN (Registered Nurse), LPN (Licensed Practical Nurse), NP (Nurse Practitioner), PA (Physician Assistant), MD (Medical Doctor), and DO (Doctor of Osteopathic Medicine) licenses. Additional license types are being added regularly.',
  },
  {
    question: 'How fresh is the data?',
    answer:
      'Our database is updated daily through automated ingestion from official state board registries and federal databases. This ensures you always have access to the most current license status information.',
  },
  {
    question: 'Do you cover all 50 states?',
    answer:
      'Yes. We cover all 50 US states, plus Washington DC, Puerto Rico, Guam, US Virgin Islands, and other US territories. Every state nursing and provider board is included.',
  },
  {
    question: 'Is this HIPAA compliant?',
    answer:
      'We verify publicly available license information only. No Protected Health Information (PHI) is transmitted or stored. License verification data is public record and does not fall under HIPAA regulations.',
  },
  {
    question: 'Can I verify in bulk?',
    answer:
      'Yes. You can upload a CSV file through our dashboard or send up to 100 license verification requests in a single API call. This is perfect for onboarding multiple providers or periodic re-verification.',
  },
  {
    question: "What if a license isn't found?",
    answer:
      'If we cannot find a match in the state registry, we return a "not_found" status along with the query latency. We also attempt a secondary lookup through NPPES as a fallback for provider identification.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 bg-white" id="faq">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Everything you need to know about API-Cert
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="divide-y divide-slate-200">
            {faqs.map((faq, index) => (
              <div key={index} className="py-4">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="flex w-full items-center justify-between text-left"
                >
                  <span className="text-lg font-medium text-slate-900 pr-8">
                    {faq.question}
                  </span>
                  <span className="flex-shrink-0">
                    <svg
                      className={`w-5 h-5 text-slate-500 transition-transform duration-200 ${
                        openIndex === index ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-200 ${
                    openIndex === index ? 'max-h-96 pt-4' : 'max-h-0'
                  }`}
                >
                  <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-slate-600 mb-4">Still have questions?</p>
            <a
              href="/signup"
              className="inline-flex items-center text-[#2563EB] font-medium hover:underline"
            >
              Contact our team
              <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
