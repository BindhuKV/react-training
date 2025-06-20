import { useState } from 'react';
import weatherIcon from '../assets/weather-icon.svg';

const WeatherApp = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);

  const fetchWeather = async () => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY&units=metric`);
    const data = await response.json();
    setWeather(data);
  };

  return (
    <div>
      <h1>Weather</h1>
      <input value={city} onChange={(e) => setCity(e.target.value)} placeholder="City" />
      <button onClick={fetchWeather}>Search</button>
      {weather && (
        <div>
          <h2>{weather.name}</h2>
          <p>{weather.main.temp}°C</p>
          <p>{weather.weather[0].description}</p>
          <img src={weatherIcon} alt="weather" />
        </div>
      )}
    </div>
  );
};

export default WeatherApp;