const router = require('express').Router()

const administrativeUnitsController = require('../controllers/administrative_units.controller.js')

router.get('/', async (req, res) => {
  const administrative_units = await administrativeUnitsController.findAll()
  res.json(administrative_units)
})

module.exports = router
