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
  | 'height'
  | 'width'
  | 'position'
  | 'top'
  | 'left'
  | 'right'
  | 'bottom'
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
    | 'flexBasis'
  >;

export type TextStyles = CommonStyles & Pick<TextStyle, 'textAlign' | 'width'>;
