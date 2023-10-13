import { ViewStyle } from 'react-native';

// Picking these fields from component style prop only works when style will be defined inline
// it doesn't work when we pass object created with StyleSheet into style prop

// TODO implement resolver that will pick accepted fields from style object in component

export type LayoutStyles = Pick<
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
