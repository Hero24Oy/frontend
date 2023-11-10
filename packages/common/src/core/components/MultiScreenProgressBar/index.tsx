import { StyleSheet } from 'react-native';

import { HStack, JsxElement } from '@hero24/ui';

import { useLogic } from './useLogic';

import { ScreensForms, Store } from '$common/core';

type Props<Forms extends ScreensForms> = {
  state: Forms;
  store: Store<Forms>;
};

export const MultiScreenProgressBar = <Forms extends ScreensForms>(
  props: Props<Forms>,
): JsxElement => {
  const { progressBarArray } = useLogic(props);

  return <HStack style={styles.gap}>{progressBarArray}</HStack>;
};

const styles = StyleSheet.create({
  gap: {
    gap: 8,
  },
});
