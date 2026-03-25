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
  verified?: boolean;
}

interface SearchResult {
  full_name: string;
  first_name: string | null;
  last_name: string;
  license_number: string | null;
  license_type: string;
  state: string;
  status: string | null;
  expiration_date: string | null;
  license_type_detail: string | null;
}

interface ListResponse {
  request_id: string;
  match_count: number;
  results: SearchResult[];
  message: string | null;
  latency_ms: number;
}

type DemoResponse = VerifyResponse | ListResponse;

function isListResponse(data: DemoResponse): data is ListResponse {
  return 'results' in data && Array.isArray((data as ListResponse).results);
}

const states = [
  { code: 'AK', name: 'Alaska' },
  { code: 'AL', name: 'Alabama' },
  { code: 'CO', name: 'Colorado' },
  { code: 'CT', name: 'Connecticut' },
  { code: 'DE', name: 'Delaware' },
  { code: 'FL', name: 'Florida' },
  { code: 'IL', name: 'Illinois' },
  { code: 'MA', name: 'Massachusetts' },
  { code: 'MD', name: 'Maryland' },
  { code: 'ME', name: 'Maine' },
  { code: 'NH', name: 'New Hampshire' },
  { code: 'NJ', name: 'New Jersey' },
  { code: 'RI', name: 'Rhode Island' },
  { code: 'TX', name: 'Texas' },
  { code: 'VT', name: 'Vermont' },
  { code: 'WA', name: 'Washington' },
];

const licenseTypes = [
  { code: 'RN', name: 'Registered Nurse' },
  { code: 'LPN', name: 'Licensed Practical Nurse' },
  { code: 'NP', name: 'Nurse Practitioner' },
  { code: 'APRN', name: 'Advanced Practice RN' },
  { code: 'PA', name: 'Physician Assistant' },
  { code: 'MD', name: 'Medical Doctor' },
  { code: 'DO', name: 'Doctor of Osteopathic Medicine' },
];

