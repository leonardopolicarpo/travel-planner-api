import { DataTypes, Model, Sequelize } from 'sequelize';
import { TripModel } from '../../../domain/models';

export class TripEntity extends Model<TripModel | Partial<TripModel>> implements TripModel {
  public id!: string;
  public destination!: string;
  public startDate!: Date;
  public endDate!: Date;
  public activities!: string[];
}

export const initTripModel = (sequelize: Sequelize) => {
  TripEntity.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      destination: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      startDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      endDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      activities: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: 'trips',
      timestamps: true,
    }
  );
};
