import './style.css';

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': process.env.CITIES_API,
    'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com',
  },
};

const getWeatherBycityName = async () => {
  const res = await fetch(
    'https://wft-geo-db.p.rapidapi.com/v1/geo/cities?offset=0&limit=5&types=CITY&namePrefix=new&sort=-population',
    options
  );
  console.log(res.status); //200 = success
  let data = await res.json();
  console.log(data);
};

getWeatherBycityName();
