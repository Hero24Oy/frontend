import {
  ANDROID_CLIENT_ID,
  API_URL,
  EXPO_CLIENT_ID,
  FACEBOOK_APP_ID,
  FIREBASE_API_KEY,
  FIREBASE_AUTH_DOMAIN,
  FIREBASE_DATABASE_URL,
  FIREBASE_FUNCTIONS_URL,
  FIREBASE_MESSAGING_SENDER_ID,
  FIREBASE_PROJECT_ID,
  FIREBASE_STORAGE_BUCKET,
  IOS_CLIENT_ID,
  IS_DEBUG_MODE,
  NODE_ENV,
  WEB_CLIENT_ID,
} from '@env';
import { boolean, mixed, object, string } from 'yup';

import { NodeEnv } from './constants';

const schema = object({
  // * Firebase
  FIREBASE_API_KEY: string().required(),
  FIREBASE_AUTH_DOMAIN: string().required(),
  FIREBASE_DATABASE_URL: string().required(),
  FIREBASE_FUNCTIONS_URL: string().required(),
  FIREBASE_MESSAGING_SENDER_ID: string().required(),
  FIREBASE_PROJECT_ID: string().required(),
  FIREBASE_STORAGE_BUCKET: string().required(),

  // * Server
  API_URL: string().required(),

  // * Facebook
  FACEBOOK_APP_ID: string().required(),

  // * Google
  ANDROID_CLIENT_ID: string().required(),
  IOS_CLIENT_ID: string().required(),
  WEB_CLIENT_ID: string().required(),

  // * Other
  EXPO_CLIENT_ID: string().required(),
  NODE_ENV: mixed<NodeEnv>().oneOf(Object.values(NodeEnv)).required(),
  IS_DEBUG_MODE: boolean().default(false),
});

export const envVariables = schema.validateSync({
  FIREBASE_API_KEY,
  FIREBASE_AUTH_DOMAIN,
  FIREBASE_DATABASE_URL,
  FIREBASE_FUNCTIONS_URL,
  FIREBASE_MESSAGING_SENDER_ID,
  FIREBASE_PROJECT_ID,
  FIREBASE_STORAGE_BUCKET,
  NODE_ENV,
  ANDROID_CLIENT_ID,
  API_URL,
  EXPO_CLIENT_ID,
  FACEBOOK_APP_ID,
  IOS_CLIENT_ID,
  IS_DEBUG_MODE,
  WEB_CLIENT_ID,
});
