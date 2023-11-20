import { SelectedInputValues } from './types';

export const handleSelectedValues = (
  selectedValue: string[] | string,
): SelectedInputValues => {
  if (Array.isArray(selectedValue)) {
    const inputText = selectedValue[0];

    return { inputText, badgeValue: selectedValue.length - 1 };
  }

  return { inputText: selectedValue, badgeValue: 0 };
};
