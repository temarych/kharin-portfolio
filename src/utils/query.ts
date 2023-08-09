export interface IQueryError {
  status : number;
  message: string;
  data   : any;
}

export class QueryError extends Error implements IQueryError {
  public status: number;
  public data  : any;

  constructor(error: IQueryError) {
    super(error.message);
    this.status = error.status;
    this.data   = error.data;
  }
}

export interface QueryRequestConfig {
  url             : string;
  method          : "GET" | "POST";
  body?           : any;
  headers?        : Headers;
  withCredentials?: boolean;
}

export type QueryGetConfig  = Omit<QueryRequestConfig, "url" | "method">;
export type QueryPostConfig = Omit<QueryRequestConfig, "url" | "method" | "body">;

export interface QueryConfig {
  headers?        : Headers;
  withCredentials?: boolean;
}

export class Query {
  public headers        : Headers;
  public withCredentials: boolean;

  constructor(config?: QueryConfig) {
    const headers = new Headers(config?.headers);
    headers.set("content-type", "application/json");
    this.headers = config?.headers ?? headers;
    this.withCredentials = config?.withCredentials ?? true;
  }

  public async request({ withCredentials, ...config }: QueryRequestConfig) {    
    const credentials = withCredentials ? "include" : "omit";
    const headers     = new Headers(this.headers);
    const body        = config.body && JSON.stringify(config.body);

    config.headers?.forEach((key, value) => headers.set(key, value));

    const response = await fetch(config.url, { ...config, credentials, headers, body });
    const status   = response.status;
    const data     = await response.json();

    if (!response.ok) {
      throw new QueryError({ status, data, message: "A query error occured" });
    }

    return { status, data };
  }

  public async get(url: string, config?: QueryGetConfig) {
    return await this.request({ ...config, url, method: "GET" });
  }

  public async post(url: string, body?: any, config?: QueryPostConfig) {
    return await this.request({ ...config, url, body, method: "POST" });
  }
}

export const query = new Query();