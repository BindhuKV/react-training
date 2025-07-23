import { useRecipeContext } from '../context/RecipeContext'
import RecipeList from '../components/recipes/RecipeList'
import '../css/pages/FavoritesPage.css'

function FavoritesPage() {
  const { favorites } = useRecipeContext()

  return (
    <div className="favorites-page">
      <h1>Your Favorite Recipes</h1>
      
      <RecipeList 
        recipes={favorites} 
        emptyMessage="You haven't saved any favorites yet. Browse recipes and click the star icon to add them here!" 
      />
    </div>
  );
}

export default FavoritesPage