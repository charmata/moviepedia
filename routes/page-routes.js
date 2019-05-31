var path = require("path");

module.exports = app => {
  app.get("/", (req, res) => {
    res.render("index");
  });
  app.get("/search", (req, res) => {
    res.render("search");
  });
  app.get("/login", (req, res) => {
    res.render("login");
  });
  app.get("/signup", (req, res) => {
    res.render("signup");
  });
};
