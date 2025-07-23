import { useEffect } from 'react'
import { useRecipeContext } from '../context/RecipeContext'
import { useRecipeSearch } from '../hooks/useRecipeSearch'
import SearchForm from '../components/recipes/SearchForm'
import RecipeList from '../components/recipes/RecipeList'
import '../css/pages/SearchPage.css'

function SearchPage() {
  const { searchQuery, recipes, loading, error } = useRecipeContext()
  
  useRecipeSearch(searchQuery)
  
  return (
    <div className="search-page">
      <h1>Search Recipes</h1>
      <SearchForm />
      
      {loading && <div className="loading">Searching recipes...</div>}
      {error && <div className="error">Error: {error}</div>}
      
      {!loading && !error && searchQuery && (
        <div className="search-results">
          <h2>Results for "{searchQuery}"</h2>
          <RecipeList 
            recipes={recipes} 
            emptyMessage={`No recipes found for "${searchQuery}". Try a different search term.`} 
          />
        </div>
      )}
      
      {!loading && !error && !searchQuery && (
        <div className="search-instructions">
          <p>Enter a keyword, ingredient, or cuisine to find recipes</p>
        </div>
      )}
    </div>
  );
}

export default SearchPage