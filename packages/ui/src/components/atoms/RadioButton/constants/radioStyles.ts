import { Colors } from 'configs';
import { Selectors } from 'types';

import { RadioStyles } from '../types';

export const radioStyles: RadioStyles = {
  sx: {
    borderColor: Colors.GRAY_LIGHT_INPUT,
    _text: {
      color: Colors.DARK,
    },
    [Selectors.CHECKED]: {
      backgroundColor: Colors.RED,
      borderColor: Colors.TRANSPARENT,
      _text: {
        color: Colors.WHITE,
      },
    },
  },
};
