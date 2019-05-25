var axios = require("axios");

// storing all the node arguments plus process.argv

var nodeArgs = process.argv;

// entering movie name

var movieName = "";

//Loop through all the words in the node argument, plus taking into account any "+" added into movie descriptions

for (var i = 2; i < nodeArgs.length; i++) {
  if (i > 2 && i < nodeArgs.length) {
    movieName = movieName + "+" + nodeArgs[i];
  } else {
    movieName += nodeArgs[i];
  }
}

// Axios request finding the API and movie searched
var queryURL = "http://www.omdbapi.com/?t=" + movieName + "&apikey=26fbc7b2";

// Attempting to debug URL
console.log(queryURL);

axios.get(queryURL).then(function(response) {
  console.log(response);
});
