import { Sequelize, Options } from 'sequelize';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const dbConfig: Options = require('../config/database.js');

import * as dotenv from 'dotenv';

dotenv.config();

export default new Sequelize(dbConfig);