export default function LiveDemo() {
  const [formData, setFormData] = useState({
    state: 'FL',
    license_type: 'RN',
    last_name: 'Williams',
    first_name: '',
  });
  const [loading, setLoading] = useState(false);
  const [detailLoading, setDetailLoading] = useState(false);
  const [result, setResult] = useState<DemoResponse | null>(null);
  const [detailResult, setDetailResult] = useState<VerifyResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResult(null);
    setDetailResult(null);

    try {
      const params = new URLSearchParams({
        state: formData.state,
        license_type: formData.license_type,
        last_name: formData.last_name,
      });
      if (formData.first_name.trim()) {
        params.set('first_name', formData.first_name.trim());
      }
      const response = await fetch(`https://api.api-cert.com/v1/demo/verify?${params}`);

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

  const handleSelectProvider = async (provider: SearchResult) => {
    setDetailLoading(true);
    setDetailResult(null);

    try {
      const params = new URLSearchParams({
        state: provider.state,
        license_type: provider.license_type,
        last_name: provider.last_name,
      });
      if (provider.license_number) {
        params.set('license_number', provider.license_number);
      }
      if (provider.first_name) {
        params.set('first_name', provider.first_name);
      }
      const response = await fetch(`https://api.api-cert.com/v1/demo/verify?${params}`);

      if (!response.ok) {
        throw new Error('Failed to load provider details');
      }

      const data = await response.json();
      // If we still get a list (unlikely with license_number), take the first
      if (isListResponse(data)) {
        // Shouldn't happen with license_number, but handle gracefully
        setDetailResult(null);
      } else {
        setDetailResult(data);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
    } finally {
      setDetailLoading(false);
    }
  };

  // For exclusion-style checks: false = pass (not excluded), true = fail (excluded)
  // Use `invert: true` on checks where true = good (like License Status = ACTIVE)
  const getCheckIcon = (value: boolean | null, invert = false) => {
    if (value === null) return '⏳';
    const pass = invert ? value : !value;
    return pass ? '✅' : '❌';
  };

  const getCheckText = (value: boolean | null, passText: string, failText: string, invert = false) => {
    if (value === null) return 'Pending';
    const pass = invert ? value : !value;
    return pass ? passText : failText;
  };

  const getStatusColor = (value: boolean | null, invert = false) => {
    if (value === null) return 'text-yellow-600';
    const pass = invert ? value : !value;
    return pass ? 'text-green-600' : 'text-red-600';
  };

  const getStatusBadge = (status: string | null) => {
    if (!status) return null;
    const colors: Record<string, string> = {
      ACTIVE: 'bg-green-100 text-green-800',
      EXPIRED: 'bg-red-100 text-red-800',
      INACTIVE: 'bg-gray-100 text-gray-800',
      SUSPENDED: 'bg-orange-100 text-orange-800',
      REVOKED: 'bg-red-100 text-red-800',
      CONDITIONAL: 'bg-yellow-100 text-yellow-800',
    };
    return (
      <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${colors[status] || 'bg-gray-100 text-gray-800'}`}>
        {status}
      </span>
    );
  };

  const renderDetailCard = (detail: VerifyResponse) => (
    <div className="space-y-6">
      {/* Back button if we came from a list */}
      {result && isListResponse(result) && (
        <button
          onClick={() => setDetailResult(null)}
          className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center gap-1"
        >
          ← Back to results
        </button>
      )}

      {/* Provider Info */}
      <div className="bg-gray-50 rounded-lg p-4">
        <h3 className="font-semibold text-gray-900 mb-2">Provider Information</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
          <div>
            <span className="text-gray-600">Name:</span>
            <span className="ml-2 font-medium">{detail.full_name}</span>
          </div>
          <div>
            <span className="text-gray-600">License:</span>
            <span className="ml-2 font-medium">{detail.license_number || 'N/A'}</span>
          </div>
          <div>
            <span className="text-gray-600">Expiry:</span>
            <span className="ml-2 font-medium">{detail.expiration_date || 'N/A'}</span>
          </div>
        </div>
        <div className="mt-2 text-xs text-gray-500">
          Verified in {detail.latency_ms}ms • Source: {detail.source_name}
        </div>
      </div>

      {/* 9-Point Verification Results */}
      <div>
        <h3 className="font-semibold text-gray-900 mb-4">
          {['MD', 'DO', 'NP', 'PA'].includes(detail.license_type) ? '9' : '6'}-Point Verification Results
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {(() => {
            const isPrescriber = ['MD', 'DO', 'NP', 'PA'].includes(detail.license_type);
            const checks = [
              { name: 'License Status', value: detail.status === 'ACTIVE', passText: 'Active', failText: 'Inactive', invert: true },
              { name: 'License Expiration', value: detail.status === 'ACTIVE', passText: 'Valid', failText: 'Expired/Invalid', invert: true },
              { name: 'OIG Exclusion', value: detail.oig_excluded, passText: 'Not Excluded', failText: 'Excluded', invert: false },
              { name: 'SAM Exclusion', value: detail.sam_excluded, passText: 'Not Excluded', failText: 'Excluded', invert: false },
              // CMS Preclusion, DEA, Medicare Opt-Out only for prescribers
              ...(isPrescriber ? [
                { name: 'CMS Preclusion', value: detail.cms_precluded, passText: 'Not Precluded', failText: 'Precluded', invert: false },
                { name: 'DEA Registration', value: detail.dea_status === 'ACTIVE' ? true : null, passText: 'Active', failText: 'Inactive', invert: true },
                { name: 'Medicare Opt-Out', value: detail.medicare_optout, passText: 'Participating', failText: 'Opted Out', invert: false },
              ] : []),
              { name: 'OFAC/SDN Check', value: detail.ofac_flagged, passText: 'Clear', failText: 'Flagged', invert: false },
              { name: 'Disciplinary Action', value: detail.disciplinary_flag, passText: 'No Action', failText: 'Action Found', invert: false },
            ];
            return checks;
          })().map((check, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 border border-gray-200 rounded-lg"
            >
              <div>
                <div className="font-medium text-gray-900 text-sm">{check.name}</div>
                <div className="text-xs text-gray-600">
                  {getCheckText(check.value, check.passText, check.failText, check.invert)}
                </div>
              </div>
              <div className={`text-xl ${getStatusColor(check.value, check.invert)}`}>
                {getCheckIcon(check.value, check.invert)}
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
  );

  const renderListResults = (data: ListResponse) => (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-600">
          {data.message || `Found ${data.match_count} matching providers`}
        </p>
        <span className="text-xs text-gray-400">{data.latency_ms}ms</span>
      </div>

      <div className="border border-gray-200 rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left px-4 py-3 font-medium text-gray-700">Name</th>
                <th className="text-left px-4 py-3 font-medium text-gray-700">License #</th>
                <th className="text-left px-4 py-3 font-medium text-gray-700">Status</th>
                <th className="text-left px-4 py-3 font-medium text-gray-700">Expires</th>
                <th className="px-4 py-3"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {data.results.map((provider, index) => (
                <tr
                  key={index}
                  className="hover:bg-blue-50 cursor-pointer transition-colors"
                  onClick={() => handleSelectProvider(provider)}
                >
                  <td className="px-4 py-3 font-medium text-gray-900">{provider.full_name}</td>
                  <td className="px-4 py-3 text-gray-600 font-mono text-xs">{provider.license_number || '—'}</td>
                  <td className="px-4 py-3">{getStatusBadge(provider.status)}</td>
                  <td className="px-4 py-3 text-gray-600">{provider.expiration_date || '—'}</td>
                  <td className="px-4 py-3 text-right">
                    <span className="text-blue-600 text-xs font-medium">View →</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {data.match_count > 25 && (
        <p className="text-xs text-gray-500 text-center">
          Showing 25 of {data.match_count} results. Add a first name to narrow your search.
        </p>
      )}

      {/* CTA */}
      <div className="text-center p-6 bg-blue-50 rounded-lg">
        <h4 className="text-lg font-semibold text-gray-900 mb-2">Need full API access?</h4>
        <p className="text-gray-600 mb-4">
          Search, verify, and monitor providers programmatically. Free tier includes 25 verifications per month.
        </p>
        <a
          href="https://api.api-cert.com/portal/signup"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
        >
          Sign Up Free →
        </a>
      </div>
    </div>
  );

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Try It Right Now — No Signup Required
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See our multi-point verification system in action. Real data, real-time results.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            {/* Demo Form */}
            <form onSubmit={handleSubmit} className="mb-8">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
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
                    placeholder="Required"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    value={formData.first_name}
                    onChange={(e) => setFormData({ ...formData, first_name: e.target.value })}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Optional"
                  />
                </div>

                <div className="flex items-end">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white font-medium py-2 px-4 rounded-lg transition-colors"
                  >
                    {loading ? 'Searching...' : 'Search'}
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

            {/* Loading for detail view */}
            {detailLoading && (
              <div className="text-center py-8">
                <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                <p className="mt-2 text-sm text-gray-500">Loading provider details...</p>
              </div>
            )}

            {/* Detail view (clicked from list) */}
            {detailResult && !detailLoading && renderDetailCard(detailResult)}

            {/* Results Display */}
            {result && !detailResult && !detailLoading && (
              isListResponse(result)
                ? renderListResults(result)
                : renderDetailCard(result)
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
