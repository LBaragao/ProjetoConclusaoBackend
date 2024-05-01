const db = require('../models')

// create main Model
const Patient = db.patient
const Vaccine = db.vaccine
const Vaccination = db.vaccination

// main work


// 1. create vaccine

const addVaccine = async (req, res) => {

  let info = {
    name: req.body.name,
    quantity: req.body.quantity,
    doses_number: req.body.doses_number,
    period_between_applications: req.body.period_between_applications,
    illness: req.body.illness
  }

  const vaccine = await Vaccine.create(info)
  res.status(200).send(vaccine)
}


// 2. Get all Vaccines

const getAllVaccines = async (req, res) => {

  let vaccine = await Vaccine.findAll({})
  res.status(200).send(vaccine)
}


// 3. Get single Vaccine

const getOneVaccine = async (req, res) => {

  let name = req.params.name
  let vaccine = await Vaccine.findOne({ where: {name : name}})
  res.status(200).send(vaccine)
}


// 4. Update Vaccine

const updateVaccine = async (req, res) => {

  let name = req.params.name
  
  const vaccine = await Vaccine.update(req.body, {where: {name: name}})

  res.status(200).send(vaccine)
}


// 5. Delete Vaccine

const deleteVaccine = async (req, res) => {

  let name = req.params.name
  await Vaccine.destroy({ where: { name: name}})
  res.status(200).json({ success: true, message: 'Vacina excluída com sucesso' })
}

module.exports = {
  addVaccine,
  getAllVaccines,
  getOneVaccine,
  updateVaccine,
  deleteVaccine
}