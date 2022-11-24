const api = {
  key: '9420c587001998ce8f388bc3675e0525',
  base: 'https://api.openweathermap.org/data/2.5/',
}

const cityName = document.querySelector('#city_name');
const temp = document.querySelector('#city_temp');
const tempUmidade = document.querySelector('#temp_umidade')
const imgTemp = document.querySelector('#img_temp');
const input = document.querySelector('#search_input');
const searchButton = document.querySelector('.btn');

//Capturando API
const getWeatherData = async (city) => {
  const apiWeatherURL = `${api.base}weather?q=${city}&units=metric&appid=${api.key}&lang=pt_br`
  
  const res = await fetch(apiWeatherURL);
  const data = await res.json();

  return data;
};

const showWeatherData = async (city) => {
  const data = await getWeatherData(city);
  
  cityName.innerHTML = `${data.name}, ${data.sys.country}`;
  temp.innerHTML = `${parseInt(data.main.temp)} ${'ºC'}`;
  tempUmidade.innerHTML = `${data.main.humidity}%`;
  imgTemp.setAttribute('src', `/icons/${data.weather[0].icon}.png`)
}

//Funcionalidade com a pesquisa
searchButton.addEventListener('click', async(e) => {
  e.preventDefault();
  const city = input.value;
  showWeatherData(city);
})

input.addEventListener('keypress', enter);
function enter(event) {
  key = event.keyCode;
  if (key === 13) {
    const city = input.value;
    showWeatherData(city);
  }
};