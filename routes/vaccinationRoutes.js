const vaccinationController = require('../controllers/vaccinationController')

const router = require('express').Router()

router.post('/addApplication', vaccinationController.addApplication)

router.get('/getPatientAllApplications', vaccinationController.getPatientAllApplications)

router.get('/getVaccineAllApplications', vaccinationController.getVaccineAllApplications)

module.exports = router
