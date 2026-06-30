import type { ForecastItem } from "../../types/forecast";

type ForecastProps = {
  forecast: ForecastItem[];
};

const Forecast = ({ forecast }: ForecastProps) => {
  const dailyForecast = forecast.filter((item) =>
    item.dt_txt.includes("12:00:00")
  );

  const getDay = (date: string) => {
    return new Date(date).toLocaleDateString("ru-RU", {
      weekday: "long",
    });
  };

  return (
    <div className="forecast">
      <h2>Прогноз на 5 дней</h2>

      <div className="forecast-list">
        {dailyForecast.map((item) => (
          <div className="forecast-item" key={item.dt}>
            <h4>{getDay(item.dt_txt)}</h4>

            <img
              src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
              alt={item.weather[0].description}
            />

            <h3>{Math.round(item.main.temp)}°C</h3>

            <p>{item.weather[0].description}</p>

            <small>
              <span>💧 {item.main.humidity}%</span>
              <span>🌬 {item.wind.speed} м/с</span>
            </small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;