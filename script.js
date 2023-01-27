// Add your own API key & URL to api.openweather.map
var APIKey = "k9kwhfWu.YHFZOslEQXaaUnDw0U3WLRkHs8RLPbWr"
var queryURL = "api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=" + APIKey;

// We then created an AJAX call
$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    // Create CODE HERE to Log the queryURL
    console.log(queryURL);
    // Create CODE HERE to log the resulting object
    console.log(response);
    // Create CODE HERE to calculate the temperature (converted from Kelvin)
      // Hint: To convert from Kelvin to Celsius: C = K - 273.15
      let K = response.main.temp;
      let C = K - 273.15;
      console.log(C);
    // Create CODE HERE to transfer content to HTML
      document.querySelector('.city').innerText = `City: ${response.name}`;
      document.querySelector('.wind').innerText = `Wind Speed: ${response.wind.speed}metre/sec`;
      document.querySelector('.humidity').innerText = `Humidity: ${response.main.humidity}`;
    // Create CODE HERE to dump the temperature content into HTML
      document.querySelector('.temp').innerText = `Temperature: ${C}`;
  });