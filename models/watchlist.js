module.exports = (sequelize, DataTypes) => {
  var Watchlist = sequelize.define("Watchlist");

  Watchlist.associate = models => {
    Watchlist.belongsTo(models.User, {
      foreignKey: {
        name: "user_id",
        allowNull: false
      }
    });
    Watchlist.belongsTo(models.Movie, {
      foreignKey: {
        name: "movie_id",
        allowNull: false
      }
    });
  };

  return Watchlist;
};
