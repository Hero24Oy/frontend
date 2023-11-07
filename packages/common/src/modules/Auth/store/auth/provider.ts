import { create } from 'zustand';

import { AuthConfig, AuthStore } from './types';

export const useAuthStore = create<AuthStore>((set) => ({
  authConfig: null,
  setAuthConfig: (authConfig: AuthConfig): void => set({ authConfig }),
}));
