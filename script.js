


var citySearch = document.getElementByID.val(citySearch)
var cityResult = document.getElementByID(cityResult)
var humidity = document.getElementById(humidity)
var temp = document.getElementById(temp)
var wind = document.getElementById(wind)
var uv = document.getElementById(uv)
var button = document.getElementById(button)


var apiKey = "70d08f263f5c227482ef245478ef60b5"
var queryURL = "api.openweathermap.org/data/2.5/forecast?q={citySearch}&appid=" + apiKey;


$.ajax({
    url: queryURL,
    method: "GET"
  })
    
  
  
    // Transfer content to HTML
    
    
      $(".cityResult").html("cityResult" + response.name);
      $(".wind").text("Wind Speed: " + response.wind.speed);
      $(".humidity").text("Humidity: " + response.main.humidity);
      //$(".uv").text ("UV: "+ response.uv.);//
      
      // Convert the temp to fahrenheit
      //var tempF = (response.main.temp - 273.15) * 1.80 + 32;

      // add temp content to html
   

      // Log the data in the console as well
      console.log("Wind Speed: " + response.wind.speed);
      console.log("Humidity: " + response.main.humidity);
      console.log("Temperature (F): " + tempF);

