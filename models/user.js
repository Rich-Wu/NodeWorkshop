const db = require('../db/database');

// Model definition
const User = db.sequelize.define('user', {
  name: db.Sequelize.STRING,
  password: db.Sequelize.STRING,
  email: db.Sequelize.STRING,
  education: db.Sequelize.INTEGER
});

exports.userModel = User;
