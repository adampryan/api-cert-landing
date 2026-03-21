import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: "Compliance & Security | API-Cert",
  description: "API-Cert's comprehensive security, compliance, and data protection measures for healthcare license verification. HIPAA-aligned practices, audit trails, and enterprise-grade security.",
  keywords: "healthcare compliance, HIPAA compliance, API security, license verification security, healthcare data protection"
};

interface ComplianceSection {
  title: string;
  items: Array<{
    name: string;
    description: string;
    status?: 'live' | 'planned' | 'in-progress';
    details?: string[];
  }>;
}

const complianceSections: ComplianceSection[] = [
  {
    title: "Primary Data Sources",
    items: [
      {
        name: "State Professional Licensing Boards",
        description: "Direct integration with 13 state licensing boards, with NPPES fallback for remaining states",
        status: 'live',
        details: [
          "Real-time integration with state board APIs where available",
          "Daily sync from official state websites",
          "Manual verification for states without digital access",
          "Covers RN, LPN/LVN, NP, PA, MD, DO, and other healthcare licenses"
        ]
      },
      {
        name: "OIG List of Excluded Individuals/Entities (LEIE)",
        description: "HHS Office of Inspector General exclusions from federal healthcare programs",
        status: 'live',
        details: [
          "Monthly updates from official OIG data feed",
          "Covers Medicare, Medicaid, and other federal program exclusions",
          "Historical exclusion data maintained",
          "Automatic matching against provider names and identifiers"
        ]
      },
      {
        name: "SAM.gov Exclusions Database",
        description: "System for Award Management federal contracting exclusions",
        status: 'live',
        details: [
          "Daily updates from SAM.gov API",
          "Covers federal contracting and grant exclusions",
          "Suspension and debarment records",
          "Entity and individual-level screening"
        ]
      },
      {
        name: "CMS Provider Data",
        description: "Centers for Medicare & Medicaid Services provider information",
        status: 'live',
        details: [
          "NPPES National Provider Identifier (NPI) registry",
          "Medicare provider enrollment status",
          "Provider revalidation dates",
          "Specialty and taxonomy codes"
        ]
      },
      {
        name: "DEA Practitioner Database",
        description: "Drug Enforcement Administration controlled substance registration",
        status: 'live',
        details: [
          "Active DEA registration verification",
          "Schedule authority verification",
          "Registration expiration monitoring",
          "Multi-state DEA registration tracking"
        ]
      },
      {
        name: "OFAC Specially Designated Nationals (SDN)",
        description: "Treasury Department sanctions and blocked persons list",
        status: 'live',
        details: [
          "Real-time screening against SDN list",
          "Comprehensive name and alias matching",
          "Address and identifier verification",
          "Sanctions compliance monitoring"
        ]
      },
      {
        name: "Social Security Death Master File (SSDMF)",
        description: "Verification that providers are not deceased",
        status: 'live',
        details: [
          "Monthly updates from authorized data sources",
          "SSN-based death verification",
          "Date of death information where available",
          "Fraud prevention and identity verification"
        ]
      }
    ]
  }
];

const securityMeasures = [
  {
    category: "Data Encryption",
    measures: [
      "TLS 1.3 encryption for all data in transit",
      "AES-256 encryption for sensitive data at rest",
      "End-to-end encryption for API communications",
      "Encrypted database storage with PostgreSQL"
    ]
  },
  {
    category: "Access Control",
    measures: [
      "API key authentication for all requests",
      "Rate limiting to prevent abuse",
      "IP allowlisting for enterprise customers",
      "Role-based access control (RBAC)"
    ]
  },
  {
    category: "Infrastructure Security",
    measures: [
      "AWS cloud infrastructure with SOC 2 compliance",
      "Multi-region deployment for redundancy",
      "Regular security patching and updates",
      "DDoS protection and threat monitoring"
    ]
  },
  {
    category: "Monitoring & Logging",
    measures: [
      "Comprehensive audit logs for all API calls",
      "Real-time security monitoring and alerting",
      "Anomaly detection for unusual access patterns",
      "Incident response procedures and escalation"
    ]
  }
];

