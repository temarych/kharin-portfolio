import { Credentials }              from "@typings/auth";
import { IProfile }                 from "@typings/user";
import { Query, QueryError, query } from "./query";

export interface AuthServiceConfig {
  query?: Query;
}

export type AuthServiceResponse<Data> = {
  status: number;
  data  : Data | null;
  error : string | null;
}

export class AuthService {
  public query: Query;

  constructor(config?: AuthServiceConfig) {
    this.query = config?.query ?? query;
  }

  public async getMe(): Promise<AuthServiceResponse<IProfile>> {
    try {
      const response = await this.query.get("http://localhost:3000/api/auth/me");
      return { status: response.status, data: response.data, error: null };
    } catch (error) {
      if (error instanceof QueryError) {
        return { status: error.status, error: error.data.message, data: null };
      }
      throw error;
    }
  }

  public async signIn(credentials: Credentials): Promise<AuthServiceResponse<IProfile>> {
    try {
      const response = await this.query.post("http://localhost:3000/api/auth/signin", credentials);
      return { status: response.status, data: response.data, error: null };
    } catch (error) {
      if (error instanceof QueryError) {
        return { status: error.status, error: error.data.message, data: null };
      }
      throw error;
    }
  }

  public async signOut(): Promise<AuthServiceResponse<IProfile>> {
    try {
      const response = await this.query.post("http://localhost:3000/api/auth/signout");
      return { status: response.status, data: null, error: null };
    } catch (error) {
      if (error instanceof QueryError) {
        return { status: error.status, error: error.data.message, data: null };
      }
      throw error;
    }
  }
}

export const authService = new AuthService();