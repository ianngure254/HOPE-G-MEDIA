import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'

// Lazy-loaded pages for code splitting
const HomePage = lazy(() => import('../pages/Home'))
const AboutPage = lazy(() => import('../pages/About'))
const PortfolioPage = lazy(() => import('../pages/Portfolio'))
const ProjectDetailsPage = lazy(() => import('../pages/ProjectDetails'))
const ContactPage = lazy(() => import('../pages/Contact'))

function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-50 dark:bg-neutral-950">
      <div className="flex flex-col items-center gap-3">
        <div className="w-8 h-8 rounded-full border-2 border-brand-200 border-t-brand-500 animate-spin" />
        <p className="text-sm text-neutral-400">Loading…</p>
      </div>
    </div>
  )
}

function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 text-center px-4 bg-neutral-50 dark:bg-neutral-950">
      <p className="text-7xl font-display font-bold text-neutral-200 dark:text-neutral-800 select-none">404</p>
      <h1 className="font-display text-3xl font-bold text-neutral-900 dark:text-neutral-100">Page Not Found</h1>
      <p className="text-neutral-500 dark:text-neutral-400 max-w-sm">
        This page doesn't exist. Head back home or browse the portfolio.
      </p>
      <div className="flex gap-3">
        <a
          href="/"
          className="px-5 py-2.5 rounded-xl bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 text-sm font-medium hover:bg-neutral-700 dark:hover:bg-white transition-colors duration-200"
        >
          Go Home
        </a>
        <a
          href="/portfolio"
          className="px-5 py-2.5 rounded-xl border border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 text-sm font-medium hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors duration-200"
        >
          View Portfolio
        </a>
      </div>
    </div>
  )
}

export default function AppRoutes() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/portfolio/:slug" element={<ProjectDetailsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  )
}
