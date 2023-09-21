import { envVariables } from './env';

export const authConfig = {
  expoClientId: envVariables.EXPO_CLIENT_ID,
  androidClientId: envVariables.ANDROID_CLIENT_ID,
  iosClientId: envVariables.IOS_CLIENT_ID,
  webClientId: envVariables.WEB_CLIENT_ID,
  facebookAppId: envVariables.FACEBOOK_APP_ID,
};
