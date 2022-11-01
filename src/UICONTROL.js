import { getWeatherByPosition, getWeatherByCityName } from './APICONTROL';

const setDom = {
  nameField: document.querySelector('.city-name-input'),
  nameBtn: document.querySelector('.city-name-button'),
  geoBtn: document.querySelector('.geo-btn'),
  displayLocation: document.querySelector('.display-location'),
  displayWeather: document.querySelector('.display-weather'),
};

function getCoordinates() {
  function success(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    getWeatherByPosition(lat, lon);
  }

  function error() {
    console.log('blocked');
  }

  navigator.geolocation.getCurrentPosition(success, error, {
    maximumAge: 10000,
    timeout: 5000,
    enableHighAccuracy: true,
  });
}

function getCityName() {
  if (!/[a-zA-Z]/.test(setDom.nameField.value)) {
    setDom.nameField.value = '';
    console.log('empty field');
  } else {
    getWeatherByCityName(setDom.nameField.value);
  }
}

function displayWeather(data) {
  const { name } = data;
  const { country } = data.sys;
  const { icon, main } = data.weather[0];
  const { temp } = data.main;
  const ferhTemp = (temp * 9) / 5 + 32;

  setDom.displayLocation.innerHTML = `Weather in ${name}, ${country}`;

  const weatherEl = document.createElement('div');
  weatherEl.innerHTML = `<div class="display-container">
  <div class="data-section flex current">${Math.floor(temp)} C</div>
        <div class="data-section">
          <img
            src="http://openweathermap.org/img/wn/${icon}@2x.png"
            class="icon"
          />
          <h4>${main}</h4>
        </div>
        <button class="units-btn flex">Metric</button>
        </div>`;

  setDom.displayWeather.appendChild(weatherEl);

  document.querySelector('.units-btn').addEventListener('click', (e) => {
    if (e.target.innerHTML == 'Metric') {
      e.target.innerHTML = 'Imperial';
      document.querySelector('.current').innerHTML = `${Math.floor(
        ferhTemp
      )} F`;
    } else if (e.target.innerHTML == 'Imperial') {
      e.target.innerHTML = 'Metric';
      document.querySelector('.current').innerHTML = `${Math.floor(temp)} F`;
    }
  });
}

export { setDom, getCoordinates, getCityName, displayWeather };
