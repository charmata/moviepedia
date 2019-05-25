module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define("User", {
    name: DataTypes.STRING
  });

  User.associate = models => {
    // Delete all reviews made by user when they are deleted
    User.hasMany(models.Review, {
      onDelete: "cascade"
    });
    // Delete all movies added to the user's watchlist when they are deleted
    User.hasMany(models.Watchlist, {
      onDelete: "cascade"
    });
  };

  return User;
};
