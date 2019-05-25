module.exports = (sequelize, DataTypes) => {
  var Movie = sequelize.define("Movie", {
    omdb_id: DataTypes.STRING
  });
  return Movie;
};
