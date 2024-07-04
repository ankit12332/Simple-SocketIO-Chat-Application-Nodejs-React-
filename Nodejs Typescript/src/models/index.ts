import { Sequelize } from 'sequelize';
import { initModels } from './init-models';

const sequelize = new Sequelize({
  dialect: 'mysql',
  host: '103.112.27.10',
  username: 'root',
  password: '9658523363',
  database: 'my_database1',
});

const models = initModels(sequelize);

export { sequelize, models };
export default sequelize;
