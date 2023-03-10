//Add API key
var APIKey = "f4c538c288b4efc0c9ebc7ecde479b1b";

//localStorageRelated
let searchHistory = [];

//search history related
let historyEl = document.getElementById('buttons-container');
historyEl.addEventListener("click", handleHistoryClick);


// connecting HTML via JS
var buttonContainer = document.getElementById('buttons-container');
var searchArea = document.getElementById('search-area');
searchArea.addEventListener("submit", handleSearch);

function handleHistoryClick(event){
  if (!event.target.matches(".history-btn")){
    return; 
  }

  let btn=event.target;
  let city=btn.getAttribute("data-search");
  getGeoCoordinates(city);
}

// enable search
function handleSearch(e) {
  console.log("handleSearch");
  let inputEl = document.getElementById('search-input');
  if (!inputEl.value) {
    return;
  }
  e.preventDefault();
  let city = inputEl.value.trim();
  console.log('city= ', city);
  getGeoCoordinates(city);
  inputEl.value = "";
}

// enable geo coordinates of cities

function getGeoCoordinates(city) {
  let url = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=3&appid=${APIKey}`;
  //let url=`api.openweathermap.org/data/2.5/forecast?q={city}&appid={APIKey}`;
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (jsonData) {
      if (!jsonData[0]) {
        alert('City could not be found!!');
      } else {
        console.log("data= ", jsonData);
        addCityToHistory(city);
        getWeather(city, jsonData[0]);
      }
    })
    .catch(function (err) {
      console.error(err);
    });
}

function addCityToHistory(city) {
  // to be completed 
  if (searchHistory.indexOf(city) !== -1) {
    return;
  }
  searchHistory.push(city);
  localStorage.setItem("cities", JSON.stringify(searchHistory));
  displaySearchHistory();
}

function displaySearchHistory() {
  //to be completed
  historyEl.innerHTML = "";
  for (let i = searchHistory.length - 1; i >= 0; i--) {
    let btn = document.createElement("button");
    btn.setAttribute("type", "button");
    btn.classList.add("history-btn");

    btn.setAttribute("data-search", searchHistory[i]);
    btn.textContent = searchHistory[i];
    historyEl.append(btn);
  }
}

// Get today's weather
function getWeather(city, data) {
  var { lat } = data;
  var { lon } = data;
  // api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}
  let url = `https://api.openweathermap.org/data/2.5/forecast?units=imperial&lat=${lat}&lon=${lon}&appid=${APIKey}`;
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (jsonData) {
      console.log("data= ", jsonData);
      displayWeather(city, jsonData);
      displayFiveDayForecast(city, jsonData,)
    })
    .catch(function (err) {
      console.error(err);
    });
}

// display weather on cards for days 1-5

