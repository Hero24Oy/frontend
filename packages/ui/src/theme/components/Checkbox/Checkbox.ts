import { config } from '@gluestack-ui/config';
import merge from 'lodash/merge';

const checkboxConfig = config.components.Checkbox;

const customStyles = {
  theme: {
    borderRadius: 20,
  },
};

// TODO this need to be included in provider
export const Checkbox = merge(checkboxConfig, customStyles);
