import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Verify a Nursing License in New York | API-Cert",
  description: "Complete walkthrough of New York State nursing license verification through OP.NYSED.gov. Essential guide for healthcare organizations and compliance teams.",
  keywords: "New York nursing license verification, RN license verification NY, LPN license check New York, OP.NYSED.gov, New York State Education Department"
};

export default function NewYorkNursingLicenseVerification() {
  return (
    <main className="min-h-screen">
      {/* Breadcrumb and header */}
      <section className="bg-surface py-12">
        <div className="max-w-4xl mx-auto px-6">
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/blog" className="hover:text-emerald-brand">Blog</Link>
            <span className="mx-2">→</span>
            <span>New York Nursing License Verification</span>
          </nav>
          
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
              NY
            </span>
            <time className="text-sm text-gray-500">March 12, 2026</time>
            <span className="text-sm text-gray-500">7 min read</span>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold text-charcoal mb-6">
            How to Verify a Nursing License in New York
          </h1>
          
          <p className="text-xl text-gray-600 leading-relaxed">
            New York's complex healthcare system requires rigorous license verification to ensure patient safety and regulatory compliance. This comprehensive guide covers everything you need to know about verifying nursing credentials through the New York State Education Department.
          </p>
        </div>
      </section>

      {/* Article content */}
      <article className="max-w-4xl mx-auto px-6 py-12 prose prose-lg prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-charcoal mb-4">Why New York License Verification is Critical</h2>
        
        <p>
          New York State has one of the most stringent healthcare regulatory environments in the United States. With over 250,000 licensed nurses across the state, proper verification is essential for:
        </p>
        
        <ul>
          <li><strong>State law compliance:</strong> New York Education Law requires verification before practice</li>
          <li><strong>Facility accreditation:</strong> Joint Commission and other accreditors mandate thorough credentialing</li>
          <li><strong>Malpractice protection:</strong> Proper verification reduces liability exposure</li>
          <li><strong>Quality assurance:</strong> Ensures only qualified practitioners provide patient care</li>
          <li><strong>Regulatory compliance:</strong> Meets DOH and CMS verification requirements</li>
        </ul>

        <h2 className="text-2xl font-bold text-charcoal mb-4 mt-8">Step-by-Step Manual Verification Process</h2>

        <h3 className="text-xl font-semibold text-charcoal mb-3">Step 1: Access OP.NYSED.gov</h3>
        
        <p>
          Navigate to the New York State Education Department's Office of the Professions website at <strong>op.nysed.gov</strong>. This is the official portal for all licensed professions in New York, including nursing.
        </p>

        <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 my-6">
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-purple-600 text-sm">💡</span>
            </div>
            <div>
              <p className="font-medium text-purple-800 mb-2">Navigation Tip</p>
              <p className="text-purple-700 text-sm">
                Look for "License Verification" or "Verify a License" in the main menu. The site also offers a "Professional Lookup" tool for comprehensive searches.
              </p>
            </div>
          </div>
        </div>

        <h3 className="text-xl font-semibold text-charcoal mb-3">Step 2: Select Nursing Profession</h3>
        
        <p>From the professional categories, select:</p>
        
        <ul>
          <li><strong>Registered Professional Nurse (RN):</strong> For registered nurses</li>
          <li><strong>Licensed Practical Nurse (LPN):</strong> For practical nurses</li>
        </ul>

        <h3 className="text-xl font-semibold text-charcoal mb-3">Step 3: Perform Your Search</h3>
        
        <p>New York offers several search methods:</p>
        
        <ul>
          <li><strong>License number search:</strong> Enter the complete license number for precise results</li>
          <li><strong>Name search:</strong> Search by last name, first name, and middle initial</li>
          <li><strong>Business name:</strong> For nurses associated with specific practices</li>
        </ul>

        <h3 className="text-xl font-semibold text-charcoal mb-3">Step 4: Review License Information</h3>
        
        <p>Carefully verify these critical license details:</p>
        
        <ul>
          <li><strong>Professional name:</strong> Must match employment documentation exactly</li>
          <li><strong>License type:</strong> RN (Registered Professional Nurse) or LPN (Licensed Practical Nurse)</li>
          <li><strong>License number:</strong> Unique identifier assigned by New York State</li>
          <li><strong>Registration date:</strong> When the current registration became effective</li>
          <li><strong>Expiration date:</strong> License must be current and not expired</li>
          <li><strong>Status:</strong> Should show "Registered" or "Current"</li>
          <li><strong>Disciplinary actions:</strong> Review any sanctions, limitations, or restrictions</li>
        </ul>

        <h2 className="text-2xl font-bold text-charcoal mb-4 mt-8">Understanding New York Nursing Licenses</h2>

        <h3 className="text-xl font-semibold text-charcoal mb-3">Registered Professional Nurse (RN)</h3>
        
        <p>
          New York uses the term "Registered Professional Nurse" for what other states call "Registered Nurse":
        </p>
        
        <ul>
          <li>Requires completion of approved nursing education program</li>
          <li>Must pass NCLEX-RN examination</li>
          <li>License registration renewed every three years</li>
          <li>Continuing education requirements for renewal</li>
          <li>May include specialty practice endorsements</li>
        </ul>

        <h3 className="text-xl font-semibold text-charcoal mb-3">Licensed Practical Nurse (LPN)</h3>
        
        <p>
          New York LPN licenses have specific characteristics:
        </p>
        
        <ul>
          <li>Requires completion of practical nursing program</li>
          <li>Must pass NCLEX-PN examination</li>
          <li>Registration renewed every three years</li>
          <li>Scope of practice more limited than RNs</li>
          <li>Must practice under appropriate supervision</li>
        </ul>

        <h2 className="text-2xl font-bold text-charcoal mb-4 mt-8">New York-Specific Verification Considerations</h2>

        <div className="space-y-4">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="font-medium text-blue-800 mb-2">Non-Compact State Status</h4>
            <p className="text-blue-700 text-sm">
              New York is NOT a member of the Nursing Licensure Compact. Out-of-state nurses must obtain full New York licensure or temporary permits to practice.
            </p>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="font-medium text-blue-800 mb-2">Temporary Practice Permits</h4>
            <p className="text-blue-700 text-sm">
              New York issues temporary practice permits to certain applicants. These have shorter durations and specific limitations that must be verified.
            </p>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="font-medium text-blue-800 mb-2">Limited Permits</h4>
            <p className="text-blue-700 text-sm">
              New York may issue limited permits for specific circumstances. Verify the scope of practice authorized under any limited permit arrangements.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-charcoal mb-4 mt-8">Advanced Practice Nursing in New York</h2>

        <p>
          New York has specific requirements for advanced practice registered nurses:
        </p>

        <h3 className="text-xl font-semibold text-charcoal mb-3">Nurse Practitioner (NP) Certification</h3>
        
        <ul>
          <li>Must hold active RN license</li>
          <li>Requires separate NP certificate from New York State</li>
          <li>Certificate includes practice area specialization</li>
          <li>Must maintain national certification</li>
        </ul>

        <h3 className="text-xl font-semibold text-charcoal mb-3">Other Advanced Practice Roles</h3>
        
        <ul>
          <li><strong>Clinical Nurse Specialist:</strong> Separate certification required</li>
          <li><strong>Nurse Anesthetist:</strong> Must register with state and maintain national certification</li>
          <li><strong>Nurse Midwife:</strong> Requires state registration and national certification</li>
        </ul>

        <h2 className="text-2xl font-bold text-charcoal mb-4 mt-8">Comprehensive Verification Requirements</h2>

        <p>
          Complete credentialing extends beyond state licensure verification:
        </p>

        <h3 className="text-xl font-semibold text-charcoal mb-3">Federal Database Screening</h3>
        
        <ul>
          <li><strong>OIG LEIE:</strong> Check HHS Office of Inspector General exclusions</li>
          <li><strong>SAM.gov:</strong> Verify federal contracting eligibility</li>
          <li><strong>OFAC SDN:</strong> Screen against Treasury Department sanctions lists</li>
        </ul>

        <h3 className="text-xl font-semibold text-charcoal mb-3">Additional Verification Sources</h3>
        
        <ul>
          <li><strong>National Practitioner Data Bank:</strong> Mandatory for eligible healthcare organizations</li>
          <li><strong>CMS PECOS:</strong> Verify Medicare provider enrollment</li>
          <li><strong>NPPES NPI Registry:</strong> Confirm National Provider Identifier</li>
        </ul>

        <h2 className="text-2xl font-bold text-charcoal mb-4 mt-8">Common New York Verification Challenges</h2>

        <div className="space-y-4">
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <h4 className="font-medium text-amber-800 mb-2">Complex Name Changes</h4>
            <p className="text-amber-700 text-sm">
              New York nurses often practice under different names over their careers. Check maiden names, married names, and any legal name changes.
            </p>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <h4 className="font-medium text-amber-800 mb-2">System Performance Issues</h4>
            <p className="text-amber-700 text-sm">
              The OP.NYSED.gov website can experience slowdowns during peak periods. Allow extra time for verification during renewal seasons.
            </p>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <h4 className="font-medium text-amber-800 mb-2">Multiple License Types</h4>
            <p className="text-amber-700 text-sm">
              Some nurses hold both RN and LPN licenses, or have multiple endorsements. Verify all relevant licenses for the intended position.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-charcoal mb-4 mt-8">Streamlined Verification with API-Cert</h2>

        <p>
          Manual verification through OP.NYSED.gov provides essential information but becomes inefficient for large-scale credentialing operations. API-Cert automates the entire process:
        </p>

        <ul>
          <li><strong>Direct New York integration:</strong> Real-time access to OP.NYSED data</li>
          <li><strong>Multi-database verification:</strong> Simultaneously checks state license plus 5 federal sources</li>
          <li><strong>Ultra-fast responses:</strong> Complete verification in under 20 milliseconds</li>
          <li><strong>Smart name matching:</strong> Handles name variations and changes automatically</li>
          <li><strong>Current data:</strong> Always up-to-date information from official sources</li>
          <li><strong>Comprehensive results:</strong> Single API call returns complete credentialing picture</li>
        </ul>

        <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-emerald-800 mb-3">Example API Response for New York RN</h3>
          <pre className="bg-charcoal text-gray-300 p-4 rounded-lg text-sm font-mono overflow-x-auto">
{`{
  "verified": true,
  "provider_type": "RN",
  "state": "NY",
  "full_name": "ELIZABETH MARIE JOHNSON",
  "license_number": "098765",
  "status": "CURRENT",
  "expiration_date": "2028-06-30",
  "disciplinary_flag": false,
  "compact_eligible": false,
  "oig_excluded": false,
  "sam_excluded": false,
  "latency_ms": 11
}`}
          </pre>
        </div>

        <h2 className="text-2xl font-bold text-charcoal mb-4 mt-8">Best Practices for New York Verifications</h2>

        <ul>
          <li><strong>Verify early in process:</strong> Check credentials during recruitment, not after hiring</li>
          <li><strong>Monitor renewal dates:</strong> Track license expiration dates and renewal requirements</li>
          <li><strong>Document thoroughly:</strong> Maintain complete records of verification activities</li>
          <li><strong>Train your team:</strong> Ensure staff understand New York's specific requirements</li>
          <li><strong>Plan for delays:</strong> Allow extra time during system maintenance or peak periods</li>
          <li><strong>Stay informed:</strong> Monitor OP.NYSED announcements for regulatory changes</li>
        </ul>

        <h2 className="text-2xl font-bold text-charcoal mb-4 mt-8">Regulatory Updates and Changes</h2>

        <p>
          New York's healthcare regulatory landscape evolves regularly. Stay current on:
        </p>

        <ul>
          <li>Changes to continuing education requirements</li>
          <li>Updates to scope of practice regulations</li>
          <li>New disciplinary procedures and reporting requirements</li>
          <li>Emergency licensing provisions during public health events</li>
          <li>Technology improvements to the verification system</li>
        </ul>

        <h2 className="text-2xl font-bold text-charcoal mb-4 mt-8">Conclusion</h2>

        <p>
          New York's rigorous healthcare regulatory environment demands thorough license verification processes. While the OP.NYSED.gov portal provides essential state licensing information, comprehensive credentialing requires verification across multiple federal databases—a time-intensive process that's challenging to manage manually.
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
    </main>
  );
}