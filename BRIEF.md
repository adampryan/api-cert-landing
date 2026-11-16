# API-Cert Landing Page Brief

## Product
API-Cert — healthcare license verification operations tool. Reports what a state licensing board's
published file or page said about an RN, LPN, NP, PA, MD, or DO license, and the date that file carried.
Anything a board file can't answer is routed to the customer's staff (who verify at the board) or to the
board for written confirmation. Board-direct physician coverage (MD/DO/PA) is 16 states; board-direct
nurse coverage (RN/LPN/NP) is 15 states; 14 states have both. The NPPES/NPI registry is a nationwide
baseline listing only, not a verification. OIG LEIE exclusion screening is included.

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
- Headline: "Healthcare Credentialing, Automated."
- Subhead: "Board-published license status, with the date the board file carried. OIG exclusion
  screening included. Anything a board file can't answer goes to your staff or the board."
- Primary CTA: "Start Free Trial" → #pricing
- Secondary CTA: "View Docs" → /docs
- Visual: Animated JSON response block showing a real verify API call + response
  (fake but realistic data, dark terminal style)

### 2. Social Proof Bar
- "Data sources:" then logos/text for: NPPES (baseline listing), OIG LEIE, State Boards

### 3. How It Works (3 steps)
1. Send a POST request with name, license type, state
2. We report what the board's published file said, plus OIG exclusion screening
3. Get status, expiry, and disciplinary flags with the date the board file carried

### 4. Features Grid (2x3)
- ✅ Board-Direct Coverage — Physicians (MD/DO/PA) in 16 states, nurses (RN/LPN/NP) in 15
- ⚡ Dated Results — Board files loaded on a schedule; every result reports the date the file carried
- 🛡️ Exclusion Screening — OIG LEIE
- 📦 Bulk Verification — Upload CSV or send up to 100 in one API call
- 🔄 Scheduled Loads — Board files loaded on a schedule, not live
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
- How fresh is the data? (Loaded on a schedule; every result reports the date the file carried)
- Which states do you cover? (16 physician / 15 nurse board-direct; NPI is a baseline listing only)
- Is this HIPAA compliant? (We verify licenses, no PHI is stored)
- Can I verify in bulk? (Yes, CSV upload or batch API up to 100)
- What if a license isn't found? (Returns not_found; NPPES baseline listing checked; routed to staff or the board)

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
  "disciplinary_flag": false,
  "data_freshness": "2026-11-09"
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
