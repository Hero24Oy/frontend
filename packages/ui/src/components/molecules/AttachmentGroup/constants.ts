import { FC, PropsWithChildren } from 'react';

import { ImageGroup, PdfGroup } from './components';
import { AttachmentGroupProps } from './types';

import { AttachmentType } from '$atoms/Attachment';

export const AttachmentGroupMapper: Record<
  AttachmentType,
  FC<Pick<AttachmentGroupProps, 'numberOfColumns'> & PropsWithChildren>
> = {
  [AttachmentType.PDF]: PdfGroup,
  [AttachmentType.IMAGE]: ImageGroup,
};
