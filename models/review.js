module.exports = (sequelize, DataTypes) => {
  var Review = sequelize.define("Review", {
    content: DataTypes.STRING,
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    movie_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER
  });
  return Review;
};
