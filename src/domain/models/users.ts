export interface UserModel {
  id: string,
  user_name: string;
  email: string;
  password: string;
  access_token: string;
}

export interface CreateUserModel {
  destination: string,
  user_name: string;
  email: string;
  password: string;
  access_token: string;
}