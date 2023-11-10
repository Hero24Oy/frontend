import { ScreensForms, Store } from 'core/store';
import { PERCENTAGE_CONVERSION_FACTOR } from 'core/utils';
import get from 'lodash/get';
import isEqual from 'lodash/isEqual';
import { useMemo } from 'react';

import { JsxElement, ProgressBar } from '@hero24/ui';

type Props<Forms extends ScreensForms> = {
  state: Forms;
  store: Store<Forms>;
};

type ReturnValue = {
  progressBarArray: JsxElement[];
};

export const useLogic = <Forms extends ScreensForms>(
  props: Props<Forms>,
): ReturnValue => {
  const { state, store } = props;

  const progressBarArray = useMemo(() => {
    const screens = Object.entries(store);

    return screens
      .filter(([screenKey]) => !screenKey.startsWith('set'))
      .map(([screenKey, screenValue], index) => {
        const fields = Object.entries(screenValue);

        const completedProgress = fields.filter(([fieldKey, fieldValue]) => {
          return !isEqual(get(state, [screenKey, fieldKey]), fieldValue);
        });

        const progressFilling =
          (completedProgress.length / fields.length) *
          PERCENTAGE_CONVERSION_FACTOR;

        return <ProgressBar value={progressFilling} key={index} />;
      });
  }, [store]);

  return { progressBarArray };
};
