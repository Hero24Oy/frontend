import { FieldValues, FormState, UseFormGetValues } from 'react-hook-form';
import { StyleSheet } from 'react-native';

import { HStack, JsxElement, ProgressBar } from '@hero24/ui';

import { useCreateProgressBar } from './useCreateProgressBar';

type Params<Type extends FieldValues> = {
  initialState: object;
  progressBarInfo: {
    formState: FormState<Type>;
    getValues: UseFormGetValues<Type>;
    progressBarIndex: number;
  };
};

type ReturnValue = {
  multiScreenProgressBar: JsxElement;
};

export const useCreateMultiProgressBar = <Type extends FieldValues>(
  params: Params<Type>,
): ReturnValue => {
  const { initialState, progressBarInfo } = params;

  const { formState, progressBarIndex, getValues } = progressBarInfo;

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

  return { multiScreenProgressBar };
};

const styles = StyleSheet.create({
  wrapper: {
    gap: 8,
  },
});
