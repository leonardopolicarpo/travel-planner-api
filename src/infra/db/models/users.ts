import { DataTypes, Model, Sequelize } from 'sequelize';
import { UserModel } from '../../../domain/models';

export class UsersEntity extends Model<UserModel, {}> implements UserModel {
  public id!: string;
  public user_name!: string;
  public email!: string;
  public password!: string;
  public access_token!: string;
}

export const initUsersModel = (sequelize: Sequelize) => {
  UsersEntity.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      user_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      access_token: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: 'users',
      timestamps: true,
    }
  );
};
