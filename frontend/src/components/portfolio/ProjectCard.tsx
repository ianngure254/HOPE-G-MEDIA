import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import type { Project } from '../../types/project'
import Badge from '../ui/Badge'
import { cn } from '../../utils/cn'

interface ProjectCardProps {
  project: Project
  priority?: boolean
}

export default function ProjectCard({ project, priority = false }: ProjectCardProps) {
  const [imgLoaded, setImgLoaded] = useState(false)

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className="group relative bg-white dark:bg-neutral-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-neutral-100 dark:border-neutral-800"
    >
      {/* Image */}
      <Link
        to={`/portfolio/${project.slug}`}
        className="block relative overflow-hidden aspect-4/5"
        aria-label={`View ${project.title}`}
        tabIndex={-1}
      >
        {/* Shimmer placeholder */}
        {!imgLoaded && (
          <div className="absolute inset-0 img-placeholder" aria-hidden="true" />
        )}
        <img
          src={project.thumbnail}
          alt={project.title}
          loading={priority ? 'eager' : 'lazy'}
          onLoad={() => setImgLoaded(true)}
          className={cn(
            'w-full h-full object-cover transition-transform duration-500 group-hover:scale-105',
            imgLoaded ? 'opacity-100' : 'opacity-0',
          )}
        />

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300 shadow-lg">
            <ArrowUpRight size={18} className="text-neutral-900" />
          </div>
        </div>
      </Link>

      {/* Content */}
      <div className="p-4 space-y-2">
        <div className="flex items-start justify-between gap-2">
          <Link to={`/portfolio/${project.slug}`} className="flex-1 min-w-0">
            <h3 className="font-semibold text-sm text-neutral-900 dark:text-neutral-100 leading-snug line-clamp-2 hover:text-brand-600 dark:hover:text-brand-400 transition-colors duration-200">
              {project.title}
            </h3>
          </Link>
        </div>
        <p className="text-xs text-neutral-500 dark:text-neutral-400 line-clamp-2 leading-relaxed">
          {project.description}
        </p>
        <div className="pt-1">
          <Badge label={project.category} variant="brand" />
        </div>
      </div>
    </motion.article>
  )
}
