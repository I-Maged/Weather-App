import { fetchWeatherData } from './APICONTROL';

const setDom = {
  nameField: document.querySelector('.city-name-input'),
  nameBtn: document.querySelector('.city-name-button'),
  geoBtn: document.querySelector('.geo-btn'),
  displayLocation: document.querySelector('.display-location'),
  displayWeather: document.querySelector('.display-weather'),
  cityError: document.querySelector('.city-error'),
  locationError: document.querySelector('.location-error'),
};

function getCoordinates() {
  function success(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    fetchWeatherData([lat, lon], 'coords');
  }

  function error() {
    clearDisplay();
    setDom.locationError.style.display = 'block';
  }

  navigator.geolocation.getCurrentPosition(success, error, {
    maximumAge: 10000,
    timeout: 5000,
    enableHighAccuracy: true,
  });
}

function getCityName() {
  if (!/[a-zA-Z]/.test(setDom.nameField.value)) {
    clearDisplay();
    setDom.cityError.style.display = 'block';
  } else {
    fetchWeatherData(setDom.nameField.value, 'cityName');
  }
}

const clearDisplay = () => {
  setDom.nameField.value = '';
  setDom.displayLocation.innerHTML = '';
  setDom.displayWeather.innerHTML = '';
  setDom.cityError.style.display = 'none';
  setDom.locationError.style.display = 'none';
};

const weekday = (value) => {
  const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  if (value > 7) {
    value = -7;
  }

  return weekdays[value];
};

function displayWeather(current, forecast) {
  clearDisplay();
  if (current.cod != 200 || forecast.cod != 200) {
    setDom.cityError.style.display = 'block';
    return;
  }

  // current weather
  const { name } = current;
  const { country } = current.sys;
  const { icon, main } = current.weather[0];
  const { temp } = current.main;
  const ferhTemp = (temp * 9) / 5 + 32;
  // tomorrow
  const day1 = weekday(new Date().getDay() + 1);
  const day1_icon = forecast.list[8].weather[0].icon;
  const day1_description = forecast.list[8].weather[0].main;
  const day1_temp = forecast.list[8].main.temp;
  const day1_ferhTemp = (day1_temp * 9) / 5 + 32;
  // day after
  const day2 = weekday(new Date().getDay() + 2);
  const day2_icon = forecast.list[16].weather[0].icon;
  const day2_description = forecast.list[16].weather[0].main;
  const day2_temp = forecast.list[16].main.temp;
  const day2_ferhTemp = (day2_temp * 9) / 5 + 32;

  setDom.displayLocation.innerHTML = `Weather in ${name}, ${country}`;

  const weatherEl = document.createElement('div');
  weatherEl.innerHTML = `<div class="display-container">
  <div class="data-section flex current">${Math.round(temp)} C</div>
        <div class="data-section">
          <img
            src="http://openweathermap.org/img/wn/${icon}@2x.png"
            class="icon"
          />
          <h4>${main}</h4>
        </div>
        <button class="units-btn flex">Metric</button>
        </div>
        <div class="display-days">
        <div class="data-section">
          <h4>${day1}</h4>
          <div class="flex">
            <div class="day1-temp">${Math.round(day1_temp)} C</div>
            <div>
              <img
                src="http://openweathermap.org/img/wn/${day1_icon}@2x.png"
                class="icon"
              />
              <h5>${day1_description}</h5>
            </div>
          </div>
        </div>
        <div class="data-section">
          <h4>${day2}</h4>
          <div class="flex">
            <div class="day2-temp">${Math.round(day2_temp)} C</div>
            <div>
              <img
                src="http://openweathermap.org/img/wn/${day2_icon}@2x.png"
                class="icon"
              />
              <h5>${day2_description}</h5>
            </div>
          </div>
        </div>
      </div>`;

  setDom.displayWeather.appendChild(weatherEl);

  document.querySelector('.units-btn').addEventListener('click', (e) => {
    if (e.target.innerHTML == 'Metric') {
      e.target.innerHTML = 'Imperial';
      document.querySelector('.current').innerHTML = `${Math.round(
        ferhTemp
      )} F`;
      document.querySelector('.day1-temp').innerHTML = `${Math.round(
        day1_ferhTemp
      )} F`;
      document.querySelector('.day2-temp').innerHTML = `${Math.round(
        day2_ferhTemp
      )} F`;
    } else if (e.target.innerHTML == 'Imperial') {
      e.target.innerHTML = 'Metric';
      document.querySelector('.current').innerHTML = `${Math.round(temp)} C`;
      document.querySelector('.day1-temp').innerHTML = `${Math.round(
        day2_temp
      )} C`;
      document.querySelector('.day2-temp').innerHTML = `${Math.round(
        day2_temp
      )} C`;
    }
  });
}

export { setDom, getCoordinates, getCityName, displayWeather };
