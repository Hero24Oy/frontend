import { useAuthStore } from './store';
import { AuthConfig } from './types';

export const useAuthConfig = (): AuthConfig => {
  const { authConfig } = useAuthStore();

  if (!authConfig) {
    throw new Error('Auth config is not initialized');
  }

  return authConfig;
};
