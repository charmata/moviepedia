var axios = require("axios");

module.exports = {
  search(name, cb) {
    var query = `https://www.omdbapi.com/?apikey=${process.env.OMDB_KEY}&s=${name}`;
    axios.get(query).then(res => {
      cb(res.data);
    });
  },
  id(omdbId, cb) {
    var query = `https://www.omdbapi.com/?apikey=${process.env.OMDB_KEY}&i=${omdbId}`;
    axios.get(query).then(res => {
      cb(res.data);
    });
  }
};
