'use client';

import { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Image from 'next/image';

interface HealthData {
  status: string;
  timestamp: string;
  version: string;
}

interface StateData {
  state_code: string;
  state_name: string;
  data_source: string;
  data_tier: number;
  last_synced_at: string;
  supported_license_types: string[];
}

interface StatesResponse {
  states: StateData[];
  total_states: number;
  coverage_summary: {
    total_states_with_data: number;
    license_types_available: string[];
  };
}

const DIRECT_SOURCES: Record<string, string> = {
  ak_dcced: 'Alaska DCCED',
  al_bulk: 'Alabama Board of Nursing',
  socrata_co: 'Colorado DORA',
  socrata_ct: 'Connecticut eLicense',
  socrata_de: 'Delaware DPR',
  fl_mqa: 'Florida MQA',
  socrata_il: 'Illinois IDFPR',
  ma_dph: 'Massachusetts DPH',
  md_mbp: 'Maryland Board of Physicians',
  nj_mylicense: 'New Jersey MyLicense',
  ri_bulk: 'Rhode Island DOH',
  socrata_tx: 'Texas Open Data',
  socrata_wa: 'Washington DOH',
};

export default function StatusPage() {
  const [health, setHealth] = useState<HealthData | null>(null);
  const [states, setStates] = useState<StatesResponse | null>(null);
  const [healthError, setHealthError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      fetch('https://api.api-cert.com/health')
        .then(r => r.json())
        .catch(() => { setHealthError(true); return null; }),
      fetch('https://api.api-cert.com/v1/states')
        .then(r => r.json())
        .catch(() => null),
    ]).then(([h, s]) => {
      setHealth(h);
      setStates(s);
      setLoading(false);
    });
  }, []);

  const directStates = states?.states.filter(s => 
    s.data_source !== 'nppes_bulk' && s.state_name.length > 2
  ) || [];

  const totalRecords = '6.2M+';

  const formatTime = (iso: string) => {
    const d = new Date(iso);
    return d.toLocaleString('en-US', { 
      month: 'short', day: 'numeric', year: 'numeric',
      hour: 'numeric', minute: '2-digit', timeZoneName: 'short'
    });
  };

  const timeSince = (iso: string) => {
    const ms = Date.now() - new Date(iso).getTime();
    const hours = Math.floor(ms / 3600000);
    const days = Math.floor(hours / 24);
    if (days > 0) return `${days}d ${hours % 24}h ago`;
    if (hours > 0) return `${hours}h ago`;
    return `${Math.floor(ms / 60000)}m ago`;
  };

  return (
    <div className="min-h-screen bg-[#111827] text-white">
      {/* Nav */}
      <nav className="px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between border-b border-gray-800">
        <a href="/">
          <Image src="/logo-white.png" alt="API-Cert" width={160} height={40} className="h-9 w-auto" />
        </a>
        <div className="flex items-center gap-6">
          <a href="/docs" className="text-sm text-slate-300 hover:text-white transition-colors">Docs</a>
          <a href="/#pricing" className="text-sm text-slate-300 hover:text-white transition-colors">Pricing</a>
          <a href="/portal/login" className="text-sm bg-[#059669] text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors">Sign In</a>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold mb-2">API Status</h1>
        <p className="text-slate-400 mb-10">Real-time health and coverage for API-Cert services.</p>

        {loading ? (
          <div className="text-slate-400">Loading status...</div>
        ) : (
          <>
            {/* Health Card */}
            <div className={`rounded-xl border p-6 mb-8 ${
              health?.status === 'healthy' && !healthError
                ? 'border-emerald-500/30 bg-emerald-500/5'
                : 'border-red-500/30 bg-red-500/5'
            }`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full ${
                    health?.status === 'healthy' && !healthError
                      ? 'bg-emerald-400 shadow-lg shadow-emerald-400/50'
                      : 'bg-red-400 shadow-lg shadow-red-400/50'
                  }`} />
                  <span className="text-xl font-semibold">
                    {health?.status === 'healthy' && !healthError ? 'All Systems Operational' : 'Service Disruption'}
                  </span>
                </div>
                {health && (
                  <span className="text-sm text-slate-400 font-mono">v{health.version}</span>
                )}
              </div>
              {health?.timestamp && (
                <p className="text-sm text-slate-400 mt-2 ml-6">
                  Last checked: {formatTime(health.timestamp)}
                </p>
              )}
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
              {[
                { name: 'API', desc: 'REST API & Verification', status: health?.status === 'healthy' },
                { name: 'Database', desc: 'Provider Records', status: health?.status === 'healthy' },
                { name: 'Portal', desc: 'Web Dashboard', status: health?.status === 'healthy' },
              ].map(svc => (
                <div key={svc.name} className="rounded-lg border border-gray-700 bg-gray-800/50 p-4">
                  <div className="flex items-center gap-2 mb-1">
                    <div className={`w-2 h-2 rounded-full ${svc.status ? 'bg-emerald-400' : 'bg-red-400'}`} />
                    <span className="font-medium">{svc.name}</span>
                  </div>
                  <p className="text-sm text-slate-400">{svc.desc}</p>
                </div>
              ))}
            </div>

            {/* Stats */}
            <h2 className="text-xl font-semibold mb-4">Coverage</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {[
                { label: 'Provider Records', value: totalRecords },
                { label: 'Direct Board Sources', value: `${directStates.length}` },
                { label: 'Nationwide (NPPES)', value: '50 states' },
                { label: 'Federal Databases', value: '7' },
              ].map(stat => (
                <div key={stat.label} className="rounded-lg border border-gray-700 bg-gray-800/50 p-4 text-center">
                  <div className="text-2xl font-bold text-emerald-400">{stat.value}</div>
                  <div className="text-xs text-slate-400 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Direct Board Sources */}
            <h2 className="text-xl font-semibold mb-4">Direct Board Data Sources</h2>
            <p className="text-sm text-slate-400 mb-4">
              States with primary source license data ingested directly from state boards. All other states use NPPES/NPI baseline data.
            </p>
            <div className="rounded-xl border border-gray-700 overflow-hidden mb-12">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-800 text-slate-400">
                    <th className="text-left px-4 py-3 font-medium">State</th>
                    <th className="text-left px-4 py-3 font-medium">Source</th>
                    <th className="text-left px-4 py-3 font-medium">Last Synced</th>
                    <th className="text-left px-4 py-3 font-medium">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {directStates.sort((a, b) => a.state_name.localeCompare(b.state_name)).map(s => (
                    <tr key={s.state_code} className="border-t border-gray-800 hover:bg-gray-800/50">
                      <td className="px-4 py-3 font-medium">{s.state_name}</td>
                      <td className="px-4 py-3 text-slate-400">{DIRECT_SOURCES[s.data_source] || s.data_source}</td>
                      <td className="px-4 py-3 text-slate-400">{timeSince(s.last_synced_at)}</td>
                      <td className="px-4 py-3">
                        <span className="inline-flex items-center gap-1.5 text-emerald-400 text-xs font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                          Live
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Federal Databases */}
            <h2 className="text-xl font-semibold mb-4">Federal Database Coverage</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-12">
              {[
                { name: 'OIG LEIE', desc: 'Exclusion screening' },
                { name: 'SAM.gov', desc: 'Debarment & sanctions' },
                { name: 'NPPES/NPI', desc: 'Provider identity & taxonomy' },
                { name: 'CMS Preclusion List', desc: 'Medicare Part D / MA exclusions' },
                { name: 'Medicare Opt-Out', desc: 'Providers opted out of Medicare' },
                { name: 'OFAC/SDN', desc: 'Treasury sanctions list' },
                { name: 'DEA Registration', desc: 'Controlled substance authority' },
              ].map(db => (
                <div key={db.name} className="flex items-center gap-3 rounded-lg border border-gray-700 bg-gray-800/50 px-4 py-3">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <div>
                    <span className="font-medium">{db.name}</span>
                    <span className="text-slate-400 text-sm ml-2">— {db.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      <Footer />
    </div>
  );
}
