import { StyleSheet } from 'react-native';

import { HStack, JsxElement } from '@hero24/ui';

import { useLogic } from './useLogic';

import { ScreensForms, Store } from '$core/store';

type Props<Forms extends ScreensForms> = {
  currentStoreValue: Store<Forms>;
  initialStoreState: Forms;
};

export const MultiScreenProgressBar = <Forms extends ScreensForms>(
  props: Props<Forms>,
): JsxElement => {
  const { progressBars } = useLogic(props);

  return <HStack style={styles.wrapper}>{progressBars}</HStack>;
};

const styles = StyleSheet.create({
  wrapper: {
    gap: 8,
  },
});
