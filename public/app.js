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

var movieSearch = () => {
  if ($("#searchText")) {
    $("#searchResults").empty();
    var movieName = $("#searchText")
      .val()
      .trim();
    $.ajax({
      url: `/api/omdb?q=${movieName}`,
      method: "GET"
    })
      .then(response => {
        if (response) {
          response.Search.forEach(movie => {
            var card = $("<div>")
              .addClass("col-2 card mb-3")
              .attr("data-id", movie.imdbID);
            var poster = $("<img>")
              .addClass("card-img-top")
              .attr("src", movie.Poster);
            var body = $("<div>").addClass("card-body");
            var title = $("<h5>")
              .addClass("card-title")
              .text(movie.Title);

            body.append(title);
            card.append(poster, body);
            $("#searchResults").append(card);

            /*<div class="card-body">
              <h5 class="card-title" id="results" />
              <p class="card-text" id="plot" />
              <p id="rating" />
            </div>*/
          });
        }
      })
      .catch(err => {
        console.log(err);
        $("#searchText").val("");
      });
  }
};

$(document).ready(function() {
  $(document).on("click", "#submitBtn", e => {
    e.preventDefault();
    movieSearch();
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
});
