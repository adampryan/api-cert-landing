import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Verify a Nursing License in Texas | API-Cert",
  description: "Complete guide to verifying RN and LPN licenses through the Texas Board of Nursing. Includes manual verification steps, common pitfalls, and automation options.",
  keywords: "Texas nursing license verification, RN license verification TX, LPN license check Texas, Texas Board of Nursing, bon.texas.gov"
};

export default function TexasNursingLicenseVerification() {
  return (
    <main className="min-h-screen">
      {/* Breadcrumb and header */}
      <section className="bg-surface py-12">
        <div className="max-w-4xl mx-auto px-6">
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/blog" className="hover:text-emerald-brand">Blog</Link>
            <span className="mx-2">→</span>
            <span>Texas Nursing License Verification</span>
          </nav>
          
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
              TX
            </span>
            <time className="text-sm text-gray-500">March 13, 2026</time>
            <span className="text-sm text-gray-500">8 min read</span>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold text-charcoal mb-6">
            How to Verify a Nursing License in Texas
          </h1>
          
          <p className="text-xl text-gray-600 leading-relaxed">
            Texas has the second-largest nursing workforce in the United States, making license verification a critical process for the state's extensive healthcare system. This guide provides everything you need to know about verifying nursing credentials through the Texas Board of Nursing.
          </p>
        </div>
      </section>

      {/* Article content */}
      <article className="max-w-4xl mx-auto px-6 py-12 prose prose-lg prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-charcoal mb-4">Why Texas License Verification is Essential</h2>
        
        <p>
          With over 280,000 licensed nurses, Texas maintains strict credentialing requirements to protect public health and safety. Proper license verification is mandatory for:
        </p>
        
        <ul>
          <li><strong>Legal compliance:</strong> Texas Occupations Code requires verification before employment</li>
          <li><strong>Professional liability:</strong> Employers face legal risks for hiring unverified practitioners</li>
          <li><strong>Quality assurance:</strong> Ensures only qualified professionals deliver patient care</li>
          <li><strong>Regulatory standards:</strong> Meets Joint Commission and CMS requirements</li>
          <li><strong>Risk mitigation:</strong> Protects against fraud and unlicensed practice</li>
        </ul>

        <h2 className="text-2xl font-bold text-charcoal mb-4 mt-8">Step-by-Step Manual Verification</h2>

        <h3 className="text-xl font-semibold text-charcoal mb-3">Step 1: Access the Texas Board of Nursing Portal</h3>
        
        <p>
          Navigate to the official Texas Board of Nursing website at <strong>bon.texas.gov</strong>. Look for the "License Verification" or "Verify a License" section, typically found in the main navigation menu.
        </p>

        <div className="bg-red-50 border border-red-200 rounded-lg p-6 my-6">
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-red-600 text-sm">⚠️</span>
            </div>
            <div>
              <p className="font-medium text-red-800 mb-2">System Maintenance Alert</p>
              <p className="text-red-700 text-sm">
                The Texas Board website undergoes regular maintenance, typically during weekend evenings. Plan verification activities accordingly and avoid last-minute checks.
              </p>
            </div>
          </div>
        </div>

        <h3 className="text-xl font-semibold text-charcoal mb-3">Step 2: Choose Your Search Method</h3>
        
        <p>The Texas Board offers multiple search options for license verification:</p>
        
        <ul>
          <li><strong>License number search:</strong> Enter the complete RN or LPN license number for precise results</li>
          <li><strong>Name search:</strong> Search by first and last name (requires exact spelling)</li>
          <li><strong>SSN search:</strong> Available for certain authorized users with proper credentials</li>
        </ul>

        <h3 className="text-xl font-semibold text-charcoal mb-3">Step 3: Verify Essential License Information</h3>
        
        <p>Once you locate the license record, confirm these critical details:</p>
        
        <ul>
          <li><strong>License holder name:</strong> Must exactly match employment records</li>
          <li><strong>License type:</strong> RN (Registered Nurse) or LPN (Licensed Practical Nurse)</li>
          <li><strong>License number:</strong> Confirm this matches provided documentation</li>
          <li><strong>Initial license date:</strong> When the license was first issued</li>
          <li><strong>Current expiration date:</strong> License must be current and unexpired</li>
          <li><strong>License status:</strong> Should display "Active" or "Current"</li>
          <li><strong>Disciplinary history:</strong> Review any sanctions, restrictions, or actions</li>
        </ul>

        <h2 className="text-2xl font-bold text-charcoal mb-4 mt-8">Understanding Texas Nursing Licenses</h2>

        <h3 className="text-xl font-semibold text-charcoal mb-3">Registered Nurse (RN) Licenses</h3>
        
        <p>
          Texas issues RN licenses to candidates who complete approved nursing education programs and pass the NCLEX-RN examination:
        </p>
        
        <ul>
          <li>License numbers follow a specific Texas format</li>
          <li>Licenses expire every two years</li>
          <li>Continuing education requirements must be met for renewal</li>
          <li>Advanced practice endorsements may be added</li>
        </ul>

        <h3 className="text-xl font-semibold text-charcoal mb-3">Licensed Vocational Nurse (LVN) Licenses</h3>
        
        <p>
          Texas uses the term "Licensed Vocational Nurse" (LVN) instead of "Licensed Practical Nurse" (LPN). Key points:
        </p>
        
        <ul>
          <li>Equivalent to LPN licenses in other states</li>
          <li>Renewable every two years</li>
          <li>Scope of practice is more limited than RN</li>
          <li>Must practice under supervision of RN or physician</li>
        </ul>

        <h2 className="text-2xl font-bold text-charcoal mb-4 mt-8">Texas-Specific Verification Considerations</h2>

        <div className="space-y-4">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="font-medium text-blue-800 mb-2">Compact License Status</h4>
            <p className="text-blue-700 text-sm">
              Texas is a member of the Nursing Licensure Compact (NLC). Verify whether the nurse holds a Texas license or is practicing under compact privileges from another state.
            </p>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="font-medium text-blue-800 mb-2">Border State Considerations</h4>
            <p className="text-blue-700 text-sm">
              Many nurses work across Texas-Mexico border facilities. Ensure proper verification of both Texas licenses and any required endorsements for border practice.
            </p>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="font-medium text-blue-800 mb-2">Military Spouse Provisions</h4>
            <p className="text-blue-700 text-sm">
              Texas offers expedited licensing for military spouses. These licenses may have special provisions or temporary status that affects verification results.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-charcoal mb-4 mt-8">Comprehensive Verification Beyond State Boards</h2>

        <p>
          Complete credentialing requires verification across multiple authoritative databases:
        </p>

        <h3 className="text-xl font-semibold text-charcoal mb-3">Federal Exclusion Screening</h3>
        
        <ul>
          <li><strong>OIG List of Excluded Individuals/Entities:</strong> Mandatory check for all federal program participants</li>
          <li><strong>SAM.gov Exclusions:</strong> Federal contracting exclusion database</li>
          <li><strong>OFAC Specially Designated Nationals:</strong> Treasury Department sanctions screening</li>
        </ul>

        <h3 className="text-xl font-semibold text-charcoal mb-3">Additional Verification Sources</h3>
        
        <ul>
          <li><strong>National Practitioner Data Bank:</strong> Hospital-eligible organizations must query for adverse actions</li>
          <li><strong>CMS Provider Enrollment:</strong> Verify Medicare/Medicaid participation status</li>

          <li><strong>NPPES (NPI Registry):</strong> Verify National Provider Identifier information</li>
        </ul>

        <h2 className="text-2xl font-bold text-charcoal mb-4 mt-8">Common Texas Verification Pitfalls</h2>

        <div className="space-y-4">
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <h4 className="font-medium text-amber-800 mb-2">Name Variations and Aliases</h4>
            <p className="text-amber-700 text-sm">
              Texas nurses may practice under different name formats. Always verify maiden names, married names, and any professional aliases used.
            </p>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <h4 className="font-medium text-amber-800 mb-2">License Transfer Delays</h4>
            <p className="text-amber-700 text-sm">
              Nurses transferring from other states may experience delays in Texas license processing. Check for temporary practice permits during transition periods.
            </p>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <h4 className="font-medium text-amber-800 mb-2">Renewal Period Bottlenecks</h4>
            <p className="text-amber-700 text-sm">
              The Texas Board website can experience heavy traffic during license renewal periods. Plan verifications outside of peak renewal windows when possible.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-charcoal mb-4 mt-8">Automated Verification with API-Cert</h2>

        <p>
          Manual verification through the Texas Board website works for occasional checks, but becomes impractical for high-volume credentialing operations. API-Cert streamlines the entire process:
        </p>

        <ul>
          <li><strong>Real-time Texas integration:</strong> Direct access to Texas Board of Nursing data</li>
          <li><strong>Multi-source verification:</strong> Simultaneously checks state board plus 5 federal databases</li>
          <li><strong>Sub-second response times:</strong> Complete verification in under 20 milliseconds</li>
          <li><strong>Advanced name matching:</strong> Automatically handles name variations and aliases</li>
          <li><strong>Live data:</strong> Always current information from source systems</li>
          <li><strong>Compact state handling:</strong> Automatically detects and verifies NLC status</li>
        </ul>

        <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-emerald-800 mb-3">Example API Response for Texas RN</h3>
          <pre className="bg-charcoal text-gray-300 p-4 rounded-lg text-sm font-mono overflow-x-auto">
{`{
  "verified": true,
  "provider_type": "RN",
  "state": "TX",
  "full_name": "JENNIFER LYNN MARTINEZ",
  "license_number": "RN-758394",
  "status": "ACTIVE",
  "expiration_date": "2027-12-31",
  "disciplinary_flag": false,
  "compact_eligible": true,
  "oig_excluded": false,
  "sam_excluded": false, 
  "latency_ms": 14
}`}
          </pre>
        </div>

        <h2 className="text-2xl font-bold text-charcoal mb-4 mt-8">Best Practices for Texas Verifications</h2>

        <ul>
          <li><strong>Verify during recruitment:</strong> Check credentials before extending job offers</li>
          <li><strong>Monitor expiration dates:</strong> Set up alerts for upcoming license renewals</li>
          <li><strong>Document your process:</strong> Maintain detailed records of all verification activities</li>
          <li><strong>Train verification staff:</strong> Ensure team members understand Texas-specific requirements</li>
          <li><strong>Plan for contingencies:</strong> Have backup verification methods for system outages</li>
          <li><strong>Stay updated:</strong> Monitor Texas Board announcements for policy changes</li>
        </ul>

        <h2 className="text-2xl font-bold text-charcoal mb-4 mt-8">Regulatory Updates and Changes</h2>

        <p>
          The Texas nursing practice environment evolves regularly. Stay informed about:
        </p>

        <ul>
          <li>Changes to NLC participation and compact privileges</li>
          <li>Updates to continuing education requirements</li>
          <li>New disciplinary procedures and reporting requirements</li>
          <li>Emergency licensing provisions during public health events</li>
          <li>Technology updates to the verification portal</li>
        </ul>

        <h2 className="text-2xl font-bold text-charcoal mb-4 mt-8">Conclusion</h2>

        <p>
          Texas's large nursing population and complex regulatory environment make thorough license verification essential for healthcare organizations. While the Texas Board of Nursing portal provides the foundation for verification, comprehensive credentialing requires checking multiple federal databases—a process that can take significant time and resources.
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
              href="/blog/how-to-verify-nursing-license-new-york"
              className="block p-6 bg-white border border-border rounded-lg hover:border-emerald-brand/30 transition-colors"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                  NY
                </span>
              </div>
              <h4 className="font-semibold text-charcoal hover:text-emerald-brand transition-colors">
                How to Verify a Nursing License in New York
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
    </main>
  );
}