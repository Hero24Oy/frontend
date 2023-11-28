import { FC } from 'react';

import { AttachmentMapper } from './constants';
import { AttachmentProps } from './types';

export const Attachment: FC<AttachmentProps> = (props) => {
  const { file, type, ...restProps } = props;

  const Component = AttachmentMapper[type];

  return <Component {...file} {...restProps} />;
};

export * from './types';
