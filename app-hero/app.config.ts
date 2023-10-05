import { ConfigContext, ExpoConfig } from 'expo/config';
import merge from 'lodash/merge';

if (!process.env.FACEBOOK_APP_ID) {
  throw new Error('FACEBOOK_APP_ID is not defined');
}

// Change/add necessary fields for both the production and staging
const commonConfig: Partial<ExpoConfig> = {
  description: 'Hero24 Marketplace',
  owner: 'hero24',
  privacy: 'unlisted',
  version: '1.0.0',
  orientation: 'portrait',
  icon: './assets/images/icon.png',
  userInterfaceStyle: 'automatic',
  splash: {
    image: './assets/images/splash.png',
    resizeMode: 'contain',
    backgroundColor: '#ffffff',
  },
  assetBundlePatterns: ['**/*'],
  ios: {
    supportsTablet: true,
    usesAppleSignIn: true,
  },
  android: {
    adaptiveIcon: {
      foregroundImage: './assets/images/adaptive-icon.png',
      backgroundColor: '#ffffff',
    },
  },
  web: {
    favicon: './assets/images/favicon.png',
    bundler: 'metro',
  },
  extra: {
    eas: {
      projectId: '658691dd-bdf5-4d4e-82bb-353e8f808b10',
    },
  },
  experiments: {
    tsconfigPaths: true,
  },
  scheme: `fb${process.env.FACEBOOK_APP_ID}`, // * fb* is Facebook App ID, used for redirecting on android
  plugins: ['expo-router'],
};

// Change/add necessary fields for production
const productionConfig = {
  name: 'Hero24',
  slug: 'hero24',
  currentFullName: '@hero24/hero24',
  originalFullName: '@hero24/hero24',
  extra: {
    eas: {
      projectId: 'd1e90bd7-0018-4cc5-baca-5d55a16d069b',
    },
  },
} satisfies Partial<ExpoConfig>;

// Change/add necessary fields for staging
const stagingConfig = {
  name: 'Hero24 Hero (Development)',
  slug: 'app-hero',
  currentFullName: '@hero24/hero24-hero',
  originalFullName: '@hero24/hero24-hero',
  extra: {
    eas: {
      projectId: 'd1e90bd7-0018-4cc5-baca-5d55a16d069b',
    },
  },
  android: {
    package: 'com.hero24.hero',
  },
  ios: {
    bundleIdentifier: 'com.hero24.hero',
  },
  experiments: {
    typedRoutes: true,
  },
} satisfies Partial<ExpoConfig>;

// Common config will be extended with staging/production config
// Important: _.merge will replace arrays https://lodash.com/docs/4.17.15#merge
export default ({ config }: ConfigContext): ExpoConfig => {
  const targetConfig =
    process.env.NODE_ENV === 'production' ? productionConfig : stagingConfig;

  return {
    ...config,
    ...merge(commonConfig, targetConfig),
  };
};
