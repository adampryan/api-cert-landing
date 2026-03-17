import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Terms of Service | API-Cert',
  description: 'API-Cert terms of service — usage terms for the license verification API.',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#0a1628]">
      <nav className="sticky top-0 z-50 bg-[#0a1628]/95 backdrop-blur border-b border-slate-800 px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <a href="/">
            <Image src="/logo-white.png" alt="API-Cert" width={160} height={40} className="h-8 w-auto" />
          </a>
          <span className="text-slate-500 text-sm hidden sm:inline">/</span>
          <span className="text-white text-sm font-medium hidden sm:inline">Terms of Service</span>
        </div>
        <div className="flex items-center gap-4">
          <a href="/docs" className="text-sm text-slate-300 hover:text-white transition-colors">Docs</a>
          <a href="/docs#register" className="text-sm bg-[#2563EB] text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">Get Free Key</a>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 pb-24">
        <h1 className="text-4xl font-bold text-white mb-2">Terms of Service</h1>
        <p className="text-slate-400 mb-12">Effective March 17, 2026</p>

        <div className="space-y-10 text-slate-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">1. Acceptance of Terms</h2>
            <p>
              By accessing or using the API-Cert API (&quot;Service&quot;), operated by OneWeek Labs
              (Somerset, MA), you agree to be bound by these Terms of Service. If you do not agree,
              do not use the Service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">2. Service Description</h2>
            <p>
              API-Cert provides a RESTful API for verifying healthcare professional licenses using
              publicly available data from state licensing boards and federal databases. The Service
              is provided on an &quot;as-is&quot; and &quot;as-available&quot; basis.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">3. API Keys and Accounts</h2>
            <p>
              You are responsible for safeguarding your API key and for all activity under your
              account. API keys are shown only once upon registration — store them securely. Do not
              share your API key publicly or embed it in client-side code.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">4. Free Tier Limitations</h2>
            <p>The free tier includes:</p>
            <ul className="list-disc list-inside space-y-2 ml-2 mt-2">
              <li>50 verification requests per calendar month.</li>
              <li>Rate limit of 10 requests per minute.</li>
              <li>Access to all API endpoints.</li>
            </ul>
            <p className="mt-3">
              Free tier access is intended for evaluation and low-volume use. We reserve the right
              to modify free tier limits at any time with reasonable notice.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">5. Rate Limits and Fair Use</h2>
            <p>
              All tiers are subject to rate limits as documented in our API documentation. You agree
              not to circumvent rate limits, use multiple accounts to exceed quotas, or engage in
              any activity that places an unreasonable burden on our infrastructure.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">6. Prohibited Use</h2>
            <p>You may not use the Service to:</p>
            <ul className="list-disc list-inside space-y-2 ml-2 mt-2">
              <li>Resell or redistribute API data without authorization.</li>
              <li>Attempt to reverse-engineer, scrape, or cache bulk data from the API.</li>
              <li>Use the Service for any unlawful purpose.</li>
              <li>Interfere with or disrupt the Service or its infrastructure.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">7. Termination</h2>
            <p>
              We reserve the right to suspend or terminate your API key and access to the Service
              at any time, without prior notice, for conduct that we determine violates these Terms,
              constitutes abusive usage, or is otherwise harmful to the Service or other users.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">8. Disclaimer of Warranties</h2>
            <p>
              The Service is provided &quot;as is&quot; without warranties of any kind, whether
              express or implied, including but not limited to implied warranties of merchantability,
              fitness for a particular purpose, and non-infringement. We do not warrant that the
              Service will be uninterrupted, error-free, or that the data returned will be complete
              or accurate.
            </p>
            <p className="mt-3">
              API-Cert is an informational tool. Verification results should be independently
              confirmed for critical decisions. We are not liable for actions taken based on API
              responses.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">9. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, OneWeek Labs shall not be liable for any
              indirect, incidental, special, consequential, or punitive damages, or any loss of
              profits or revenue, arising out of or related to your use of the Service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">10. Changes to Terms</h2>
            <p>
              We may update these Terms from time to time. Continued use of the Service after
              changes constitutes acceptance of the updated Terms. Material changes will be
              communicated via the email address associated with your account.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Contact</h2>
            <p>
              For questions about these Terms, contact us at{' '}
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
            <a href="/privacy" className="text-slate-400 hover:text-white text-sm transition-colors">Privacy</a>
            <a href="/docs" className="text-slate-400 hover:text-white text-sm transition-colors">Docs</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
