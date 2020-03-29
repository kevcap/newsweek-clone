var ip;
var city;
var country;

var date;
var month;
var day;
var hour;

var temp;

function setItems() {
  //set items 
  $(".city-name").html(city + ', ');
  $(".country-name").html(country);
  $(".temperature").html(temp + 'º');
  date = date.toString().split(' ');
  $(".date").html(`${date[0]}, ${date[1]} ${date[2]}, ${date[3]}`);
}

async function getClientInfo() {
  //getClientIP, City, Country;
  await $.getJSON("https://api.db-ip.com/v2/free/self").then((addrInfo) => {
    ip = addrInfo.ipAddress;
    city = addrInfo.city;
    country = addrInfo.countryCode;
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
  })


  // async function getWeather () {
   
    console.log(`Log Ip- ${ip}`);
    console.log(`Log City- ${city}`);
    console.log(`Log Country- ${country}`);
    console.log(`Log Date- ${date}`);
    console.log(`Log Day- ${day}`);
    console.log(`Log Hours- ${hour}`);
    console.log(`Log Temp- ${temp} º`);
    setItems();
};

getClientInfo();
