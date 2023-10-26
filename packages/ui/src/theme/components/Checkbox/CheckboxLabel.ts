import { config } from '@gluestack-ui/config';
import merge from 'lodash/merge';
import { Color } from 'theme/constants/colors';

const checkboxLabelConfig = config.components.CheckboxLabel;

const customStyles = {
  theme: {
    ':checked': {
      color: Color.DARK,
    },
    color: Color.DARK,
  },
};

// TODO this need to be included in provider
export const CheckboxLabel = merge(checkboxLabelConfig, customStyles);
