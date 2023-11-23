import { FC } from 'react';

import { AttachmentGroupMapper } from './constants';
import { useLogic } from './useLogic';

import { AttachmentProps, AttachmentType, FileType } from '$components/atoms';

export type Props = {
  files: FileType[];
  type: `${AttachmentType}`;
} & Pick<AttachmentProps, 'onDelete'>;

export const AttachmentGroup: FC<Props> = (props) => {
  const { type, ...restProps } = props;

  const { attachments } = useLogic({ type, ...restProps });

  const GroupComponent = AttachmentGroupMapper[type];

  return <GroupComponent>{attachments}</GroupComponent>;
};
