import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: "API-Cert Blog — Prescriber Credentialing Insights",
  description: "Expert insights on prescriber verification, DEA registration, federal exclusion screening, and credentialing automation for physicians, nurse practitioners, and physician assistants.",
};

interface BlogArticle {
  slug: string;
  title: string;
  excerpt: string;
  publishedDate: string;
  readTime: string;
  state?: string;
}

const articles: BlogArticle[] = [
  {
    slug: "prescriber-credentialing-texas",
    title: "Multi-State Prescriber Verification in Texas",
    excerpt: "Complete Texas prescriber credentialing guide covering multi-state verification, DEA registration, federal exclusion screening, and border region compliance for physicians, NPs, and PAs.",
    publishedDate: "2026-03-22",
    readTime: "13 min read",
    state: "TX"
  },
  {
    slug: "prescriber-credentialing-new-york",
    title: "Prescriber Credentialing in New York: DEA and License Verification",
    excerpt: "Complete guide to New York prescriber verification including I-STOP compliance, state licensing, DEA registration, and federal exclusion screening for healthcare providers.",
    publishedDate: "2026-03-22",
    readTime: "11 min read",
    state: "NY"
  },
  {
    slug: "prescriber-credentialing-massachusetts",
    title: "Multi-State Prescriber Verification in Massachusetts",
    excerpt: "Complete Massachusetts prescriber credentialing guide including multi-state license verification, academic medical center requirements, and comprehensive federal screening.",
    publishedDate: "2026-03-22",
    readTime: "12 min read",
    state: "MA"
  },
  {
    slug: "prescriber-credentialing-florida", 
    title: "Prescriber Credentialing in Florida: DEA, License, and OIG Verification",
    excerpt: "Complete Florida prescriber verification guide covering enhanced opioid oversight, PDMP compliance, state board licensing, and federal exclusion screening requirements.",
    publishedDate: "2026-03-22",
    readTime: "10 min read",
    state: "FL"
  },
  {
    slug: "prescriber-credentialing-california",
    title: "How to Verify a Physician License in California",
    excerpt: "Complete guide to California prescriber credentialing verification including DEA registration, state medical licenses, OIG screening, and 9-point verification for MDs, DOs, NPs, and PAs.",
    publishedDate: "2026-03-22",
    readTime: "11 min read", 
    state: "CA"
  }
];

function StateFlag({ state }: { state?: string }) {
  if (!state) return null;
  
  const colors = {
    'MA': 'bg-blue-100 text-blue-800',
    'FL': 'bg-orange-100 text-orange-800',
    'TX': 'bg-red-100 text-red-800', 
    'NY': 'bg-green-100 text-green-800',
    'CA': 'bg-yellow-100 text-yellow-800'
  };
  
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${colors[state as keyof typeof colors] || 'bg-gray-100 text-gray-800'}`}>
      {state}
    </span>
  );
}

export default function BlogIndex() {
  return (
    <main className="min-h-screen">
      {/* Nav */}
      <nav className="bg-charcoal sticky top-0 z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/">
            <Image src="/logo-white.png" alt="API-Cert" width={160} height={40} className="h-8 w-auto" />
          </Link>
          <div className="hidden md:flex items-center gap-6">
            <Link href="/blog" className="text-sm text-slate-300 hover:text-white transition-colors">Blog</Link>
            <Link href="/roi" className="text-sm text-slate-300 hover:text-white transition-colors">ROI Calculator</Link>
            <Link href="/#pricing" className="text-sm text-slate-300 hover:text-white transition-colors">Pricing</Link>
            <Link href="/docs" className="text-sm text-slate-300 hover:text-white transition-colors">Docs</Link>
            <Link href="https://api.api-cert.com/portal/signup" className="text-sm bg-emerald-brand text-white px-4 py-2 rounded-lg hover:bg-teal-brand transition-colors">Sign Up</Link>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="bg-gradient-to-b from-charcoal via-charcoal-light to-surface py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Prescriber Credentialing <span className="text-emerald-brand">Insights</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Expert guidance on prescriber verification, DEA registration, federal exclusion screening, and credentialing automation for physicians, nurse practitioners, and physician assistants.
          </p>
        </div>
      </section>

      {/* Articles grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="group bg-white border border-border rounded-2xl overflow-hidden hover:shadow-lg hover:border-emerald-brand/30 transition-all duration-300 card-hover"
              >
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <StateFlag state={article.state} />
                    <time className="text-sm text-gray-500">
                      {new Date(article.publishedDate).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long', 
                        day: 'numeric'
                      })}
                    </time>
                  </div>
                  
                  <h2 className="text-xl font-bold text-charcoal mb-3 group-hover:text-emerald-brand transition-colors">
                    {article.title}
                  </h2>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{article.readTime}</span>
                    <span className="text-emerald-brand font-medium text-sm group-hover:underline">
                      Read more →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="bg-emerald-light py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-charcoal mb-4">
            Skip Manual Prescriber Verification
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            API-Cert automates complete 9-point prescriber verification in under a second.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/docs#register"
              className="inline-flex items-center justify-center px-8 py-4 bg-emerald-brand text-white font-semibold rounded-lg hover:bg-emerald-600 transition-colors"
            >
              Get Free API Key
            </Link>
            <Link
              href="/roi"
              className="inline-flex items-center justify-center px-8 py-4 border border-emerald-brand text-emerald-brand font-semibold rounded-lg hover:bg-white transition-colors"
            >
              Calculate ROI
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}