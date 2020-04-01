weather = "Rain";
day = false;

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
    icon = "https://g.newsweek.com/img/weather/03.png"
  } else if ( weather == "Drizzle" ) {
    icon = "https://openweathermap.org/img/wn/09d@2x.png"
  } else if ( weather == "Rain" && day == true ) {
    icon = "https://g.newsweek.com/img/weather/40.png"
  } else if ( weather == "Rain" && day == false) {
    icon = "https://g.newsweek.com/img/weather/45.png"
  } else if ( weather == "Snow" ) {
    icon = "https://g.newsweek.com/img/weather/14.png"
  } else if ( weather == "Smoke" || "Haze" || "Fog" || "Dust" || "Sand" || "Ash" || "Tornado" || "Squall" || "Mist" ) {
    icon = "https://openweathermap.org/img/wn/50d@2x.png"
  } else {
    icon = "https://g.newsweek.com/img/weather/30.png"
    console.log('error'); 
  }


console.log(icon);
