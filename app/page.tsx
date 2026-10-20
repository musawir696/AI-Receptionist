import { FeaturesSection } from "@/components/landing/features-section";
import { HeroSection } from "@/components/landing/hero-section";
import { HowItWorksSection } from "@/components/landing/how-it-works-section";
import { IntegrationsSection } from "@/components/landing/integrations-section";
import { SiteFooter } from "@/components/landing/site-footer";
import { SiteHeader } from "@/components/landing/site-header";
import { TrialCtaSection } from "@/components/landing/trial-cta-section";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <SiteHeader />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <IntegrationsSection />
      <TrialCtaSection />
      <SiteFooter />
    </main>
  );
}
