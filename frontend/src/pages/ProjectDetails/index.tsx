import { useParams, Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, Wrench, User, Calendar, MessageCircle } from 'lucide-react'
import { useProjects } from '../../hooks/useProjects'
import ProjectGallery from '../../components/portfolio/ProjectGallery'
import Badge from '../../components/ui/Badge'
import { formatDate } from '../../utils/formatDate'

export default function ProjectDetailsPage() {
  const { slug } = useParams<{ slug: string }>()
  const navigate = useNavigate()
  const { getProjectBySlug, allProjects } = useProjects()

  const project = getProjectBySlug(slug ?? '')

  if (!project) {
    return (
      <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 flex flex-col items-center justify-center gap-6 text-center px-4">
        <h1 className="font-display text-4xl font-bold text-neutral-900 dark:text-neutral-100">
          Project Not Found
        </h1>
        <p className="text-neutral-500 dark:text-neutral-400">
          This project doesn't exist or has been removed.
        </p>
        <Link
          to="/portfolio"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 text-sm font-medium hover:bg-neutral-700 dark:hover:bg-white transition-colors duration-200"
        >
          <ArrowLeft size={16} />
          Back to Portfolio
        </Link>
      </div>
    )
  }

  // Next / previous projects
  const currentIndex = allProjects.findIndex((p) => p.slug === slug)
  const prevProject = allProjects[currentIndex - 1]
  const nextProject = allProjects[currentIndex + 1]

  return (
    <div className="bg-neutral-50 dark:bg-neutral-950 min-h-screen">

      {/* Back nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-1.5 text-sm text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors duration-200"
        >
          <ArrowLeft size={15} />
          Back
        </button>
      </div>

      {/* Hero image */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8"
      >
        <div className="rounded-2xl overflow-hidden bg-neutral-200 dark:bg-neutral-800 aspect-16/7 shadow-lg">
          <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-full object-cover"
            loading="eager"
          />
        </div>
      </motion.div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Main content */}
          <div className="lg:col-span-2 space-y-12">

            {/* Title & meta */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-4"
            >
              <Badge label={project.category} variant="brand" />
              <h1 className="font-display text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-neutral-50 leading-tight">
                {project.title}
              </h1>
              <p className="text-neutral-500 dark:text-neutral-400 text-lg leading-relaxed">
                {project.description}
              </p>
            </motion.div>

            {/* Challenge & Solution */}
            {(project.challenge || project.solution) && (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-6"
              >
                {project.challenge && (
                  <div className="bg-white dark:bg-neutral-900 rounded-2xl p-6 border border-neutral-100 dark:border-neutral-800">
                    <h2 className="font-semibold text-sm text-neutral-900 dark:text-neutral-100 mb-3 flex items-center gap-2">
                      <span className="w-6 h-6 rounded-md bg-red-100 dark:bg-red-900/20 flex items-center justify-center text-red-500 text-xs">!</span>
                      The Challenge
                    </h2>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
                      {project.challenge}
                    </p>
                  </div>
                )}
                {project.solution && (
                  <div className="bg-white dark:bg-neutral-900 rounded-2xl p-6 border border-neutral-100 dark:border-neutral-800">
                    <h2 className="font-semibold text-sm text-neutral-900 dark:text-neutral-100 mb-3 flex items-center gap-2">
                      <span className="w-6 h-6 rounded-md bg-green-100 dark:bg-green-900/20 flex items-center justify-center text-green-500 text-xs">✓</span>
                      The Solution
                    </h2>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
                      {project.solution}
                    </p>
                  </div>
                )}
              </motion.div>
            )}

            {/* Gallery */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              <h2 className="font-display text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-6">
                Project Gallery
              </h2>
              <ProjectGallery images={project.images} title={project.title} />
            </motion.div>

          </div>

          {/* Sidebar */}
          <motion.aside
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >

            {/* Project info card */}
            <div className="bg-white dark:bg-neutral-900 rounded-2xl p-6 border border-neutral-100 dark:border-neutral-800 space-y-5">
              <h3 className="font-semibold text-sm text-neutral-900 dark:text-neutral-100">Project Details</h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <User size={15} className="text-neutral-400 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs text-neutral-400 mb-0.5">Client Type</p>
                    <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100">{project.clientType}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Badge label={project.category} variant="brand" className="mt-0.5" />
                </div>

                <div className="flex items-start gap-3">
                  <Calendar size={15} className="text-neutral-400 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs text-neutral-400 mb-0.5">Completed</p>
                    <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100">{formatDate(project.createdAt)}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Wrench size={15} className="text-neutral-400 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs text-neutral-400 mb-2">Tools Used</p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tools.map((tool) => (
                        <Badge key={tool} label={tool} variant="outline" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA card */}
            <div className="bg-neutral-900 dark:bg-neutral-800 rounded-2xl p-6 space-y-4">
              <h3 className="font-display font-semibold text-white text-lg">
                Like What You See?
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                Let's create something like this — or even better — for your brand.
              </p>
              <div className="space-y-2">
                <Link
                  to="/contact"
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-white hover:bg-neutral-100 text-neutral-900 text-sm font-medium transition-colors duration-200"
                >
                  Start a Project
                  <ArrowRight size={15} />
                </Link>
                <a
                  href="https://wa.me/254792514301?text=Hi%20there!%20I%27m%20interested%20in%20your%20design%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-green-500 hover:bg-green-600 text-white text-sm font-medium transition-colors duration-200"
                >
                  <MessageCircle size={15} />
                  Chat on WhatsApp
                </a>
              </div>
            </div>

          </motion.aside>
        </div>

        {/* Prev / Next navigation */}
        {(prevProject || nextProject) && (
          <div className="mt-16 pt-8 border-t border-neutral-200 dark:border-neutral-800 flex flex-col sm:flex-row gap-4 justify-between">
            {prevProject ? (
              <Link
                to={`/portfolio/${prevProject.slug}`}
                className="group flex items-center gap-3 p-4 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 hover:shadow-md transition-all duration-200 flex-1 max-w-xs"
              >
                <ArrowLeft size={18} className="text-neutral-400 group-hover:text-neutral-700 dark:group-hover:text-neutral-200 transition-colors shrink-0" />
                <div className="overflow-hidden">
                  <p className="text-xs text-neutral-400 mb-0.5">Previous</p>
                  <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100 line-clamp-1">{prevProject.title}</p>
                </div>
              </Link>
            ) : <div />}

            {nextProject && (
              <Link
                to={`/portfolio/${nextProject.slug}`}
                className="group flex items-center gap-3 p-4 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 hover:shadow-md transition-all duration-200 flex-1 max-w-xs text-right justify-end ml-auto"
              >
                <div className="overflow-hidden">
                  <p className="text-xs text-neutral-400 mb-0.5">Next</p>
                  <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100 line-clamp-1">{nextProject.title}</p>
                </div>
                <ArrowRight size={18} className="text-neutral-400 group-hover:text-neutral-700 dark:group-hover:text-neutral-200 transition-colors shrink-0" />
              </Link>
            )}
          </div>
        )}
      </div>

    </div>
  )
}
