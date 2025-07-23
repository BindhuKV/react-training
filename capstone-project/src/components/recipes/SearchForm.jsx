import { useState } from 'react'
import { useRecipeContext } from '../../context/RecipeContext'
import '../../css/components/SearchForm.css'

function SearchForm() {
  const { searchQuery, setSearchQuery } = useRecipeContext()
  const [localQuery, setLocalQuery] = useState(searchQuery)
  const [errors, setErrors] = useState({})

  const validateForm = () => {
    const newErrors = {}
    
    if (!localQuery.trim()) {
      newErrors.query = 'Please enter a search term'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (validateForm()) {
      setSearchQuery(localQuery.trim())
    }
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          type="text"
          className={`search-input ${errors.query ? 'error' : ''}`}
          placeholder="Search for recipes..."
          value={localQuery}
          onChange={(e) => setLocalQuery(e.target.value)}
          aria-label="Search recipes"
        />
        {errors.query && <span className="error-message">{errors.query}</span>}
      </div>
      <button type="submit" className="search-button">Search</button>
    </form>
  );
}

export default SearchForm