import cloneDeep from 'lodash/cloneDeep';
import isString from 'lodash/isString';
import { useMemo } from 'react';

import { RadioOption as StringifiedRadioOption } from '@hero24/ui';

import { RadioOption } from '../types';

export const useStringifiedOptions = (options: RadioOption[]) => {
  const stringifyValue = (option: RadioOption): StringifiedRadioOption => {
    if (isString(option.value)) {
      return option as StringifiedRadioOption;
    }

    const clonedOption = cloneDeep(option);

    clonedOption.value = JSON.stringify(clonedOption.value);

    return clonedOption as StringifiedRadioOption;
  };

  const stringifiedOptions = useMemo(() => options.map(stringifyValue), []);

  return { stringifiedOptions };
};
