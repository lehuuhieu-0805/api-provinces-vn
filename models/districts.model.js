const { sequelize, Sequelize } = require('./index')
const Wards = require('./wards.model')

const Districts = sequelize.define('districts', {
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

Districts.hasMany(Wards, {
  foreignKey: 'district_code'
})

// Wards.belongsTo(Districts)

module.exports = Districts