const administrativeUnitsRouter = require('./administrative_units.route')
const provincesRouter = require('./provinces.route')

function route(app) {
  app.get('/', (req, res) => {
    res.send('Hello World')
  })

  app.use('/administrative_units', administrativeUnitsRouter)

  app.use('/provinces', provincesRouter)
}

module.exports = route