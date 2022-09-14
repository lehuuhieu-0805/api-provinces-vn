const express = require('express')

const route = require('./routes')

const app = express()

require('dotenv').config()
require('./config/db.config').connect()

const port = process.env.PORT || 3000

// parse requests of content-type - application/json
app.use(express.json())

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))

require('./models/index.js')
route(app)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})