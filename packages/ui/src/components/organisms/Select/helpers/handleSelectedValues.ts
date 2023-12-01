import { NOT_SELECTED } from '../constants';

import { SelectedInputValues } from './types';

import { Maybe } from '$types';

export const handleSelectedValues = (
  selectedValue: Maybe<string[] | string>,
): SelectedInputValues => {
  if (Array.isArray(selectedValue)) {
    const inputText = selectedValue[0];

    const badgeValue = selectedValue.length ? selectedValue.length - 1 : 0;

    return { inputText: inputText || NOT_SELECTED, badgeValue };
  }

  return { inputText: selectedValue ?? NOT_SELECTED, badgeValue: 0 };
};
