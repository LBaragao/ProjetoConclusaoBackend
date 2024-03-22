const dbConfig = require('../config/dbConfig.js');

const {Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize(
  dbConfig.DB,
  dbConfig.USER,
  dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorAliases: false,

    pool: {
      max: dbConfig.pool.max,
      min: dbConfig.pool.min,
      acquire: dbConfig.pool.acquire,
      idle: dbConfig.pool.idle
    }
  }
)

sequelize.authenticate()
.then(() => {
  console.log('connected...')
})
.catch(err => {
  console.log('Error' + err)
})

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.patient = require('./patientModel.js')(sequelize, DataTypes)
db.vaccine = require('./vaccineModel.js')(sequelize, DataTypes)
db.vaccination = require('./vaccinationModel.js')(sequelize, DataTypes)

//estabelecendo a relacao de "um para muitos" entre patient e vaccination
db.patient.hasMany(db.vaccination, { foreignKey: 'patient_Id' });
db.vaccination.belongsTo(db.patient, { foreignKey: 'patient_Id' });

//estabelecendo a relacao de "um para muitos" entre vaccine e vaccination
db.vaccine.hasMany(db.vaccination, { foreignKey: 'vaccine_Id' });
db.vaccination.belongsTo(db.vaccine, { foreignKey: 'vaccine_Id' });

db.sequelize.sync({ force: false })
.then(() => {
  console.log('yes re-sync done!')
})


module.exports = db;