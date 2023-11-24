import { FC } from 'react';

import {
  AttachmentImageProps,
  AttachmentPdfProps,
  AttachmentType,
} from './types';

import { AttachmentImage, AttachmentPdf } from '$atoms/Attachment/components';

export const AttachmentMapper: Record<
  AttachmentType,
  FC<AttachmentPdfProps> | FC<AttachmentImageProps>
> = {
  [AttachmentType.PDF]: AttachmentPdf,
  [AttachmentType.IMAGE]: AttachmentImage,
};
