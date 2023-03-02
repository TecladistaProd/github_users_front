export interface IUser {
  login: string;
  id: number;
  avatar_url: string;
  created_at?: string;
}

export interface IUsersRes {
  users: IUser;
  nextLink: string;
}

export interface IRepo {
  id: number;
  name: string;
  html_url: string;
}
