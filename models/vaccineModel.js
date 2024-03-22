const { DataTypes } = require("sequelize");
const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {

  const Vaccine = sequelize.define("vaccine", {
    vaccine_Id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    doses_number: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    period_between_applications: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    illness: {
      type: DataTypes.STRING,
      allowNull: false
    }
  })

  return Vaccine
}