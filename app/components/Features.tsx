export default function Features() {
  const features = [
    {
      icon: '✓',
      iconBg: 'bg-green-100',
      iconColor: 'text-green-600',
      title: 'All 50 States',
      description: 'Every state nursing and provider board covered. Plus DC, Puerto Rico, and US territories.',
    },
    {
      icon: '⚡',
      iconBg: 'bg-yellow-100',
      iconColor: 'text-yellow-600',
      title: 'Sub-100ms',
      description: 'Queries cached locally, not scraped live. Lightning-fast responses for real-time workflows.',
    },
    {
      icon: '🛡',
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600',
      title: 'Exclusion Checks',
      description: 'OIG LEIE, SAM.gov, and CMS Preclusion List checked automatically with every query.',
    },
    {
      icon: '📦',
      iconBg: 'bg-purple-100',
      iconColor: 'text-purple-600',
      title: 'Bulk Verification',
      description: 'Upload a CSV or send up to 100 licenses in a single API call. Perfect for onboarding.',
    },
    {
      icon: '🔄',
      iconBg: 'bg-cyan-100',
      iconColor: 'text-cyan-600',
      title: 'Daily Updates',
      description: 'Fresh data from official government sources every 24 hours. Never work with stale data.',
    },
    {
      icon: '🔑',
      iconBg: 'bg-orange-100',
      iconColor: 'text-orange-600',
      title: 'Simple Auth',
      description: 'One API key, standard REST, JSON responses. Integrate in minutes, not days.',
    },
  ];

  return (
    <section className="py-20 bg-slate-50" id="features">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Everything You Need
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Built for healthcare compliance teams who need accurate, fast license verification
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-md hover:border-slate-300 transition-all duration-200"
            >
              <div className={`w-12 h-12 ${feature.iconBg} rounded-lg flex items-center justify-center mb-4`}>
                <span className={`text-xl ${feature.iconColor}`}>{feature.icon}</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-slate-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
