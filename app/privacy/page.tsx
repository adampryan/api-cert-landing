import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Privacy Policy | API-Cert',
  description: 'API-Cert privacy policy — how we handle your data.',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#0a1628]">
      <nav className="sticky top-0 z-50 bg-[#0a1628]/95 backdrop-blur border-b border-slate-800 px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <a href="/">
            <Image src="/logo-white.png" alt="API-Cert" width={160} height={40} className="h-8 w-auto" />
          </a>
          <span className="text-slate-500 text-sm hidden sm:inline">/</span>
          <span className="text-white text-sm font-medium hidden sm:inline">Privacy Policy</span>
        </div>
        <div className="flex items-center gap-4">
          <a href="/docs" className="text-sm text-slate-300 hover:text-white transition-colors">Docs</a>
          <a href="/docs#register" className="text-sm bg-[#2563EB] text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">Get Free Key</a>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 pb-24">
        <h1 className="text-4xl font-bold text-white mb-2">Privacy Policy</h1>
        <p className="text-slate-400 mb-12">Effective March 17, 2026</p>

        <div className="space-y-10 text-slate-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Overview</h2>
            <p>
              API-Cert is operated by OneWeek Labs, based in Somerset, MA. We are committed to
              protecting the privacy of our users and the individuals whose data passes through our
              system.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Data We Process</h2>
            <p className="mb-3">
              API-Cert processes <strong className="text-white">publicly available license verification data</strong> sourced
              from official state licensing boards, NPPES, OIG LEIE, SAM.gov, and the CMS Preclusion
              List. All data processed by API-Cert is already part of the public record.
            </p>
            <p>
              <strong className="text-white">No Protected Health Information (PHI) is transmitted, processed, or stored</strong> by
              API-Cert at any time. Our service verifies professional licensure status only and does
              not handle patient data or medical records.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Information We Collect</h2>
            <p className="mb-3">When you register for an API key, we collect:</p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li><strong className="text-white">Email address</strong> — used for account identification, key recovery, and service communications.</li>
              <li><strong className="text-white">Name and company</strong> (optional) — used to understand our user base.</li>
              <li><strong className="text-white">API usage data</strong> — request counts, endpoints called, timestamps, and error rates for billing, rate limiting, and service improvement.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">How We Use Your Information</h2>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>To provide and maintain the API-Cert service.</li>
              <li>To enforce rate limits and usage quotas.</li>
              <li>To communicate important service updates.</li>
              <li>To improve the reliability and performance of our API.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Data Sharing</h2>
            <p>
              We do not sell, rent, or share your personal information with third parties, except as
              required by law or as necessary to provide the service (e.g., payment processing via
              Stripe for paid tiers).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Data Retention</h2>
            <p>
              Account information is retained for the duration of your account. API usage logs are
              retained for up to 90 days. You may request deletion of your account and associated
              data at any time by contacting us.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Contact</h2>
            <p>
              For privacy-related inquiries, contact us at{' '}
              <a href="mailto:adam@api-cert.com" className="text-[#2563EB] hover:underline">adam@api-cert.com</a>.
            </p>
            <p className="mt-2 text-slate-400">
              API-Cert / OneWeek Labs<br />
              Somerset, MA
            </p>
          </section>
        </div>
      </main>

      <footer className="border-t border-slate-800 py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">&copy; 2026 API-Cert. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="/" className="text-slate-400 hover:text-white text-sm transition-colors">Home</a>
            <a href="/terms" className="text-slate-400 hover:text-white text-sm transition-colors">Terms</a>
            <a href="/docs" className="text-slate-400 hover:text-white text-sm transition-colors">Docs</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
