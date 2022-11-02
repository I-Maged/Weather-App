import { displayWeather } from './UICONTROL';

const fetchWeatherData = async (searcData, searchFrom) => {
  const URL = 'https://api.openweathermap.org/data/2.5';

  let fetchCurrent;
  let fetchForecast;

  if (searchFrom == 'cityName') {
    fetchCurrent = await fetch(
      `${URL}/weather?q=${searcData}&appid=${process.env.OWM_API}&units=metric`
    );
    fetchForecast = await fetch(
      `${URL}/forecast?q=${searcData}&appid=${process.env.OWM_API}&units=metric`
    );
  } else if (searchFrom == 'coords') {
    fetchCurrent = await fetch(
      `${URL}/weather?lat=${searcData[0]}&lon=${searcData[1]}&appid=${process.env.OWM_API}&units=metric`
    );
    fetchForecast = await fetch(
      `${URL}/forecast?lat=${searcData[0]}&lon=${searcData[1]}&appid=${process.env.OWM_API}&units=metric`
    );
  }

  const current = await fetchCurrent.json();
  const forecast = await fetchForecast.json();

  displayWeather(current, forecast);
};

export { fetchWeatherData };
