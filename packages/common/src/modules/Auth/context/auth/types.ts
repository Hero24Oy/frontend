export type AuthConfig = {
  androidClientId: string;
  iosClientId: string;
  webClientId: string;
};

export type EnvConfigState = {
  authConfig: AuthConfig | null;
  setAuthConfig: (config: AuthConfig) => void;
};
