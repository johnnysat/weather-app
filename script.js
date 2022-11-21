const api = {
  key: '9420c587001998ce8f388bc3675e0525',
  base: 'https://api.openweathermap.org/data/2.5/',
  units: 'metric',
  lang: 'pt_br',
}

const city = document.querySelector('#city_name');
const temp = document.querySelector('#city_temp');
const imgTemp = document.querySelector('#img_temp');
const input = document.querySelector('#search_input');
const searchButton = document.querySelector('.btn');


searchButton.addEventListener('click', function() {
  city.innerHTML = input.value;
})

input.addEventListener('keypress', enter);
function enter(event) {
  key = event.keyCode;
  if (key === 13) {
    console.log(input.value)
  }
};

function searchResults(city){
  fetch(`${api.base}weather?q=${city}$lang=${api.lang}&units=${api.units}&APPID=${api.key}` )
    .then(response => {
      if(!response.ok){
        throw new Erro(`http error: status ${response.status}`)
      }
      return response.json();
    })
    .catch(error => {
      alert(error.message)
    })
    .then(response => {
      displayResults(response)
    })
};

