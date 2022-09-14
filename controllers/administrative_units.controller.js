const connection = require('../config/db.config')
const AdministrativeUnits = require('../models/administrative_units.model')
const Provinces = require('../models/provinces.model')

const findAll = async () => {
  try {
    const administrative_units = await AdministrativeUnits.findAll({ include: Provinces })
    connection.close()
    return administrative_units
  } catch (err) {
    console.log(err)
  }
}

module.exports = { findAll }