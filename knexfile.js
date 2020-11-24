require('dotenv').config()

module.exports = {
  client: 'mysql',
  version: '5.5',
  connection: {
    host: process.env.HOST,
    database: process.env.DATABASE,
    user: process.env.USER,
    password: process.env.PASSWORD
  }
}
