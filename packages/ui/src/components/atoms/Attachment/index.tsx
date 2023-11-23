import { FC } from 'react';

import { AttachmentComponents } from './constants';
import { AttachmentProps } from './types';

export const Attachment: FC<AttachmentProps> = (props) => {
  const { file, type, ...restProps } = props;

  const Component = AttachmentComponents[type];

  return <Component {...file} {...restProps} />;
};

export * from './types';
