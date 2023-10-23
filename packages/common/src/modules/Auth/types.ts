export interface FacebookAuthConfig {
  facebookAppId: string;
}

export interface GoogleAuthConfig {
  androidClientId: string;
  iosClientId: string;
  webClientId: string;
}

export type AuthConfig = FacebookAuthConfig & GoogleAuthConfig;
