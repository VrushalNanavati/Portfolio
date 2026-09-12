import { lazy } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';

/** Pages are code-split so the home page loads fast. */
const Home = lazy(() => import('@/pages/Home'));
const Services = lazy(() => import('@/pages/Services'));
const Work = lazy(() => import('@/pages/Work'));
const ProjectDetail = lazy(() => import('@/pages/ProjectDetail'));
const Clients = lazy(() => import('@/pages/Clients'));
const ClientDetail = lazy(() => import('@/pages/ClientDetail'));
const AiPage = lazy(() => import('@/pages/AiPage'));
const Journey = lazy(() => import('@/pages/Journey'));
const About = lazy(() => import('@/pages/About'));
const Contact = lazy(() => import('@/pages/Contact'));
const NotFound = lazy(() => import('@/pages/NotFound'));

/**
 * ROUTES
 * Uses BrowserRouter with Vite's BASE_URL as basename so it works on both
 * user sites (/) and project sites (/repo/). scripts/postbuild.mjs copies
 * index.html to 404.html so deep links resolve on GitHub Pages.
 */
export default function App() {
  const basename = import.meta.env.BASE_URL.replace(/\/$/, '');
  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="work" element={<Work />} />
          <Route path="work/:slug" element={<ProjectDetail />} />
          <Route path="clients" element={<Clients />} />
          <Route path="clients/:slug" element={<ClientDetail />} />
          <Route path="ai" element={<AiPage />} />
          <Route path="journey" element={<Journey />} />
          <Route path="experience" element={<Navigate to="/journey" replace />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="404" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
