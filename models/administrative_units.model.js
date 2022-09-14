const { sequelize, Sequelize } = require('./index.js')
const Provinces = require('./provinces.model')
const Districts = require('./districts.model')
const Wards = require('./wards.model')

const AdministrativeUnits = sequelize.define('administrative_units', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  full_name: {
    type: Sequelize.STRING
  },
  full_name_en: {
    type: Sequelize.STRING
  },
  short_name: {
    type: Sequelize.STRING
  },
  short_name_en: {
    type: Sequelize.STRING
  },
  code_name: {
    type: Sequelize.STRING
  },
  code_name_en: {
    type: Sequelize.STRING
  }
}, { timestamps: false, })

AdministrativeUnits.hasMany(Provinces, {
  foreignKey: 'administrative_unit_id'
})

// Provinces.belongsTo(AdministrativeUnits)

AdministrativeUnits.hasMany(Districts, {
  foreignKey: 'administrative_unit_id'
})

// Districts.belongsTo(AdministrativeUnits)

AdministrativeUnits.hasMany(Wards, {
  foreignKey: 'administrative_unit_id'
})

// Wards.belongsTo(AdministrativeUnits)

module.exports = AdministrativeUnits