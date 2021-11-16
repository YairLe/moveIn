const Sequelize = require("sequelize");

const processInfo = process.env;
const sequelize = new Sequelize(
  processInfo.DATABASE,
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
    logging: false,
  },
);

export default sequelize;
