import { InterfaceUsersRepository } from '../../../../domain/repositories/IUsersRepository';
import { CreateUserModel, UserModel } from '../../../../domain/models';
import { UsersEntity } from '../../models';

export class UserRepository implements InterfaceUsersRepository {

  async createUser(userData: CreateUserModel): Promise<UserModel> {
    const user = await UsersEntity.create(userData);
    return user;
  }

  // async getAllTrips(): Promise<Trip[]> {
  //   const trips = await UserModel.findAll();
  //   return trips.map((trip) => trip.toJSON() as Trip);
  // }

  // async getTripById(id: string): Promise<Trip | null> {
  //   const trip = await UserModel.findByPk(id);
  //   return trip ? (trip.toJSON() as Trip) : null;
  // }
}