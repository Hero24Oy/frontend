import { ViewStyle } from 'react-native';

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
    'justifyContent' | 'alignItems' | 'flex' | 'gap' | 'flexDirection'
  >;
