import Image from 'next/image';

export default function Footer() {
  const links = [
    { name: 'Docs', href: '/docs' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact', href: '/signup' },
    { name: 'Status', href: '/status' },
  ];

  return (
    <footer className="bg-[#111827] py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo and company */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 bg-[#059669] rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-sm">AC</span>
              </div>
              <span className="text-white font-semibold text-lg">api-cert.com</span>
            </div>
            <p className="text-gray-500 text-sm">Built by OneWeek Labs</p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-500 hover:text-[#059669] transition-colors text-sm"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Copyright */}
          <p className="text-gray-600 text-sm">
            &copy; 2026 API-Cert. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
