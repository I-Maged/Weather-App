import { displayWeather } from './UICONTROL';

async function getWeatherByPosition(lat, lon) {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.OWM_API}&units=metric`
  );
  if (res.status === 200) {
    let data = await res.json();
    displayWeather(data);
  }
}

async function getWeatherByCityName(cityName) {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.OWM_API}&units=metric`
  );
  if (res.status === 200) {
    let data = await res.json();
    displayWeather(data);
  }
}

export { getWeatherByPosition, getWeatherByCityName };
