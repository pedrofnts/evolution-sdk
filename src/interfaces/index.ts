export interface IConfig {
  getUrl(): string;
  getApiKey(): string;
  setUrl(url: string): void;
  setApiKey(apiKey: string): void;
}

export interface IEvolutionSDK {
  create(instance: string, qrcode?: boolean): Promise<any>;
  sendMessage(
    instance: string,
    number: string,
    message: string,
    options?: any
  ): Promise<any>;
  connect(instance: string): Promise<any>;
  instanceStatus(instance: string): Promise<any>;
}

export interface IAxiosInstance {
  post(url: string, data?: any): Promise<any>;
  get(url: string): Promise<any>;
}
