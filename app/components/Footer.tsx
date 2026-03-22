const columns = [
  {
    title: 'Product',
    links: [
      { name: 'Features', href: '/#features' },
      { name: 'Pricing', href: '/#pricing' },
      { name: 'ROI Calculator', href: '/roi' },
      { name: 'API Docs', href: '/docs' },
      { name: 'How It Works', href: '/#how-it-works' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { name: 'Blog', href: '/blog' },
      { name: 'Documentation', href: '/docs' },
      { name: 'API Status', href: 'https://api.api-cert.com/health' },
      { name: 'FAQ', href: '/#faq' },
    ],
  },
  {
    title: 'Company',
    links: [
      { name: 'About', href: 'mailto:adam@oneweeklabs.com?subject=About%20API-Cert' },
      { name: 'Contact', href: 'mailto:adam@oneweeklabs.com' },
      { name: 'OneWeek Labs', href: 'https://oneweeklabs.com' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Compliance & Security', href: '/compliance' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal">
      {/* Emerald accent line */}
      <div className="h-px bg-gradient-to-r from-transparent via-emerald-brand to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-16 mb-12">
          {columns.map((col) => (
            <div key={col.title}>
              <p className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-4">{col.title}</p>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-sm text-gray-500 hover:text-white transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-emerald-brand flex items-center justify-center">
              <span className="text-white font-bold text-xs">AC</span>
            </div>
            <span className="text-gray-400 text-sm">api-cert.com</span>
          </div>
          <p className="text-gray-600 text-sm">
            &copy; 2026 API-Cert. Built by OneWeek Labs.
          </p>
        </div>
      </div>
    </footer>
  );
}
