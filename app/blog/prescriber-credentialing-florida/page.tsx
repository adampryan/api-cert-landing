import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Footer from '../../components/Footer';

export const metadata: Metadata = {
  title: "Prescriber Credentialing in Florida: DEA, License, and OIG Verification | API-Cert",
  description: "Complete Florida prescriber verification guide covering physician, NP, and PA credentialing including DEA registration, state board licenses, and federal exclusion screening.",
  keywords: "Florida prescriber credentialing, physician license verification FL, DEA verification Florida, Florida Board of Medicine, NP credentialing Florida"
};

export default function FloridaPresciberCredentialing() {
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
            <span>Florida Prescriber Credentialing</span>
          </nav>
          
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
              FL
            </span>
            <time className="text-sm text-gray-500">March 22, 2026</time>
            <span className="text-sm text-gray-500">10 min read</span>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold text-charcoal mb-6">
            Prescriber Credentialing in Florida: DEA, License, and OIG Verification
          </h1>
          
          <p className="text-xl text-gray-600 leading-relaxed">
            Florida has over 90,000 active prescribing providers serving one of the nation's largest populations. With strict opioid prescribing regulations and comprehensive federal oversight, complete credentialing verification is essential for compliance and patient safety. This guide covers the full 9-point verification process for Florida prescribers.
          </p>
        </div>
      </section>

      {/* Article content */}
      <article className="max-w-4xl mx-auto px-6 py-12 prose prose-lg prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-charcoal mb-4">Why Florida Prescriber Verification is Essential</h2>
        
        <p>
          Florida's healthcare system operates under enhanced federal and state scrutiny due to its history with prescription drug abuse. Comprehensive prescriber verification is mandatory for:
        </p>
        
        <ul>
          <li><strong>DEA compliance:</strong> Enhanced oversight for controlled substance prescribing</li>
          <li><strong>Florida PDMP requirements:</strong> Mandatory prescription monitoring program participation</li>
          <li><strong>CMS participation:</strong> Medicare and Medicaid require verified providers for reimbursement</li>
          <li><strong>OIG screening:</strong> Federal exclusion monitoring prevents hiring sanctioned providers</li>
          <li><strong>State board compliance:</strong> Multiple Florida boards regulate different provider types</li>
          <li><strong>Opioid prescribing regulations:</strong> Enhanced requirements for pain management prescribers</li>
          <li><strong>Professional liability protection:</strong> Comprehensive credentialing reduces malpractice exposure</li>
        </ul>

        <h2 className="text-2xl font-bold text-charcoal mb-4 mt-8">Florida Prescriber Regulatory Structure</h2>

        <h3 className="text-xl font-semibold text-charcoal mb-3">Physicians (MD/DO)</h3>
        
        <p>
          Florida Board of Medicine and Board of Osteopathic Medicine regulate physician licenses:
        </p>
        
        <ul>
          <li><strong>Board of Medicine:</strong> Regulates MDs - verify at flhealthsource.gov</li>
          <li><strong>Board of Osteopathic Medicine:</strong> Regulates DOs separately</li>
          <li><strong>License format:</strong> ME followed by 6-7 numbers (e.g., ME123456)</li>
          <li><strong>Renewal cycle:</strong> Every 2 years</li>
          <li><strong>CME requirements:</strong> 40 hours every 2 years, including 2 hours of prevention of medical errors</li>
        </ul>

        <h3 className="text-xl font-semibold text-charcoal mb-3">Advanced Practice Registered Nurses (APRNs)</h3>
        
        <ul>
          <li><strong>Florida Board of Nursing:</strong> Regulates all APRN types</li>
          <li><strong>Nurse Practitioners:</strong> Independent practice authority with prescriptive privileges</li>
          <li><strong>Clinical Nurse Specialists:</strong> Specialized advanced practice certification</li>
          <li><strong>Certified Registered Nurse Anesthetists:</strong> Anesthesia practice authority</li>
          <li><strong>Certified Nurse Midwives:</strong> Midwifery and women's health focus</li>
        </ul>

        <h3 className="text-xl font-semibold text-charcoal mb-3">Physician Assistants</h3>
        
        <ul>
          <li><strong>Florida Board of Medicine:</strong> PAs regulated under physician board</li>
          <li><strong>Supervising physician requirement:</strong> Must have designated supervising physician</li>
          <li><strong>Formulary restrictions:</strong> Limited controlled substance prescribing authority</li>
          <li><strong>NCCPA certification required:</strong> Must maintain national certification</li>
        </ul>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-6">
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-yellow-100 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-yellow-600 text-sm">⚠️</span>
            </div>
            <div>
              <p className="font-medium text-yellow-800 mb-2">Florida Opioid Prescribing Requirements</p>
              <p className="text-yellow-700 text-sm">
                Florida has enhanced requirements for opioid prescribing including mandatory PDMP checks, continuing education requirements, and additional DEA oversight for high-volume prescribers.
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-charcoal mb-4 mt-8">Complete 9-Point Verification Process</h2>

        <h3 className="text-xl font-semibold text-charcoal mb-3">Step 1: Florida State Professional License</h3>
        
        <div className="space-y-4">
          <p><strong>Using Florida Health Source Portal:</strong></p>
          <ol className="list-decimal list-inside space-y-2 pl-4">
            <li>Navigate to flhealthsource.gov</li>
            <li>Select "License Verification" from the menu</li>
            <li>Choose the appropriate board (Medicine, Osteopathic Medicine, Nursing)</li>
            <li>Search by license number or provider name</li>
            <li>Verify current status, expiration date, and any disciplinary actions</li>
          </ol>

          <p><strong>Key Information to Verify:</strong></p>
          <ul>
            <li>License holder name (exact match to employment records)</li>
            <li>License number and type</li>
            <li>Original issue date and current expiration</li>
            <li>License status (Active, Inactive, Suspended, etc.)</li>
            <li>Any disciplinary actions or restrictions</li>
            <li>Continuing education compliance</li>
          </ul>
        </div>

        <h3 className="text-xl font-semibold text-charcoal mb-3">Step 2: DEA Registration Verification</h3>
        
        <p>
          Florida's enhanced oversight makes DEA verification critical:
        </p>
        
        <ul>
          <li><strong>DEA verification portal:</strong> apps.deadiversion.usdoj.gov</li>
          <li><strong>Registration format:</strong> Two letters + 7 numbers</li>
          <li><strong>Registrant type identification:</strong> First letter indicates provider type</li>
          <li><strong>Schedule authorization:</strong> Verify authorized controlled substance schedules</li>
          <li><strong>Expiration monitoring:</strong> DEA registrations typically expire every 3 years</li>
          <li><strong>Practice address verification:</strong> DEA registrations are location-specific</li>
        </ul>

        <div className="space-y-4 my-6">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="font-medium text-blue-800 mb-2">Florida PDMP Integration</h4>
            <p className="text-blue-700 text-sm">
              Florida requires prescribers to register with the Prescription Drug Monitoring Program (PDMP). Some healthcare systems verify PDMP registration as part of credentialing.
            </p>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="font-medium text-blue-800 mb-2">Enhanced Opioid Requirements</h4>
            <p className="text-blue-700 text-sm">
              Providers prescribing opioids may require additional training certification and enhanced DEA monitoring. Verify compliance with Florida's opioid prescribing regulations.
            </p>
          </div>
        </div>

        <h3 className="text-xl font-semibold text-charcoal mb-3">Step 3: Federal Exclusion Database Screening</h3>

        <p>
          Comprehensive federal screening is required for Medicare/Medicaid participation:
        </p>

        <h4 className="text-lg font-medium text-charcoal mb-2">OIG List of Excluded Individuals and Entities (LEIE)</h4>
        <ul>
          <li>Access at oig.hhs.gov/exclusions</li>
          <li>Monthly screening required for ongoing compliance</li>
          <li>Both mandatory and permissive exclusions included</li>
          <li>Exclusions prevent all federal healthcare program participation</li>
        </ul>

        <h4 className="text-lg font-medium text-charcoal mb-2">SAM.gov Exclusions Database</h4>
        <ul>
          <li>System for Award Management federal exclusions</li>
          <li>Broader scope than OIG LEIE</li>
          <li>Includes government contract exclusions</li>
        </ul>

        <h4 className="text-lg font-medium text-charcoal mb-2">OFAC Specially Designated Nationals</h4>
        <ul>
          <li>Treasury Department economic sanctions list</li>
          <li>Individuals and entities with restricted financial dealings</li>
          <li>Critical for anti-money laundering compliance</li>
        </ul>

        <h3 className="text-xl font-semibold text-charcoal mb-3">Step 4: National Provider Identifier (NPI) Verification</h3>
        
        <ul>
          <li><strong>NPPES registry access:</strong> npiregistry.cms.hhs.gov</li>
          <li><strong>Provider demographics:</strong> Confirm name, credentials, and contact information</li>
          <li><strong>Taxonomy codes:</strong> Verify specialty classifications and provider types</li>
          <li><strong>Practice locations:</strong> Confirm all practice addresses</li>
          <li><strong>Enumeration date:</strong> When NPI was originally assigned</li>
        </ul>

        <h2 className="text-2xl font-bold text-charcoal mb-4 mt-8">Additional Florida-Specific Verifications</h2>

        <h3 className="text-xl font-semibold text-charcoal mb-3">Controlled Substance Prescribing Authority</h3>
        
        <ul>
          <li><strong>Schedule II-V authorization:</strong> Verify specific controlled substance schedules</li>
          <li><strong>Pain management certification:</strong> Additional requirements for chronic pain prescribers</li>
          <li><strong>APRN prescriptive authority:</strong> Nurse practitioners have independent prescribing rights</li>
          <li><strong>PA formulary restrictions:</strong> Physician assistants have limited controlled substance authority</li>
        </ul>

        <h3 className="text-xl font-semibold text-charcoal mb-3">Board Certification Verification</h3>
        
        <ul>
          <li><strong>American Board of Medical Specialties (ABMS):</strong> Physician specialty certifications</li>
          <li><strong>American Osteopathic Association (AOA):</strong> DO specialty boards</li>
          <li><strong>American Nurses Credentialing Center (ANCC):</strong> APRN certifications</li>
          <li><strong>National Commission on Certification of PAs:</strong> PA-C verification</li>
        </ul>

        <h2 className="text-2xl font-bold text-charcoal mb-4 mt-8">Common Florida Credentialing Challenges</h2>

        <div className="space-y-4">
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <h4 className="font-medium text-red-800 mb-2">Multi-Board Complexity</h4>
            <p className="text-red-700 text-sm">
              Florida has separate boards for MDs and DOs, plus nursing board for APRNs. Ensure you're checking the correct regulatory authority for each provider type.
            </p>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <h4 className="font-medium text-red-800 mb-2">Seasonal Provider Influx</h4>
            <p className="text-red-700 text-sm">
              Florida attracts many temporary and locum tenens providers, especially during winter months. Verify both home state licenses and Florida temporary authorizations.
            </p>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <h4 className="font-medium text-red-800 mb-2">Enhanced Opioid Oversight</h4>
            <p className="text-red-700 text-sm">
              Providers with pain management practices face additional scrutiny. Verify compliance with enhanced training requirements and PDMP participation.
            </p>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <h4 className="font-medium text-red-800 mb-2">Hurricane and Emergency Authorizations</h4>
            <p className="text-red-700 text-sm">
              Florida frequently activates emergency provider authorizations during hurricanes and natural disasters. Verify the scope and duration of emergency credentials.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-charcoal mb-4 mt-8">Manual Verification Time and Cost Analysis</h2>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Complete Florida Prescriber Verification</h3>
          <ul className="space-y-2 text-gray-700">
            <li>• Florida Health Source license verification: <strong>7 minutes</strong></li>
            <li>• DEA registration and schedule verification: <strong>6 minutes</strong></li>
            <li>• OIG LEIE exclusion screening: <strong>4 minutes</strong></li>
            <li>• SAM.gov federal exclusions: <strong>3 minutes</strong></li>
            <li>• OFAC sanctions screening: <strong>3 minutes</strong></li>
            <li>• NPPES NPI registry verification: <strong>4 minutes</strong></li>
            <li>• Board certification lookup: <strong>5 minutes</strong></li>
            <li>• PDMP registration check (if required): <strong>3 minutes</strong></li>
            <li>• Documentation and filing: <strong>8 minutes</strong></li>
            <li>• Quality review and follow-up: <strong>5 minutes</strong></li>
            <li className="border-t border-gray-300 pt-2 font-semibold">Total time per provider: <strong>48 minutes</strong></li>
          </ul>
          
          <p className="text-gray-600 mt-4 text-sm">
            Cost calculation: 48 minutes × $27/hour (credentialing specialist) = <strong>$21.60 per verification</strong>
          </p>
        </div>

        <h2 className="text-2xl font-bold text-charcoal mb-4 mt-8">API-Cert Automated Florida Verification</h2>

        <p>
          API-Cert provides comprehensive Florida prescriber verification with real-time integration across all required databases:
        </p>

        <ul>
          <li><strong>Florida board integration:</strong> Real-time data from Board of Medicine, Board of Osteopathic Medicine, and Board of Nursing</li>
          <li><strong>Enhanced DEA verification:</strong> Registration status, schedules, expiration dates, and practice locations</li>
          <li><strong>Complete federal screening:</strong> Simultaneous OIG, SAM, and OFAC database verification</li>
          <li><strong>NPI registry validation:</strong> Provider demographics, taxonomy codes, and practice information</li>
          <li><strong>Board certification lookup:</strong> ABMS, AOA, ANCC, and NCCPA verification</li>
          <li><strong>PDMP registration status:</strong> Florida prescription monitoring program compliance</li>
          <li><strong>Intelligent name matching:</strong> Handles aliases, maiden names, and cultural variations</li>
          <li><strong>Sub-second response:</strong> Complete verification in under 400 milliseconds</li>
          <li><strong>Comprehensive documentation:</strong> Full audit trail for regulatory compliance</li>
        </ul>

        <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-emerald-800 mb-3">Sample API Response for Florida Physician</h3>
          <pre className="bg-charcoal text-gray-300 p-4 rounded-lg text-sm font-mono overflow-x-auto">
{`{
  "verified": true,
  "provider_type": "MD",
  "state": "FL",
  "full_name": "ROBERT CHARLES MARTINEZ",
  "license_number": "ME98765",
  "status": "ACTIVE",
  "expiration_date": "2027-03-31",
  "disciplinary_flag": false,
  "dea_number": "BM7654321",
  "dea_expiration": "2026-08-31",
  "dea_schedules": "II-V",
  "board_certified": true,
  "specialty": "Family Medicine",
  "npi": "9876543210",
  "oig_excluded": false,
  "sam_excluded": false,
  "ofac_flagged": false,
  "pdmp_registered": true,
  "latency_ms": 342
}`}
          </pre>
        </div>

        <h2 className="text-2xl font-bold text-charcoal mb-4 mt-8">Cost Comparison: Manual vs. Automated</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Manual Verification Cost</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Staff time (48 min @ $27/hour): <strong>$21.60</strong></li>
              <li>• Database access fees: <strong>$3.00</strong></li>
              <li>• Documentation overhead: <strong>$4.50</strong></li>
              <li>• Error risk and rework: <strong>$7.50</strong></li>
              <li className="border-t border-gray-300 pt-2 font-semibold">Total per verification: <strong>$36.60</strong></li>
            </ul>
          </div>

          <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-emerald-800 mb-4">API-Cert Automated Cost</h3>
            <ul className="space-y-2 text-emerald-700">
              <li>• API call cost: <strong>$0.40</strong></li>
              <li>• Staff review (3 min @ $27/hour): <strong>$1.35</strong></li>
              <li>• Automated documentation: <strong>$0.00</strong></li>
              <li>• Error risk: <strong>$0.00</strong></li>
              <li className="border-t border-emerald-300 pt-2 font-semibold">Total per verification: <strong>$1.75</strong></li>
            </ul>
          </div>
        </div>

        <p className="text-lg font-medium text-center mt-6">
          <strong>Savings per verification: $34.85 (95% cost reduction)</strong>
        </p>

        <h2 className="text-2xl font-bold text-charcoal mb-4 mt-8">Florida Prescriber Credentialing Best Practices</h2>

        <ul>
          <li><strong>Pre-employment verification:</strong> Complete credentialing before job offers</li>
          <li><strong>Monitor renewal cycles:</strong> Track license, DEA, and certification expiration dates</li>
          <li><strong>Monthly OIG screening:</strong> Federal requirement for ongoing exclusion monitoring</li>
          <li><strong>Document PDMP compliance:</strong> Verify prescription monitoring program registration</li>
          <li><strong>Opioid prescriber oversight:</strong> Enhanced verification for pain management providers</li>
          <li><strong>Emergency authorization tracking:</strong> Monitor temporary credentials during disasters</li>
          <li><strong>Multi-state verification:</strong> Check home state licenses for locum tenens providers</li>
          <li><strong>Automated monitoring:</strong> Consider real-time systems for high-volume operations</li>
        </ul>

        <h2 className="text-2xl font-bold text-charcoal mb-4 mt-8">Conclusion</h2>

        <p>
          Florida's enhanced regulatory environment and large provider population make comprehensive prescriber credentialing both complex and time-intensive. The state's focus on opioid oversight and federal compliance requirements demand thorough verification across multiple databases.
        </p>

        <p>
          Organizations processing regular credentialing face significant efficiency challenges with manual verification. The 95% cost reduction through automation, combined with elimination of human error and comprehensive audit trails, provides compelling benefits for Florida healthcare operations.
        </p>

        <p>
          Most importantly, automated verification ensures consistent, comprehensive screening that meets Florida's enhanced regulatory requirements while protecting patient safety and organizational compliance.
        </p>

        <p className="text-lg font-medium mt-6">
          Automate your Florida prescriber credentialing with real-time verification. <Link href="/docs#register" className="text-emerald-brand hover:underline">Start free trial at api-cert.com</Link>.
        </p>
      </article>

      {/* Related articles */}
      <section className="bg-surface py-12">
        <div className="max-w-4xl mx-auto px-6">
          <h3 className="text-2xl font-bold text-charcoal mb-6">Related Articles</h3>
          <div className="grid md:grid-cols-2 gap-6">
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
            <Link 
              href="/blog/prescriber-credentialing-texas"
              className="block p-6 bg-white border border-border rounded-lg hover:border-emerald-brand/30 transition-colors"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                  TX
                </span>
              </div>
              <h4 className="font-semibold text-charcoal hover:text-emerald-brand transition-colors">
                Multi-State Prescriber Verification in Texas
              </h4>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}