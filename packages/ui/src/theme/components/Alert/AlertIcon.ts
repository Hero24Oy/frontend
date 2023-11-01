import { config } from '@gluestack-ui/config';
import merge from 'lodash/merge';
import { ViewProps } from 'react-native';

import { IconSize } from '$theme/constants';
import { ComponentTheme } from '$theme/types';

const AlertIconTheme = {
  theme: {
    marginRight: 5,
    props: {
      size: IconSize.LG,
    },
  },
} satisfies ComponentTheme<ViewProps>;

export const AlertIcon = merge(config.components.AlertIcon, AlertIconTheme);
