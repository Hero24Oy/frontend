export const isFalsy = (value: unknown): boolean => {
  if (typeof value === 'object' && value !== null) {
    const isObjectEmpty = Array.isArray(value)
      ? !value.length
      : !Object.keys(value).length;

    return isObjectEmpty;
  }

  return !value;
};
