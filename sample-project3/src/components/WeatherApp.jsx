import { useState, useEffect } from 'react'
import { useDebounce } from '../hooks/useDebounce.jsx'
import '../css/WeatherApp.css'

const API_KEY = 'd4316f737f439dbcd5922c431ccf0800'
const API_URL = 'https://api.openweathermap.org/data/2.5/weather'

const WeatherApp = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [weatherData, setWeatherData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const debouncedSearchTerm = useDebounce(searchTerm, 500)

  useEffect(() => {
    const fetchWeatherData = async () => {
      if (!debouncedSearchTerm) return
      
      setLoading(true)
      setError(null)
      
      try {
        const response = await fetch(
          `${API_URL}?q=${encodeURIComponent(debouncedSearchTerm)}&units=metric&appid=${API_KEY}`
        )
        
        if (!response.ok) {
          const errorData = await response.json()
          throw new Error(`City not found (${response.status}: ${errorData.message || 'Unknown error'})`)
        }
        
        const data = await response.json()
        
        setWeatherData({
          city: data.name,
          temperature: Math.round(data.main.temp),
          condition: data.weather[0].main
        })
      } catch (err) {
        setError(err.message)
        
        setWeatherData({
          city: debouncedSearchTerm,
          temperature: Math.floor(Math.random() * 30) + 10,
          condition: 'Simulated'
        })
      } finally {
        setLoading(false)
      }
    }
    
    fetchWeatherData()
  }, [debouncedSearchTerm])

  return (
    <div className="weather-app">
      <h1>Weather App</h1>
      <input
        type="text"
        placeholder="Enter city name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
      {loading && <div className="loading">Loading...</div>}
      {error && <div className="error">{error}</div>}
      {weatherData && (
        <div className="weather-card">
          <h2>{weatherData.city}</h2>
          <div>{weatherData.temperature}°C - {weatherData.condition}</div>
        </div>
      )}
    </div>
  )
}

export default WeatherApp