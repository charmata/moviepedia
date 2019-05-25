module.exports = (sequelize, DataTypes) => {
  var Watchlist = sequelize.define("Watchlist");

  Watchlist.associate = models => {
    Watchlist.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
    Watchlist.belongsTo(models.Movie, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Watchlist;
};
