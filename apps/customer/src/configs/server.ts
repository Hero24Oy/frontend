import { envVariables } from './env';

export const serverConfig = {
  apiUrl: envVariables.API_URL,
  legacyApiUrl: envVariables.LEGACY_API_URL,
};
