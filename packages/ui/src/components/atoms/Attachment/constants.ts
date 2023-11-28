import { FC } from 'react';

import { ImageAttachment, PdfAttachment } from './components';
import { AttachmentProps, AttachmentType, FileType } from './types';

export const AttachmentMapper: Record<
  AttachmentType,
  FC<Omit<AttachmentProps, 'file' | 'type'> & FileType>
> = {
  [AttachmentType.PDF]: PdfAttachment,
  [AttachmentType.IMAGE]: ImageAttachment,
};
