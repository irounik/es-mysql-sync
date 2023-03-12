const { DataTypes } = require('sequelize');
const sequelize = require('../db/database');

const CatalogueAttr = sequelize.define(
  'catalogue_attr',
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
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    value: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    underscored: true,
    timestamps: true,
    freezeTableName: true,
  }
);

module.exports = CatalogueAttr;
