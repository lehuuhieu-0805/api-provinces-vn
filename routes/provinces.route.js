const router = require('express').Router()

const provincesController = require('../controllers/provinces.controller')

router.get('/', async (req, res) => {
  const provinces = await provincesController.findAll()
  res.json(provinces)
})

module.exports = router