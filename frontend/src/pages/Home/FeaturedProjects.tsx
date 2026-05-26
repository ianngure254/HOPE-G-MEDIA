import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { PROJECTS } from '../../data/projects'
import ProjectCard from '../../components/portfolio/ProjectCard'
import SectionTitle from '../../components/ui/SectionTitle'

const featured = PROJECTS.filter((p) => p.featured).slice(0, 6)

export default function FeaturedProjects() {
  return (
    <section className="py-20 sm:py-28 bg-white dark:bg-neutral-900" aria-label="Featured work">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <SectionTitle
            eyebrow="Selected Work"
            title="Featured Projects"
            subtitle="A curated selection of recent design work across branding, print, and digital."
          />
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-600 dark:text-brand-400 hover:gap-3 transition-all duration-200 whitespace-nowrap"
          >
            View all projects
            <ArrowRight size={15} />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((project, i) => (
            <ProjectCard key={project.id} project={project} priority={i < 3} />
          ))}
        </div>

      </div>
    </section>
  )
}
