import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Footer from '../../components/Footer';

export const metadata: Metadata = {
  title: "How to Verify a Physician License in California | API-Cert",
  description: "Complete guide to California prescriber credentialing verification including DEA, state medical licenses, and OIG screening for MDs, DOs, NPs, and PAs.",
  keywords: "California physician license verification, prescriber credentialing CA, DEA verification California, California Medical Board, NP license verification CA"
};

export default function CaliforniaPresciberCredentialing() {
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
            <span>California Prescriber Credentialing</span>
          </nav>
          
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
              CA
            </span>
            <time className="text-sm text-gray-500">March 22, 2026</time>
            <span className="text-sm text-gray-500">11 min read</span>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold text-charcoal mb-6">
            How to Verify a Physician License in California
          </h1>
          
          <p className="text-xl text-gray-600 leading-relaxed">
            California has over 150,000 active prescribing providers across physicians, nurse practitioners, and physician assistants. Comprehensive credentialing verification is mandatory for Medicare/Medicaid participation and healthcare compliance. This guide covers the complete 9-point verification process for California prescribers.
          </p>
        </div>
      </section>

      {/* Article content */}
      <article className="max-w-4xl mx-auto px-6 py-12 prose prose-lg prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-charcoal mb-4">Why California Prescriber Verification is Critical</h2>
        
        <p>
          California's healthcare system operates under strict federal and state oversight requiring comprehensive credentialing for all prescribing providers. Proper verification is mandatory for:
        </p>
        
        <ul>
          <li><strong>CMS participation:</strong> Medicare and Medicaid require verified providers for enrollment and reimbursement</li>
          <li><strong>DEA compliance:</strong> Controlled substance prescribing demands valid DEA registration verification</li>
          <li><strong>OIG requirements:</strong> Federal exclusion screening prevents hiring sanctioned providers</li>
          <li><strong>State medical board standards:</strong> California Medical Board mandates current license verification</li>
          <li><strong>Professional liability protection:</strong> Comprehensive credentialing reduces negligent hiring exposure</li>
          <li><strong>Joint Commission accreditation:</strong> Hospital accreditation requires thorough provider verification</li>
          <li><strong>Malpractice insurance:</strong> Carriers demand complete credentialing documentation</li>
        </ul>

        <h2 className="text-2xl font-bold text-charcoal mb-4 mt-8">California Prescriber License Types & Boards</h2>

        <h3 className="text-xl font-semibold text-charcoal mb-3">Physicians (MD/DO)</h3>
        
        <p>
          California Medical Board regulates all physician licenses:
        </p>
        
        <ul>
          <li><strong>Medical Doctors (MD):</strong> Verify at mbc.ca.gov license search</li>
          <li><strong>Doctors of Osteopathy (DO):</strong> Also regulated by Medical Board since 2014</li>
          <li><strong>License format:</strong> Typically 6-8 digit number (e.g., A123456)</li>
          <li><strong>Renewal cycle:</strong> Every 2 years</li>
          <li><strong>CME requirements:</strong> 50 hours every 2 years</li>
        </ul>

        <h3 className="text-xl font-semibold text-charcoal mb-3">Nurse Practitioners</h3>
        
        <ul>
          <li><strong>Board of Registered Nursing:</strong> Verify at rn.ca.gov</li>
          <li><strong>Base RN license required:</strong> Must hold active California RN license</li>
          <li><strong>Certification requirements:</strong> National certification plus state authorization</li>
          <li><strong>Furnishing authorization:</strong> Required for prescriptive authority</li>
          <li><strong>Standardized procedure protocols:</strong> May be required depending on practice setting</li>
        </ul>

        <h3 className="text-xl font-semibold text-charcoal mb-3">Physician Assistants</h3>
        
        <ul>
          <li><strong>Physician Assistant Board:</strong> Verify at pab.ca.gov</li>
          <li><strong>Supervising physician requirement:</strong> Must have designated supervising physician</li>
          <li><strong>Delegation of services agreement:</strong> Required for prescriptive authority</li>
          <li><strong>License format:</strong> PA followed by numbers</li>
          <li><strong>National certification:</strong> Must maintain NCCPA certification</li>
        </ul>

        <h2 className="text-2xl font-bold text-charcoal mb-4 mt-8">Step-by-Step Verification Process</h2>

        <h3 className="text-xl font-semibold text-charcoal mb-3">Step 1: California State Medical License</h3>
        
        <div className="space-y-4">
          <p><strong>For Physicians (MD/DO):</strong></p>
          <ol className="list-decimal list-inside space-y-2 pl-4">
            <li>Navigate to Medical Board of California at mbc.ca.gov</li>
            <li>Access "License Verification" section</li>
            <li>Search by license number or provider name</li>
            <li>Verify license status, expiration date, and disciplinary history</li>
            <li>Check for any restrictions or probationary conditions</li>
          </ol>

          <p><strong>For Nurse Practitioners:</strong></p>
          <ol className="list-decimal list-inside space-y-2 pl-4">
            <li>Verify base RN license at rn.ca.gov</li>
            <li>Confirm NP certification and furnishing authorization</li>
            <li>Check national certification status (AANP, ANCC, etc.)</li>
          </ol>

          <p><strong>For Physician Assistants:</strong></p>
          <ol className="list-decimal list-inside space-y-2 pl-4">
            <li>Access Physician Assistant Board at pab.ca.gov</li>
            <li>Verify current license and NCCPA certification</li>
            <li>Confirm supervising physician relationship</li>
          </ol>
        </div>

        <h3 className="text-xl font-semibold text-charcoal mb-3">Step 2: DEA Registration Verification</h3>
        
        <p>
          DEA verification is critical for any prescriber handling controlled substances:
        </p>
        
        <ul>
          <li><strong>DEA website:</strong> Use apps.deadiversion.usdoj.gov for verification</li>
          <li><strong>Registration format:</strong> Two letters + 7 numbers (e.g., BC1234567)</li>
          <li><strong>First letter indicates registrant type:</strong> A/B for physicians, M for mid-level practitioners</li>
          <li><strong>Expiration dates:</strong> DEA registrations typically expire every 3 years</li>
          <li><strong>Schedule authorization:</strong> Verify authorized controlled substance schedules</li>
          <li><strong>Practice locations:</strong> DEA registrations are site-specific</li>
        </ul>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-6">
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-yellow-100 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-yellow-600 text-sm">⚠️</span>
            </div>
            <div>
              <p className="font-medium text-yellow-800 mb-2">DEA Registration Requirements</p>
              <p className="text-yellow-700 text-sm">
                California providers must hold separate DEA registrations for each practice location where they prescribe controlled substances. A single provider may hold multiple active DEA registrations.
              </p>
            </div>
          </div>
        </div>

        <h3 className="text-xl font-semibold text-charcoal mb-3">Step 3: Federal Exclusion Database Screening</h3>

        <p>
          Federal law requires screening against multiple exclusion databases:
        </p>

        <h4 className="text-lg font-medium text-charcoal mb-2">OIG List of Excluded Individuals and Entities (LEIE)</h4>
        <ul>
          <li>Access at oig.hhs.gov/exclusions</li>
          <li>Monthly screening required for Medicare/Medicaid participation</li>
          <li>Exclusions prevent federal healthcare program participation</li>
          <li>Both general and permissive exclusions included</li>
        </ul>

        <h4 className="text-lg font-medium text-charcoal mb-2">SAM.gov Exclusions Database</h4>
        <ul>
          <li>System for Award Management exclusions</li>
          <li>Broader government contract exclusions</li>
          <li>May include providers not in OIG LEIE</li>
        </ul>

        <h4 className="text-lg font-medium text-charcoal mb-2">OFAC Specially Designated Nationals (SDN)</h4>
        <ul>
          <li>Treasury Department sanctions list</li>
          <li>Includes individuals and entities with restricted financial dealings</li>
          <li>Critical for compliance with economic sanctions</li>
        </ul>

        <h3 className="text-xl font-semibold text-charcoal mb-3">Step 4: National Provider Identifier (NPI) Verification</h3>
        
        <ul>
          <li><strong>NPPES registry:</strong> Verify at npiregistry.cms.hhs.gov</li>
          <li><strong>NPI format:</strong> 10-digit number for all healthcare providers</li>
          <li><strong>Provider information:</strong> Confirm name, credentials, practice locations</li>
          <li><strong>Taxonomy codes:</strong> Verify specialty and healthcare provider types</li>
          <li><strong>Enumeration date:</strong> When NPI was first assigned</li>
        </ul>

        <h2 className="text-2xl font-bold text-charcoal mb-4 mt-8">Advanced California Credentialing Requirements</h2>

        <h3 className="text-xl font-semibold text-charcoal mb-3">Specialty Board Certifications</h3>
        
        <p>
          Many California healthcare systems require board certification verification:
        </p>
        
        <ul>
          <li><strong>American Board of Medical Specialties (ABMS):</strong> Verify MD certifications</li>
          <li><strong>American Osteopathic Association (AOA):</strong> DO specialty certifications</li>
          <li><strong>American Academy of Nurse Practitioners (AANP):</strong> NP certifications</li>
          <li><strong>National Commission on Certification of PAs (NCCPA):</strong> PA certifications</li>
        </ul>

        <h3 className="text-xl font-semibold text-charcoal mb-3">California-Specific Requirements</h3>
        
        <div className="space-y-4">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="font-medium text-blue-800 mb-2">Controlled Substance Permit</h4>
            <p className="text-blue-700 text-sm">
              California requires additional state controlled substance permits for certain providers. Verify through the California Department of Justice Bureau of Narcotic Enforcement.
            </p>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="font-medium text-blue-800 mb-2">Furnishing Licenses for NPs</h4>
            <p className="text-blue-700 text-sm">
              Nurse practitioners require separate furnishing authorization from the Board of Registered Nursing for prescriptive authority in California.
            </p>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="font-medium text-blue-800 mb-2">Language Requirements</h4>
            <p className="text-blue-700 text-sm">
              California has significant non-English speaking populations. Some healthcare systems verify language proficiency for providers in multilingual communities.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-charcoal mb-4 mt-8">Common California Verification Challenges</h2>

        <div className="space-y-4">
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <h4 className="font-medium text-red-800 mb-2">Multiple Board Complexity</h4>
            <p className="text-red-700 text-sm">
              California has separate boards for different provider types. Ensure you're checking the correct regulatory body for each credential type.
            </p>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <h4 className="font-medium text-red-800 mb-2">Name Variations and Cultural Names</h4>
            <p className="text-red-700 text-sm">
              California's diverse population includes many names with accent marks, hyphens, or cultural variations that may not match exactly across databases.
            </p>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <h4 className="font-medium text-red-800 mb-2">Out-of-State License Dependencies</h4>
            <p className="text-red-700 text-sm">
              Many California providers hold licenses in multiple states. Comprehensive verification may require checking primary state of training or previous practice locations.
            </p>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <h4 className="font-medium text-red-800 mb-2">Locum Tenens and Travel Providers</h4>
            <p className="text-red-700 text-sm">
              California attracts temporary providers from across the country. Verify both home state credentials and California authorization or temporary licenses.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-charcoal mb-4 mt-8">Manual Verification Time and Cost Analysis</h2>

        <p>
          Comprehensive prescriber verification requires checking multiple databases and can be time-intensive:
        </p>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Manual 9-Point Verification Breakdown</h3>
          <ul className="space-y-2 text-gray-700">
            <li>• California medical/nursing/PA board verification: <strong>8 minutes</strong></li>
            <li>• DEA registration verification: <strong>5 minutes</strong></li>
            <li>• OIG LEIE screening: <strong>4 minutes</strong></li>
            <li>• SAM.gov exclusions check: <strong>3 minutes</strong></li>
            <li>• OFAC SDN screening: <strong>3 minutes</strong></li>
            <li>• NPI registry verification: <strong>4 minutes</strong></li>
            <li>• Board certification check: <strong>6 minutes</strong></li>
            <li>• Documentation and filing: <strong>7 minutes</strong></li>
            <li>• Quality review and follow-up: <strong>5 minutes</strong></li>
            <li className="border-t border-gray-300 pt-2 font-semibold">Total time per provider: <strong>45 minutes</strong></li>
          </ul>
          
          <p className="text-gray-600 mt-4 text-sm">
            Cost calculation: 45 minutes × $28/hour (credentialing specialist) = <strong>$21.00 per verification</strong>
          </p>
        </div>

        <h2 className="text-2xl font-bold text-charcoal mb-4 mt-8">API-Cert's 9-Point Automated Verification</h2>

        <p>
          API-Cert automates the entire California prescriber credentialing process with real-time verification across all required databases:
        </p>

        <ul>
          <li><strong>California state board integration:</strong> Real-time data from Medical Board, RN Board, and PA Board</li>
          <li><strong>DEA verification:</strong> Current registration status, schedules, and expiration dates</li>
          <li><strong>Federal exclusion screening:</strong> Simultaneous OIG, SAM, and OFAC database checks</li>
          <li><strong>NPI registry verification:</strong> Provider demographics, taxonomy, and enumeration details</li>
          <li><strong>Board certification lookup:</strong> ABMS, AOA, AANP, and NCCPA verification</li>
          <li><strong>Intelligent matching:</strong> Handles name variations, aliases, and cultural names automatically</li>
          <li><strong>Sub-second response:</strong> Complete 9-point verification in under 500 milliseconds</li>
          <li><strong>Comprehensive audit trail:</strong> Complete documentation for compliance and accreditation</li>
          <li><strong>Real-time updates:</strong> Always current data from authoritative sources</li>
        </ul>

        <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-emerald-800 mb-3">Sample API Response for California Physician</h3>
          <pre className="bg-charcoal text-gray-300 p-4 rounded-lg text-sm font-mono overflow-x-auto">
{`{
  "verified": true,
  "provider_type": "MD",
  "state": "CA",
  "full_name": "MICHAEL JAMES THOMPSON",
  "license_number": "A98765",
  "status": "ACTIVE",
  "expiration_date": "2027-06-30",
  "disciplinary_flag": false,
  "dea_number": "BT1234567",
  "dea_expiration": "2026-12-31",
  "dea_schedules": "II-V",
  "board_certified": true,
  "specialty": "Internal Medicine",
  "npi": "1234567890",
  "oig_excluded": false,
  "sam_excluded": false,
  "ofac_flagged": false,
  "latency_ms": 287
}`}
          </pre>
        </div>

        <h2 className="text-2xl font-bold text-charcoal mb-4 mt-8">ROI Analysis: Manual vs. Automated</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Manual Verification Cost</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Staff time (45 min @ $28/hour): <strong>$21.00</strong></li>
              <li>• Database access fees: <strong>$3.50</strong></li>
              <li>• Error risk and rework: <strong>$8.00</strong></li>
              <li>• Documentation overhead: <strong>$4.00</strong></li>
              <li className="border-t border-gray-300 pt-2 font-semibold">Total per verification: <strong>$36.50</strong></li>
            </ul>
          </div>

          <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-emerald-800 mb-4">API-Cert Automated Cost</h3>
            <ul className="space-y-2 text-emerald-700">
              <li>• API call cost: <strong>$0.45</strong></li>
              <li>• Staff review (3 min @ $28/hour): <strong>$1.40</strong></li>
              <li>• Automated documentation: <strong>$0.00</strong></li>
              <li>• Error risk: <strong>$0.00</strong></li>
              <li className="border-t border-emerald-300 pt-2 font-semibold">Total per verification: <strong>$1.85</strong></li>
            </ul>
          </div>
        </div>

        <p className="text-lg font-medium text-center mt-6">
          <strong>Savings per verification: $34.65 (95% cost reduction)</strong>
        </p>

        <h2 className="text-2xl font-bold text-charcoal mb-4 mt-8">California Prescriber Verification Best Practices</h2>

        <ul>
          <li><strong>Verify before hiring:</strong> Complete credentialing before employment offers</li>
          <li><strong>Monitor expiration cycles:</strong> Track renewal dates for licenses, DEA, and certifications</li>
          <li><strong>Monthly exclusion screening:</strong> Federal law requires ongoing OIG monitoring</li>
          <li><strong>Document thoroughly:</strong> Maintain audit trails for regulatory compliance</li>
          <li><strong>Train credentialing staff:</strong> Ensure understanding of California-specific requirements</li>
          <li><strong>Plan for scale:</strong> Consider automation for high-volume credentialing operations</li>
          <li><strong>Stay updated:</strong> Monitor Board announcements and regulatory changes</li>
          <li><strong>Verify specialty requirements:</strong> Some specialties have additional California requirements</li>
        </ul>

        <h2 className="text-2xl font-bold text-charcoal mb-4 mt-8">Conclusion</h2>

        <p>
          California prescriber credentialing requires verification across multiple state and federal databases—a complex process that becomes unwieldy when managed manually. The state's large provider population and strict regulatory environment make comprehensive verification both critical and time-consuming.
        </p>

        <p>
          Organizations processing regular credentialing face significant efficiency and cost challenges with manual verification. The 95% cost reduction and elimination of human error through automated verification delivers compelling ROI while ensuring consistent, comprehensive provider screening.
        </p>

        <p>
          Most importantly, automated systems ensure no database is overlooked and all verifications maintain the same rigorous standard—critical for regulatory compliance and patient safety.
        </p>

        <p className="text-lg font-medium mt-6">
          Complete 9-point prescriber verification in under a second. <Link href="/docs#register" className="text-emerald-brand hover:underline">Try API-Cert free at api-cert.com</Link>.
        </p>
      </article>

      {/* Related articles */}
      <section className="bg-surface py-12">
        <div className="max-w-4xl mx-auto px-6">
          <h3 className="text-2xl font-bold text-charcoal mb-6">Related Articles</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Link 
              href="/blog/prescriber-credentialing-florida"
              className="block p-6 bg-white border border-border rounded-lg hover:border-emerald-brand/30 transition-colors"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                  FL
                </span>
              </div>
              <h4 className="font-semibold text-charcoal hover:text-emerald-brand transition-colors">
                Prescriber Credentialing in Florida: DEA, License, and OIG Verification
              </h4>
            </Link>
            <Link 
              href="/blog/prescriber-credentialing-massachusetts"
              className="block p-6 bg-white border border-border rounded-lg hover:border-emerald-brand/30 transition-colors"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  MA
                </span>
              </div>
              <h4 className="font-semibold text-charcoal hover:text-emerald-brand transition-colors">
                Multi-State Prescriber Verification in Massachusetts
              </h4>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}