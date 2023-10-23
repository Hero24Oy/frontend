import { ConfigContext, ExpoConfig } from 'expo/config';

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: 'Hero24',
  slug: 'app-customer',
  description: 'Hero24 Marketplace',
  owner: 'hero24',
  privacy: 'unlisted',
  version: '1.0.0',
  orientation: 'portrait',
  icon: './assets/images/icon.png',
  userInterfaceStyle: 'automatic',
  splash: {
    backgroundColor: '#ea4435',
    resizeMode: 'contain',
    image: './assets/images/logo-splash.png',
  },
  assetBundlePatterns: ['**/*'],
  ios: {
    supportsTablet: true,
    usesAppleSignIn: true,
    bundleIdentifier: 'com.hero24.customer',
  },
  android: {
    package: 'com.hero24.customer',
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
  scheme: 'hero24-customer',
  plugins: ['expo-router', 'expo-apple-authentication'],
});
