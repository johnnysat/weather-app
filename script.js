const api = {
  key: '9420c587001998ce8f388bc3675e0525',
  base: 'https://api.openweathermap.org/data/2.5/',
  lang: 'pt-br'
}

const cityName = document.querySelector('#city_name');
const temp = document.querySelector('#city_temp');
const tempUmidade = document.querySelector('#temp_umidade')
const imgTemp = document.querySelector('#img_temp');
const input = document.querySelector('#search_input');
const searchButton = document.querySelector('.btn');

//Geolocalização
/*
window.addEventListener = ('load', () => {
  //if ("geolocation" in navigator)
  if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(setPosition, showError);
  }
  else {
      alert('navegador não suporta geolozalicação');
  }
  function setPosition(position) {
      let lat = position.coords.latitude;
      let long = position.coords.longitude;
      coordResults(lat, long);
  }
  function showError(error) {
      alert(`erro: ${error.message}`);
  }
})

function coordResults(lat, long) {
  fetch(`${api.base}weather?lat=${lat}&lon=${long}&units=metric&APPID=${api.key}&lang=${api.lang}`)
      .then(response => {
          if (!response.ok) {
              throw new Error(`http error: status ${response.status}`)
          }
          return response.json();
      })
      .catch(error => {
          alert(error.message)
      })
      .then(response => {
        showWeatherData(response)
      });
}*/

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

//Buscando dados na API e tratando
const getWeatherData = async (city) => {
  const apiWeatherURL = `${api.base}weather?q=${city}&units=metric&appid=${api.key}&${api.lang}`
  
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