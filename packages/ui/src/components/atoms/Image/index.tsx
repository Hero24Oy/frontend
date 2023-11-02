import { ComponentProps, FC } from 'react';

import { StyledImage } from '$components/styled';
import { CommonStyles } from '$types';

type PickedProps = Pick<ComponentProps<typeof StyledImage>, 'size'>;

type Props = {
  source: string;
  styles?: CommonStyles;
} & PickedProps;

export const Image: FC<Props> = (props) => <StyledImage {...props} />;
