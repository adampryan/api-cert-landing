'use client';

import { useState } from 'react';

interface VerifyResponse {
  request_id: string;
  full_name: string;
  status: string;
  license_type: string;
  state: string;
  license_number: string | null;
  expiration_date: string | null;
  oig_excluded: boolean | null;
  sam_excluded: boolean | null;
  cms_precluded: boolean | null;
  dea_number: string | null;
  dea_status: string | null;
  medicare_optout: boolean | null;
  ofac_flagged: boolean | null;
  disciplinary_flag: boolean | null;
  latency_ms: number;
  source_name: string;
  data_freshness: string;
  retrieved_at: string;
}

const states = [
  { code: 'FL', name: 'Florida' },
  { code: 'MA', name: 'Massachusetts' },
  { code: 'NJ', name: 'New Jersey' },
  { code: 'TX', name: 'Texas' },
  { code: 'NY', name: 'New York' },
];

const licenseTypes = [
  { code: 'RN', name: 'Registered Nurse' },
  { code: 'LPN', name: 'Licensed Practical Nurse' },
  { code: 'NP', name: 'Nurse Practitioner' },
  { code: 'PA', name: 'Physician Assistant' },
  { code: 'MD', name: 'Medical Doctor' },
  { code: 'DO', name: 'Doctor of Osteopathic Medicine' },
];

export default function LiveDemo() {
  const [formData, setFormData] = useState({
    state: 'FL',
    license_type: 'RN',
    last_name: 'Williams',
  });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<VerifyResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const params = new URLSearchParams(formData);
      const response = await fetch(`https://api.api-cert.com/v1/demo/verify?${params}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || 'Verification failed');
      }

      const data = await response.json();
      setResult(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  const getCheckIcon = (value: boolean | null) => {
    if (value === null) return '⏳';
    return value ? '❌' : '✅';
  };

  const getCheckText = (value: boolean | null, passText: string, failText: string) => {
    if (value === null) return 'Pending';
    return value ? failText : passText;
  };

  const getStatusColor = (value: boolean | null) => {
    if (value === null) return 'text-yellow-600';
    return value ? 'text-red-600' : 'text-green-600';
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Try It Right Now — No Signup Required
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See our 9-point verification system in action. Real data, real-time results.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            {/* Demo Form */}
            <form onSubmit={handleSubmit} className="mb-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    State
                  </label>
                  <select
                    value={formData.state}
                    onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    {states.map((state) => (
                      <option key={state.code} value={state.code}>
                        {state.code} — {state.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    License Type
                  </label>
                  <select
                    value={formData.license_type}
                    onChange={(e) => setFormData({ ...formData, license_type: e.target.value })}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    {licenseTypes.map((type) => (
                      <option key={type.code} value={type.code}>
                        {type.code} — {type.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    value={formData.last_name}
                    onChange={(e) => setFormData({ ...formData, last_name: e.target.value })}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>

                <div className="flex items-end">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white font-medium py-2 px-4 rounded-lg transition-colors"
                  >
                    {loading ? 'Verifying...' : 'Verify'}
                  </button>
                </div>
              </div>
            </form>

            {/* Error Display */}
            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-700 text-sm">{error}</p>
              </div>
            )}

            {/* Results Display */}
            {result && (
              <div className="space-y-6">
                {/* Provider Info */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Provider Information</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <span className="text-gray-600">Name:</span>
                      <span className="ml-2 font-medium">{result.full_name}</span>
                    </div>
                    <div>
                      <span className="text-gray-600">License:</span>
                      <span className="ml-2 font-medium">{result.license_number || 'N/A'}</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Expiry:</span>
                      <span className="ml-2 font-medium">{result.expiration_date || 'N/A'}</span>
                    </div>
                  </div>
                  <div className="mt-2 text-xs text-gray-500">
                    Verified in {result.latency_ms}ms • Source: {result.source_name}
                  </div>
                </div>

                {/* 9-Point Verification Results */}
                <div>
                  <h3 className="font-semibold text-gray-900 mb-4">9-Point Verification Results</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      {
                        name: 'License Status',
                        value: result.status === 'ACTIVE',
                        displayValue: result.status,
                        passText: 'Active',
                        failText: 'Inactive',
                      },
                      {
                        name: 'License Expiration',
                        value: result.status === 'ACTIVE',
                        displayValue: result.expiration_date,
                        passText: 'Valid',
                        failText: 'Expired/Invalid',
                      },
                      {
                        name: 'OIG Exclusion',
                        value: result.oig_excluded,
                        displayValue: result.oig_excluded,
                        passText: 'Not Excluded',
                        failText: 'Excluded',
                      },
                      {
                        name: 'SAM Exclusion',
                        value: result.sam_excluded,
                        displayValue: result.sam_excluded,
                        passText: 'Not Excluded',
                        failText: 'Excluded',
                      },
                      {
                        name: 'CMS Preclusion',
                        value: result.cms_precluded,
                        displayValue: result.cms_precluded,
                        passText: 'Not Precluded',
                        failText: 'Precluded',
                      },
                      {
                        name: 'DEA Registration',
                        value: result.dea_status === 'ACTIVE' ? false : null,
                        displayValue: result.dea_number || 'Pending',
                        passText: 'Active',
                        failText: 'Inactive',
                      },
                      {
                        name: 'Medicare Opt-Out',
                        value: result.medicare_optout,
                        displayValue: result.medicare_optout,
                        passText: 'Participating',
                        failText: 'Opted Out',
                      },
                      {
                        name: 'OFAC/SDN Check',
                        value: result.ofac_flagged,
                        displayValue: result.ofac_flagged,
                        passText: 'Clear',
                        failText: 'Flagged',
                      },
                      {
                        name: 'Disciplinary Action',
                        value: result.disciplinary_flag,
                        displayValue: result.disciplinary_flag,
                        passText: 'No Action',
                        failText: 'Action Found',
                      },
                    ].map((check, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-3 border border-gray-200 rounded-lg"
                      >
                        <div>
                          <div className="font-medium text-gray-900 text-sm">{check.name}</div>
                          <div className="text-xs text-gray-600">
                            {getCheckText(check.value, check.passText, check.failText)}
                          </div>
                        </div>
                        <div className={`text-xl ${getStatusColor(check.value)}`}>
                          {getCheckIcon(check.value)}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="text-center p-6 bg-blue-50 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Like what you see?</h4>
                  <p className="text-gray-600 mb-4">
                    Get unlimited access to our verification API. Free tier includes 25 verifications per month.
                  </p>
                  <a
                    href="https://api.api-cert.com/portal/signup"
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
                  >
                    Sign Up Free →
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}