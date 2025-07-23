import { Link } from 'react-router-dom'
import { useRecipeContext } from '../../context/RecipeContext'
import '../../css/components/RecipeCard.css'

function RecipeCard({ recipe }) {
  const { favorites, dispatch } = useRecipeContext()
  
  const isFavorite = favorites.some(fav => fav.id === recipe.id)
  
  const toggleFavorite = (e) => {
    e.preventDefault()
    e.stopPropagation()
    
    if (isFavorite) {
      dispatch({ type: 'REMOVE_FAVORITE', payload: recipe.id })
    } else {
      dispatch({ type: 'ADD_FAVORITE', payload: recipe })
    }
  };
  
  return (
    <div className="recipe-card">
      <Link to={`/recipe/${recipe.id}`} className="recipe-link">
        <div className="recipe-image-container">
          <img 
            src={recipe.image} 
            alt={recipe.title} 
            className="recipe-image" 
            onError={(e) => {
              e.target.onerror = null
              e.target.src = 'https://via.placeholder.com/300x200?text=No+Image'
            }}
          />
          <button 
            className={`favorite-btn ${isFavorite ? 'favorited' : ''}`}
            onClick={toggleFavorite}
            aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
          >
            {isFavorite ? '★' : '☆'}
          </button>
        </div>
        <div className="recipe-info">
          <h3 className="recipe-title">{recipe.title}</h3>
          <div className="recipe-meta">
            <span>Ready in {recipe.readyInMinutes} min</span>
            <span>{recipe.servings} servings</span>
          </div>
          {recipe.diets && recipe.diets.length > 0 && (
            <div className="recipe-tags">
              {recipe.diets.slice(0, 3).map((diet, index) => (
                <span key={index} className="recipe-tag">{diet}</span>
              ))}
            </div>
          )}
        </div>
      </Link>
    </div>
  )
}

export default RecipeCard