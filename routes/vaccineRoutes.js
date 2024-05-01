const vaccineController = require('../controllers/vaccineController')

const router = require('express').Router()

router.post('/addVaccine', vaccineController.addVaccine)

router.get('/allVaccines', vaccineController.getAllVaccines)

router.get('/:name', vaccineController.getOneVaccine)

router.put('/:name', vaccineController.updateVaccine)

router.delete('/:name', vaccineController.deleteVaccine)

module.exports = router