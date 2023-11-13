type Params = (numerator: number, denominator: number) => number;

export const PERCENTAGE_CONVERSION_FACTOR = 100;

export const convertToPercentage: Params = (numerator, denominator) => {
  if (denominator === 0) {
    throw new Error('Cannot divide by 0');
  }

  return (numerator / denominator) * PERCENTAGE_CONVERSION_FACTOR;
};
