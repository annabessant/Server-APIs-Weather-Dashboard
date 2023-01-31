//Add API key
// https://pro.openweathermap.org/data/2.5/forecast/hourly?lat={lat}&lon={lon}&appid={API key} 
// https://pro.openweathermap.org/data/2.5/forecast/hourly?q={city name}&appid={API key}
var APIKey = "f4c538c288b4efc0c9ebc7ecde479b1b";





// connecting HTML via JS
var buttonContainer = document.getElementById('buttons-container');
var searchArea = document.getElementById('search-area');
searchArea.addEventListener("submit", handleSearch);
// var buttonContainer = document.getElementById('card');
function handleSearch(e){
  console.log ("handleSearch"); 
  let inputEl=document.getElementById('search-input');
  if (!inputEl.value){
    return; 
  }
  e.preventDefault();
  let city=inputEl.value.trim();
  console.log('city= ', city);
}
//Search button 
const fakeCities = ['London', 'Atlanta', 'Exeter', 'Berlin']

for (let index = 0; index < fakeCities.length; index++) {
  const cityName = fakeCities[index];
  // create a button for each city
  var cityButton = document.createElement('button')
  cityButton.textContent = cityName
  buttonContainer.append(cityButton)
}

// Cards for 5-days

const forecast = ['Day1', 'Day2', 'Day3', 'Day4', 'Day5']

for (let index = 0; index < forecast.length; index++) {
  const forecastData = forecast[index];
  // create a card for each day
  var card = document.createElement('div')
  card.textContent = forecastData
  // buttonContainer.append(card)
}

// Connect search button with Open weather
// Add the search to the history
// Display selected city in weather area
// Add icons from https://openweathermap.org/weather-conditions 
// Icons URL http://openweathermap.org/img/wn/10d@2x.png 
