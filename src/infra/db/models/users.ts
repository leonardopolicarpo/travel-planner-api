import {
  DataTypes,
  Model,
  type Sequelize
} from 'sequelize';

import type { UserModel } from '../../../domain/models';

export class UsersEntity extends Model<UserModel, {}> implements UserModel {
  public id!: string;
  public user_name!: string;
  public email!: string;
  public password!: string;
  public is_active!: boolean;
  public activate_token!: string;
  public access_token!: string;
  public refresh_token!: string;
  public login_attemps!: number;
  public is_locked!: boolean;
  public locked_until!: string;
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
      is_active: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      activate_token: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      access_token: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      refresh_token: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      login_attemps: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      is_locked: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      locked_until: {
        type: DataTypes.DATE,
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
