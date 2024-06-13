// src/components/WeatherCard.jsx
import React from 'react';

const WeatherCard = ({ weatherData }) => {
    if (!weatherData) return null;

    const { name, main, weather, wind } = weatherData;
    const date = new Date().toLocaleString();

    return (
        <div className="weather-card">
            <h2>{name}</h2>
            <p>{date}</p>
            <p>Temperature: {main.temp}°C</p>
            <p>Humidity: {main.humidity}%</p>
            <p>Wind Speed: {wind.speed} m/s</p>
            <p>Weather: {weather[0].description}</p>
        </div>
    );
};

export default WeatherCard;
