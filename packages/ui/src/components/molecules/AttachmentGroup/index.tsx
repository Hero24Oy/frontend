import { FC } from 'react';

import { AttachmentGroupMapper } from './constants';
import { useLogic } from './useLogic';

import { AttachmentType, FileType } from '$components/atoms';

export type Props = {
  files: FileType[];
  onDelete: (id: number) => void;
  type: `${AttachmentType}`;
};

export const AttachmentGroup: FC<Props> = (props) => {
  const { type, ...restProps } = props;

  const { attachments } = useLogic({ type, ...restProps });

  const GroupComponent = AttachmentGroupMapper[type];

  return <GroupComponent>{attachments}</GroupComponent>;
};
