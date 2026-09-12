import { ArrowLeft } from 'lucide-react';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  useDocumentTitle('Page not found');
  return (
    <section className="container flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <p className="eyebrow mb-4">404</p>
      <h1 className="text-4xl font-semibold sm:text-6xl">This page did not survive the model federation.</h1>
      <p className="prose-muted mt-4 max-w-md">The link may be old or mistyped. Head back home or browse the work.</p>
      <div className="mt-8 flex gap-3">
        <Button to="/" icon={<ArrowLeft className="h-4 w-4" />}>
          Back home
        </Button>
        <Button to="/work" variant="secondary">
          Browse work
        </Button>
      </div>
    </section>
  );
}
