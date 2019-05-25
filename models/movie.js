module.exports = (sequelize, DataTypes) => {
  var Movie = sequelize.define("Movie", {
    omdb_id: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3]
      }
    }
  });
  return Movie;
};
