module.exports = (sequelize, DataTypes) => {
  var Movie = sequelize.define("Movie", {
    name: DataTypes.STRING,
    release_date: DataTypes.STRING,
    rating: DataTypes.INTEGER
  });
  return Movie;
};
