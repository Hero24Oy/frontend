import { SelectedInputValues } from './types';

import { Maybe } from '$types';

export const handleSelectedValues = (
  selectedValue: Maybe<string[] | string>,
): SelectedInputValues => {
  if (Array.isArray(selectedValue)) {
    const inputText = selectedValue[0];

    return { inputText, badgeValue: selectedValue.length - 1 };
  }

  return { inputText: selectedValue ?? 'Not selected', badgeValue: 0 };
};
