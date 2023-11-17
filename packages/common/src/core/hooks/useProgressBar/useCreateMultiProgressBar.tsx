import { useState } from 'react';
import { FieldValues } from 'react-hook-form';
import { StyleSheet } from 'react-native';

import { HStack, JsxElement, ProgressBar } from '@hero24/ui';

import { CurrentProgressBar, SetCurrentProgressBar } from './types';
import { useCreateProgressBar } from './useCreateProgressBar';

type Params = {
  initialState: object;
};

type ReturnValue<Type extends FieldValues> = {
  multiScreenProgressBar: JsxElement;
  setCurrentProgressBarInfo: SetCurrentProgressBar<Type>;
};

export const useCreateMultiProgressBar = <Type extends FieldValues>(
  params: Params,
): ReturnValue<Type> => {
  const { initialState } = params;

  const [currentProgressBarInfo, setCurrentProgressBarInfo] = useState<
    CurrentProgressBar<Type>
  >({
    progressBarIndex: 0,
    getValues: null,
    formState: null,
  });

  const { formState, progressBarIndex, getValues } = currentProgressBarInfo;

  const currentProgressBar = useCreateProgressBar({
    key: progressBarIndex,
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
