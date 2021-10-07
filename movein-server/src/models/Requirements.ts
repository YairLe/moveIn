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
    unique: true,
  },
  minPrice: {
    type: Sequelize.INTEGER,
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
  committee: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  city: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  neighborhood: {
    type: Sequelize.ARRAY(Sequelize.TEXT),
    allowNull: true,
  },
  minRooms: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  maxRooms: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  essentials: {
    type: Sequelize.ARRAY(Sequelize.TEXT),
    allowNull: true,
  },
  createdAt: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  updatedAt: {
    type: Sequelize.DATE,
    allowNull: false,
  },
});

export default Requirements;
