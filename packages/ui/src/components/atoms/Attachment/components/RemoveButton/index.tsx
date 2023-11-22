import { FC } from 'react';
import { PressableProps } from 'react-native';

import { GluestackIconButtonProps, IconButton } from '$atoms/IconButton';
import { DeleteIcon } from '$icons';

type Props = Pick<PressableProps, 'onPress'> &
  Pick<GluestackIconButtonProps, 'style'>;

export const RemoveButton: FC<Props> = (props) => {
  return <IconButton size="sm" icon={DeleteIcon} {...props} />;
};
