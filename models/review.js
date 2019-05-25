module.exports = (sequelize, DataTypes) => {
  var Review = sequelize.define("Review", {
    content: DataTypes.STRING,
    rating: DataTypes.INTEGER,
    movie_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER
  });
  return Review;
};
