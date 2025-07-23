import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useRecipeContext } from '../context/RecipeContext'
import { getRandomRecipes } from '../api/recipeApi'
import RecipeList from '../components/recipes/RecipeList'
import '../css/pages/HomePage.css'

function HomePage() {
  const { recipes, dispatch, loading, error } = useRecipeContext()

  useEffect(() => {
    const fetchRandomRecipes = async () => {
      dispatch({ type: 'FETCH_START' })
      try {
        const data = await getRandomRecipes(6)
        dispatch({ type: 'FETCH_SUCCESS', payload: data.recipes || [] })
      } catch (err) {
        dispatch({ type: 'FETCH_ERROR', payload: err.message })
      }
    }

    fetchRandomRecipes()
  }, [dispatch])

  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-content">
          <h1>Find Your Perfect Recipe</h1>
          <p>Discover thousands of recipes for any meal, cuisine, or dietary preference</p>
          <Link to="/search" className="cta-button">Start Searching</Link>
        </div>
      </section>

      <section className="featured-section">
        <h2>Featured Recipes</h2>
        {loading && <div className="loading">Loading recipes...</div>}
        {error && <div className="error">Error: {error}</div>}
        {!loading && !error && <RecipeList recipes={recipes} />}
      </section>
    </div>
  );
}

export default HomePage