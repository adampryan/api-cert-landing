import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Verify a Nursing License in California | API-Cert",
  description: "Master California RN license verification using the official RN.ca.gov portal. Essential guide for healthcare compliance teams and credentialing professionals.",
  keywords: "California nursing license verification, RN license verification CA, LPN license check California, RN.ca.gov, California Board of Registered Nursing"
};

export default function CaliforniaNursingLicenseVerification() {
  return (
    <main className="min-h-screen">
      {/* Breadcrumb and header */}
      <section className="bg-surface py-12">
        <div className="max-w-4xl mx-auto px-6">
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/blog" className="hover:text-emerald-brand">Blog</Link>
            <span className="mx-2">→</span>
            <span>California Nursing License Verification</span>
          </nav>
          
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
              CA
            </span>
            <time className="text-sm text-gray-500">March 11, 2026</time>
            <span className="text-sm text-gray-500">9 min read</span>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold text-charcoal mb-6">
            How to Verify a Nursing License in California
          </h1>
          
          <p className="text-xl text-gray-600 leading-relaxed">
            California has the largest nursing workforce in the United States, with over 400,000 active RN licenses. Proper verification is critical for healthcare organizations operating in this complex regulatory environment. This guide covers everything you need to know about verifying nursing credentials in the Golden State.
          </p>
        </div>
      </section>

      {/* Article content */}
      <article className="max-w-4xl mx-auto px-6 py-12 prose prose-lg prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-charcoal mb-4">Why California License Verification is Essential</h2>
        
        <p>
          California's healthcare system is the largest in the nation, governed by strict state regulations that prioritize patient safety. Proper nursing license verification is mandatory for:
        </p>
        
        <ul>
          <li><strong>Legal compliance:</strong> California Business and Professions Code requires verification before practice</li>
          <li><strong>Joint Commission standards:</strong> Accreditors mandate comprehensive credentialing processes</li>
          <li><strong>Professional liability protection:</strong> Proper verification shields organizations from negligent hiring claims</li>
          <li><strong>Quality patient care:</strong> Ensures only qualified, licensed professionals provide treatment</li>
          <li><strong>CMS requirements:</strong> Federal programs require verified providers for reimbursement</li>
          <li><strong>State oversight:</strong> CDPH and other agencies conduct regular compliance reviews</li>
        </ul>

        <h2 className="text-2xl font-bold text-charcoal mb-4 mt-8">Step-by-Step Manual Verification Process</h2>

        <h3 className="text-xl font-semibold text-charcoal mb-3">Step 1: Access the California Board Portal</h3>
        
        <p>
          Navigate to the California Board of Registered Nursing verification portal at <strong>rn.ca.gov</strong>. This is the official source for all registered nursing licenses in California.
        </p>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-6">
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-yellow-100 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-yellow-600 text-sm">⚠️</span>
            </div>
            <div>
              <p className="font-medium text-yellow-800 mb-2">Important Note</p>
              <p className="text-yellow-700 text-sm">
                California only regulates Registered Nurses (RNs). Licensed Vocational Nurses (LVNs) are regulated by the California Board of Vocational Nursing and Psychiatric Technicians at bvnpt.ca.gov.
              </p>
            </div>
          </div>
        </div>

        <h3 className="text-xl font-semibold text-charcoal mb-3">Step 2: Navigate to License Lookup</h3>
        
        <p>
          Look for the "License Verification" or "Verify a License" section on the homepage. California's portal offers several search options to accommodate different verification needs.
        </p>

        <h3 className="text-xl font-semibold text-charcoal mb-3">Step 3: Choose Your Search Method</h3>
        
        <p>California provides multiple search options:</p>
        
        <ul>
          <li><strong>License number search:</strong> Enter the complete RN license number for most accurate results</li>
          <li><strong>Name search:</strong> Search by last name and first name (exact spelling required)</li>
          <li><strong>Advanced search:</strong> Combine multiple criteria for complex queries</li>
        </ul>

        <h3 className="text-xl font-semibold text-charcoal mb-3">Step 4: Verify Critical License Information</h3>
        
        <p>Once you locate the license record, confirm these essential details:</p>
        
        <ul>
          <li><strong>License holder name:</strong> Must exactly match employment documentation</li>
          <li><strong>License number:</strong> Unique identifier assigned by California</li>
          <li><strong>License type:</strong> RN (Registered Nurse) - California's only regulated nursing license</li>
          <li><strong>Original license date:</strong> When the license was first issued</li>
          <li><strong>Expiration date:</strong> License must be current and not expired</li>
          <li><strong>License status:</strong> Should display "Active," "Current," or "Clear"</li>
          <li><strong>Disciplinary actions:</strong> Review any sanctions, restrictions, or probationary conditions</li>
        </ul>

        <h2 className="text-2xl font-bold text-charcoal mb-4 mt-8">Understanding California RN Licenses</h2>

        <h3 className="text-xl font-semibold text-charcoal mb-3">Registered Nurse (RN) License Requirements</h3>
        
        <p>
          California RN licenses have specific characteristics that set them apart:
        </p>
        
        <ul>
          <li>Requires graduation from Board-approved nursing program</li>
          <li>Must pass NCLEX-RN examination</li>
          <li>Licenses expire every two years</li>
          <li>Continuing education required for renewal (30 contact hours)</li>
          <li>Criminal background check required</li>
          <li>Fingerprinting through DOJ and FBI</li>
        </ul>

        <h3 className="text-xl font-semibold text-charcoal mb-3">Licensed Vocational Nurse (LVN) Verification</h3>
        
        <p>
          For LVN verification in California, you must use a different portal:
        </p>
        
        <ul>
          <li>Regulated by Board of Vocational Nursing and Psychiatric Technicians</li>
          <li>Verify at <strong>bvnpt.ca.gov</strong></li>
          <li>Different license numbering system</li>
          <li>Separate renewal and continuing education requirements</li>
        </ul>

        <h2 className="text-2xl font-bold text-charcoal mb-4 mt-8">California-Specific Verification Considerations</h2>

        <div className="space-y-4">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="font-medium text-blue-800 mb-2">Compact License Participation</h4>
            <p className="text-blue-700 text-sm">
              California is a member of the Nursing Licensure Compact (NLC) as of January 2024. Verify whether nurses hold California licenses or are practicing under compact privileges from other states.
            </p>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="font-medium text-blue-800 mb-2">Temporary Licenses</h4>
            <p className="text-blue-700 text-sm">
              California issues interim permits to certain applicants awaiting full licensure. These have specific time limitations and practice restrictions that must be verified.
            </p>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="font-medium text-blue-800 mb-2">International Nurses</h4>
            <p className="text-blue-700 text-sm">
              California attracts many internationally educated nurses. Verify completion of additional requirements such as VisaScreen certification and English proficiency testing.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-charcoal mb-4 mt-8">Advanced Practice Nursing in California</h2>

        <p>
          California has specific requirements for advanced practice registered nurses:
        </p>

        <h3 className="text-xl font-semibold text-charcoal mb-3">Nurse Practitioner Certification</h3>
        
        <ul>
          <li>Must hold active California RN license</li>
          <li>Requires additional certification process</li>
          <li>Must maintain national certification</li>
          <li>Furnishing number required for prescriptive authority</li>
          <li>Separate disciplinary tracking</li>
        </ul>

        <h3 className="text-xl font-semibold text-charcoal mb-3">Other Advanced Practice Roles</h3>
        
        <ul>
          <li><strong>Clinical Nurse Specialist:</strong> Requires separate certification and national credentials</li>
          <li><strong>Certified Registered Nurse Anesthetist:</strong> Must maintain both state and national certification</li>
          <li><strong>Certified Nurse Midwife:</strong> Requires state certification and national credentials</li>
        </ul>

        <h2 className="text-2xl font-bold text-charcoal mb-4 mt-8">Beyond State Board Verification</h2>

        <p>
          Comprehensive credentialing requires checking multiple authoritative databases:
        </p>

        <h3 className="text-xl font-semibold text-charcoal mb-3">Federal Exclusion Databases</h3>
        
        <ul>
          <li><strong>OIG LEIE:</strong> HHS Office of Inspector General List of Excluded Individuals and Entities</li>
          <li><strong>SAM.gov:</strong> System for Award Management exclusions database</li>
          <li><strong>OFAC SDN:</strong> Treasury Department Specially Designated Nationals list</li>
        </ul>

        <h3 className="text-xl font-semibold text-charcoal mb-3">Additional Verification Sources</h3>
        
        <ul>
          <li><strong>National Practitioner Data Bank:</strong> Required queries for eligible healthcare entities</li>
          <li><strong>CMS PECOS:</strong> Provider Enrollment, Chain and Ownership System</li>
          <li><strong>NPPES NPI Registry:</strong> National Provider Identifier verification</li>

          <li><strong>Social Security Death Master File:</strong> Verify the provider is not deceased</li>
        </ul>

        <h2 className="text-2xl font-bold text-charcoal mb-4 mt-8">Common California Verification Pitfalls</h2>

        <div className="space-y-4">
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <h4 className="font-medium text-red-800 mb-2">RN vs. LVN Confusion</h4>
            <p className="text-red-700 text-sm">
              California regulates RNs and LVNs through different boards. Ensure you're searching the correct portal for the license type you need to verify.
            </p>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <h4 className="font-medium text-red-800 mb-2">System Overload Issues</h4>
            <p className="text-red-700 text-sm">
              The RN.ca.gov portal can experience high traffic during renewal periods. Plan for potential delays and have backup verification methods available.
            </p>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <h4 className="font-medium text-red-800 mb-2">Name Matching Challenges</h4>
            <p className="text-red-700 text-sm">
              California's diverse population means names may include accent marks, hyphens, or cultural variations. Try multiple name formats if initial searches fail.
            </p>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <h4 className="font-medium text-red-800 mb-2">Travel Nurse Complexities</h4>
            <p className="text-red-700 text-sm">
              California attracts travel nurses from across the country. Verify both home state licenses and California endorsements or compact privileges.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-charcoal mb-4 mt-8">High-Volume Verification Challenges</h2>

        <p>
          Organizations processing hundreds of verifications face additional challenges:
        </p>

        <ul>
          <li><strong>Time consumption:</strong> Manual searches can take 15-30 minutes per provider</li>
          <li><strong>Human error:</strong> Manual data entry and verification prone to mistakes</li>
          <li><strong>Incomplete checks:</strong> Easy to miss checking all required databases</li>
          <li><strong>Documentation burden:</strong> Maintaining records for audit and compliance</li>
          <li><strong>Cost scaling:</strong> Staff time costs multiply with verification volume</li>
        </ul>

        <h2 className="text-2xl font-bold text-charcoal mb-4 mt-8">Automated Verification with API-Cert</h2>

        <p>
          Manual verification through RN.ca.gov works for occasional checks but becomes inefficient for large-scale operations. API-Cert automates the entire credentialing process:
        </p>

        <ul>
          <li><strong>Real-time California integration:</strong> Direct connection to RN.ca.gov and bvnpt.ca.gov data</li>
          <li><strong>Comprehensive screening:</strong> Simultaneously checks state board plus 5 federal databases</li>
          <li><strong>Lightning performance:</strong> Complete 6-point verification in under 20 milliseconds</li>
          <li><strong>Intelligent name matching:</strong> Handles cultural names, aliases, and variations automatically</li>
          <li><strong>Always current data:</strong> Real-time sync with official source systems</li>
          <li><strong>Compact state detection:</strong> Automatically identifies and verifies NLC status</li>
          <li><strong>Audit trail:</strong> Complete documentation for compliance and record-keeping</li>
        </ul>

        <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-emerald-800 mb-3">Sample API Response for California RN</h3>
          <pre className="bg-charcoal text-gray-300 p-4 rounded-lg text-sm font-mono overflow-x-auto">
{`{
  "verified": true,
  "provider_type": "RN",
  "state": "CA",
  "full_name": "PATRICIA LYNN GARCIA",
  "license_number": "RN-567890",
  "status": "ACTIVE",
  "expiration_date": "2027-09-30",
  "disciplinary_flag": false,
  "compact_eligible": true,
  "oig_excluded": false,
  "sam_excluded": false,
  "nppes_verified": true,
  "latency_ms": 16
}`}
          </pre>
        </div>

        <h2 className="text-2xl font-bold text-charcoal mb-4 mt-8">Cost Analysis: Manual vs. Automated</h2>

        <p>
          Consider the true cost of manual verification:
        </p>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Manual Verification Cost (Per Provider)</h3>
          <ul className="space-y-2 text-gray-700">
            <li>• Staff time (20 minutes @ $25/hour): <strong>$8.33</strong></li>
            <li>• Database access fees: <strong>$2.00</strong></li>
            <li>• Documentation and filing: <strong>$3.00</strong></li>
            <li>• Error risk and rework: <strong>$5.00</strong></li>
            <li className="border-t border-gray-300 pt-2 font-semibold">Total per verification: <strong>$18.33</strong></li>
          </ul>
        </div>

        <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6 my-6">
          <h3 className="text-lg font-semibold text-emerald-800 mb-4">API-Cert Automated Cost (Per Provider)</h3>
          <ul className="space-y-2 text-emerald-700">
            <li>• API call cost: <strong>$0.25</strong></li>
            <li>• Staff review time (2 minutes @ $25/hour): <strong>$0.83</strong></li>
            <li>• Automated documentation: <strong>$0.00</strong></li>
            <li>• Error risk: <strong>$0.00</strong></li>
            <li className="border-t border-emerald-300 pt-2 font-semibold">Total per verification: <strong>$1.08</strong></li>
          </ul>
        </div>

        <p className="text-lg font-medium">
          <strong>Savings per verification: $17.25 (94% cost reduction)</strong>
        </p>

        <h2 className="text-2xl font-bold text-charcoal mb-4 mt-8">Best Practices for California Verifications</h2>

        <ul>
          <li><strong>Verify during recruitment:</strong> Check credentials before extending offers</li>
          <li><strong>Monitor renewal cycles:</strong> Track expiration dates and renewal requirements</li>
          <li><strong>Document everything:</strong> Maintain comprehensive verification records</li>
          <li><strong>Train your team:</strong> Ensure staff understand California-specific requirements</li>
          <li><strong>Plan for scale:</strong> Consider automated solutions for high-volume operations</li>
          <li><strong>Stay compliant:</strong> Monitor regulatory changes and Board announcements</li>
        </ul>

        <h2 className="text-2xl font-bold text-charcoal mb-4 mt-8">Conclusion</h2>

        <p>
          California's massive nursing workforce and complex regulatory environment make thorough license verification essential for healthcare organizations. While the state board portals provide critical licensing information, comprehensive credentialing demands verification across multiple federal databases—a process that becomes impractical to manage manually at scale.
        </p>

        <p>
          The cost savings and efficiency gains from automated verification are compelling, especially for organizations processing dozens or hundreds of verifications monthly. More importantly, automated systems reduce human error and ensure consistent, comprehensive screening across all providers.
        </p>

        <p className="text-lg font-medium mt-6">
          Skip the manual process. Verify any provider in 6 checks and under a second. <Link href="/docs#register" className="text-emerald-brand hover:underline">Sign up free at api-cert.com</Link>.
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
          </div>
        </div>
      </section>
    </main>
  );
}