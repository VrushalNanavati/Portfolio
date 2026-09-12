import { Github, Linkedin, MessageCircleQuestion, Code2 } from 'lucide-react';
import type { SocialId } from '@/config/site';

const map = {
  linkedin: Linkedin,
  github: Github,
  stackoverflow: Code2,
  quora: MessageCircleQuestion,
} satisfies Record<SocialId, typeof Github>;

export function SocialIcon({ id, className }: { id: SocialId; className?: string }) {
  const Icon = map[id];
  return <Icon className={className} aria-hidden="true" />;
}
