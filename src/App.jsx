// src/App.jsx
import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import ToggleMode from './components/ToggleMode';
import './App.css';

const App = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [darkMode, setDarkMode] = useState(false);

    const fetchWeather = async (location) => {
        const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`);
            const data = await response.json();
            if (response.ok) {
                setWeatherData(data);
            } else {
                alert(data.message);
            }
        } catch (error) {
            alert('Error fetching weather data');
        }
    };

    const handleToggle = () => {
        setDarkMode(!darkMode);
    };

    return (
        // <div className='box-card'>
        //   <div className={darkMode ? 'app dark-mode' : 'app'}>
        //     <ToggleMode onToggle={handleToggle} />
        //     <SearchBar onSearch={fetchWeather} />
        //     <WeatherCard weatherData={weatherData} />
        // </div>
        // </div>

        <div className={darkMode ? 'app-container dark-mode' : 'app-container'}>
        <div className='box-card'>
            <ToggleMode onToggle={handleToggle} />
            <SearchBar onSearch={fetchWeather} />
            <WeatherCard weatherData={weatherData} />
        </div>
    </div>
    );
};

export default App;
