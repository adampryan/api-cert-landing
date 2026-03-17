export default function SocialProof() {
  const stats = [
    { value: '14', label: 'States Live' },
    { value: 'Weekly', label: 'Data Refresh' },
    { value: '3', label: 'Exclusion Lists' },
    { value: '<100ms', label: 'Response Time' },
  ];

  const sources = [
    { name: 'NPPES', description: 'National Provider Registry' },
    { name: 'OIG LEIE', description: 'Exclusion Database' },
    { name: 'SAM.gov', description: 'Federal Exclusions' },
    { name: 'CMS', description: 'Preclusion List' },
    { name: 'State Boards', description: 'Official Registries' },
  ];

  return (
    <section className="bg-slate-50 py-10 border-y border-slate-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-[#2563EB]">{stat.value}</div>
              <div className="text-sm text-slate-500 font-medium mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Data sources */}
        <div className="flex flex-col items-center">
          <p className="text-slate-500 text-sm font-medium uppercase tracking-wider mb-4">
            Trusted data from
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 sm:gap-x-12">
            {sources.map((source) => (
              <div key={source.name} className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#2563EB] rounded-full" />
                <span className="text-slate-700 font-semibold">{source.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
