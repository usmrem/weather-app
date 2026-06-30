import type { WeatherData } from "../../types/weather";
import "../../styles/weatherCard.css";

type WeatherCardProps = {
  weather: WeatherData;
};

const WeatherCard = ({ weather }: WeatherCardProps) => {
  return (
    <div className="weather-card">
      <h2>{weather.name}</h2>

      <h1>{Math.round(weather.main.temp)}°C</h1>

      <p>{weather.weather[0].description}</p>

      <p>💧 Влажность: {weather.main.humidity}%</p>

      <p>🌬 Ветер: {weather.wind.speed} м/с</p>
    </div>
  );
};

export default WeatherCard;