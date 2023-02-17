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
  getGeoCoordinates(city);
  inputEl.value="";
}

function getGeoCoordinates (city){
  let url = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=3&appid=${APIKey}`;
  //let url=`api.openweathermap.org/data/2.5/forecast?q={city}&appid={APIKey}`;
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (jsonData) {
      if (!jsonData[0]) {
        alert('City could not be found!!');
      } else
       {
        console.log("data= ", jsonData);
        addCityToHistory(city);
        getWeather(city,jsonData[0]);
      }
    })
    .catch(function (err) {
      console.error(err);
    });
}

function addCityToHistory (city){
  // to be completed 
}

function getWeather (city, data){
  // to be completed 
  var { lat } = data;
  var { lon } = data;
  // api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}
  let  url=`https://api.openweathermap.org/data/2.5/forecast?units=imperial&lat=${lat}&lon=${lon}&appid=${APIKey}`;
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
function displayFiveDayForecast (city, data) {
  let tempEl=document.getElementById("temp1");
  let dateEl=document.getElementById("date1");
  let windEl=document.getElementById("wind1");
  let humidityEl=document.getElementById("humidity1");
  let iconEl = document.getElementById('image1');

  let temp=data.list[7].main.temp;
  let date=(data.list[7].dt_txt).split(" ")[0];
  let wind=data.list[7].wind.speed;
  let humidity=data.list[7].main.humidity;
  let url = `https://openweathermap.org/img/w/${data.list[7].weather[0].icon}.png`;
  let desc = data.list[7].weather[0].description || data.list[7].main;

  tempEl.textContent= `Temperature: ${temp} Deg F`;
  dateEl.textContent= `${date}`;
  windEl.textContent= `Wind: ${wind} MPH`;
  humidityEl.textContent= `Humidity: ${humidity} %`;
  iconEl.setAttribute('src', url);
  iconEl.setAttribute('alt', desc);
  iconEl.setAttribute('class', 'weather-img');

  let temp2El=document.getElementById("temp2");
  let date2El=document.getElementById("date2");
  let wind2El=document.getElementById("wind2");
  let humidity2El=document.getElementById("humidity2");
  let icon2El = document.getElementById('image2');

  let temp2=data.list[15].main.temp;
  let date2=(data.list[15].dt_txt).split(" ")[0];
  let wind2=data.list[15].wind.speed;
  let humidity2=data.list[15].main.humidity;
  let url2 = `https://openweathermap.org/img/w/${data.list[15].weather[0].icon}.png`;
  let desc2 = data.list[15].weather[0].description || data.list[15].main;

  temp2El.textContent= `Temperature: ${temp2} Deg F`;
  date2El.textContent= `${date2}`;
  wind2El.textContent= `Wind: ${wind2} MPH`;
  humidity2El.textContent= `Humidity: ${humidity2} %`;
  icon2El.setAttribute('src', url2);
  icon2El.setAttribute('alt', desc2);
  icon2El.setAttribute('class', 'weather-img');

  let temp3El=document.getElementById("temp3");
  let date3El=document.getElementById("date3");
  let wind3El=document.getElementById("wind3");
  let humidity3El=document.getElementById("humidity3");
  let icon3El = document.getElementById('image3');

  let temp3=data.list[23].main.temp;
  let date3=(data.list[23].dt_txt).split(" ")[0];
  let wind3=data.list[23].wind.speed;
  let humidity3=data.list[23].main.humidity;
  let url3 = `https://openweathermap.org/img/w/${data.list[23].weather[0].icon}.png`;
  let desc3 = data.list[23].weather[0].description || data.list[23].main;

  temp3El.textContent= `Temperature: ${temp3} Deg F`;
  date3El.textContent= `${date3}`;
  wind3El.textContent= `Wind: ${wind3} MPH`;
  humidity3El.textContent= `Humidity: ${humidity3} %`;
  icon3El.setAttribute('src', url3);
  icon3El.setAttribute('alt', desc3);
  icon3El.setAttribute('class', 'weather-img');
  //cityNameEl.append(iconEl);

  let temp4El=document.getElementById("temp4");
  let date4El=document.getElementById("date4");
  let wind4El=document.getElementById("wind4");
  let humidity4El=document.getElementById("humidity4");
  let icon4El = document.getElementById('image4');

  let temp4=data.list[31].main.temp;
  let date4=(data.list[31].dt_txt).split(" ")[0];
  let wind4=data.list[31].wind.speed;
  let humidity4=data.list[31].main.humidity;
  let url4 = `https://openweathermap.org/img/w/${data.list[31].weather[0].icon}.png`;
  let desc4 = data.list[31].weather[0].description || data.list[31].main;

  temp4El.textContent= `Temperature: ${temp3} Deg F`;
  date4El.textContent= `${date4}`;
  wind4El.textContent= `Wind: ${wind4} MPH`;
  humidity4El.textContent= `Humidity: ${humidity4} %`;
  icon4El.setAttribute('src', url4);
  icon4El.setAttribute('alt', desc4);
  icon4El.setAttribute('class', 'weather-img');

  let temp5El=document.getElementById("temp5");
  let date5El=document.getElementById("date5");
  let wind5El=document.getElementById("wind5");
  let humidity5El=document.getElementById("humidity5");
  let icon5El = document.getElementById('image5');

  let temp5=data.list[39].main.temp;
  let date5=(data.list[39].dt_txt).split(" ")[0];
  let wind5=data.list[39].wind.speed;
  let humidity5=data.list[38].main.humidity;
  let url5 = `https://openweathermap.org/img/w/${data.list[39].weather[0].icon}.png`;
  let desc5 = data.list[39].weather[0].description || data.list[39].main;

  temp5El.textContent= `Temperature: ${temp3} Deg F`;
  date5El.textContent= `${date5}`;
  wind5El.textContent= `Wind: ${wind5} MPH`;
  humidity5El.textContent= `Humidity: ${humidity5} %`;
  icon5El.setAttribute('src', url5);
  icon5El.setAttribute('alt', desc5);
  icon5El.setAttribute('class', 'weather-img');
}

function displayWeather(city, data) {
  // to be completed 
  let tempEl=document.getElementById("temp");
  let windEl=document.getElementById("wind");
  let humidityEl=document.getElementById("humidity");
  let cityNameEl=document.getElementById("city_name");
  let iconEl = document.createElement('img');

  let temp=data.list[0].main.temp;
  let date=(data.list[0].dt_txt).split(" ")[0];
  let wind=data.list[0].wind.speed;
  let humidity=data.list[0].main.humidity;
  let url = `https://openweathermap.org/img/w/${data.list[0].weather[0].icon}.png`;
  let desc = data.list[0].weather[0].description || data.list[0].main;

  tempEl.textContent= `Temperature: ${temp} Deg F`;
  cityNameEl.textContent= `${city} (${date})`;
  windEl.textContent= `Wind: ${wind} MPH`;
  humidityEl.textContent= `Humidity: ${humidity} %`;
  iconEl.setAttribute('src', url);
  iconEl.setAttribute('alt', desc);
  iconEl.setAttribute('class', 'weather-img');
  cityNameEl.append(iconEl);
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

function displayCards(city, data){  
var cityName = $(".card");
  cityName.text(args.name);
  var date = $(".time");
  date.text(currentDay);
  var date1 = $(".card");
  date1.text(moment().add(1,'days').format("ddd D MMM"));
  var date2 = $(".date2");
  date2.text(moment().add(2,'days').format("ddd D MMM"));
  var date3 = $(".date3");
  date3.text(moment().add(3,'days').format("ddd D MMM"));
  var date4 = $(".date4");
  date4.text(moment().add(4,'days').format("ddd D MMM"));
  var date5 = $(".date5");
  date5.text(moment().add(5, 'days').format("ddd D MMM"));
  var todayTemp = $("#temp");
  todayTemp.text(weatherObj.list[0].main.temp);
  console.log(weatherObj.list[0].main.temp);
  var todayWind = $("#wind");
  todayWind.text(weatherObj.list[0].wind.speed);
  var todayHumidity = $("#humidity");
  todayHumidity.text(weatherObj.list[0].main.humidity);
  var weatherIcon = $("#weather-icon");
  weatherIcon.attr("src", "http://openweathermap.org/img/wn/" + weatherObj.list[0].weather[0].icon + "@4x.png");
  $("#weather-wrapper").removeClass("hide");
}