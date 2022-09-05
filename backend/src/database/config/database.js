/* eslint-disable no-undef */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const dotenv = require('dotenv');
dotenv.config();

const dbConfig = {
  username: process.env.DB_USER || 'manupilation',
  password: process.env.DB_PASS || 'manupass',
  database: process.env.DB_NAME || 'payments-control',
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT,
  dialect: 'mysql',
  dialectOptions: {
    timezone: 'Z',
  },
  logging: false,
};

module.exports = dbConfig;
