import { StyleSheet } from 'react-native';

import { HStack, JsxElement } from '@hero24/ui';

import { MultiScreenProgressBarProps } from './types';
import { useLogic } from './useLogic';

import { ScreensForms } from '$core/store';

export const MultiScreenProgressBar = <Forms extends ScreensForms>(
  props: MultiScreenProgressBarProps<Forms>,
): JsxElement => {
  const { progressBars } = useLogic(props);

  return <HStack style={styles.wrapper}>{progressBars}</HStack>;
};

const styles = StyleSheet.create({
  wrapper: {
    gap: 8,
  },
});

export * from './types';
