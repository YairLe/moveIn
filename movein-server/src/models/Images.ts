import Sequelize from "sequelize";
import db from "../util/database";

const Images = db.define("image", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.TEXT,
    allowNull: true,
  },
  image: {
    type: Sequelize.BLOB,
    allowNull: true,
  },
  apartmentId: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
  apartmentName: {
    type: Sequelize.TEXT,
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

export default Images;
