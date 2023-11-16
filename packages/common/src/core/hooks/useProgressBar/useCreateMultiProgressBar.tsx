import { useState } from 'react';
import { StyleSheet } from 'react-native';

import { HStack, JsxElement, ProgressBar } from '@hero24/ui';

import { CurrentProgressBar, SetCurrentProgressBar } from './types';
import { useCreateProgressBar } from './useCreateProgressBar';

type Params = {
  initialState: object;
};

type ReturnValue = {
  multiScreenProgressBar: JsxElement;
  setCurrentProgressBarInfo: SetCurrentProgressBar;
};

export const useCreateMultiProgressBar = (params: Params): ReturnValue => {
  const { initialState } = params;

  const [currentProgressBarInfo, setCurrentProgressBarInfo] =
    useState<CurrentProgressBar>({
      progressBarIndex: 0,
      getValues: null,
      formState: null,
    });

  const { formState, progressBarIndex, getValues } = currentProgressBarInfo;

  const currentProgressBar = useCreateProgressBar({
    formState,
    getValues,
  });

  const progressBars = Object.values(initialState).map(
    (storeEntries, index) => {
      if (index < progressBarIndex) {
        return <ProgressBar value={100} key={index} />;
      }

      if (index === progressBarIndex) {
        return currentProgressBar;
      }

      return <ProgressBar value={0} key={index} />;
    },
  );

  const multiScreenProgressBar = (
    <HStack style={styles.wrapper}>{progressBars}</HStack>
  );

  return { multiScreenProgressBar, setCurrentProgressBarInfo };
};

const styles = StyleSheet.create({
  wrapper: {
    gap: 8,
  },
});
