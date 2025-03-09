import type { CreateUserModel } from '../models';

export interface CreateUser {
  create(tripData: CreateUserModel): Promise<void>
}