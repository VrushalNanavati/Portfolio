import { useState } from 'react';
import { Clock, Copy, Mail, MapPin, Phone, Send } from 'lucide-react';
import { site } from '@/config/site';
import { contact } from '@/content/profile';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import { PageHero } from '@/components/layout/PageHero';
import { Section } from '@/components/ui/Section';
import { Reveal, RevealGroup, RevealItem } from '@/components/ui/Reveal';
import { Button } from '@/components/ui/Button';
import { SocialIcon } from '@/components/ui/SocialIcon';

/**
 * Static-host friendly contact page: builds a pre-filled mailto: link from the form.
 * No backend required. Swap the handler for Formspree/Netlify if you want submissions stored.
 */
export default function Contact() {
  useDocumentTitle('Contact', 'Start a conversation about AEC, BIM, digital twin or AI consulting.');
  const [form, setForm] = useState({ name: '', company: '', topic: 'AI & agentic workflows for AEC', message: '' });
  const [copied, setCopied] = useState(false);

  const mailto = () => {
    const subject = encodeURIComponent(`[Consulting enquiry] ${form.topic}${form.company ? ` — ${form.company}` : ''}`);
    const body = encodeURIComponent(`Hi Vrushal,\n\n${form.message}\n\n— ${form.name}${form.company ? `, ${form.company}` : ''}`);
    return `mailto:${site.email}?subject=${subject}&body=${body}`;
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      /* clipboard unavailable */
    }
  };

  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  return (
    <>
      <PageHero eyebrow={contact.eyebrow} title={contact.title} text={contact.text} />
      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <Reveal className="card p-6 sm:p-8">
            <p className="eyebrow mb-6">Tell me about the work</p>
            <form
              className="grid gap-5"
              onSubmit={(e) => {
                e.preventDefault();
                window.location.href = mailto();
              }}
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="grid gap-1.5 text-sm">
                  <span className="text-text-muted">Your name</span>
                  <input required value={form.name} onChange={update('name')} className="h-11 rounded border border-border bg-bg/60 px-3 text-text outline-none transition focus:border-accent" placeholder="Jane Doe" />
                </label>
                <label className="grid gap-1.5 text-sm">
                  <span className="text-text-muted">Company</span>
                  <input value={form.company} onChange={update('company')} className="h-11 rounded border border-border bg-bg/60 px-3 text-text outline-none transition focus:border-accent" placeholder="Acme ConTech" />
                </label>
              </div>
              <label className="grid gap-1.5 text-sm">
                <span className="text-text-muted">What is this about?</span>
                <select value={form.topic} onChange={update('topic')} className="h-11 rounded border border-border bg-bg/60 px-3 text-text outline-none transition focus:border-accent">
                  {[
                    'AI & agentic workflows for AEC',
                    '3D / BIM product architecture',
                    'Discovery & feasibility sprint',
                    'Fractional technical or delivery leadership',
                    'CAD/BIM plugins & integrations',
                    'Advisory retainer or pre-sales partnership',
                    'Speaking or workshop',
                    'Something else',
                  ].map((t) => (
                    <option key={t}>{t}</option>
                  ))}
                </select>
              </label>
              <label className="grid gap-1.5 text-sm">
                <span className="text-text-muted">Message</span>
                <textarea
                  required
                  rows={6}
                  value={form.message}
                  onChange={update('message')}
                  className="rounded border border-border bg-bg/60 px-3 py-2.5 text-text outline-none transition focus:border-accent"
                  placeholder="What are you building, where is it stuck, and what does success look like?"
                />
              </label>
              <div className="flex flex-wrap items-center gap-3">
                <Button type="submit" icon={<Send className="h-4 w-4" />}>
                  Open in your email app
                </Button>
                <p className="text-xs text-text-subtle">This opens a pre-filled email. Nothing is stored on this site.</p>
              </div>
            </form>
          </Reveal>

          <RevealGroup className="space-y-4">
            <RevealItem className="card p-6">
              <p className="eyebrow mb-4">Direct</p>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center justify-between gap-3">
                  <a href={`mailto:${site.email}`} className="inline-flex items-center gap-2 hover:text-accent">
                    <Mail className="h-4 w-4 text-accent" /> {site.email}
                  </a>
                  <button type="button" onClick={copyEmail} className="inline-flex items-center gap-1 text-xs text-text-subtle hover:text-accent" aria-label="Copy email address">
                    <Copy className="h-3.5 w-3.5" /> {copied ? 'Copied' : 'Copy'}
                  </button>
                </li>
                <li>
                  <a href={`tel:${site.phone.replace(/\s+/g, '')}`} className="inline-flex items-center gap-2 hover:text-accent">
                    <Phone className="h-4 w-4 text-accent" /> {site.phone}
                  </a>
                </li>
                <li className="flex items-start gap-2 text-text-muted">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" /> {site.location}
                </li>
                <li className="flex items-start gap-2 text-text-muted">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-accent" /> {site.timezone}. Overlaps US East mornings and all European hours.
                </li>
              </ul>
              <div className="mt-5 flex gap-2">
                {site.socials.map((s) => (
                  <a key={s.id} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label} className="grid h-10 w-10 place-items-center rounded-full border border-border text-text-muted transition hover:border-accent hover:text-accent">
                    <SocialIcon id={s.id} className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </RevealItem>
            <RevealItem className="card p-6">
              <p className="eyebrow mb-4">Ways to engage</p>
              <ul className="space-y-4">
                {contact.engagementModels.map((m) => (
                  <li key={m.title}>
                    <p className="text-sm font-semibold">{m.title}</p>
                    <p className="prose-muted text-sm">{m.text}</p>
                  </li>
                ))}
              </ul>
            </RevealItem>
          </RevealGroup>
        </div>
      </Section>
    </>
  );
}
