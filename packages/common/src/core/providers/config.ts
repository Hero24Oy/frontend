import { create } from 'zustand';

export type EnvConfig = {
  ANDROID_CLIENT_ID: string;

  API_URL: string;
  // Client Ids
  EXPO_CLIENT_ID: string;
  FACEBOOK_APP_ID: string;
  FIREBASE_API_KEY: string;
  FIREBASE_AUTH_DOMAIN: string;
  FIREBASE_DATABASE_URL: string;
  FIREBASE_FUNCTIONS_URL: string;

  FIREBASE_MESSAGING_SENDER_ID: string;
  // Firebase SDK
  FIREBASE_PROJECT_ID: string;
  FIREBASE_STORAGE_BUCKET: string;
  IOS_CLIENT_ID: string;
  // Debug
  IS_DEBUG_MODE: boolean;

  NODE_ENV: 'development' | 'production';

  WEB_CLIENT_ID: string;
};

type EnvConfigState = {
  config: EnvConfig | null;
  setConfig: (config: EnvConfig) => void;
};

const useEnvConfigStore = create<EnvConfigState>((set) => ({
  config: null,
  setConfig: (config: EnvConfig): void => set({ config }),
}));

export const initializeEnvConfig = (config: EnvConfig): void =>
  useEnvConfigStore.getState().setConfig(config);

export const useEnvConfig = (): EnvConfig => {
  const { config } = useEnvConfigStore();

  if (!config) {
    throw new Error('Env config is not initialized');
  }

  return config;
};
