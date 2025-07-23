import axios from 'axios'

const API_KEY = 'f39792f0b7dd4f3188308844dd157833'
const BASE_URL = 'https://api.spoonacular.com'

const api = axios.create({
  baseURL: BASE_URL,
  params: {
    apiKey: API_KEY
  }
})

export async function searchRecipes(query, number = 10) {
  try {
    const response = await api.get('/recipes/complexSearch', {
      params: {
        query,
        number,
        addRecipeInformation: true
      }
    });
    return response.data
  } catch (error) {
    console.error('Error searching recipes:', error)
    throw error
  }
}

export async function getRecipeById(id) {
  try {
    const response = await api.get(`/recipes/${id}/information`)
    return response.data
  } catch (error) {
    console.error(`Error fetching recipe with ID ${id}:`, error)
    throw error
  }
}

export async function getRandomRecipes(number = 6) {
  try {
    const response = await api.get('/recipes/random', {
      params: { number }
    });
    return response.data
  } catch (error) {
    console.error('Error fetching random recipes:', error)
    throw error
  }
}