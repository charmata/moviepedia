module.exports = (sequelize, DataTypes) => {
  var Review = sequelize.define("Review", {
    content: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1]
      }
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        max: 10,
        min: 1
      }
    }
  });

  Review.associate = models => {
    Review.belongsTo(models.User, {
      foreignKey: {
        name: "user_id",
        allowNull: false
      }
    });
    Review.belongsTo(models.Movie, {
      foreignKey: {
        name: "movie_id",
        allowNull: false
      }
    });
  };

  return Review;
};
