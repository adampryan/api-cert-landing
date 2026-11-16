import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Footer from '../../components/Footer';

export const metadata: Metadata = {
  title: "Multi-State Prescriber Verification in Texas | API-Cert",
  description: "Complete Texas prescriber credentialing guide including physician, NP, and PA verification across multiple state boards, DEA registration, and federal exclusion screening.",
  keywords: "Texas prescriber credentialing, physician license verification TX, DEA verification Texas, Texas Medical Board, NP credentialing Texas"
};

export default function TexasPresciberCredentialing() {
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
            <Link href="https://api-cert.oneweeklabs.com/portal/signup" className="text-sm bg-emerald-brand text-white px-4 py-2 rounded-lg hover:bg-teal-brand transition-colors">Sign Up</Link>
          </div>
        </div>
      </nav>

      {/* Breadcrumb and header */}
      <section className="bg-surface py-12">
        <div className="max-w-4xl mx-auto px-6">
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/blog" className="hover:text-emerald-brand">Blog</Link>
            <span className="mx-2">→</span>
            <span>Texas Prescriber Verification</span>
          </nav>
          
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
              TX
            </span>
            <time className="text-sm text-gray-500">March 22, 2026</time>
            <span className="text-sm text-gray-500">13 min read</span>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold text-charcoal mb-6">
            Multi-State Prescriber Verification in Texas
          </h1>
          
          <p className="text-xl text-gray-600 leading-relaxed">
            Texas has over 180,000 active prescribing providers serving the nation's second-largest state. With complex multi-board regulatory oversight and extensive border state practice, comprehensive credentialing verification is essential for healthcare compliance. This guide covers the verification process for Texas prescribers.
          </p>
        </div>
      </section>

      {/* Article content */}
      <article className="max-w-4xl mx-auto px-6 py-12 prose prose-lg prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-charcoal mb-4">Why Texas Prescriber Verification is Critical</h2>
        
        <p>
          Texas healthcare system operates under complex regulatory oversight with multiple professional boards and enhanced requirements for border state practice. Comprehensive verification is essential for:
        </p>
        
        <ul>
          <li><strong>Multi-board compliance:</strong> Texas has separate boards for different healthcare professions</li>
          <li><strong>CMS participation:</strong> Medicare and Medicaid require verified providers for enrollment and reimbursement</li>
          <li><strong>Border state practice verification:</strong> Many providers practice across Texas-Mexico and interstate borders</li>
          <li><strong>DEA compliance:</strong> Enhanced oversight for controlled substance prescribing in border regions</li>
          <li><strong>OIG screening requirements:</strong> Federal exclusion monitoring prevents hiring sanctioned providers</li>
          <li><strong>Texas Medicaid program participation:</strong> State Medicaid requires comprehensive credentialing</li>
          <li><strong>Professional liability protection:</strong> Comprehensive credentialing reduces malpractice exposure</li>
          <li><strong>CAQH compliance:</strong> Many Texas health systems use CAQH for provider data collection</li>
        </ul>

        <h2 className="text-2xl font-bold text-charcoal mb-4 mt-8">Texas Multi-Board Regulatory Structure</h2>

        <h3 className="text-xl font-semibold text-charcoal mb-3">Physicians (MD/DO)</h3>
        
        <p>
          Texas Medical Board regulates physician licenses with separate oversight for different practice types:
        </p>
        
        <ul>
          <li><strong>Texas Medical Board:</strong> Regulates all MDs and DOs</li>
          <li><strong>License verification:</strong> Access at tmb.state.tx.us</li>
          <li><strong>License format:</strong> 5-6 character alphanumeric (e.g., BP12345)</li>
          <li><strong>Renewal cycle:</strong> Every 2 years (even years for even-numbered licenses, odd years for odd-numbered)</li>
          <li><strong>CME requirements:</strong> 48 hours every 2 years including ethics, pain management, and human trafficking</li>
        </ul>

        <h3 className="text-xl font-semibold text-charcoal mb-3">Advanced Practice Registered Nurses (APRNs)</h3>
        
        <ul>
          <li><strong>Texas Board of Nursing:</strong> Regulates all nursing licenses and APRN recognition</li>
          <li><strong>APRN recognition:</strong> Separate recognition process beyond base RN license</li>
          <li><strong>Prescriptive authority:</strong> Delegated prescriptive authority through practice agreements</li>
          <li><strong>National certification required:</strong> Must maintain specialty certification</li>
        </ul>

        <h3 className="text-xl font-semibold text-charcoal mb-3">Physician Assistants</h3>
        
        <ul>
          <li><strong>Texas Physician Assistant Board:</strong> Dedicated PA regulatory board</li>
          <li><strong>License verification:</strong> Separate board with independent oversight</li>
          <li><strong>Prescriptive authority:</strong> Delegated authority through supervising physician agreements</li>
          <li><strong>NCCPA certification required:</strong> Must maintain national certification</li>
        </ul>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-6">
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-yellow-100 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-yellow-600 text-sm">⚠️</span>
            </div>
            <div>
              <p className="font-medium text-yellow-800 mb-2">Border State Practice Considerations</p>
              <p className="text-yellow-700 text-sm">
                Texas providers often practice across state lines and international borders. Verify all applicable state licenses and ensure compliance with interstate practice agreements and telemedicine regulations.
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-charcoal mb-4 mt-8">The Credentialing Verification Process</h2>

        <h3 className="text-xl font-semibold text-charcoal mb-3">Step 1: Texas State Professional Licenses</h3>
        
        <div className="space-y-4">
          <p><strong>Physicians (MD/DO):</strong></p>
          <ol className="list-decimal list-inside space-y-2 pl-4">
            <li>Navigate to Texas Medical Board website (tmb.state.tx.us)</li>
            <li>Access "License Verification" section</li>
            <li>Search by license number or provider name</li>
            <li>Verify current license status and renewal dates</li>
            <li>Review any disciplinary actions or practice restrictions</li>
            <li>Check continuing medical education compliance</li>
          </ol>

          <p><strong>APRNs:</strong></p>
          <ol className="list-decimal list-inside space-y-2 pl-4">
            <li>Verify base RN license through Texas Board of Nursing</li>
            <li>Confirm APRN recognition and specialty designation</li>
            <li>Verify prescriptive authority delegation agreements</li>
            <li>Check national certification status</li>
          </ol>

          <p><strong>Physician Assistants:</strong></p>
          <ol className="list-decimal list-inside space-y-2 pl-4">
            <li>Access Texas Physician Assistant Board verification portal</li>
            <li>Verify current license and NCCPA certification</li>
            <li>Confirm supervising physician delegation agreements</li>
          </ol>
        </div>

        <h3 className="text-xl font-semibold text-charcoal mb-3">Step 2: Multi-State License Verification</h3>
        
        <p>
          Due to Texas's size and border location, many providers hold multiple state licenses:
        </p>
        
        <ul>
          <li><strong>Adjacent state verification:</strong> Check New Mexico, Oklahoma, Arkansas, Louisiana licenses</li>
          <li><strong>Interstate compact participation:</strong> Verify compact eligibility for applicable professions</li>
          <li><strong>Telemedicine licensing:</strong> Confirm licenses in states where remote care is provided</li>
          <li><strong>Border practice compliance:</strong> Verify any international practice authorizations</li>
        </ul>

        <h3 className="text-xl font-semibold text-charcoal mb-3">Step 3: DEA Registration Verification</h3>
        
        <p>
          DEA verification is critical for Texas providers, especially in border regions:
        </p>
        
        <ul>
          <li><strong>DEA verification portal:</strong> apps.deadiversion.usdoj.gov</li>
          <li><strong>Multi-location tracking:</strong> Texas providers often have multiple practice sites</li>
          <li><strong>Schedule authorization verification:</strong> Confirm authorized controlled substance schedules</li>
          <li><strong>Border region considerations:</strong> Enhanced oversight for providers near international borders</li>
        </ul>

        <h3 className="text-xl font-semibold text-charcoal mb-3">Step 4: Federal Exclusion Database Screening</h3>

        <p>
          Comprehensive screening across all federal exclusion databases:
        </p>

        <h4 className="text-lg font-medium text-charcoal mb-2">OIG List of Excluded Individuals and Entities (LEIE)</h4>
        <ul>
          <li>HHS Office of Inspector General exclusions</li>
          <li>Monthly screening required for federal program participation</li>
          <li>Both mandatory and permissive exclusions included</li>
        </ul>

        <h4 className="text-lg font-medium text-charcoal mb-2">SAM.gov Exclusions Database</h4>
        <ul>
          <li>System for Award Management federal contractor exclusions</li>
          <li>Includes government contracting restrictions</li>
          <li>Broader scope than healthcare-specific databases</li>
        </ul>

        <h4 className="text-lg font-medium text-charcoal mb-2">OFAC Specially Designated Nationals</h4>
        <ul>
          <li>Treasury Department economic sanctions list</li>
          <li>Particularly relevant for border region providers</li>
          <li>Essential for anti-money laundering compliance</li>
        </ul>

        <h3 className="text-xl font-semibold text-charcoal mb-3">Step 5: National Provider Identifier (NPI) Registry</h3>
        
        <ul>
          <li><strong>NPPES registry verification:</strong> npiregistry.cms.hhs.gov</li>
          <li><strong>Multi-location validation:</strong> Confirm all Texas practice locations</li>
          <li><strong>Taxonomy code verification:</strong> Healthcare provider specialty classifications</li>
          <li><strong>Organizational affiliations:</strong> Health system and hospital affiliations</li>
        </ul>

        <h2 className="text-2xl font-bold text-charcoal mb-4 mt-8">Advanced Texas Requirements</h2>

        <h3 className="text-xl font-semibold text-charcoal mb-3">CAQH ProView Integration</h3>
        
        <p>
          Many Texas health systems require CAQH ProView participation:
        </p>
        
        <ul>
          <li><strong>Provider data collection:</strong> Centralized credentialing information management</li>
          <li><strong>Insurance network participation:</strong> Required for many health plan networks</li>
          <li><strong>Scheduled data loads:</strong> Board files are loaded on a schedule, not queried live</li>
          <li><strong>Multi-state coordination:</strong> Facilitates credentialing across state lines</li>
        </ul>

        <h3 className="text-xl font-semibold text-charcoal mb-3">Specialty Board Certifications</h3>
        
        <ul>
          <li><strong>American Board of Medical Specialties (ABMS):</strong> Physician specialty certifications</li>
          <li><strong>American Osteopathic Association (AOA):</strong> DO specialty board certifications</li>
          <li><strong>American Nurses Credentialing Center (ANCC):</strong> APRN specialty certifications</li>
          <li><strong>National Commission on Certification of PAs (NCCPA):</strong> PA certification verification</li>
        </ul>

        <div className="space-y-4 my-6">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="font-medium text-blue-800 mb-2">Border Region Practice Authorization</h4>
            <p className="text-blue-700 text-sm">
              Providers practicing in Texas border regions may require additional authorizations for cross-border care or special visa status verification.
            </p>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="font-medium text-blue-800 mb-2">Telemedicine Multi-State Compliance</h4>
            <p className="text-blue-700 text-sm">
              Texas providers using telemedicine across state lines must maintain licenses in all states where patients receive care, not just the provider's location.
            </p>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="font-medium text-blue-800 mb-2">Rural Health Clinic Requirements</h4>
            <p className="text-blue-700 text-sm">
              Providers working in Texas rural health clinics may have additional certification and supervision requirements to verify.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-charcoal mb-4 mt-8">Common Texas Verification Challenges</h2>

        <div className="space-y-4">
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <h4 className="font-medium text-red-800 mb-2">Multi-Board Coordination</h4>
            <p className="text-red-700 text-sm">
              Texas has separate boards for different professions, requiring familiarity with multiple verification systems and renewal cycles.
            </p>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <h4 className="font-medium text-red-800 mb-2">Complex Multi-State Practice</h4>
            <p className="text-red-700 text-sm">
              Verifying providers who practice across multiple states requires understanding various interstate agreements and compact participation.
            </p>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <h4 className="font-medium text-red-800 mb-2">Border Region Compliance</h4>
            <p className="text-red-700 text-sm">
              Providers in Texas border regions may have complex practice arrangements requiring verification of international authorizations.
            </p>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <h4 className="font-medium text-red-800 mb-2">Large Health System Integration</h4>
            <p className="text-red-700 text-sm">
              Texas has numerous large health systems with varying credentialing requirements and integration with CAQH and other systems.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-charcoal mb-4 mt-8">Manual Verification Time Analysis</h2>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Complete Texas Multi-State Verification</h3>
          <ul className="space-y-2 text-gray-700">
            <li>• Primary Texas board license verification: <strong>8 minutes</strong></li>
            <li>• Additional state license checks (avg 2 states): <strong>12 minutes</strong></li>
            <li>• DEA registration and multi-location verification: <strong>7 minutes</strong></li>
            <li>• OIG LEIE exclusion screening: <strong>4 minutes</strong></li>
            <li>• SAM.gov federal exclusions: <strong>3 minutes</strong></li>
            <li>• OFAC sanctions screening: <strong>3 minutes</strong></li>
            <li>• NPPES NPI registry verification: <strong>5 minutes</strong></li>
            <li>• Board certification verification: <strong>6 minutes</strong></li>
            <li>• CAQH ProView data verification: <strong>5 minutes</strong></li>
            <li>• Border region/special authorization checks: <strong>6 minutes</strong></li>
            <li>• Documentation and filing: <strong>10 minutes</strong></li>
            <li>• Quality review and follow-up: <strong>6 minutes</strong></li>
            <li className="border-t border-gray-300 pt-2 font-semibold">Total time per provider: <strong>75 minutes</strong></li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-charcoal mb-4 mt-8">API-Cert Automated Texas Multi-State Verification</h2>

        <p>
          API-Cert reports what Texas board files say, with the date each carried, plus OIG exclusion screening. It does not check other states&apos; boards, DEA, board certification, CAQH, or compact status:
        </p>

        <ul>
          <li><strong>Texas board files:</strong> Board-direct coverage, loaded on a schedule, with the date each file carried reported on every result</li>
          <li><strong>OIG exclusion screening:</strong> Screened against the OIG LEIE exclusion list</li>
          <li><strong>Dated results:</strong> Every result reports the date the board file or page carried</li>
        </ul>

        <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-emerald-800 mb-3">Sample Texas API Response</h3>
          <pre className="bg-charcoal text-gray-300 p-4 rounded-lg text-sm font-mono overflow-x-auto">
{`{
  "verified": true,
  "license_type": "MD",
  "state": "TX",
  "full_name": "CARLOS ANTONIO MARTINEZ",
  "license_number": "BP98765",
  "npi": "9876543210",
  "status": "ACTIVE",
  "expiration_date": "2027-05-31",
  "disciplinary_flag": false,
  "source": {
    "board_id": "tx-tmb",
    "board_name": "Texas Medical Board",
    "evidence_level": "board_file",
    "as_of": "2026-11-09"
  },
  "data_freshness": "2026-11-09",
  "stale": false,
  "oig_excluded": false,
  "screening": {
    "oig": { "status": "clear", "list_as_of": "2026-11-14", "matches": [] }
  }
}`}
          </pre>
        </div>

        <h2 className="text-2xl font-bold text-charcoal mb-4 mt-8">Texas Prescriber Credentialing Best Practices</h2>

        <ul>
          <li><strong>Multi-board license monitoring:</strong> Track renewals across Texas Medical Board, Board of Nursing, and PA Board</li>
          <li><strong>Border state verification:</strong> Verify licenses in all adjacent states where providers practice</li>
          <li><strong>Interstate compact compliance:</strong> Monitor compact participation for applicable provider types</li>
          <li><strong>Ongoing federal exclusion screening:</strong> Monthly OIG LEIE monitoring</li>
          <li><strong>CAQH ProView integration:</strong> Leverage CAQH for streamlined credentialing data management</li>
          <li><strong>Telemedicine compliance:</strong> Verify licenses in all states where remote care is provided</li>
          <li><strong>Specialty board tracking:</strong> Monitor certification maintenance across multiple specialties</li>
          <li><strong>Border region authorization:</strong> Track special practice authorizations for international border regions</li>
          <li><strong>Automated renewal monitoring:</strong> Implement systems to track complex multi-state renewal cycles</li>
        </ul>

        <h2 className="text-2xl font-bold text-charcoal mb-4 mt-8">Conclusion</h2>

        <p>
          Texas prescriber credentialing requires comprehensive verification across multiple boards and states due to the state's size, border location, and complex healthcare landscape. The need for multi-state license tracking, border region compliance, and integration with systems like CAQH make manual verification both complex and time-consuming.
        </p>

        <p>
          Organizations serving Texas healthcare systems face unique challenges with multi-state practice verification and border region compliance requirements. Automating the Texas board-file check and OIG screening removes two of the manual lookups; the remaining steps stay with your staff.
        </p>

        <p>
          Most importantly, a consistent process ensures no state license is overlooked, supporting the enhanced standards required by Texas health systems and regulatory requirements.
        </p>

        <p className="text-lg font-medium mt-6">
          Automate your Texas board-file and OIG checks. <Link href="/docs#register" className="text-emerald-brand hover:underline">Start your free trial at api-cert.com</Link>.
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
              href="/blog/prescriber-credentialing-california"
              className="block p-6 bg-white border border-border rounded-lg hover:border-emerald-brand/30 transition-colors"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                  CA
                </span>
              </div>
              <h4 className="font-semibold text-charcoal hover:text-emerald-brand transition-colors">
                How to Verify a Physician License in California
              </h4>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}