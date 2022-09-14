const Connection = require('tedious').Connection

require('dotenv').config()

const config = {
  server: process.env.SERVER_NAME,
  authentication: {
    type: 'default',
    options: {
      userName: process.env.USERNAME, // update me
      password: process.env.PASSWORD // update me
    }
  }
}

const connection = new Connection(config)

connection.on('connect', (err) => {
  if (err) {
    console.log('connect failed: ', err)
  } else {
    console.log('connect database successfully')
  }
})

module.exports = connection