import { config } from '@gluestack-ui/config';
import merge from 'lodash/merge';

const checkboxTheme = {
  theme: {
    borderRadius: 20,
  },
};

export const Checkbox = merge(config.components.Checkbox, checkboxTheme);
