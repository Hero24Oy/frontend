import { parse } from 'date-fns';
import { zonedTimeToUtc } from 'date-fns-tz';

import { DATE_PARSE_LOCALE } from '../constants';

export const parseDate = (value: string, dateMask: string) =>
  zonedTimeToUtc(parse(value, dateMask, new Date()), DATE_PARSE_LOCALE);
