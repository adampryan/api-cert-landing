# API-Cert Landing Page Brief

## Product
API-Cert — U.S. healthcare license verification API. Verifies RN, LPN, NP, PA, MD, DO licenses
across all 50 states in under 100ms. Data from official government sources, updated daily.

## Domain
api-cert.com (Cloudflare, deploying to Cloudflare Pages)

## Target Buyer
Primary: Credentialing coordinators at travel nurse staffing agencies
Secondary: Developers building healthcare apps, hospital HR teams

## Stack
- Next.js 15, TypeScript, Tailwind CSS v4
- Cloudflare Pages deployment (static export ok)
- No backend needed — pure marketing page

## Design Direction
- Dark hero (#0a1628 deep navy), clean and professional
- NOT startup-cute. Think Stripe meets healthcare compliance.
- Fast, authoritative, trustworthy
- Color accents: electric blue (#2563EB), white, light gray

## Sections (in order)

### 1. Hero
- Headline: "Verify Any Healthcare License. Instantly."
- Subhead: "API-Cert checks RN, LPN, NP, PA, MD, and DO licenses across all 50 states
  in under 100ms — using official government data sources, updated daily."
- Primary CTA: "Start Free Trial" → #pricing
- Secondary CTA: "View Docs" → /docs
- Visual: Animated JSON response block showing a real verify API call + response
  (fake but realistic data, dark terminal style)

### 2. Social Proof Bar
- "Trusted data from:" then logos/text for: NPPES, OIG LEIE, SAM.gov, CMS, State Boards

### 3. How It Works (3 steps)
1. Send a POST request with name, license type, state
2. We query 50-state database + federal exclusion lists
3. Get verified status, expiry, and disciplinary flags in <100ms

### 4. Features Grid (2x3)
- ✅ All 50 States — Every state nursing and provider board covered
- ⚡ Sub-100ms — Queries cached locally, not scraped live
- 🛡️ Exclusion Checks — OIG LEIE, SAM.gov, CMS Preclusion List
- 📦 Bulk Verification — Upload CSV or send up to 100 in one API call
- 🔄 Daily Updates — Fresh data from official sources every 24 hours
- 🔑 Simple Auth — One API key, standard REST, JSON responses

### 5. Code Example
Tab between curl / Python / Node.js showing a real verify request + response

### 6. Pricing
Three cards:
- Starter: $99/mo — 500 verifications/mo, 60 req/min — "For small agencies"
- Growth: $299/mo — 2,000 verifications/mo, 120 req/min — "Most Popular" badge
- Agency: $799/mo — 10,000 verifications/mo, 300 req/min — "For large staffing firms"
- Enterprise: "Contact us" — Unlimited, SLA, white-glove onboarding

### 7. FAQ
- What license types do you cover? (RN, LPN, NP, PA, MD, DO)
- How fresh is the data? (Daily ingestion from official sources)
- Do you cover all 50 states? (Yes + DC, PR, territories)
- Is this HIPAA compliant? (We verify licenses, no PHI is stored)
- Can I verify in bulk? (Yes, CSV upload or batch API up to 100)
- What if a license isn't found? (Returns not_found with latency, NPPES fallback)

### 8. Footer
- api-cert.com | Built by OneWeek Labs
- Links: Docs, Pricing, Contact, Status
- "© 2026 API-Cert. All rights reserved."

## API Response Example to show in hero (use this exact structure)
```json
{
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
}
```

## Notes
- No backend, no auth on the landing page itself
- "Start Free Trial" CTA goes to /signup (placeholder ok)
- Mobile responsive
- No markdown tables — use CSS grid/flex
- Lighthouse score should be 90+
- NEVER put real API keys in any file

When completely finished, run:
openclaw system event --text "Done: API-Cert landing page built at /Users/adamryan/projects/api-cert-landing" --mode now
