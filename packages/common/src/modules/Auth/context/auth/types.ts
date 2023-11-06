export type AuthConfig = {
  androidClientId: string;
  iosClientId: string;
  webClientId: string;
};

export type AuthStore = {
  authConfig: AuthConfig | null;
  setAuthConfig: (config: AuthConfig) => void;
};
