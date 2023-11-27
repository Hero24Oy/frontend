import { FC, PropsWithChildren } from 'react';

import { AttachmentProps, AttachmentType, FileType } from '$atoms';

export type AttachmentGroupProps = {
  files: FileType[];
  onDelete: (id: number) => void;
  numberOfColumns?: number;
} & Pick<AttachmentProps, 'gap' | 'externalPaddingsSum' | 'type'>;

export type AttachmentGroupType = Record<
  AttachmentType,
  FC<Pick<AttachmentGroupProps, 'gap'> & PropsWithChildren>
>;

export type UseLogicReturnType = {
  attachments: JSX.Element[];
};
