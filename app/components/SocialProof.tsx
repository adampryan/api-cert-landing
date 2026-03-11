export default function SocialProof() {
  const sources = [
    { name: 'NPPES', description: 'National Provider Registry' },
    { name: 'OIG LEIE', description: 'Exclusion Database' },
    { name: 'SAM.gov', description: 'Federal Exclusions' },
    { name: 'CMS', description: 'Preclusion List' },
    { name: 'State Boards', description: '50 State Registries' },
  ];

  return (
    <section className="bg-slate-50 py-8 border-y border-slate-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <p className="text-slate-500 text-sm font-medium uppercase tracking-wider mb-6">
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