function displayFiveDayForecast(city, data) {
  let tempEl = document.getElementById("temp1");
  let dateEl = document.getElementById("date1");
  let windEl = document.getElementById("wind1");
  let humidityEl = document.getElementById("humidity1");
  let iconEl = document.getElementById('image1');

  let temp = data.list[7].main.temp;
  let date = (data.list[7].dt_txt).split(" ")[0];
  let wind = data.list[7].wind.speed;
  let humidity = data.list[7].main.humidity;
  let url = `https://openweathermap.org/img/w/${data.list[7].weather[0].icon}.png`;
  let desc = data.list[7].weather[0].description || data.list[7].main;

  tempEl.textContent = `Temp: ${temp} ??F`;
  dateEl.textContent = `${date}`;
  windEl.textContent = `Wind: ${wind} MPH`;
  humidityEl.textContent = `Humidity: ${humidity} %`;
  iconEl.setAttribute('src', url);
  iconEl.setAttribute('alt', desc);
  iconEl.setAttribute('class', 'weather-img');

  let temp2El = document.getElementById("temp2");
  let date2El = document.getElementById("date2");
  let wind2El = document.getElementById("wind2");
  let humidity2El = document.getElementById("humidity2");
  let icon2El = document.getElementById('image2');

  let temp2 = data.list[15].main.temp;
  let date2 = (data.list[15].dt_txt).split(" ")[0];
  let wind2 = data.list[15].wind.speed;
  let humidity2 = data.list[15].main.humidity;
  let url2 = `https://openweathermap.org/img/w/${data.list[15].weather[0].icon}.png`;
  let desc2 = data.list[15].weather[0].description || data.list[15].main;

  temp2El.textContent = `Temp: ${temp2} ??F`;
  date2El.textContent = `${date2}`;
  wind2El.textContent = `Wind: ${wind2} MPH`;
  humidity2El.textContent = `Humidity: ${humidity2} %`;
  icon2El.setAttribute('src', url2);
  icon2El.setAttribute('alt', desc2);
  icon2El.setAttribute('class', 'weather-img');

  let temp3El = document.getElementById("temp3");
  let date3El = document.getElementById("date3");
  let wind3El = document.getElementById("wind3");
  let humidity3El = document.getElementById("humidity3");
  let icon3El = document.getElementById('image3');

  let temp3 = data.list[23].main.temp;
  let date3 = (data.list[23].dt_txt).split(" ")[0];
  let wind3 = data.list[23].wind.speed;
  let humidity3 = data.list[23].main.humidity;
  let url3 = `https://openweathermap.org/img/w/${data.list[23].weather[0].icon}.png`;
  let desc3 = data.list[23].weather[0].description || data.list[23].main;

  temp3El.textContent = `Temp: ${temp3} ??F`;
  date3El.textContent = `${date3}`;
  wind3El.textContent = `Wind: ${wind3} MPH`;
  humidity3El.textContent = `Humidity: ${humidity3} %`;
  icon3El.setAttribute('src', url3);
  icon3El.setAttribute('alt', desc3);
  icon3El.setAttribute('class', 'weather-img');
  //cityNameEl.append(iconEl);

  let temp4El = document.getElementById("temp4");
  let date4El = document.getElementById("date4");
  let wind4El = document.getElementById("wind4");
  let humidity4El = document.getElementById("humidity4");
  let icon4El = document.getElementById('image4');

  let temp4 = data.list[31].main.temp;
  let date4 = (data.list[31].dt_txt).split(" ")[0];
  let wind4 = data.list[31].wind.speed;
  let humidity4 = data.list[31].main.humidity;
  let url4 = `https://openweathermap.org/img/w/${data.list[31].weather[0].icon}.png`;
  let desc4 = data.list[31].weather[0].description || data.list[31].main;

  temp4El.textContent = `Temp: ${temp3} ??F`;
  date4El.textContent = `${date4}`;
  wind4El.textContent = `Wind: ${wind4} MPH`;
  humidity4El.textContent = `Humidity: ${humidity4} %`;
  icon4El.setAttribute('src', url4);
  icon4El.setAttribute('alt', desc4);
  icon4El.setAttribute('class', 'weather-img');

  let temp5El = document.getElementById("temp5");
  let date5El = document.getElementById("date5");
  let wind5El = document.getElementById("wind5");
  let humidity5El = document.getElementById("humidity5");
  let icon5El = document.getElementById('image5');

  let temp5 = data.list[39].main.temp;
  let date5 = (data.list[39].dt_txt).split(" ")[0];
  let wind5 = data.list[39].wind.speed;
  let humidity5 = data.list[38].main.humidity;
  let url5 = `https://openweathermap.org/img/w/${data.list[39].weather[0].icon}.png`;
  let desc5 = data.list[39].weather[0].description || data.list[39].main;

  temp5El.textContent = `Temp: ${temp3} ??F`;
  date5El.textContent = `${date5}`;
  wind5El.textContent = `Wind: ${wind5} MPH`;
  humidity5El.textContent = `Humidity: ${humidity5} %`;
  icon5El.setAttribute('src', url5);
  icon5El.setAttribute('alt', desc5);
  icon5El.setAttribute('class', 'weather-img');
}

function displayWeather(city, data) {

  let tempEl = document.getElementById("temp");
  let windEl = document.getElementById("wind");
  let humidityEl = document.getElementById("humidity");
  let cityNameEl = document.getElementById("city_name");
  let iconEl = document.createElement('img');

  let temp = data.list[0].main.temp;
  let date = (data.list[0].dt_txt).split(" ")[0];
  let wind = data.list[0].wind.speed;
  let humidity = data.list[0].main.humidity;
  let url = `https://openweathermap.org/img/w/${data.list[0].weather[0].icon}.png`;
  let desc = data.list[0].weather[0].description || data.list[0].main;

  tempEl.textContent = `Temp: ${temp} ??F`;
  cityNameEl.textContent = `${city} (${date})`;
  windEl.textContent = `Wind: ${wind} MPH`;
  humidityEl.textContent = `Humidity: ${humidity} %`;
  iconEl.setAttribute('src', url);
  iconEl.setAttribute('alt', desc);
  iconEl.setAttribute('class', 'weather-img');
  cityNameEl.append(iconEl);
}

let fetchedHistory=localStorage.getItem("cities");
if (fetchedHistory){
  searchHistory = JSON.parse(fetchedHistory);
}
displaySearchHistory();