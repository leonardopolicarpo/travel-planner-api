export interface UserModel {
  id: string,
  user_name: string;
  email: string;
  password: string;
  access_token: string;
  is_active: boolean;
  activate_token: string;
  refresh_token: string;
  login_attemps: number;
  is_locked: boolean;
  locked_until: string;
}

export interface CreateUserModel {
  user_name: string;
  email: string;
  password: string;
  access_token: string;
  is_active: boolean;
  activate_token: string;
  refresh_token: string;
  login_attemps: number;
  is_locked: boolean;
  locked_until: string;
}