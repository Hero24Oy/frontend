import { ImageAttachmentGroup, PdfAttachmentGroup } from './components';
import { AttachmentGroupType } from './types';

import { AttachmentType } from '$atoms/Attachment';

export const attachmentGroupMapper = {
  [AttachmentType.PDF]: PdfAttachmentGroup,
  [AttachmentType.IMAGE]: ImageAttachmentGroup,
} satisfies AttachmentGroupType;
