var db = require("../models");

module.exports = app => {
  app.get("/api/movie", (req, res) => {
    db.Movie.findAll({})
      .then(data => {
        res.json(data);
      })
      .catch(err => {
        console.log(err);
      });
  });
  app.get("/api/movie/:id", (req, res) => {
    db.Movie.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(data => {
        res.json(data);
      })
      .catch(err => {
        console.log(err);
      });
  });
  app.post("/api/movie", (req, res) => {
    db.Movie.create(req.body)
      .then(data => {
        res.json(data);
      })
      .catch(err => {
        console.log(err);
      });
  });
};
