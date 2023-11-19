export const formatValue = (value: string | undefined) => {
  if (!value) {
    return '';
  }

  return value.length === 1 ? '0'.concat(value) : value;
};
