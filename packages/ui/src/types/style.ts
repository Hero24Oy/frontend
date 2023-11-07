import { TextStyle, ViewStyle } from 'react-native';

export type CommonStyles = Pick<
  ViewStyle,
  | 'margin'
  | 'marginTop'
  | 'marginRight'
  | 'marginBottom'
  | 'marginLeft'
  | 'marginHorizontal'
  | 'marginVertical'
>;

export type LayoutStyles = CommonStyles &
  Pick<
    ViewStyle,
    | 'width'
    | 'height'
    | 'justifyContent'
    | 'alignItems'
    | 'flex'
    | 'gap'
    | 'flexDirection'
  >;

export type TextStyles = CommonStyles & Pick<TextStyle, 'textAlign' | 'width'>;
