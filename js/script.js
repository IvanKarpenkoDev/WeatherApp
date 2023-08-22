//04064c014f3fe2c9a62477270468031b
const city = document.querySelector(".search"),
temp = document.querySelector('.temp');


function getWweater(){
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city.value}&appid=04064c014f3fe2c9a62477270468031b`
      )
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
          const temperature = Math.round(data.main.temp);
          document.querySelector('.temp').innerHTML = `${temperature}°C`;
          document.querySelector('.city').innerHTML = `${data.name}, ${data.sys.country}`;
          document.querySelector('.weather-desc').innerHTML = String(data.weather[0].description).charAt(0).toUpperCase() + String(data.weather[0].description).slice(1);
          document.querySelector('.info-main-num').innerHTML = data.wind.speed;
          document.querySelector('#degMain').innerHTML = data.wind.deg;
          document.querySelector('#degMain').innerHTML = data.wind.deg;
          document.querySelector('#gustsMain').innerHTML = data.wind.gust;
          document.querySelector('#feelsLike').innerHTML = Math.round(data.main.feels_like);
          document.querySelector('#lon').innerHTML = `Longitude:${data.coord.lat}`;
          document.querySelector('#lat').innerHTML = `Latitude:${data.coord.lat}`;
          document.querySelector('#Humidity').innerHTML = `Humidity: ${data.main.humidity}%`;
          document.querySelector('.pic-main').style.backgroundImage = `url("https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png")`
          document.querySelector('#pressure').innerHTML = data.main.pressure;
          document.querySelector('#clouds').innerHTML = data.clouds.all;
          const dateSunrise = data.sys.sunrise;
          const date = new Date(dateSunrise); 
   
          document.querySelector('#sunrise').innerHTML = `${date.getUTCHours()}`;
          const dateSunshine = new Date(data.sys.sunshine);
          document.querySelector('#susn').innerHTML = `${dateSunshine.getHours()}:${dateSunshine.getMinutes()}:${dateSunshine.getSeconds()}`;
        }).catch(() =>{
            
        });
}

document.addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    getWweater();
  }
});

document.querySelector('.city-inner').addEventListener('click', (e) => {
    if(!e.target.classList.contains('search')){
        getWweater();
    }
});


 

