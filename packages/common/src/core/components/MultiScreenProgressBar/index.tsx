import { StyleSheet } from 'react-native';

import { HStack, JsxElement } from '@hero24/ui';

import { useLogic } from './useLogic';

import { ScreensForms, Store } from '$core/store';

type Props<Forms extends ScreensForms> = {
  // eslint-disable-next-line react/no-unused-prop-types
  state: Forms;
  // eslint-disable-next-line react/no-unused-prop-types
  store: Store<Forms>;
};

export const MultiScreenProgressBar = <Forms extends ScreensForms>(
  props: Props<Forms>,
): JsxElement => {
  const { progressBarArray } = useLogic(props);

  return <HStack style={styles.wrapper}>{progressBarArray}</HStack>;
};

const styles = StyleSheet.create({
  wrapper: {
    gap: 8,
  },
});
