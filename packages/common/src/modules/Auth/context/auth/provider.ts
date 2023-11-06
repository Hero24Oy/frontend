import { authStore } from './store';
import { AuthConfig } from './types';

export const initializeAuthStore = (config: AuthConfig): void =>
  authStore.getState().setAuthConfig(config);
