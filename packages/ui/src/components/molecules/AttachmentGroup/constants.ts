import { FC } from 'react';

import { ImageGroup, PdfGroup } from './components';
import { AttachmentGroupProps } from './types';

import { AttachmentType } from '$atoms/Attachment';
import { JsxElement } from '$types';

export const AttachmentGroupMapper: Record<
  AttachmentType,
  FC<Pick<AttachmentGroupProps, 'numberOfColumns'> & { children: JsxElement[] }>
> = {
  [AttachmentType.PDF]: PdfGroup,
  [AttachmentType.IMAGE]: ImageGroup,
};
