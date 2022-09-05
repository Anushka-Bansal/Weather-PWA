import React from "react";
import "./App.css";
import { fetchWeather } from "./api/fetchWeather";
import { useState } from "react";

function App() {
    const [query, setQuery] = useState("");
    const [weather, setWeather] = useState({});

    const search = async (e) => {
        if (e.key === "Enter") {
            const data = await fetchWeather(query);
            setWeather(data);
            setQuery("");
            console.log(data);
        }
    };
    return (
        <div className="main-container ">
            <h1> Simple Weather App</h1>
            <input
                type="text"
                className="search"
                placeholder="Search For a City.."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyPress={search}
            />
            {weather.main && (
                <div className="city">
                    <h2 className="city-name" background="white">
                        <span>{weather.name}</span>
                        <sup>{weather.sys.country}</sup>
                    </h2>
                    <div className="city-temp">
                        {Math.round(weather.main.temp)}
                        <sup>&deg;C</sup>
                    </div>
                    <div className="info">
                        <img
                            className="city-icon"
                            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                            alt={weather.weather[0].description}
                        />
                        <p>{weather.weather[0].description}</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default App;
