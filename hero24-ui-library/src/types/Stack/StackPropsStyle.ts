import { ViewStyle } from 'react-native';

export type StackPropsStyle = Pick<
  ViewStyle,
  | 'justifyContent'
  | 'alignItems'
  | 'margin'
  | 'marginTop'
  | 'marginRight'
  | 'marginBottom'
  | 'marginLeft'
  | 'marginHorizontal'
  | 'marginVertical'
  | 'flex'
  | 'gap'
>;
