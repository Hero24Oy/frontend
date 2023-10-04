import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';

// * This should be here, not in core
// * It could be because of ssr, so a lot of things are not available which should be in browser or mobile
/**
 *
 * @deprecated Should not be used now, as in web it's not supported
 */
export const getExpoPushTokenAsync: () => Promise<string | null> = async () => {
  const { status } = await Notifications.getPermissionsAsync();

  // only ask if permissions have not already been determined, because
  // iOS won't necessarily prompt the user a second time.

  // eslint-disable-next-line @typescript-eslint/no-unsafe-enum-comparison -- We know to check if permission is granted
  if (status !== 'granted') {
    // TODO magic string should be replaced with enum, but it produces ts errors
    // Android remote notification permissions are granted during the app
    // install, so this will only ask on iOS
    const { status: newStatus } = await Notifications.requestPermissionsAsync();

    // Stop here if the user did not grant permissions
    // eslint-disable-next-line @typescript-eslint/no-unsafe-enum-comparison -- We know to check if permission is granted
    if (newStatus !== 'granted') {
      return null;
    }
  }

  if (!Device.isDevice) {
    return null;
  }

  const token = await Notifications.getExpoPushTokenAsync();

  return token.data.replace('ExponentPushToken[', '').replace(']', '');
};
