import { useState } from 'react';
import { FormState, UseFormGetValues } from 'react-hook-form';
import { StyleSheet } from 'react-native';

import { HStack, JsxElement, ProgressBar } from '@hero24/ui';

import { CurrentProgressBar, SetCurrentProgressBar } from './types';
import { useCreateProgressBar } from './useCreateProgressBar';

import { ScreenForm } from '$core/store';

type Params<Form extends ScreenForm> = {
  formState: FormState<Form>;
  getValues: UseFormGetValues<Form>;
  initialState: object;
};

type ReturnValue<Form extends ScreenForm> = {
  multiScreenProgressBar: JsxElement;
  setCurrentProgressBarInfo: SetCurrentProgressBar<Form>;
};

export const useCreateMultiProgressBar = <Form extends ScreenForm>(
  params: Params<Form>,
): ReturnValue<Form> => {
  const { initialState, formState, getValues } = params;

  const [currentProgressBarInfo, setCurrentProgressBarInfo] = useState<
    CurrentProgressBar<Form>
  >({
    currentProgressBarIndex: 0,
    currentFormState: formState,
    currentGetValueFunction: getValues,
  });

  const { currentFormState, currentProgressBarIndex, currentGetValueFunction } =
    currentProgressBarInfo;

  const currentProgressBar = useCreateProgressBar({
    formState: currentFormState,
    getValues: currentGetValueFunction,
  });

  const progressBars = Object.values(initialState).map(
    (storeEntries, index) => {
      if (index < currentProgressBarIndex) {
        return <ProgressBar value={100} key={index} />;
      }

      if (index === currentProgressBarIndex) {
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
