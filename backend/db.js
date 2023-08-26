const { Sequelize } = require('sequelize');
const sequelize = new Sequelize({
  dialect: 'mysql', 
  host: 'localhost', 
  username: 'root', 
  password: 'root@24', 
  database: 'wanderease', 
});

module.exports = { sequelize };
