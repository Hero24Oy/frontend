import { ComponentProps, FC } from 'react';

import { StyledImage } from '$components/styled';
import { LayoutStyles } from '$types';

type PickedProps = Pick<ComponentProps<typeof StyledImage>, 'size'>;

type Props = {
  source: number;
  style?: LayoutStyles;
} & PickedProps;

export const Image: FC<Props> = (props) => <StyledImage {...props} />;
