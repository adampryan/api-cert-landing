import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Footer from '../../components/Footer';

export const metadata: Metadata = {
  title: "How to Verify a Nursing License in Florida | API-Cert",
  description: "Complete step-by-step guide to verifying RN and LPN licenses through Florida Health Source. Includes manual verification process, compliance requirements, and automation options.",
  keywords: "Florida nursing license verification, RN license verification FL, LPN license check Florida, Florida Health Source, flhealthsource.gov"
};

export default function FloridaNursingLicenseVerification() {
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
            <span>Florida Nursing License Verification</span>
          </nav>
          
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
              FL
            </span>
            <time className="text-sm text-gray-500">March 14, 2026</time>
            <span className="text-sm text-gray-500">9 min read</span>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold text-charcoal mb-6">
            How to Verify a Nursing License in Florida
          </h1>
          
          <p className="text-xl text-gray-600 leading-relaxed">
            Florida's large healthcare sector makes nursing license verification a critical process for hospitals, clinics, and healthcare agencies. This comprehensive guide covers everything you need to know about verifying RN and LPN licenses in the Sunshine State.
          </p>
        </div>
      </section>

      {/* Article content */}
      <article className="max-w-4xl mx-auto px-6 py-12 prose prose-lg prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-charcoal mb-4">Why Florida License Verification is Critical</h2>
        
        <p>
          Florida has one of the largest nursing workforces in the United States, with over 300,000 licensed nurses. The state's stringent healthcare regulations require employers to verify licenses before allowing practice, making proper verification essential for:
        </p>
        
        <ul>
          <li><strong>Regulatory compliance:</strong> Florida Statutes require verification before employment</li>
          <li><strong>Joint Commission standards:</strong> Accreditors mandate robust credentialing processes</li>
          <li><strong>Liability protection:</strong> Proper verification shields organizations from negligent hiring claims</li>
          <li><strong>Patient safety:</strong> Ensures only qualified, licensed professionals provide care</li>
          <li><strong>CMS reimbursement:</strong> Federal programs require verified providers for reimbursement</li>
        </ul>

        <h2 className="text-2xl font-bold text-charcoal mb-4 mt-8">Step-by-Step Manual Verification Process</h2>

        <h3 className="text-xl font-semibold text-charcoal mb-3">Step 1: Access Florida Health Source</h3>
        
        <p>
          Navigate to Florida's official license verification portal at <strong>flhealthsource.gov</strong>. This is the authoritative source for all Florida healthcare professional licenses, including RN and LPN certifications.
        </p>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-6">
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-blue-600 text-sm">💡</span>
            </div>
            <div>
              <p className="font-medium text-blue-800 mb-2">Pro Tip</p>
              <p className="text-blue-700 text-sm">
                Bookmark flhealthsource.gov for faster access. The site is optimized for frequent use by healthcare HR departments.
              </p>
            </div>
          </div>
        </div>

        <h3 className="text-xl font-semibold text-charcoal mb-3">Step 2: Choose Your Search Method</h3>
        
        <p>Florida Health Source offers several search options:</p>
        
        <ul>
          <li><strong>License number search:</strong> Enter the complete RN or LPN license number (most precise)</li>
          <li><strong>Name search:</strong> Search by last name and first name</li>
          <li><strong>Business name search:</strong> For nurses associated with specific practices</li>
          <li><strong>Advanced search:</strong> Combine multiple criteria for complex searches</li>
        </ul>

        <h3 className="text-xl font-semibold text-charcoal mb-3">Step 3: Review License Details</h3>
        
        <p>Once you locate the license record, carefully review these key elements:</p>
        
        <ul>
          <li><strong>License holder name:</strong> Must match employment documentation exactly</li>
          <li><strong>License type:</strong> RN (Registered Nurse) or LPN (Licensed Practical Nurse)</li>
          <li><strong>License number:</strong> Verify this matches provided credentials</li>
          <li><strong>Issue date:</strong> When the license was first granted</li>
          <li><strong>Expiration date:</strong> Licenses must be current and not expired</li>
          <li><strong>Status:</strong> Should show "Active," "Current," or equivalent valid status</li>
          <li><strong>Disciplinary actions:</strong> Review any restrictions, probations, or sanctions</li>
        </ul>

        <h3 className="text-xl font-semibold text-charcoal mb-3">Step 4: Document Your Verification</h3>
        
        <p>
          Best practice requires maintaining records of your verification process:
        </p>
        
        <ul>
          <li>Screenshot or print the verification results</li>
          <li>Note the date and time of verification</li>
          <li>Record who performed the verification</li>
          <li>File documentation with employee credentialing records</li>
        </ul>

        <h2 className="text-2xl font-bold text-charcoal mb-4 mt-8">Understanding Florida License Types</h2>

        <h3 className="text-xl font-semibold text-charcoal mb-3">Registered Nurse (RN) Licenses</h3>
        
        <p>
          Florida RN licenses are issued to candidates who have completed approved nursing education programs and passed the NCLEX-RN examination. Key characteristics:
        </p>
        
        <ul>
          <li>License numbers typically begin with "RN"</li>
          <li>Renewable every two years</li>
          <li>Require continuing education for renewal</li>
          <li>May include specialty endorsements</li>
        </ul>

        <h3 className="text-xl font-semibold text-charcoal mb-3">Licensed Practical Nurse (LPN) Licenses</h3>
        
        <p>
          Florida LPN licenses are granted to those who complete practical nursing programs and pass the NCLEX-PN. Important details:
        </p>
        
        <ul>
          <li>License numbers typically begin with "LPN"</li>
          <li>Renewable every two years</li>
          <li>Scope of practice differs from RNs</li>
          <li>Must work under RN or physician supervision</li>
        </ul>

        <h2 className="text-2xl font-bold text-charcoal mb-4 mt-8">Florida-Specific Verification Considerations</h2>

        <div className="space-y-4">
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <h4 className="font-medium text-amber-800 mb-2">Compact License Holders</h4>
            <p className="text-amber-700 text-sm">
              Florida participates in the Nursing Licensure Compact (NLC). Nurses with multistate licenses from other compact states can practice in Florida. Verify both home state license and compact privileges.
            </p>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <h4 className="font-medium text-amber-800 mb-2">Temporary Licenses</h4>
            <p className="text-amber-700 text-sm">
              Florida issues temporary licenses to certain categories of applicants. These have shorter expiration periods and specific limitations. Check the license type carefully.
            </p>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <h4 className="font-medium text-amber-800 mb-2">Name Changes</h4>
            <p className="text-amber-700 text-sm">
              Florida requires nurses to update their license information when legal names change. If verification fails, try searching under previous names.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-charcoal mb-4 mt-8">Beyond State Board Verification</h2>

        <p>
          Complete credentialing requires checking additional databases beyond the Florida State Board:
        </p>

        <h3 className="text-xl font-semibold text-charcoal mb-3">Federal Exclusion Databases</h3>
        
        <ul>
          <li><strong>OIG LEIE:</strong> Check the HHS Office of Inspector General's List of Excluded Individuals and Entities</li>
          <li><strong>SAM.gov:</strong> Verify the provider isn't excluded from federal contracting</li>
          <li><strong>OFAC SDN List:</strong> Screen against Treasury Department sanctions lists</li>
        </ul>

        <h3 className="text-xl font-semibold text-charcoal mb-3">Additional Verification Points</h3>
        
        <ul>
          <li><strong>National Practitioner Data Bank:</strong> Hospitals and eligible organizations must query for adverse actions</li>
          <li><strong>CMS PECOS:</strong> Verify Medicare provider enrollment if applicable</li>
          <li><strong>Social Security Death Master File:</strong> Confirm the provider is not deceased</li>
        </ul>

        <h2 className="text-2xl font-bold text-charcoal mb-4 mt-8">Common Verification Pitfalls in Florida</h2>

        <div className="space-y-4">
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <h4 className="font-medium text-red-800 mb-2">Hurricane-Related Delays</h4>
            <p className="text-red-700 text-sm">
              Florida's hurricane season can disrupt state board operations. Plan for potential delays during severe weather events and have backup verification methods ready.
            </p>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <h4 className="font-medium text-red-800 mb-2">High Volume Processing</h4>
            <p className="text-red-700 text-sm">
              Florida's large nursing population can create website slowdowns during peak renewal periods. Avoid verification during the last weeks of license renewal cycles if possible.
            </p>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <h4 className="font-medium text-red-800 mb-2">Travel Nurse Complexities</h4>
            <p className="text-red-700 text-sm">
              Florida attracts many travel nurses. Ensure you're verifying both home state licenses and any Florida endorsements or compact privileges.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-charcoal mb-4 mt-8">Streamline with API-Cert</h2>

        <p>
          Manual verification through Florida Health Source works for occasional checks, but becomes inefficient for organizations processing hundreds of verifications. API-Cert automates the entire process:
        </p>

        <ul>
          <li><strong>Real-time Florida integration:</strong> Direct connection to Florida Health Source data</li>
          <li><strong>Comprehensive screening:</strong> Simultaneously checks state board, OIG, SAM, OFAC, and other critical databases</li>
          <li><strong>Lightning fast:</strong> Complete 6-point verification in under 20 milliseconds</li>
          <li><strong>Intelligent matching:</strong> Handles name variations, maiden names, and nicknames automatically</li>
          <li><strong>Always current:</strong> Fresh data synced directly from source systems</li>
        </ul>

        <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-emerald-800 mb-3">Sample API Response for Florida RN</h3>
          <pre className="bg-charcoal text-gray-300 p-4 rounded-lg text-sm font-mono overflow-x-auto">
{`{
  "verified": true,
  "provider_type": "RN",
  "state": "FL",
  "full_name": "MARIA ELENA RODRIGUEZ",
  "license_number": "RN-4567891",
  "status": "ACTIVE", 
  "expiration_date": "2027-11-30",
  "disciplinary_flag": false,
  "compact_eligible": true,
  "oig_excluded": false,
  "sam_excluded": false,
  "latency_ms": 8
}`}
          </pre>
        </div>

        <h2 className="text-2xl font-bold text-charcoal mb-4 mt-8">Best Practices for Florida Verifications</h2>

        <ul>
          <li><strong>Verify early:</strong> Check licenses during the application process, not after hiring</li>
          <li><strong>Set up monitoring:</strong> Track license expiration dates and renewal requirements</li>
          <li><strong>Document everything:</strong> Maintain thorough records of all verification activities</li>
          <li><strong>Train your team:</strong> Ensure HR staff understand Florida-specific requirements</li>
          <li><strong>Have backups:</strong> Prepare alternative verification methods for system outages</li>
        </ul>

        <h2 className="text-2xl font-bold text-charcoal mb-4 mt-8">Conclusion</h2>

        <p>
          Florida's robust healthcare sector demands thorough license verification processes. While the Florida Health Source portal provides essential information, complete credentialing requires checking multiple federal databases—a time-intensive process that's prone to human error.
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
              href="/blog/how-to-verify-nursing-license-massachusetts"
              className="block p-6 bg-white border border-border rounded-lg hover:border-emerald-brand/30 transition-colors"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  MA
                </span>
              </div>
              <h4 className="font-semibold text-charcoal hover:text-emerald-brand transition-colors">
                How to Verify a Nursing License in Massachusetts
              </h4>
            </Link>
            <Link 
              href="/blog/how-to-verify-nursing-license-california"
              className="block p-6 bg-white border border-border rounded-lg hover:border-emerald-brand/30 transition-colors"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                  CA
                </span>
              </div>
              <h4 className="font-semibold text-charcoal hover:text-emerald-brand transition-colors">
                How to Verify a Nursing License in California
              </h4>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}