'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Footer from '../components/Footer';

const sections = [
  { id: 'getting-started', label: 'Getting Started' },
  { id: 'authentication', label: 'Authentication' },
  { id: 'register', label: 'POST /v1/register' },
  { id: 'verify', label: 'POST /v1/verify' },
  { id: 'verify-bulk', label: 'POST /v1/verify/bulk' },
  { id: 'states', label: 'GET /v1/states' },
  { id: 'upgrade', label: 'POST /v1/upgrade' },
  { id: 'usage', label: 'GET /v1/usage' },
  { id: 'code-examples', label: 'Code Examples' },
  { id: 'rate-limits', label: 'Rate Limits & Pricing' },
  { id: 'status-values', label: 'Status Values' },
  { id: 'errors', label: 'Error Handling' },
  { id: 'data-sources', label: 'Data Sources' },
];

function CodeBlock({ children, title }: { children: string; title?: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(children);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-[#0d1117] rounded-lg border border-slate-700 overflow-hidden my-4">
      {title && (
        <div className="flex items-center justify-between px-4 py-2 bg-[#161b22] border-b border-slate-700">
          <span className="text-slate-400 text-xs font-mono">{title}</span>
          <button
            onClick={handleCopy}
            className="text-slate-400 hover:text-white text-xs font-mono transition-colors"
          >
            {copied ? 'Copied!' : 'Copy'}
          </button>
        </div>
      )}
      <div className="p-4 overflow-x-auto">
        <pre className="text-sm text-slate-300 font-mono whitespace-pre">{children}</pre>
      </div>
    </div>
  );
}

function EndpointHeader({ method, path, badge }: { method: string; path: string; badge?: string }) {
  const methodColor = method === 'GET' ? 'bg-green-600' : 'bg-blue-600';
  return (
    <div className="flex flex-wrap items-center gap-3 mb-4">
      <span className={`${methodColor} text-white text-xs font-bold px-2.5 py-1 rounded font-mono`}>
        {method}
      </span>
      <code className="text-lg font-mono text-white">{path}</code>
      {badge && (
        <span className="text-xs bg-slate-700 text-slate-300 px-2 py-0.5 rounded">{badge}</span>
      )}
    </div>
  );
}

function ParamTable({ params }: { params: { name: string; type: string; required: boolean; description: string }[] }) {
  return (
    <div className="overflow-x-auto my-4">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-slate-700">
            <th className="text-left py-2 pr-4 text-slate-400 font-medium">Parameter</th>
            <th className="text-left py-2 pr-4 text-slate-400 font-medium">Type</th>
            <th className="text-left py-2 pr-4 text-slate-400 font-medium">Required</th>
            <th className="text-left py-2 text-slate-400 font-medium">Description</th>
          </tr>
        </thead>
        <tbody>
          {params.map((p) => (
            <tr key={p.name} className="border-b border-slate-800">
              <td className="py-2 pr-4"><code className="text-emerald-400 text-xs">{p.name}</code></td>
              <td className="py-2 pr-4 text-slate-400">{p.type}</td>
              <td className="py-2 pr-4">{p.required ? <span className="text-amber-400 text-xs">required</span> : <span className="text-slate-500 text-xs">optional</span>}</td>
              <td className="py-2 text-slate-300">{p.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function SectionHeading({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="text-2xl font-bold text-white mt-16 mb-6 scroll-mt-24 border-b border-slate-700 pb-3">
      {children}
    </h2>
  );
}

export default function DocsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('getting-started');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: '-80px 0px -60% 0px' }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-charcoal">
      {/* Top Nav */}
      <nav className="sticky top-0 z-50 bg-charcoal/95 backdrop-blur border-b border-slate-800 px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <a href="/">
            <Image src="/logo-white.png" alt="API-Cert" width={160} height={40} className="h-8 w-auto" />
          </a>
          <span className="text-slate-500 text-sm hidden sm:inline">/</span>
          <span className="text-white text-sm font-medium hidden sm:inline">API Documentation</span>
        </div>
        <div className="flex items-center gap-4">
          <a href="/#pricing" className="text-sm text-slate-300 hover:text-white transition-colors hidden sm:inline">Pricing</a>
          <a
            href="https://api.api-cert.com/portal/signup"
            className="text-sm bg-emerald-brand text-white px-4 py-2 rounded-lg hover:bg-teal-brand transition-colors"
          >
            Get Free Key
          </a>
          {/* Mobile sidebar toggle */}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="lg:hidden text-slate-300 hover:text-white"
            aria-label="Toggle navigation"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {sidebarOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-[240px_1fr] lg:gap-12">
          {/* Sidebar */}
          <aside className={`${sidebarOpen ? 'block' : 'hidden'} lg:block`}>
            <nav className="sticky top-20 py-8 max-h-[calc(100vh-5rem)] overflow-y-auto">
              <ul className="space-y-1">
                {sections.map((section) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      onClick={() => setSidebarOpen(false)}
                      className={`block py-1.5 px-3 text-sm rounded transition-colors ${
                        activeSection === section.id
                          ? 'text-white bg-slate-800 font-medium'
                          : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                      }`}
                    >
                      {section.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          {/* Main Content */}
          <main className="py-8 pb-24 min-w-0">
            {/* Hero Header */}
            <div className="mb-12 relative overflow-hidden rounded-2xl border border-slate-700/50 bg-gradient-to-br from-charcoal via-charcoal to-charcoal">
              {/* Background decoration */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-brand/10 rounded-full blur-3xl" />
                <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-emerald-brand/5 rounded-full blur-3xl" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-[0.03]"
                  style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
                    backgroundSize: '24px 24px',
                  }}
                />
              </div>

              <div className="relative px-8 py-10 sm:px-10 sm:py-12">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-brand/10 border border-emerald-brand/20">
                        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                        <span className="text-xs font-medium text-emerald-400">v1.0 — All Systems Operational</span>
                      </div>
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight">
                      API <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-brand to-cyan-400">Documentation</span>
                    </h1>
                    <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
                      Verify healthcare licenses across all 50 states with a single API call.
                      RN, LPN, NP, PA, MD, and DO — powered by official government data.
                    </p>
                  </div>

                  {/* Quick stats */}
                  <div className="flex flex-row sm:flex-col gap-4 sm:gap-3 flex-shrink-0">
                    {[
                      { label: 'Response Time', value: '<1s avg', icon: '⚡' },
                      { label: 'License Records', value: '5.3M+', icon: '🗄️' },
                      { label: 'States Covered', value: 'All 50', icon: '🇺🇸' },
                    ].map((stat) => (
                      <div key={stat.label} className="flex items-center gap-3 bg-slate-800/50 border border-slate-700/50 rounded-lg px-4 py-2.5">
                        <span className="text-lg">{stat.icon}</span>
                        <div>
                          <div className="text-white font-semibold text-sm">{stat.value}</div>
                          <div className="text-slate-500 text-xs">{stat.label}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick links */}
                <div className="flex flex-wrap gap-3 mt-8 pt-6 border-t border-slate-700/50">
                  <a href="#register" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-brand text-white text-sm font-medium hover:bg-teal-brand transition-colors">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" /></svg>
                    Get Your Free API Key
                  </a>
                  <a href="#code-examples" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800 text-slate-300 text-sm font-medium hover:bg-slate-700 hover:text-white border border-slate-700 transition-colors">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                    Code Examples
                  </a>
                  <a href="https://api-cert-api.onrender.com/docs" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800 text-slate-300 text-sm font-medium hover:bg-slate-700 hover:text-white border border-slate-700 transition-colors">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                    Interactive Swagger
                  </a>
                </div>
              </div>
            </div>

            {/* Getting Started */}
            <SectionHeading id="getting-started">Getting Started</SectionHeading>
            <p className="text-slate-300 mb-4">
              The API-Cert API lets you verify healthcare professional licenses in real-time.
              All requests are made to the following base URL:
            </p>
            <CodeBlock title="Base URL">{`https://api.api-cert.com`}</CodeBlock>
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 my-4">
              <p className="text-slate-300 text-sm">
                <span className="text-amber-400 font-medium">Note:</span>{' '}
                The production domain <code className="text-emerald-400">api.api-cert.com</code> currently
                proxies to <code className="text-slate-400">api-cert-api.onrender.com</code>. Both work,
                but use the canonical domain for production integrations.
              </p>
            </div>
            <p className="text-slate-300 mb-4">To get started:</p>
            <ol className="list-decimal list-inside text-slate-300 space-y-2 mb-6">
              <li>Register for a free API key (50 verifications/month)</li>
              <li>Include your key in the <code className="text-emerald-400">X-API-Key</code> header</li>
              <li>Make your first verification request</li>
            </ol>

            {/* Authentication */}
            <SectionHeading id="authentication">Authentication</SectionHeading>
            <p className="text-slate-300 mb-4">
              All authenticated endpoints require an API key passed via the <code className="text-emerald-400">X-API-Key</code> header.
            </p>
            <CodeBlock title="Header">{`X-API-Key: your_api_key_here`}</CodeBlock>
            <p className="text-slate-300 mb-4">
              To get your key, register with the <code className="text-emerald-400">/v1/register</code> endpoint
              or <a href="mailto:adam@oneweeklabs.com?subject=API-Cert%20API%20Key%20Request" className="text-emerald-400 hover:underline">email us</a> for
              a free key. The key is shown only once upon registration — store it securely.
            </p>

            {/* POST /v1/register */}
            <SectionHeading id="register">Register</SectionHeading>
            <EndpointHeader method="POST" path="/v1/register" badge="Public — no auth required" />
            <p className="text-slate-300 mb-4">
              Create a new account and receive a free API key. The key is displayed only once in the response.
            </p>
            <h3 className="text-lg font-semibold text-white mb-3">Request Body</h3>
            <ParamTable params={[
              { name: 'email', type: 'string', required: true, description: 'Your email address' },
              { name: 'name', type: 'string', required: false, description: 'Your full name' },
              { name: 'company', type: 'string', required: false, description: 'Your organization' },
            ]} />
            <CodeBlock title="Example Request">{`curl -X POST https://api.api-cert.com/v1/register \\
  -H "Content-Type: application/json" \\
  -d '{
    "email": "dev@yourcompany.com",
    "name": "Jane Smith",
    "company": "HealthTech Inc"
  }'`}</CodeBlock>
            <CodeBlock title="Response — 201 Created">{`{
  "api_key": "ac_live_abc123...",
  "key_prefix": "ac_live_abc",
  "tier": "free",
  "monthly_quota": 50,
  "rate_limit_rpm": 10,
  "message": "Store this key securely — it will not be shown again."
}`}</CodeBlock>

            {/* POST /v1/verify */}
            <SectionHeading id="verify">Verify License</SectionHeading>
            <EndpointHeader method="POST" path="/v1/verify" badge="Requires API key" />
            <p className="text-slate-300 mb-4">
              Verify a single healthcare professional&apos;s license. Returns the license status,
              expiration, and results of exclusion checks against federal databases.
            </p>
            <h3 className="text-lg font-semibold text-white mb-3">Request Body</h3>
            <ParamTable params={[
              { name: 'license_type', type: 'string', required: true, description: 'One of: RN, LPN, NP, PA, MD, DO' },
              { name: 'state', type: 'string', required: true, description: '2-letter state code (e.g. CA, NY, TX)' },
              { name: 'last_name', type: 'string', required: true, description: "Provider's last name" },
              { name: 'first_name', type: 'string', required: false, description: "Provider's first name (improves accuracy)" },
              { name: 'license_number', type: 'string', required: false, description: 'License number if known (improves accuracy)' },
            ]} />
            <CodeBlock title="Example Request">{`curl -X POST https://api.api-cert.com/v1/verify \\
  -H "X-API-Key: your_api_key_here" \\
  -H "Content-Type: application/json" \\
  -d '{
    "license_type": "RN",
    "state": "MA",
    "last_name": "Chen",
    "first_name": "Sarah"
  }'`}</CodeBlock>
            <CodeBlock title="Response — 200 OK">{`{
  "verified": true,
  "license_type": "RN",
  "state": "MA",
  "full_name": "SARAH J. CHEN",
  "license_number": "RN298741",
  "status": "ACTIVE",
  "expiration_date": "2027-06-30",
  "issue_date": "2019-08-15",
  "oig_excluded": false,
  "sam_excluded": false,
  "cms_precluded": false,
  "disciplinary_flag": false,
  "npi_number": "1234567890",
  "latency_ms": 4
}`}</CodeBlock>

            {/* POST /v1/verify/bulk */}
            <SectionHeading id="verify-bulk">Bulk Verify</SectionHeading>
            <EndpointHeader method="POST" path="/v1/verify/bulk" badge="Requires API key" />
            <p className="text-slate-300 mb-4">
              Submit up to 100 verification requests in a single call. Returns a job ID
              that you can poll for results. Requires Redis-backed async processing.
            </p>
            <h3 className="text-lg font-semibold text-white mb-3">Request Body</h3>
            <ParamTable params={[
              { name: 'requests', type: 'array', required: true, description: 'Array of verification objects (max 100). Each object follows the same schema as /v1/verify.' },
            ]} />
            <CodeBlock title="Example Request">{`curl -X POST https://api.api-cert.com/v1/verify/bulk \\
  -H "X-API-Key: your_api_key_here" \\
  -H "Content-Type: application/json" \\
  -d '{
    "requests": [
      { "license_type": "RN", "state": "CA", "last_name": "Smith" },
      { "license_type": "MD", "state": "NY", "last_name": "Johnson", "first_name": "Robert" }
    ]
  }'`}</CodeBlock>
            <CodeBlock title="Response — 202 Accepted">{`{
  "job_id": "bulk_abc123",
  "status": "processing",
  "total_requests": 2,
  "message": "Poll GET /v1/verify/bulk/bulk_abc123 for results."
}`}</CodeBlock>

            {/* GET /v1/states */}
            <SectionHeading id="states">State Coverage</SectionHeading>
            <EndpointHeader method="GET" path="/v1/states" badge="Requires API key" />
            <p className="text-slate-300 mb-4">
              Returns the coverage matrix showing which license types are supported in each state,
              along with the data source and last update timestamp.
            </p>
            <CodeBlock title="Example Request">{`curl https://api.api-cert.com/v1/states \\
  -H "X-API-Key: your_api_key_here"`}</CodeBlock>
            <CodeBlock title="Response — 200 OK">{`{
  "states": {
    "CA": {
      "supported_types": ["RN", "LPN", "NP", "PA", "MD", "DO"],
      "source": "California DCA",
      "last_updated": "2026-03-15T06:00:00Z"
    },
    "NY": {
      "supported_types": ["RN", "LPN", "NP", "PA", "MD", "DO"],
      "source": "NYSED Office of the Professions",
      "last_updated": "2026-03-15T06:00:00Z"
    }
  }
}`}</CodeBlock>

            {/* POST /v1/upgrade */}
            <SectionHeading id="upgrade">Upgrade Tier</SectionHeading>
            <EndpointHeader method="POST" path="/v1/upgrade" badge="Requires API key" />
            <p className="text-slate-300 mb-4">
              Initiate a Stripe Checkout session to upgrade your subscription tier.
              Returns a URL to redirect the user to complete payment.
            </p>
            <h3 className="text-lg font-semibold text-white mb-3">Request Body</h3>
            <ParamTable params={[
              { name: 'tier', type: 'string', required: true, description: "One of: 'starter', 'growth', 'scale'" },
              { name: 'success_url', type: 'string', required: false, description: 'URL to redirect after successful payment' },
              { name: 'cancel_url', type: 'string', required: false, description: 'URL to redirect if user cancels' },
            ]} />
            <CodeBlock title="Response — 200 OK">{`{
  "checkout_url": "https://checkout.stripe.com/c/pay/cs_live_...",
  "tier": "starter",
  "price": "$99/mo"
}`}</CodeBlock>

            {/* GET /v1/usage */}
            <SectionHeading id="usage">Usage Stats</SectionHeading>
            <EndpointHeader method="GET" path="/v1/usage" badge="Requires API key" />
            <p className="text-slate-300 mb-4">
              Returns your current billing period usage statistics including
              requests made, quota remaining, and rate limit status.
            </p>
            <CodeBlock title="Example Request">{`curl https://api.api-cert.com/v1/usage \\
  -H "X-API-Key: your_api_key_here"`}</CodeBlock>
            <CodeBlock title="Response — 200 OK">{`{
  "tier": "free",
  "period_start": "2026-03-01",
  "period_end": "2026-03-31",
  "requests_used": 12,
  "requests_remaining": 38,
  "monthly_quota": 50,
  "rate_limit_rpm": 10
}`}</CodeBlock>

            {/* Code Examples */}
            <SectionHeading id="code-examples">Code Examples</SectionHeading>
            <p className="text-slate-300 mb-6">
              Complete examples showing registration and license verification.
            </p>

            <h3 className="text-lg font-semibold text-white mb-3">cURL</h3>
            <CodeBlock title="Register + Verify">{`# 1. Register for an API key
curl -X POST https://api.api-cert.com/v1/register \\
  -H "Content-Type: application/json" \\
  -d '{"email": "dev@yourcompany.com"}'

# Save the api_key from the response, then:

# 2. Verify a license
curl -X POST https://api.api-cert.com/v1/verify \\
  -H "X-API-Key: YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "license_type": "RN",
    "state": "CA",
    "last_name": "Smith",
    "first_name": "Jane"
  }'`}</CodeBlock>

            <h3 className="text-lg font-semibold text-white mb-3 mt-8">Python</h3>
            <CodeBlock title="python — requests">{`import requests

BASE = "https://api.api-cert.com"

# 1. Register
reg = requests.post(f"{BASE}/v1/register", json={
    "email": "dev@yourcompany.com"
})
api_key = reg.json()["api_key"]

# 2. Verify a license
headers = {"X-API-Key": api_key}
resp = requests.post(f"{BASE}/v1/verify", headers=headers, json={
    "license_type": "RN",
    "state": "CA",
    "last_name": "Smith",
    "first_name": "Jane"
})

result = resp.json()
print(f"Status: {result['status']}")        # ACTIVE
print(f"OIG Excluded: {result['oig_excluded']}")  # False
print(f"Latency: {result['latency_ms']}ms") # 4`}</CodeBlock>

            <h3 className="text-lg font-semibold text-white mb-3 mt-8">Node.js</h3>
            <CodeBlock title="node — fetch">{`const BASE = "https://api.api-cert.com";

// 1. Register
const reg = await fetch(\`\${BASE}/v1/register\`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ email: "dev@yourcompany.com" })
});
const { api_key } = await reg.json();

// 2. Verify a license
const resp = await fetch(\`\${BASE}/v1/verify\`, {
  method: "POST",
  headers: {
    "X-API-Key": api_key,
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    license_type: "RN",
    state: "CA",
    last_name: "Smith",
    first_name: "Jane"
  })
});

const result = await resp.json();
console.log(\`Status: \${result.status}\`);
console.log(\`OIG Excluded: \${result.oig_excluded}\`);`}</CodeBlock>

            {/* Rate Limits & Pricing */}
            <SectionHeading id="rate-limits">Rate Limits & Pricing</SectionHeading>
            <p className="text-slate-300 mb-6">
              All plans include access to every endpoint. Rate limits are enforced per-minute.
              When you exceed your quota or rate limit, the API returns <code className="text-emerald-400">429 Too Many Requests</code>.
            </p>
            <div className="overflow-x-auto my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="text-left py-3 pr-4 text-slate-400 font-medium">Tier</th>
                    <th className="text-left py-3 pr-4 text-slate-400 font-medium">Price</th>
                    <th className="text-left py-3 pr-4 text-slate-400 font-medium">Monthly Quota</th>
                    <th className="text-left py-3 text-slate-400 font-medium">Rate Limit</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { tier: 'Free', price: '$0', quota: '50 requests', rpm: '10 RPM' },
                    { tier: 'Starter', price: '$99/mo', quota: '500 requests', rpm: '60 RPM' },
                    { tier: 'Growth', price: '$299/mo', quota: '2,000 requests', rpm: '120 RPM' },
                    { tier: 'Scale', price: '$799/mo', quota: '10,000 requests', rpm: '300 RPM' },
                  ].map((row) => (
                    <tr key={row.tier} className="border-b border-slate-800">
                      <td className="py-3 pr-4 text-white font-medium">{row.tier}</td>
                      <td className="py-3 pr-4 text-slate-300">{row.price}</td>
                      <td className="py-3 pr-4 text-slate-300">{row.quota}</td>
                      <td className="py-3 text-slate-300">{row.rpm}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-slate-400 text-sm mt-2">
              Upgrade programmatically via <code className="text-emerald-400">POST /v1/upgrade</code> or{' '}
              <a href="mailto:adam@oneweeklabs.com?subject=API-Cert%20Enterprise" className="text-emerald-400 hover:underline">contact us</a> for
              enterprise volume.
            </p>

            {/* Status Values */}
            <SectionHeading id="status-values">Status Values</SectionHeading>
            <p className="text-slate-300 mb-6">
              The <code className="text-emerald-400">status</code> field in verification responses
              indicates the current state of the license. Possible values:
            </p>
            <div className="space-y-4">
              {[
                { status: 'ACTIVE', color: 'bg-green-500', description: 'License is current and in good standing. The provider is authorized to practice.' },
                { status: 'CONDITIONAL', color: 'bg-yellow-500', description: 'License is active but has conditions, restrictions, or a probationary status attached.' },
                { status: 'INACTIVE', color: 'bg-slate-500', description: 'License exists but is not currently active. The provider may have voluntarily deactivated or failed to renew.' },
                { status: 'EXPIRED', color: 'bg-orange-500', description: 'License has passed its expiration date and has not been renewed.' },
                { status: 'SUSPENDED', color: 'bg-red-500', description: 'License has been temporarily suspended by the state board, often pending investigation or disciplinary action.' },
                { status: 'REVOKED', color: 'bg-red-700', description: 'License has been permanently revoked by the state board. The provider is not authorized to practice.' },
                { status: 'UNKNOWN', color: 'bg-slate-600', description: 'The license was found but the status could not be definitively determined from the source data.' },
                { status: 'UNVERIFIED', color: 'bg-slate-700', description: 'No matching license record was found. The provider may not hold a license of this type in this state.' },
              ].map((item) => (
                <div key={item.status} className="flex items-start gap-3">
                  <span className={`${item.color} text-white text-xs font-bold px-2.5 py-1 rounded font-mono mt-0.5 shrink-0`}>
                    {item.status}
                  </span>
                  <p className="text-slate-300 text-sm">{item.description}</p>
                </div>
              ))}
            </div>

            {/* Error Handling */}
            <SectionHeading id="errors">Error Handling</SectionHeading>
            <p className="text-slate-300 mb-6">
              The API uses standard HTTP status codes. Errors return a consistent JSON structure:
            </p>
            <CodeBlock title="Error Response Format">{`{
  "error": "Descriptive error message",
  "code": "ERROR_CODE",
  "status": 401
}`}</CodeBlock>
            <div className="space-y-6 mt-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="bg-red-600/20 text-red-400 text-xs font-bold px-2.5 py-1 rounded font-mono">401</span>
                  <span className="text-white font-medium">Unauthorized</span>
                </div>
                <p className="text-slate-400 text-sm ml-[70px]">Missing or invalid API key. Check your <code className="text-emerald-400">X-API-Key</code> header.</p>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="bg-orange-600/20 text-orange-400 text-xs font-bold px-2.5 py-1 rounded font-mono">429</span>
                  <span className="text-white font-medium">Too Many Requests</span>
                </div>
                <p className="text-slate-400 text-sm ml-[70px]">Rate limit or monthly quota exceeded. Upgrade your tier or wait for the next billing period.</p>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="bg-yellow-600/20 text-yellow-400 text-xs font-bold px-2.5 py-1 rounded font-mono">400</span>
                  <span className="text-white font-medium">Bad Request</span>
                </div>
                <p className="text-slate-400 text-sm ml-[70px]">Invalid or missing parameters. Check the request body against the endpoint schema.</p>
              </div>
            </div>

            {/* Data Sources */}
            <SectionHeading id="data-sources">Data Sources</SectionHeading>
            <p className="text-slate-300 mb-4">
              API-Cert aggregates data from authoritative government sources to provide
              comprehensive verification:
            </p>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-start gap-3">
                <span className="text-emerald-400 mt-1.5 shrink-0">&#8226;</span>
                <span><span className="text-white font-medium">State Licensing Boards</span> — Official license records from each state&apos;s board of nursing, medical board, or equivalent authority.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-400 mt-1.5 shrink-0">&#8226;</span>
                <span><span className="text-white font-medium">NPPES (NPI Registry)</span> — National Plan and Provider Enumeration System for NPI number cross-referencing.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-400 mt-1.5 shrink-0">&#8226;</span>
                <span><span className="text-white font-medium">OIG LEIE</span> — Office of Inspector General&apos;s List of Excluded Individuals/Entities.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-400 mt-1.5 shrink-0">&#8226;</span>
                <span><span className="text-white font-medium">SAM.gov</span> — System for Award Management exclusion records.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-400 mt-1.5 shrink-0">&#8226;</span>
                <span><span className="text-white font-medium">CMS Preclusion List</span> — Centers for Medicare & Medicaid Services preclusion database.</span>
              </li>
            </ul>
            <p className="text-slate-400 text-sm mt-4">
              Data is refreshed daily. Use the <code className="text-emerald-400">GET /v1/states</code> endpoint
              to see per-state data source details and last update timestamps.
            </p>

            {/* CTA */}
            <div className="mt-20 bg-gradient-to-r from-emerald-brand/10 to-emerald-brand/5 border border-emerald-brand/30 rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-bold text-white mb-3">Ready to get started?</h2>
              <p className="text-slate-400 mb-6 max-w-lg mx-auto">
                Get your free API key and start verifying healthcare licenses in minutes.
                No credit card required. 50 free verifications per month.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:adam@oneweeklabs.com?subject=API-Cert%20API%20Key%20Request&body=Hi%20Adam%2C%0A%0AI%27d%20like%20to%20try%20API-Cert.%20Please%20send%20me%20a%20free%20API%20key.%0A%0AThanks!"
                  className="inline-flex items-center justify-center px-8 py-4 bg-emerald-brand text-white font-semibold rounded-lg hover:bg-teal-brand transition-colors text-lg"
                >
                  Get Your Free API Key
                </a>
              </div>
              <div className="mt-6">
                <p className="text-slate-500 text-sm mb-2">Or register via the API:</p>
                <code className="text-sm text-slate-400 font-mono bg-slate-800 px-4 py-2 rounded-lg inline-block">
                  curl -X POST https://api.api-cert.com/v1/register -H &quot;Content-Type: application/json&quot; -d &apos;{'{'}&#34;email&#34;:&#34;you@co.com&#34;{'}'}&#39;
                </code>
              </div>
            </div>
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
}
