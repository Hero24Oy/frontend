import { FC } from 'react';

import { AttachmentProps, AttachmentType, FileType } from './types';

import { ImageAttachment, PdfAttachment } from '$atoms/Attachment/components';

export const AttachmentMapper: Record<
  AttachmentType,
  FC<Omit<AttachmentProps, 'file' | 'type'> & FileType>
> = {
  [AttachmentType.PDF]: PdfAttachment,
  [AttachmentType.IMAGE]: ImageAttachment,
};
