import { IRepo, IUser, IUsersRes } from "@/interfaces/github";

class Api {
  private baseURL = "http://127.0.0.1/api";

  static async get<T = any>(url: string): Promise<T> {
    const res = await fetch(url, {
      method: "GET",
    });
    const data = await res.json();
    return data;
  }

  static async getUsers() {
    return await this.get<IUsersRes>(`${this.prototype.baseURL}/users`);
  }

  static async getDetails(username: string) {
    return await this.get<IUser>(
      `${this.prototype.baseURL}/users/${username}/details`
    );
  }

  static async getRepos(username: string) {
    return await this.get<Array<IRepo>>(
      `${this.prototype.baseURL}/users/${username}/repos`
    );
  }
}

export default Api;
