const { Sequelize } = require("sequelize");
const config = require("../config");

const sequelize = new Sequelize(
  config.db.database,
  config.db.username,
  config.db.password,
  {
    host: config.db.host,
    port: config.db.port,
    dialect: "postgres",
  }
);

module.exports = sequelize;
