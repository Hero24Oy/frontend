import { IconSize, Sizes } from '../enums';

export const IconButton = {
  theme: {
    alignSelf: 'flex-start',
    padding: 10,
    borderRadius: 10,
    backgroundColor: '$grayLightBackground',
    _icon: {
      color: '$black',
    },
    variants: {
      size: {
        [Sizes.LARGE]: {
          _icon: {
            width: IconSize.LARGE,
            height: IconSize.LARGE,
          },
        },
        [Sizes.MEDIUM]: {
          _icon: {
            width: IconSize.MEDIUM,
            height: IconSize.MEDIUM,
          },
        },
        [Sizes.SMALL]: {
          _icon: {
            width: IconSize.SMALL,
            height: IconSize.SMALL,
          },
        },
      },
    },
  },
  componentConfig: { descendantStyle: ['_icon'] },
};
