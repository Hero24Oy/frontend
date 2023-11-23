import { FC, PropsWithChildren } from 'react';

import { ImageGroup, PdfGroup } from './components';

import { AttachmentType } from '$atoms/Attachment';

export const AttachmentGroupMapper: Record<
  AttachmentType,
  FC<PropsWithChildren>
> = {
  [AttachmentType.PDF]: PdfGroup,
  [AttachmentType.IMAGE]: ImageGroup,
};
