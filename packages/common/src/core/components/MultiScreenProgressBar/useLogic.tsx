import get from 'lodash/get';
import isEqual from 'lodash/isEqual';
import { useMemo } from 'react';

import { JsxElement, ProgressBar } from '@hero24/ui';

import { MultiScreenProgressBarProps } from './types';

import { ScreensForms } from '$core/store';
import { computePercentageFraction } from '$core/utils';

type ReturnValue = {
  progressBars: JsxElement[];
};

export const useLogic = <Forms extends ScreensForms>(
  params: MultiScreenProgressBarProps<Forms>,
): ReturnValue => {
  const { initialStoreState, currentStoreValue } = params;

  const progressBars = useMemo(() => {
    const storeEntries = Object.entries(currentStoreValue);

    // Filtering methods for setting fields value from the store
    const screenFormValuesEntries = storeEntries.filter(
      ([storeScreenName]) => !storeScreenName.startsWith('set'),
    );

    return screenFormValuesEntries.map(
      ([storeScreenName, storeScreenFields], index) => {
        const fields = Object.entries(storeScreenFields);

        const changedFields = fields.filter(([fieldKey, fieldValue]) => {
          const fieldInitialValue = get(initialStoreState, [
            storeScreenName,
            fieldKey,
          ]);

          return !isEqual(fieldInitialValue, fieldValue);
        });

        const progressBarValue = computePercentageFraction(
          changedFields.length,
          fields.length,
        );

        return <ProgressBar value={progressBarValue} key={index} />;
      },
    );
  }, [currentStoreValue]);

  return { progressBars };
};
