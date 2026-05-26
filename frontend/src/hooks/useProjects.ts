import { useState, useMemo } from 'react'
import { PROJECTS } from '../data/projects'
import type { Project, ProjectCategory } from '../types/project'
import { filterProjects } from '../utils/filterProjects'

export function useProjects() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | 'All'>('All')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredProjects = useMemo(
    () => filterProjects(PROJECTS, activeCategory, searchQuery),
    [activeCategory, searchQuery],
  )

  const featuredProjects: Project[] = useMemo(
    () => PROJECTS.filter((p) => p.featured),
    [],
  )

  function getProjectBySlug(slug: string): Project | undefined {
    return PROJECTS.find((p) => p.slug === slug)
  }

  return {
    projects: filteredProjects,
    allProjects: PROJECTS,
    featuredProjects,
    activeCategory,
    setActiveCategory,
    searchQuery,
    setSearchQuery,
    getProjectBySlug,
    total: filteredProjects.length,
  }
}
