const instance = axios.create({
  baseURL: 'https://some-domain.com/api/',
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' }
});

interface ApiConstructorParams {
  baseUrl: string;
}

export class API {
  public baseUrl: string;
  
  constructor(options: ApiConstructorParams){
    this.baseUrl = options.baseUrl
  }
}
