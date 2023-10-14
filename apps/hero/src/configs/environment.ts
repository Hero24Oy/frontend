import * as Application from 'expo-application';
import Constants, { AppOwnership } from 'expo-constants';
import * as Device from 'expo-device';
import * as Updates from 'expo-updates';

type VersionData = {
  appOwnership: AppOwnership | null;
  expoVersion: string;
  brand?: string | null;
  dev?: boolean;
  modelName?: string | null;
  nativeApplicationVersion?: string | null;
  nativeBuildVersion?: string | null;
  osName?: string | null;
  osVersion?: string | null;
  releaseChannel?: string;
};

export const environmentConfig: VersionData = {
  dev: Boolean(Constants.expoConfig?.packagerOpts?.dev),
  expoVersion: Constants.expoVersion ?? 'unknown',
  appOwnership: Constants.appOwnership,
  releaseChannel: Updates.releaseChannel,
  nativeApplicationVersion: Application.nativeApplicationVersion,
  nativeBuildVersion: Application.nativeBuildVersion,
  brand: Device.brand,
  modelName: Device.modelName,
  osName: Device.osName,
  osVersion: Device.osVersion,
};
