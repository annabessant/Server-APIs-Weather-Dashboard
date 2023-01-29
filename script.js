var buttonContainer = document.getElementById('buttons-container');
var searchArea = document.getElementById('search-area');
// var buttonContainer = document.getElementById('card');

const fakeCities = ['London', 'Atlanta', 'Exeter']

for (let index = 0; index < fakeCities.length; index++) {
  const cityName = fakeCities[index];
  // create a button for each city
  var cityButton = document.createElement('button')
  cityButton.textContent = cityName
  buttonContainer.append(cityButton)
}

const forecast = ['Day1', 'Day2', 'Day3', 'Day4', 'Day5']

for (let index = 0; index < forecast.length; index++) {
  const forecastData = forecast[index];
  // create a card for each day
  var card = document.createElement('div')
  card.textContent = forecastData
  // buttonContainer.append(card)
}

