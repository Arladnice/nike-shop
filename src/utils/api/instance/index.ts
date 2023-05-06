import type { AxiosInstance } from 'axios';
import axios from 'axios';

interface ApiConstructorParams {
  baseUrl: string;
}

export class API {
  public baseUrl: string;

  public request: AxiosInstance;

  constructor(options: ApiConstructorParams) {
    this.baseUrl = options.baseUrl;

    this.request = axios.create({
      baseURL: options.baseUrl,
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        authorization: `bearer ${process.env.STRAPI_API_TOKEN}`
      },
      timeout: 1000
    });
  }
}

export const strapiApi = new API({ baseUrl: 'http://127.0.0.1:1337/api' });
