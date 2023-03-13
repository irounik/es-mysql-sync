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

    createdAt: {
      type: 'TIMESTAMP',
      defaultValue: sequelize.literal('now()'),
      allowNull: false,
    },
    updatedAt: {
      type: 'TIMESTAMP',
      defaultValue: sequelize.literal('now() ON UPDATE now()'),
      allowNull: false,
    },
  },
  {
    underscored: true,
    timestamps: false,
    freezeTableName: true,
  }
);

module.exports = CatalogueAttr;
