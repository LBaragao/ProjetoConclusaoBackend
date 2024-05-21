const db = require('../models')

// create main Model
const Patient = db.patient
const Vaccine = db.vaccine
const Vaccination = db.vaccination

// main work


// 1. create application

const addApplication = async (req, res) => {

  let info = {
    patient_Id: req.body.patient_Id,
    vaccine_Id: req.body.vaccine_Id,
    application_date: req.body.application_date,
    dose: req.body.dose
  }

  const vaccination = await Vaccination.create(info)
  res.status(200).send(vaccination)
}


// 2. Get single patient all applications

const getPatientAllApplications = async (req, res) => {

  let patient_Id = req.params.patient_Id
  let applications = await Vaccination.findAll({ where: {patient_Id : patient_Id}})
  res.status(200).send(applications)
}


// 3. Get single vaccine all applications

const getVaccineAllApplications = async (req, res) => {

  let vaccine_Id = req.params.vaccine_Id
  let applications = await Vaccination.findAll({ where: {vaccine_Id : vaccine_Id}})
  res.status(200).send(applications)
}



module.exports = {
  addApplication,
  getPatientAllApplications,
  getVaccineAllApplications
}