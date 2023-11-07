declare module '@env' {
  // Api
  export const API_URL: string;

  // Firebase SDK
  export const FIREBASE_PROJECT_ID: string;
  export const FIREBASE_API_KEY: string;
  export const FIREBASE_MESSAGING_SENDER_ID: string;
  export const FIREBASE_AUTH_DOMAIN: string;
  export const FIREBASE_DATABASE_URL: string;
  export const FIREBASE_STORAGE_BUCKET: string;
  export const FIREBASE_FUNCTIONS_URL: string;

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
