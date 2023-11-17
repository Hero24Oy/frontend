import { ConfigContext, ExpoConfig } from 'expo/config';

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: 'Customer App',
  slug: 'app-customer',
  description: 'Hero24 Marketplace',
  owner: 'hero24',
  privacy: 'unlisted',
  version: '1.0.12',
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
    bundleIdentifier: 'com.hero24.customer',
    buildNumber: '1.0.12',
  },
  android: {
    package: 'com.hero24.customer',
    versionCode: 2,
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
      projectId: 'a11cea8c-80f9-49b3-a18d-174bc96a7a6a',
    },
    router: {
      origin: false,
    },
  },
  experiments: {
    typedRoutes: true,
    tsconfigPaths: true,
  },
  scheme: 'hero24-customer',
  plugins: [
    'expo-router',
    'expo-apple-authentication',
    [
      'expo-build-properties',
      {
        ios: {
          useFrameworks: 'static',
        },
      },
    ],
  ],
});
