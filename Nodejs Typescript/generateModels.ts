import SequelizeAuto from 'sequelize-auto';
import path from 'path';

const auto = new SequelizeAuto('my_database1', 'root', '9658523363', {
  host: '103.112.27.10',
  dialect: 'mysql',
  directory: path.resolve(__dirname, 'src/models'), // where to write files
  port: 3306, // Ensure the port is a number
  additional: {
    timestamps: false
  },
  lang: 'ts',
  singularize: false, // Add the missing properties
  useDefine: false
});

async function generateModels() {
  try {
    await auto.run();
    console.log('Models generated successfully.');
  } catch (err) {
    console.error('Error generating models:', err);
  }
}

generateModels();
