import { AttachmentImage, AttachmentPdf } from './components';
import { AttachmentType } from './types';

export const AttachmentComponents = {
  [AttachmentType.PDF]: AttachmentPdf,
  [AttachmentType.IMAGE]: AttachmentImage,
};
