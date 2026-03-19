export default function Pricing() {
  const plans = [
    {
      name: 'Verify',
      price: '$99',
      period: '/mo',
      description: 'API access + portal lookup',
      features: [
        '500 verifications/month',
        'API access + portal',
        'All automated checks',
        'Email support',
        'Standard SLA',
      ],
      cta: 'Start Free Trial',
      href: '/portal/login',
      featured: false,
    },
    {
      name: 'Track',
      price: '$299',
      period: '/mo',
      description: 'Most Popular',
      features: [
        'Verify plan features',
        '50 active files',
        'Workflow manager',
        'AI outreach drafts',
        'Priority support',
      ],
      cta: 'Start Free Trial',
      href: '/portal/login',
      featured: true,
    },
    {
      name: 'Manage',
      price: '$599',
      period: '/mo',
      description: 'For larger teams',
      features: [
        'Track plan features',
        '200 active files',
        'Committee packets',
        'Team features',
        'Advanced reporting',
        '99.9% uptime SLA',
      ],
      cta: 'Start Free Trial',
      href: '/portal/login',
      featured: false,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Unlimited scale',
      features: [
        'Unlimited files',
        'Custom integrations',
        'White-label option',
        'Dedicated support',
        'Custom SLA',
        'SSO & SAML',
      ],
      cta: 'Contact Sales',
      href: 'mailto:adam@oneweeklabs.com?subject=API-Cert%20Enterprise',
      featured: false,
    },
  ];

  return (
    <section className="py-20 bg-slate-50" id="pricing">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
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
                  : 'border border-slate-200 shadow-sm'
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#059669] text-white text-sm font-medium px-4 py-1 rounded-full">
                  Most Popular
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-slate-500 text-sm">{plan.description}</p>
              </div>

              <div className="text-center mb-6">
                <span className="text-4xl font-bold text-slate-900">{plan.price}</span>
                <span className="text-slate-500">{plan.period}</span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5"
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
                    <span className="text-slate-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={plan.href}
                className={`block w-full text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
                  plan.featured
                    ? 'bg-[#059669] text-white hover:bg-emerald-700'
                    : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Free Trial Notice */}
        <div className="mt-12 max-w-3xl mx-auto text-center">
          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-emerald-900 mb-2">Start with a 14-day free trial</h3>
            <p className="text-emerald-700 mb-4">
              Try any plan free for 14 days. No credit card required. Cancel anytime.
            </p>
            <div className="text-sm text-emerald-600">
              All plans include the same verification features. Higher tiers add workflow management and team features.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
