const { DataTypes } = require('sequelize');
const sequelize = require('../db/database');

const Catalogue = sequelize.define(
  'catalogue',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      autoIncrementIdentity: true,
    },
    ssn: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    brandCode: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    qty: {
      type: DataTypes.INTEGER,
    },
  },
  {
    underscored: true,
    timestamps: true,
    freezeTableName: true,
  }
);

module.exports = Catalogue;
