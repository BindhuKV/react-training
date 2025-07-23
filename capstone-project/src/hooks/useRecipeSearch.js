import { useEffect } from 'react'
import { useRecipeContext } from '../context/RecipeContext'
import { searchRecipes } from '../api/recipeApi'

export function useRecipeSearch(query, options = {}) {
  const { dispatch } = useRecipeContext()
  const { immediate = false } = options

  useEffect(() => {
    if (!query && !immediate) return

    const fetchRecipes = async () => {
      dispatch({ type: 'FETCH_START' })
      try {
        const data = await searchRecipes(query)
        dispatch({ type: 'FETCH_SUCCESS', payload: data.results || [] })
      } catch (error) {
        dispatch({ type: 'FETCH_ERROR', payload: error.message })
      }
    }

    fetchRecipes();
  }, [query, dispatch, immediate])
}