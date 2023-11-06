import { useAuthStore } from './provider';
import { AuthConfig } from './types';

export const initializeAuthStore = (config: AuthConfig): void =>
  useAuthStore.getState().setAuthConfig(config);
