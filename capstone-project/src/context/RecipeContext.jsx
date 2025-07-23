import { createContext, useContext, useState, useReducer } from 'react'

const RecipeContext = createContext()

const initialState = {
  recipes: [],
  favorites: [],
  loading: false,
  error: null
};

function recipeReducer(state, action) {
  switch (action.type) {
    case 'FETCH_START':
      return { ...state, loading: true, error: null }
    case 'FETCH_SUCCESS':
      return { ...state, recipes: action.payload, loading: false }
    case 'FETCH_ERROR':
      return { ...state, error: action.payload, loading: false }
    case 'ADD_FAVORITE':
      return { ...state, favorites: [...state.favorites, action.payload] }
    case 'REMOVE_FAVORITE':
      return { 
        ...state, 
        favorites: state.favorites.filter(recipe => recipe.id !== action.payload) 
      };
    default:
      return state
  }
}

export function RecipeProvider({ children }) {
  const [state, dispatch] = useReducer(recipeReducer, initialState)
  const [searchQuery, setSearchQuery] = useState('')

  const value = {
    recipes: state.recipes,
    favorites: state.favorites,
    loading: state.loading,
    error: state.error,
    searchQuery,
    setSearchQuery,
    dispatch
  };

  return (
    <RecipeContext.Provider value={value}>
      {children}
    </RecipeContext.Provider>
  );
}

export function useRecipeContext() {
  const context = useContext(RecipeContext)
  if (!context) {
    throw new Error('useRecipeContext must be used within a RecipeProvider')
  }
  return context
}