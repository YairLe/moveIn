import Sequelize from "sequelize";
import db from "../util/database";

const User = db.define("apartment", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  userId: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  street: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  neighborhood: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  city: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  rent: {
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
  rooms: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  floorMin: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  floorMax: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  comments: {
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

export default User;
