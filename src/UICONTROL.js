import { getWeatherByPosition, getWeatherByCityName } from './APICONTROL';

const setDom = {
  nameField: document.querySelector('.city-name-input'),
  nameBtn: document.querySelector('.city-name-button'),
  geoBtn: document.querySelector('.geo-btn'),
};

function getCoordinates() {
  function success(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    getWeatherByPosition(lat, lon);
  }

  function error() {
    // clearDisplay();
    // displayError.textContent = 'Geolocation is disabled on this device';
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
  console.log(data);
}

export { setDom, getCoordinates, getCityName, displayWeather };
