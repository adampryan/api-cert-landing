export default function Features() {
  const features = [
    {
      icon: '🏥',
      iconBg: 'bg-emerald-50',
      iconColor: 'text-emerald-600',
      title: 'All Provider Types, One Call',
      description: 'RN, LPN, NP, PA, MD, and DO — verify any healthcare provider with a single API endpoint. Deepest coverage in New England, expanding nationally.',
    },
    {
      icon: '🛡',
      iconBg: 'bg-teal-50',
      iconColor: 'text-teal-600',
      title: 'Built-In Exclusion Screening',
      description: 'OIG LEIE, SAM.gov, and CMS Preclusion List checked automatically. No separate lookups, no extra cost.',
    },
    {
      icon: '🔑',
      iconBg: 'bg-amber-50',
      iconColor: 'text-amber-600',
      title: 'Developer-First, Self-Service',
      description: 'Get a free API key instantly. Standard REST, JSON responses, Swagger docs. Integrate in minutes, not weeks.',
    },
    {
      icon: '⚡',
      iconBg: 'bg-yellow-50',
      iconColor: 'text-yellow-600',
      title: 'Sub-100ms Responses',
      description: 'Pre-indexed data, not live scraping. Fast enough for real-time credentialing workflows and intake forms.',
    },
    {
      icon: '📦',
      iconBg: 'bg-emerald-50',
      iconColor: 'text-emerald-600',
      title: 'Bulk CSV Verification',
      description: 'Upload a CSV or send up to 100 providers in a single API call. Perfect for onboarding and re-credentialing.',
    },
    {
      icon: '📍',
      iconBg: 'bg-teal-50',
      iconColor: 'text-teal-600',
      title: 'Built in Massachusetts',
      description: 'Built in Somerset, MA by a healthcare data analyst. 14 states live today, with new states added weekly. Real data, real coverage, growing every week.',
    },
  ];

  return (
    <section className="py-24 bg-[#ECFDF5]" id="features">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#111827] mb-4">
            Replace Four Systems With One
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            License verification, exclusion screening, and compliance checks — unified for credentialing teams and developers
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-200"
            >
              <div className={`w-12 h-12 ${feature.iconBg} rounded-xl flex items-center justify-center mb-5`}>
                <span className={`text-xl ${feature.iconColor}`}>{feature.icon}</span>
              </div>
              <h3 className="text-lg font-semibold text-[#111827] mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-500 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
