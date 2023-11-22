import { FC } from 'react';

import { AttachmentImage, AttachmentPdf } from './components';
import { AttachmentMime, AttachmentProps } from './types';

export const Attachment: FC<AttachmentProps> = (props) => {
  const { file, mime, ...restProps } = props;

  const isPdfFile = mime === AttachmentMime.PDF;

  if (isPdfFile) {
    return <AttachmentPdf {...file} {...restProps} />;
  }

  return <AttachmentImage {...file} {...restProps} />;
};

export * from './types';
