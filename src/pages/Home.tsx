import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import { Hero } from '@/components/home/Hero';
import { StatsBand } from '@/components/home/StatsBand';
import { LensSwitcher } from '@/components/home/LensSwitcher';
import { Positioning } from '@/components/home/Positioning';
import { ServicesPreview } from '@/components/home/ServicesPreview';
import { FeaturedWork } from '@/components/home/FeaturedWork';
import { AccountsGrid } from '@/components/home/AccountsGrid';
import { AiSpotlight } from '@/components/home/AiSpotlight';
import { JourneyPreview } from '@/components/home/JourneyPreview';
import { SpeakingStrip } from '@/components/home/SpeakingStrip';
import { ContactCta } from '@/components/home/ContactCta';

/**
 * HOME PAGE
 * Section order is intentional: hook, proof, reframe, offer, evidence, AI edge, story, credibility, ask.
 * Reorder by moving components; each is self-contained.
 */
export default function Home() {
  useDocumentTitle();
  return (
    <>
      <Hero />
      <StatsBand />
      <LensSwitcher />
      <Positioning />
      <ServicesPreview />
      <FeaturedWork />
      <AccountsGrid />
      <AiSpotlight />
      <JourneyPreview />
      <SpeakingStrip />
      <ContactCta />
    </>
  );
}
