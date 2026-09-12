import { useEffect } from 'react';
import { site } from '@/config/site';

/** Sets document.title and the meta description for a page. */
export function useDocumentTitle(title?: string, description?: string) {
  useEffect(() => {
    document.title = title ? `${title} · ${site.name}` : `${site.name} — ${site.role}`;
    if (description) {
      const meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
      if (meta) meta.content = description;
    }
  }, [title, description]);
}
