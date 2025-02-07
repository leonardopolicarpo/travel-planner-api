import { Sequelize } from 'sequelize';
import { initTripModel, TripEntity } from './trip';
import { initUsersModel, UsersEntity } from './users';

export const initDatabase = async (sequelize: Sequelize) => {
  try {
    await sequelize.authenticate();
    console.log('✅ Conexão com o banco de dados estabelecida.');

    initUsersModel(sequelize);
    initTripModel(sequelize);

    await sequelize.sync({ alter: process.env.NODE_ENV !== 'production' });

    console.log('✅ Database & tabelas sincronizadas!');
  } catch (error) {
    console.error('❌ Erro ao conectar ao banco de dados:', error);
    process.exit(1);
  }
};

export { TripEntity, UsersEntity };
