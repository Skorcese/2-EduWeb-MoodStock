import axios from 'axios';

export const unsplash = axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID YCD--6jNtHFC1y47sgPHq33qCc8fz9PWDeuuqM0AOW0',
  },
});

const openWeatherKey = 'd50a614e489fbba6669358f04ee95daa';

export const openWeather = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5',
});

export const weatherQuery = query => {
  return `weather${query}&appid=${openWeatherKey}`;
};
