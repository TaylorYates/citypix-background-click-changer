//PSEUDOCODE//
// - function to change background including:
// - variable to store data for which city was typed in
// - a command to pull the data from the input using $.val()
// - an if/else statement that changes the background depending on the city
// - include in the if/else statement the || operater to differenciate different ways of spelling the city ie. New York || NYC || NY
// - line in function start to run (call) the function
//END PSUEDOCODE//

function changeBackground(){
  var city = $("#city-type").val().trim();

  if (city == "New York" || city == "NYC") {
    $("body").attr("class", "nyc");
  }
  else if (city == "San Francisco" || city == "SF" || city == "Bay Area") {
    $("body").attr("class", "sf");
  }
  else if (city == "Los Angeles" || city == "LA" || city == "LAX") {
    $("body").attr("class", "la");
  }
  else if (city == "Austin" || city == "ATX") {
    $("body").attr("class", "austin");
  }
  else if (city == "Sydney" || city == "SYD") {
    $("body").attr("class", "sydney");
  }
   $("#city-type").val("");
}

function start() {
  $("#submit-btn").click(changeBackground);
  $("#submit-btn").click(function(event){
    event.preventDefault();
  });

}

$(document).ready(start);
