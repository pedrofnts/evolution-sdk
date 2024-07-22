import axios, { AxiosInstance } from "axios";
import { IConfig, IEvolutionSDK, IAxiosInstance } from "../interfaces";
import Endpoints from "../constants/endpoints";

class EvolutionSDK implements IEvolutionSDK {
  private httpClient: IAxiosInstance;

  constructor(private config: IConfig) {
    this.httpClient = axios.create({
      baseURL: config.getUrl(),
      timeout: 10000,
      headers: this.setConfigHeader(),
    }) as IAxiosInstance;
  }

  async create(instance: string, qrcode: boolean = false): Promise<any> {
    try {
      const response = await this.httpClient.post(Endpoints.CREATE, {
        instanceName: instance,
        qrcode: qrcode,
      });
      return response.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  async sendMessage(
    instance: string,
    number: string,
    message: string,
    options: any = {}
  ): Promise<any> {
    const formattedNumber = `${number}@s.whatsapp.net`;
    try {
      const response = await this.httpClient.post(
        `${Endpoints.SEND}${instance}`,
        {
          number: formattedNumber,
          textMessage: {
            text: message,
          },
          options: options,
        }
      );
      return response.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  async connect(instance: string): Promise<any> {
    try {
      const response = await this.httpClient.get(
        `${Endpoints.CONNECT}${instance}`
      );
      return response.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  async instanceStatus(instance: string): Promise<any> {
    try {
      const response = await this.httpClient.get(
        `${Endpoints.STATUS}${instance}`
      );
      return response.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  private setConfigHeader(): { apiKey: string } {
    return {
      apiKey: this.config.getApiKey(),
    };
  }

  private handleError(error: any): never {
    if (error.response) {
      console.error("Error data:", error.response.data);
      console.error("Error status:", error.response.status);
      console.error("Error headers:", error.response.headers);
    } else if (error.request) {
      console.error("Error request:", error.request);
    } else {
      console.error("Error message:", error.message);
    }
    throw error;
  }
}

export default EvolutionSDK;
