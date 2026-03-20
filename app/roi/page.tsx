'use client';

import { useState, useEffect } from 'react';
import Footer from '../components/Footer';

export default function ROICalculator() {
  const [values, setValues] = useState({
    providersPerMonth: 50,
    costPerVerification: 200,
    turnaroundDays: 7,
  });

  const [results, setResults] = useState({
    currentAnnualCost: 0,
    apiCertAnnualCost: 0,
    annualSavings: 0,
    timeSavedDays: 0,
  });

  useEffect(() => {
    // Calculate results
    const currentAnnualCost = values.providersPerMonth * values.costPerVerification * 12;
    
    // API-Cert pricing tiers based on volume
    let apiCertMonthlyCost = 99; // Starter plan
    if (values.providersPerMonth > 83) apiCertMonthlyCost = 299; // Growth plan
    if (values.providersPerMonth > 416) apiCertMonthlyCost = 599; // Scale plan
    
    const apiCertAnnualCost = apiCertMonthlyCost * 12;
    const annualSavings = currentAnnualCost - apiCertAnnualCost;
    const timeSavedDays = (values.turnaroundDays - 1) * values.providersPerMonth * 12 / 365; // API-Cert is ~1 day

    setResults({
      currentAnnualCost,
      apiCertAnnualCost,
      annualSavings,
      timeSavedDays,
    });
  }, [values]);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <a href="/" className="text-xl font-bold text-blue-600">
                API-Cert
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <a 
                href="https://api.api-cert.com/portal/signup"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700"
              >
                Sign Up Free
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            How Much Is Manual Credentialing Costing You?
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Calculate your potential savings with automated provider verification
          </p>
        </div>
      </div>

      {/* Calculator */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Inputs */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Current Process</h2>
            
            <div className="space-y-8">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Providers credentialed per month
                </label>
                <input
                  type="range"
                  min="10"
                  max="500"
                  value={values.providersPerMonth}
                  onChange={(e) => setValues({...values, providersPerMonth: parseInt(e.target.value)})}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-1">
                  <span>10</span>
                  <span className="font-medium text-blue-600">{values.providersPerMonth}</span>
                  <span>500</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Average cost per manual verification
                </label>
                <input
                  type="range"
                  min="100"
                  max="500"
                  step="25"
                  value={values.costPerVerification}
                  onChange={(e) => setValues({...values, costPerVerification: parseInt(e.target.value)})}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-1">
                  <span>$100</span>
                  <span className="font-medium text-blue-600">${values.costPerVerification}</span>
                  <span>$500</span>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  Includes staff time, system costs, and administrative overhead
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Average turnaround time (days)
                </label>
                <input
                  type="range"
                  min="1"
                  max="14"
                  value={values.turnaroundDays}
                  onChange={(e) => setValues({...values, turnaroundDays: parseInt(e.target.value)})}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-1">
                  <span>1 day</span>
                  <span className="font-medium text-blue-600">{values.turnaroundDays} days</span>
                  <span>14 days</span>
                </div>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Savings Potential</h2>
            
            <div className="space-y-6">
              {/* Current Cost */}
              <div className="p-6 bg-red-50 border border-red-200 rounded-lg">
                <div className="text-center">
                  <p className="text-sm text-red-600 font-medium mb-1">Current Annual Cost</p>
                  <p className="text-3xl font-bold text-red-700">
                    {formatCurrency(results.currentAnnualCost)}
                  </p>
                </div>
              </div>

              {/* API-Cert Cost */}
              <div className="p-6 bg-blue-50 border border-blue-200 rounded-lg">
                <div className="text-center">
                  <p className="text-sm text-blue-600 font-medium mb-1">With API-Cert (Annual)</p>
                  <p className="text-3xl font-bold text-blue-700">
                    {formatCurrency(results.apiCertAnnualCost)}
                  </p>
                </div>
              </div>

              {/* Savings */}
              <div className="p-6 bg-green-50 border border-green-200 rounded-lg">
                <div className="text-center">
                  <p className="text-sm text-green-600 font-medium mb-1">Annual Savings</p>
                  <p className="text-4xl font-bold text-green-700">
                    {formatCurrency(results.annualSavings)}
                  </p>
                  {results.annualSavings > 0 && (
                    <p className="text-sm text-green-600 mt-1">
                      That's a {Math.round(((results.annualSavings / results.currentAnnualCost) * 100))}% reduction in costs!
                    </p>
                  )}
                </div>
              </div>

              {/* Time Saved */}
              <div className="p-6 bg-purple-50 border border-purple-200 rounded-lg">
                <div className="text-center">
                  <p className="text-sm text-purple-600 font-medium mb-1">Time Saved Per Year</p>
                  <p className="text-3xl font-bold text-purple-700">
                    {Math.round(results.timeSavedDays)} days
                  </p>
                  <p className="text-sm text-purple-600 mt-1">
                    From instant API responses vs. manual processing
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8 text-center">
              <a 
                href="https://api.api-cert.com/portal/signup"
                className="w-full inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors"
              >
                Start Saving Today → Sign Up Free
              </a>
              <p className="text-sm text-gray-500 mt-2">
                Free tier: 25 verifications/month, no credit card required
              </p>
            </div>
          </div>
        </div>

        {/* What's Included */}
        <div className="mt-16 bg-white rounded-2xl shadow-xl p-8">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            What Makes API-Cert Different?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="font-semibold text-lg text-gray-900 mb-2">Instant Results</h4>
              <p className="text-gray-600">Complete 9-point verification in under 1 second vs. days of manual work</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-semibold text-lg text-gray-900 mb-2">9 Automated Checks</h4>
              <p className="text-gray-600">License status, OIG/SAM exclusions, DEA, Medicare opt-out, OFAC, and more</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h4 className="font-semibold text-lg text-gray-900 mb-2">Enterprise Security</h4>
              <p className="text-gray-600">SOC 2 compliant with encrypted data and audit trails</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #2563eb;
          cursor: pointer;
        }
        
        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #2563eb;
          cursor: pointer;
          border: none;
        }
      `}</style>
    </div>
  );
}