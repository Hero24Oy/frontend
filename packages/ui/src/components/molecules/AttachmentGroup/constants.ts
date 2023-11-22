import { ImageGroup, PdfGroup } from './components';

import { AttachmentMime } from '$atoms/Attachment';

export const MimeComponents = {
  [AttachmentMime.PDF]: PdfGroup,
  [AttachmentMime.IMAGE]: ImageGroup,
};
