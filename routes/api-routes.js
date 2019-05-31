var db = require("../models");
var omdb = require("../controllers/omdb");
var youtube = require("../controllers/youtube");

module.exports = app => {
  // Movie
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
        id: req.params.id,
        include: [db.Review]
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
  // User
  app.get("/api/user", (req, res) => {
    db.User.findOne({
      where: {
        name: req.query.name
      },
      include: [db.Review, db.Watchlist]
    })
      .then(data => {
        res.json(data);
      })
      .catch(err => {
        console.log(err);
      });
  });
  app.get("/api/user/:id", (req, res) => {
    db.User.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Review, db.Watchlist]
    })
      .then(data => {
        res.json(data);
      })
      .catch(err => {
        console.log(err);
      });
  });
  app.post("/api/user", (req, res) => {
    db.User.create(req.body)
      .then(data => {
        res.json(data);
      })
      .catch(err => {
        console.log(err);
      });
  });
  // Review
  app.get("/api/review/:id", (req, res) => {
    db.Review.findOne({
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
  app.put("/api/review/:id", (req, res) => {
    db.Review.update(req.body, {
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
  app.post("/api/review", (req, res) => {
    db.Review.create(req.body)
      .then(data => {
        res.json(data);
      })
      .catch(err => {
        console.log(err);
      });
  });
  app.delete("/api/review/:id", (req, res) => {
    db.Review.destroy({
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
  // Watchlist
  app.get("/api/watchlist/:id", (req, res) => {
    db.Watchlist.findOne({
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
  app.post("/api/watchlist", (req, res) => {
    db.Watchlist.create(req.body)
      .then(data => {
        res.json(data);
      })
      .catch(err => {
        console.log(err);
      });
  });
  app.delete("/api/watchlist/:id", (req, res) => {
    db.Watchlist.destroy({
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
  // OMDB
  app.get("/api/omdb", (req, res) => {
    omdb.search(req.query.q, data => {
      res.json(data);
    });
  });
  app.get("/api/omdb/:id", (req, res) => {
    omdb.id(req.params.id, data => {
      res.json(data);
    });
  });
  // YouTube
  app.get("/api/youtube", (req, res) => {
    youtube.search(req.query.q, data => {
      res.json(data);
    });
  });
};
