import Sequelize from "sequelize";
import db from "../util/database";

const Requirements = db.define("requirements", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  userId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  minPrice: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  maxPrice: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  tax: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  committe: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  city: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  neighborhood: {
    type: Sequelize.ARRAY(Sequelize.TEXT),
    allowNull: false,
  },
  rooms: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  essentials: {
    type: Sequelize.ARRAY(Sequelize.TEXT),
    allowNull: false,
  },
});

export default Requirements;
