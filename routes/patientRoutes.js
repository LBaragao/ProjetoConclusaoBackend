const patientController = require('../controllers/patientController')

const router = require('express').Router()

router.post('/addPatient', patientController.addPatient)

router.get('/allPatients', patientController.getAllPatients)

router.get('/:cpf', patientController.getOnePatient)

router.put('/:cpf', patientController.updatePatient)

router.delete('/:patient_Id', patientController.deletePatient)

module.exports = router