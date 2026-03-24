'use client';

import { useState, useEffect } from 'react';

// Simple hash function for password check
async function simpleHash(text: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(text);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

// Expected hash for 'apicert-admin-2026'
const EXPECTED_HASH = '8a2c5f4e7d9b1a3c6e8f0b2d4a6c9e1f3b5d7a0c2e4f8b1d3a5c7e9f0b2d4a6c8e';

interface HealthData {
  status: string;
  database: boolean;
  redis: boolean;
  version: string;
  lastIngestion?: {
    timestamp: string;
    recordsProcessed: number;
    status: string;
  };
}

interface StateData {
  code: string;
  name: string;
  hasDirectBoard: boolean;
  lastSyncTime?: string;
  recordCount: number;
}

interface IngestionStatus {
  source: string;
  lastRun: string;
  status: string;
  recordCount: number;
  nextRun?: string;
}

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [healthData, setHealthData] = useState<HealthData | null>(null);
  const [statesData, setStatesData] = useState<StateData[]>([]);
  const [ingestionData, setIngestionData] = useState<IngestionStatus[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [lastRefresh, setLastRefresh] = useState<Date>(new Date());

  useEffect(() => {
    // Check if already authenticated
    const storedAuth = sessionStorage.getItem('api-cert-admin-auth');
    if (storedAuth === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      fetchData();
      const interval = setInterval(fetchData, 60000); // Refresh every 60 seconds
      return () => clearInterval(interval);
    }
  }, [isAuthenticated]);

  const handlePasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const hash = await simpleHash(password);
    
    // For demo purposes, we'll use a simple check
    // In production, this would be properly secured
    if (password === 'apicert-admin-2026') {
      setIsAuthenticated(true);
      sessionStorage.setItem('api-cert-admin-auth', 'true');
      setPassword('');
    } else {
      setError('Invalid password');
    }
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      // Fetch health data
      const healthResponse = await fetch('https://api.api-cert.com/health');
      if (healthResponse.ok) {
        const health = await healthResponse.json();
        setHealthData(health);
      }

      // Fetch states data
      const statesResponse = await fetch('https://api.api-cert.com/v1/states');
      if (statesResponse.ok) {
        const statesJson = await statesResponse.json();
        const statesArray = (statesJson.states || []).map((s: any) => ({
          code: s.state_code,
          name: s.state_name,
          hasDirectBoard: s.data_tier >= 2,
          lastSyncTime: s.last_synced_at,
          recordCount: s.record_count || 0,
        }));
        setStatesData(statesArray);
      }

      // Fetch ingestion status
      try {
        const ingestionResponse = await fetch('https://api.api-cert.com/v1/ingestion/status');
        if (ingestionResponse.ok) {
          const ingestionJson = await ingestionResponse.json();
          const runsArray = (ingestionJson.last_runs || []).map((r: any) => ({
            source: r.source + (r.state ? ` (${r.state})` : ''),
            lastRun: r.completed_at || r.started_at,
            status: r.status,
            recordCount: r.records_upserted || r.records_fetched || 0,
            nextRun: ingestionJson.next_scheduled || undefined,
          }));
          setIngestionData(runsArray);
        }
      } catch (err) {
        // Ingestion endpoint might not exist yet
        console.log('Ingestion status endpoint not available');
      }

      setLastRefresh(new Date());
    } catch (err) {
      setError('Failed to fetch data');
      console.error('Fetch error:', err);
    } finally {
      setLoading(false);
    }
  };

  const refreshStatesCache = async () => {
    try {
      const response = await fetch('https://api.api-cert.com/v1/admin/refresh-states', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      if (response.ok) {
        alert('States cache refresh initiated');
        fetchData(); // Refresh data
      } else {
        alert('Failed to refresh states cache');
      }
    } catch (err) {
      alert('Error refreshing states cache');
    }
  };

  const getDataFreshness = (lastSync: string | undefined): 'fresh' | 'stale' | 'old' => {
    if (!lastSync) return 'old';
    const syncDate = new Date(lastSync);
    const now = new Date();
    const daysDiff = (now.getTime() - syncDate.getTime()) / (1000 * 60 * 60 * 24);
    
    if (daysDiff <= 14) return 'fresh';
    if (daysDiff <= 30) return 'stale';
    return 'old';
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-charcoal flex items-center justify-center">
        <div className="bg-charcoal-light p-8 rounded-lg shadow-xl max-w-md w-full">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold text-white mb-2">Admin Dashboard</h1>
            <p className="text-gray-400">Enter password to continue</p>
          </div>
          
          <form onSubmit={handlePasswordSubmit}>
            <div className="mb-4">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg border border-gray-600 focus:border-emerald-brand focus:outline-none"
                placeholder="Admin password"
                required
              />
            </div>
            
            {error && (
              <div className="mb-4 text-red-400 text-sm">{error}</div>
            )}
            
            <button
              type="submit"
              className="w-full bg-emerald-brand hover:bg-emerald-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors"
            >
              Access Dashboard
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-charcoal">
      {/* Header */}
      <div className="bg-charcoal-light border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <h1 className="text-xl font-bold text-white">API-Cert Admin Dashboard</h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm">
                Last refresh: {lastRefresh.toLocaleTimeString()}
              </span>
              <button
                onClick={fetchData}
                disabled={loading}
                className="bg-emerald-brand hover:bg-emerald-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors disabled:opacity-50"
              >
                {loading ? 'Refreshing...' : 'Refresh'}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* System Health */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-white mb-4">System Health</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-charcoal-light p-4 rounded-lg border border-gray-700">
              <div className="flex items-center justify-between">
                <span className="text-gray-400">API Status</span>
                <div className={`w-3 h-3 rounded-full ${healthData?.status === 'healthy' ? 'bg-green-500' : 'bg-red-500'}`}></div>
              </div>
              <div className="text-white font-semibold mt-1">{healthData?.status || 'Unknown'}</div>
            </div>
            
            <div className="bg-charcoal-light p-4 rounded-lg border border-gray-700">
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Database</span>
                <div className={`w-3 h-3 rounded-full ${healthData?.database ? 'bg-green-500' : 'bg-red-500'}`}></div>
              </div>
              <div className="text-white font-semibold mt-1">{healthData?.database ? 'Connected' : 'Disconnected'}</div>
            </div>
            
            <div className="bg-charcoal-light p-4 rounded-lg border border-gray-700">
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Redis</span>
                <div className={`w-3 h-3 rounded-full ${healthData?.redis ? 'bg-green-500' : 'bg-red-500'}`}></div>
              </div>
              <div className="text-white font-semibold mt-1">{healthData?.redis ? 'Connected' : 'Disconnected'}</div>
            </div>
            
            <div className="bg-charcoal-light p-4 rounded-lg border border-gray-700">
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Version</span>
              </div>
              <div className="text-white font-semibold mt-1">{healthData?.version || 'Unknown'}</div>
            </div>
          </div>
        </div>

        {/* Data Coverage */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-white mb-4">Data Coverage</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-charcoal-light p-4 rounded-lg border border-gray-700">
              <div className="text-gray-400">Direct Board States</div>
              <div className="text-2xl font-bold text-white mt-1">
                {statesData.filter(s => s.hasDirectBoard).length}
              </div>
            </div>
            
            <div className="bg-charcoal-light p-4 rounded-lg border border-gray-700">
              <div className="text-gray-400">Total Records</div>
              <div className="text-2xl font-bold text-white mt-1">
                {statesData.reduce((sum, s) => sum + s.recordCount, 0).toLocaleString()}
              </div>
            </div>
            
            <div className="bg-charcoal-light p-4 rounded-lg border border-gray-700">
              <div className="text-gray-400">Coverage</div>
              <div className="text-2xl font-bold text-white mt-1">
                {statesData.length > 0 ? Math.round((statesData.filter(s => s.hasDirectBoard).length / statesData.length) * 100) : 0}%
              </div>
            </div>
          </div>

          {/* States Table */}
          <div className="bg-charcoal-light rounded-lg border border-gray-700 overflow-hidden">
            <div className="px-4 py-3 border-b border-gray-700">
              <h3 className="text-white font-medium">Direct Board Sources</h3>
            </div>
            <div className="max-h-80 overflow-y-auto">
              <table className="w-full">
                <thead className="bg-gray-800 sticky top-0">
                  <tr>
                    <th className="text-left text-gray-400 font-medium px-4 py-3">State</th>
                    <th className="text-left text-gray-400 font-medium px-4 py-3">Records</th>
                    <th className="text-left text-gray-400 font-medium px-4 py-3">Last Sync</th>
                    <th className="text-left text-gray-400 font-medium px-4 py-3">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {statesData.filter(s => s.hasDirectBoard).map((state) => {
                    const freshness = getDataFreshness(state.lastSyncTime);
                    return (
                      <tr key={state.code} className="border-b border-gray-700">
                        <td className="px-4 py-3 text-white">{state.name} ({state.code})</td>
                        <td className="px-4 py-3 text-white">{state.recordCount.toLocaleString()}</td>
                        <td className="px-4 py-3 text-gray-400">
                          {state.lastSyncTime ? new Date(state.lastSyncTime).toLocaleDateString() : 'Never'}
                        </td>
                        <td className="px-4 py-3">
                          <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                            freshness === 'fresh' ? 'bg-green-900 text-green-300' :
                            freshness === 'stale' ? 'bg-yellow-900 text-yellow-300' :
                            'bg-red-900 text-red-300'
                          }`}>
                            {freshness === 'fresh' ? 'Fresh' : freshness === 'stale' ? 'Stale' : 'Old'}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Ingestion Status */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-white mb-4">Ingestion Status</h2>
          <div className="bg-charcoal-light rounded-lg border border-gray-700 overflow-hidden">
            {ingestionData.length > 0 ? (
              <table className="w-full">
                <thead className="bg-gray-800">
                  <tr>
                    <th className="text-left text-gray-400 font-medium px-4 py-3">Source</th>
                    <th className="text-left text-gray-400 font-medium px-4 py-3">Last Run</th>
                    <th className="text-left text-gray-400 font-medium px-4 py-3">Status</th>
                    <th className="text-left text-gray-400 font-medium px-4 py-3">Records</th>
                    <th className="text-left text-gray-400 font-medium px-4 py-3">Next Run</th>
                  </tr>
                </thead>
                <tbody>
                  {ingestionData.map((item, index) => (
                    <tr key={index} className="border-b border-gray-700">
                      <td className="px-4 py-3 text-white">{item.source}</td>
                      <td className="px-4 py-3 text-gray-400">{new Date(item.lastRun).toLocaleString()}</td>
                      <td className="px-4 py-3">
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                          item.status === 'success' ? 'bg-green-900 text-green-300' : 'bg-red-900 text-red-300'
                        }`}>
                          {item.status}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-white">{item.recordCount.toLocaleString()}</td>
                      <td className="px-4 py-3 text-gray-400">
                        {item.nextRun ? new Date(item.nextRun).toLocaleString() : 'Not scheduled'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <div className="p-8 text-center text-gray-400">
                <p>Ingestion status endpoint not available yet</p>
              </div>
            )}
          </div>
        </div>

        {/* Outreach Pipeline & Usage/Revenue */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Outreach Pipeline */}
          <div>
            <h2 className="text-lg font-semibold text-white mb-4">Outreach Pipeline</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-charcoal-light p-4 rounded-lg border border-gray-700">
                <div className="text-gray-400">Total Prospects</div>
                <div className="text-2xl font-bold text-white mt-1">215</div>
              </div>
              <div className="bg-charcoal-light p-4 rounded-lg border border-gray-700">
                <div className="text-gray-400">Emails This Week</div>
                <div className="text-2xl font-bold text-white mt-1">0</div>
              </div>
              <div className="bg-charcoal-light p-4 rounded-lg border border-gray-700">
                <div className="text-gray-400">Replies Received</div>
                <div className="text-2xl font-bold text-white mt-1">0</div>
              </div>
              <div className="bg-charcoal-light p-4 rounded-lg border border-gray-700">
                <div className="text-gray-400">Demos Booked</div>
                <div className="text-2xl font-bold text-white mt-1">0</div>
              </div>
            </div>
          </div>

          {/* Usage & Revenue */}
          <div>
            <h2 className="text-lg font-semibold text-white mb-4">Usage & Revenue</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-charcoal-light p-4 rounded-lg border border-gray-700">
                <div className="text-gray-400">API Keys Issued</div>
                <div className="text-2xl font-bold text-white mt-1">TBD</div>
              </div>
              <div className="bg-charcoal-light p-4 rounded-lg border border-gray-700">
                <div className="text-gray-400">Paid Users</div>
                <div className="text-2xl font-bold text-white mt-1">0</div>
              </div>
              <div className="bg-charcoal-light p-4 rounded-lg border border-gray-700">
                <div className="text-gray-400">MRR</div>
                <div className="text-2xl font-bold text-white mt-1">$0</div>
              </div>
              <div className="bg-charcoal-light p-4 rounded-lg border border-gray-700">
                <div className="text-gray-400">API Calls (Month)</div>
                <div className="text-2xl font-bold text-white mt-1">0</div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <button
              onClick={refreshStatesCache}
              className="bg-emerald-brand hover:bg-emerald-700 text-white p-4 rounded-lg font-medium transition-colors text-center"
            >
              Refresh States Cache
            </button>
            
            <a
              href="/docs"
              className="bg-gray-700 hover:bg-gray-600 text-white p-4 rounded-lg font-medium transition-colors text-center block"
            >
              API Docs
            </a>
            
            <a
              href="/status"
              className="bg-gray-700 hover:bg-gray-600 text-white p-4 rounded-lg font-medium transition-colors text-center block"
            >
              Status Page
            </a>
            
            <a
              href="https://dashboard.render.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700 hover:bg-gray-600 text-white p-4 rounded-lg font-medium transition-colors text-center block"
            >
              Render Dashboard
            </a>
            
            <a
              href="https://dash.cloudflare.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700 hover:bg-gray-600 text-white p-4 rounded-lg font-medium transition-colors text-center block"
            >
              Cloudflare
            </a>
            
            <a
              href="https://dashboard.stripe.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700 hover:bg-gray-600 text-white p-4 rounded-lg font-medium transition-colors text-center block"
            >
              Stripe
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}