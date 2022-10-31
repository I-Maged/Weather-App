import './style.css';

const cityNameInput = document.querySelector('.city-name-input');

cityNameInput.addEventListener('keydown', (e) => {
  if (e.code === 'Enter') {
    getWeatherByCityName();
  }
});

document
  .querySelector('.city-name-button')
  .addEventListener('click', getWeatherByCityName);

async function getWeatherByCityName() {
  const cityName = cityNameInput.value;

  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.OWM_API}&units=metric`
  );
  console.log(res.status); //200 = success
  let data = await res.json();
  console.log(data);
}

document.querySelector('.geo-btn').addEventListener('click', getCoordinates);

function getCoordinates() {
  navigator.geolocation.getCurrentPosition((position) => {
    console.log(position);
    let lat = position.coords.latitude;
    let long = position.coords.longitude;

    getWeatherByPosition(lat, long);
    // latText.innerText = lat.toFixed(2);
    // longText.innerText = long.toFixed(2);
  });
}

async function getWeatherByPosition(lat, long) {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${process.env.OWM_API}&units=metric`
  );
  console.log(res.status); //200 = success
  let data = await res.json();
  console.log(data);
}
