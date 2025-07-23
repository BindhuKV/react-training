import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getRecipeById } from '../api/recipeApi'
import { useRecipeContext } from '../context/RecipeContext'
import '../css/pages/RecipeDetailPage.css'

function RecipeDetailPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [recipe, setRecipe] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const { favorites, dispatch } = useRecipeContext()
  
  const isFavorite = favorites.some(fav => fav.id === parseInt(id))
  
  useEffect(() => {
    const fetchRecipeDetails = async () => {
      setLoading(true);
      try {
        const data = await getRecipeById(id)
        setRecipe(data)
        setError(null)
      } catch (err) {
        setError(err.message)
        setRecipe(null)
      } finally {
        setLoading(false)
      }
    }
    
    fetchRecipeDetails()
  }, [id])
  
  const toggleFavorite = () => {
    if (isFavorite) {
      dispatch({ type: 'REMOVE_FAVORITE', payload: parseInt(id) })
    } else if (recipe) {
      dispatch({ type: 'ADD_FAVORITE', payload: recipe })
    }
  }
  
  if (loading) {
    return <div className="loading">Loading recipe details...</div>
  }
  
  if (error) {
    return (
      <div className="error-container">
        <div className="error">Error: {error}</div>
        <button className="back-button" onClick={() => navigate(-1)}>
          Go Back
        </button>
      </div>
    );
  }
  
  if (!recipe) {
    return (
      <div className="error-container">
        <div className="error">Recipe not found</div>
        <button className="back-button" onClick={() => navigate(-1)}>
          Go Back
        </button>
      </div>
    );
  }
  
  return (
    <div className="recipe-detail">
      <div className="recipe-header">
        <button className="back-button" onClick={() => navigate(-1)}>
          ← Back
        </button>
        <button 
          className={`favorite-button ${isFavorite ? 'favorited' : ''}`}
          onClick={toggleFavorite}
        >
          {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
        </button>
      </div>
      
      <div className="recipe-hero">
        <div className="recipe-image-container">
          <img 
            src={recipe.image} 
            alt={recipe.title} 
            className="recipe-image"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = 'https://via.placeholder.com/600x400?text=No+Image'
            }}
          />
        </div>
        
        <div className="recipe-info">
          <h1 className="recipe-title">{recipe.title}</h1>
          
          <div className="recipe-meta">
            <div className="meta-item">
              <span className="meta-icon">⏱️</span>
              <span>Ready in {recipe.readyInMinutes} minutes</span>
            </div>
            <div className="meta-item">
              <span className="meta-icon">👥</span>
              <span>{recipe.servings} servings</span>
            </div>
            {recipe.healthScore && (
              <div className="meta-item">
                <span className="meta-icon">❤️</span>
                <span>Health score: {recipe.healthScore}</span>
              </div>
            )}
          </div>
          
          {recipe.diets && recipe.diets.length > 0 && (
            <div className="recipe-tags">
              {recipe.diets.map((diet, index) => (
                <span key={index} className="recipe-tag">{diet}</span>
              ))}
            </div>
          )}
          
          {recipe.summary && (
            <div className="recipe-summary" 
              dangerouslySetInnerHTML={{ __html: recipe.summary }} 
            />
          )}
        </div>
      </div>
      
      <div className="recipe-content">
        <div className="ingredients">
          <h2>Ingredients</h2>
          {recipe.extendedIngredients && recipe.extendedIngredients.length > 0 ? (
            <ul className="ingredients-list">
              {recipe.extendedIngredients.map((ingredient, index) => (
                <li key={index} className="ingredient-item">
                  {ingredient.original}
                </li>
              ))}
            </ul>
          ) : (
            <p>No ingredients information available</p>
          )}
        </div>
        
        <div className="instructions">
          <h2>Instructions</h2>
          {recipe.instructions ? (
            <div className="instructions-content" 
              dangerouslySetInnerHTML={{ __html: recipe.instructions }} 
            />
          ) : (
            <p>No instructions available</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default RecipeDetailPage