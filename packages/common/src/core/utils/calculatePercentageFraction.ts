export const calculatePercentageFraction = (
  numerator: number,
  denominator: number,
): number => {
  if (denominator === 0) {
    throw new Error('Cannot divide by 0');
  }

  // eslint-disable-next-line no-magic-numbers
  return (numerator / denominator) * 100;
};
