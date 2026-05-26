import { motion, AnimatePresence } from 'framer-motion'
import { SlidersHorizontal } from 'lucide-react'
import { useProjects } from '../../hooks/useProjects'
import SearchBar from '../../components/ui/SearchBar'
import CategoryFilter from '../../components/ui/CategoryFilter'
import ProjectCard from '../../components/portfolio/ProjectCard'
import SectionTitle from '../../components/ui/SectionTitle'

export default function PortfolioPage() {
  const {
    projects,
    activeCategory,
    setActiveCategory,
    searchQuery,
    setSearchQuery,
    total,
  } = useProjects()

  function handleClear() {
    setSearchQuery('')
  }

  return (
    <div className="bg-neutral-50 dark:bg-neutral-950 min-h-screen">

      {/* Page header */}
      <section className="py-16 sm:py-20 bg-white dark:bg-neutral-900 border-b border-neutral-100 dark:border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <SectionTitle
              eyebrow="Portfolio"
              title="All Projects"
              subtitle="Browse the full collection — flyers, branding, social media, and more."
            />
          </motion.div>
        </div>
      </section>

      {/* Filter & search bar */}
      <section className="sticky top-16 md:top-20 z-30 bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md border-b border-neutral-200/60 dark:border-neutral-800/60 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">

            {/* Search */}
            <div className="w-full sm:w-64 shrink-0">
              <SearchBar
                value={searchQuery}
                onChange={setSearchQuery}
                onClear={handleClear}
              />
            </div>

            {/* Category pills */}
            <div className="flex-1 overflow-x-auto pb-1 sm:pb-0">
              <CategoryFilter
                active={activeCategory}
                onChange={setActiveCategory}
              />
            </div>

            {/* Results count */}
            <div className="flex items-center gap-1.5 text-xs text-neutral-400 dark:text-neutral-500 shrink-0 whitespace-nowrap">
              <SlidersHorizontal size={13} aria-hidden="true" />
              <span>{total} {total === 1 ? 'project' : 'projects'}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Masonry grid */}
      <section className="py-12 sm:py-16" aria-label="Projects grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <AnimatePresence mode="wait">
            {projects.length > 0 ? (
              <motion.div
                key="grid"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {/* CSS masonry via columns */}
                <div
                  className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-0"
                  style={{ columnGap: '1.5rem' }}
                >
                  {projects.map((project, i) => (
                    <div
                      key={project.id}
                      className="break-inside-avoid mb-6 block"
                    >
                      <ProjectCard project={project} priority={i < 4} />
                    </div>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="empty"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center justify-center py-24 gap-4 text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center mb-2">
                  <SlidersHorizontal size={24} className="text-neutral-400" />
                </div>
                <h3 className="font-semibold text-neutral-900 dark:text-neutral-100">No projects found</h3>
                <p className="text-sm text-neutral-500 dark:text-neutral-400 max-w-xs">
                  Try adjusting your search or selecting a different category.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('')
                    setActiveCategory('All')
                  }}
                  className="mt-2 text-sm text-brand-600 dark:text-brand-400 font-medium hover:underline"
                >
                  Clear filters
                </button>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </section>

    </div>
  )
}
