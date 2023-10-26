import { config } from '@gluestack-ui/config';
import merge from 'lodash/merge';

const alertIconConfig = config.components.AlertIcon;

const customStyles = {
  theme: {
    marginRight: 5,
  },
};

// TODO this need to be included in provider
export const AlertIcon = merge(alertIconConfig, customStyles);
