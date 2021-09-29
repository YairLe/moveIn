const Sequelize = require("sequelize");

const processInfo = process.env;
const sequelize = new Sequelize(
  processInfo.database,
  processInfo.USERNAME,
  processInfo.PASSWORD,
  {
    host: processInfo.HOST,
    dialect: processInfo.DIALECT,
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
      },
    },
  },
);
// const sequelize = new Sequelize(process.env.CONNECTION_URI);

export default sequelize;
