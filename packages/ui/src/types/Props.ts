import { ViewStyle } from 'react-native';

// Picking these fields from component style prop only works when style will be defined inline
// it doesn't work when we pass object created with StyleSheet into style prop

// TODO implement resolver that will pick accepted fields from style object in component
export type CommonStyles = Pick<
  ViewStyle,
  | 'margin'
  | 'marginTop'
  | 'marginRight'
  | 'marginBottom'
  | 'marginLeft'
  | 'marginHorizontal'
  | 'marginVertical'
  | 'zIndex'
>;

export type Size = 'lg' | 'md' | 'sm';

export type LayoutStyles = CommonStyles &
  Pick<ViewStyle, 'justifyContent' | 'alignItems' | 'flex' | 'gap'>;
