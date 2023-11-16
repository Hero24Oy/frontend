import { SelectedInputValues } from './types';

export const handleSelectedValues = (
  values: string[] = [''],
): SelectedInputValues => {
  return {
    inputText: values[0],
    badgeValue: values.length - 1,
  };
};