function StatusBadge({ status }: { status?: 'live' | 'planned' | 'in-progress' }) {
  if (!status) return null;
  
  const colors = {
    'live': 'bg-green-100 text-green-800',
    'planned': 'bg-emerald-100 text-emerald-800',
    'in-progress': 'bg-yellow-100 text-yellow-800'
  };
  
  const labels = {
    'live': 'Live',
    'planned': 'Planned',
    'in-progress': 'In Progress'
  };
  
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${colors[status]}`}>
      {labels[status]}
    </span>
  );
}

export default function CompliancePage() {
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

      {/* Header */}
      <section className="bg-gradient-to-b from-charcoal via-charcoal-light to-surface py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Compliance & <span className="text-emerald-brand">Security</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Enterprise-grade security, comprehensive data sources, and HIPAA-aligned practices for healthcare credentialing at scale.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Data Sources */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-charcoal mb-8">Authoritative Data Sources</h2>
          <p className="text-lg text-gray-600 mb-8">
            API-Cert aggregates data from official government sources to provide comprehensive provider verification.
            Every check is backed by authoritative, primary-source data.
          </p>
          
          <div className="space-y-8">
            {complianceSections.map((section) => (
              <div key={section.title}>
                <h3 className="text-xl font-semibold text-charcoal mb-6">{section.title}</h3>
                <div className="grid gap-6">
                  {section.items.map((item) => (
                    <div key={item.name} className="bg-white border border-border rounded-lg p-6">
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="text-lg font-medium text-charcoal">{item.name}</h4>
                        <StatusBadge status={item.status} />
                      </div>
                      <p className="text-gray-600 mb-4">{item.description}</p>
                      {item.details && (
                        <ul className="space-y-2">
                          {item.details.map((detail, index) => (
                            <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                              <div className="w-1.5 h-1.5 rounded-full bg-emerald-brand mt-2 flex-shrink-0" />
                              {detail}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Data Freshness */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-charcoal mb-8">Data Freshness & Synchronization</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white border border-border rounded-lg p-6">
              <h3 className="text-lg font-semibold text-charcoal mb-3">State Licensing Boards</h3>
              <p className="text-2xl font-bold text-emerald-brand mb-2">Daily</p>
              <p className="text-sm text-gray-600">
                Automated sync every 24 hours with manual verification for critical updates
              </p>
            </div>
            
            <div className="bg-white border border-border rounded-lg p-6">
              <h3 className="text-lg font-semibold text-charcoal mb-3">Federal Exclusions (OIG LEIE)</h3>
              <p className="text-2xl font-bold text-emerald-brand mb-2">Monthly</p>
              <p className="text-sm text-gray-600">
                Updated on the first business day following OIG's monthly release
              </p>
            </div>
            
            <div className="bg-white border border-border rounded-lg p-6">
              <h3 className="text-lg font-semibold text-charcoal mb-3">SAM.gov Exclusions</h3>
              <p className="text-2xl font-bold text-emerald-brand mb-2">Daily</p>
              <p className="text-sm text-gray-600">
                Real-time API integration with daily batch reconciliation
              </p>
            </div>
            
            <div className="bg-white border border-border rounded-lg p-6">
              <h3 className="text-lg font-semibold text-charcoal mb-3">NPPES NPI Registry</h3>
              <p className="text-2xl font-bold text-emerald-brand mb-2">Weekly</p>
              <p className="text-sm text-gray-600">
                Full data refresh every Sunday with incremental daily updates
              </p>
            </div>
            
            <div className="bg-white border border-border rounded-lg p-6">
              <h3 className="text-lg font-semibold text-charcoal mb-3">DEA Registrations</h3>
              <p className="text-2xl font-bold text-emerald-brand mb-2">Weekly</p>
              <p className="text-sm text-gray-600">
                Bi-weekly updates with emergency sync for urgent verifications
              </p>
            </div>
            
            <div className="bg-white border border-border rounded-lg p-6">
              <h3 className="text-lg font-semibold text-charcoal mb-3">OFAC SDN List</h3>
              <p className="text-2xl font-bold text-emerald-brand mb-2">Real-time</p>
              <p className="text-sm text-gray-600">
                Immediate updates via Treasury Department's real-time feed
              </p>
            </div>
          </div>
        </section>

        {/* Security */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-charcoal mb-8">Security & Data Protection</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {securityMeasures.map((category) => (
              <div key={category.category} className="bg-white border border-border rounded-lg p-6">
                <h3 className="text-xl font-semibold text-charcoal mb-4">{category.category}</h3>
                <ul className="space-y-3">
                  {category.measures.map((measure, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-emerald-brand mt-2 flex-shrink-0" />
                      <span className="text-gray-600">{measure}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* HIPAA Compliance */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-charcoal mb-8">HIPAA & Healthcare Compliance</h2>
          <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-emerald-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-emerald-800 mb-3">Provider Data, Not Patient Data</h3>
                <p className="text-emerald-700 mb-4">
                  API-Cert processes professional license and credentialing data, not protected health information (PHI).
                  We verify providers, not patients. However, we maintain HIPAA-aligned security practices throughout our operations.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-emerald-800 mb-3">Data We Process</h4>
                <ul className="space-y-2 text-emerald-700">
                  <li>• Professional license numbers and statuses</li>
                  <li>• Provider names and professional identifiers</li>
                  <li>• License expiration and renewal dates</li>
                  <li>• Disciplinary actions and sanctions</li>
                  <li>• Professional certifications and credentials</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-emerald-800 mb-3">Data We Don't Store</h4>
                <ul className="space-y-2 text-emerald-700">
                  <li>• Patient health information (PHI)</li>
                  <li>• Treatment records or medical data</li>
                  <li>• Financial or billing information</li>
                  <li>• Personal addresses or contact details</li>
                  <li>• Social security numbers or sensitive IDs</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Audit Trail */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-charcoal mb-8">Audit Trail & Logging</h2>
          <div className="bg-white border border-border rounded-lg p-8">
            <p className="text-lg text-gray-600 mb-6">
              Every verification request is logged with comprehensive metadata for compliance, 
              auditing, and quality assurance purposes.
            </p>
            
            <h3 className="text-lg font-semibold text-charcoal mb-4">What We Log</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-charcoal mb-3">Request Details</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Timestamp (UTC) of request</li>
                  <li>• Unique request ID</li>
                  <li>• API key and organization identifier</li>
                  <li>• Search parameters and provider identifiers</li>
                  <li>• Response time and performance metrics</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium text-charcoal mb-3">Verification Results</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Data sources checked and results</li>
                  <li>• License status and verification outcome</li>
                  <li>• Any exclusions or disciplinary findings</li>
                  <li>• Data freshness timestamps</li>
                  <li>• Quality assurance flags and notes</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mt-6">
              <h4 className="font-medium text-charcoal mb-3">Retention & Access</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Logs retained for 7 years for regulatory compliance</li>
                <li>• Customer audit reports available on request</li>
                <li>• Immutable log storage with cryptographic integrity</li>
                <li>• SOX and regulatory audit support</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Uptime & Monitoring */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-charcoal mb-8">Uptime & System Health</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white border border-border rounded-lg p-6 text-center">
              <p className="text-3xl font-bold text-emerald-brand mb-2">99.9%</p>
              <p className="text-gray-600">Uptime SLA</p>
              <p className="text-sm text-gray-500 mt-2">Monthly average over trailing 12 months</p>
            </div>
            
            <div className="bg-white border border-border rounded-lg p-6 text-center">
              <p className="text-3xl font-bold text-emerald-brand mb-2">&lt;20ms</p>
              <p className="text-gray-600">Average Response Time</p>
              <p className="text-sm text-gray-500 mt-2">95th percentile globally</p>
            </div>
            
            <div className="bg-white border border-border rounded-lg p-6 text-center">
              <p className="text-3xl font-bold text-emerald-brand mb-2">24/7</p>
              <p className="text-gray-600">Monitoring</p>
              <p className="text-sm text-gray-500 mt-2">Automated alerts and incident response</p>
            </div>
          </div>
          
          <div className="bg-white border border-border rounded-lg p-6">
            <h3 className="text-lg font-semibold text-charcoal mb-4">Health Monitoring</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-charcoal mb-3">Real-time Monitoring</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• API endpoint availability and response times</li>
                  <li>• Database performance and connection health</li>
                  <li>• Data source connectivity and sync status</li>
                  <li>• Error rates and failure pattern detection</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium text-charcoal mb-3">Proactive Maintenance</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Scheduled maintenance windows (low-traffic periods)</li>
                  <li>• Performance optimization and capacity planning</li>
                  <li>• Security patching and system updates</li>
                  <li>• Disaster recovery testing and validation</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-emerald-50 border border-emerald-200 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                <span className="font-medium text-emerald-800">System Status: All systems operational</span>
              </div>
              <p className="text-sm text-emerald-700 mt-2">
                Check real-time status at <Link href="/status" className="underline hover:no-underline">api-cert.com/status</Link>
              </p>
            </div>
          </div>
        </section>

        {/* Future Certifications */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-charcoal mb-8">Future Compliance Initiatives</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-border rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <h3 className="text-lg font-semibold text-charcoal">SOC 2 Type II Certification</h3>
                <StatusBadge status="planned" />
              </div>
              <p className="text-gray-600 mb-4">
                Comprehensive third-party audit of our security, availability, and confidentiality controls.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Independent validation of security practices</li>
                <li>• Annual certification and ongoing compliance</li>
                <li>• Enterprise customer requirement fulfillment</li>
                <li>• Trust Services Criteria compliance</li>
              </ul>
            </div>
            
            <div className="bg-white border border-border rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <h3 className="text-lg font-semibold text-charcoal">NCQA CVO Certification</h3>
                <StatusBadge status="planned" />
              </div>
              <p className="text-gray-600 mb-4">
                National Committee for Quality Assurance Credentials Verification Organization certification.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Healthcare industry-specific accreditation</li>
                <li>• Primary source verification validation</li>
                <li>• Quality assurance process certification</li>
                <li>• Healthcare organization trust and adoption</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="bg-charcoal/5 border border-gray-200 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-charcoal mb-4">Questions About Compliance?</h2>
          <p className="text-gray-600 mb-6">
            Our compliance and security team is available to answer questions about our practices, 
            certifications, and how API-Cert fits into your organization's compliance requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="mailto:compliance@api-cert.com"
              className="inline-flex items-center justify-center px-6 py-3 bg-emerald-brand text-white font-semibold rounded-lg hover:bg-emerald-600 transition-colors"
            >
              Contact Compliance Team
            </Link>
            <Link
              href="/docs"
              className="inline-flex items-center justify-center px-6 py-3 border border-emerald-brand text-emerald-brand font-semibold rounded-lg hover:bg-emerald-50 transition-colors"
            >
              View Technical Documentation
            </Link>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}