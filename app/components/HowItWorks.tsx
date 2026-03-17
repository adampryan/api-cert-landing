export default function HowItWorks() {
  const steps = [
    {
      number: '1',
      title: 'Get Your Free API Key',
      description: 'Instant, self-service signup. No sales calls, no contracts. Start making requests in minutes.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
        </svg>
      ),
    },
    {
      number: '2',
      title: 'Send a Verification Request',
      description: 'POST a provider\'s name, state, and license type. Works for any provider — RN, MD, PA, DO, and more.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
      ),
    },
    {
      number: '3',
      title: 'Get Everything in One Response',
      description: 'License status, expiration, disciplinary flags, and OIG/SAM/CMS exclusion checks — all in a single JSON response. No more checking four systems.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-24 bg-white" id="how-it-works">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#111827] mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            From signup to complete provider credentialing in three steps
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-16">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connector line (hidden on mobile, shown on md+) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[calc(50%+4rem)] w-[calc(100%-8rem)] h-px bg-[#E5E7EB]" />
              )}

              <div className="flex flex-col items-center text-center">
                {/* Step number circle */}
                <div className="relative mb-8">
                  <div className="w-24 h-24 bg-[#ECFDF5] rounded-2xl flex items-center justify-center text-[#059669]">
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#059669] rounded-xl flex items-center justify-center text-white font-bold text-sm">
                    {step.number}
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-[#111827] mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-500 max-w-xs leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
