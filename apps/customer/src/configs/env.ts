import {
  ANDROID_CLIENT_ID,
  API_URL,
  EXPO_CLIENT_ID,
  FACEBOOK_APP_ID,
  IOS_CLIENT_ID,
  IS_DEBUG_MODE,
  LEGACY_API_URL,
  NODE_ENV,
  WEB_CLIENT_ID,
} from '@env';
import { boolean, mixed, object, string } from 'yup';

import { NodeEnv } from './constants';

const schema = object({
  // * Server
  API_URL: string().required(),
  LEGACY_API_URL: string().required(),

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
  NODE_ENV,
  ANDROID_CLIENT_ID,
  API_URL,
  EXPO_CLIENT_ID,
  FACEBOOK_APP_ID,
  IOS_CLIENT_ID,
  IS_DEBUG_MODE,
  LEGACY_API_URL,
  WEB_CLIENT_ID,
});
