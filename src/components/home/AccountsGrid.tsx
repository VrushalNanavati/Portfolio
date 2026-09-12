import { ArrowRight } from 'lucide-react';
import { featuredAccounts } from '@/content/accounts';
import { Section, SectionHeading } from '@/components/ui/Section';
import { RevealGroup, RevealItem } from '@/components/ui/Reveal';
import { AccountCard } from '@/components/ui/Cards';
import { Button } from '@/components/ui/Button';

export function AccountsGrid() {
  return (
    <Section id="clients">
      <SectionHeading
        eyebrow="Accounts engaged & grown"
        title="Trusted by platform vendors and top general contractors."
        text="Relationships I have personally managed, from R&D at Autodesk to multi-year BIM programs with ENR Top-10 contractors."
        aside={
          <Button to="/clients" variant="secondary" icon={<ArrowRight className="h-4 w-4" />}>
            All clients
          </Button>
        }
      />
      <RevealGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {featuredAccounts.map((a) => (
          <RevealItem key={a.slug}>
            <AccountCard account={a} />
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
