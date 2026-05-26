import type { Project, ProjectCategory } from '../types/project'

export function filterProjects(
  projects: Project[],
  category: ProjectCategory | 'All',
  searchQuery: string,
): Project[] {
  return projects.filter((project) => {
    const matchesCategory =
      category === 'All' || project.category === category

    const query = searchQuery.toLowerCase().trim()
    const matchesSearch =
      query === '' ||
      project.title.toLowerCase().includes(query) ||
      project.category.toLowerCase().includes(query) ||
      project.description.toLowerCase().includes(query) ||
      project.tools.some((t) => t.toLowerCase().includes(query)) ||
      project.clientType.toLowerCase().includes(query)

    return matchesCategory && matchesSearch
  })
}
