import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "API-Cert Blog — Healthcare Credentialing Insights",
  description: "Expert insights on healthcare license verification, credentialing automation, and compliance best practices.",
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
    slug: "how-to-verify-nursing-license-massachusetts",
    title: "How to Verify a Nursing License in Massachusetts",
    excerpt: "Complete guide to verifying RN and LPN licenses through the Massachusetts Board of Registration in Nursing, including manual steps and automation options.",
    publishedDate: "2026-03-15",
    readTime: "8 min read",
    state: "MA"
  },
  {
    slug: "how-to-verify-nursing-license-florida", 
    title: "How to Verify a Nursing License in Florida",
    excerpt: "Step-by-step instructions for verifying nursing licenses in Florida using the Florida Health Source portal, plus compliance considerations.",
    publishedDate: "2026-03-14",
    readTime: "9 min read",
    state: "FL"
  },
  {
    slug: "how-to-verify-nursing-license-texas",
    title: "How to Verify a Nursing License in Texas", 
    excerpt: "Navigate the Texas Board of Nursing verification system with this comprehensive guide, including common pitfalls and best practices.",
    publishedDate: "2026-03-13",
    readTime: "8 min read",
    state: "TX"
  },
  {
    slug: "how-to-verify-nursing-license-new-york",
    title: "How to Verify a Nursing License in New York",
    excerpt: "Complete walkthrough of New York State nursing license verification through OP.NYSED.gov, with tips for healthcare organizations.",
    publishedDate: "2026-03-12", 
    readTime: "7 min read",
    state: "NY"
  },
  {
    slug: "how-to-verify-nursing-license-california",
    title: "How to Verify a Nursing License in California",
    excerpt: "Master California RN license verification using the official RN.ca.gov portal. Essential for healthcare compliance teams.",
    publishedDate: "2026-03-11",
    readTime: "9 min read", 
    state: "CA"
  }
];

function StateFlag({ state }: { state?: string }) {
  if (!state) return null;
  
  const colors = {
    'MA': 'bg-blue-100 text-blue-800',
    'FL': 'bg-orange-100 text-orange-800',
    'TX': 'bg-red-100 text-red-800', 
    'NY': 'bg-purple-100 text-purple-800',
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
      {/* Header */}
      <section className="bg-gradient-to-b from-charcoal via-charcoal-light to-surface py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Healthcare Credentialing <span className="text-emerald-brand">Insights</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Expert guidance on license verification, credentialing automation, and compliance best practices for healthcare organizations.
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
            Skip Manual License Verification
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            API-Cert automates all these verification steps in under a second.
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
    </main>
  );
}