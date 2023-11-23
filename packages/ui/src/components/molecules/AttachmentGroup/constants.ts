import { ImageGroup, PdfGroup } from './components';

import { AttachmentType } from '$atoms/Attachment';

export const AttachmentGroupMapper = {
  [AttachmentType.PDF]: PdfGroup,
  [AttachmentType.IMAGE]: ImageGroup,
};
