import type { Sequelize } from 'sequelize';
import { TripEntity } from './trip';
import { initUsersModel, UsersEntity } from './users';

export const initDatabase = async (sequelize: Sequelize) => {
  try {
    await sequelize.authenticate();
    console.log('✅ Database connection established');

    initUsersModel(sequelize);
    // initTripModel(sequelize);

    await sequelize.sync({ alter: process.env.NODE_ENV !== 'production' });

    console.log('✅ Database and tables synchronized!');
  } catch (error) {
    console.error('❌ Error connecting to database:', error);
    process.exit(1);
  }
};

export { TripEntity, UsersEntity };
