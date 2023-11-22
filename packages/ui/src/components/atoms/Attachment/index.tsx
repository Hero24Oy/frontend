import { FC } from 'react';

import { AttachmentImage, AttachmentPdf } from './components';
import { AttachmentProps, AttachmentType } from './types';

export const Attachment: FC<AttachmentProps> = (props) => {
  const { file, type, ...restProps } = props;

  const isPdfFile = type === AttachmentType.PDF;

  if (isPdfFile) {
    return <AttachmentPdf {...file} {...restProps} />;
  }

  return <AttachmentImage {...file} {...restProps} />;
};

export * from './types';
