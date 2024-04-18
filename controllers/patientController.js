const db = require('../models')

// create main Model
const Patient = db.patient
const Vaccine = db.vaccine
const Vaccination = db.vaccination

// main work


// 1. create patient

const addPatient = async (req, res) => {

  let info = {
    name: req.body.name,
    cpf: req.body.cpf,
    birth_date: req.body.birth_date,
    cellphone: req.body.cellphone,
    telephone: req.body.telephone,
    address: req.body.address,
    complement: req.body.complement,
    cep: req.body.cep,
    city: req.body.city,
    state: req.body.state,
    email: req.body.email
  }

  const patient = await Patient.create(info)
  res.status(200).send(patient)
}


// 2. Get all patients

const getAllPatients = async (req, res) => {

  let patients = await Patient.findAll({})
  res.status(200).send(patients)
}


// 3. Get single patient

const getOnePatient = async (req, res) => {

  let cpf = req.params.cpf
  let patients = await Patient.findOne({ where: {cpf : cpf}})
  res.status(200).send(patients)
}


// 4. Update patient

const updatePatient = async (req, res) => {

  let cpf = req.params.cpf
  
  const patient = await Patient.update(req.body, {where: {cpf: cpf}})

  res.status(200).send(patient)
}


// 5. Delete patient

const deletePatient = async (req, res) => {

  let cpf = req.params.cpf
  await Patient.destroy({ where: { cpf: cpf}})
  res.status(200).json({ success: true, message: 'Paciente excluído com sucesso' })
}

module.exports = {
  addPatient,
  getAllPatients,
  getOnePatient,
  updatePatient,
  deletePatient
}