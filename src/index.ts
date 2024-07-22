import Config from "./config/config";
import EvolutionSDK from "./services/evolutionSdk";
import Endpoints from "./constants/endpoints";
import { IConfig, IEvolutionSDK } from "./interfaces";

export { Config, EvolutionSDK, Endpoints };
export type { IConfig, IEvolutionSDK };

export function createSdk(url: string, apiKey: string): IEvolutionSDK {
  const config = new Config();
  config.setUrl(url);
  config.setApiKey(apiKey);
  return new EvolutionSDK(config);
}
