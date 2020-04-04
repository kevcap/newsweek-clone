var ip;
var city;
var country;

var date;
var month;
var day;
var hour;

var temp;
var weather;
var icon;

function setItems() {
  //set items 
  $(".city-name").html(city + ', ');
  $(".weather-icon").css("background-image", `url(${icon})`)
  $(".country-name").html(country);
  $(".temperature").html(temp + 'º ');
  date = date.toString().split(' ');
  $(".date").html(`${date[0]}, ${date[1]} ${date[2]}, ${date[3]}`);
}

async function getClientInfo() {
  //getClientIP, City, Country;
  await $.getJSON('https://json.geoiplookup.io/', function(data) {
    ip = data.ip;
    city = data.city;
    country = data.country_code;
  });


  //getClient: Time, and date:
  await $.getJSON(`https://api.ipgeolocation.io/ipgeo?apiKey=ecc73b10b83644bab6ab4d42e4af6f29&ip=${ip}`).then(clientInfo => date = new Date(clientInfo.time_zone.current_time)); //2020-03-29 13:19:06.629-0300
  
  //set Hour
  hour = date.getHours();

  //checkDay
  if (hour >= 5 && hour <=18) {
    day = true;
  } else {
    day = false
  }
  
  //getWeather
  await $.getJSON(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9077cf2a8553d1a29a2c60fbf981f035`).then((dataWeather) => {
    temp = Math.ceil(dataWeather.main.temp - 273.15)  // convert it for clecius
    weather = dataWeather.weather[0].main;

    
    if (weather == "Clear" && day == true ) {
      icon = "https://g.newsweek.com/img/weather/32.png"
      console.log('case1');
    } else if ( weather == "Clear" && day === false) {
      icon = "https://g.newsweek.com/img/weather/31.png"
      console.log('case2');
    } else if ( weather == "Clouds" && day === true) {
      console.log('case3');
      icon = "https://g.newsweek.com/img/weather/30.png"
    } else if ( weather == "Clouds" && day === false ) {
      console.log('case4');
      icon = "https://g.newsweek.com/img/weather/27.png"
    } else if ( weather == "Thunderstorm") {
      console.log('case5');
      icon = "https://g.newsweek.com/img/weather/03.png"
    } else if ( weather == "Drizzle" ) {
      console.log('case6');
      icon = "https://openweathermap.org/img/wn/09d@2x.png"
    } else if ( weather == "Rain" && day == true ) {
      console.log('case7');
      icon = "https://g.newsweek.com/img/weather/40.png"
    } else if ( weather == "Rain" && day == false) {
      console.log('case8');
      icon = "https://g.newsweek.com/img/weather/45.png"
    } else if ( weather == "Snow" ) {
      console.log('case9');
      icon = "https://g.newsweek.com/img/weather/14.png"
    } else if ( weather == "Smoke" || "Haze" || "Fog" || "Dust" || "Sand" || "Ash" || "Tornado" || "Squall" || "Mist" ) {
      console.log('case10');
      icon = "https://openweathermap.org/img/wn/50d@2x.png"
    } else {
      icon = "https://g.newsweek.com/img/weather/30.png"
      console.log('error'); 
    }
  })


   
    console.log(`Log Ip- ${ip}`);
    console.log(`Log City- ${city}`);
    console.log(`Log Country- ${country}`);
    console.log(`Log Date- ${date}`);
    console.log(`Log Day- ${day}`);
    console.log(`Log Hours- ${hour}`);
    console.log(`Log Temp- ${temp} º`);
    console.log(`Log Weather- ${weather}`);
    setItems();
};

getClientInfo();


if(ip == undefined || ip == null) {
  city = "Brasília";
  country = "BR";
  date = "Thu Apr 02 2020"
  day = true;
  hour = 12;
  temp = 21;
  weather = "Rain"
  icon = "https://g.newsweek.com/img/weather/30.png"
  setItems();
}
