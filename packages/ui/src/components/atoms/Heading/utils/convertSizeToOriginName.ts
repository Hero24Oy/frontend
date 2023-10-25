import { CONVERT_SIZE_TO_ORIGIN_MAPPER } from '../constants';
import { HeadingSize, OriginHeadingSize } from '../enum';

export const convertSizeToOrigin = (
  size: `${HeadingSize}`,
): OriginHeadingSize => {
  return CONVERT_SIZE_TO_ORIGIN_MAPPER[size];
};
