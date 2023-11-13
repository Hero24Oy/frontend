import get from 'lodash/get';
import isEqual from 'lodash/isEqual';
import { useMemo } from 'react';

import { JsxElement, ProgressBar } from '@hero24/ui';

import { ScreensForms, Store } from '$core/store';
import { convertToPercentage } from '$core/utils';

type Props<Forms extends ScreensForms> = {
  currentStoreValue: Store<Forms>;
  initialStoreState: Forms;
};

type ReturnValue = {
  progressBars: JsxElement[];
};

export const useLogic = <Forms extends ScreensForms>(
  params: Props<Forms>,
): ReturnValue => {
  const { initialStoreState, currentStoreValue } = params;

  const progressBars = useMemo(() => {
    const storeArray = Object.entries(currentStoreValue);

    // Filtering methods for setting fields from the stored value
    const storeScreenFieldsArray = storeArray.filter(
      ([storeScreenName]) => !storeScreenName.startsWith('set'),
    );

    return storeScreenFieldsArray.map(
      ([storeScreenName, storeScreenFields], index) => {
        const fields = Object.entries(storeScreenFields);

        const changedFieldsCount = fields.filter(([fieldKey, fieldValue]) => {
          const fieldInitialValue = get(initialStoreState, [
            storeScreenName,
            fieldKey,
          ]);

          return !isEqual(fieldInitialValue, fieldValue);
        });

        const progressValue = convertToPercentage(
          changedFieldsCount.length,
          fields.length,
        );

        return <ProgressBar value={progressValue} key={index} />;
      },
    );
  }, [currentStoreValue]);

  return { progressBars };
};
