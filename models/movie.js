module.exports = (sequelize, DataTypes) => {
  var Movie = sequelize.define("Movie", {
    omdb_id: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3]
      }
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1]
      }
    }
  });

  Movie.associate = models => {
    // Delete all associations if a movie is ever deleted
    Movie.hasMany(models.Review, {
      foreignKey: {
        name: "movie_id",
        allowNull: false
      },
      onDelete: "cascade"
    });
    Movie.hasMany(models.Watchlist, {
      foreignKey: {
        name: "movie_id",
        allowNull: false
      },
      onDelete: "cascade"
    });
  };

  return Movie;
};
