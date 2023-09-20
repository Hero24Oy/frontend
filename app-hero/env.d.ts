declare module '@env' {
  // Api
  export const API_URL: string;
  export const LEGACY_API_URL: string;

  // Client Ids
  export const EXPO_CLIENT_ID: string;
  export const ANDROID_CLIENT_ID: string;
  export const IOS_CLIENT_ID: string;
  export const WEB_CLIENT_ID: string;
  export const FACEBOOK_APP_ID: string;

  // Debug
  export const IS_DEBUG_MODE: 'true' | 'false';

  export const NODE_ENV: 'development' | 'production';
}
