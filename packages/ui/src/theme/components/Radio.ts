import { Selectors } from 'types';

export const Radio = {
  theme: {
    borderColor: '$grayLightInput',
    borderWidth: 1,
    borderRadius: 8,
    gap: 4,
    _text: {
      textAlign: 'center',
      color: '$dark',
      fontFamily: '$main',
      fontSize: '$small',
      fontWeight: '$normal',
      paddingHorizontal: 12,
      paddingVertical: 8,
      lineHeight: '$default',
    },
    [Selectors.CHECKED]: {
      backgroundColor: '$red',
      borderColor: '$transparent',
      _text: {
        color: '$white',
      },
    },
  },
  componentConfig: { descendantStyle: ['_text'] },
};
