import get from 'lodash/get';
import isEqual from 'lodash/isEqual';
import { useMemo } from 'react';

import { JsxElement, ProgressBar } from '@hero24/ui';

import { ScreensForms, Store } from '$core/store';

type Props<Forms extends ScreensForms> = {
  state: Forms;
  store: Store<Forms>;
};

type ReturnValue = {
  progressBarArray: JsxElement[];
};

export const useLogic = <Forms extends ScreensForms>(
  params: Props<Forms>,
): ReturnValue => {
  const { state, store } = params;

  const progressBarArray = useMemo(() => {
    const storesByScreens = Object.entries(store);

    return storesByScreens
      .filter(([storeScreenName]) => !storeScreenName.startsWith('set'))
      .map(([storeScreenName, storeScreenFields], index) => {
        const fields = Object.entries(storeScreenFields);

        const fillingProgress = fields.filter(([fieldKey, fieldValue]) => {
          return !isEqual(get(state, [storeScreenName, fieldKey]), fieldValue);
        });

        // eslint-disable-next-line no-magic-numbers
        const progressValue = (fillingProgress.length / fields.length) * 100;

        return <ProgressBar value={progressValue} key={index} />;
      });
  }, [store]);

  return { progressBarArray };
};
