import { FC } from 'react';

import { IconButton } from '$atoms';
import { DeleteIcon } from '$icons';

type Props = {
  onPress: () => void;
};

export const RemoveButton: FC<Props> = (props) => {
  const { onPress } = props;

  return <IconButton onPress={onPress} icon={DeleteIcon} size="md" />;
};
