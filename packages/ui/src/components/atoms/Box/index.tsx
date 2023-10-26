import { Box as GluestackBox } from '@gluestack-ui/themed';
import React, { ComponentProps, FC } from 'react';

type Props = ComponentProps<typeof GluestackBox>;

export const Box: FC<Props> = (props) => {
  return <GluestackBox {...props} />;
};
