import { useState, useEffect } from 'react';
import { useDebounce } from '../hooks/useDebounce.jsx';
import '../css/WeatherApp.css';

const WeatherApp = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    if (debouncedSearchTerm) {
      setWeatherData({
        city: debouncedSearchTerm,
        temperature: Math.floor(Math.random() * 30) + 10,
        condition: 'Sunny'
      });
    }
  }, [debouncedSearchTerm]);

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
      {weatherData && (
        <div className="weather-card">
          <h2>{weatherData.city}</h2>
          <div>{weatherData.temperature}°C - {weatherData.condition}</div>
        </div>
      )}
    </div>
  );
};

export default WeatherApp;