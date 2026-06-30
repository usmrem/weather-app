import axios from "axios";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

const BASE_URL = "https://api.openweathermap.org/data/2.5";

export const getCurrentWeather = async (city: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/weather`, {
      params: {
        q: city,
        appid: API_KEY,
        units: "metric",
        lang: "ru",
      },
    });

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("API Error:", error.response?.data);
    } else {
      console.error("Unknown Error:", error);
    }

    throw error;
  }
};

export const getForecast = async (city: string) => {
  const response = await axios.get(`${BASE_URL}/forecast`, {
    params: {
      q: city,
      appid: API_KEY,
      units: "metric",
      lang: "ru",
    },
  });

  return response.data;
};