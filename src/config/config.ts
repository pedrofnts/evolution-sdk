import { IConfig } from "../interfaces";

class Config implements IConfig {
  private url: string;
  private apiKey: string;

  constructor() {
    this.url = "";
    this.apiKey = "";
  }

  getUrl(): string {
    return this.url;
  }

  getApiKey(): string {
    return this.apiKey;
  }

  setUrl(url: string): void {
    if (typeof url !== "string" || url.trim() === "") {
      throw new Error("URL must be a non-empty string");
    }
    this.url = url;
  }

  setApiKey(apiKey: string): void {
    if (typeof apiKey !== "string" || apiKey.trim() === "") {
      throw new Error("API key must be a non-empty string");
    }
    this.apiKey = apiKey;
  }
}

export default Config;
