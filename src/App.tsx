import { useState } from "react";

import type { WeatherData } from "./types/weather";
import type { ForecastItem } from "./types/forecast";

import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
import WeatherCard from "./components/WeatherCard/WeatherCard";
import Forecast from "./components/Forecast/Forecast";

import {
  getCurrentWeather,
  getForecast,
} from "./services/weatherApi";

import "./styles/header.css";
import "./styles/weatherCard.css";
import "./styles/forecast.css";

function App() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [forecast, setForecast] = useState<ForecastItem[]>([]);

  const handleSearch = async (city: string) => {
    try {
      const currentWeather = await getCurrentWeather(city);
      setWeather(currentWeather);

      const forecastData = await getForecast(city);
      setForecast(forecastData.list);
    } catch (error) {
      console.error(error);
      alert("Не удалось получить данные о погоде.");
    }
  };

  return (
    <>
      <Header />
      <SearchBar onSearch={handleSearch} />

      {weather && <WeatherCard weather={weather} />}

      {forecast.length > 0 && (
        <Forecast forecast={forecast} />
      )}
    </>
  );
}

export default App;