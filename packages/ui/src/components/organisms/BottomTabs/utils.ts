import { Platform } from 'react-native';

const DEFAULT_PADDING = 21;

const IOS_BOTTOM_BAR_HEIGHT = 8;

const IOS_PADDING = DEFAULT_PADDING + IOS_BOTTOM_BAR_HEIGHT;

export const getBottomPadding = (): number =>
  Platform.OS === 'ios' ? IOS_PADDING : DEFAULT_PADDING;
