import cloneDeep from 'lodash/cloneDeep';
import isString from 'lodash/isString';
import { useMemo } from 'react';

import { BlankRadioOption } from '@hero24/ui';

import { RadioOption } from '../types';

export const useStringifiedOptions = (options: RadioOption[]) => {
  const stringifyValue = (option: RadioOption): BlankRadioOption => {
    if (isString(option.value)) {
      return option as BlankRadioOption;
    }

    const clonedOption = cloneDeep(option);

    clonedOption.value = JSON.stringify(clonedOption.value);

    return clonedOption as BlankRadioOption;
  };

  const stringifiedOptions = useMemo(() => options.map(stringifyValue), []);

  return { stringifiedOptions };
};
