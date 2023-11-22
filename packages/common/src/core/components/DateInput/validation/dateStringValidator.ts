import { isPast, isValid, parse } from 'date-fns';
import { zonedTimeToUtc } from 'date-fns-tz';

import { DATE_PARSE_LOCALE } from '../constants';

export const dateStringValidator =
  (dateMask: string) => (value: string | undefined) => {
    if (!value) {
      return false;
    }

    const parsedDate = zonedTimeToUtc(
      parse(value, dateMask, new Date()),
      DATE_PARSE_LOCALE,
    );

    return isValid(parsedDate) && isPast(parsedDate);
  };
