import React, { useEffect, useState } from 'react';
import './App.css';
import WeatherForm from './WeatherForm';
import WeatherMap from './WeatherMap';
function App() {
  const [weatherdata, setWeatherData] = useState(null);
  const [location, setLocation] = useState('Hyderabad');
  const fetchWeather = async (loc) => {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=e6bda63ab707afb912a0e066b5ca25be`)
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error('Error fetching weather data:', error)
    }
  };
  const fetchWeatherByCoords = async (lat, lon) => {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=e6bda63ab707afb912a0e066b5ca25be`)
      const data = await response.json();
      setWeatherData(data);
      setLocation(`${data.name},${data.sys.country}`)
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  }
  useEffect(() => {
   
      fetchWeather(location);
    

  }, [location])
  return (
    <div className="App">
      <h1>Weather Dashboard</h1>
      <WeatherForm onSearch={setLocation} intialLocation={location} />
      {weatherdata && (
        <div>
          <h2>Weather in {weatherdata.name}</h2>
          <p>Temperature:{(weatherdata.main.temp - 273.15).toFixed(2)}°C</p>
          <p>Weather:{weatherdata.weather[0].description}</p>
        </div>
      )}
      <WeatherMap weatherData={weatherdata} onMapClick={fetchWeatherByCoords} />

    </div>
  );
}

export default App;
