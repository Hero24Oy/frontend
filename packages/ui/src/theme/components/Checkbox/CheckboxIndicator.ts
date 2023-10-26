import { config } from '@gluestack-ui/config';
import merge from 'lodash/merge';
import { Color } from 'theme/constants/colors';

const checkboxIndicatorConfig = config.components.CheckboxIndicator;

const customStyles = {
  theme: {
    marginRight: 5,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: Color.GREY_LIGHT,
    ':focus': {
      borderColor: Color.RED_LIGHT,
      backgroundColor: Color.RED_LIGHT,
    },
    ':hover': {
      borderColor: Color.RED_LIGHT,
    },
    ':checked': {
      borderColor: Color.RED_LIGHT,
      backgroundColor: Color.RED_LIGHT,
    },
    ':active': {
      ':checked': {
        backgroundColor: Color.RED_DARK,
        borderColor: Color.RED_DARK,
      },
    },
  },
};

// TODO this need to be included in provider
export const CheckboxIndicator = merge(checkboxIndicatorConfig, customStyles);
