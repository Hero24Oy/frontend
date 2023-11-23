import { TextProps as ReactNativeTextProps } from 'react-native';

export enum TextVariant {
  REGULAR = 'regular',
  MEDIUM = 'medium',
  SMALL = 'small',
  DESCRIPTOR = 'descriptor',
  LINK = 'link',
}

export type TextLimitedProps = Pick<
  ReactNativeTextProps,
  'numberOfLines' | 'ellipsizeMode'
>;
