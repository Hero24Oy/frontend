import { FC } from 'react';

import { AttachmentImage, AttachmentPdf } from './components';
import {
  AttachmentImageProps,
  AttachmentPdfProps,
  AttachmentType,
} from './types';

export const AttachmentMapper: Record<
  AttachmentType,
  FC<AttachmentPdfProps> | FC<AttachmentImageProps>
> = {
  [AttachmentType.PDF]: AttachmentPdf,
  [AttachmentType.IMAGE]: AttachmentImage,
};
