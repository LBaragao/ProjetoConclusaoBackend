const patientController = require('../controllers/patientController')

const router = require('express').Router()

router.post('/addPatient', patientController.addPatient)

router.get('/allPatients', patientController.getAllPatients)

router.get('/:patient_Id', patientController.getOnePatient)

router.put('/:patient_Id', patientController.updatePatient)

router.delete('/:patient_Id', patientController.deletePatient)

module.exports = router