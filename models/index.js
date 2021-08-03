const User = require("./user");
const Post = require("./post");

User.hasMany(post, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Post.belongsTo(user, {
  foreignKey: "user_id",
});

module.exports = { User, Post };
