const { DataTypes } = require("sequelize");
const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {

  const Vaccination = sequelize.define("vaccination", {
    vaccinationId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    dose: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    first_application: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    last_application: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    campaign: {
      type: DataTypes.STRING,
      allowNull: true
    }
  })

  return Vaccination
}