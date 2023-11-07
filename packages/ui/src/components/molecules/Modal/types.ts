import { ComponentProps, RefObject } from 'react';

import { Header } from '../Header';

import { Size } from '$theme';

export type ModalSize = Extract<Size, 'full'>;

export type ModalProps = {
  bodyContent: JSX.Element;
  headerProps: Pick<
    ComponentProps<typeof Header>,
    'title' | 'goBack' | 'goBackIcon'
  >;
  isOpen: boolean;
  ref: RefObject<JSX.Element>;
  footerButtons?: JSX.Element;
  size?: ModalSize;
};
