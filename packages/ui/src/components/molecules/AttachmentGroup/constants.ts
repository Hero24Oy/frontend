import { ImageAttachmentGroup, PdfAttachmentGroup } from './components';
import { AttachmentGroupMapperType } from './types';

import { AttachmentType } from '$atoms/Attachment';

export const attachmentGroupMapper = {
  [AttachmentType.PDF]: PdfAttachmentGroup,
  [AttachmentType.IMAGE]: ImageAttachmentGroup,
} satisfies AttachmentGroupMapperType;
