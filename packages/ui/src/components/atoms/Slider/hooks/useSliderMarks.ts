import { MarkItems, MarksBasedProps, ValuesBasedProps } from '../types';
import { getMarksFromRange } from '../utils/getMarksFromRange';

type Props = Partial<Pick<MarksBasedProps, 'marks'>> &
  Partial<Omit<ValuesBasedProps, 'marks'>>;

export const useSliderMarks = (props: Props): MarkItems => {
  const { maxValue, minValue, step, marks } = props;

  if (marks) {
    return marks;
  }

  if (maxValue !== undefined && minValue !== undefined && step !== undefined) {
    return getMarksFromRange({ minValue, maxValue, step });
  }

  return [];
};
