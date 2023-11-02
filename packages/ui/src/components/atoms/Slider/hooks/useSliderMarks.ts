import { MarkItems, MarksBasedProps, ValuesBasedProps } from '../types';
import { getMarksFromRange } from '../utils/getMarksFromRange';

type Params = Partial<Pick<MarksBasedProps, 'marks'>> &
  Partial<Omit<ValuesBasedProps, 'marks'>>;

export const useSliderMarks = (params: Params): MarkItems => {
  const { maxValue, minValue, step, marks } = params;

  if (marks) {
    return marks;
  }

  if (maxValue !== undefined && minValue !== undefined && step !== undefined) {
    return getMarksFromRange({ minValue, maxValue, step });
  }

  return [];
};
