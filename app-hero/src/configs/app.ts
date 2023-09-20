import { envVariables } from './env';

export const appConfig = {
  isDebugMode: envVariables.IS_DEBUG_MODE,
  nodeEnv: envVariables.NODE_ENV,
};
