var button= document.querySelector('.button');
var input = document.querySelector('.inputValue');

var city = document.querySelector('.city');
var country = document.querySelector('.country');
var weather = document.querySelector('.weather') 
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');
var feels_like = document.querySelector('.feels_like');
var temp_min = document.querySelector('.temp_min');
var temp_max = document.querySelector('.temp_max');
var humid = document.querySelector('.humidity');
var pressure = document.querySelector('.pressure');
var wind_speed = document.querySelector('.wind_speed');
var wind_degree = document.querySelector('.wind_deg');
var wind_direction = document.querySelector('.wind_dir');

const loadData=(event)=>{
  fetch("https://api.openweathermap.org/data/2.5/weather?q="+ input.value +"&appid=a5d122d03faa21df9fc9b0ed472fb4fd")
    .then(response => response.json())
    .then(data => {
        try {
          const cityName = data?.name;
          var countryValue = data?.sys?.country;
          const regionNamesInEnglish = new Intl.DisplayNames(['en'], { type: 'region' });
          countryValue = regionNamesInEnglish.of(countryValue);
          const weathValue = data?.weather[0]?.main;
          const descValue = data?.weather[0]?.description;
          const tempValue = data?.main?.temp;
          const feelValue = data?.main?.feels_like;
          const temp_minValue = data?.main?.temp_min;
          const temp_maxValue = data?.main?.temp_max;
          const humidityValue = data?.main?.humidity;
          const pressureValue = data?.main?.pressure;
          const windSpeedValue = data?.wind?.speed;
          const windDegreeValue = data?.wind?.deg;

          city.innerHTML = "City: " + cityName;
          country.innerHTML = "Country: " + countryValue;
          weather.innerHTML = "Weather: " + weathValue;
          desc.innerHTML = "Description: " + descValue;
          temp.innerHTML = "Temperature: " + parseInt(tempValue-273) + " °C";
          feels_like.innerHTML = "Feels like: " + parseFloat(feelValue-273).toFixed(2) + " °C";
          temp_min.innerHTML = "Min Temperature: " + parseFloat(temp_minValue-273).toFixed(2) + " °C";
          temp_max.innerHTML = "Max Temperature: " + parseFloat(temp_maxValue-273).toFixed(2) + " °C";
          humid.innerHTML = "Humidity: " + humidityValue + "%";
          pressure.innerHTML = "Pressure: " + pressureValue + " Pa";
          wind_speed.innerHTML = "Wind speed: " + windSpeedValue + " km/h";
          wind_degree.innerHTML = "Wind degree: " + windDegreeValue + "° " + getCardinalDirection(windDegreeValue);
          clock.innerHTML = "Date and Time of the Response: " + responseTime();

          function responseTime() {
            var clock = new Date();
            var hours = clock.getHours();
            var minutes = clock.getMinutes();
            var seconds = clock.getSeconds();
            var amPm = ( hours < 12) ? "AM" : "PM";
            hours = (hours > 12) ? hours-12 : hours;
            document.getElementById("clock").innerHTML = "Date and Time of the response: " + hours + ":" + minutes + ":" + seconds + " " + amPm;
            var t = setTimeout(realtimeClock,500);
          }

          function getCardinalDirection(windDegreeValue) {
            const directions = ['↑ N', '↗ NE', '→ E', '↘ SE', '↓ S', '↙ SW', '← W', '↖ NW'];
            return directions[Math.round(windDegreeValue / 45) % 8];
          }
          input.value ="";
          
        } catch (err) {
            if(!input.value){
              alert("Please enter a valid city name!");
              }
            console.log(err);
          }
      });
}

button.addEventListener('click', loadData)