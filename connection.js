const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');
dotenv.config();

const sequelize = new Sequelize("postgresproject", "postgresproject_user", `${process.env.DB_Password}`, {
    host:`${process.env.DB_Hostname}`,
    dialect: "postgres",
    dialectOptions: {
        ssl: true
    }
});

module.exports = sequelize;