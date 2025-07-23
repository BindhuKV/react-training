import RecipeCard from './RecipeCard'
import '../../css/components/RecipeList.css'

function RecipeList({ recipes, emptyMessage = "No recipes found" }) {
  if (!recipes || recipes.length === 0) {
    return <div className="empty-state">{emptyMessage}</div>
  }

  return (
    <div className="recipe-grid">
      {recipes.map(recipe => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
}

export default RecipeList