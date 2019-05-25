module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define("User", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
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