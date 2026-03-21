import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Footer from '../../components/Footer';

export const metadata: Metadata = {
  title: "How to Verify a Nursing License in Massachusetts | API-Cert",
  description: "Complete guide to verifying RN and LPN licenses through the Massachusetts Board of Registration in Nursing. Includes manual steps, common pitfalls, and automation options.",
  keywords: "Massachusetts nursing license verification, RN license verification MA, LPN license check Massachusetts, Massachusetts Board of Registration in Nursing"
};

export default function MassachusettsNursingLicenseVerification() {
  return (
    <main className="min-h-screen">
      {/* Nav */}
      <nav className="bg-charcoal sticky top-0 z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/">
            <Image src="/logo-white.png" alt="API-Cert" width={160} height={40} className="h-8 w-auto" />
          </Link>
          <div className="hidden md:flex items-center gap-6">
            <Link href="/blog" className="text-sm text-slate-300 hover:text-white transition-colors">Blog</Link>
            <Link href="/roi" className="text-sm text-slate-300 hover:text-white transition-colors">ROI Calculator</Link>
            <Link href="/#pricing" className="text-sm text-slate-300 hover:text-white transition-colors">Pricing</Link>
            <Link href="/docs" className="text-sm text-slate-300 hover:text-white transition-colors">Docs</Link>
            <Link href="https://api.api-cert.com/portal/signup" className="text-sm bg-emerald-brand text-white px-4 py-2 rounded-lg hover:bg-teal-brand transition-colors">Sign Up</Link>
          </div>
        </div>
      </nav>

      {/* Breadcrumb and header */}
      <section className="bg-surface py-12">
        <div className="max-w-4xl mx-auto px-6">
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/blog" className="hover:text-emerald-brand">Blog</Link>
            <span className="mx-2">→</span>
            <span>Massachusetts Nursing License Verification</span>
          </nav>
          
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
              MA
            </span>
            <time className="text-sm text-gray-500">March 15, 2026</time>
            <span className="text-sm text-gray-500">8 min read</span>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold text-charcoal mb-6">
            How to Verify a Nursing License in Massachusetts
          </h1>
          
          <p className="text-xl text-gray-600 leading-relaxed">
            Whether you're a healthcare organization conducting pre-employment screening or verifying current staff credentials, knowing how to properly verify nursing licenses in Massachusetts is critical for compliance and patient safety.
          </p>
        </div>
      </section>

      {/* Article content */}
      <article className="max-w-4xl mx-auto px-6 py-12 prose prose-lg prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-charcoal mb-4">Why License Verification Matters</h2>
        
        <p>
          Massachusetts healthcare facilities are legally required to verify that all nursing staff hold current, valid licenses before allowing them to practice. The consequences of employing unlicensed or sanctioned practitioners include:
        </p>
        
        <ul>
          <li><strong>Legal liability:</strong> Facilities can face lawsuits and regulatory action</li>
          <li><strong>Financial penalties:</strong> CMS may deny reimbursement for services provided by unverified staff</li>
          <li><strong>Accreditation risks:</strong> Joint Commission and other accreditors require robust credentialing processes</li>
          <li><strong>Patient safety concerns:</strong> Unlicensed or sanctioned providers pose direct risks to patient care</li>
        </ul>

        <h2 className="text-2xl font-bold text-charcoal mb-4 mt-8">Manual Verification Process</h2>

        <h3 className="text-xl font-semibold text-charcoal mb-3">Step 1: Access the Massachusetts Board Portal</h3>
        
        <p>
          Navigate to the official Massachusetts Board of Registration in Nursing verification portal at <strong>mass.gov/orgs/board-of-registration-in-nursing</strong>. Look for the "License Verification" or "License Lookup" section.
        </p>

        <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 my-6">
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-amber-600 text-sm">⚠️</span>
            </div>
            <div>
              <p className="font-medium text-amber-800 mb-2">Important Note</p>
              <p className="text-amber-700 text-sm">
                The Massachusetts board website can be slow during peak hours. Plan for potential delays when conducting time-sensitive verifications.
              </p>
            </div>
          </div>
        </div>

        <h3 className="text-xl font-semibold text-charcoal mb-3">Step 2: Search by License Number or Name</h3>
        
        <p>You can search using either:</p>
        
        <ul>
          <li><strong>License number:</strong> Most accurate method if you have the full RN or LPN license number</li>
          <li><strong>Name search:</strong> Search by last name and first name (exact spelling required)</li>
        </ul>

        <h3 className="text-xl font-semibold text-charcoal mb-3">Step 3: Verify Key Information</h3>
        
        <p>Once you locate the license record, verify these critical details:</p>
        
        <ul>
          <li><strong>Full name matches:</strong> Confirm spelling matches employment records exactly</li>
          <li><strong>License type:</strong> RN (Registered Nurse) or LPN (Licensed Practical Nurse)</li>
          <li><strong>License status:</strong> Should show "Active" or "Current"</li>
          <li><strong>Expiration date:</strong> Ensure license hasn't expired</li>
          <li><strong>Disciplinary actions:</strong> Review any restrictions or sanctions</li>
        </ul>

        <h2 className="text-2xl font-bold text-charcoal mb-4 mt-8">Beyond Basic License Verification</h2>

        <p>
          A complete credentialing process requires checking additional databases beyond the state board:
        </p>

        <h3 className="text-xl font-semibold text-charcoal mb-3">Federal Exclusion Lists</h3>
        
        <ul>
          <li><strong>OIG List of Excluded Individuals/Entities (LEIE):</strong> Check if the provider is excluded from federal healthcare programs</li>
          <li><strong>SAM.gov Exclusions:</strong> Verify the provider isn't barred from federal contracts</li>
          <li><strong>Office of Foreign Assets Control (OFAC):</strong> Screen against terrorist and sanctions lists</li>
        </ul>

        <h3 className="text-xl font-semibold text-charcoal mb-3">Additional Verification Steps</h3>
        
        <ul>
          <li><strong>National Practitioner Data Bank (NPDB):</strong> Hospital-eligible organizations can query for adverse actions</li>
          <li><strong>CMS Provider Enrollment:</strong> Verify Medicare/Medicaid enrollment status if applicable</li>
        </ul>

        <h2 className="text-2xl font-bold text-charcoal mb-4 mt-8">Common Pitfalls to Avoid</h2>

        <div className="space-y-4">
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <h4 className="font-medium text-red-800 mb-2">Name Variations</h4>
            <p className="text-red-700 text-sm">
              Nurses may use different name formats (maiden names, nicknames, middle initials) across databases. Always verify with multiple name combinations.
            </p>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <h4 className="font-medium text-red-800 mb-2">License Type Confusion</h4>
            <p className="text-red-700 text-sm">
              Massachusetts issues both RN and LPN licenses. Ensure you're verifying the correct license type for the intended role.
            </p>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <h4 className="font-medium text-red-800 mb-2">Multi-State License Holders</h4>
            <p className="text-red-700 text-sm">
              Massachusetts participates in the Nursing Licensure Compact (NLC). Nurses with multi-state licenses from other compact states can practice in Massachusetts.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-charcoal mb-4 mt-8">Automation with API-Cert</h2>

        <p>
          Manual license verification is time-consuming and error-prone. For organizations processing multiple verifications, API-Cert automates the entire process:
        </p>

        <ul>
          <li><strong>All 50 states:</strong> Unified API covers every state board including Massachusetts</li>
          <li><strong>6 primary sources:</strong> Simultaneously checks state boards, OIG, SAM, OFAC, and other critical databases</li>
          <li><strong>Sub-second responses:</strong> Get comprehensive results in under 20ms</li>
          <li><strong>Name matching:</strong> Advanced algorithms handle name variations automatically</li>
          <li><strong>Fresh data:</strong> Direct integration with source systems ensures up-to-date information</li>
        </ul>

        <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-emerald-800 mb-3">Example API Response</h3>
          <pre className="bg-charcoal text-gray-300 p-4 rounded-lg text-sm font-mono overflow-x-auto">
{`{
  "verified": true,
  "provider_type": "RN",
  "state": "MA", 
  "full_name": "SARAH MICHELLE CHEN",
  "license_number": "RN-267891",
  "status": "ACTIVE",
  "expiration_date": "2028-03-31",
  "disciplinary_flag": false,
  "oig_excluded": false,
  "sam_excluded": false,
  "latency_ms": 12
}`}
          </pre>
        </div>

        <h2 className="text-2xl font-bold text-charcoal mb-4 mt-8">Next Steps</h2>

        <p>
          Manual license verification in Massachusetts requires patience and attention to detail. While the state board portal provides essential information, comprehensive credentialing demands checking multiple federal databases—a process that can take hours for each provider.
        </p>

        <p className="text-lg font-medium mt-6">
          Skip the manual process. Verify any nursing license in 6 checks and under a second. <Link href="/docs#register" className="text-emerald-brand hover:underline">Sign up free at api-cert.com</Link>.
        </p>
      </article>

      {/* Related articles */}
      <section className="bg-surface py-12">
        <div className="max-w-4xl mx-auto px-6">
          <h3 className="text-2xl font-bold text-charcoal mb-6">Related Articles</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Link 
              href="/blog/how-to-verify-nursing-license-florida"
              className="block p-6 bg-white border border-border rounded-lg hover:border-emerald-brand/30 transition-colors"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                  FL
                </span>
              </div>
              <h4 className="font-semibold text-charcoal hover:text-emerald-brand transition-colors">
                How to Verify a Nursing License in Florida
              </h4>
            </Link>
            <Link 
              href="/blog/how-to-verify-nursing-license-texas"
              className="block p-6 bg-white border border-border rounded-lg hover:border-emerald-brand/30 transition-colors"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                  TX
                </span>
              </div>
              <h4 className="font-semibold text-charcoal hover:text-emerald-brand transition-colors">
                How to Verify a Nursing License in Texas
              </h4>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}