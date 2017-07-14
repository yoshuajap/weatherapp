// setup variables
var key = "&APPID=f783ba9308efeb9e01d56eb94f52a926&units=imperial";
var searchTerm = "";

var baseQueryURL = "http://api.openweathermap.org/data/2.5/weather?q=";
var fullURL = "";


// $(".buttonSearch").on("click", function() {
//   alert('working');
// });

$(document).ready(function() {
  $('#resultsContainer').css("visibility", "hidden");
});

function updateTerm() {
  searchTerm = $('#cityTerm').val();
  fullURL = baseQueryURL + searchTerm + key;

}

function runQuery() {
    updateTerm();

    // console.log(searchTerm);

    $('#resultsContainer').css("visibility", "visible");

    $.ajax({
      url: fullURL,
      method: "GET"
    }).done(function(results) {
      // Logging the URL so we have access to it for troubleshooting
      console.log("------------------------------------");
      console.log("URL: " + fullURL);
      console.log("------------------------------------");

      // Log the NYTData to console, where it will show up as an object
      console.log(results);
      console.log("------------------------------------");

      // console.log(results.main.humidity);

      // var weatherResults = $("<div>");
      // weatherResults.addClass("card blue-grey darken-1");

      $('#resultsSection').empty();

      $('#resultsSection').append(
        "<h5>Results:</h5>"
        +
              "<p>City: " +
              results.name +
              "</p>"
              +
              "<p>Latitude: " +
              results.coord.lat +
              "</p>"
              +
              "<p>Longitude: " +
              results.coord.lon +
              "</p>"
              +
              "<p>Temperature: " +
              results.main.temp + " Fahrenheit" +
              "</p>"
              +
              "<p>Humidity: " +
              results.main.humidity +
              "</p>"
              +
              "<p>Condition: " +
              results.weather[0].description +
              "</p>"
            );

        // if ((results.weather[0].description).is(':contains("rain")')) {
        if ($('#resultsSection').is(':contains("rain")')) {
          // console.log('rain found');
          $("body").css('background-image', 'url(rain-downsized.gif)');
        } else {
          if (results.main.temp < 60) {
            $("body").css('background-image', 'url(snow-downsized.gif)');
          } else if (results.main.temp > 60 && results.main.temp < 90) {
            $("body").css('background-image', 'url(beach-downsized.gif)');
          } else if (results.main.temp > 90) {
            $("body").css('background-image', 'url(hot-downsized.gif)');
          }
        }

        // if($(this).is(':contains("Replace Me")'))




        $("#cityTerm").val("");

        $('#resultsSection').addClass("card blue-grey darken-1 card-content white-text");

    });





}