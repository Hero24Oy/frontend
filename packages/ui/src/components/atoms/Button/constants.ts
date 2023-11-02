import { ViewStyle } from 'react-native';

import { ButtonAction } from './types';

import { Color, SxValues } from '$theme';

// * This was implemented due to Gluestack bug,
// * where styles don't apply to compound variant descendants.
// * Issue: https://github.com/gluestack/gluestack-style/issues/489.

// TODO remove after fixing the Gluestack bug.
export const buttonSxValue = {
  [ButtonAction.PRIMARY]: {},
  [ButtonAction.SECONDARY]: {
    ':active': {
      _text: {
        color: Color.DARK_GREY_00,
      },
      _icon: {
        props: {
          color: Color.DARK_GREY_00,
        },
      },
    },
  },
  [ButtonAction.POSITIVE]: {},
  [ButtonAction.NEGATIVE]: {},
} satisfies Record<ButtonAction, SxValues<ViewStyle>>;
