import { ComponentProps, FC } from 'react';

import { ImageSource } from './types';

import { StyledImage } from '$components/styled';
import { LayoutStyles } from '$types';

type PickedProps = Pick<ComponentProps<typeof StyledImage>, 'size'>;

type Props = {
  source: ImageSource;
  style?: LayoutStyles;
} & PickedProps;

export const Image: FC<Props> = (props) => <StyledImage {...props} />;

export * from './types';
