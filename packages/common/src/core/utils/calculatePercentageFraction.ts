export const calculatePercentageFraction = (
  numerator: number,
  denominator: number,
): number => {
  if (denominator === 0) {
    throw new Error('Cannot divide by 0');
  }

  // eslint-disable-next-line no-magic-numbers -- We don't need constant here
  return (numerator / denominator) * 100;
};
