import { config as defaultConfig } from '@gluestack-ui/config';
import merge from 'lodash/merge';

const customCheckboxConfig = {
  theme: {
    borderRadius: 20,
  },
};

export const Checkbox = merge(
  defaultConfig.components.Checkbox,
  customCheckboxConfig,
);
