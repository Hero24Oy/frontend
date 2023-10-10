import { ConfigContext, ExpoConfig } from 'expo/config';

const customConfig = {
  name: 'Hero24',
  slug: 'app-hero',
  currentFullName: '@hero24/hero24-hero',
  originalFullName: '@hero24/hero24-hero',
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
    bundleIdentifier: 'com.hero24.hero',
  },
  android: {
    package: 'com.hero24.hero',
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
      projectId: 'd1e90bd7-0018-4cc5-baca-5d55a16d069b',
    },
    router: {
      origin: false,
    },
  },
  experiments: {
    typedRoutes: true,
    tsconfigPaths: true,
  },
  scheme: `fb${process.env.FACEBOOK_APP_ID}`, // * fb* is Facebook App ID, used for redirecting on android
  plugins: ['expo-router', 'expo-apple-authentication'],
} satisfies Partial<ExpoConfig>;

export default ({ config }: ConfigContext): ExpoConfig => {
  return {
    ...config,
    ...customConfig,
  };
};
