const { sequelize, Sequelize } = require('./index')
const Provinces = require('./provinces.model')

const AdministrativeRegions = sequelize.define('administrative_regions', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING
  },
  name_en: {
    type: Sequelize.STRING
  },
  code_name: {
    type: Sequelize.STRING
  },
  code_name_en: {
    type: Sequelize.STRING
  },
}, { timestamps: false })

AdministrativeRegions.hasMany(Provinces, {
  foreignKey: 'administrative_region_id'
})
// Provinces.belongsTo(AdministrativeRegions)

module.exports = AdministrativeRegions