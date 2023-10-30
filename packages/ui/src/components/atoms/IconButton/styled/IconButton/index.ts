import { createButton } from '@gluestack-ui/button';
import {
  ButtonGroup,
  ButtonIcon,
  ButtonSpinner,
  ButtonText,
} from '@gluestack-ui/themed';

import { Root } from './Root';

export const StyledIconButton = createButton({
  Root,
  Icon: ButtonIcon,
  Text: ButtonText,
  Group: ButtonGroup,
  Spinner: ButtonSpinner,
});

export const StyledIconButtonIcon = StyledIconButton.Icon;
