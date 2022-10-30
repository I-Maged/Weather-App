import './style.css';

const cityNameInput = document.querySelector('.city-name-input');

cityNameInput.addEventListener('keydown', (e) => {
  if (e.code === 'Enter') {
    getWeatherBycityName();
  }
});

document
  .querySelector('.city-name-button')
  .addEventListener('click', getWeatherBycityName);

async function getWeatherBycityName() {
  const cityName = cityNameInput.value;

  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.OWM_API}&units=metric`
  );
  console.log(res.status); //200 = success
  let data = await res.json();
  console.log(data);
}
