import { parseISO } from 'date-fns';

import { DATE_TIME } from '../constants';
import { DateForm } from '../types';

import { formatValue } from './formatValue';

export const parseDate = (date: DateForm) => {
  const { day, month, year } = date;

  const formattedDay = formatValue(day);
  const formattedMonth = formatValue(month);

  return parseISO(`${year}-${formattedMonth}-${formattedDay}${DATE_TIME}`);
};
