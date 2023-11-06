import { create } from 'zustand';

import { AuthConfig, EnvConfigState } from './types';

const useAuthConfigStore = create<EnvConfigState>((set) => ({
  authConfig: null,
  setAuthConfig: (authConfig: AuthConfig): void => set({ authConfig }),
}));

export const initializeAuthConfig = (config: AuthConfig): void =>
  useAuthConfigStore.getState().setAuthConfig(config);

export const useAuthConfig = (): AuthConfig => {
  const { authConfig } = useAuthConfigStore();

  if (!authConfig) {
    throw new Error('Auth config is not initialized');
  }

  return authConfig;
};
