import { Link } from 'react-router-dom';
import { ArrowUpRight, MapPin } from 'lucide-react';
import type { Account, Project } from '@/content/types';
import { Tag, TagList } from './Tag';
import { cn } from '@/lib/utils';

export function ProjectCard({ project, className }: { project: Project; className?: string }) {
  return (
    <Link to={`/work/${project.slug}`} className={cn('card card-hover group flex h-full flex-col p-6', className)}>
      <div className="flex items-start justify-between gap-4">
        <Tag tone="accent">{project.domain}</Tag>
        <ArrowUpRight className="h-5 w-5 shrink-0 text-text-subtle transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
      </div>
      <h3 className="mt-4 text-xl font-semibold leading-snug sm:text-2xl">{project.title}</h3>
      <p className="mt-1 text-sm text-text-subtle">
        {project.client} · {project.period}
      </p>
      <p className="prose-muted mt-3 flex-1 text-sm">{project.summary}</p>
      <TagList items={project.tech} max={4} className="mt-5" />
    </Link>
  );
}

export function AccountCard({ account, className }: { account: Account; className?: string }) {
  return (
    <Link to={`/clients/${account.slug}`} className={cn('card card-hover group flex h-full flex-col p-6', className)}>
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold leading-tight sm:text-2xl">{account.name}</h3>
          <p className="mt-1 text-sm text-text-subtle">{account.industry}</p>
        </div>
        <ArrowUpRight className="h-5 w-5 shrink-0 text-text-subtle transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
      </div>
      <Tag tone="accent" className="mt-4 self-start">
        {account.engagementType}
      </Tag>
      <p className="prose-muted mt-4 flex-1 text-sm">{account.summary}</p>
      <p className="mt-5 flex items-center gap-1.5 text-xs text-text-subtle">
        <MapPin className="h-3.5 w-3.5" /> {account.location}
      </p>
    </Link>
  );
}
