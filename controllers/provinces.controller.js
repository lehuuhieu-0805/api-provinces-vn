const connection = require('../config/db.config')
const Districts = require('../models/districts.model')
const Provinces = require('../models/provinces.model')

const findAll = async () => {
  try {
    const provinces = await Provinces.findAll({ include: Districts })
    connection.close()
    return provinces
  } catch (err) {
    console.log(err)
  }
}

module.exports = { findAll }