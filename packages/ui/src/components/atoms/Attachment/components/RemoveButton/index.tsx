import { FC } from 'react';

import { GluestackIconButtonProps, IconButton } from '$atoms/IconButton';
import { DeleteIcon } from '$icons';

export const RemoveButton: FC<GluestackIconButtonProps> = (props) => {
  return <IconButton size="sm" icon={DeleteIcon} {...props} />;
};
