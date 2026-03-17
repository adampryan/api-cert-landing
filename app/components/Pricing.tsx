export default function Pricing() {
  const plans = [
    {
      name: 'Free',
      price: '$0',
      period: '',
      description: 'Try it out',
      features: [
        '50 verifications/month',
        '10 requests/minute',
        'All 50 states',
        'Community support',
      ],
      cta: 'Get Free API Key',
      href: '/docs#register',
      featured: false,
    },
    {
      name: 'Starter',
      price: '$99',
      period: '/mo',
      description: 'For small agencies',
      features: [
        '500 verifications/month',
        '60 requests/minute',
        'Email support',
        'Bulk CSV upload',
        'Standard SLA',
      ],
      cta: 'Start Free Trial',
      href: '/docs#register',
      featured: false,
    },
    {
      name: 'Growth',
      price: '$299',
      period: '/mo',
      description: 'Most Popular',
      features: [
        '2,000 verifications/month',
        '120 requests/minute',
        'Priority email support',
        'Bulk CSV upload',
        '99.9% uptime SLA',
      ],
      cta: 'Start Free Trial',
      href: '/docs#register',
      featured: true,
    },
    {
      name: 'Agency',
      price: '$799',
      period: '/mo',
      description: 'For large staffing firms',
      features: [
        '10,000 verifications/month',
        '300 requests/minute',
        'Phone & email support',
        'Bulk CSV upload',
        'Webhook notifications',
        '99.95% uptime SLA',
      ],
      cta: 'Start Free Trial',
      href: '/docs#register',
      featured: false,
    },
  ];

  return (
    <section className="py-24 bg-white" id="pricing">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#111827] mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Start with a free trial. No credit card required.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-white rounded-2xl p-8 ${
                plan.featured
                  ? 'ring-2 ring-[#059669] shadow-xl scale-105'
                  : 'border border-[#E5E7EB] shadow-sm'
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#059669] text-white text-sm font-medium px-4 py-1 rounded-full">
                  Most Popular
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold text-[#111827] mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-500 text-sm">{plan.description}</p>
              </div>

              <div className="text-center mb-6">
                <span className="text-4xl font-bold text-[#111827]">{plan.price}</span>
                <span className="text-gray-500">{plan.period}</span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-[#059669] flex-shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={plan.href}
                className={`block w-full text-center py-3 px-6 rounded-xl font-semibold transition-colors ${
                  plan.featured
                    ? 'bg-[#D97706] text-white hover:bg-amber-600'
                    : plan.name === 'Free'
                      ? 'border-2 border-[#059669] text-[#059669] hover:bg-emerald-50'
                      : 'bg-[#D97706] text-white hover:bg-amber-600'
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Enterprise */}
        <div className="mt-16 max-w-3xl mx-auto">
          <div className="bg-[#111827] rounded-2xl p-10 text-center">
            <h3 className="text-2xl font-bold text-white mb-3">Enterprise</h3>
            <p className="text-gray-400 mb-5">
              Unlimited verifications, custom SLA, and white-glove onboarding
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500 mb-8">
              <span>Unlimited volume</span>
              <span>Custom rate limits</span>
              <span>Dedicated support</span>
              <span>SSO & SAML</span>
            </div>
            <a
              href="mailto:adam@oneweeklabs.com?subject=API-Cert%20Enterprise%20Inquiry"
              className="inline-flex items-center justify-center px-8 py-3 border border-gray-600 text-white font-semibold rounded-xl hover:bg-gray-800 transition-colors"
            >
              Contact Sales
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
