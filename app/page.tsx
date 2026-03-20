import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import LiveDemo from './components/LiveDemo';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import CodeExamples from './components/CodeExamples';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main>
      <Hero />
      <SocialProof />
      <LiveDemo />
      <HowItWorks />
      <Features />
      <CodeExamples />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  );
}
