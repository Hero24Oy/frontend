import { config } from '@gluestack-ui/config';
import merge from 'lodash/merge';

const alertConfig = config.components.Alert;

const customStyles = {
  theme: {
    borderRadius: 20,
  },
};

// TODO this need to be included in provider
export const Alert = merge(alertConfig, customStyles);
