const knex = require('knew')
const configurations = require('../knexfile.js')
const enviroment = process.env.NODE_ENV || 'development'

module.exports = knex(configurations[enviroment])