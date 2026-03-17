'use client';

import { useState } from 'react';

const codeExamples = {
  curl: `curl -X POST https://api.api-cert.com/v1/verify \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
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
        "Authorization": "Bearer YOUR_API_KEY",
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
print(f"Verified: {data['verified']}")
print(f"Status: {data['status']}")`,
  node: `const response = await fetch(
  "https://api.api-cert.com/v1/verify",
  {
    method: "POST",
    headers: {
      "Authorization": "Bearer YOUR_API_KEY",
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
console.log(\`Verified: \${data.verified}\`);
console.log(\`Status: \${data.status}\`);`,
};

const responseExample = `// Exclusion checks included automatically
// — no separate OIG/SAM lookup needed
{
  "verified": true,
  "provider_type": "MD",
  "state": "TX",
  "full_name": "JAMES R. MARTINEZ",
  "license_number": "MD-184920",
  "status": "ACTIVE",
  "expiration_date": "2028-03-15",
  "disciplinary_flag": false,
  "oig_excluded": false,
  "sam_excluded": false,
  "cms_precluded": false,
  "latency_ms": 6
}`;

type TabKey = 'curl' | 'python' | 'node';

export default function CodeExamples() {
  const [activeTab, setActiveTab] = useState<TabKey>('curl');

  const tabs: { key: TabKey; label: string }[] = [
    { key: 'curl', label: 'cURL' },
    { key: 'python', label: 'Python' },
    { key: 'node', label: 'Node.js' },
  ];

  return (
    <section className="py-24 bg-white" id="api">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#111827] mb-4">
            One Call, Complete Credentialing
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            License verification and exclusion screening in a single API request — no more juggling multiple systems
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Request */}
            <div>
              <div className="bg-[#1F2937] rounded-2xl border border-gray-700/30 overflow-hidden shadow-lg">
                {/* Tabs */}
                <div className="flex border-b border-gray-700/30 bg-[#111827]">
                  {tabs.map((tab) => (
                    <button
                      key={tab.key}
                      onClick={() => setActiveTab(tab.key)}
                      className={`px-4 py-3 text-sm font-medium transition-colors ${
                        activeTab === tab.key
                          ? 'text-white bg-[#1F2937] border-b-2 border-[#059669]'
                          : 'text-gray-500 hover:text-gray-300'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                {/* Code */}
                <div className="p-5 overflow-x-auto">
                  <pre className="text-sm text-gray-400 font-mono whitespace-pre-wrap">
                    {codeExamples[activeTab]}
                  </pre>
                </div>
              </div>
              <p className="text-center text-gray-400 text-sm mt-3">Request</p>
            </div>

            {/* Response */}
            <div>
              <div className="bg-[#1F2937] rounded-2xl border border-gray-700/30 overflow-hidden shadow-lg">
                <div className="flex items-center px-4 py-3 bg-[#111827] border-b border-gray-700/30">
                  <span className="text-gray-500 text-sm font-medium">Response</span>
                  <span className="ml-auto text-emerald-400 text-xs font-mono">200 OK</span>
                </div>
                <div className="p-5 overflow-x-auto">
                  <pre className="text-sm text-gray-400 font-mono whitespace-pre">
                    {responseExample}
                  </pre>
                </div>
              </div>
              <p className="text-center text-gray-400 text-sm mt-3">JSON Response</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href="/docs"
              className="inline-flex items-center text-[#059669] font-medium hover:underline"
            >
              View full API documentation
              <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
