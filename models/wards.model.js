const { sequelize, Sequelize } = require('./index')

const Wards = sequelize.define('wards', {
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

module.exports = Wards