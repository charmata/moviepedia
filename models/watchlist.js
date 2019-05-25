module.exports = (sequelize, DataTypes) => {
  var Watchlist = sequelize.define("Watchlist", {
    movie_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER
  });
  return Watchlist;
};
