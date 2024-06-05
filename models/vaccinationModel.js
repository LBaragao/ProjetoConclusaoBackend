const { DataTypes } = require("sequelize");
const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {

  const Vaccination = sequelize.define("vaccination", {
    vaccination_Id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    dose: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    application_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    patient_Id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    vaccine_Id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  })

  return Vaccination
}