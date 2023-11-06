import { authStore } from './store';
import { AuthConfig } from './types';

export const initializeAuthProvider = (config: AuthConfig): void =>
  authStore.getState().setAuthConfig(config);
