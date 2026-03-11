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

const responseExample = `{
  "verified": true,
  "license_type": "RN",
  "state": "MA",
  "full_name": "SARAH J. CHEN",
  "license_number": "RN298741",
  "status": "ACTIVE",
  "expiration_date": "2027-06-30",
  "oig_excluded": false,
  "sam_excluded": false,
  "disciplinary_flag": false,
  "latency_ms": 4
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
    <section className="py-20 bg-white" id="api">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Simple Integration
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Start verifying licenses with just a few lines of code
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Request */}
            <div>
              <div className="bg-[#0d1117] rounded-lg border border-slate-700 overflow-hidden">
                {/* Tabs */}
                <div className="flex border-b border-slate-700 bg-[#161b22]">
                  {tabs.map((tab) => (
                    <button
                      key={tab.key}
                      onClick={() => setActiveTab(tab.key)}
                      className={`px-4 py-3 text-sm font-medium transition-colors ${
                        activeTab === tab.key
                          ? 'text-white bg-[#0d1117] border-b-2 border-[#2563EB]'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                {/* Code */}
                <div className="p-4 overflow-x-auto">
                  <pre className="text-sm text-slate-300 font-mono whitespace-pre-wrap">
                    {codeExamples[activeTab]}
                  </pre>
                </div>
              </div>
              <p className="text-center text-slate-500 text-sm mt-3">Request</p>
            </div>

            {/* Response */}
            <div>
              <div className="bg-[#0d1117] rounded-lg border border-slate-700 overflow-hidden">
                <div className="flex items-center px-4 py-3 bg-[#161b22] border-b border-slate-700">
                  <span className="text-slate-400 text-sm font-medium">Response</span>
                  <span className="ml-auto text-green-400 text-xs font-mono">200 OK</span>
                </div>
                <div className="p-4 overflow-x-auto">
                  <pre className="text-sm text-slate-300 font-mono whitespace-pre">
                    {responseExample}
                  </pre>
                </div>
              </div>
              <p className="text-center text-slate-500 text-sm mt-3">JSON Response</p>
            </div>
          </div>

          <div className="text-center mt-10">
            <a
              href="/docs"
              className="inline-flex items-center text-[#2563EB] font-medium hover:underline"
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
