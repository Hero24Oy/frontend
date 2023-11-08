import { create } from 'zustand';

export type AuthConfig = {
  androidClientId: string;
  iosClientId: string;
  webClientId: string;
};

export type AuthStore = {
  authConfig: AuthConfig | null;
  setAuthConfig: (config: AuthConfig) => void;
};

const useStore = create<AuthStore>((set) => ({
  authConfig: null,
  setAuthConfig: (authConfig: AuthConfig): void => set({ authConfig }),
}));

export const initializeAuthStore = (config: AuthConfig): void =>
  useStore.getState().setAuthConfig(config);

export const useAuthConfig = (): AuthConfig => {
  const { authConfig } = useStore();

  if (!authConfig) {
    throw new Error('Auth config is not initialized');
  }

  return authConfig;
};
