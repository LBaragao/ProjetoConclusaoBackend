const vaccinationController = require('../controllers/vaccinationController')

const router = require('express').Router()

router.post('/addApplication', vaccinationController.addApplication)

router.get('/patient/:patient_Id', vaccinationController.getPatientAllApplications)

router.get('/vaccine/:vaccine_Id', vaccinationController.getVaccineAllApplications)

module.exports = router
