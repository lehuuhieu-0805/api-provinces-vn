const { sequelize, Sequelize } = require('./index')
const Districts = require('./districts.model')
const AdministrativeUnits = require('./administrative_units.model')

const Provinces = sequelize.define('provinces', {
  code: {
    type: Sequelize.STRING,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING
  },
  name_en: {
    type: Sequelize.STRING
  },
  full_name: {
    type: Sequelize.STRING
  },
  full_name_en: {
    type: Sequelize.STRING
  },
  code_name: {
    type: Sequelize.STRING
  },
}, { timestamps: false })

Provinces.hasMany(Districts, {
  foreignKey: 'province_code'
})

// Districts.belongsTo(Provinces)

module.exports = Provinces