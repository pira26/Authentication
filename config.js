const dotenv = require('dotenv').config();
const mongoose = require('mongoose');

module.exports = {
  'port': `${process.env.PORT}` || 8080,
  // 'dbUrl': `mongodb://${process.env.USER_DB}:${process.env.PASSWORD_DB}@ds163034.mlab.com:63034/cityspot`,
  'dbUrl': `mongodb://${process.env.USER_DB_TEST}:${process.env.PASSWORD_DB_TEST}@ds119736.mlab.com:19736/test-user-cityspot`,
  "jwtSecret": "a secret phrase !"
}