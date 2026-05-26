import { useState, useCallback } from 'react'

export function useSearch(initialQuery = '') {
  const [query, setQuery] = useState(initialQuery)

  const handleChange = useCallback((value: string) => {
    setQuery(value)
  }, [])

  const clearSearch = useCallback(() => {
    setQuery('')
  }, [])

  return { query, handleChange, clearSearch }
}
