const api = {
  key: '9420c587001998ce8f388bc3675e0525',
  base: 'https://api.openweathermap.org/data/2.5/',
  units: 'metric',
  lang: 'pt_br',
}

const city = document.querySelector('.city_name');
const temp = document.querySelector('.city_temp');
const imgTemp = document.querySelector('#img_temp');
const input = document.querySelector('#search_input');
const searchButton = document.querySelector('.btn');


searchButton.addEventListener('click', function() {
  console.log(input.value)
})


