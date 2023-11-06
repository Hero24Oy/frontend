import { create } from 'zustand';

import { EnvConfig, EnvConfigState } from './types';

const useEnvConfigStore = create<EnvConfigState>((set) => ({
  envConfig: null,
  setEnvConfig: (envConfig: EnvConfig): void => set({ envConfig }),
}));

export const initializeEnvConfig = (config: EnvConfig): void =>
  useEnvConfigStore.getState().setEnvConfig(config);

export const useEnvConfig = (): EnvConfig => {
  const { envConfig } = useEnvConfigStore();

  if (!envConfig) {
    throw new Error('Env config is not initialized');
  }

  return envConfig;
};
