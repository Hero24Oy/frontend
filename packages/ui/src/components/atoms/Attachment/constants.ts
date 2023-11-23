import { AttachmentImage, AttachmentPdf } from './components';
import { AttachmentType } from './types';

export const AttachmentMapper = {
  [AttachmentType.PDF]: AttachmentPdf,
  [AttachmentType.IMAGE]: AttachmentImage,
};
