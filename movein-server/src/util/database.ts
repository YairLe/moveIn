const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.CONNECTION_URI);

export default sequelize
