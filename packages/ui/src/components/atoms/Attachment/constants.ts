import { FC } from 'react';

import { AttachmentProps, AttachmentType, FileType } from './types';

import { AttachmentImage, AttachmentPdf } from '$atoms/Attachment/components';

export const AttachmentMapper: Record<
  AttachmentType,
  FC<Pick<AttachmentProps, 'onDelete' | 'widthInPercent'> & FileType>
> = {
  [AttachmentType.PDF]: AttachmentPdf,
  [AttachmentType.IMAGE]: AttachmentImage,
};
