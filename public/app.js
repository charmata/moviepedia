var login = () => {
  if ($("#login-form")) {
    var name = $("#login-form #name").val();
    $.ajax({
      url: `/api/user?name=${name}`,
      method: "GET"
    })
      .then(response => {
        if (response.name) {
          sessionStorage.setItem("name", response.name);
          $("#login-form #name").val("");
          window.location.href = "/";
        }
      })
      .catch(err => {
        console.log(err);
        $("#login-form #name").val("");
      });
  }
};

var register = () => {
  if ($("#register-form")) {
    var name = $("#register-form #name").val();
    $.ajax({
      url: `/api/user`,
      data: { name: name },
      method: "POST"
    })
      .then(response => {
        if (response.name) {
          sessionStorage.setItem("name", response.name);
          $("#register-form #name").val("");
          window.location.href = "/";
        }
      })
      .catch(err => {
        console.log(err);
        $("#register-form #name").val("");
      });
  }
};

var logout = () => {
  sessionStorage.removeItem("name");
};

$(document).ready(function() {
  $("#submitBtn").click(function() {
    var results = $("#searchText")
      .val()
      .trim();
    var queryURL = "http://www.omdbapi.com/?t=" + results + "&apikey=26fbc7b2";
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      $("#results").text(response.Title);
      $("#plot").text(response.Plot);
      $("#image").attr("src", response.Poster);
      $("#rating").text(response.Ratings[1].Value);
      console.log(response);

      //   $("#results").append(img);
    });
  });

  $(document).on("click", "#login-submit", e => {
    e.preventDefault();
    login();
  });
  $(document).on("click", "#register-submit", e => {
    e.preventDefault();
    register();
  });
  $(document).on("click", "nav li:last-child a", e => {
    e.preventDefault();
    logout();
  });
  // entering movie name

  //   var movieName = "";

  //Loop through all the words in the node argument, plus taking into account any "+" added into movie descriptions

  //   for (var i = 2; i < nodeArgs.length; i++) {
  //     if (i > 2 && i < nodeArgs.length) {
  //       movieName = movieName + "+" + nodeArgs[i];
  //     } else {
  //   //       movieName += nodeArgs[i];
  //   //     }
  //   // }

  //   // Axios request finding the API and movie searched

  //   var queryURL = "http://www.omdbapi.com/?t=" + movieName + "&apikey=26fbc7b2";
  //   var queryURL2 =
  //     "https://www.googleapis.com/youtube/v3/search?part=snippet&q=" +
  //     movieName +
  //     "&order=rating&type=video&videoDefinition=high&videoEmbeddable=true&key=AIzaSyAoVT5ZZwk6f0aT-ClGOaf3eoGnC2zRKko";
  //   console.log(queryURL2);
  //   console.log(queryURL2.items);
  //   // Attempting to debug URL
  //   console.log(queryURL);

  //   axios.get(queryURL).then(function(response) {
  //     console.log(response.data.items);
  //   });

  //   axios.get(queryURL2).then(function(response2) {
  //     console.log(response2.data.items);
  //   });
  // })
});
