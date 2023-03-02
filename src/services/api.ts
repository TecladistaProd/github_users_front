import { IRepo, IUser, IUsersRes } from "@/interfaces/github";

const baseURL = "https://git-users-back.onrender.com/api";

class Api {
  static async get<T = any>(url: string): Promise<T> {
    const res = await fetch(url, {
      method: "GET",
    });
    const data = await res.json();
    return data;
  }

  static async getUsers() {
    return await this.get<IUsersRes>(`${baseURL}/users`);
  }

  static async getDetails(username: string) {
    return await this.get<IUser>(`${baseURL}/users/${username}/details`);
  }

  static async getRepos(username: string) {
    return await this.get<Array<IRepo>>(`${baseURL}/users/${username}/repos`);
  }
}

export default Api;
