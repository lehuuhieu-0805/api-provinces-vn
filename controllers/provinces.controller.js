const connection = require('../config/db.config')
const Districts = require('../models/districts.model')
const Provinces = require('../models/provinces.model')
const Wards = require('../models/wards.model')

const findAll = async () => {
  try {
    const provinces = await Provinces.findAll({ include: [{ model: Districts, include: [{ model: Wards }] }] })
    connection.close()
    return provinces
  } catch (err) {
    console.log(err)
  }
}

module.exports = { findAll }