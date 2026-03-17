'use client';

import { useState } from 'react';

type TabKey = 'curl' | 'python' | 'node' | 'response';

const tabs: { key: TabKey; label: string }[] = [
  { key: 'curl', label: 'cURL' },
  { key: 'python', label: 'Python' },
  { key: 'node', label: 'Node.js' },
  { key: 'response', label: 'Response' },
];

const codeExamples: Record<TabKey, string> = {
  curl: `curl -X POST https://api.api-cert.com/v1/verify \\
  -H "X-API-Key: sk_live_your_key" \\
  -H "Content-Type: application/json" \\
  -d '{
    "first_name": "Sarah",
    "last_name": "Chen",
    "license_type": "RN",
    "state": "MA"
  }'`,
  python: `import requests

response = requests.post(
    "https://api.api-cert.com/v1/verify",
    headers={
        "X-API-Key": "sk_live_your_key",
        "Content-Type": "application/json"
    },
    json={
        "first_name": "Sarah",
        "last_name": "Chen",
        "license_type": "RN",
        "state": "MA"
    }
)

data = response.json()
print(f"Status: {data['status']}")
print(f"Excluded: {data['oig_excluded']}")`,
  node: `const response = await fetch(
  "https://api.api-cert.com/v1/verify",
  {
    method: "POST",
    headers: {
      "X-API-Key": "sk_live_your_key",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      first_name: "Sarah",
      last_name: "Chen",
      license_type: "RN",
      state: "MA"
    })
  }
);

const data = await response.json();
console.log(\`Status: \${data.status}\`);`,
  response: `{
  "verified": true,
  "provider_type": "RN",
  "state": "MA",
  "full_name": "SARAH K. CHEN",
  "license_number": "RN-227415",
  "status": "ACTIVE",
  "expiration_date": "2028-03-15",
  "disciplinary_flag": false,
  "oig_excluded": false,
  "sam_excluded": false,
  "cms_precluded": false,
  "latency_ms": 6
}`,
};

function SyntaxHighlight({ code, lang }: { code: string; lang: TabKey }) {
  if (lang !== 'response') {
    return <span className="text-gray-300">{code}</span>;
  }
  // Simple JSON syntax highlighting
  const highlighted = code.replace(
    /("[\w_]+")(:\s*)(".*?"|true|false|\d+)/g,
    (_, key, colon, val) => {
      let valClass = 'syntax-string';
      if (val === 'true' || val === 'false') valClass = 'syntax-bool';
      else if (/^\d+$/.test(val)) valClass = 'syntax-number';
      return `<span class="syntax-key">${key}</span>${colon}<span class="${valClass}">${val}</span>`;
    }
  );
  return <span dangerouslySetInnerHTML={{ __html: highlighted }} />;
}

export default function CodeExamples() {
  const [activeTab, setActiveTab] = useState<TabKey>('curl');

  return (
    <section className="bg-charcoal py-24 lg:py-32 section-divider-reverse" id="api">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-emerald-brand font-mono text-sm uppercase tracking-widest mb-3">API</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-white">One Call, Complete Credentialing</h2>
          <p className="text-gray-400 text-lg mt-4 max-w-2xl mx-auto">
            License verification and exclusion screening in a single API request
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Terminal window */}
          <div className="bg-charcoal-light rounded-2xl border border-gray-700/50 overflow-hidden shadow-2xl">
            {/* Title bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#0d1117] border-b border-gray-700/50">
              <div className="flex items-center gap-2">
                <span className="terminal-dot bg-red-500/80" />
                <span className="terminal-dot bg-yellow-500/80" />
                <span className="terminal-dot bg-emerald-brand" />
                <span className="ml-3 flex items-center gap-1.5 text-xs text-emerald-brand font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-brand animate-pulse" />
                  Live
                </span>
              </div>
              <span className="text-xs text-gray-500 font-mono">api-cert.com</span>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-gray-700/50 bg-[#0d1117]/50">
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`px-5 py-2.5 text-sm font-mono transition-colors relative ${
                    activeTab === tab.key
                      ? 'text-white'
                      : 'text-gray-500 hover:text-gray-300'
                  }`}
                >
                  {tab.label}
                  {activeTab === tab.key && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-brand" />
                  )}
                </button>
              ))}
            </div>

            {/* Code content */}
            <div className="p-6 overflow-x-auto min-h-[280px]">
              <pre className="text-sm font-mono leading-relaxed whitespace-pre">
                <SyntaxHighlight code={codeExamples[activeTab]} lang={activeTab} />
              </pre>
            </div>
          </div>

          {/* CTA below */}
          <div className="text-center mt-8">
            <a
              href="/docs"
              className="inline-flex items-center gap-2 text-emerald-brand font-medium hover:underline"
            >
              Try it now
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
