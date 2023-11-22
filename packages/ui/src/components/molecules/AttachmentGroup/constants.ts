import { ImageGroup, PdfGroup } from './components';

import { AttachmentType } from '$atoms/Attachment';

export const MimeComponents = {
  [AttachmentType.PDF]: PdfGroup,
  [AttachmentType.IMAGE]: ImageGroup,
};
