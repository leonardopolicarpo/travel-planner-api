import { Sequelize } from 'sequelize';
import { initTripModel, TripEntity } from './trip';

// Função para conectar ao banco e inicializar os modelos
export const initDatabase = async (sequelize: Sequelize) => {
  initTripModel(sequelize); // Inicializa o modelo TripEntity

  // Sincroniza os modelos com o banco
  await sequelize.sync({ alter: true });

  console.log('Database & tables synchronized!');
};

// Exportamos o modelo para ser usado em repositórios
export { TripEntity };
