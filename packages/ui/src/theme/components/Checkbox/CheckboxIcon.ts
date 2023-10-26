import { config } from '@gluestack-ui/config';
import merge from 'lodash/merge';
import { Color } from 'theme/constants/colors';

const checkboxIconConfig = config.components.CheckboxIcon;

const customStyles = {
  theme: {
    tintColor: Color.RED_LIGHT,
    color: Color.RED_LIGHT,
  },
};

// TODO this need to be included in provider
export const CheckboxIcon = merge(checkboxIconConfig, customStyles);
