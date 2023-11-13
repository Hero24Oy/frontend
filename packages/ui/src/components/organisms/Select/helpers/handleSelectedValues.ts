export const handleSelectedValues = (
  values: string[] = [''],
): { badgeValue: number; inputText: string } => {
  return {
    inputText: values[0],
    badgeValue: values.length - 1,
  };
};
