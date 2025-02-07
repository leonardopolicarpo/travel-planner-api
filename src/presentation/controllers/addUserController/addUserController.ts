import { Controller, HttpRequest, HttpResponse, Validation } from '../../protocols';
import { badRequest, created, serverError } from '../../helpers';
import { AddUser } from '../../../domain/usecases';
import { UserModel } from '../../../domain/models';

export class AddUserController implements Controller {
  private userValidation: Validation;
  private addUser: AddUser;

  constructor(
    userValidation: Validation,
    addUser: AddUser
  ) {
    this.userValidation = userValidation
    this.addUser = addUser;
  }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const error = this.userValidation.validate(httpRequest.body);
      if(error) return badRequest(error);
      
      const user = await this.addUser.create(httpRequest.body);
      return created<UserModel>(user);
    } catch (error) {
      return serverError(error as Error);
    }
  }
}