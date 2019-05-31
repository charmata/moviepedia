var axios = require("axios");

module.exports = {
  search(name, cb) {
    var query = `https://www.googleapis.com/youtube/v3/search?part=snippet&order=rating&type=video&videoDefinition=high&videoEmbeddable=true&key=${
      process.env.YOUTUBE_KEY
    }&q=${name}`;
    axios.get(query).then(res => {
      cb(res.data.items);
    });
  }
};
