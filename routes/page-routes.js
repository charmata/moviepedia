var path = require("path");

module.exports = app => {
  app.get("/", (req, res) => {
    res.send("Hello World");
  });
};
